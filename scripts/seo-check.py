#!/usr/bin/env python3
"""
Contrôle SEO du site servi en local (npm run build && npm run start).

Usage : python3 scripts/seo-check.py [http://localhost:3000]

Parcourt toutes les URL du sitemap et vérifie : statut 200, title (longueur,
doublons), meta description, canonical, nombre de H1, liens internes cassés,
nombre de mots du contenu principal et part de texte propre des pages
communes (par rapport aux autres pages communes).
"""
import json
import re
import sys
import urllib.request
from collections import defaultdict
from html.parser import HTMLParser

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
PROD = "https://www.nettoyage-gouttieres-bruxelles.be"
SKIP_TAGS = {"script", "style", "noscript", "svg", "form", "nav", "select", "button"}


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.title = ""
        self.desc = ""
        self.canonical = ""
        self.hreflang = []
        self.h1 = 0
        self.links = set()
        self.jsonld = []
        self._in_title = False
        self._main_depth = 0
        self._skip = 0
        self._in_jsonld = False
        self._buf = []
        self.main_text = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "title":
            self._in_title = True
        elif tag == "meta" and a.get("name") == "description":
            self.desc = a.get("content", "")
        elif tag == "link" and a.get("rel") == "canonical":
            self.canonical = a.get("href", "")
        elif tag == "link" and a.get("rel") == "alternate" and a.get("hreflang"):
            self.hreflang.append((a["hreflang"], a.get("href")))
        elif tag == "h1":
            self.h1 += 1
        elif tag == "a" and a.get("href"):
            self.links.add(a["href"])
        elif tag == "script" and a.get("type") == "application/ld+json":
            self._in_jsonld = True
            self._buf = []
        if tag == "main":
            self._main_depth += 1
        if self._main_depth and tag in SKIP_TAGS:
            self._skip += 1

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag == "script" and self._in_jsonld:
            self._in_jsonld = False
            try:
                self.jsonld.append(json.loads("".join(self._buf)))
            except json.JSONDecodeError:
                self.jsonld.append({"_invalid": True})
        if self._main_depth and tag in SKIP_TAGS and self._skip:
            self._skip -= 1
        if tag == "main":
            self._main_depth -= 1

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._in_jsonld:
            self._buf.append(data)
        elif self._main_depth and not self._skip:
            self.main_text.append(data)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "seo-check"})
    try:
        with urllib.request.urlopen(req) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""


def words(text):
    return re.findall(r"[a-zà-ÿœæ0-9]+(?:['’-][a-zà-ÿœæ0-9]+)*", text.lower())


def shingles(ws, n=5):
    return {" ".join(ws[i:i + n]) for i in range(len(ws) - n + 1)}


def jsonld_types(blocks):
    out = []
    for b in blocks:
        for node in b.get("@graph", [b]) if isinstance(b, dict) else []:
            t = node.get("@type")
            out.extend(t if isinstance(t, list) else [t])
    return out


def main():
    status, xml = fetch(BASE + "/sitemap.xml")
    assert status == 200, "sitemap indisponible"
    urls = [u.replace(PROD, BASE) for u in re.findall(r"<loc>(.*?)</loc>", xml)]
    pages, errors = {}, []
    for url in urls:
        status, html = fetch(url)
        path = url.replace(BASE, "") or "/"
        if status != 200:
            errors.append(f"{path}: HTTP {status}")
            continue
        p = Page()
        p.feed(html)
        p.path = path
        p.words = words(" ".join(p.main_text))
        pages[path] = p

    # Liens internes cassés
    checked = {}
    for p in pages.values():
        for href in p.links:
            if href.startswith(("tel:", "mailto:", "#", "http")) and not href.startswith(PROD):
                continue
            target = href.replace(PROD, "").split("#")[0] or "/"
            if target not in checked:
                checked[target] = fetch(BASE + target)[0]
            if checked[target] != 200:
                errors.append(f"{p.path}: lien cassé {href} ({checked[target]})")

    titles = defaultdict(list)
    for p in pages.values():
        titles[p.title.strip()].append(p.path)
    for t, ps in titles.items():
        if len(ps) > 1:
            errors.append(f"title en double « {t} » : {ps}")

    communes = {k: v for k, v in pages.items() if k.startswith("/communes/")}
    sh = {k: shingles(v.words) for k, v in communes.items()}

    print(f"{'page':58} {'mots':>5} {'T':>3} {'D':>4} H1 {'propre':>6}  types")
    for path, p in pages.items():
        own = ""
        if path in sh:
            others = set().union(*(s for k, s in sh.items() if k != path))
            own_ratio = len(sh[path] - others) / max(1, len(sh[path]))
            own = f"{own_ratio:.0%}"
            if own_ratio < 0.5:
                errors.append(f"{path}: texte propre {own_ratio:.0%} < 50 %")
        flags = []
        if len(p.title) > 60:
            flags.append("title>60")
        if len(p.desc) > 155:
            flags.append("desc>155")
        if not p.desc:
            flags.append("desc manquante")
        if p.h1 != 1:
            flags.append(f"{p.h1} H1")
        expected = PROD + (path if path != "/" else "/")
        if p.canonical.rstrip("/") != expected.rstrip("/"):
            flags.append(f"canonical={p.canonical}")
        if any(isinstance(b, dict) and b.get("_invalid") for b in p.jsonld):
            flags.append("JSON-LD invalide")
        if flags:
            errors.append(f"{path}: " + ", ".join(flags))
        types = ",".join(sorted({t for t in jsonld_types(p.jsonld) if t}))
        print(f"{path:58} {len(p.words):5} {len(p.title):3} {len(p.desc):4} {p.h1:2} {own:>6}  {types}")

    print(f"\n{len(pages)} pages, {len(checked)} cibles de liens internes vérifiées")
    if errors:
        print(f"\n{len(errors)} problème(s) :")
        for e in errors:
            print(" -", e)
        sys.exit(1)
    print("Aucun problème détecté.")


if __name__ == "__main__":
    main()
