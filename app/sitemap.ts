import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";

const BASE = "https://www.oldenglishfontgenerator.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = [
    { url: `${BASE}/`, priority: 1, changeFrequency: "weekly" as const },
    { url: `${BASE}/font-generator`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE}/auto-font-styler`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/font-mixer`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/username-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/headcanon-generator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/story-generator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/uuid-generator`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/ascii-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/image-to-ascii`, priority: 0.8, changeFrequency: "monthly" as const },
  ];
  const slugUrls = PAGES.map((p) => ({
    url: `${BASE}/font-generator/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));
  return [...staticUrls, ...slugUrls].map((u) => ({ ...u, lastModified: now }));
}
