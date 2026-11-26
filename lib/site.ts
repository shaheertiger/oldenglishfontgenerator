// Site-wide constants and the cluster link list used by the footer and
// "More Old English tools" blocks.

export const SITE_URL = "https://www.oldenglishfontgenerator.com";
export const SITE_NAME = "Old English Font Generator";
export const CONTACT_EMAIL = "hello@oldenglishfontgenerator.com";

import { getCluster, home } from "@/content/pages";
import { isServed } from "@/lib/redirects.mjs";

export type ToolLink = { href: string; label: string; blurb: string; group?: "theme" };

const ALL_TOOL_LINKS: ToolLink[] = [
  { href: "/font-generator/old-english", label: "Old English Font Generator", blurb: "14 classic blackletter styles plus ready-made Old English words to copy." },
  { href: "/font-generator/old-english-tattoo", label: "Old English Tattoo Font", blurb: "Preview names and dates on a skin mockup, then download a PNG for your artist." },
  { href: "/old-english-alphabet", label: "Old English Alphabet", blurb: "Every letter A–Z and a–z, one tap to copy, with a printable sheet." },
  { href: "/font-generator/old-english-letters", label: "Old English Font Alphabet", blurb: "Old English letters A–Z and a–z, initials and monograms." },
  { href: "/font-generator/old-cursive", label: "Old Cursive Font", blurb: "Blackletter capitals joined to flowing script lowercase." },
  { href: "/font-generator/gothic-letters", label: "Gothic Letters", blurb: "Blackletter A–Z with dark decorated sets and the real Gothic alphabet." },
  { href: "/font-generator/blackletter", label: "Blackletter Font Generator", blurb: "Textura, rotunda and fraktur explained, with matching styles." },
  { href: "/font-generator/fraktur", label: "Fraktur Font Generator", blurb: "German Fraktur with umlauts, ß and the long s." },
  { href: "/chicano-font-generator", label: "Chicano Font Generator", blurb: "Lowrider and cholo-style lettering for captions and flash ideas." },
  { href: "/old-english-name-generator", label: "Old English Name Generator", blurb: "Your name in blackletter, with date and bio presets." },
  { href: "/font-generator/medieval", label: "Medieval Font Generator", blurb: "Blackletter and manuscript-style text for games, D&D and fantasy names." },
  { href: "/font-generator/old-english-ig", label: "Instagram Old English Font", blurb: "Old English bio and name layouts to copy." },
  { href: "/fonts/old-english", label: "Old English Fonts (Free)", blurb: "Ten free, open-licence blackletter fonts to download, with live preview." },
  { href: "/symbols", label: "Gothic Symbols", blurb: "Crosses, daggers, skulls and manuscript ornaments to copy." },
  { href: "/how-to-write-old-english", label: "How to Write Old English", blurb: "A beginner's guide to blackletter by hand." },
  { href: "/old-english-text-to-image", label: "Old English Text to Image", blurb: "Export real blackletter type as PNG or SVG." },
  // Lettering by theme (footer column 2)
  { group: "theme", href: "/tattoo-font-generator", label: "Tattoo Font Generator", blurb: "Blackletter, script, typewriter and Roman numeral tattoo lettering side by side." },
  { group: "theme", href: "/latin-tattoo-font", label: "Latin Tattoo Font", blurb: "Memento mori, carpe diem and 10 more Latin phrases, with meanings and letter counts." },
  { group: "theme", href: "/bible-verse-font", label: "Bible Verse Font", blurb: "Ten popular KJV verses in gothic lettering, with character counts for tattoos." },
  { group: "theme", href: "/font-generator/gangster", label: "Gangster Font Generator", blurb: "Old English capitals with cursive script, the West Coast lettering mix." },
  { group: "theme", href: "/biker-font-generator", label: "Biker Font Generator", blurb: "Rocker-patch lettering for jackets, vests and club-style merch." },
  { group: "theme", href: "/metal-font-generator", label: "Metal Font Generator", blurb: "Black metal and heavy metal band lettering to copy and paste." },
  { group: "theme", href: "/horror-font-generator", label: "Horror Font Generator", blurb: "Scary, cursed and vampire gothic text with Halloween symbols." },
  { group: "theme", href: "/death-note-font", label: "Death Note Font", blurb: "The notebook-cover gothic look and the blackletter L, as copy-paste text." },
  { group: "theme", href: "/diploma-font", label: "Diploma Font", blurb: "The blackletter used on diplomas and certificates, with free alternatives." },
  { group: "theme", href: "/newspaper-masthead-font", label: "Newspaper Masthead Font", blurb: "Blackletter nameplates like the New York Times, explained and to copy." },
  { group: "theme", href: "/illuminated-letters", label: "Illuminated Letters", blurb: "Medieval drop caps and decorated initials to copy or export." },
  { group: "theme", href: "/bold-fraktur", label: "Bold Fraktur Alphabet", blurb: "All 52 Bold Fraktur letters with code points, ready to copy." },
  { group: "theme", href: "/old-english-font-tiktok", label: "Old English Font for TikTok", blurb: "Names and bios that fit TikTok's 30- and 80-character limits." },
  { group: "theme", href: "/old-english-font-snapchat", label: "Old English Font for Snapchat", blurb: "Gothic display names and captions, and why your @username can't use them." },
  { group: "theme", href: "/old-english-font-youtube", label: "Old English Font for YouTube", blurb: "Blackletter channel names, video titles and comments that paste cleanly." },
  { group: "theme", href: "/old-english-font-roblox", label: "Old English Font for Roblox", blurb: "Where gothic text works on Roblox, where the filter blocks it, and what to use instead." },
  { group: "theme", href: "/viking-font-generator", label: "Viking Font Generator", blurb: "Elder Futhark, Viking-age and Anglo-Saxon runes, plus Norse-style blackletter." },
  { group: "theme", href: "/different-fonts", label: "Letters in Different Fonts", blurb: "Any letter or number in 40+ styles, one tap to copy." },
  { group: "theme", href: "/hieroglyphics-translator", label: "Hieroglyphics Translator", blurb: "English to the Egyptian sign alphabet, with the A–Z key." },
  { group: "theme", href: "/font-generator/fancy-letters", label: "Fancy Letters Alphabet", blurb: "Script, bubble, outline and Fraktur A–Z to copy." },
  { group: "theme", href: "/cuneiform-translator", label: "Cuneiform Translator", blurb: "English to Sumerian-style cuneiform signs, with an A–Z key." },
  { group: "theme", href: "/font-generator/handwriting", label: "Handwriting Font Generator", blurb: "Script, cursive and italic text to copy and paste." },
  { group: "theme", href: "/ancient-font-generator", label: "Ancient Font Generator", blurb: "Your name in hieroglyphs, Phoenician, Ogham, runes and the Gothic alphabet." },
  { group: "theme", href: "/renaissance-font-generator", label: "Renaissance Font Generator", blurb: "Chancery italic, Roman capitals, long s and fleurons from 15th-century Italy." },
  { group: "theme", href: "/old-english-font-twitch", label: "Old English Font for Twitch", blurb: "Gothic stream titles, chat and bios, counted against Twitch's 140-character title limit." },
  { group: "theme", href: "/victorian-font-generator", label: "Victorian Font Generator", blurb: "Copperplate-style cursive, Gothic Revival blackletter and ornate 1800s poster lettering." },
  { group: "theme", href: "/happy-birthday-font", label: "Happy Birthday Font", blurb: "Happy Birthday in calligraphy, Old English and decorated styles to copy and paste." },
  { group: "theme", href: "/old-english-font-pinterest", label: "Old English Font for Pinterest", blurb: "Gothic board names and pin titles, without hurting Pinterest search." },
  { group: "theme", href: "/old-english-font-facebook", label: "Old English Font for Facebook", blurb: "Gothic text for posts, comments and your intro, and where Facebook blocks it." },
];

export const TOOL_LINKS: ToolLink[] = ALL_TOOL_LINKS.filter((t) => isServed(t.href));

/** Links for "related" blocks: curated label if there is one, else the page's own crumb and description. */
export function toolLinks(hrefs: string[]): ToolLink[] {
  return hrefs
    .map((h) => {
      const t = TOOL_LINKS.find((x) => x.href === h);
      if (t) return t;
      const c = h === "/" ? home : getCluster(h.slice(1));
      if (c) return { href: h, label: c.crumb === "Home" ? c.h1 : c.crumb, blurb: c.description.split(/(?<=[.:])\s/)[0] };
      if (/^\/different-fonts\/[a-z0-9]$/.test(h)) return { href: h, label: `${h.slice(-1).toUpperCase()} in Different Fonts`, blurb: "One character in 40+ styles to copy." };
      return undefined;
    })
    .filter((t): t is ToolLink => Boolean(t) && isServed((t as ToolLink).href));
}
