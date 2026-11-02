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
export async function renderMarkdown(segments: string[]): Promise<string | null> {
  const [first, second, ...rest] = segments;
  if (rest.length === 0) {
    if (second !== undefined) {
      if (first === "blog") return blogPost(second);
    } else {
      if (first === "index") return toolPage(home);
      if (first === "blog") return blogIndex();
      const c = getCluster(first);
      if (c) return toolPage(c);
    }
  }
  return readStatic(segments);
}

