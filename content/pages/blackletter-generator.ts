import type { PageContent } from "./types";

const page: PageContent = {
  slug: "blackletter-generator",
  title: "Blackletter Font Generator — Textura to Fraktur Styles",
  description:
    "Blackletter font generator with Unicode Fraktur styles, plus a short guide to textura, rotunda, schwabacher and fraktur. Copy and paste free.",
  h1: "Blackletter Font Generator",
  crumb: "Blackletter Generator",
  intro:
    "Blackletter is the typographer's name for the dense, broad-pen scripts that filled European books for roughly four hundred years. This blackletter font generator gives you the Unicode version of that look, and the notes below explain where the different blackletter families came from, so you know what you are actually copying.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "illuminated", "drop-cap", "fraktur-caps", "word-dots", "interpunct", "long-s", "frame-white", "overline", "double-underline", "frame-lenticular", "bold-fraktur-caps"],
    sample: "Blackletter Type",
    placeholder: "Type a heading or title…",
    presets: ["Blackletter Type", "The Daily Herald", "Certificate of Merit", "Anno Domini"],
  },
  stylesHeading: "Blackletter styles",
  howTo: {
    heading: "How to use blackletter text",
    steps: [
      ["Type a title", "Blackletter works best for short headings, mastheads and names rather than long sentences."],
      ["Pick a weight", "Regular Fraktur is lighter and more readable; Bold Fraktur is closer to the dark page of a printed incunable."],
      ["Copy and keep the rest plain", "Pair the blackletter heading with plain text underneath, the way newspapers pair a gothic masthead with ordinary body type."],
    ],
  },
  sections: [
    {
      h2: "The four main blackletter families",
      blocks: [
        {
          table: {
            head: ["Family", "Where and when", "Recognise it by"],
            rows: [
              ["Textura", "Northern Europe, 12th–15th century", "Tall, tightly packed vertical strokes with diamond-shaped feet. The type of the Gutenberg Bible."],
              ["Rotunda", "Italy and Spain, 13th–15th century", "Rounder bowls and more space; the least spiky of the group."],
              ["Schwabacher", "Germany, late 15th century", "Rounded, informal lowercase with a distinctive g and o. Common in early Reformation pamphlets."],
              ["Fraktur", "Germany, 16th–20th century", "Curves broken into short angled strokes and elaborate capitals with trunk-like swashes."],
            ],
          },
        },
        { p: "Fraktur outlived the others by centuries. German printers used it for everyday books and newspapers until the mid-20th century, which is why most people's mental picture of blackletter is really Fraktur." },
      ],
    },
    {
      h2: "Why every Unicode blackletter is Fraktur",
      blocks: [
        { p: "Unicode encodes the alphabets mathematicians use, and the blackletter alphabet in mathematics happens to be Fraktur, borrowed from 19th-century German textbooks. There are no separate characters for textura or rotunda. So whichever blackletter generator you use, the copied text is Fraktur at heart. To get a true textura or rotunda shape you need an installed typeface or the image export on our [text to image](/old-english-text-to-image) page." },
      ],
    },
    {
      h2: "Typographic touches worth trying",
      blocks: [
        { ul: ["**Word dividers.** Medieval scribes often separated words with raised dots. The Word Divider style adds a four-dot mark between words.", "**Long s.** Before about 1800, a non-final s was usually written ſ. The Long S style restores it.", "**Rules above and below.** Overline and double-underline styles echo the ruled lines in old ledgers and certificates."] },
      ],
    },
  ],
  built:
    "These styles use Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F). Rules are combining characters: U+0305 for the overline and U+0333 for the double underline. The long s is U+017F from Latin Extended-A, and the word divider is U+2058.",
  related: {
    heading: "Explore more blackletter",
    hrefs: ["/fraktur-generator", "/medieval-font-generator", "/gothic-font-generator", "/old-english-alphabet", "/old-english-text-to-image", "/old-english-cursive"],
  },
  faq: [
    { q: "What is a blackletter font?", a: "A typeface based on the broad-pen book hands of medieval and early modern Europe. The name comes from how dark a page of it looks, because the strokes are thick and closely spaced." },
    { q: "Is blackletter the same as gothic?", a: "Yes, in everyday use. Typographers prefer blackletter because gothic can also mean a plain sans-serif typeface in American type catalogues." },
    { q: "Can I get textura or rotunda as copy-paste text?", a: "No. Unicode only contains Fraktur-style letters. Real textura and rotunda shapes need an installed font or an exported image." },
    { q: "Why was blackletter abandoned in Germany?", a: "In 1941 the Nazi government banned Fraktur in official use and switched to roman type. After the war, roman type stayed standard and Fraktur became mostly decorative." },
    { q: "Is blackletter hard to read?", a: "For long passages, yes, for most modern readers. For a short heading or a name it is perfectly readable, which is why it survives in newspaper mastheads." },
  ],
};

export default page;
