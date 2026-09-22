import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://www.nettoyage-gouttieres-bruxelles.be";
// Pages statiques/commune/service sans date de modification naturelle :
// on utilise la date de build/requête, régénérée à chaque déploiement.
const STATIC_LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const communes = [
    "anderlecht",
    "auderghem",
    "berchem-sainte-agathe",
    "bruxelles",
    "etterbeek",
    "evere",
    "forest",
    "ganshoren",
    "ixelles",
    "jette",
    "koekelberg",
    "molenbeek-saint-jean",
    "saint-gilles",
    "saint-josse-ten-noode",
    "schaerbeek",
    "uccle",
    "watermael-boitsfort",
    "woluwe-saint-lambert",
    "woluwe-saint-pierre",
  ];

  const staticPages = [
    "",
    "/types-gouttieres",
    "/tarifs",
    "/faq",
    "/contact",
    "/a-propos",
    "/mentions-legales",
  ];

  const communePages = communes.map((slug) => `/communes/${slug}`);

  const servicePages = [
    "/services/nettoyage-gouttieres",
    "/services/debouchage-gouttieres",
    "/services/reparation-gouttieres",
    "/services/demoussage-toiture",
    "/services/protection-gouttieres",
    "/services/contrat-entretien-gouttieres",
  ];

  const nonBlogPages = [...staticPages, ...communePages, ...servicePages, "/blog"];

  const nonBlogEntries = nonBlogPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: STATIC_LAST_MODIFIED,
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
