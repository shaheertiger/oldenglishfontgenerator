// Single source of truth for URLs that are not served as pages.
//  - REDIRECTS: 301s to the closest live page. Chains are resolved below, so
//    every redirect is one hop (and the apex host goes straight to the final
//    www URL, see next.config.mjs).
//  - GONE / GONE_PREFIXES: removed with no close equivalent -> 410 (proxy.ts).
//  - LIVE: paths under a GONE_PREFIX that are served.
// Page registries (content/pages, fonts, app guides, blog) drop any page whose
// URL is listed here, so removing a page is one line in this file.
// REDIRECTS.md is generated from this file: `node scripts/redirects-md.mjs`.
//
// Nov 26 2026 (docs/fix-2026-11.md): every URL that had a Bing click, 50+ Bing
// impressions or Copilot citations before Nov 5 is live again at its original
// path. Where a newer page duplicated a restored one, the newer URL 301s to the
// restored URL. Daily-batch pages from Nov 2–19 with no Bing impressions are 410.
// Rule: never add a URL here without checking its Bing clicks and Copilot
// citations first (npm run bing -- --url <path>).

const fg = (slug, destination) => ({ source: `/font-generator/${slug}`, destination });

const RAW = [
  { source: "/font-generator", destination: "/" },
  // Merged into the owner of their query family (one owner per family).
  fg("old-english-copy-paste", "/font-generator/old-english"),
  fg("old-english-word", "/font-generator/old-english"),
  fg("cool-letters", "/font-generator/fancy-letters"),
  fg("cursive", "/font-generator/handwriting"),
  fg("old-english-numbers", "/old-english-alphabet"),
  fg("mamma-mia", "/font-generator/fun"),
  fg("final-fantasy", "/font-generator/fun"),
  fg("monopoly", "/font-generator/fun"),
  fg("pulp-fiction", "/font-generator/fun"),
  // Pre-Nov-1 slugs that never earned Bing traffic: closest live page.
  fg("tattoo", "/font-generator/old-english-tattoo"),
  fg("gothic", "/font-generator/gothic-letters"),
  fg("gothic-printing", "/font-generator/gothic-letters"),
  fg("modern-gothic", "/font-generator/gothic-letters"),
  fg("blackletter-copy-paste", "/font-generator/blackletter"),
  fg("ig-font", "/font-generator/instagram"),
  // Newer (Nov 1–19) duplicates of restored URLs -> the URL Bing ranked.
  { source: "/old-english-letters", destination: "/font-generator/old-english-letters" },
  { source: "/old-english-cursive", destination: "/font-generator/old-cursive" },
  { source: "/old-english-tattoo-font", destination: "/font-generator/old-english-tattoo" },
  { source: "/fraktur-generator", destination: "/font-generator/fraktur" },
  { source: "/blackletter-generator", destination: "/font-generator/blackletter" },
  { source: "/gothic-font-generator", destination: "/font-generator/gothic-letters" },
  { source: "/gothic-letters", destination: "/font-generator/gothic-letters" },
  { source: "/gangster-font-generator", destination: "/font-generator/gangster" },
  { source: "/old-english-font-instagram", destination: "/font-generator/old-english-ig" },
  { source: "/gothic-symbols", destination: "/symbols" },
  { source: "/old-english-numbers", destination: "/old-english-alphabet" },
  { source: "/medieval-font-generator", destination: "/font-generator/medieval" },
  { source: "/roman-numeral-converter", destination: "/old-english-alphabet" },
  // Nov 2 per-letter batch -> the restored per-letter pages.
  ...[..."abcdefghijklmnopqrstuvwxyz"].map((c) => ({ source: `/old-english-alphabet/${c}`, destination: `/different-fonts/${c}` })),
  { source: "/blog/change-instagram-bio-font", destination: "/blog/old-english-fonts-instagram-bio" },
  { source: "/blog/what-are-unicode-fonts", destination: "/blog/how-unicode-fonts-actually-work" },
  { source: "/blog/cool-discord-username-ideas", destination: "/blog/best-old-english-fonts-for-discord" },
];

/** Follow chains so every redirect points at a final destination (one hop). */
function resolve(list) {
  const map = new Map(list.map((r) => [r.source, r.destination]));
  return list.map((r) => {
    let d = r.destination;
    const seen = new Set([r.source]);
    while (map.has(d) && !seen.has(d)) { seen.add(d); d = map.get(d); }
    return { source: r.source, destination: d };
  });
}

export const REDIRECTS = resolve(RAW);

export const GONE = [
  // Pruned Nov 1 with no Bing clicks, no 50+ impressions and no Copilot citations.
  "/ascii-generator", "/auto-font-styler", "/binary-code-translator", "/case-converter",
  "/favorites", "/font-mixer", "/headcanon-generator",
  "/image-to-ascii", "/invisible-text-generator",
  "/morse-code-translator", "/pig-latin-translator", "/preppy",
  "/sitemap", "/stacked-text-generator", "/story-generator",
  "/subscript-generator", "/tools", "/username-generator", "/uuid-generator",
  "/emoticons", "/name-generator",
  "/blog/fancy-text-copy-paste-iphone-android", "/blog/aesthetic-fonts-tiktok-bio",
  "/blog/fancy-text-whatsapp", "/blog/how-to-bold-text-instagram",
  "/blog/cursive-text-generator-guide", "/blog/small-text-superscript-generator",
  "/blog/bubble-letters-generator-guide", "/blog/strikethrough-text-copy-paste",
  "/blog/aesthetic-symbols-instagram-bio", "/blog/invisible-character-copy-paste",
  "/blog/upside-down-text-generator-guide", "/blog/vaporwave-text-generator-guide",
  // The 5 off-topic social-scheduling posts (Oct 23) with links to another site of ours.
  "/blog/schedule-posts-with-fancy-fonts", "/blog/character-limits-styled-text-social-platforms",
  "/blog/adapt-one-caption-for-every-platform", "/blog/batch-social-media-posts-one-afternoon",
  "/blog/social-media-content-calendar-small-business",
  // Nov 26: daily-batch pages (Nov 2–19) with 0 Bing impressions (research/bing/2026-11-26/phase0-batch.csv).
  "/biker-font-generator", "/renaissance-font-generator", "/victorian-font-generator",
  "/old-english-font-tiktok", "/old-english-font-facebook", "/old-english-font-snapchat",
  "/old-english-font-youtube", "/old-english-font-roblox", "/old-english-font-twitch", "/old-english-font-pinterest",
  // Nov 1 platform page with 0 Bing impressions; its content was untested platform limits.
  "/old-english-font-discord",
  "/fonts/gothic", "/fonts/chicano", "/fonts/tattoo", "/fonts/halloween", "/fonts/fantasy", "/fonts/clothing-brand",
  "/fonts/old-london", "/fonts/cloister-black", "/fonts/uncial-antiqua", "/fonts/metal-mania", "/fonts/germania-one",
  "/fonts/old-english/google-docs", "/fonts/old-english/word", "/fonts/old-english/cricut", "/fonts/old-english/procreate",
  "/fonts/old-english/mac", "/fonts/old-english/powerpoint", "/fonts/old-english/photoshop", "/fonts/old-english/inkscape",
  "/blog/best-font-big-bold-letters-album-cover", "/blog/best-fonts-for-signs-blackletter",
  "/blog/best-fonts-for-embroidery-blackletter", "/blog/blackletter-font-pairings", "/blog/best-monogram-fonts-blackletter",
  "/blog/old-english-wedding-invitations", "/blog/what-font-is-the-bible-in", "/blog/identify-blackletter-font-from-image",
  "/blog/is-old-english-font-free-commercial-use", "/blog/long-s-explained", "/blog/fraktur-letters-showing-as-boxes",
  "/blog/blackletter-history-1941-ban", "/blog/old-english-youtube-thumbnail-fonts", "/blog/best-fonts-for-t-shirts",
  "/blog/why-sans-serif-fonts-are-called-gothic",
];

// Restored Nov 2026: served even though they sit under a GONE_PREFIX.
export const LIVE = [
  // /font-generator/<x> pages are served by app/font-generator/[slug] for every
  // page in content/pages; listed here so proxy.ts lets them through.
  ...[
    "medieval", "old-english", "gothic-letters", "handwriting",
    "old-english-letters", "angelic", "thank-you", "2000s", "old-cursive", "calligraphy", "ransom-note",
    "old-english-tattoo", "signature", "italic", "1940s", "fancy-letters", "fancy-writing",
    "calligraphy-capital-letters", "scratchy", "reverse", "distorted-text", "fraktur", "graffiti", "fortnite",
    "slasher", "ye-old-english", "blackletter", "princess", "monster", "modern-calligraphy", "font-converter",
    "wavy", "italianate", "gangster", "small-gothic", "satanic", "fun", "instagram", "minecraft",
    "old-english-ig", "strikethrough", "animalistic", "mocking-text",
  ].map((s) => `/font-generator/${s}`),
  ...[..."abcdefghijklmnopqrstuvwxyz0123456789"].map((c) => `/different-fonts/${c}`),
  "/symbols/greek", "/symbols/alchemy", "/symbols/numbers", "/symbols/brackets", "/symbols/up-arrow", "/symbols/down-arrow",
  "/emoticons/shrug",
  "/es/font-generator", "/es/font-generator/old-english", "/es/cool-symbols/hearts",
];

// Any path under these prefixes that is not in REDIRECTS or LIVE is gone.
export const GONE_PREFIXES = ["/font-generator/", "/es/", "/symbols/", "/emoticons/", "/name-generator/", "/different-fonts/"];

const GONE_SET = new Set(GONE);
const LIVE_SET = new Set(LIVE);
const REDIRECT_SET = new Set(REDIRECTS.map((r) => r.source));

/** True when a path answers 410. */
export function isGone(path) {
  const p = path.replace(/\.md$/, "").replace(/\/$/, "") || "/";
  if (LIVE_SET.has(p)) return false;
  return GONE_SET.has(p) || GONE_PREFIXES.some((pre) => p.startsWith(pre));
}

/** True when a path is served as a page (not redirected, not gone). */
export function isServed(path) {
  const p = path.replace(/\/$/, "") || "/";
  return !REDIRECT_SET.has(p) && !isGone(p);
}
