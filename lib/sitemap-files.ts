// Every indexable URL and the source file whose last change is its lastmod.
// Shared by app/sitemap.ts and scripts/lastmod.mjs (keep paths in sync).
export const STATIC_SOURCES: { path: string; file: string }[] = [
  { path: "/about", file: "app/about/page.tsx" },
  { path: "/contact", file: "app/contact/page.tsx" },
  { path: "/privacy", file: "app/privacy/page.tsx" },
  { path: "/terms", file: "app/terms/page.tsx" },
];
