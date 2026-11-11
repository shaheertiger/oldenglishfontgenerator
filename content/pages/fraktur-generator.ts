import type { PageContent } from "./types";

const page: PageContent = {
  slug: "fraktur-generator",
  title: "Fraktur Generator — German Blackletter with Umlauts & ß",
  description:
    "Fraktur generator for German blackletter text. Handles ä, ö, ü and ß, adds the long s and copies straight into any app. Free, no sign-up.",
  h1: "Fraktur Generator",
  crumb: "Fraktur Generator",
  intro:
    "Fraktur is the German branch of blackletter, and this Fraktur generator is built to handle German text properly. Umlauts keep their dots, ß stays in place, and you can switch on the long s that German printers used until the 20th century. English works too, of course; the letters are the same.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "long-s", "fraktur-caps", "illuminated", "frame-chevron", "fraktur-lower", "wide", "interpunct", "fraktur-underline", "bold-fraktur-caps", "frame-corner"],
    sample: "Grüße aus München",
    placeholder: "Text eingeben… or type in English",
    presets: ["Grüße aus München", "Frohe Weihnachten", "Gemütlichkeit", "Schöne Straße", "Wanderlust"],
  },
  stylesHeading: "Fraktur styles",
  howTo: {
    heading: "How to write German in Fraktur",
    steps: [
      ["Type normally", "Use your usual keyboard, umlauts and ß included. There's no need for special codes."],
      ["Try the long s", "Switch to the Long S Manuscript style to see ſ in the middle of words, as in old German print."],
      ["Copy and paste", "Paste into a message, a document heading or a social post. The umlaut dots travel with the letters."],
    ],
  },
  sections: [
    {
      h2: "How umlauts and ß are handled",
      blocks: [
        { p: "Unicode has no ready-made Fraktur ä, ö or ü. The generator splits each umlaut into its base letter and a separate two-dot mark, converts the base letter to Fraktur and keeps the mark attached, so ü becomes 𝔲 followed by a combining diaeresis. Most phones and browsers draw that correctly; a few older fonts place the dots slightly off-centre." },
        { p: "There is also no Fraktur ß, so the sharp s stays as the ordinary ß. It sits comfortably between Fraktur letters because its shape already comes from blackletter. When you choose an all-capitals style, ß becomes SS, which is the standard German rule." },
      ],
    },
    {
      h2: "The long s (ſ) and other Fraktur habits",
      blocks: [
        { p: "Fraktur printing used two forms of s. The long ſ appeared at the start and in the middle of syllables, while the round s was used at the end. The rule is more subtle than our simple version, which replaces any s followed by a letter, but it gives the right feel for most words. Other conventions you might notice in old German print:" },
        { ul: ["Ligatures such as ch, ck and tz were cast as single pieces of type.", "Emphasis was shown by letter-spacing, called Sperrsatz, rather than italics. The Wide style imitates it.", "Foreign words and names were often set in roman type inside a Fraktur text."] },
      ],
    },
    {
      h2: "Fraktur outside Germany",
      blocks: [
        { p: "Fraktur was also standard in the Nordic and Baltic countries for long stretches. Today you see it on beer labels, newspaper mastheads, heavy metal album art and in mathematics, where Fraktur letters label algebraic structures. That last use is the reason the characters exist in Unicode at all." },
      ],
    },
  ],
  built:
    "Input is normalised to decomposed form (Unicode NFD), then each base letter is mapped to Mathematical Fraktur U+1D504–U+1D537 with the Letterlike Symbols capitals ℭ ℌ ℑ ℜ ℨ filling the gaps. Umlaut dots are the combining diaeresis U+0308. The long s is U+017F.",
  related: {
    heading: "More blackletter generators",
    hrefs: ["/blackletter-generator", "/old-english-alphabet", "/medieval-font-generator", "/gothic-font-generator", "/old-english-text-to-image", "/old-english-letters", "/bold-fraktur"],
  },
  faq: [
    { q: "What does Fraktur mean?", a: "It comes from the Latin fractus, broken, describing how the round strokes are broken into angled segments." },
    { q: "Why do the umlaut dots look misplaced?", a: "The dots are a separate combining character. Some fonts don't position combining marks well on mathematical letters. Try a different app or browser if it bothers you." },
    { q: "Is there a Fraktur version of ß?", a: "Not as a separate Unicode character. The normal ß is used, which already has blackletter origins." },
    { q: "When should I use the long s?", a: "Only for a historical look. Modern readers often mistake ſ for f, so avoid it where the word must be understood instantly." },
    { q: "Do accented letters from other languages work?", a: "Yes. Letters like é, ñ or å are split into base letter and accent in the same way, so the accent stays on the Fraktur letter." },
  ],
};

export default page;
