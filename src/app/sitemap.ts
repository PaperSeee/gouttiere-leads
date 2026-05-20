import { MetadataRoute } from "next";

const BASE_URL = "https://nettoyage-gouttieres-bruxelles.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const communes = [
    "uccle",
    "ixelles",
    "woluwe-saint-pierre",
    "woluwe-saint-lambert",
    "auderghem",
    "watermael-boitsfort",
    "etterbeek",
    "forest",
    "schaerbeek",
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
    "/blog/preparer-gouttieres-automne-bruxelles",
  ];

  const allPages = [...staticPages, ...communePages, ...servicePages, ...blogPages];

  return allPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
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
