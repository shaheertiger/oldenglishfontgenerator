import type { PageContent } from "./types";
import { ALL_STYLES } from "@/lib/fonts";

// Restored Nov 2026: Bing kept sending visitors here after the page was
// removed on Nov 1, so it is back at its original URL.
const cu = (s: string) => ALL_STYLES["cuneiform"].transform(s);
const AZ = "abcdefghijklmnopqrstuvwxyz".split("");

const page: PageContent = {
  slug: "cuneiform-translator",
  title: "Cuneiform Translator: English to Cuneiform, Copy and Paste",
  description:
    "Cuneiform translator: type English, get cuneiform signs to copy and paste in 6 ancient scripts, with the full A–Z sign chart. Free, no sign-up.",
  h1: "Cuneiform Translator",
  crumb: "Cuneiform Translator",
  intro:
    "This cuneiform translator turns English into cuneiform signs letter by letter, using one fixed sign per letter, so any name or word gets the look of a Sumerian or Babylonian clay tablet. Type below to use it as an English to cuneiform translator or a cuneiform text generator; every sign is a real Unicode character, so cuneiform copy and paste works like ordinary text. Real cuneiform wrote syllables and words, not letters, so treat the result as a cipher with an ancient look. The A–Z chart below shows the full key.",
  tool: {
    styles: ["cuneiform", "cuneiform-tablet", "hieroglyphs", "phoenician", "runes-elder", "gothic-wulfila"],
    sample: "Babylon",
    placeholder: "Type a name or word in English…",
    presets: ["Babylon", "Gilgamesh", "Your Name", "Ur"],
  },
  stylesHeading: "English to Cuneiform",
  howTo: {
    heading: "How to translate English to cuneiform",
    steps: [
      ["Type in English", "Enter a name, word or short phrase. Short text works best: cuneiform signs are wide."],
      ["Copy the signs", "Press Copy on the plain version, or on the version with word dividers between words."],
      ["Paste it", "Paste anywhere that takes text. If you see boxes, the device has no cuneiform font (see below)."],
    ],
  },
  sections: [
    {
      h2: "1. What is the cuneiform alphabet A–Z to copy and paste?",
      blocks: [
        { p: "The key this translator uses. Select a sign to copy it on its own; for whole words, type in the box above." },
        {
          table: {
            head: ["Letter", "Cuneiform", "Letter", "Cuneiform"],
            glyphCols: [1, 3],
            rows: AZ.slice(0, 13).map((l, i) => [l.toUpperCase(), cu(l), AZ[i + 13].toUpperCase(), cu(AZ[i + 13])]),
          },
        },
      ],
    },
    {
      h2: "2. How do I write my name in cuneiform?",
      blocks: [
        {
          table: {
            head: ["English", "Cuneiform"],
            glyphCols: [1],
            rows: ["Gilgamesh", "Babylon", "Sumer", "Ishtar", "Love", "Peace", "Warrior", "King", "Mother", "Father"].map((w) => [w, cu(w)]),
          },
        },
      ],
    },
    {
      h2: "3. What is cuneiform?",
      blocks: [
        { p: "Cuneiform is one of the oldest writing systems, used in Mesopotamia for over 3,000 years from around 3200 BC. Scribes pressed a cut reed into wet clay, leaving wedge-shaped marks; the name comes from the Latin cuneus, meaning wedge. It was used to write Sumerian, Akkadian, Hittite and other languages, and hundreds of thousands of tablets survive." },
        { p: "Real cuneiform has no alphabet. Its signs stand for whole words or syllables, and a scribe would spell a name by sound, not letter by letter. That means no tool can truly translate English into cuneiform. This one uses a fixed letter-to-sign key so any English text gets a consistent ancient look, which is what you want for a name, a tattoo idea, a game or a design." },
      ],
    },
    {
      h2: "4. Why do I see boxes instead of cuneiform?",
      blocks: [
        { p: "Cuneiform has its own Unicode block (U+12000–U+123FF), and not every device includes a font for it. Whether the signs show depends on the fonts installed on the reader's device, so the person you send it to may see it even if you don't (or the other way round). For wider support, the [ancient font generator](/ancient-font-generator) has hieroglyphs, runes and other scripts that more devices can show." },
      ],
    },
  ],
  built:
    "Signs come from the Unicode Cuneiform block (U+12000–U+123FF). The word divider is U+12471 from Cuneiform Numbers and Punctuation. Each Latin letter maps to one fixed sign; accents are removed first.",
  related: {
    heading: "More ancient scripts",
    hrefs: ["/hieroglyphics-translator", "/runic-translator", "/ancient-font-generator", "/font-generator/gothic-letters", "/font-generator/medieval", "/illuminated-letters", "/"],
  },
  faq: [
    { q: "Is this a real cuneiform translation?", a: "No. Cuneiform wrote syllables and words, not letters, so English can't be translated sign for sign. This is a consistent letter-to-sign key that gives your text the look of cuneiform." },
    { q: "How do I write my name in cuneiform?", a: "Type your name in the box and copy the result. The A–Z chart shows which sign stands for each letter if you want to write it by hand." },
    { q: "Can I use cuneiform for a tattoo?", a: "You can use it to choose a design, but because this is a letter key rather than real Sumerian or Akkadian, a scholar would not read it as your name. For an authentic spelling, ask an Assyriologist." },
    { q: "What language is cuneiform?", a: "None on its own. Cuneiform is a script, used for Sumerian, Akkadian (Babylonian and Assyrian), Hittite, Elamite and others." },
    { q: "Is there an English to cuneiform converter?", a: "Yes, the box at the top of this page: type English and it converts each letter to its cuneiform sign as you type." },
    { q: "How do I copy and paste cuneiform?", a: "Tap Copy next to a row, or select signs in the A–Z chart. They paste as text, so they stay cuneiform wherever the reader has a cuneiform font." },
    { q: "Why does the cuneiform show as boxes?", a: "Your device has no font with cuneiform signs. Try another browser or device; the text itself is still correct." },
  ],
};

export default page;
