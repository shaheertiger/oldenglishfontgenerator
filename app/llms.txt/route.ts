import { CLUSTERS } from "@/content/pages";
import { POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

// /llms.txt: a concise map of the site for AI crawlers, built from page data.
export async function GET() {
  const tools = CLUSTERS.map((p) => `- [${p.h1}](${SITE_URL}/${p.slug}): ${p.description}`).join("\n");
  const posts = POSTS.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`).join("\n");

  const body = `# Old English Font Generator

> Free browser tool that converts text into Old English, blackletter, gothic and
> Fraktur Unicode styles to copy and paste, plus a tattoo preview and PNG/SVG
> export using open-licence blackletter fonts. No sign-up.

## Key facts
- "Old English", "gothic" and "blackletter" are everyday names for the same letter shapes; Unicode's version is Fraktur.
- Output is Unicode text from Mathematical Fraktur (U+1D504–U+1D537) and Bold Fraktur (U+1D56C–U+1D59F); C, H, I, R, Z come from Letterlike Symbols.
- Unicode has no Fraktur digits; the site substitutes bold serif digits or Roman numerals.
- This is not a translator for the Old English language.

## Main page
- [Old English Font Generator](${SITE_URL}/): every style in one list.

## Tools
${tools}

## Articles
${posts}

## Sitemap
- ${SITE_URL}/sitemap.xml

## Markdown versions
Every page has a markdown version at the same URL plus \`.md\` (the homepage is ${SITE_URL}/index.md).
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
