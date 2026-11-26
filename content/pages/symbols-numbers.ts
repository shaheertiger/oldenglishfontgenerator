import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols/numbers (ranked in Bing before 00a2b7f).
// Every digit run is generated from its starting code point, and the code
// point column is computed from the characters, so the table can't drift.
const hex = (c: string) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0");
const cp = (s: string) => [...s].map(hex).join(" ");
const run = (start: number, n: number) => Array.from({ length: n }, (_, i) => String.fromCodePoint(start + i)).join("");
function span(s: string): string {
  const cs = [...s].map((c) => c.codePointAt(0)!);
  const contiguous = cs.every((c, i) => i === 0 || c === cs[i - 1] + 1);
  const chars = [...s];
  return contiguous ? `${hex(chars[0])}–${hex(chars[chars.length - 1])}` : "mixed: " + cp(s);
}

// [style, characters, good for]
const DIGITS: [string, string, string][] = [
  ["Circled 1–20", run(0x2460, 20), "Numbered steps, rankings, \"part ①\" in a caption"],
  ["Circled zero", "⓪", "Completes the circled set when you need 0 or 10 as ①⓪"],
  ["Circled 21–35", run(0x3251, 15), "Longer numbered lists"],
  ["Circled 36–50", run(0x32b1, 15), "Lists up to fifty"],
  ["Negative circled 1–10", run(0x2776, 10), "Bold white-on-black markers"],
  ["Negative circled 11–20", run(0x24eb, 10), "Continues the black circles to twenty"],
  ["Double circled 1–10", run(0x24f5, 10), "A ringed look for top-ten lists"],
  ["Sans-serif circled 1–10", run(0x2780, 10), "Cleaner circled digits from Dingbats"],
  ["Sans-serif negative circled 1–10", run(0x278a, 10), "Heavy black circles from Dingbats"],
  ["Parenthesized 1–20", run(0x2474, 20), "Legal-style clauses ⑴ ⑵ ⑶"],
  ["Digit with full stop 1–20", run(0x2488, 20), "Outline numbering ⒈ ⒉ ⒊ in one character"],
  ["Superscript 0–9", "⁰¹²³⁴⁵⁶⁷⁸⁹", "Exponents (x²), footnote marks, ordinals like 1ˢᵗ"],
  ["Subscript 0–9", run(0x2080, 10), "Chemical formulas such as H₂O and CO₂"],
  ["Fullwidth 0–9", run(0xff10, 10), "Wide digits that line up with CJK text"],
  ["Math bold 0–9", run(0x1d7ce, 10), "Heavy digits for headings"],
  ["Double-struck 0–9", run(0x1d7d8, 10), "Outline digits; 𝟙 is the indicator function in math"],
  ["Math sans-serif 0–9", run(0x1d7e2, 10), "A clean modern digit"],
  ["Math sans-serif bold 0–9", run(0x1d7ec, 10), "Bold sans for scores and stats"],
  ["Monospace 0–9", run(0x1d7f6, 10), "Typewriter digits that keep columns aligned"],
  ["Roman numerals 1–12", run(0x2160, 12), "Clock faces, chapters, regnal numbers like Henry Ⅷ"],
  ["Roman 50, 100, 500, 1000", run(0x216c, 4), "Building larger Roman numbers: Ⅼ Ⅽ Ⅾ Ⅿ"],
  ["Small Roman numerals 1–12", run(0x2170, 12), "Preface page numbers (ⅰ, ⅱ, ⅲ)"],
];

const FRACTIONS: [string, string][] = [
  ["½", "One half"], ["⅓", "One third"], ["⅔", "Two thirds"], ["¼", "One quarter"], ["¾", "Three quarters"],
  ["⅕", "One fifth"], ["⅖", "Two fifths"], ["⅗", "Three fifths"], ["⅘", "Four fifths"], ["⅙", "One sixth"],
  ["⅚", "Five sixths"], ["⅐", "One seventh"], ["⅛", "One eighth"], ["⅜", "Three eighths"], ["⅝", "Five eighths"],
  ["⅞", "Seven eighths"], ["⅑", "One ninth"], ["⅒", "One tenth"], ["↉", "Zero thirds (used in baseball innings)"], ["⅟", "Fraction numerator one (add any digit after it)"],
];

const page: PageContent = {
  slug: "symbols/numbers",
  file: "symbols-numbers",
  title: "Number Symbols Copy and Paste – 22 Digit Styles ① ⑴ Ⅰ ¹",
  description:
    "Number symbols to copy and paste: 22 digit styles (circled, parenthesized, Roman, superscript, subscript, double-struck) plus 20 fractions. Free.",
  h1: "Number Symbols Copy and Paste",
  crumb: "Number Symbols",
  intro:
    "Number symbols are digits that Unicode stores as separate characters, such as circled ①, parenthesized ⑴, Roman Ⅰ, superscript ¹, subscript ₁ and double-struck 𝟙, and this page has 22 styles of them plus 20 fractions to copy and paste. If you searched for numbers to copy and paste in different styles, the main table puts each set on one row so you can grab the whole run or a single digit. For fancy number symbols in a date or a score, type it into the box and the converter rewrites every digit for you.",
  tool: {
    styles: ["u-bubble", "u-bubble-filled", "u-squared", "u-fullwidth", "u-superscript", "u-double-struck", "u-sans-bold", "u-monospace", "u-bold-serif", "fraktur-outline-digits", "roman-date", "roman-date-light"],
    sample: "Top 10 of 2026",
    placeholder: "Type a date, score or list number…",
    presets: ["Top 10 of 2026", "14.02.2025", "Chapter 3", "Room 237"],
  },
  stylesHeading: "Your numbers in 12 digit styles",
  howTo: {
    heading: "How to copy number symbols",
    steps: [
      ["Pick a row", "Each row in the table is one style. Circled and parenthesized sets go up to 20; most others are 0–9."],
      ["Copy the digits", "Select the whole run, or double-click a single character inside it. Circled ⑫ is one character, not 1 and 2."],
      ["Or convert a number", "Type a date or score in the box to change every digit at once."],
    ],
  },
  sections: [
    {
      h2: "Number symbols table: 22 styles",
      blocks: [
        {
          table: {
            head: ["Style", "Characters", "Code points", "Good for"],
            glyphCols: [1],
            rows: DIGITS.map(([n, s, use]) => [n, s, span(s), use]),
          },
        },
      ],
    },
    {
      h2: "Fraction symbols",
      blocks: [
        {
          table: {
            head: ["Fraction", "Name", "Code point"],
            glyphCols: [0],
            rows: FRACTIONS.map(([g, n]) => [g, n, cp(g)]),
          },
        },
        { p: "For a fraction that has no single character, such as 7/12, combine superscript and subscript digits around the fraction slash ⁄ (U+2044): ⁷⁄₁₂." },
      ],
    },
    {
      h2: "1. How do I write numbers in different styles?",
      blocks: [
        { p: "Two ways. For a short label, copy the exact characters from the table: a circled ③ or a Roman Ⅻ is a single character, which keeps it from splitting across lines. For anything longer, like a date or a phone-style number, the box above converts each digit for you; the Roman numeral date style even rewrites 2026 as MMXXVI in blackletter." },
        { p: "Circled numbers stop at 50, so beyond that mix styles or use double-struck digits. For blackletter-style digits that match Old English text, see the [old English font](/font-generator/old-english) page, and for single numbers in many styles, the [different fonts](/different-fonts) section has a page for each digit, starting with [number 1 in different fonts](/different-fonts/1)." },
      ],
    },
  ],
  built:
    "Circled, parenthesized and full-stop digits come from Enclosed Alphanumerics (U+2460–U+24FF) and Enclosed CJK Letters and Months (U+3251–U+32BF); Dingbats adds U+2776–U+2793. Roman numerals and fractions are in Number Forms (U+2150–U+218F), super- and subscripts in U+2070–U+209F (plus ¹ ² ³ in Latin-1), and bold, double-struck, sans and monospace digits in Mathematical Alphanumeric Symbols (U+1D7CE–U+1D7FF).",
  related: {
    heading: "More symbols and number styles",
    hrefs: ["/symbols", "/different-fonts/1", "/font-generator/old-english", "/symbols/greek", "/symbols/brackets"],
  },
  faq: [
    { q: "How do I copy and paste circled numbers?", a: "Select them in the Circled rows of the table. ① to ⑳ are one row, and ㉑ to ㊿ continue up to 50." },
    { q: "How do I type a small 2 (²)?", a: "Copy it from the Superscript row. On Windows you can also hold Alt and type 0178 on the number pad." },
    { q: "Is there a circled number above 50?", a: "No. Unicode's circled numbers stop at ㊿. For larger numbers, combine two circled digits or use another style." },
    { q: "What is the difference between Ⅻ and XII?", a: "Ⅻ is one Roman numeral character (U+216B). XII is three ordinary letters. Both read as twelve; the single character can't be split by a line break." },
    { q: "How do I write H2O with a small 2?", a: "Copy the subscript ₂ from the table and paste it between H and O: H₂O." },
    { q: "What is the fancy 1 that looks like an outline?", a: "That is double-struck 𝟙 (U+1D7D9), from the math block. The whole 𝟘 to 𝟡 set is in the table." },
    { q: "Can I convert a whole number to symbols at once?", a: "Yes. Type it in the box and copy the style you like; every digit changes together." },
  ],
};

export default page;
