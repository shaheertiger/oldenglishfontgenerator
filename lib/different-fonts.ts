// /different-fonts and /different-fonts/{a-z,0-9}: one character in every
// distinct Unicode form we can produce. Restored Nov 2026 at the URLs Bing
// and Copilot ranked ("y in different fonts", "capital u font", "t font
// styles") before commit 00a2b7f redirected them.
//
// Per-character copy comes from lib/letters.ts (A–Z) and DIGITS below (0–9);
// the rest of each page is computed from the character itself (which forms
// exist, which come from older Unicode blocks, code points), so no two pages
// share more than their headings.
import { ALL_STYLES } from "./fonts";
import { LETTER_BY_L } from "./letters";
import { HISTORY } from "./char-history";

export const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
export const isDigit = (c: string) => /[0-9]/.test(c);

// Candidate styles, most useful first. Duplicate outputs are dropped per character.
const SHOW_IDS = [
  "fraktur", "bold-fraktur", "script", "bold-script", "bold-serif", "italic-serif", "bold-italic-serif",
  "u-sans-bold", "u-sans-italic", "u-sans-bold-italic", "u-double-struck", "u-monospace",
  "u-bubble", "u-bubble-filled", "u-squared", "u-fullwidth", "u-small-caps", "u-superscript",
  "u-upside-down", "circled", "boxed", "gothic-framed", "frame-white", "frame-lenticular", "frame-corner",
  "fraktur-underline", "fraktur-strike", "double-underline", "overline", "slashed", "wavy", "dotted",
  "u-underline", "u-strikethrough", "u-double-underline", "u-slash-through",
  "u-love-parens", "u-japanese-style", "u-zalgo-soft", "cursed", "distressed",
  "deco-crown", "deco-stars", "deco-heart", "deco-fleur", "frame-tibetan", "u-morse",
];

// Digit forms Unicode encodes that the style engine doesn't produce for single digits.
const DIGIT_EXTRA: Record<string, [string, string][]> = Object.fromEntries(
  "0123456789".split("").map((d) => {
    const n = +d;
    const rows: [string, string][] = [
      ["Subscript", String.fromCodePoint(0x2080 + n)],
      ["Sans-serif", String.fromCodePoint(0x1d7e2 + n)],
      ["Dingbat negative circled", n === 0 ? "⓿" : String.fromCodePoint(0x2775 + n)],
      ["Dingbat circled sans", n === 0 ? "🄋" : String.fromCodePoint(0x277f + n)],
      ["Parenthesized", n === 0 ? "" : String.fromCodePoint(0x2473 + n)],
      ["Full stop", n === 0 ? "🄀" : String.fromCodePoint(0x2487 + n)],
      ["Digit comma", String.fromCodePoint(0x1f101 + n)],
      ["Roman numeral", n === 0 ? "" : String.fromCodePoint(0x215f + n)],
      ["Keycap emoji", `${d}️⃣`],
    ];
    return [d, rows.filter(([, g]) => g)];
  })
);

export type Form = { style: string; glyph: string };

/** Every distinct form of one character (case given). */
export function forms(ch: string): Form[] {
  const seen = new Set<string>([ch]);
  const out: Form[] = [];
  for (const id of SHOW_IDS) {
    const s = ALL_STYLES[id];
    if (!s) continue;
    const g = s.transform(ch).trim();
    if (!g || seen.has(g)) continue;
    seen.add(g);
    out.push({ style: s.name, glyph: g });
  }
  for (const [style, g] of DIGIT_EXTRA[ch] ?? []) if (!seen.has(g)) { seen.add(g); out.push({ style, glyph: g }); }
  return out;
}

/** Styles whose output is unchanged for this character (Unicode has no such form). */
export function missing(ch: string): string[] {
  return ["u-small-caps", "u-superscript", "u-bubble", "u-squared", "fraktur", "script", "italic-serif", "u-double-struck"]
    .map((id) => ALL_STYLES[id])
    .filter((s) => s && s.transform(ch) === ch)
    .map((s) => s.name);
}

const hex = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");
const isOld = (s: string) => { const cp = s.codePointAt(0)!; return cp >= 0x2100 && cp <= 0x214f; };

/** Code points for the plain mathematical alphabets: unique data for each character. */
export function codeTable(ch: string): string[][] {
  const ids: [string, string][] = [
    ["fraktur", "Fraktur"], ["bold-fraktur", "Bold Fraktur"], ["script", "Script"], ["bold-script", "Bold Script"],
    ["bold-serif", "Bold"], ["italic-serif", "Italic"], ["u-double-struck", "Double-struck"], ["u-monospace", "Monospace"],
    ["u-sans-bold", "Sans-serif Bold"], ["u-fullwidth", "Fullwidth"], ["u-bubble", "Circled"],
  ];
  const rows: string[][] = [];
  for (const [id, label] of ids) {
    const s = ALL_STYLES[id];
    if (!s) continue;
    const g = s.transform(ch);
    if (g === ch) continue;
    rows.push([label, g, hex(g) + (isOld(g) ? " (Letterlike Symbols)" : "")]);
  }
  return rows;
}

/** Sentences computed from this character's Unicode facts. */
export function facts(ch: string): string[] {
  const U = ch.toUpperCase();
  const out: string[] = [];
  for (const c of isDigit(ch) ? [ch] : [U, ch]) {
    const odd = ["fraktur", "script", "italic-serif", "u-double-struck"]
      .map((id) => ALL_STYLES[id])
      .filter((s) => s && s.transform(c) !== c && isOld(s.transform(c)))
      .map((s) => `${s.name} ${s.transform(c)} (${hex(s.transform(c))})`);
    if (odd.length) out.push(`From Letterlike Symbols, not the math block: ${odd.join(", ")}.`);
  }
  const miss = missing(ch);
  if (miss.length) out.push(`Missing for ${ch}: ${miss.join(", ")}.`);
  return out;
}

export type CharInfo = { shape: string; confused: string; use: string; words: string[] };

export const history = (ch: string) => HISTORY[ch] ?? "";

// Digits: written for each number (the letters live in lib/letters.ts).
export const DIGITS: Record<string, CharInfo> = {
  "0": { words: ["2020", "100%", "007", "10/10", "Est. 2000"],
    shape: "Zero is a closed oval. Typefaces make it narrower than the letter O, and coding fonts add a slash or a dot inside so the two can't be mixed up; the double-struck 𝟘 and monospace 𝟶 forms keep that narrow shape.",
    confused: "0 and capital O are the classic pair. Fullwidth ０ and circled ⓪ are digits, while Ⓞ and Ｏ are letters, which matters if a form or a game checks the characters.",
    use: "People look for a styled 0 for scores, years like 2000 and agent-style names such as 007. There is no circled-digit block slot for zero next to ①–⑳; ⓪ was added separately at U+24EA." },
  "1": { words: ["#1", "No. 1", "1st", "Day 1", "1 of 1"],
    shape: "One is a single stem, usually with a flag at the top and often a foot at the base. Serif styles such as bold 𝟏 keep the flag; the sans 𝟣 and monospace 𝟷 versions differ mostly in that foot.",
    confused: "1, lowercase l and capital I look alike in many sans styles. If a name must stay readable, pick a serif or monospace 1, where the flag and foot set it apart.",
    use: "A styled 1 is searched for rankings and team names (#1, No. 1) and for 'day one' captions. The Roman numeral Ⅰ is its own character, U+2160, not a capital I." },
  "2": { words: ["2x", "Top 2", "22", "2 Fast", "Part 2"],
    shape: "Two is a curve over a flat base. In script-like and italic forms the base often curls, while the double-struck 𝟚 and bold 𝟐 keep a straight foot.",
    confused: "2 and capital Z share the diagonal and the flat base. The 2 starts with a curve, the Z with a straight bar.",
    use: "A styled 2 shows up in sequels and part numbers (Part 2), doubles in game names and couples' dates." },
  "3": { words: ["3D", "Top 3", "333", "Hat-trick 3", "Season 3"],
    shape: "Three is two stacked bowls open to the left, either both round or with a flat top. Fonts differ most in that top; superscript ³ is one of the three digits that were in Latin-1 long before the rest.",
    confused: "3 is often swapped with capital E in leet speak and resembles the blackletter Z (ℨ), whose tail drops below the line.",
    use: "People style 3 for '3D', season numbers and angel-number captions like 333. Superscript ³ (U+00B3) is also the cubed sign in measurements." },
  "4": { words: ["4ever", "4U", "444", "Top 4", "4th"],
    shape: "Four comes in two shapes: the closed 4 with a triangle and the open 4 whose diagonal doesn't meet the top. Unicode doesn't encode them separately; the font decides.",
    confused: "4 can read as capital A in stylised text, which is why leet speak uses it for A. In tiny superscript ⁴ the closed and open shapes become hard to tell apart.",
    use: "4 is popular in shortened words such as 4ever and 4U, and in angel-number captions like 444." },
  "5": { words: ["5 Stars", "High 5", "555", "Top 5", "Class of 2025"],
    shape: "Five has a flat top bar, a short stem and a bowl. The bar is where styles differ: it can be long and flat or short and sloped.",
    confused: "5 and capital S are easily swapped, especially in bold sans and in squared styles, so check before using a styled 5 in a code or a username.",
    use: "A styled 5 is common for ratings (5 stars), graduation years such as 2025, and countdown captions." },
  "6": { words: ["666", "6ix", "Top 6", "6 Feet", "Grade 6"],
    shape: "Six is a closed loop at the bottom with a stroke curving up and over from the top. Upside-down styles turn it into a 9, which is why flipped text can change a number.",
    confused: "6 and 9 swap when text is rotated, and 6 can look like a lowercase b in some bold fonts.",
    use: "6 is styled for numbers like 666 in horror and metal names and for slang spellings such as 6ix." },
  "7": { words: ["7even", "777", "24/7", "Lucky 7", "7th"],
    shape: "Seven is a top bar with a diagonal stem. Many European handwriting styles add a crossbar to the stem; Unicode has no separate crossed 7, so that look comes only from fonts.",
    confused: "7 and the number 1 can be confused in handwriting-style fonts, which is the reason for the European crossbar.",
    use: "7 is one of the most styled digits: lucky 7, 777, 24/7 and jersey numbers." },
  "8": { words: ["888", "Infinity 8", "8-Bit", "Top 8", "Class of 2028"],
    shape: "Eight is two stacked loops, the lower one usually wider. It's the most symmetrical digit, so mirrored and reversed styles barely change it.",
    confused: "8 resembles capital B in bold styles and the infinity sign ∞ when rotated, which some people use on purpose.",
    use: "A styled 8 is searched for '8-bit' gaming names, the lucky number 888 and graduation years." },
  "9": { words: ["999", "Cloud 9", "9 Lives", "Top 9", "1999"],
    shape: "Nine is a closed loop at the top with a stem that is either straight or curved. It's a 6 turned around, so upside-down styles flip one into the other.",
    confused: "9 and lowercase g look alike in some sans and monospace styles, and 9 becomes 6 in flipped text.",
    use: "9 is styled for birth years such as 1999, 'Cloud 9' captions and repeating numbers like 999." },
};

export function info(ch: string): CharInfo {
  return isDigit(ch) ? DIGITS[ch] : LETTER_BY_L[ch];
}

/** Title/description/answer for a character page. */
export function meta(ch: string) {
  const digit = isDigit(ch);
  const U = ch.toUpperCase();
  const n = Math.max(forms(ch).length, digit ? 0 : forms(U).length);
  const sample = digit ? forms(ch).slice(0, 5).map((f) => f.glyph).join(" ") : forms(U).slice(0, 5).map((f) => f.glyph).join(" ");
  const title = digit ? `${ch} in Different Fonts: Copy and Paste ${n} Number Styles` : `${U} in Different Fonts: Copy and Paste ${n} Styles`;
  const description = digit
    ? `The number ${ch} in ${n} different fonts: ${sample} and more. Tap any one to copy it and paste it anywhere. Free, no sign-up.`
    : `Capital ${U} and lowercase ${ch} in ${n} different fonts: ${sample} and more. Tap any one to copy. Free, no sign-up.`;
  const answer = digit
    ? `The number ${ch} in ${n} different fonts (${sample}), each a Unicode character you can tap to copy.`
    : `The letter ${U} in ${n} different fonts (${sample}), each a Unicode character you can tap to copy.`;
  return { title, description, answer, n, h1: digit ? `${ch} in Different Fonts` : `${U} in Different Fonts` };
}

export function faq(ch: string) {
  const digit = isDigit(ch);
  const U = ch.toUpperCase();
  const i = info(ch);
  const bold = ALL_STYLES["bold-serif"].transform(digit ? ch : U);
  const h = history(ch);
  const first = h.split(/(?<=\.)\s/)[0];
  return [
    { q: digit ? `What can be confused with ${ch}?` : `Which letter is ${U} confused with?`, a: i.confused },
    { q: digit ? `What is ${ch} used for in styled text?` : `What is a fancy ${U} used for?`, a: i.use },
    ...(first ? [{ q: digit ? `Where does the number ${ch} come from?` : `Where does the letter ${U} come from?`, a: first }] : []),
  ];
}

/** Plain-text record for scripts/check-content.mjs (overlap/claims checks). */
export function checkPage(ch: string) {
  const m = meta(ch);
  const i = info(ch);
  return {
    slug: `different-fonts/${ch}`, path: `/different-fonts/${ch}`, title: m.title, description: m.description, h1: m.h1, crumb: ch,
    intro: `${m.answer} ${i.use}`,
    sections: [{ h2: "shape", blocks: [{ p: i.shape }, { p: history(ch) }, { p: facts(ch).join(" ") }] }],
    faq: faq(ch),
    mask: ["letter", "number", "capital", "lowercase"],
  };
}
