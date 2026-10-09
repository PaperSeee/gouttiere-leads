import { MetadataRoute } from "next";

// Robots des moteurs et assistants IA nommés explicitement (GEO) : ils doivent
// pouvoir explorer le site. Bingbot est inclus car ChatGPT et Copilot
// s'appuient en partie sur l'index Bing.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: AI_BOTS,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.nettoyage-gouttieres-bruxelles.be/sitemap.xml",
    host: "https://www.nettoyage-gouttieres-bruxelles.be",
  };
}
