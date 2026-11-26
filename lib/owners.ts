// Growth plan (Month 1): the owner page of each query family (docs/bing-query-map.md).
// For each: its top three Bing/Copilot queries (used as anchor text when other
// pages link to it, rotating so links vary) and a standalone definition block.
import { ALL_STYLES } from "./fonts";

export type Owner = { path: string; anchors: [string, string, string]; term: string; definition: string };

export const OWNERS: Owner[] = [
  { path: "/font-generator/old-english", anchors: ["Old English font", "Old English font generator", "Old English font copy and paste"], term: "Old English font",
    definition: "Old English font is a popular name for blackletter, the dense, angular script used for European manuscripts and early printed books from about the 12th to the 16th century. It has nothing to do with the Old English language of the Anglo-Saxons. Copy-and-paste Old English text is built from Unicode Fraktur characters, so it keeps its look wherever it is pasted." },
  { path: "/font-generator/fancy-letters", anchors: ["fancy letters alphabet", "fancy alphabet letters", "copy and paste letters"], term: "Fancy letters",
    definition: "Fancy letters are decorative versions of the Latin alphabet, such as script 𝒜, double-struck 𝔸, circled Ⓐ and Fraktur 𝔄, that exist as separate Unicode characters. Because each one is its own character rather than a font setting, fancy letters can be pasted into places that have no font menu." },
  { path: "/font-generator/gothic-letters", anchors: ["gothic letters", "gothic font copy and paste", "goth letters"], term: "Gothic letters",
    definition: "Gothic letters usually means blackletter, the heavy, pointed lettering of medieval Europe that Renaissance writers dismissed as \"gothic\". The term also names the alphabet of the Gothic language, devised by Bishop Wulfila in the 4th century, which looks entirely different." },
  { path: "/font-generator/medieval", anchors: ["medieval font", "medieval font generator", "medieval font copy and paste"], term: "A medieval font",
    definition: "A medieval font is lettering modelled on the hands of medieval European scribes, above all textura and the other blackletter scripts used from about 1150 to 1500. Medieval text online imitates that look with Unicode Fraktur letters and older characters such as thorn (þ) and the long s (ſ)." },
  { path: "/font-generator/old-english-letters", anchors: ["Old English font alphabet", "Old English letters", "Old English alphabet font"], term: "Old English letters",
    definition: "Old English letters are the 26 letters of the modern alphabet drawn in blackletter, capital 𝔄 to ℨ and small 𝔞 to 𝔷. English speakers have long called blackletter \"Old English\" lettering; the Old English language itself was written in a rounder insular script." },
  { path: "/font-generator/handwriting", anchors: ["handwriting font generator", "handwriting font copy and paste", "handwritten font generator"], term: "A handwriting font",
    definition: "A handwriting font is lettering that imitates writing with a pen: joined cursive, looping script capitals or a neat slanted hand. Handwriting text copied from a generator is built from Unicode script and italic letters, so it keeps the handwritten look in apps without a font menu." },
  { path: "/old-english-alphabet", anchors: ["Old English alphabet", "Old English font numbers", "Old English numbers"], term: "The Old English alphabet",
    definition: "The Old English alphabet, in the lettering sense, is the modern A–Z written in blackletter. Unicode includes it as the Mathematical Fraktur and Bold Fraktur alphabets but has no blackletter digits, so Old English numbers are written with bold digits or Roman numerals." },
  { path: "/font-generator/thank-you", anchors: ["thank you font", "thank you font style", "thank you in different fonts"], term: "A thank you font",
    definition: "A thank you font is any decorative lettering used to write \"thank you\", most often a flowing script for cards, captions and messages. As copy-and-paste text it is the phrase rebuilt from Unicode script, bold or decorated characters." },
  { path: "/hieroglyphics-translator", anchors: ["hieroglyphics translator", "Egyptian hieroglyphics translator", "English to hieroglyphics"], term: "A hieroglyphics translator",
    definition: "A hieroglyphics translator converts English letters into Egyptian hieroglyphs using the uniliteral signs, the hieroglyphs that each stood for a single consonant. It spells English by sound, sign by sign; it cannot translate meaning, because Egyptian writing also used signs for whole words and syllables." },
  { path: "/font-generator/italic", anchors: ["italics generator", "italic text generator", "copy and paste italics"], term: "An italics generator",
    definition: "An italics generator turns plain letters into the slanted letter forms of Unicode's Mathematical Italic alphabets. Because each slanted letter is a separate character, the italic look stays when the text is pasted into a field that has no formatting buttons." },
  { path: "/symbols", anchors: ["gothic symbols copy and paste", "gothic symbols", "gothic symbols to copy"], term: "Gothic symbols",
    definition: "Gothic symbols are characters with a dark or medieval look, such as crosses (✠ ☩ †), skulls (☠), fleurons (❦ ☙) and pentagrams (⛧), used to decorate gothic text. Each one is a standard Unicode symbol, so it copies and pastes like a letter." },
  { path: "/cuneiform-translator", anchors: ["cuneiform translator", "English to cuneiform", "cuneiform copy and paste"], term: "A cuneiform translator",
    definition: "A cuneiform translator turns English letters into cuneiform signs, the wedge-shaped script of ancient Mesopotamia pressed into clay with a reed stylus. Because real cuneiform wrote syllables and words, an English-to-cuneiform tool is a letter-for-sign cipher, not a translation." },
  { path: "/font-generator/signature", anchors: ["signature font copy and paste", "signature font generator", "copy and paste signature font"], term: "A signature font",
    definition: "A signature font is a flowing script used to write a name the way a handwritten signature looks. As copy-and-paste text it is the name rebuilt from Unicode script and italic letters: a styled name, not a legal electronic signature." },
  { path: "/different-fonts", anchors: ["letters in different fonts", "letter in different fonts", "alphabet in different fonts"], term: "Letters in different fonts",
    definition: "Letters in different fonts are one letter written as different Unicode characters: a capital A can be 𝔄, 𝒜, 𝔸, Ⓐ or Ａ. Each form is its own character, so a single letter in a different font can be copied and pasted anywhere text is accepted." },
  { path: "/death-note-font", anchors: ["Death Note font", "Death Note font copy and paste", "Death Note title font"], term: "Death Note-style lettering",
    definition: "Death Note-style lettering is the gothic, blackletter look associated with the notebook in the manga and anime Death Note. Copy-and-paste text in this style is made of Unicode Fraktur characters; it is not the official logo lettering." },
  { path: "/", anchors: ["blackletter text generator", "Old English text generator", "gothic text generator"], term: "Blackletter",
    definition: "Blackletter is the family of dense, angular scripts used across medieval Europe, known in English as Old English, gothic or Fraktur lettering. A blackletter text generator rewrites your text in Unicode Fraktur characters, so it keeps that look wherever you paste it." },
];

export const OWNER_BY_PATH = Object.fromEntries(OWNERS.map((o) => [o.path, o])) as Record<string, Owner>;

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

/** Links to other owners from a page: up to n, anchor text rotates between each owner's top 3 queries. */
export function relatedOwners(fromPath: string, n = 5): { href: string; anchor: string }[] {
  const others = OWNERS.filter((o) => o.path !== fromPath && o.path !== "/");
  const start = hash(fromPath) % others.length;
  return Array.from({ length: Math.min(n, others.length) }, (_, i) => {
    const o = others[(start + i * 3) % others.length];
    return { href: o.path, anchor: o.anchors[hash(fromPath + o.path) % 3] };
  }).filter((x, i, a) => a.findIndex((y) => y.href === x.href) === i);
}

// ---------- "How it works": the Unicode blocks a page's styles actually use ----------
const BLOCKS: [number, number, string][] = [
  [0x0300, 0x036f, "Combining Diacritical Marks"], [0x0250, 0x02af, "IPA Extensions"], [0x02b0, 0x02ff, "Spacing Modifier Letters"],
  [0x0370, 0x03ff, "Greek and Coptic"], [0x0600, 0x06ff, "Arabic"], [0x1680, 0x169f, "Ogham"], [0x16a0, 0x16ff, "Runic"],
  [0x1d00, 0x1d7f, "Phonetic Extensions"], [0x1d80, 0x1dbf, "Phonetic Extensions Supplement"], [0x1e00, 0x1eff, "Latin Extended Additional"],
  [0x2000, 0x206f, "General Punctuation"], [0x2070, 0x209f, "Superscripts and Subscripts"], [0x20d0, 0x20ff, "Combining Diacritical Marks for Symbols"],
  [0x2100, 0x214f, "Letterlike Symbols"], [0x2150, 0x218f, "Number Forms"], [0x2190, 0x21ff, "Arrows"], [0x2460, 0x24ff, "Enclosed Alphanumerics"],
  [0x2500, 0x257f, "Box Drawing"], [0x2580, 0x259f, "Block Elements"], [0x25a0, 0x25ff, "Geometric Shapes"], [0x2600, 0x26ff, "Miscellaneous Symbols"],
  [0x2700, 0x27bf, "Dingbats"], [0x27c0, 0x27ef, "Miscellaneous Mathematical Symbols-A"], [0x2b00, 0x2bff, "Miscellaneous Symbols and Arrows"],
  [0x3000, 0x303f, "CJK Symbols and Punctuation"], [0x3100, 0x312f, "Bopomofo"], [0xa720, 0xa7ff, "Latin Extended-D"], [0xff00, 0xffef, "Halfwidth and Fullwidth Forms"],
  [0x10330, 0x1034f, "Gothic"], [0x10900, 0x1091f, "Phoenician"], [0x12000, 0x123ff, "Cuneiform"], [0x12400, 0x1247f, "Cuneiform Numbers and Punctuation"],
  [0x13000, 0x1342f, "Egyptian Hieroglyphs"], [0x1d400, 0x1d7ff, "Mathematical Alphanumeric Symbols"], [0x1f100, 0x1f1ff, "Enclosed Alphanumeric Supplement"],
  [0x1f300, 0x1f5ff, "Miscellaneous Symbols and Pictographs"], [0x1f600, 0x1f64f, "Emoticons"], [0x1f700, 0x1f77f, "Alchemical Symbols"], [0x1f900, 0x1f9ff, "Supplemental Symbols and Pictographs"],
];
const chartUrl = (start: number) => `https://www.unicode.org/charts/PDF/U${start.toString(16).toUpperCase().padStart(4, "0")}.pdf`;
const hex = (n: number) => "U+" + n.toString(16).toUpperCase().padStart(4, "0");

/** Rows: [block, range, used by (style names), chart URL] for the characters a set of styles produces. */
export function unicodeBlocks(styleIds: string[], extraText = ""): { block: string; range: string; usedBy: string; url: string }[] {
  const SAMPLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const use = new Map<string, Set<string>>();
  const add = (cp: number, who: string) => {
    const b = BLOCKS.find(([a, z]) => cp >= a && cp <= z);
    if (!b) return;
    const key = b[2];
    use.set(key, (use.get(key) ?? new Set()).add(who));
  };
  for (const id of styleIds) {
    const s = ALL_STYLES[id];
    if (!s) continue;
    for (const ch of s.transform(SAMPLE)) add(ch.codePointAt(0)!, s.name);
  }
  for (const ch of extraText) add(ch.codePointAt(0)!, "the tables on this page");
  return BLOCKS.filter(([, , name]) => use.has(name)).map(([a, z, name]) => {
    const who = [...use.get(name)!];
    return { block: name, range: `${hex(a)}–${hex(z)}`, usedBy: who.length > 4 ? `${who.slice(0, 4).join(", ")} and ${who.length - 4} more` : who.join(", "), url: chartUrl(a) };
  });
}

/** Styles that map single characters (so a per-character table makes sense), deduplicated. */
export function tableStyles(styleIds: string[], max = 8): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const id of styleIds) {
    const s = ALL_STYLES[id];
    if (!s) continue;
    const g = [..."AaZz09"].map((c) => s.transform(c));
    const single = g.every((x) => [...x.normalize("NFC")].length <= 3 && !/\s/.test(x));
    const changed = g.filter((x, i) => x !== "AaZz09"[i]).length >= 4;
    const sig = g.join("|");
    if (!single || !changed || seen.has(sig)) continue;
    seen.add(sig);
    out.push(id);
    if (out.length >= max) break;
  }
  return out;
}
