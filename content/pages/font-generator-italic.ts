import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing push-list page: "italics
// generator" ~354 impressions at about #8 with no clicks, plus "italic text
// generator", "copy and paste italics" and "italic font generator".
const page: PageContent = {
  slug: "font-generator/italic",
  file: "font-generator-italic",
  title: "Italics Generator – 10 Italic Text Styles to Copy and Paste",
  description:
    "Italics generator with 10 italic styles: serif, bold, sans, underlined, spaced. Type text, tap Copy, paste italics where there is no formatting button.",
  h1: "Italics Generator",
  crumb: "Italics Generator",
  intro:
    "An italics generator converts ordinary letters into slanted Unicode characters, so the italic look travels with the text when you paste it, even into a box that has no I button. This italic text generator shows 10 variations at once: serif italic, bold italic, sans-serif italic, sans bold italic and versions with an underline, a strike or extra spacing. To copy and paste italics, type in the box, tap Copy on the row you want and paste. You can also use it as an italic font generator for a single word you want to stress inside a plain sentence.",
  tool: {
    styles: [
      "italic-serif", "bold-italic-serif", "u-sans-italic", "u-sans-bold-italic", "u-italic-underline",
      "u-italic-strike", "u-italic-spaced", "u-alternating", "roman-initial-italic", "script",
    ],
    sample: "This is in italics",
    placeholder: "Type the text you want in italics…",
    presets: ["This is in italics", "never again", "Chapter One", "really"],
  },
  stylesHeading: "Italic Text Styles",
  howTo: {
    heading: "How to use the italics generator",
    steps: [
      ["Type", "Enter a word or a sentence. Every italic row updates as you type."],
      ["Choose serif or sans", "Serif italic looks bookish; sans italic matches the plain lettering most apps use for body text."],
      ["Copy and paste", "Tap Copy and paste where you want the slanted text. To stress one word, convert only that word and type the rest normally."],
    ],
  },
  sections: [
    {
      h2: "1. How do I copy and paste italics?",
      blocks: [
        { p: "Italic formatting in an editor is an instruction to the font: \"draw these letters slanted\". Most bios, chat boxes and name fields strip that instruction or never offer it. Unicode italic letters are different characters altogether, like 𝑎 instead of a, so the slant is part of the text itself and survives the paste." },
        {
          ul: [
            "Type or paste your text in the box at the top of the page.",
            "Find the row you like. Renaissance Italic is the classic serif slant; Sans Italic is the lighter, modern one.",
            "Tap Copy, switch to the other app and paste.",
            "Only letters change. Numbers and punctuation stay upright because Unicode has no italic versions of them, and an accented letter becomes an italic letter followed by a separate accent mark.",
          ],
        },
      ],
    },
    {
      h2: "2. Which italic font generator style should I pick?",
      blocks: [
        {
          table: {
            head: ["Row in the tool", "What it is", "Reads best for"],
            rows: [
              ["Renaissance Italic", "Serif italic, like a book's italic", "Titles, quotes, a stressed word"],
              ["Bold Renaissance Italic", "Serif bold italic", "Short headlines and names"],
              ["Sans Italic", "Sans-serif italic", "Blending into plain app text"],
              ["Sans Bold Italic", "Sans-serif bold italic", "Labels and one-line callouts"],
              ["Italic Underlined / Strikethrough", "Serif italic plus a combining line", "Emphasis, or a crossed-out joke"],
              ["Alt Bold/Italic", "Letters alternate bold and italic", "Playful text, not long sentences"],
              ["Roman Capital + Italic", "Bold upright capital, italic lowercase", "Names and titles"],
            ],
          },
        },
        { p: "The chart lists every italic letter on its own. Tap a cell to copy one character, which is handy for fixing a single letter in something you already pasted. There is no 0–9 row because Unicode has no italic digits; the slanted text keeps regular numbers." },
        { chart: { styles: ["italic-serif", "bold-italic-serif", "u-sans-italic", "u-sans-bold-italic"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "3. Is \"Old Italic script\" the same as italic text?",
      blocks: [
        { p: "No. Old Italic is the name of a group of ancient alphabets used in Italy, such as Etruscan, and Unicode gives it its own block (U+10300–U+1032F). It has nothing to do with slanted letters, and this page does not type it. If you want an older hand that still reads as English, the [italianate font generator](/font-generator/italianate) covers the Renaissance chancery italic that italic type grew out of, and the [calligraphy generator](/font-generator/calligraphy) has script and blackletter hands." },
      ],
    },
  ],
  built:
    "Serif italic comes from Mathematical Italic (U+1D434–U+1D467, with ℎ U+210E standing in for the missing h) and Mathematical Bold Italic (U+1D468–U+1D49B); sans versions come from Sans-Serif Italic (U+1D608–U+1D63B) and Sans-Serif Bold Italic (U+1D63C–U+1D66F). Underline and strike add the combining characters U+0332 and U+0336 after each letter.",
  related: {
    heading: "Related text tools",
    hrefs: ["/font-generator/italianate", "/font-generator/calligraphy", "/font-generator/strikethrough", "/font-generator/font-converter", "/different-fonts"],
  },
  faq: [
    { q: "What is the best italics generator for copy and paste?", a: "Any generator that outputs Unicode italic letters will copy as text. This one shows 10 italic rows at once so you can compare serif, sans, bold and underlined versions." },
    { q: "How do I copy and paste italics into a bio?", a: "Type the text above, tap Copy next to an italic row and paste it into the bio field. The slant is part of the characters, so no formatting button is needed." },
    { q: "Is there a bold italic text generator?", a: "Yes, two of the rows are bold italic: Bold Renaissance Italic (serif) and Sans Bold Italic." },
    { q: "Why are my numbers not in italics?", a: "Unicode has italic letters but no italic digits, so numbers stay upright. Bold and double-struck digits exist, but not slanted ones." },
    { q: "Why does the letter h look slightly different in italic text?", a: "The italic h was encoded earlier than the rest, as the Planck constant sign ℎ, so the reader's device may draw it from another font." },
    { q: "Can I use italic Unicode text in a document or essay?", a: "It is better not to. Use your editor's own italic button instead, because Unicode italics are math symbols and can confuse spell check, search and screen readers." },
    { q: "Is there an italic font generator for cursive?", a: "The last row, Tattoo Script, is a cursive script rather than an italic. For more cursive hands see the [handwriting font generator](/font-generator/handwriting)." },
  ],
};

export default page;
