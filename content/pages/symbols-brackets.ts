import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols/brackets (ranked in Bing before 00a2b7f).
// Code points are computed from the characters themselves.
const cp = (s: string) => [...s].filter((c) => c !== " ").map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

// [pair, name, typical use]
const PAIRS: [string, string, string][] = [
  ["【 】", "Black lenticular brackets", "Headings and labels in Japanese and Chinese; bold frames around names and titles"],
  ["〖 〗", "White lenticular brackets", "A lighter, outlined version of 【 】"],
  ["「 」", "Corner brackets", "The standard Japanese quotation marks"],
  ["『 』", "White corner brackets", "Quotes inside quotes, and titles of books or films in Japanese"],
  ["｢ ｣", "Halfwidth corner brackets", "Narrow corner brackets that take less space"],
  ["《 》", "Double angle brackets", "Book titles in Chinese"],
  ["〈 〉", "CJK angle brackets", "Article or chapter titles in Chinese"],
  ["⟨ ⟩", "Mathematical angle brackets", "Inner products, bra-ket notation, phonetics"],
  ["⟪ ⟫", "Mathematical double angle brackets", "Nested angle notation in math"],
  ["⟦ ⟧", "White square brackets", "Semantic brackets in logic and computer science"],
  ["[ ]", "Square brackets", "Editorial insertions [sic], citations, arrays in code"],
  ["［ ］", "Fullwidth square brackets", "Square brackets sized to match CJK text"],
  ["｛ ｝", "Fullwidth curly brackets", "Curly braces at CJK width"],
  ["（ ）", "Fullwidth parentheses", "Parentheses at CJK width; wider than ( )"],
  ["〔 〕", "Tortoise shell brackets", "Inserted notes in Japanese and Chinese text"],
  ["〘 〙", "White tortoise shell brackets", "Outlined tortoise shells for a decorative frame"],
  ["⦗ ⦘", "Black tortoise shell brackets", "Solid, heavy tortoise shells"],
  ["﹝ ﹞", "Small tortoise shell brackets", "Compact tortoise shells"],
  ["⦅ ⦆", "White parentheses", "Double-line parentheses used in some math notation"],
  ["⦃ ⦄", "White curly brackets", "Double-line braces"],
  ["⌈ ⌉", "Ceiling brackets", "The ceiling function: ⌈2.3⌉ = 3"],
  ["⌊ ⌋", "Floor brackets", "The floor function: ⌊2.7⌋ = 2"],
  ["⸢ ⸣", "Top half brackets", "Marking partly damaged or uncertain text in scholarly editions"],
  ["⸤ ⸥", "Bottom half brackets", "The lower partner of ⸢ ⸣ in the same editorial use"],
  ["⁅ ⁆", "Square brackets with quill", "A rare editorial bracket with a small spur"],
  ["❨ ❩", "Medium parenthesis ornaments", "Rounded decorative parentheses"],
  ["❪ ❫", "Flattened parenthesis ornaments", "Shallow, wide parentheses"],
  ["❬ ❭", "Angle bracket ornaments", "Slim chevrons for labels"],
  ["❮ ❯", "Heavy angle quotation ornaments", "Bold chevrons, also used as back/next markers"],
  ["❰ ❱", "Heavy angle bracket ornaments", "Thick pointed brackets"],
  ["❲ ❳", "Light tortoise shell ornaments", "Thin decorative tortoise shells"],
  ["❴ ❵", "Curly bracket ornaments", "Decorative braces"],
  ["« »", "Guillemets", "Quotation marks in French, Spanish, Russian and other languages"],
  ["꧁ ꧂", "Javanese rerenggan", "Javanese marks that open and close a title; popular as name frames"],
  ["༺ ༻", "Tibetan gug rtags", "Tibetan brackets; their swirled shape makes them a favorite frame"],
];

const page: PageContent = {
  slug: "symbols/brackets",
  file: "symbols-brackets",
  title: "Brackets Copy and Paste – 35 Bracket Pairs 【】「」⟦⟧",
  description:
    "Brackets to copy and paste: 35 bracket pairs, from lenticular 【】 and corner 「」 to ceiling ⌈⌉, floor ⌊⌋ and ornament brackets, with names and codes.",
  h1: "Brackets Copy and Paste",
  crumb: "Brackets",
  intro:
    "Brackets are paired characters that open and close a piece of text, and this page has 35 pairs to copy and paste, from lenticular 【】 and corner 「」 to math, editorial and ornament brackets, each with its name and code point. People usually want brackets to copy and paste for one of two reasons: a decorative frame around a name or heading, or a precise symbol such as a ceiling ⌈ ⌉, floor ⌊ ⌋ or square bracket for math and code. Both kinds are in the table, and the box below puts your text inside a frame for you.",
  tool: {
    styles: ["frame-lenticular", "frame-white", "frame-corner", "frame-tibetan", "frame-chevron", "frame-block", "frame-banner", "gothic-framed", "monogram-framed", "runes-framed", "hieroglyphs-cartouche", "u-love-parens"],
    sample: "Chapter One",
    placeholder: "Type a name or heading to frame…",
    presets: ["Chapter One", "Raven", "New Post", "Shop Open"],
  },
  stylesHeading: "Your text inside bracket frames",
  howTo: {
    heading: "How to use bracket symbols",
    steps: [
      ["Choose a pair", "Find the pair by shape or name. Every row gives the opening and closing bracket together."],
      ["Copy both halves", "Select the opening bracket, copy and paste it, then do the same with the closing one, or copy the whole pair and type between them."],
      ["Mind the width", "CJK brackets such as 【】 and 「」 carry built-in space on one side. That looks right next to Japanese or Chinese, and slightly loose next to English."],
    ],
  },
  sections: [
    {
      h2: "Bracket symbols table: 35 pairs",
      blocks: [
        {
          table: {
            head: ["Pair", "Name", "Code points", "Typical use"],
            glyphCols: [0],
            rows: PAIRS.map(([g, n, use]) => [g, n, cp(g), use]),
          },
        },
      ],
    },
    {
      h2: "1. What are floor brackets and ceiling brackets?",
      blocks: [
        { p: "They are math symbols that round a number. Floor brackets ⌊x⌋ round down to the nearest whole number, so ⌊2.7⌋ = 2; ceiling brackets ⌈x⌉ round up, so ⌈2.3⌉ = 3. They look like square brackets with the top or bottom bar missing, and they come in left and right halves that you copy separately." },
      ],
    },
    {
      h2: "2. Which brackets make the best name frames?",
      blocks: [
        { p: "The heavy lenticular 【 】 is the boldest; 『 』 and 〖 〗 are lighter. For a softer, ornamental feel, try the Tibetan ༺ ༻ or Javanese ꧁ ꧂ marks, which need newer fonts and may show as boxes on some devices. Gothic names often pair ⟦ ⟧ with blackletter letters; the [gothic symbols](/symbols) chart has crosses and daggers to add inside the frame." },
      ],
    },
  ],
  built:
    "The brackets come from CJK Symbols and Punctuation (U+3000–U+303F), Halfwidth and Fullwidth Forms (U+FF00–U+FFEF), Miscellaneous Technical (⌈ ⌉ ⌊ ⌋), Miscellaneous Mathematical Symbols-A and -B (⟦ ⟧ ⟨ ⟩ ⦅ ⦆), Supplemental Punctuation (⸢ ⸣ ⸤ ⸥), Dingbats (U+2768–U+2775), and the Javanese and Tibetan blocks. Plain [ ] and « » are from Basic Latin and Latin-1.",
  related: {
    heading: "More symbols and frames",
    hrefs: ["/symbols", "/symbols/numbers", "/font-generator/fancy-letters", "/font-generator/gothic-letters", "/symbols/greek"],
  },
  faq: [
    { q: "How do I copy and paste brackets?", a: "Select the pair in the table and copy it, then type your text between the two halves. Or type the text in the box and copy a framed version." },
    { q: "What are these brackets called: 【】?", a: "Black lenticular brackets, U+3010 and U+3011. Their outlined cousins 〖〗 are white lenticular brackets." },
    { q: "How do I copy square brackets?", a: "The plain [ ] are on standard keyboards; on a US layout they sit just right of the P key. For wider ones that match CJK text, copy ［ ］ from the table." },
    { q: "What is the difference between 「」 and 『』?", a: "In Japanese, 「」 are ordinary quotation marks and 『』 mark a quote inside a quote or the title of a work." },
    { q: "What are the brackets ꧁ ꧂ called?", a: "Javanese left and right rerenggan (U+A9C1, U+A9C2). In Javanese script they mark a title; elsewhere people use them to frame names." },
    { q: "What is the symbol for floor and ceiling?", a: "Floor is ⌊ ⌋ (U+230A, U+230B) and ceiling is ⌈ ⌉ (U+2308, U+2309)." },
    { q: "Why do some brackets look too wide?", a: "CJK brackets are designed for square Japanese and Chinese characters, so each half includes extra space. Use ⟦ ⟧ or ❨ ❩ for a tighter fit with English." },
  ],
};

export default page;
