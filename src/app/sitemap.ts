import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { communes } from "@/lib/communes";
import { guides } from "@/lib/guides";

const BASE_URL = "https://www.nettoyage-gouttieres-bruxelles.be";

/**
 * `lastmod` réel par page : date de dernière modification connue du contenu
 * (dernier commit touchant la page). À mettre à jour quand la page change —
 * jamais la date de build, qui donnerait la même date à toutes les pages.
 * Les articles de blog utilisent leur date de publication (voir plus bas).
 */
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-10-11",
  "/types-gouttieres": "2026-10-11",
  "/tarifs": "2026-10-11",
  "/faq": "2026-10-10",
  "/contact": "2026-10-04",
  "/a-propos": "2026-10-11",
  "/communes": "2026-10-04",
  "/blog": "2026-09-26",
  "/services": "2026-10-10",
  "/services/nettoyage-gouttieres": "2026-10-11",
  "/services/debouchage-gouttieres": "2026-10-11",
  "/services/reparation-gouttieres": "2026-10-11",
  "/services/demoussage-toiture": "2026-10-11",
  "/services/nettoyage-toiture": "2026-10-11",
  "/services/protection-gouttieres": "2026-10-11",
  "/services/contrat-entretien-gouttieres": "2026-10-11",
};

/** Pages commune : date propre aux communes retravaillées, défaut pour les autres. */
// Les 19 pages commune ont reçu une réponse directe sous le H1 le 2026-10-11.
const COMMUNE_LAST_MODIFIED: Record<string, string> = {};
const COMMUNE_DEFAULT_LAST_MODIFIED = "2026-10-11";

/**
 * Articles de blog : date de dernière modification réelle (même valeur que
 * dateModified du schema de chaque article), sinon date de publication.
 */
const BLOG_LAST_MODIFIED: Record<string, string> = {
  "degat-des-eaux-gouttiere-assurance-bruxelles": "2026-10-04",
  "demoussage-toiture-bruxelles-quand-comment-prix": "2026-06-09",
  "entretien-gouttieres-quand-faire": "2026-05-29",
  "gouttiere-gel-hiver-bruxelles-protection": "2026-10-04",
  "gouttiere-qui-deborde-causes-solutions": "2026-10-11",
  "infiltration-eau-facade-gouttieres": "2026-10-11",
  "orages-ete-gouttieres-bruxelles-checklist": "2026-10-04",
  "preparer-gouttieres-automne-bruxelles": "2026-05-20",
  "prix-remplacement-gouttieres-bruxelles-2026": "2026-06-05",
  "produits-nettoyage-gouttieres-bruxelles": "2026-06-05",
  "protection-gouttieres-anti-feuilles-bruxelles": "2026-10-11",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const communeSlugs = communes.map((c) => c.slug);

  const staticPages = [
    "",
    "/types-gouttieres",
    "/tarifs",
    "/faq",
    "/contact",
    "/a-propos",
    // /mentions-legales : page légale, hors sitemap (standard de la flotte).
  ];

  const communePages = ["/communes", ...communeSlugs.map((slug) => `/communes/${slug}`)];

  const servicePages = [
    "/services",
    "/services/nettoyage-gouttieres",
    "/services/debouchage-gouttieres",
    "/services/reparation-gouttieres",
    "/services/demoussage-toiture",
    "/services/nettoyage-toiture",
    "/services/protection-gouttieres",
    "/services/contrat-entretien-gouttieres",
  ];

  const nonBlogPages = [...staticPages, ...communePages, ...servicePages, "/blog"];

  const lastModifiedFor = (path: string): string => {
    if (path.startsWith("/communes/")) {
      const slug = path.slice("/communes/".length);
      return COMMUNE_LAST_MODIFIED[slug] ?? COMMUNE_DEFAULT_LAST_MODIFIED;
    }
    return LAST_MODIFIED[path] ?? COMMUNE_DEFAULT_LAST_MODIFIED;
  };

  const nonBlogEntries = nonBlogPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(lastModifiedFor(path)),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority:
      path === ""
        ? 1.0
        : path.startsWith("/communes")
        ? 0.8
        : servicePages.includes(path)
        ? 0.9
        : path === "/blog"
        ? 0.7
        : 0.7,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(
      BLOG_LAST_MODIFIED[post.slug] ?? guides.find((g) => g.slug === post.slug)?.dateModified ?? post.date
    ),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...nonBlogEntries, ...blogEntries];
}
