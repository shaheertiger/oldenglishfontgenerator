// Site-wide constants and the cluster link list used by the footer and
// "More Old English tools" blocks.

export const SITE_URL = "https://www.oldenglishfontgenerator.com";
export const SITE_NAME = "Old English Font Generator";
export const CONTACT_EMAIL = "hello@oldenglishfontgenerator.com";

export type ToolLink = { href: string; label: string; blurb: string; group?: "theme" };

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
  { href: "/fonts/old-english", label: "Old English Fonts (Free)", blurb: "Ten free, open-licence blackletter fonts to download, with live preview." },
  { href: "/gothic-symbols", label: "Gothic Symbols", blurb: "Crosses, daggers, skulls and manuscript ornaments to copy." },
  { href: "/how-to-write-old-english", label: "How to Write Old English", blurb: "A beginner's guide to blackletter by hand." },
  { href: "/old-english-text-to-image", label: "Old English Text to Image", blurb: "Export real blackletter type as PNG or SVG." },
  // Lettering by theme (footer column 2)
  { group: "theme", href: "/tattoo-font-generator", label: "Tattoo Font Generator", blurb: "Blackletter, script, typewriter and Roman numeral tattoo lettering side by side." },
  { group: "theme", href: "/latin-tattoo-font", label: "Latin Tattoo Font", blurb: "Memento mori, carpe diem and 10 more Latin phrases, with meanings and letter counts." },
  { group: "theme", href: "/bible-verse-font", label: "Bible Verse Font", blurb: "Ten popular KJV verses in gothic lettering, with character counts for tattoos." },
  { group: "theme", href: "/gangster-font-generator", label: "Gangster Font Generator", blurb: "Old English capitals with cursive script, the West Coast lettering mix." },
  { group: "theme", href: "/biker-font-generator", label: "Biker Font Generator", blurb: "Rocker-patch lettering for jackets, vests and club-style merch." },
  { group: "theme", href: "/metal-font-generator", label: "Metal Font Generator", blurb: "Black metal and heavy metal band lettering to copy and paste." },
  { group: "theme", href: "/horror-font-generator", label: "Horror Font Generator", blurb: "Scary, cursed and vampire gothic text with Halloween symbols." },
  { group: "theme", href: "/death-note-font", label: "Death Note Font", blurb: "The notebook-cover gothic look and the blackletter L, as copy-paste text." },
  { group: "theme", href: "/diploma-font", label: "Diploma Font", blurb: "The blackletter used on diplomas and certificates, with free alternatives." },
  { group: "theme", href: "/newspaper-masthead-font", label: "Newspaper Masthead Font", blurb: "Blackletter nameplates like the New York Times, explained and to copy." },
  { group: "theme", href: "/illuminated-letters", label: "Illuminated Letters", blurb: "Medieval drop caps and decorated initials to copy or export." },
  { group: "theme", href: "/bold-fraktur", label: "Bold Fraktur Alphabet", blurb: "All 52 Bold Fraktur letters with code points, ready to copy." },
  { group: "theme", href: "/old-english-font-tiktok", label: "Old English Font for TikTok", blurb: "Names and bios that fit TikTok's 30- and 80-character limits." },
  { group: "theme", href: "/old-english-font-facebook", label: "Old English Font for Facebook", blurb: "Gothic text for posts, comments and your intro, and where Facebook blocks it." },
];

export function toolLinks(hrefs: string[]): ToolLink[] {
  return hrefs.map((h) => TOOL_LINKS.find((t) => t.href === h)).filter((t): t is ToolLink => Boolean(t));
}
