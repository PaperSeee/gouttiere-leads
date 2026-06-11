import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://www.nettoyage-gouttieres-bruxelles.be";
const LAST_MODIFIED = new Date("2026-06-09");

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
  ];

  const blogPages = [
    "/blog",
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  const allPages = [...staticPages, ...communePages, ...servicePages, ...blogPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
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
        : path.startsWith("/blog/")
        ? 0.6
        : 0.7,
  }));
}
