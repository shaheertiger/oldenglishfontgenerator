import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// The retired /fraktur-generator page now 301s here; its umlaut, ß and long-s
// notes are merged below.
const page: PageContent = {
  slug: "font-generator/fraktur",
  file: "font-generator-fraktur",
  title: "Fraktur Font Generator: 12 Styles with Umlauts and ß",
  description:
    "Fraktur font generator: 12 German blackletter styles that keep ä, ö, ü and ß and add the long s. Type, tap Copy, paste. Free, no sign-up.",
  h1: "Fraktur Font Generator",
  crumb: "Fraktur",
  intro:
    "A Fraktur font generator converts what you type into Fraktur, the German branch of blackletter, and this one gives you 12 styles that also handle German properly: umlauts keep their dots, ß stays in place, and you can switch on the long s of old German print. The fraktur text you copy is a run of Unicode characters, not an installed font, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device. English converts just as well, since the letters are the same.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "long-s", "fraktur-small-caps", "bold-fraktur-small-caps", "wide",
      "fraktur-underline", "double-underline", "frame-chevron", "frame-corner", "fraktur-strike", "alternating",
    ],
    sample: "Grüße aus München",
    placeholder: "Text eingeben… or type in English",
    presets: ["Grüße aus München", "Frohe Weihnachten", "Gemütlichkeit", "Schöne Straße", "Wanderlust"],
  },
  stylesHeading: "Fraktur styles",
  howTo: {
    heading: "How to write German in Fraktur",
    steps: [
      ["Type normally", "Use your usual keyboard, umlauts and ß included. No special codes are needed."],
      ["Try the long s", "The Long S Manuscript style puts ſ inside words, the way German printers set it for centuries."],
      ["Copy the result", "Press Copy on a style. The umlaut dots travel with their letters because they are part of the copied text."],
    ],
  },
  sections: [
    {
      h2: "1. How are umlauts and ß handled in Fraktur text?",
      blocks: [
        { p: "Unicode has no ready-made Fraktur ä, ö or ü. The generator first splits each accented letter into its base letter and a separate accent, converts the base letter to Fraktur and keeps the accent attached, so ü becomes 𝔲 followed by a combining diaeresis (two dots). Most current fonts place those dots correctly; a few older ones set them slightly off-center." },
        { p: "There is no Fraktur ß either, so the sharp s stays as the ordinary ß. It fits in well because the letter itself grew out of blackletter writing. In the all-capitals style ß becomes SS, following the usual German rule. Other accented letters, such as é, ñ or å, go through the same split, so the accent stays on the Fraktur letter." },
      ],
    },
    {
      h2: "2. The long s (ſ) and other Fraktur habits",
      blocks: [
        { p: "Fraktur printing used two forms of s. The long ſ appeared at the start and in the middle of syllables, and the round s at the end. The real rule depends on how a word divides into parts; our simpler version changes any lowercase s that is followed by another letter, which gives the right feel for most words. Other conventions you may notice in old German print:" },
        {
          ul: [
            "Pairs such as ch, ck and tz were cast as single pieces of type, called ligatures.",
            "Emphasis was shown by spacing out the letters, known as Sperrsatz, instead of italics. The Wide style imitates it.",
            "Foreign words and names were often set in roman type inside a Fraktur page.",
          ],
        },
        { p: "Because modern readers often mistake ſ for f, keep the long s for decorative headings rather than text that must be understood at a glance." },
      ],
    },
    {
      h2: "3. Fraktur alphabet to copy",
      blocks: [
        { p: "Regular Fraktur capitals and small letters, followed by the bold set with small-capital lowercase. Tap a cell to copy it." },
        { chart: { styles: ["fraktur", "bold-fraktur-small-caps"], sets: ["upper", "lower"] } },
        { p: "Fraktur was also the everyday type in the Nordic and Baltic countries for long periods. Today it turns up on beer labels, newspaper mastheads and metal album covers, and in mathematics, where Fraktur letters name algebraic structures. That mathematical use is the reason these characters were added to Unicode." },
      ],
    },
  ],
  built:
    "Input is normalized to decomposed form (Unicode NFD), then each base letter is mapped to Mathematical Fraktur (U+1D504–U+1D537) or Bold Fraktur, with the Letterlike Symbols capitals ℭ ℌ ℑ ℜ ℨ filling gaps. Umlaut dots are the combining diaeresis U+0308, the long s is U+017F, and small capitals come from the IPA Extensions, Phonetic Extensions and Latin Extended-D blocks.",
  related: {
    heading: "More blackletter generators",
    hrefs: ["/font-generator/blackletter", "/bold-fraktur", "/font-generator/old-english-letters", "/newspaper-masthead-font", "/metal-font-generator", "/old-english-text-to-image"],
  },
  faq: [
    { q: "What does Fraktur mean?", a: "It comes from the Latin fractus, meaning broken, describing how the round strokes are broken into angled pieces." },
    { q: "Can I copy and paste Fraktur font?", a: "Yes. Type your text, press Copy next to a style and paste it. You are copying characters, so nothing needs installing." },
    { q: "Why do the umlaut dots look misplaced?", a: "The dots are a separate combining character, and some fonts position combining marks poorly over mathematical letters. A different app or browser often draws them better." },
    { q: "Is there a Fraktur version of ß?", a: "Not as its own Unicode character. The ordinary ß is used, which already has blackletter roots." },
    { q: "Is Fraktur the same as Old English?", a: "Both are blackletter. Fraktur is the German form with broken curves and swashed capitals; English signs and certificates usually use a textura-style design. Unicode only has Fraktur, so copy-paste Old English text is Fraktur too." },
    { q: "When should I use the long s?", a: "For a historical look in a heading or a label. Avoid it where people must read the word instantly, because ſ is easy to misread as f." },
    { q: "What is a Fraktur gothic font?", a: "It is another name for the same lettering. Gothic is the everyday term for blackletter, and Fraktur is its best-known German style." },
  ],
};

export default page;
