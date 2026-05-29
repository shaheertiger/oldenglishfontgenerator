import { PAGES } from "@/lib/pages";
import { POSTS } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://www.oldenglishfontgenerator.com";

// /llms.txt — a concise, AI-crawler-friendly map of the site (2026 standard).
// Generated from live page data so it never drifts from the sitemap.
export async function GET() {
  const tools = PAGES.map(
    (p) => `- [${p.h1}](${BASE}/font-generator/${p.slug}): ${p.description}`
  ).join("\n");

  const posts = POSTS.map(
    (p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.description}`
  ).join("\n");

  const body = `# Old English Font Generator

> Free online tool that converts plain text into 60+ Old English, blackletter,
> gothic, fraktur, and medieval Unicode styles you can copy and paste anywhere —
> Instagram, TikTok, Discord, YouTube, X, and more. No sign-up, no watermark,
> no usage limits; everything runs in the browser.

## Key facts
- "Old English", "gothic", and "blackletter" name the same typographic family.
- Output is plain Unicode (not an installed font), so it survives copy/paste
  into apps that don't let you change fonts.
- Most styles come from the Mathematical Alphanumeric Symbols block
  (U+1D400–U+1D7FF); decorative variants use Enclosed Alphanumerics,
  Fullwidth Forms, and Combining Diacritical Marks.

## Main pages
- [Old English Font Generator (home)](${BASE}/): main generator with 60+ styles.
- [All font generators](${BASE}/font-generator): index of every generator.
- [Symbols & emoji](${BASE}/symbols): copy-paste symbol library.
- [Name generators](${BASE}/name-generator): fantasy and username name tools.
- [Blog](${BASE}/blog): guides on blackletter, gothic, and platform usage.
- [Spanish edition](${BASE}/es): generador de fuentes en español.

## Font & text generators
${tools}

## Blog articles
${posts}

## Sitemap
- ${BASE}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
