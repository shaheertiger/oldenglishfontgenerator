// Single source of truth for pruned URLs.
//  - REDIRECTS: 301s from removed pages to their closest Old English page.
//  - GONE / GONE_PREFIXES: removed with no close equivalent -> 410 (proxy.ts).
// REDIRECTS.md is generated from this file: `node scripts/redirects-md.mjs`.

const fg = (slug, destination) => ({ source: `/font-generator/${slug}`, destination });

export const REDIRECTS = [
  { source: "/font-generator", destination: "/" },
  fg("old-english", "/"),
  fg("old-english-copy-paste", "/"),
  fg("ye-old-english", "/"),
  fg("old-english-word", "/"),
  fg("tattoo", "/old-english-tattoo-font"),
  fg("old-english-tattoo", "/old-english-tattoo-font"),
  fg("gothic", "/gothic-font-generator"),
  fg("gothic-letters", "/gothic-font-generator"),
  fg("gothic-printing", "/gothic-font-generator"),
  fg("modern-gothic", "/gothic-font-generator"),
  fg("small-gothic", "/gothic-font-generator"),
  fg("satanic", "/gothic-font-generator"),
  fg("blackletter", "/blackletter-generator"),
  fg("blackletter-copy-paste", "/blackletter-generator"),
  fg("fraktur", "/fraktur-generator"),
  fg("medieval", "/medieval-font-generator"),
  fg("cursive", "/old-english-cursive"),
  fg("old-cursive", "/old-english-cursive"),
  fg("calligraphy", "/old-english-cursive"),
  fg("old-english-letters", "/old-english-letters"),
  fg("old-english-numbers", "/old-english-numbers"),
  fg("old-english-ig", "/old-english-font-instagram"),
  fg("instagram", "/old-english-font-instagram"),
  fg("ig-font", "/old-english-font-instagram"),
  fg("discord", "/old-english-font-discord"),
  fg("discord-font", "/old-english-font-discord"),
  { source: "/different-fonts", destination: "/old-english-alphabet" },
  ...[..."abcdefghijklmnopqrstuvwxyz"].map((c) => ({ source: `/different-fonts/${c}`, destination: "/old-english-alphabet" })),
  ...[..."0123456789"].map((c) => ({ source: `/different-fonts/${c}`, destination: "/old-english-numbers" })),
  { source: "/roman-numeral-converter", destination: "/old-english-numbers" },
  { source: "/medieval-translator", destination: "/medieval-font-generator" },
  { source: "/runic-translator", destination: "/viking-font-generator" },
  { source: "/es", destination: "/" },
  { source: "/es/font-generator/old-english", destination: "/" },
  { source: "/blog/change-instagram-bio-font", destination: "/blog/old-english-fonts-instagram-bio" },
  { source: "/blog/what-are-unicode-fonts", destination: "/blog/how-unicode-fonts-actually-work" },
  { source: "/blog/cool-discord-username-ideas", destination: "/blog/best-old-english-fonts-for-discord" },
];

export const GONE = [
  "/ascii-generator", "/auto-font-styler", "/binary-code-translator", "/case-converter",
  "/coquette", "/cuneiform-translator", "/favorites", "/font-mixer", "/headcanon-generator",
  "/hieroglyphics-translator", "/image-to-ascii", "/invisible-text-generator",
  "/morse-code-translator", "/pig-latin-translator", "/pirate-translator", "/preppy",
  "/sitemap", "/stacked-text-generator", "/story-generator",
  "/subscript-generator", "/tools", "/username-generator", "/uuid-generator",
  "/symbols", "/emoticons", "/name-generator",
  "/blog/fancy-text-copy-paste-iphone-android", "/blog/aesthetic-fonts-tiktok-bio",
  "/blog/fancy-text-whatsapp", "/blog/how-to-bold-text-instagram",
  "/blog/cursive-text-generator-guide", "/blog/small-text-superscript-generator",
  "/blog/bubble-letters-generator-guide", "/blog/strikethrough-text-copy-paste",
  "/blog/aesthetic-symbols-instagram-bio", "/blog/invisible-character-copy-paste",
  "/blog/upside-down-text-generator-guide", "/blog/vaporwave-text-generator-guide",
  "/blog/schedule-posts-with-fancy-fonts", "/blog/character-limits-styled-text-social-platforms",
  "/blog/adapt-one-caption-for-every-platform", "/blog/batch-social-media-posts-one-afternoon",
  "/blog/social-media-content-calendar-small-business",
];

// Any path under these prefixes that is not in REDIRECTS is gone.
export const GONE_PREFIXES = ["/font-generator/", "/es/", "/symbols/", "/emoticons/", "/name-generator/", "/different-fonts/"];
