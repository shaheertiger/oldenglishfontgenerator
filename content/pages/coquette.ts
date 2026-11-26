import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL (/coquette). There is no bow-wrapping
// transform yet, so bows and hearts are offered as a copyable symbol table.
const page: PageContent = {
  slug: "coquette",
  title: "Coquette Fonts – 15 Soft Script Styles, Copy and Paste",
  description:
    "Coquette fonts: 15 soft script, italic and small caps text styles plus bows 🎀 and hearts ♡ to copy. Type your name, tap Copy, paste. Free.",
  h1: "Coquette Fonts",
  crumb: "Coquette Fonts",
  intro:
    "Coquette fonts are delicate lettering styles, mostly looping script and tiny small caps, that match the bows-and-lace coquette aesthetic; this page gives you 15 of them as copy-and-paste text. Type a name or a short line and every coquette font style updates at once, from fine script to spaced small caps and a soft italic. To finish the coquette aesthetic font look, add a ribbon 🎀, a heart ♡ or the little bow ୨୧ from the symbol table further down. Nothing to install: the letters are Unicode characters, not a downloaded typeface.",
  tool: {
    styles: ["coquette-bow", "coquette-ribbon", "coquette-heart", 
      "script", "bold-script", "script-spaced", "u-cursive-underline", "italic-serif", "bold-italic-serif", "u-italic-spaced", "u-sans-italic",
      "u-small-caps", "u-small-caps-spaced", "u-small-caps-underline", "u-superscript", "u-tiny-spaced", "deco-heart", "monogram-ampersand",
    ],
    sample: "Lana Rose",
    placeholder: "Type a name, a bio line or a caption…",
    presets: ["Lana Rose", "ballet & bows", "pretty in pink", "Your Name"],
  },
  stylesHeading: "Coquette Font Styles",
  howTo: {
    heading: "How to make coquette text",
    steps: [
      ["Keep it short", "A name, an initial pair or three or four words looks most delicate; long paragraphs in script get hard to read."],
      ["Pick a soft style", "Script and spaced small caps are the classic choices. Underlined script reads like a ribbon tied under the word."],
      ["Add a bow", "Copy a ribbon, heart or ୨୧ from the symbol table and put one on each side of your text."],
    ],
  },
  sections: [
    {
      h2: "Coquette alphabet: script and small caps letters to copy",
      blocks: [
        { p: "Every letter below is a separate copy button, handy when you only need a fancy initial or want to build a word one character at a time." },
        { chart: { styles: ["script", "bold-script", "u-small-caps"], sets: ["upper", "lower"] } },
        { p: "Small caps look the same in both rows because they are lowercase-sized capitals by design. Unicode has no small-capital X, so this set uses a plain x; it also uses a plain s, and ǫ (o with ogonek) stands in for q." },
      ],
    },
    {
      h2: "Bows, hearts and ribbon symbols for the coquette aesthetic",
      blocks: [
        {
          table: {
            head: ["Symbol", "Unicode name", "Code point"],
            glyphCols: [0],
            rows: [
              ["🎀", "Ribbon", "U+1F380"],
              ["୨୧", "Oriya digits two and one, used side by side as a bow", "U+0B68 U+0B67"],
              ["♡", "White heart suit", "U+2661"],
              ["♥", "Black heart suit", "U+2665"],
              ["❥", "Rotated heavy black heart bullet", "U+2765"],
              ["🩷", "Pink heart", "U+1FA77"],
              ["🤍", "White heart", "U+1F90D"],
              ["˚", "Ring above (a tiny floating circle)", "U+02DA"],
              ["⋆", "Star operator", "U+22C6"],
              ["✧", "White four pointed star", "U+2727"],
              ["🩰", "Ballet shoes", "U+1FA70"],
              ["🦢", "Swan", "U+1F9A2"],
              ["🍒", "Cherries", "U+1F352"],
              ["💌", "Love letter", "U+1F48C"],
              ["🌷", "Tulip", "U+1F337"],
              ["🧸", "Teddy bear", "U+1F9F8"],
            ],
          },
        },
        { p: "The two-character bow ୨୧ is a borrowing: the shapes are really the digits 2 and 1 of the Odia script, which happen to look like a loop of ribbon when written next to each other. Newer emoji such as the pink heart 🩷 may appear as an empty box on devices that have not updated their emoji font." },
      ],
    },
    {
      h2: "1. Where can I find a font with coquette ribbon flourishes?",
      blocks: [
        { p: "Not as copy-and-paste text. Unicode includes script letters, but no letters with swashes or ribbons attached, so any \"ribbon flourish\" here comes from placing bow and heart symbols around the word rather than from the letters themselves. Patterns that look finished: 🎀 𝓛𝓪𝓷𝓪 🎀 with bold script, ୨୧ ʟᴀɴᴀ ୨୧ with small caps, or ˚ ⋆ ℒ𝒶𝓃𝒶 ⋆ ˚ with fine script and stars." },
        { p: "If you are printing something, such as a party invitation, a label or a sticker sheet, you need an installed script typeface with swash capitals instead, set in a design program. For copy-and-paste use, the [modern calligraphy](/font-generator/modern-calligraphy) styles add a looser hand, and the [princess font](/font-generator/princess) page has crowns and sparkles if you want something more fairy-tale than coquette." },
      ],
    },
    {
      h2: "2. What does coquette mean, and why the bows?",
      blocks: [
        { p: "Coquette is the French word for a flirt, a woman who enjoys being admired. As an online aesthetic it borrows from that idea a romantic, girlish dress-up look: satin hair bows, lace, pale pink, pearls, ballet flats and vintage lingerie details. The lettering follows the clothes. Thin looping script echoes handwritten love letters, small caps feel neat and dainty, and the bow ties it together. If you want the pastel lettering without the bows, the [angelic font](/font-generator/angelic) page covers a softer, cloud-and-halo version." },
      ],
    },
  ],
  built:
    "Script styles use Unicode Mathematical Script and Bold Script letters (U+1D49C–U+1D503) with Letterlike Symbols such as ℒ and ℯ filling the gaps; small caps come from the IPA Extensions, Phonetic Extensions and Latin Extended-D blocks, and the tiny style uses modifier letters. Bows and hearts are separate symbols and emoji you add yourself.",
  related: {
    heading: "More soft and pretty lettering",
    hrefs: ["/font-generator/princess", "/font-generator/angelic", "/font-generator/modern-calligraphy", "/font-generator/fancy-letters", "/font-generator/handwriting"],
  },
  faq: [
    { q: "What font is used for coquette?", a: "There is no single official one. Coquette lettering is usually a thin looping script or dainty small caps, often with a bow or heart on either side." },
    { q: "How do I get coquette fonts on my phone?", a: "Type your text here and press Copy on a style; you paste letters, not a font, so nothing needs installing. Whether every character shows depends on the fonts on the reader's device." },
    { q: "How do I type the bow symbol?", a: "Copy 🎀 or ୨୧ from the symbol table above." },
    { q: "What are cute coquette symbols?", a: "Bows 🎀 and ୨୧, hearts ♡ 🩷, small stars ⋆ ✧, ballet shoes 🩰, swans 🦢, cherries 🍒 and love letters 💌 are the usual set." },
    { q: "Can I use coquette fonts for my name?", a: "Yes. Short text such as a first name or two initials looks best; the monogram style turns two words into Fraktur initials joined with an ampersand." },
    { q: "Why do some coquette letters look different from the rest?", a: "A few script capitals, such as ℬ, ℰ and ℒ, come from an older Unicode block than the other script letters, so some fonts draw them in a slightly different weight." },
    { q: "Is there a pink font I can copy and paste?", a: "No. Pasted text takes the color of the place you paste it; Unicode characters carry no color. Pink hearts and other emoji are the exception, because emoji have their own colors." },
  ],
};

export default page;
