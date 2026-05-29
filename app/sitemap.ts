import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/pages";
import { POSTS } from "@/lib/blog";
import { SYMBOL_CATEGORIES } from "@/lib/symbols";
import { NAME_CATEGORIES } from "@/lib/names";
import { EMOTICON_CATEGORIES } from "@/lib/emoticons";

const BASE = "https://www.oldenglishfontgenerator.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = [
    { url: `${BASE}/`, priority: 1, changeFrequency: "weekly" as const },
    { url: `${BASE}/es`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/preppy`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/coquette`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/different-fonts`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/symbols`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/es/font-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/es/cool-symbols/hearts`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/name-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/emoticons`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/font-generator`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE}/auto-font-styler`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/font-mixer`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/username-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/headcanon-generator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/story-generator`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/uuid-generator`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/ascii-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/image-to-ascii`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/pig-latin-translator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/case-converter`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/subscript-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/binary-code-translator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/stacked-text-generator`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/invisible-text-generator`, priority: 0.8, changeFrequency: "monthly" as const },
  ];
  const slugUrls = PAGES.map((p) => ({
    url: `${BASE}/font-generator/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));
  const blogUrls = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));
  const letterUrls = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map((c) => ({
    url: `${BASE}/different-fonts/${c}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));
  const symbolUrls = SYMBOL_CATEGORIES.map((c) => ({
    url: `${BASE}/symbols/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));
  const nameUrls = NAME_CATEGORIES.map((c) => ({
    url: `${BASE}/name-generator/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));
  const esSlugUrls = ["cursive", "fancy", "bold", "instagram"].map((s) => ({
    url: `${BASE}/es/font-generator/${s}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));
  const emoticonUrls = EMOTICON_CATEGORIES.map((c) => ({
    url: `${BASE}/emoticons/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));
  return [...staticUrls, ...slugUrls, ...blogUrls, ...letterUrls, ...symbolUrls, ...nameUrls, ...esSlugUrls, ...emoticonUrls].map((u) => ({ ...u, lastModified: now }));
}
