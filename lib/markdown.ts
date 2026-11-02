// Markdown twins for AI agents (AEO / Dualmark spec v1.0).
//
// Every HTML page has a markdown version at the same path plus ".md"
// (e.g. /about -> /about.md, / -> /index.md). proxy.ts rewrites those
// requests to app/md/[...path]/route.ts, which calls renderMarkdown().
//
// The homepage, cluster pages and blog are generated from the same data the
// HTML uses (content/pages, lib/blog.ts). About/Contact/Privacy/Terms have
// hand-kept files in content/markdown/; update them when those pages change.

import { promises as fs } from "node:fs";
import path from "node:path";
import { POSTS, getPost, type BlogBlock } from "@/lib/blog";
import { ALL_STYLES, ALPHABET_LOWER, ALPHABET_UPPER } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { toolLinks } from "@/lib/site";
import { CLUSTERS, getCluster, home } from "@/content/pages";
import type { Block, PageContent } from "@/content/pages/types";
import { LETTERS, LETTER_BY_L, codepoints, hex } from "@/lib/letters";
import { SYMBOL_GROUPS } from "@/lib/symbols";
import { APP_BY_SLUG, APP_GUIDES, FONT_PAGES, FONT_PAGE_BY_STYLE } from "@/lib/fontpages";
import { fontsByName, specimenUrl, GROUP_LABEL } from "@/lib/realfonts";

const STATIC_DIR = path.join(process.cwd(), "content", "markdown");

function abs(text: string): string {
  return text.replace(/\]\(\//g, `](${SITE_URL}/`);
}

function header(title: string, description: string, urlPath: string): string {
  return `# ${title}\n\n> ${description}\n\n- **URL**: ${SITE_URL}${urlPath}\n\n---\n`;
}

function links(items: { title: string; href: string; description?: string }[]): string {
  return items
    .map((l) => `- [${l.title}](${SITE_URL}${l.href})${l.description ? `: ${l.description}` : ""}`)
    .join("\n");
}

function join(...parts: (string | false | undefined)[]): string {
  return parts.filter(Boolean).join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

// ---------- tool pages ----------

function letterRow(styleId: string, chars: string[]) {
  const s = ALL_STYLES[styleId];
  return chars.map((c) => `${c} ${s.transform(c)}`).join(" · ");
}

function widget(b: Extract<Block, { widget: string }>["widget"]): string {
  switch (b) {
    case "alphabet-compact":
    case "alphabet-full":
      return [
        `- **Fraktur capitals**: ${letterRow("fraktur", ALPHABET_UPPER)}`,
        `- **Fraktur lowercase**: ${letterRow("fraktur", ALPHABET_LOWER)}`,
        `- **Bold Fraktur capitals**: ${letterRow("bold-fraktur", ALPHABET_UPPER)}`,
        `- **Bold Fraktur lowercase**: ${letterRow("bold-fraktur", ALPHABET_LOWER)}`,
      ].join("\n") + "\n";
    case "letters":
      return `- **Framed capitals**: ${letterRow("gothic-framed", ALPHABET_UPPER)}\n`;
    case "numbers":
      return `- **Bold digits**: ${ALL_STYLES["fraktur"].transform("0123456789")}\n- **Outline digits**: ${ALL_STYLES["fraktur-outline-digits"].transform("0123456789")}\n- **Roman numerals**: Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ\n`;
    case "tattoo-preview":
      return "*(Interactive skin-tone mockup with PNG download on the live page.)*\n";
    case "image-export":
      return "*(Interactive PNG/SVG export using UnifrakturCook and UnifrakturMaguntia on the live page.)*\n";
    case "symbols":
      return SYMBOL_GROUPS.map((g) => `- **${g.label}**: ${g.items.map(([glyph, name]) => `${glyph} (${name})`).join(", ")}`).join("\n") + "\n";
    case "letter-index":
      return LETTERS.map((x) => `[${x.l.toUpperCase()}](${SITE_URL}/old-english-alphabet/${x.l})`).join(" · ") + "\n";
  }
}

function block(b: Block): string {
  if ("p" in b) return `${abs(b.p)}\n`;
  if ("ul" in b) return `${b.ul.map((i) => `- ${abs(i)}`).join("\n")}\n`;
  if ("table" in b)
    return `| ${b.table.head.join(" | ")} |\n| ${b.table.head.map(() => "---").join(" | ")} |\n${b.table.rows
      .map((r) => `| ${r.map(abs).join(" | ")} |`)
      .join("\n")}\n`;
  if ("cards" in b) return `${b.cards.map((c) => `- **${c.h}**: ${abs(c.p)}`).join("\n")}\n`;
  return widget(b.widget);
}

function toolPage(p: PageContent): string {
  const urlPath = p.slug ? `/${p.slug}` : "/";
  const styles = p.tool.styles.map((id) => ALL_STYLES[id]).filter(Boolean);
  return join(
    header(p.h1, p.description, urlPath),
    `${abs(p.intro)}\n`,
    `## ${p.stylesHeading}\n\nEach style applied to “${p.tool.sample}”. On the live page you can type your own text and copy any style.\n\n${styles
      .map((s) => `- **${s.name}**: ${s.transform(p.tool.sample)}`)
      .join("\n")}\n`,
    `## ${p.howTo.heading}\n\n${p.howTo.steps.map(([t, d], i) => `${i + 1}. **${t}**: ${abs(d)}`).join("\n")}\n`,
    ...p.sections.map((s) => `## ${s.h2}\n\n${s.blocks.map(block).join("\n")}`),
    p.built && `## How we built this style\n\n${abs(p.built)}\n`,
    `## ${p.related.heading}\n\n${links(toolLinks(p.related.hrefs).map((t) => ({ title: t.label, href: t.href, description: t.blurb })))}\n`,
    `## Frequently Asked Questions\n\n${p.faq.map((f) => `### ${f.q}\n\n${abs(f.a)}`).join("\n\n")}\n`
  );
}

// ---------- blog ----------

function blogIndex(): string {
  return join(
    header(
      "Blog",
      "Articles on blackletter typography, Unicode font generators, tattoo lettering, and how to use Old English text on Instagram, Discord, and TikTok.",
      "/blog"
    ),
    "Practical notes on blackletter typography, Unicode font generators, and where the styles from this site actually work in the real world.\n",
    POSTS.map((p) => `## [${p.title}](${SITE_URL}/blog/${p.slug})\n\n*${p.date} · ${p.readingTime}*\n\n${p.excerpt}\n`).join("\n")
  );
}

function blogBlock(b: BlogBlock): string {
  switch (b.type) {
    case "h2": return `## ${b.text}\n`;
    case "h3": return `### ${b.text}\n`;
    case "p": return `${abs(b.text)}\n`;
    case "ul": return `${b.items.map((i) => `- ${abs(i)}`).join("\n")}\n`;
    case "ol": return `${b.items.map((i, n) => `${n + 1}. ${abs(i)}`).join("\n")}\n`;
    case "quote": return `> ${abs(b.text)}\n`;
    case "cta": return `${b.text} [${b.label} →](${b.href.startsWith("/") ? SITE_URL + b.href : b.href})\n`;
    case "links":
      return `${b.heading ? `### ${b.heading}\n\n` : ""}${b.items
        .map((i) => `- [${i.label}](${i.href.startsWith("/") ? SITE_URL + i.href : i.href})`)
        .join("\n")}\n`;
  }
}

function blogPost(slug: string): string | null {
  const post = getPost(slug);
  if (!post) return null;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return join(
    header(post.title, post.description, `/blog/${post.slug}`),
    `- **Published**: ${post.date}\n- **Reading time**: ${post.readingTime}\n`,
    ...post.body.map(blogBlock),
    `## More articles\n\n${links(related.map((r) => ({ title: r.title, href: `/blog/${r.slug}`, description: r.excerpt })))}\n`
  );
}

// ---------- router ----------

const SEGMENT = /^[a-z0-9-]+$/i;

async function readStatic(segments: string[]): Promise<string | null> {
  if (!segments.every((s) => SEGMENT.test(s))) return null;
  try {
    return await fs.readFile(path.join(STATIC_DIR, ...segments) + ".md", "utf8");
  } catch {
    return null;
  }
}

/**
 * Render the markdown twin for a page path given as segments
 * (["index"] for the homepage, ["old-english-alphabet"], ["blog", "slug"], ...).
 * Returns null when the page has no twin.
 */
function letterPage(l: string): string | null {
  const info = LETTER_BY_L[l];
  if (!info) return null;
  const U = l.toUpperCase();
  const cp = codepoints(l);
  const fr = ALL_STYLES["fraktur"].transform;
  const bfr = ALL_STYLES["bold-fraktur"].transform;
  return join(
    header(`Old English Letter ${U}`, `The Old English (Fraktur) letter ${U}: copyable forms, how it is built and what it is confused with.`, `/old-english-alphabet/${l}`),
    `| Form | Character | Code point |\n| --- | --- | --- |\n| Fraktur capital | ${fr(U)} | ${hex(cp.upper)}${cp.letterlike ? " (Letterlike Symbols)" : ""} |\n| Fraktur lowercase | ${fr(l)} | ${hex(cp.lower)} |\n| Bold Fraktur capital | ${bfr(U)} | ${hex(cp.boldUpper)} |\n| Bold Fraktur lowercase | ${bfr(l)} | ${hex(cp.boldLower)} |\n`,
    `## How the Old English ${U} is built\n\n${info.shape}\n`,
    `## Easily confused with\n\n${info.confused}\n`,
    `## Where people use it\n\n${info.use}\n`,
    `## Example words\n\n${info.words.map((w) => `- ${w}: ${bfr(w)}`).join("\n")}\n`,
    `[Full Old English alphabet](${SITE_URL}/old-english-alphabet)\n`
  );
}

function fontsPage(style: string): string | null {
  const p = FONT_PAGE_BY_STYLE[style];
  if (!p) return null;
  return join(
    header(p.h1, p.description, `/fonts/${p.style}`),
    `${abs(p.intro)}\n`,
    `## Fonts\n\n${fontsByName(p.fonts).map((f) => `- **[${f.family}](${specimenUrl(f)})** (${GROUP_LABEL[f.group]}; ${f.designers}; SIL Open Font License): ${p.notes?.[f.family] ?? f.blurb}`).join("\n")}\n`,
    ...p.sections.map((s) => `## ${s.h2}\n\n${s.blocks.map(block).join("\n")}`),
    `## Frequently Asked Questions\n\n${p.faq.map((f) => `### ${f.q}\n\n${abs(f.a)}`).join("\n\n")}\n`
  );
}

function appPage(app: string): string | null {
  const a = APP_BY_SLUG[app];
  if (!a) return null;
  return join(
    header(`Old English Font in ${a.name}`, a.description, `/fonts/old-english/${a.app}`),
    `${a.intro}\n`,
    `## Step by step\n\n${a.steps.map(([t, d], i) => `${i + 1}. **${t}**: ${d}`).join("\n")}\n`,
    `## Good to know\n\n${a.notes.map((n) => `- ${n}`).join("\n")}\n`,
    `## Frequently Asked Questions\n\n${a.faq.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}\n`
  );
}

function sitemapMd(): string {
  return join(
    header("Sitemap", "Every page on Old English Font Generator, with links to its markdown version.", "/sitemap.md"),
    `## Tools\n\n${[home, ...CLUSTERS]
      .map((p) => {
        const path = p.slug ? `/${p.slug}` : "/";
        const md = p.slug ? `/${p.slug}.md` : "/index.md";
        return `- [${p.h1}](${SITE_URL}${path}) ([markdown](${SITE_URL}${md})): ${p.description}`;
      })
      .join("\n")}\n`,
    `## Old English letters\n\n${LETTERS.map((x) => `- [Letter ${x.l.toUpperCase()}](${SITE_URL}/old-english-alphabet/${x.l}) ([markdown](${SITE_URL}/old-english-alphabet/${x.l}.md))`).join("\n")}\n`,
    `## Font collections and app guides\n\n${[
      ...FONT_PAGES.map((p) => ({ t: p.h1, u: `/fonts/${p.style}` })),
      ...APP_GUIDES.map((a) => ({ t: `Old English font in ${a.name}`, u: `/fonts/old-english/${a.app}` })),
    ].map((x) => `- [${x.t}](${SITE_URL}${x.u}) ([markdown](${SITE_URL}${x.u}.md))`).join("\n")}\n`,
    `## Articles\n\n- [Blog](${SITE_URL}/blog) ([markdown](${SITE_URL}/blog.md))\n${POSTS.map(
      (p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) ([markdown](${SITE_URL}/blog/${p.slug}.md))`
    ).join("\n")}\n`,
    `## About this site\n\n${["about", "contact", "privacy", "terms"]
      .map((s) => `- [${s[0].toUpperCase() + s.slice(1)}](${SITE_URL}/${s}) ([markdown](${SITE_URL}/${s}.md))`)
      .join("\n")}\n`
  );
}

export async function renderMarkdown(segments: string[]): Promise<string | null> {
  const [first, second, ...rest] = segments;
  if (first === "fonts" && second === "old-english" && rest.length === 1) return appPage(rest[0]);
  if (rest.length === 0) {
    if (second !== undefined) {
      if (first === "blog") return blogPost(second);
      if (first === "old-english-alphabet") return letterPage(second);
      if (first === "fonts") return fontsPage(second);
    } else {
      if (first === "index") return toolPage(home);
      if (first === "blog") return blogIndex();
      if (first === "sitemap") return sitemapMd();
      const c = getCluster(first);
      if (c) return toolPage(c);
    }
  }
  return readStatic(segments);
}

