import type { Metadata } from "next";

// Open Graph complet sur chaque page (correctifs Ahrefs du 22/11/2026) :
// og:title, og:description, og:type, og:url (= canonical de la page) et og:image.
// Une page qui définit `openGraph` remplace entièrement celui du layout : sans ce
// helper, elle perdait l'image et l'URL, ou gardait l'og:url de l'accueil.
const IMAGE_DEFAUT = [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nettoyage Gouttières Bruxelles" }];
const SITE_NAME = "Nettoyage Gouttières Bruxelles";
const HREFLANG_SEUL = null as string | null; // site en une seule langue : chaque page se cite elle-même

function texte(t: Metadata["title"]): string | undefined {
  if (!t) return undefined;
  if (typeof t === "string") return t;
  const o = t as { absolute?: string; default?: string };
  return o.absolute ?? o.default;
}

export function avecOg(m: Metadata): Metadata {
  if (!m || Object.keys(m).length === 0) return m;
  const og = { ...((m.openGraph ?? {}) as Record<string, unknown>) };
  const canon = m.alternates?.canonical;
  const url = canon ? (typeof canon === "object" && "url" in (canon as object) ? (canon as { url: string | URL }).url : canon) : og.url;
  const alternates = HREFLANG_SEUL && canon && !m.alternates?.languages
    ? { ...m.alternates, languages: { [HREFLANG_SEUL]: url as string } }
    : m.alternates;
  return {
    ...m,
    ...(alternates ? { alternates } : {}),
    openGraph: {
      siteName: SITE_NAME,
      type: "website",
      ...og,
      title: (og.title as string) ?? texte(m.title),
      description: (og.description as string) ?? m.description ?? undefined,
      ...(url ? { url: url as string } : {}),
      images: (og.images as never) ?? IMAGE_DEFAUT,
    } as Metadata["openGraph"],
  };
}
