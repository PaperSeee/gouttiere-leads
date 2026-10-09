import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { communes } from "@/lib/communes";

const BASE_URL = "https://www.nettoyage-gouttieres-bruxelles.be";

/**
 * `lastmod` réel par page : date de dernière modification connue du contenu
 * (dernier commit touchant la page). À mettre à jour quand la page change —
 * jamais la date de build, qui donnerait la même date à toutes les pages.
 * Les articles de blog utilisent leur date de publication (voir plus bas).
 */
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-10-10",
  "/types-gouttieres": "2026-09-26",
  "/tarifs": "2026-10-04",
  "/faq": "2026-10-10",
  "/contact": "2026-10-04",
  "/a-propos": "2026-10-04",
  "/mentions-legales": "2026-10-07",
  "/communes": "2026-10-04",
  "/blog": "2026-09-26",
  "/services": "2026-10-10",
  "/services/nettoyage-gouttieres": "2026-10-10",
  "/services/debouchage-gouttieres": "2026-09-26",
  "/services/reparation-gouttieres": "2026-09-26",
  "/services/demoussage-toiture": "2026-10-10",
  "/services/nettoyage-toiture": "2026-10-10",
  "/services/protection-gouttieres": "2026-09-26",
  "/services/contrat-entretien-gouttieres": "2026-09-26",
};

/** Pages commune : date propre aux communes retravaillées, défaut pour les autres. */
const COMMUNE_LAST_MODIFIED: Record<string, string> = {
  "anderlecht": "2026-10-10",
  "saint-josse-ten-noode": "2026-10-10",
};
const COMMUNE_DEFAULT_LAST_MODIFIED = "2026-10-04";

export default function sitemap(): MetadataRoute.Sitemap {
  const communeSlugs = communes.map((c) => c.slug);

  const staticPages = [
    "",
    "/types-gouttieres",
    "/tarifs",
    "/faq",
    "/contact",
    "/a-propos",
    "/mentions-legales",
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
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...nonBlogEntries, ...blogEntries];
}
