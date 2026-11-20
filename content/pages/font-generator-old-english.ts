import type { PageContent } from "./types";
import { ALL_STYLES } from "@/lib/fonts";

// Lives at /font-generator/old-english, the URL that ranked in Bing before the
// November 2026 rebuild. The homepage covers the full generator; this page is
// about getting ready-made Old English text onto the clipboard fast.
const f = (s: string) => ALL_STYLES["fraktur"].transform(s);
const b = (s: string) => ALL_STYLES["bold-fraktur"].transform(s);

const WORDS = ["Love", "Family", "Blessed", "Loyalty", "Faith", "Est. 2025", "Respect", "Forever", "Mom", "Dad", "Brothers", "Gangsta", "Hustle", "Royalty"];

const page: PageContent = {
  slug: "font-generator/old-english",
  file: "font-generator-old-english",
  title: "Old English Font Copy & Paste – Old English Text Generator",
  description:
    "Old English font copy and paste: type text and copy it in blackletter, or grab ready-made Old English words and letters. Works in Instagram, Discord, Word.",
  h1: "Old English Font Copy and Paste",
  crumb: "Old English Copy & Paste",
  intro:
    "Type anything and copy it in Old English letters, or grab a ready-made word from the tables below. Every result is plain Unicode text, so it pastes straight into Instagram, TikTok, Discord, text messages, Word and Google Docs without installing a font. For all 60+ styles and the tattoo preview, use the main [Old English font generator](/).",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "fraktur-small-caps", "bold-fraktur-small-caps", "fraktur-caps", "bold-fraktur-caps",
      "tattoo", "gothic-framed", "fraktur-underline", "distressed", "deco-cross", "deco-crown", "frame-block", "roman-date",
    ],
    sample: "Old English Text",
    placeholder: "Type the text you want to copy…",
    presets: ["Old English Text", "Your Name", "Est. 1999", "Only God Can Judge Me"],
  },
  stylesHeading: "Copy & Paste Old English Text",
  howTo: {
    heading: "How to copy and paste Old English text",
    steps: [
      ["Type or pick", "Type your own words in the box, or use one of the ready-made words further down the page."],
      ["Copy", "Press Copy next to the style you like. On a phone, the Copy button is more reliable than long-pressing the text."],
      ["Paste", "Paste into a bio, caption, display name, message or document. The letters stay Old English because they are characters, not a font."],
    ],
  },
  sections: [
    {
      h2: "Ready-made Old English words",
      blocks: [
        { p: "The most-requested words, already converted. Select one and copy it, or type your own text in the generator above." },
        {
          table: {
            head: ["Word", "Old English", "Bold Old English"],
            glyphCols: [1, 2],
            rows: WORDS.map((w) => [w, f(w), b(w)]),
          },
        },
      ],
    },
    {
      h2: "Old English letters A–Z to copy",
      blocks: [
        { p: "Tap any letter to copy it on its own, for an initial, a monogram or a one-letter logo. The [Old English alphabet](/old-english-alphabet) page has a printable chart and a page for every letter." },
        { widget: "alphabet-compact" },
      ],
    },
    {
      h2: "Where Old English text pastes correctly",
      blocks: [
        {
          table: {
            head: ["Place", "Works?", "Notes"],
            rows: [
              ["Instagram bio and Name field", "Yes", "Not in the @username. See [Instagram bio ideas](/old-english-font-instagram)."],
              ["TikTok bio and nickname", "Yes", "The @handle only accepts plain letters, numbers, dots and underscores."],
              ["Discord display name and messages", "Yes", "The unique username does not. See [Discord names](/old-english-font-discord)."],
              ["Word, Google Docs, Pages", "Yes", "It pastes as text. For print, install a real blackletter font from [our font list](/fonts) instead."],
              ["Text messages and WhatsApp", "Yes", "Very old phones may show boxes."],
              ["Game usernames", "Sometimes", "Many games strip special characters. Test it in a display name first."],
            ],
          },
        },
      ],
    },
    {
      h2: "Copy and paste vs. installing an Old English font",
      blocks: [
        { p: "Copy-paste text is for places where you cannot choose a font: social bios, chats and usernames. If you are designing something to print, such as a shirt, a certificate or a tattoo stencil, install a real font so the letters stay sharp at any size. [Old English Text MT and its free lookalikes](/fonts/old-english-text-mt) covers which one to use, and the [text to image tool](/old-english-text-to-image) exports a PNG if you just need a picture." },
      ],
    },
  ],
  built:
    "The letters come from Unicode's Mathematical Fraktur (U+1D504–U+1D537) and Mathematical Bold Fraktur (U+1D56C–U+1D59F) blocks, plus the five older Fraktur capitals ℭ ℌ ℑ ℜ ℨ from Letterlike Symbols. Digits are not part of Fraktur, so numbers stay plain or become Roman numerals.",
  related: {
    heading: "More Old English tools",
    hrefs: ["/", "/old-english-alphabet", "/old-english-letters", "/old-english-numbers", "/old-english-tattoo-font", "/font-generator/medieval", "/font-generator/gothic-letters", "/blackletter-generator", "/death-note-font", "/old-english-name-generator"],
  },
  faq: [
    { q: "How do I copy and paste Old English font?", a: "Type your text in the box, press Copy on the style you like and paste it wherever you want it. Nothing to install." },
    { q: "Why does the pasted text change back to normal letters?", a: "Some apps and username fields strip special characters. Try the bio or display name field instead, or a different style." },
    { q: "Can I paste Old English text into Microsoft Word?", a: "Yes, it pastes as text. Word may show a few letters in a fallback font. For a document you will print, install a blackletter font instead." },
    { q: "Is the Old English text free to use?", a: "Yes. The characters are part of Unicode, so anyone can use them anywhere, including commercially." },
    { q: "Is this the Old English language?", a: "No. It changes how the letters look. Your words stay in modern English." },
  ],
};

export default page;
