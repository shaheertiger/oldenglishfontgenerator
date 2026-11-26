import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. No Bing queries recorded for it yet;
// the old target keyword was "strikethrough text generator".
const page: PageContent = {
  slug: "font-generator/strikethrough",
  file: "font-generator-strikethrough",
  title: "Strikethrough Text Generator – 12 Crossed-Out Styles, Free",
  description:
    "Strikethrough text generator with 12 crossed-out styles: single line, slash, bold, italic, cursive and Gothic. Tap Copy, paste anywhere. Free.",
  h1: "Strikethrough Text Generator",
  crumb: "Strikethrough Text",
  intro:
    "Strikethrough text is text with a line drawn through every letter, l̶i̶k̶e̶ t̶h̶i̶s̶, and this strikethrough text generator makes it as plain characters you can copy, so it stays crossed out even in a box that has no formatting buttons. Crossed out text is mostly used for jokes and self-corrections (\"I'm n̶o̶t̶ fine\"), for showing an old price next to a new one, and for to-do lists typed in plain notes. You get 12 line-through text styles: a thin strike, a diagonal slash, struck bold, italic, cursive and Gothic letters, and underline and overline versions for comparison.",
  tool: {
    styles: [
      "u-strikethrough", "u-slash-through", "u-bold-strike", "u-italic-strike",
      "u-cursive-strike", "u-fraktur-strike", "bold-strike", "u-dark-gothic",
      "fraktur-strike", "u-stacked-bold-strike", "u-underline", "overline",
    ],
    sample: "I'm not crying",
    placeholder: "Type the words to cross out…",
    presets: ["I'm not crying", "Was $40, now $25", "Monday", "Done"],
  },
  stylesHeading: "Crossed-Out Text Styles",
  howTo: {
    heading: "How to cross out text with this tool",
    steps: [
      ["Type only what should be struck", "Enter just the part to cross out. For \"was $40, now $25\", type \"$40\" alone, copy it, and type the rest normally where you paste it."],
      ["Choose the line", "The middle stroke is the classic look. Slashed uses a diagonal stroke that looks scribbled out. Bold struck letters stay legible at small sizes."],
      ["Copy and paste", "Tap Copy and paste where you want it. Delete the struck word as one unit if you change your mind; each letter carries its own line."],
    ],
  },
  sections: [
    {
      h2: "1. Strikethrough character vs. strikethrough formatting",
      blocks: [
        { p: "Word processors and many chat apps can format text as strikethrough, but that formatting is lost when you paste into a plain-text field. This tool works differently: after every character it adds U+0336, the combining long stroke overlay, which the device draws across the letter in front of it. Because the line is part of the text itself, it travels with a copy and paste." },
        {
          table: {
            head: ["Mark added", "Code point", "Example"],
            glyphCols: [2],
            rows: [
              ["Long stroke overlay (strikethrough)", "U+0336", "s̶t̶r̶i̶k̶e̶"],
              ["Short solidus overlay (slash)", "U+0337", "s̷l̷a̷s̷h̷"],
              ["Low line (underline)", "U+0332", "u̲n̲d̲e̲r̲"],
              ["Overline", "U+0305", "o̅v̅e̅r̅"],
            ],
          },
        },
      ],
    },
    {
      h2: "2. Why does my strikethrough have gaps?",
      blocks: [
        { p: "Each letter gets its own short stroke, and the reader's font decides how long it is. In some fonts the strokes meet and form one line; in others you see a dashed line with gaps between letters, or the line sits slightly too high. Bold and Gothic letters are wider, so the strokes usually join better. Spaces are left without a line on purpose, so separate words show separate strikes." },
        { p: "Search engines and screen readers see the letters plus the combining marks, so struck words may not be found by search or may be read out oddly. Use real formatting for anything important, such as a price change in a document." },
      ],
    },
    {
      h2: "Strikethrough alphabet and numbers to copy",
      blocks: [
        { p: "Each cell is one letter with its line already attached. Tap to copy a single struck character." },
        { chart: { styles: ["u-strikethrough", "u-slash-through", "u-bold-strike"], sets: ["upper", "lower", "digits"] } },
      ],
    },
  ],
  built:
    "Every style adds a combining mark from the Combining Diacritical Marks block after each character: U+0336 for the strike, U+0337 for the slash, U+0332 for the underline and U+0305 for the overline. The bold, italic, cursive and Gothic versions first map letters to Mathematical Alphanumeric Symbols.",
  related: {
    heading: "More text effects",
    hrefs: ["/font-generator/scratchy", "/font-generator/mocking-text", "/font-generator/font-converter", "/font-generator/italic", "/symbols"],
  },
  faq: [
    { q: "How do I make strikethrough text without formatting?", a: "Type your text in the box above and copy a strikethrough style. The line is a Unicode character, so it needs no formatting button." },
    { q: "What is the strikethrough character in Unicode?", a: "U+0336, COMBINING LONG STROKE OVERLAY. It is placed after each letter and drawn through it." },
    { q: "Can I strike through only one word?", a: "Yes. Type just that word, copy it, and paste it into your sentence between normal words." },
    { q: "How do I remove strikethrough from pasted text?", a: "Delete the struck text and retype it. The marks are separate characters, so removing formatting does nothing to them." },
    { q: "Why is the line through my text broken into dashes?", a: "Each letter has its own short stroke and the font sets its length. Try the bold or Gothic style, whose wider letters usually close the gaps." },
    { q: "What is the difference between strikethrough and slashed text?", a: "Strikethrough is a straight horizontal line through the middle. Slashed uses a diagonal stroke, which looks more like something scribbled out by hand." },
    { q: "Can I cross out numbers?", a: "Yes. The marks attach to digits too, which is handy for an old price or a crossed-out date." },
  ],
};

export default page;
