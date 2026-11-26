import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it. Kept distinct from /horror-font-generator (blackletter,
// bats, candles): this page is cut, struck and mirrored sans/serif type.
const page: PageContent = {
  slug: "font-generator/slasher",
  file: "font-generator-slasher",
  title: "Slasher Font Generator – 12 Cut and Glitched Title Styles",
  description:
    "Slasher font generator: 12 horror-title text styles – knife-cut, struck-through, glitched, flipped. Type a title, tap Copy, paste. Free, no sign-up.",
  h1: "Slasher Font Generator",
  crumb: "Slasher Font Generator",
  intro:
    "A slasher font generator makes text look cut, struck or corrupted, like the title card of a low-budget horror film, and this one has 12 such styles to copy. Unlike a gothic horror look, slasher font styles skip the castles and candles: they take plain bold or italic letters and damage them with a diagonal slash, a strike, a glitch or a flip. Use this slasher text generator for a short-film title, a scary-story heading, a game lobby name or a Halloween party flyer line.",
  tool: {
    styles: [
      "u-stacked-bold-strike", "u-slash-through", "u-bold-strike", "u-italic-strike", "u-cursive-strike",
      "u-sans-zalgo", "u-script-zalgo", "u-zalgo-soft", "u-upside-down", "u-bold-italic-serif",
      "u-dark-gothic", "u-reverse",
    ],
    sample: "Don't Go Upstairs",
    placeholder: "Type a horror title or a warning…",
    presets: ["Don't Go Upstairs", "Final Girl", "Lights Out", "Camp Midnight", "He Came Back", "Friday Night"],
  },
  stylesHeading: "Slasher title styles",
  howTo: {
    heading: "How to make a slasher title",
    steps: [
      ["Write a short title", "Two to four words. Slasher titles are blunt: a place, a night or a warning."],
      ["Cut it", "Bold Slash and Slashed put a diagonal cut through every letter; Bold Strikethrough is a straight line, like a name crossed off a list."],
      ["Copy and test the size", "Paste it where it will be seen. Glitch styles grow taller than normal text, so leave room above and below."],
    ],
  },
  sections: [
    {
      h2: "Slashed letters A to Z",
      blocks: [
        { p: "Three cut alphabets: bold letters with a diagonal slash, plain letters with the same slash, and italic letters with a horizontal strike. Copy one letter for an initial or a monogram on a poster mock-up." },
        { chart: { styles: ["u-stacked-bold-strike", "u-slash-through", "u-italic-strike"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. What does a slasher movie title look like?",
      blocks: [
        { p: "Slasher posters and title cards tend to use plain, heavy letters and then hurt them: a knife cut through the middle, scratches, letters that drip or tear, or type set in a single harsh color. The text style here can only do the part made of characters, which is the cutting, striking, flipping and glitching. That also makes it different from the [horror font generator](/horror-font-generator), which leans on gothic blackletter and Halloween symbols." },
        { cards: [
          { h: "Knife cut", p: "Bold Slash: 𝐅̷𝐈̷𝐍̷𝐀̷𝐋̷ 𝐆̷𝐈̷𝐑̷𝐋̷. The clearest slasher look." },
          { h: "Crossed off the list", p: "Bold Strikethrough or Italic Strikethrough, for a victim's name or a ruined plan." },
          { h: "Found footage", p: "Glitch Sans or the soft Glitch, like a corrupted tape frame." },
          { h: "Something is wrong", p: "Upside Down or Reverse for a title that unsettles before anyone reads it." },
        ] },
      ],
    },
    {
      h2: "2. How do I make cut or bloody text?",
      blocks: [
        { p: "For cut text, use a slash style: each letter gets an overlay mark that most fonts draw as a short diagonal line across it. For blood, Unicode has no dripping letters, so add 🩸 or 🔪 next to the title instead. On a poster or video thumbnail, set the title in a heavy display font and draw the cut in a graphics app; that gives you control over the angle and the color, which text cannot change." },
      ],
    },
    {
      h2: "3. Why do glitch titles look different on another screen?",
      blocks: [
        { p: "The glitch styles stack combining marks above and below each letter, and every font decides how tall to draw them. Some clip the marks, some let them spill onto the next line. If a title must look the same everywhere, save it as an image with the [text to image](/old-english-text-to-image) tool. Otherwise it is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device." },
      ],
    },
  ],
  built:
    "Slash styles add the combining short solidus overlay U+0337 after each letter, strike styles add the combining long stroke overlay U+0336, glitch styles stack combining diacritics from U+0300–U+036F, and Upside Down swaps letters for rotated lookalikes such as ɐ and ǝ.",
  related: {
    heading: "More dark text",
    hrefs: ["/horror-font-generator", "/font-generator/monster", "/font-generator/strikethrough", "/font-generator/distorted-text", "/font-generator/scratchy", "/death-note-font"],
  },
  faq: [
    { q: "What is a slasher font?", a: "Lettering that looks cut, scratched or damaged, like the title of a slasher horror film. Here it means text with slashes, strikes and glitches added." },
    { q: "How is this different from the horror font generator?", a: "The horror page is gothic blackletter with bats, skulls and candles. This one mostly keeps plain bold, italic and script letters and cuts or corrupts them." },
    { q: "Which style looks most like a knife cut?", a: "Bold Slash. It draws a diagonal line through each bold letter." },
    { q: "Can I make dripping blood text?", a: "Not with Unicode letters. Add a 🩸 emoji, or use a dripping display font in a design app for a poster." },
    { q: "Why does glitch text overlap my other lines?", a: "Its stacked marks extend above and below the letter. Use the soft Glitch style or leave a blank line around it." },
    { q: "Can I use slasher text for a game name?", a: "Short slashed names are readable; heavy glitch names can be hard to read. Preview it before you settle on one." },
  ],
};

export default page;
