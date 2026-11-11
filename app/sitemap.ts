import type { MetadataRoute } from "next";
import { CLUSTERS, home, sourceFile } from "@/content/pages";
import { POSTS } from "@/lib/blog";
import { lastModified } from "@/lib/lastmod";
import { STATIC_SOURCES } from "@/lib/sitemap-files";
import { SITE_URL } from "@/lib/site";
import { LETTERS } from "@/lib/letters";
import { APP_GUIDES, FONT_PAGES, appGuideSource, fontPageSource } from "@/lib/fontpages";

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, file: string, priority: number): MetadataRoute.Sitemap[number] => {
    const lm = lastModified(file);
    return { url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`, priority, ...(lm ? { lastModified: lm } : {}) };
  };
  const latestPost = [...POSTS].sort((a, b) => b.date.localeCompare(a.date))[0]?.date;
  return [
    entry("/", sourceFile(home), 1),
    ...CLUSTERS.map((c) => entry(`/${c.slug}`, sourceFile(c), 0.8)),
    ...LETTERS.map((x) => entry(`/old-english-alphabet/${x.l}`, "lib/letters.ts", 0.6)),
    entry("/fonts", "lib/fontstats.json", 0.8),
    ...FONT_PAGES.map((p) => entry(`/fonts/${p.style}`, fontPageSource(p.style), 0.7)),
    ...APP_GUIDES.map((a) => entry(`/fonts/old-english/${a.app}`, appGuideSource(a.app), 0.5)),
    { url: `${SITE_URL}/blog`, priority: 0.5, ...(latestPost ? { lastModified: latestPost } : {}) },
    ...POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, priority: 0.5, lastModified: p.date })),
    ...STATIC_SOURCES.map((s) => entry(s.path, s.file, 0.3)),
  ];
}
