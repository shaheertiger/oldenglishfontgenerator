// Site-wide constants and the cluster link list used by the footer and
// "More Old English tools" blocks.

export const SITE_URL = "https://www.oldenglishfontgenerator.com";
export const SITE_NAME = "Old English Font Generator";
export const CONTACT_EMAIL = "hello@oldenglishfontgenerator.com";

export type ToolLink = { href: string; label: string; blurb: string };

export const TOOL_LINKS: ToolLink[] = [
  { href: "/old-english-tattoo-font", label: "Old English Tattoo Font", blurb: "Preview names and dates on a skin mockup, then download a PNG for your artist." },
  { href: "/old-english-alphabet", label: "Old English Alphabet", blurb: "Every letter A–Z and a–z, one tap to copy, with a printable sheet." },
  { href: "/old-english-letters", label: "Old English Letters", blurb: "Single letters, initials and monograms." },
  { href: "/old-english-numbers", label: "Old English Numbers", blurb: "Why blackletter digits don't exist, and what to use instead." },
  { href: "/old-english-cursive", label: "Old English Cursive", blurb: "Blackletter capitals joined to flowing script lowercase." },
  { href: "/gothic-font-generator", label: "Gothic Font Generator", blurb: "Darker blackletter with crosses, skulls and worn ink." },
  { href: "/blackletter-generator", label: "Blackletter Generator", blurb: "Textura, rotunda and fraktur explained, with matching styles." },
  { href: "/fraktur-generator", label: "Fraktur Generator", blurb: "German Fraktur with umlauts, ß and the long s." },
  { href: "/chicano-font-generator", label: "Chicano Font Generator", blurb: "Lowrider and cholo-style lettering for captions and flash ideas." },
  { href: "/old-english-name-generator", label: "Old English Name Generator", blurb: "Your name in blackletter, with date and bio presets." },
  { href: "/medieval-font-generator", label: "Medieval Font Generator", blurb: "Manuscript-style text with thorns, long s and fleurons." },
  { href: "/old-english-font-instagram", label: "Old English Font for Instagram", blurb: "Bio templates that fit the 150-character limit." },
  { href: "/old-english-font-discord", label: "Old English Discord Names", blurb: "Display names and nicknames that fit 32 characters." },
  { href: "/old-english-text-to-image", label: "Old English Text to Image", blurb: "Export real blackletter type as PNG or SVG." },
];

export function toolLinks(hrefs: string[]): ToolLink[] {
  return hrefs.map((h) => TOOL_LINKS.find((t) => t.href === h)).filter((t): t is ToolLink => Boolean(t));
}
