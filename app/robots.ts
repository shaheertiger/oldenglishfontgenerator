import type { MetadataRoute } from "next";

const BASE = "https://www.oldenglishfontgenerator.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default: open to all standard search crawlers.
      { userAgent: "*", allow: "/" },
      // Explicitly welcome AI-search / answer-engine crawlers so the site
      // stays discoverable in LLM-powered search (2026).
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
