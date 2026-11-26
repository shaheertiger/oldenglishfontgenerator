import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing sent this page "backwards b"
// searches (backwards b text, backwards b copy and paste, reversed b,
// unicode for backwards b, how to type reverse b), so the copy answers those.
const page: PageContent = {
  slug: "font-generator/reverse",
  file: "font-generator-reverse",
  title: "Backwards B Text & Reverse Text – Copy and Paste, 8 Styles",
  description:
    "Backwards B text in 8 styles: mirrored ᙠ, reversed lines, upside-down and flipped Gothic. Type once, tap Copy, paste anywhere. Free, no sign-up.",
  h1: "Backwards B Text and Reverse Text Generator",
  crumb: "Reverse Text",
  intro:
    "Backwards B text is writing that uses a mirror-image B (ᙠ), or a whole line flipped right to left, and the generator below makes it in 8 copy-and-paste styles. If you only need the backwards B copy and paste character, tap ᙠ in the chart further down; if you searched \"reversed b\" because you want a full mirrored name, type it in the box and copy the Mirrored line. Reverse text is different from a font: each style swaps or reorders the actual characters, so what you copy is ordinary Unicode that you can paste anywhere you can type. For the opposite job, turning letters into blackletter, use the [Old English font generator](/).",
  tool: {
    styles: [
      "u-mirrored", "u-reverse", "u-upside-down", "u-fraktur-reversed",
      "u-fraktur-flipped", "reversed", "upside-down", "vertical",
    ],
    sample: "Bob is back",
    placeholder: "Type a name or line to flip…",
    presets: ["Bob is back", "Stressed", "Never odd or even", "Dear Diary"],
  },
  stylesHeading: "Reverse and Mirrored Text Styles",
  howTo: {
    heading: "How to make backwards text",
    steps: [
      ["Type it the normal way", "Write your text left to right as usual. The flipping is done for you, including the order of the letters."],
      ["Pick the kind of flip", "Reverse only reorders the letters. Mirrored also swaps letters for backwards look-alikes such as ᙠ and Я. Upside Down turns the line 180°."],
      ["Copy and check it", "Tap Copy, paste it, and read it once. A letter with no backwards twin, like A or O, stays as it is, which is normal."],
    ],
  },
  sections: [
    {
      h2: "1. How do I type a reverse B?",
      blocks: [
        { p: "Keyboards have no key for a backwards B, and Unicode has no official \"reversed Latin capital B\" letter. What people use instead is a look-alike from another script. This generator uses ᙠ (U+1660, a Canadian Syllabics letter) in its Mirrored style. To type it, copy it from here once; after that, your phone's text replacement or a saved note is the fastest way to reuse it." },
        {
          table: {
            head: ["Want", "Copy this", "What it really is"],
            glyphCols: [1],
            rows: [
              ["Backwards B", "ᙠ", "U+1660 Canadian Syllabics Carrier TSA"],
              ["Backwards R", "Я", "U+042F Cyrillic capital Ya"],
              ["Backwards N", "И", "U+0418 Cyrillic capital I"],
              ["Backwards E", "Ǝ", "U+018E Latin capital reversed E"],
              ["Backwards L", "⅃", "U+2143 reversed sans-serif capital L"],
              ["Backwards question mark", "⸮", "U+2E2E reversed question mark"],
            ],
          },
        },
        { p: "Because Я and И are real Cyrillic letters, a Russian reader sees them as \"ya\" and \"i\", not as flipped English. That is fine for a joke or a logo but worth knowing before you put one in a name." },
      ],
    },
    {
      h2: "2. Reverse, mirrored or upside down: which one?",
      blocks: [
        {
          table: {
            head: ["Style", "What changes", "\"Bob is back\" becomes"],
            glyphCols: [2],
            rows: [
              ["Reverse", "Only the order of the characters", "kcab si boB"],
              ["Mirrored", "Order, plus backwards look-alike letters", "ʞɔɒd ƨi doᙠ"],
              ["Upside Down", "Order, plus letters turned 180°", "ʞɔɐq sı qoB"],
              ["Reversed Gothic", "Order, in Fraktur letters", "𝔨𝔠𝔞𝔟 𝔰𝔦 𝔟𝔬𝔅"],
            ],
          },
        },
        { p: "Reverse is the one to use for palindromes and \"read it backwards\" puzzles, because the letters stay readable. Mirrored is what most people mean by backwards text in a username. Upside Down is for messages meant to be read by turning the phone around. None of them reverse word order only (\"back is Bob\"); they all flip the whole line character by character." },
      ],
    },
    {
      h2: "Mirrored and upside-down alphabet to copy",
      blocks: [
        { p: "Every cell is one character you can tap to copy. Gaps where a letter looks unchanged mean Unicode has no flipped version of it, so the plain letter is used." },
        { chart: { styles: ["u-mirrored", "u-upside-down"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Reverse splits your text into Unicode code points and reverses their order. Mirrored and Upside Down then swap each letter for a look-alike from IPA Extensions, Latin Extended, Cyrillic, Canadian Syllabics and Letterlike Symbols (for example ɘ, ᙠ, ⅃, ∀).",
  related: {
    heading: "More text effects",
    hrefs: ["/font-generator/mocking-text", "/font-generator/distorted-text", "/font-generator/font-converter", "/different-fonts/b", "/symbols"],
  },
  faq: [
    { q: "What is the Unicode for a backwards B?", a: "There is no official reversed Latin B. The common stand-in, used here, is ᙠ, code point U+1660 from the Canadian Syllabics block." },
    { q: "How do I copy and paste the letter B backwards?", a: "Tap ᙠ in the table or chart on this page, or type a word in the box and copy the Mirrored style." },
    { q: "Is the backwards B the same as the Cyrillic Б?", a: "No. Б (Be) is a Cyrillic letter with a flat top stroke instead of an upper bowl, so it does not look like a mirrored B. ᙠ is the closer look-alike." },
    { q: "Why do some letters not flip?", a: "Only some Latin letters have a mirrored or turned twin in Unicode. Symmetrical letters such as A, H, O and X look the same either way, so they are left alone." },
    { q: "Can I reverse the order of words but keep each word readable?", a: "Not with this tool. Every style here flips character by character, so the letters inside each word are reversed too." },
    { q: "Does reversed text read backwards for screen readers?", a: "Yes. A screen reader reads the characters in the order they are stored, so reversed or mirrored text is read out as gibberish. Keep important information in normal text." },
    { q: "How do I turn reversed text back to normal?", a: "Paste it into the box and copy the Reverse style again. Reversing twice restores the original order, though look-alike letters from Mirrored stay as look-alikes." },
  ],
};

export default page;
