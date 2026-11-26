import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols/down-arrow (ranked in Bing before 00a2b7f).
// Code points are computed from the characters; names follow Unicode.
const cp = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

// [glyph, name, family, typical job]
const DOWN: [string, string, string, string][] = [
  ["↓", "Downwards arrow", "Simple", "\"Link below ↓\", \"details ↓\", lists that continue"],
  ["⬇", "Downwards black arrow", "Simple", "Solid arrow; often shown in emoji style as ⬇️"],
  ["🡇", "Downwards heavy arrow", "Simple", "Chunky arrow that stays clear when small"],
  ["🡓", "Downwards sans-serif arrow", "Simple", "Minimal, even-weight arrow"],
  ["🠋", "Downwards arrow, large triangle head", "Simple", "Big head, thin stem"],
  ["⭣", "Downwards triangle-headed arrow", "Simple", "Slim arrow with a sharp head"],
  ["⇓", "Downwards double arrow", "Doubled", "Hollow double-line arrow for strong emphasis"],
  ["⇊", "Downwards paired arrows", "Doubled", "Steep fall, sharp decrease"],
  ["⮇", "Downwards triangle-headed paired arrows", "Doubled", "Neater twin arrows"],
  ["⤋", "Downwards triple arrow", "Doubled", "Three lines in one shaft"],
  ["⟱", "Downwards quadruple arrow", "Doubled", "The heaviest of the stacked arrows"],
  ["↡", "Downwards two-headed arrow", "Doubled", "Two arrowheads: drop fast"],
  ["⇩", "Downwards white arrow", "Outlined & keys", "Outline arrow for buttons and diagrams"],
  ["⇟", "Downwards arrow with double stroke", "Outlined & keys", "The Page Down key"],
  ["⌄", "Down arrowhead", "Outlined & keys", "The chevron on dropdown menus and \"show more\""],
  ["⍗", "APL quad downwards arrow", "Outlined & keys", "Boxed arrow from APL"],
  ["↵", "Downwards arrow with corner leftwards", "Outlined & keys", "The Return / Enter key"],
  ["⤓", "Downwards arrow to bar", "Hooks & bars", "The classic download icon: down into a tray"],
  ["↧", "Downwards arrow from bar", "Hooks & bars", "Dropping from a line; \"lower\""],
  ["⤈", "Downwards arrow with horizontal stroke", "Hooks & bars", "A crossed shaft"],
  ["⇣", "Downwards dashed arrow", "Turns & harpoons", "Optional or planned step down"],
  ["⤵", "Rightwards then curving downwards", "Turns & harpoons", "\"Read on below\"; a turn into the next line"],
  ["↴", "Rightwards arrow with corner downwards", "Turns & harpoons", "Line-feed sign; points to the start of the next line"],
  ["⬎", "Rightwards arrow with tip downwards", "Turns & harpoons", "Right, then a sharp turn down"],
  ["⬐", "Leftwards arrow with tip downwards", "Turns & harpoons", "Left, then down"],
  ["⇂", "Downwards harpoon, barb right", "Turns & harpoons", "Half-headed arrow from math and chemistry"],
  ["⇃", "Downwards harpoon, barb left", "Turns & harpoons", "The mirror of ⇂"],
  ["⥥", "Downwards harpoon pair", "Turns & harpoons", "Two harpoons side by side"],
  ["↯", "Downwards zigzag arrow", "Turns & harpoons", "Lightning-bolt arrow: electricity, a sudden crash"],
  ["⬂", "South east white arrow", "Slanted", "Down and to the right: falling trend"],
  ["⬃", "South west white arrow", "Slanted", "Down and to the left"],
  ["⤥", "South east arrow with hook", "Slanted", "A hooked diagonal"],
  ["⤦", "South west arrow with hook", "Slanted", "Its left-hand twin"],
  ["▼", "Black down-pointing triangle", "Triangles & icons", "Downvote, sort descending, a falling price"],
  ["▽", "White down-pointing triangle", "Triangles & icons", "Unselected downvote; collapsed section"],
  ["▾", "Small black down-pointing triangle", "Triangles & icons", "Tiny dropdown marker after a menu label"],
  ["⏷", "Medium down-pointing triangle", "Triangles & icons", "Scroll-down button"],
  ["⏬", "Down-pointing double triangle", "Triangles & icons", "Jump to the bottom"],
  ["🔽", "Down-pointing small red triangle", "Triangles & icons", "Emoji downvote or \"lower\" button"],
  ["📉", "Chart with downwards trend", "Triangles & icons", "Emoji for losses and falling numbers"],
  ["˅", "Modifier letter down arrowhead", "Tiny", "Phonetic mark; a small v-shaped pointer"],
  ["ꜜ", "Modifier letter raised down arrow", "Tiny", "Raised arrow marking downstep in tone languages"],
];

const page: PageContent = {
  slug: "symbols/down-arrow",
  file: "symbols-down-arrow",
  title: "Down Arrow Copy and Paste – 42 Down Arrows ↓ ⬇ ⇩ ⤓ ▼",
  description:
    "Down arrow copy and paste: 42 downward arrows, from ↓ and ⬇ to the download sign ⤓, dropdown ⌄ and ▼, each with its Unicode name and code point.",
  h1: "Down Arrow Copy and Paste",
  crumb: "Down Arrow",
  intro:
    "A down arrow is a character that points downward, such as ↓, ⬇, ⇩ or the download sign ⤓, and the table below has 42 of them to copy and paste, each with its Unicode name. Searches for a down arrow to copy usually come from three jobs: pointing readers to a link below a post, drawing a download or install button, and showing that something fell, like a price or a score. A decorative down arrow symbol from the table can do any of these; the box underneath styles the words that sit above it.",
  tool: {
    styles: ["u-upside-down", "u-underline", "u-double-underline", "bold-underline", "dotted", "fraktur-lower", "u-bubble-underline", "u-italic-underline"],
    sample: "Download here",
    placeholder: "Type the text that points down…",
    presets: ["Download here", "Link below", "Scroll down", "Read more"],
  },
  stylesHeading: "Text styles to sit above a down arrow",
  howTo: {
    heading: "How to use a down arrow symbol",
    steps: [
      ["Match the job", "A plain ↓ points to the next line, ⤓ says download, ⌄ says \"open this\", ▼ says less or lower."],
      ["Copy one character", "Select the glyph in the Arrow column and copy it."],
      ["Put it last", "A down arrow reads best at the end of the line it introduces, right before what it points to."],
    ],
  },
  sections: [
    {
      h2: "Down arrow symbols: 42 arrows with names",
      blocks: [
        {
          table: {
            head: ["Arrow", "Name", "Code point", "Family", "Typical job"],
            glyphCols: [0],
            rows: DOWN.map(([g, n, fam, job]) => [g, n, cp(g), fam, job]),
          },
        },
      ],
    },
    {
      h2: "1. Which arrow means download?",
      blocks: [
        { p: "The arrow that drops onto a line, ⤓ (U+2913), is the closest text match to the download icon on most websites. If you need something bolder, ⬇ works, and ⇩ is a good outline choice for a diagram. Unicode has no dedicated \"download\" character, so any of these is a convention rather than a rule." },
      ],
    },
    {
      h2: "2. How do I point to a link below my post?",
      blocks: [
        { p: "End the sentence with the arrow: \"Full recipe below ↓\" or \"Tickets ⤵\". The curved ⤵ suggests the text continues; the straight ↓ is more direct. For several links in a list, put ↓ once above the list rather than one arrow per item. Pointing upward instead, for example to a profile link, calls for a different set: see [up arrow copy and paste](/symbols/up-arrow)." },
      ],
    },
  ],
  built:
    "The arrows are spread over the Arrows block (U+2190–U+21FF), Supplemental Arrows-A and -B, Miscellaneous Symbols and Arrows (U+2B00–U+2BFF) and Supplemental Arrows-C (U+1F800–U+1F8FF); triangles come from Geometric Shapes, ⌄ and ⏷ from Miscellaneous Technical, and the tone arrow ꜜ from Modifier Tone Letters.",
  related: {
    heading: "Related symbol pages",
    hrefs: ["/symbols/up-arrow", "/symbols", "/symbols/numbers", "/font-generator/strikethrough", "/font-generator/reverse"],
  },
  faq: [
    { q: "How do I copy and paste a down arrow?", a: "Select the arrow in the table's first column and copy it. The basic one is ↓ (U+2193)." },
    { q: "What is the Alt code for a down arrow?", a: "On Windows, hold Alt and type 25 on the number pad to get ↓." },
    { q: "What is the down arrow symbol for download?", a: "⤓, the downwards arrow to bar (U+2913), is the usual text stand-in for the download icon." },
    { q: "What is the small down arrow on menus called?", a: "Usually a chevron or caret. In text, ⌄ (down arrowhead) and ▾ (small down-pointing triangle) are the closest characters." },
    { q: "What does ↯ mean?", a: "It is the downwards zigzag arrow (U+21AF). It is used for electricity, lightning and, in some proofs, a contradiction." },
    { q: "Is there a decorative down arrow?", a: "Yes. Try ⟱ for a heavy stacked arrow, ↡ for a double head, or ⥥ for a pair of harpoons." },
    { q: "What is the arrow on the Enter key?", a: "↵ (U+21B5), a downward arrow that turns left." },
  ],
};

export default page;
