import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL (old keyword: "fun fonts"; Copilot
// grounds "funky letters" on this site). Also absorbs three movie/game pages
// that now 301 here: /font-generator/mamma-mia, /font-generator/final-fantasy
// and /font-generator/monopoly (Bing: mamma mia font generator, final fantasy
// font generator, monopoly font generator / title font).
const page: PageContent = {
  slug: "font-generator/fun",
  file: "font-generator-fun",
  title: "Fun Fonts Generator – 14 Playful Text Styles, Copy and Paste",
  description:
    "Fun fonts generator: 14 playful text styles, bubble, boxed, starry, leet and more, plus party, game-title and board-game looks. Tap Copy. Free.",
  h1: "Fun Fonts Generator",
  crumb: "Fun Fonts",
  intro:
    "Fun fonts are playful letter styles, such as bubbles, boxes, sparkles and number-for-letter swaps, used to make a short message feel lighthearted, and this generator gives you 14 of them as text you can copy. Type once and every style updates: bubble letters, funky letters that look vaguely Japanese, (l)(o)(v)(e) brackets, leet speak, an upside-down line and spaced caps for titles. Because each fun text style is a set of Unicode characters rather than an installed font, you can paste it anywhere you can type, but the reader's device still has to have glyphs for it. Further down are three themed looks people ask for by name: Mamma Mia-style party text, Final Fantasy-style title text and Monopoly-style game-night text.",
  tool: {
    styles: [
      "u-bubble", "u-bubble-filled", "u-squared", "u-fullwidth",
      "u-love-parens", "u-japanese-style", "u-leet", "u-upside-down",
      "deco-stars", "deco-heart", "u-bold-spaced", "bold-italic-serif",
      "u-small-caps-spaced", "u-outline-spaced",
    ],
    sample: "Game night!",
    placeholder: "Type something fun…",
    presets: ["Game night!", "Party time", "Level up", "Best friends"],
  },
  stylesHeading: "Fun Text Styles",
  howTo: {
    heading: "How to use fun fonts",
    steps: [
      ["Type a few words", "Fun styles are loud, so they work best on a name, a title or a short shout-out."],
      ["Match the style to the mood", "Bubble and boxed letters feel cheerful, stars and hearts feel cute, leet and upside-down feel like an inside joke."],
      ["Copy and mix", "Tap Copy. You can combine two styles in one line by copying each part separately."],
    ],
  },
  sections: [
    {
      h2: "Mamma Mia-style text",
      blocks: [
        { p: "For an ABBA night, a sing-along invitation or a karaoke caption, the cheerful styles here fit the mood: try Bold Spaced or Big (Full Width) for the title line and end it with an exclamation mark, as the musical's own name does. Bubble letters suit a single highlighted name. This is Mamma Mia-style text made from Unicode characters. It is not the official logo or poster lettering, and this site is not affiliated with the musical, the films or ABBA." },
      ],
    },
    {
      h2: "Final Fantasy-style title text",
      blocks: [
        { p: "Fans making a guild name, a party roster or a stream title usually want something that feels grand rather than goofy. Bold Renaissance Italic gives a sweeping, storybook feel, Outline Spaced reads like an engraved heading, and Starlit Gothic frames a name in small sparkles. Keep it to a name or a short title; ornate letters get hard to read fast. This is Final Fantasy-style title text, not the official logo, and this site has no connection with Square Enix or the series." },
      ],
    },
    {
      h2: "Monopoly-style text",
      blocks: [
        { p: "For a family game-night invitation, a house-rules sheet or a joke property deed, Small Caps Spaced and Bold Spaced give the classic spaced-capitals look of a board-game box, and Outline Spaced works for a heading. For Bold Spaced, type the text in capitals if you want every letter at the same height. This is Monopoly-style text built from Unicode letters; it is not the official logo font, and this site is not affiliated with Hasbro or the game." },
        { p: "For any of these looks, if you need the real logo for print, use the official artwork where you have permission rather than a look-alike." },
      ],
    },
    {
      h2: "Pulp Fiction-style text",
      blocks: [
        { p: "People who search for a Pulp Fiction font usually want the feel of an old pulp-magazine cover: loud, heavy capitals packed close together. Bold Spaced typed in capitals gets closest, and Big (Full Width) gives a wider headline for a party sign or a movie-night invite. This is Pulp Fiction-style text made of Unicode letters, not the film's poster lettering, and this site has no connection to the film or its owners." },
      ],
    },
    {
      h2: "Fun letters to copy one by one",
      blocks: [
        { p: "Tap a cell to copy a single bubble letter or Japanese-style look-alike. Japanese-style has no lowercase, so those cells repeat the capitals." },
        { chart: { styles: ["u-bubble", "u-japanese-style"], sets: ["upper", "lower", "digits"] } },
      ],
    },
  ],
  built:
    "Bubble letters are Circled Latin (U+24B6–U+24E9), Bubble Filled and Squared come from the Enclosed Alphanumeric Supplement, and Japanese Style borrows look-alike characters from CJK ideographs, katakana, hiragana, Bopomofo, Hangul, Cherokee and Cyrillic. Leet speak only swaps letters for digits, such as 4 for A and 3 for E.",
  related: {
    heading: "More playful text",
    hrefs: ["/font-generator/ransom-note", "/font-generator/mocking-text", "/font-generator/wavy", "/font-generator/font-converter", "/happy-birthday-font", "/coquette"],
  },
  faq: [
    { q: "What are fun fonts?", a: "Playful letter styles like bubble, boxed, sparkly or upside-down text. On this page they are Unicode characters you can copy, not font files." },
    { q: "How do I get funky letters to copy and paste?", a: "Type in the box and tap Copy on Japanese Style, Love Parenthesis or Bubble, the three funkiest styles here." },
    { q: "Is the Japanese style real Japanese?", a: "No. It borrows characters that look like Latin letters, and some are real Chinese or Japanese characters, so a reader of those languages will see unrelated symbols." },
    { q: "Is there a Mamma Mia font generator?", a: "There is no official one. The Mamma Mia-style section above suggests cheerful bold styles; they are look-alikes, not the logo." },
    { q: "What font is the Final Fantasy logo?", a: "We don't name it here because we can't verify it. The Final Fantasy-style section above offers elegant look-alike styles instead." },
    { q: "Is there a Monopoly font generator?", a: "Not an official one. Small Caps Spaced and Bold Spaced give a similar board-game title feel as copyable text." },
    { q: "Are fun fonts free to use?", a: "Yes. There is no sign-up, no watermark and no limit on how often you copy." },
    { q: "Why does a fun letter show as a box?", a: "The reader's device has no font that contains that character. Squared and Bubble Filled letters were added to Unicode later than most styles here, so try plain Bubble or Bold Spaced if that happens." },
  ],
};

export default page;
