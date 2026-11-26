import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing: "fancy writing" (~11 impr),
// "fancy handwriting generator", "how to write fancy handwriting", "fancy
// writing for cards"; Copilot: "fancy writing alphabet" 96, "fancy writing" 68,
// "nice writing" 34. Angle: whole sentences (bios, quotes, card messages),
// not single letters (that is /font-generator/fancy-letters).
const page: PageContent = {
  slug: "font-generator/fancy-writing",
  file: "font-generator-fancy-writing",
  title: "Fancy Writing – 10 Styles for Sentences, Copy and Paste",
  description:
    "Fancy writing for whole sentences: 10 script, italic and Gothic styles for bios, quotes and card messages. Paste a line, tap Copy, done. Free.",
  h1: "Fancy Writing",
  crumb: "Fancy Writing",
  intro:
    "Fancy writing is ordinary text dressed up in decorative letters, such as script, bold italic or Gothic, and this page converts whole sentences into 10 such styles that you can copy at once. Paste a quote, a bio line or the message for a card; the fancy writing alphabet is applied letter by letter while your punctuation and spacing stay put. It also stands in for a fancy handwriting generator when you want a line to look written rather than typed. Because long text is harder to read when decorated, each style below is described by how well it holds up across a full sentence.",
  tool: {
    styles: [
      "script", "bold-script", "gangster-initials", "bold-italic-serif", "u-cursive-underline",
      "u-small-caps", "fraktur", "fraktur-small-caps", "deco-hedera", "frame-chevron",
    ],
    sample: "Be kind, it costs nothing.",
    placeholder: "Paste a sentence, quote or bio line…",
    presets: ["Be kind, it costs nothing.", "Happy anniversary, my love", "Coffee first, then the world", "With warmest wishes"],
  },
  stylesHeading: "Fancy Writing Styles",
  howTo: {
    heading: "How to turn a sentence into fancy writing",
    steps: [
      ["Paste the whole line", "Sentences, commas and question marks are fine. Line breaks are kept too."],
      ["Check the long-text readability", "Read the converted line once at normal speed. If you stumble, pick a lighter style."],
      ["Copy and paste", "Tap Copy and paste the line into your bio, post or message."],
    ],
  },
  sections: [
    {
      h2: "1. How do I put a whole sentence in fancy writing?",
      blocks: [
        { p: "Paste it into the box. The tool swaps each letter and leaves everything else alone, so \"Coffee first, then the world\" comes back with the comma in place. Some rows also change capitalization: Old English Initial + Script capitalizes the first letter of every word, which suits a title or a motto but not a chatty sentence. Small Caps turns everything into small capitals." },
        {
          table: {
            head: ["Style", "Across a full sentence", "Good for"],
            rows: [
              ["Tattoo Script", "Easy to read, elegant", "Quotes, card messages, bios"],
              ["Bold Tattoo Script", "Easy to read, heavier", "One-line bios, captions"],
              ["Bold Renaissance Italic", "Easiest of all", "Longer quotes and sayings"],
              ["Cursive Underlined", "Readable, busy if long", "A single standout line"],
              ["Small Caps", "Readable, calm", "A subtitle or a sign-off"],
              ["Old English Initial + Script", "Readable, every word capitalized", "Mottos and titles"],
              ["Fraktur, Fraktur + Small Caps", "Slow to read", "Two to five words at most"],
              ["Hedera Leaf ❦, Guillemet Frame", "Fraktur with a frame", "A short quotation set off on its own"],
            ],
          },
        },
      ],
    },
    {
      h2: "2. Fancy writing for cards and quotes",
      blocks: [
        {
          ul: [
            "Card messages: put the greeting in script (\"Happy anniversary, my love\") and keep the rest of the message plain, so the fancy line stands out.",
            "Quotes: Guillemet Frame wraps the line in « », the quotation marks used in French and many other languages, which makes a short saying look set apart.",
            "Bios: one fancy line plus plain details reads better than a whole bio in decoration.",
            "Names inside sentences: if one name has an accent, check it; the accent is added as a separate mark and may sit slightly off.",
          ],
        },
        { p: "For one decorated letter at a time instead of sentences, see [fancy letters](/font-generator/fancy-letters); for script names and sign-offs, the [signature font](/font-generator/signature) page." },
      ],
    },
    {
      h2: "3. The fancy writing alphabet, and writing it by hand",
      blocks: [
        { p: "If you want to learn fancy handwriting on paper, copying a model alphabet is the usual start: write each capital and lowercase letter slowly, keep the same slant throughout, and make the downstrokes heavier than the upstrokes. The chart below is a handy model, and each letter also copies on its own." },
        { chart: { styles: ["bold-script", "bold-italic-serif", "u-small-caps"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Script rows use Mathematical Script and Bold Script (U+1D49C–U+1D503), the italic row Mathematical Bold Italic (U+1D468–U+1D49B), and the Gothic rows Mathematical Fraktur and Bold Fraktur. Small Caps borrows letters such as ᴀ, ʙ and ᴄ from the IPA and Phonetic Extensions blocks; the frames are ❦ (U+2766) and the guillemets « » (U+00AB, U+00BB).",
  related: {
    heading: "More decorative text",
    hrefs: ["/font-generator/fancy-letters", "/font-generator/handwriting", "/font-generator/calligraphy", "/font-generator/thank-you", "/different-fonts"],
  },
  faq: [
    { q: "What is fancy writing?", a: "Text written or typed in a decorative style, such as script, italic or Gothic letters, instead of plain print." },
    { q: "How do I copy and paste fancy writing?", a: "Paste your sentence into the box, tap Copy next to a style and paste it where you want it." },
    { q: "Which fancy writing is easiest to read?", a: "Bold Renaissance Italic and Tattoo Script. Gothic Fraktur is the hardest for long sentences." },
    { q: "Can I get the fancy writing alphabet A–Z?", a: "Yes. The chart on this page lists every capital and lowercase letter in three styles; tap a letter to copy it." },
    { q: "How do I write fancy handwriting myself?", a: "Practice a model alphabet slowly, keep one slant, and press harder on downstrokes than upstrokes. Speed comes later." },
    { q: "Is there a fancy handwriting generator that is free?", a: "This page is free with no sign-up. The script rows give the most handwritten look." },
    { q: "Why did my numbers not change?", a: "Script and italic have no digit versions in Unicode, so numbers stay plain. Fraktur rows swap them for bold digits." },
    { q: "Does fancy writing keep emoji and punctuation?", a: "Yes. Only letters are converted; emoji, punctuation and spaces pass through unchanged." },
  ],
};

export default page;
