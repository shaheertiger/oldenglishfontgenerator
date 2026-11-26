import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// The retired /blackletter-generator page now 301s here; its four-families
// table and "why Unicode blackletter is Fraktur" note are merged below.
const page: PageContent = {
  slug: "font-generator/blackletter",
  file: "font-generator-blackletter",
  title: "Blackletter Font Generator: 13 Copy and Paste Styles",
  description:
    "Blackletter font generator: 13 Unicode styles with rules, word dividers and manuscript ornaments, plus a guide to textura, rotunda and Fraktur. Free.",
  h1: "Blackletter Font Generator",
  crumb: "Blackletter",
  intro:
    "A blackletter font generator gives you the dense, broad-pen lettering of medieval European books as text you can copy, and this one has 13 styles built for headings, mastheads and labels. Blackletter copy and paste text is made of Unicode characters, so it pastes anywhere you can type; whether a character shows depends on the fonts on the reader's device. Below the tool is a short guide to the four historical black letter font families, so you know which look you are actually copying.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "word-dots", "overline", "frame-lenticular", "bold-underline", "deco-fleur",
      "deco-maltese", "frame-tibetan", "deco-hedera", "u-church-style", "u-band-logo", "dotted",
    ],
    sample: "The Daily Herald",
    placeholder: "Type a heading, a title or a name…",
    presets: ["The Daily Herald", "Certificate of Merit", "Anno Domini", "Blackletter Type"],
  },
  stylesHeading: "Blackletter styles",
  howTo: {
    heading: "How to use blackletter text well",
    steps: [
      ["Keep it short", "Blackletter suits titles, names and mastheads. A full paragraph of it is tiring to read."],
      ["Pick a weight", "Regular is lighter and more legible; bold is closer to the dark page of an early printed book."],
      ["Pair it with plain text", "Set the heading in blackletter and leave the line underneath plain, the way newspapers pair a gothic nameplate with ordinary body type."],
    ],
  },
  sections: [
    {
      h2: "1. What are the main blackletter families?",
      blocks: [
        {
          table: {
            head: ["Family", "Where and when", "How to recognize it"],
            rows: [
              ["Textura", "Northern Europe, 12th–15th century", "Tall, tightly packed vertical strokes with diamond-shaped feet. The type of the Gutenberg Bible."],
              ["Rotunda", "Italy and Spain, 13th–15th century", "Rounder bowls and more space between letters; the least spiky of the group."],
              ["Schwabacher", "Germany, late 15th century", "Rounded, informal small letters with a distinctive g and o. Common in early Reformation pamphlets."],
              ["Fraktur", "Germany, 16th–20th century", "Curves broken into short angled strokes, and elaborate capitals with trunk-like swashes."],
            ],
          },
        },
        { p: "Fraktur outlived the others by centuries. German printers used it for ordinary books and newspapers into the 20th century, which is why most people's mental picture of blackletter is really Fraktur. The [Fraktur font generator](/font-generator/fraktur) covers that branch in more depth, including umlauts." },
      ],
    },
    {
      h2: "2. Why is every copy-paste blackletter Fraktur?",
      blocks: [
        { p: "Unicode encodes the letter styles mathematicians use, and the blackletter alphabet in mathematics happens to be Fraktur. There are no separate characters for textura, rotunda or Schwabacher. Whichever site you copy from, the result is Fraktur underneath. A true textura shape needs an installed typeface, or a picture made with the [Old English text to image](/old-english-text-to-image) tool." },
        { p: "Here is the full alphabet in the bold weight, plus two ruled versions that echo the lines in old ledgers and certificates. Tap any cell to copy one letter." },
        { chart: { styles: ["bold-fraktur", "overline", "bold-underline"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "3. Manuscript touches worth trying",
      blocks: [
        {
          ul: [
            "**Word dividers.** Medieval scribes often separated words with raised dots. The Word Divider style places a four-dot mark ⁘ between words.",
            "**Rules above and below.** Overline and underline styles add a rule to each letter, and the dotted style sets two small dots beneath it, like the ruled headings of a register.",
            "**Fleurons and crosses.** The hedera leaf ❦, the fleur-de-lis ⚜ and the Maltese cross ✠ are all printers' and heraldic ornaments that suit blackletter.",
          ],
        },
        { p: "Rules are combining marks, so on some devices the line breaks between letters instead of running continuously. Check the result where you paste it." },
      ],
    },
  ],
  built:
    "These styles use Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F). Rules are combining characters: U+0305 for the overline, U+0332 for the underline and U+0324 for the pair of dots under each letter; the word divider is U+2058 and the hedera is U+2766.",
  related: {
    heading: "Explore more blackletter",
    hrefs: ["/font-generator/fraktur", "/newspaper-masthead-font", "/diploma-font", "/font-generator/old-english-letters", "/bible-verse-font", "/fonts"],
  },
  faq: [
    { q: "What is a blackletter font?", a: "A typeface based on the broad-pen book hands of medieval and early modern Europe. The name comes from how dark a page of it looks, because the strokes are thick and closely spaced." },
    { q: "Is blackletter the same as gothic?", a: "In everyday use, yes. Typographers prefer blackletter because gothic can also mean a plain sans-serif in American type catalogs." },
    { q: "Can I copy and paste blackletter text?", a: "Yes. Type in the box, press Copy on a style and paste it. The letters are Unicode characters, so no font has to be installed." },
    { q: "Can I get textura or rotunda as copy-paste text?", a: "No. Unicode only contains Fraktur-style letters. Real textura and rotunda shapes need an installed font or an exported image." },
    { q: "Why did Germany stop using Fraktur?", a: "In 1941 the Nazi government ordered official printing to switch from Fraktur to roman type. After the war roman type stayed standard and Fraktur became mostly decorative." },
    { q: "Is blackletter hard to read?", a: "In long passages, for most modern readers, yes. For a short heading or a name it is perfectly readable, which is why it survives in newspaper nameplates." },
    { q: "What is the difference between blackletter and medieval fonts?", a: "Blackletter is one specific family of medieval lettering. Medieval-style text can also mean uncial, insular or illuminated letters, which are rounder and older." },
  ],
};

export default page;
