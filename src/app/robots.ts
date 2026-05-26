import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.nettoyage-gouttieres-bruxelles.be/sitemap.xml",
    host: "https://www.nettoyage-gouttieres-bruxelles.be",
  };
}
