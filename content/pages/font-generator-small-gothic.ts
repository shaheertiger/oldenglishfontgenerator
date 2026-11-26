import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// Angle: small and tiny gothic text (small caps, superscript, Fraktur with
// small-cap lowercase), not full-size blackletter.
const page: PageContent = {
  slug: "font-generator/small-gothic",
  file: "font-generator-small-gothic",
  title: "Small Gothic Font Generator: 10 Tiny Text Styles, Free",
  description:
    "Small gothic font generator: 10 tiny and small-caps styles, from ᴛɪɴʏ ᴄᴀᴘs to ˢᵘᵖᵉʳˢᶜʳⁱᵖᵗ and Fraktur with small letters. Type, tap Copy, paste.",
  h1: "Small Gothic Font Generator",
  crumb: "Small Gothic",
  intro:
    "A small gothic font generator shrinks your text into compact, understated lettering, and this one has 10 styles: small capitals, raised superscript letters, and Fraktur capitals followed by gothic small letters. People who search for gothic small letters usually want a quiet line under a name or a subtle tag, not a heavy blackletter banner, so every style here keeps the size down. It is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device.",
  tool: {
    styles: [
      "u-small-caps", "u-superscript", "u-tiny-spaced", "u-small-caps-spaced", "u-small-caps-underline",
      "fraktur-small-caps", "bold-fraktur-small-caps", "fraktur-lower", "u-monospace", "deco-stars",
    ],
    sample: "small gothic text",
    placeholder: "Type a short line to shrink…",
    presets: ["small gothic text", "est. 2026", "quiet hours", "Night Owl", "the end"],
  },
  stylesHeading: "Small and tiny gothic styles",
  howTo: {
    heading: "How to make small gothic text",
    steps: [
      ["Keep it short", "Tiny letters are hard to read in long runs. Use them for a tag, a date, a subtitle or a sign-off."],
      ["Choose how small", "Small caps sit on the normal line at lowercase height; superscript letters float higher and smaller still."],
      ["Copy and pair", "Put the small line next to normal-size text. The contrast is what makes it look deliberate."],
    ],
  },
  sections: [
    {
      h2: "1. How do I copy and paste small gothic letters?",
      blocks: [
        { p: "Type in the box and press Copy, or take single letters from the chart below. The chart shows the two smallest sets: small capitals first, then superscript letters and digits." },
        { chart: { styles: ["u-small-caps", "u-superscript"], sets: ["lower", "digits"] } },
        { p: "Unicode has no complete tiny alphabet, so a few letters have to borrow. Small caps have no X, so x stays a normal x, and q becomes ǫ, a letter with a small hook. There is no superscript q at all; the generator uses ۹, a digit from Persian and Urdu numerals that happens to look similar. Small-cap digits do not exist either, so ordinary 0–9 remain." },
      ],
    },
    {
      h2: "2. Small caps, superscript or Fraktur small caps?",
      blocks: [
        {
          table: {
            head: ["Style", "Example", "Best for"],
            glyphCols: [1],
            rows: [
              ["Small Caps", "ɢᴏᴛʜɪᴄ", "A tidy subtitle or label under a name"],
              ["Tiny (superscript)", "ᵍᵒᵗʰⁱᶜ", "A whisper-small tag or sign-off"],
              ["Fraktur + Small Caps", "𝔊ᴏᴛʜɪᴄ", "Keeps one gothic capital with a compact body"],
              ["Fraktur All Lowercase", "𝔤𝔬𝔱𝔥𝔦𝔠", "Gothic look without the large ornate capitals"],
            ],
          },
        },
        { p: "If you want full-size blackletter instead, the [gothic letters](/font-generator/gothic-letters) page has the heavy styles. For tiny letters in a non-gothic look, [fancy letters](/font-generator/fancy-letters) has more options." },
      ],
    },
  ],
  built:
    "Small capitals come from IPA Extensions (such as ʀ ɢ ʜ) and Phonetic Extensions (U+1D00 onward), with ꜱ and ꜰ from Latin Extended-D. Superscript letters are modifier letters scattered across Spacing Modifier Letters, Phonetic Extensions and Superscripts and Subscripts (U+2070–U+209F), which is why their heights vary slightly.",
  related: {
    heading: "More gothic and tiny text",
    hrefs: ["/font-generator/gothic-letters", "/font-generator/fancy-letters", "/font-generator/old-english-letters", "/font-generator/fraktur", "/symbols", "/"],
  },
  faq: [
    { q: "What is small gothic font?", a: "Compact text that keeps a gothic flavor: small capitals, tiny raised letters, or Fraktur capitals followed by small letters. It is meant to be subtle." },
    { q: "Why are some tiny letters taller or lower than others?", a: "Superscript letters were added to Unicode at different times for phonetics, so they come from several blocks and fonts size them a little differently." },
    { q: "Why does x not change in small caps?", a: "Unicode has no small-capital X, so the generator leaves an ordinary x, which is already about the right height." },
    { q: "Is there a tiny version of every letter?", a: "Almost. Superscript q does not exist, so a similar-looking character is used instead." },
    { q: "Can I make gothic text smaller than this?", a: "Not as text. Superscript is the smallest common set; anything smaller would need an image." },
    { q: "Do small caps count as capital letters?", a: "No. They are separate lowercase-height characters that look like capitals, so search and spell-check may not recognize the word." },
  ],
};

export default page;
