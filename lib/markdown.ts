// Markdown twins for AI agents (AEO / Dualmark spec v1.0).
//
// Every HTML page has a markdown version at the same path plus ".md"
// (e.g. /about -> /about.md, / -> /index.md). proxy.ts rewrites those
// requests to app/md/[...path]/route.ts, which calls renderMarkdown().
//
// Two sources:
//  1. Data-driven pages (font generators, blog, symbols, emoticons, names,
//     letters) are generated here from the same lib/ data the HTML uses,
//     so they never drift.
//  2. Pages whose copy is written inline in JSX (home, About, tool pages,
//     Spanish pages, ...) have a hand-kept file in content/markdown/.
//     When you edit one of those pages, update its .md file too.

import { promises as fs } from "node:fs";
import path from "node:path";
import { PAGES, CATEGORIES, PAGE_INDEX_DESCRIPTION, getPage, getCategory, platformsFor, relatedPages } from "@/lib/pages";
import { POSTS, getPost, type BlogBlock } from "@/lib/blog";
import { SYMBOL_CATEGORIES, SYMBOL_BY_SLUG } from "@/lib/symbols";
import { EMOTICON_CATEGORIES, EMOTICON_BY_SLUG } from "@/lib/emoticons";
import { NAME_CATEGORIES, NAME_BY_SLUG } from "@/lib/names";
import { ALL_STYLES, LETTER_SHOWCASE_IDS, LETTER_SLUGS } from "@/lib/fonts";
import { SITE_URL } from "@/lib/seo";

const STATIC_DIR = path.join(process.cwd(), "content", "markdown");

// ---------- helpers ----------

/** Make root-relative markdown links absolute so they work out of context. */
function abs(text: string): string {
  return text.replace(/\]\(\//g, `](${SITE_URL}/`);
}

/** Standard twin header: title, summary, canonical URL, separator. */
function header(title: string, description: string, urlPath: string): string {
  return `# ${title}\n\n> ${description}\n\n- **URL**: ${SITE_URL}${urlPath}\n\n---\n`;
}

function faq(items: { q: string; a: string }[]): string {
  if (items.length === 0) return "";
  return `## Frequently Asked Questions\n\n${items.map((f) => `### ${f.q}\n\n${abs(f.a)}`).join("\n\n")}\n`;
}

function links(items: { title: string; href: string; description?: string }[]): string {
  return items
    .map((l) => `- [${l.title}](${SITE_URL}${l.href})${l.description ? `: ${l.description}` : ""}`)
    .join("\n");
}

/** Wrap text in an inline code span that survives backticks inside it. */
function code(text: string): string {
  const fence = text.includes("`") ? "``" : "`";
  const pad = text.startsWith("`") || text.endsWith("`") ? " " : "";
  return `${fence}${pad}${text}${pad}${fence}`;
}

function join(...parts: (string | false | undefined)[]): string {
  return parts.filter(Boolean).join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

// ---------- font generators ----------

function fontGeneratorIndex(): string {
  return join(
    header("Special Font Generator", PAGE_INDEX_DESCRIPTION, "/font-generator"),
    "One input, every style. Browse cursive, gothic, bold, bubble, glitch, small caps, upside down and more — all generated as Unicode you can copy and paste into any app.\n",
    ...CATEGORIES.map((c) => {
      const pages = c.slugs.map(getPage).filter((p): p is NonNullable<typeof p> => Boolean(p));
      return `## ${c.title}\n\n${c.intro}\n\n${links(
        pages.map((p) => ({ title: p.h1, href: `/font-generator/${p.slug}`, description: p.description }))
      )}\n`;
    })
  );
}

function fontGeneratorPage(slug: string): string | null {
  const page = getPage(slug);
  if (!page) return null;
  const styles = page.styles.map((id) => ALL_STYLES[id]).filter(Boolean);
  const sample = page.defaultText ?? "Type or paste your text";
  const phrases = page.examples ?? ["hello world", "good vibes only", "stay weird"];
  const chartStyle = page.alphabet ? ALL_STYLES[page.styles[0]] : undefined;
  const category = getCategory(page.slug);
  const shortName = page.h1.replace(/ Generator$/i, "");

  let chart = "";
  if (chartStyle && page.alphabet === "letters") {
    const row = (chars: string) =>
      chars.split("").map((c) => `${c} ${chartStyle.transform(c)}`).join(" · ");
    chart = `## Old English alphabet A–Z\n\n- **Uppercase**: ${row("ABCDEFGHIJKLMNOPQRSTUVWXYZ")}\n- **Lowercase**: ${row("abcdefghijklmnopqrstuvwxyz")}\n`;
  } else if (chartStyle && page.alphabet === "numbers") {
    chart = `## Old English numbers 0–9\n\n${"0123456789".split("").map((c) => `- ${c} → ${chartStyle.transform(c)}`).join("\n")}\n`;
  }

  return join(
    header(page.h1, page.description, `/font-generator/${page.slug}`),
    `${abs(page.intro)}\n`,
    `## ${shortName} styles\n\nEach style applied to “${sample}”. On the live page you can type your own text and tap any style to copy it.\n\n${styles
      .map((s) => `- **${s.name}**: ${s.transform(sample)}`)
      .join("\n")}\n`,
    page.about[0] && `## ${page.about[0].heading}\n\n${abs(page.about[0].body)}\n`,
    `## How to use the ${page.h1.toLowerCase()}\n\n1. **Type your text** in the box — previews update as you type.\n2. **Pick a variant** from the generated styles.\n3. **Tap to copy**, then paste it wherever you need.\n`,
    `## Where these styles work\n\nThe output is plain Unicode, so it pastes into any app that accepts text:\n\n${platformsFor(page)
      .map((p) => `- **${p.app}**: ${p.note}`)
      .join("\n")}\n`,
    styles.length > 0 &&
      `## Examples\n\n${styles
        .slice(0, 3)
        .flatMap((s) => phrases.map((ph) => `- ${s.name} — “${ph}”: ${s.transform(ph)}`))
        .join("\n")}\n`,
    chart,
    ...page.about.slice(1).map((b) => `## ${b.heading}\n\n${abs(b.body)}\n`),
    faq(page.faq),
    `## ${category ? `More ${category.title.toLowerCase()} generators` : "More font generators"}\n\n${links(
      relatedPages(page.slug, 12).map((o) => ({ title: o.h1, href: `/font-generator/${o.slug}`, description: o.description }))
    )}\n\n[Browse every font generator](${SITE_URL}/font-generator)\n`
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

// ---------- symbols & emoticons ----------

function symbolsIndex(): string {
  return join(
    header(
      "Cool Symbols",
      "Browse arrows, hearts, stars, currency, music, infinity, and dozens of other Unicode symbol categories. Click any tile to copy.",
      "/symbols"
    ),
    "Browse arrows, hearts, stars, currency, music, infinity, and more. Every glyph is a plain Unicode character that pastes anywhere text is allowed.\n",
    `## Symbol categories\n\n${links(SYMBOL_CATEGORIES.map((c) => ({ title: c.label, href: `/symbols/${c.slug}`, description: c.description })))}\n`
  );
}

function symbolPage(slug: string): string | null {
  const cat = SYMBOL_BY_SLUG[slug];
  if (!cat) return null;
  const unique = [...new Set(cat.symbols)];
  return join(
    header(`${cat.label} Symbol Copy & Paste`, cat.description, `/symbols/${cat.slug}`),
    `${cat.intro}\n`,
    `## ${cat.label} symbols\n\n${unique.join(" ")}\n`,
    `## About ${cat.label.toLowerCase()} symbols\n\n${cat.about}\n\nEvery glyph above is a plain Unicode character, so it pastes into bios, captions, messages, and documents the same way a regular letter does. No installation, no font file — the character itself carries the visual style.\n`,
    "## How to use these symbols\n\nCopy any symbol and paste it anywhere plain text is allowed — Instagram, TikTok, Discord, X, WhatsApp, email, Notion, Google Docs, code comments, signatures. If a symbol renders as an empty box on someone else’s device, their system font doesn’t cover that Unicode block; pick a variant from a more widely-supported range.\n",
    `## Other symbol categories\n\n${links(SYMBOL_CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => ({ title: c.label, href: `/symbols/${c.slug}` })))}\n`
  );
}

function emoticonsIndex(): string {
  return join(
    header(
      "Emoticons",
      "Browse shrug, blushing, uwu, happy, sad, angry, love, and more kaomoji categories. Click any face to copy and paste it anywhere.",
      "/emoticons"
    ),
    "Browse shrug, blushing, uwu, happy, sad, angry, love, and more. Every kaomoji is plain Unicode text that pastes anywhere text is allowed.\n",
    `## Emoticon categories\n\n${links(EMOTICON_CATEGORIES.map((c) => ({ title: c.label, href: `/emoticons/${c.slug}`, description: c.description })))}\n`
  );
}

function emoticonPage(slug: string): string | null {
  const cat = EMOTICON_BY_SLUG[slug];
  if (!cat) return null;
  const unique = [...new Set(cat.emoticons.map((e) => e.trim()))];
  return join(
    header(`${cat.label} Emoticons Copy & Paste`, cat.description, `/emoticons/${cat.slug}`),
    `${cat.intro}\n`,
    // Code spans keep backslashes and underscores (e.g. ¯\_(ツ)_/¯) intact.
    `## ${cat.label} emoticons\n\n${unique.map((e) => `- ${code(e)}`).join("\n")}\n`,
    `## About ${cat.label.toLowerCase()} emoticons\n\n${cat.about}\n\nKaomoji are built entirely from plain Unicode text characters, so each face pastes into bios, captions, messages, and documents the same way a regular letter does. No installation, no font file — the characters themselves carry the expression.\n`,
    "## How to use these emoticons\n\nCopy any face and paste it anywhere plain text is allowed — Instagram, TikTok, Discord, X, WhatsApp, email, Notion, Google Docs, code comments, signatures. If a face renders with broken or boxed characters on someone else’s device, their system font doesn’t cover that Unicode range; pick a simpler variant built from more widely-supported characters.\n",
    `## Other emoticons\n\n${links(EMOTICON_CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => ({ title: c.label, href: `/emoticons/${c.slug}` })))}\n`
  );
}

// ---------- name generators ----------

function namesIndex(): string {
  return join(
    header(
      "Name Generator",
      "Free random name and username generators for Roblox, Minecraft, Discord, Twitter, plus cute and aesthetic ideas. Hit Regenerate and click to copy.",
      "/name-generator"
    ),
    "Random username and name ideas tailored to each platform — Roblox, Minecraft, Discord, Twitter, plus cute and aesthetic styles. Pick a generator, hit Regenerate, and tap any row to copy.\n",
    `## Name generators\n\n${links([
      ...NAME_CATEGORIES.map((c) => ({ title: c.h1, href: `/name-generator/${c.slug}`, description: c.description })),
      { title: "Username Generator", href: "/username-generator", description: "Random gothic, blackletter, and Old English style usernames." },
    ])}\n`
  );
}

function namePage(slug: string): string | null {
  const cat = NAME_BY_SLUG[slug];
  if (!cat) return null;
  return join(
    header(cat.h1, cat.description, `/name-generator/${cat.slug}`),
    `${cat.intro}\n`,
    ...cat.about.map((a) => `## ${a.heading}\n\n${abs(a.body)}\n`),
    faq(cat.faq),
    `## Other generators\n\n${links([
      ...NAME_CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => ({ title: c.label, href: `/name-generator/${c.slug}` })),
      { title: "Username Generator", href: "/username-generator" },
    ])}\n`
  );
}

// ---------- letters ----------

function letterPage(slug: string): string | null {
  const ch = slug.toLowerCase();
  if (slug.length !== 1 || !LETTER_SLUGS.includes(ch)) return null;
  const upper = ch.toUpperCase();
  const isDigit = /\d/.test(ch);
  const title = isDigit ? `${ch} in Different Fonts` : `Capital ${upper} in Different Fonts`;
  const description = isDigit
    ? `Every Unicode style applied to the digit ${ch}. Copy and paste a fancy ${ch} into Instagram, TikTok, Discord, or anywhere else.`
    : `The letter ${upper} in 40+ Unicode fonts — blackletter, cursive, bold, italic, bubble, leet, mirrored, and more. Copy any styled ${upper} with one tap.`;
  const rows = LETTER_SHOWCASE_IDS.map((id) => ALL_STYLES[id])
    .filter(Boolean)
    .map((s) => {
      const u = s.transform(upper);
      const l = s.transform(ch);
      return `- **${s.name}**: ${u}${!isDigit && l !== u ? `  ${l}` : ""}`;
    });
  return join(
    header(title, description, `/different-fonts/${ch}`),
    `## ${isDigit ? ch : upper} in every style\n\n${rows.join("\n")}\n`,
    `## Why the same letter looks like 40 different shapes\n\nThese styles aren’t font files — they’re distinct Unicode codepoints that happen to look like “${upper}” in different visual styles. Unicode reserves whole blocks for math notation (bold, italic, fraktur, script, double-struck, monospace, sans-serif), and decorative ranges for circled, parenthesized, fullwidth, and squared forms. Stack them with combining marks (underline, strikethrough, glitch) and the count climbs fast.\n\nBecause each variant is a real character, you can paste it into bios, captions, usernames, and DMs on apps that don’t expose font settings. The output is plain text — just unusual plain text.\n`,
    `## Other letters\n\n${LETTER_SLUGS.filter((c) => c !== ch)
      .map((c) => `[${c.toUpperCase()}](${SITE_URL}/different-fonts/${c})`)
      .join(" · ")}\n`
  );
}

// ---------- HTML sitemap page ----------

function sitemapPage(): string {
  return join(
    header("Sitemap", "Every page on Old English Font Generator, grouped by section.", "/sitemap"),
    `## Main pages\n\n${links([
      { title: "Old English Font Generator (home)", href: "/" },
      { title: "All tools", href: "/tools" },
      { title: "All font generators", href: "/font-generator" },
      { title: "Blog", href: "/blog" },
      { title: "Symbols", href: "/symbols" },
      { title: "Emoticons", href: "/emoticons" },
      { title: "Name generators", href: "/name-generator" },
      { title: "Letters in different fonts", href: "/different-fonts" },
      { title: "Generador en español", href: "/es" },
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
    ])}\n`,
    `## Font generators\n\n${links(PAGES.map((p) => ({ title: p.h1, href: `/font-generator/${p.slug}` })))}\n`,
    `## Blog articles\n\n${links(POSTS.map((p) => ({ title: p.title, href: `/blog/${p.slug}` })))}\n`,
    `## Symbols\n\n${links(SYMBOL_CATEGORIES.map((c) => ({ title: c.label, href: `/symbols/${c.slug}` })))}\n`,
    `## Emoticons\n\n${links(EMOTICON_CATEGORIES.map((c) => ({ title: c.label, href: `/emoticons/${c.slug}` })))}\n`,
    `## Name generators\n\n${links(NAME_CATEGORIES.map((c) => ({ title: c.label, href: `/name-generator/${c.slug}` })))}\n`,
    "Every page also has a markdown version: add `.md` to its URL (the homepage is `/index.md`).\n"
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
 * (["index"] for the homepage, ["font-generator", "cursive"], ...).
 * Returns null when the page has no twin.
 */
export async function renderMarkdown(segments: string[]): Promise<string | null> {
  const [first, second, ...rest] = segments;
  if (rest.length === 0) {
    if (second !== undefined) {
      switch (first) {
        case "font-generator": return fontGeneratorPage(second);
        case "blog": return blogPost(second);
        case "symbols": return symbolPage(second);
        case "emoticons": return emoticonPage(second);
        case "name-generator": return namePage(second);
        case "different-fonts": return letterPage(second);
      }
    } else {
      switch (first) {
        case "font-generator": return fontGeneratorIndex();
        case "blog": return blogIndex();
        case "symbols": return symbolsIndex();
        case "emoticons": return emoticonsIndex();
        case "name-generator": return namesIndex();
        case "sitemap": return sitemapPage();
      }
    }
  }
  return readStatic(segments);
}
