import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: ransom note font
// generator, ransom note generator font, ransom note letters generator,
// ransom letter font, fonts cut out ransom note generator, convert text to
// newspaper cut outs like ransom notes.
const page: PageContent = {
  slug: "font-generator/ransom-note",
  file: "font-generator-ransom-note",
  title: "Ransom Note Font Generator – 10 Cut-Out Letter Styles, Free",
  description:
    "Ransom note font generator: 10 mismatched cut-out letter styles, plus boxed and bubble letters to mix by hand. Tap Copy, paste anywhere. Free.",
  h1: "Ransom Note Font Generator",
  crumb: "Ransom Note Text",
  intro:
    "A ransom note font generator makes each letter of your message look as if it came from a different source, the cut-out magazine look from crime films, and this one does it with 10 copy-and-paste text styles. Unlike a ransom letter font you install, which draws pre-made clippings, these styles mix real Unicode alphabets letter by letter: boxed, bubble, wide, Gothic and serif characters side by side. Weird Mix is the closest to true ransom note letters because it picks a different alphabet for every character. The other styles give you single clashing alphabets that you can combine yourself using the chart further down. People use it for mystery party invitations, escape-room clues, joke messages between friends and meme captions.",
  tool: {
    styles: [
      "u-weird", "u-alternating", "alternating", "gangster-initials",
      "u-squared", "u-bubble-filled", "u-squared-spaced", "u-love-parens",
      "u-fullwidth-underline", "u-bubble-underline",
    ],
    sample: "Meet at midnight",
    placeholder: "Type the note…",
    presets: ["Meet at midnight", "You are invited", "Find the next clue", "Bring snacks"],
  },
  stylesHeading: "Ransom Note Letter Styles",
  howTo: {
    heading: "How to make a ransom note with text",
    steps: [
      ["Write a short message", "Ransom-style letters are slow to read, so keep it to one line, like an invitation or a clue."],
      ["Start from Weird Mix", "It already changes alphabet on every letter. If a word comes out too plain, copy single letters from the chart below and swap them in."],
      ["Paste and adjust", "Paste it where you need it and replace any letter you do not like. Each character is independent, so you can edit one without touching the rest."],
    ],
  },
  sections: [
    {
      h2: "1. How do I convert text to newspaper cut-outs like a ransom note?",
      blocks: [
        { p: "A real cut-out note uses scraps of different sizes, colors and paper, and plain text cannot copy that. What text can do is change the letter shape from one character to the next, which is the part your eye notices first. This page offers three levels:" },
        {
          table: {
            head: ["Approach", "Styles", "Result"],
            glyphCols: [2],
            rows: [
              ["Every letter different", "Weird Mix", "Ｐ🄰ｙ Ⓤ🄿"],
              ["Two alphabets taking turns", "Alt Bold/Italic, Alternating Light & Bold", "𝔓𝖆𝔶 𝖀𝔭"],
              ["One clashing alphabet", "Squared, Bubble Filled, Love Parenthesis", "🄿🄰🅈 🅄🄿"],
            ],
          },
        },
        { p: "For a real paper look, such as a printed party prop, a picture works better than text: arrange letters in an image editor or cut them out of old magazines. Use the text version where you can only type." },
      ],
    },
    {
      h2: "2. Mixing your own ransom note letters",
      blocks: [
        { p: "The most convincing notes are mixed by hand. Pick a base, say Squared for most letters, then swap every second or third letter for a bubble or parenthesis letter from the chart. Break any pattern you notice: real clippings never alternate neatly. Leave the spaces plain so the word breaks stay easy to see. Weird Mix uses a fixed sequence, so the same message always gives the same mix; hand-editing is how you make it look like yours." },
      ],
    },
    {
      h2: "Cut-out letters to copy one at a time",
      blocks: [
        { p: "Tap a cell to copy that single letter. Squared and Bubble Filled are capitals only, so lowercase cells repeat the capitals; mix in parenthesis letters for real lowercase." },
        { chart: { styles: ["u-squared", "u-bubble-filled", "u-love-parens"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Weird Mix chooses, letter by letter, between Mathematical Fraktur, Mathematical Script, Double-Struck, Circled Latin (U+24B6–U+24E9), Squared Latin (U+1F130–U+1F149) and Fullwidth Forms. Bubble Filled uses Negative Circled Latin letters (U+1F150–U+1F169).",
  related: {
    heading: "More playful text",
    hrefs: ["/font-generator/fun", "/font-generator/mocking-text", "/font-generator/font-converter", "/font-generator/graffiti", "/font-generator/fancy-letters"],
  },
  faq: [
    { q: "What font is used for ransom notes?", a: "Real ransom notes use no single font; the letters are cut from different printed sources. Ransom note fonts imitate that, and this generator imitates it with mixed Unicode letters." },
    { q: "How do I make letters look cut out?", a: "Copy the Weird Mix style, or build the word from single letters in the chart, switching style every letter or two." },
    { q: "Why do some characters in Weird Mix look plain?", a: "Fullwidth letters look close to normal ones, and digits and punctuation are missing from some of the mixed alphabets, so they can stay unchanged. Swap them for a letter from the chart." },
    { q: "Can I get lowercase cut-out letters?", a: "Squared and Bubble Filled only exist as capitals in Unicode. Use Love Parenthesis, Alt Bold/Italic or Weird Mix for lowercase." },
    { q: "Is the mix random every time?", a: "No. It follows a fixed sequence, so the same text always gives the same result. Edit letters by hand for variety." },
    { q: "Can I print ransom note text?", a: "You can paste it into a document and print it, but how it looks depends on the fonts installed there. For a reliable print, make an image instead." },
    { q: "What is ransom note text good for?", a: "Mystery and murder-mystery party invitations, scavenger hunt or escape-room clues, and jokes between friends. It is not meant for threatening anyone." },
  ],
};

export default page;
