import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL. Bing queries: "calligraphy generator
// copy and paste (free)", "calligraphy font generator free copy paste",
// "copy paste calligraphy generator", "how do i convert text to calligraphy?".
// Angle: the three classic pen traditions and what calligraphy is.
const page: PageContent = {
  slug: "font-generator/calligraphy",
  file: "font-generator-calligraphy",
  title: "Calligraphy Generator Copy and Paste – 11 Free Styles",
  description:
    "Calligraphy generator, copy and paste: 11 pen styles from copperplate script to italic and blackletter. Type, tap Copy, paste the text. Free.",
  h1: "Calligraphy Generator Copy and Paste",
  crumb: "Calligraphy Generator",
  intro:
    "A calligraphy generator with copy and paste turns typed words into characters that imitate a broad or pointed pen, and this one offers 11 styles drawn from the three classic hands: copperplate script, Renaissance italic and Gothic blackletter. Use it as a calligraphy font generator when you need the look in a place that has no font menu; as a copy paste calligraphy generator it gives you plain text, so the letters stay styled wherever you paste them. Scroll past the tool for a short guide to what calligraphy is and how the hands differ.",
  tool: {
    styles: [
      "script", "bold-script", "script-spaced", "u-cursive-bold-spaced", "italic-serif", "bold-italic-serif",
      "fraktur", "bold-fraktur", "oe-cursive", "long-s", "deco-fleuron",
    ],
    sample: "Beautiful writing",
    placeholder: "Type a word, quote or name…",
    presets: ["Beautiful writing", "Ex libris", "Save the date", "Grace"],
  },
  stylesHeading: "Calligraphy Styles",
  howTo: {
    heading: "How to convert text to calligraphy",
    steps: [
      ["Type", "Enter a word, quote or heading. Short text shows off calligraphy best."],
      ["Choose a hand", "Script rows imitate a pointed pen, italic rows a chisel nib held at an angle, and Fraktur rows a broad pen written upright."],
      ["Copy and paste", "Tap Copy and paste the line where you want it. Long passages are easier to read in the italic rows than in Fraktur."],
    ],
  },
  sections: [
    {
      h2: "What calligraphy is",
      blocks: [
        { p: "The word comes from Greek kallos (beauty) and graphein (to write): calligraphy is handwriting made deliberately beautiful, usually with a dip pen, a broad nib or a brush. The thick and thin strokes come from the tool, not from extra effort, which is why each tradition has a recognizable shape. Unicode cannot store stroke weight, but it does include whole alphabets of script, italic and Fraktur letters, and those are what the generator uses." },
        {
          table: {
            head: ["Hand", "Pen and look", "Rows in the tool"],
            rows: [
              ["Copperplate / roundhand", "Flexible pointed nib, steep slant, loops and hairlines", "Tattoo Script, Bold Tattoo Script, Fine Line Spaced Script, Cursive Bold Spaced"],
              ["Italic (chancery)", "Chisel nib at an angle, narrow and slanted", "Renaissance Italic, Bold Renaissance Italic"],
              ["Blackletter (Gothic)", "Broad nib held upright, dense angular strokes", "Fraktur, Bold Fraktur, Long S Manuscript, Manuscript Fleuron"],
              ["Mixed", "Gothic capital, script lowercase", "Old English Cursive"],
            ],
          },
        },
      ],
    },
    {
      h2: "1. How do I convert text to calligraphy?",
      blocks: [
        { p: "Type into the box and the conversion is instant: each letter is swapped for its script, italic or Fraktur twin, one character at a time. Spaces, digits and punctuation pass through unchanged in most rows. Because nothing is drawn, you cannot add swashes or join letters the way a pen would; for that, a real calligraphy font in a design program or a hand-lettered piece is the right tool. The [modern calligraphy generator](/font-generator/modern-calligraphy) leans toward bouncy brush lettering, and [calligraphy capital letters](/font-generator/calligraphy-capital-letters) is the place to copy single initials." },
        { p: "Every script and Fraktur letter is in the chart below if you would rather copy characters one at a time." },
        { chart: { styles: ["script", "bold-script", "fraktur"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Script rows use Mathematical Script and Bold Script (U+1D49C–U+1D503), italic rows use Mathematical Italic and Bold Italic (U+1D434–U+1D49B), and blackletter rows use Mathematical Fraktur and Bold Fraktur (U+1D504–U+1D59F) with ℭ ℌ ℑ ℜ ℨ from Letterlike Symbols. Long S Manuscript swaps s for the historical long s ſ (U+017F), and the fleurons are ☙ U+2619 and ❧ U+2767.",
  related: {
    heading: "More pen and script tools",
    hrefs: ["/font-generator/modern-calligraphy", "/font-generator/calligraphy-capital-letters", "/font-generator/italianate", "/font-generator/blackletter", "/font-generator/handwriting", "/illuminated-letters"],
  },
  faq: [
    { q: "Is there a free calligraphy font generator online?", a: "This one is free and needs no sign-up or download. It produces copyable text in 11 calligraphy styles." },
    { q: "How do I copy and paste calligraphy?", a: "Type your text, tap Copy next to a style and paste it wherever you like. The result is ordinary Unicode text." },
    { q: "Is this real calligraphy?", a: "No. Real calligraphy is drawn with a pen or brush. These are Unicode letters shaped like calligraphic hands, which is what lets them be copied as text." },
    { q: "Which calligraphy style is easiest to read?", a: "Renaissance Italic. Fraktur is the hardest for modern readers, so keep it for a word or two." },
    { q: "What is the old letter that looks like an f in Long S Manuscript?", a: "That is the long s, ſ, which scribes and printers used for s at the start or middle of a word until around the early 1800s in English." },
    { q: "Can I use this for wedding invitations?", a: "For a digital preview or a message, yes. For printing, install a real calligraphy font or work with a calligrapher, since Unicode text depends on whatever font the printer uses." },
    { q: "Why do some calligraphy letters show as boxes?", a: "The reader's device lacks a font with those characters. A different row, such as the italic ones, uses another block and may show correctly." },
  ],
};

export default page;
