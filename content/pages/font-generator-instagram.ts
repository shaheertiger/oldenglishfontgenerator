import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it. General bio/caption styles; the blackletter IG page is
// /font-generator/old-english-ig. No claims about the app's fields or limits.
const page: PageContent = {
  slug: "font-generator/instagram",
  file: "font-generator-instagram",
  title: "Instagram Fonts – 16 Bio and Caption Text Styles to Copy",
  description:
    "Instagram fonts: 16 bio and caption text styles – bold sans, italic, script, small caps, bubble, squared, tiny. Type, tap Copy, paste. Free.",
  h1: "Instagram Fonts",
  crumb: "Instagram Fonts",
  intro:
    "Instagram fonts are styled Unicode letters that people paste into a bio or caption so one line stands out, and this page converts your text into 16 of these bio and caption text styles. Most searches for IG fonts or Instagram bio fonts are after something clean rather than gothic: a bold name, an italic tagline, small caps for a job title, a script word, or bubble letters for something playful. Type once and every style updates; copy the one you want. For blackletter, see [Old English IG fonts](/font-generator/old-english-ig).",
  tool: {
    styles: [
      "u-sans-bold", "u-sans-italic", "u-sans-bold-italic", "u-bold-serif", "script", "bold-script",
      "u-small-caps", "u-superscript", "u-bubble", "u-squared", "u-monospace", "u-fullwidth",
      "u-love-parens", "u-sans-bold-spaced", "u-italic-spaced", "u-underline",
    ],
    sample: "Coffee & Sunsets",
    placeholder: "Type your name, tagline or caption…",
    presets: ["Coffee & Sunsets", "Maya Lopez", "photographer · NYC", "new post ↓", "link below", "est. 2019"],
  },
  stylesHeading: "Bio and caption text styles",
  howTo: {
    heading: "How to style a bio line",
    steps: [
      ["Write one line at a time", "Style your name, your tagline and your call to action separately, so each can get its own look."],
      ["Pick one style per line", "Bold for the name, small caps or italic for the description, plain text for anything people need to search or tap."],
      ["Copy and arrange", "Copy each styled line and paste them in order. Preview the result before you save it."],
    ],
  },
  sections: [
    {
      h2: "Bio fonts alphabet: bold sans, sans italic and bubble",
      blocks: [
        { p: "The three styles people reach for most in a profile, as a tap-to-copy chart. Sans Bold is the heaviest and cleanest; Sans Italic is a light slanted version for a tagline; Bubble puts each letter in a thin ring." },
        { chart: { styles: ["u-sans-bold", "u-sans-italic", "u-bubble"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. How do I make a bio stand out with text styles?",
      blocks: [
        { p: "Contrast does more than decoration. A bio where every line is in a fancy style is harder to read than one where a single line is styled and the rest is plain. A layout that tends to read well:" },
        { table: {
          head: ["Line", "Style", "Example"],
          glyphCols: [2],
          rows: [
            ["Name", "Sans Bold", "𝗠𝗮𝘆𝗮 𝗟𝗼𝗽𝗲𝘇"],
            ["What you do", "Small Caps", "ᴘʜᴏᴛᴏɢʀᴀᴘʜᴇʀ · ɴʏᴄ"],
            ["A personal touch", "Script", "𝒸𝑜𝒻𝒻ℯℯ & 𝓈𝓊𝓃𝓈ℯ𝓉𝓈"],
            ["Small print", "Tiny", "ᵉˢᵗ. ²⁰¹⁹"],
            ["Call to action", "Plain text", "new post ↓"],
          ],
        } },
      ],
    },
    {
      h2: "2. Which caption fonts are easiest to read?",
      blocks: [
        { p: "Bold and italic sans are the most readable because their shapes match ordinary letters. Script and Fullwidth are fine for a word or two. Bubble, Squared and Love Parenthesis are novelty styles: fun for a short line, tiring across a paragraph. Two more things to know before you style a whole caption:" },
        { ul: [
          "Screen readers often read these characters letter by letter or skip them, so keep anything important in plain text.",
          "Hashtags and @mentions are best left plain, since the styled letters are different characters from the ones people type to search.",
          "Squared letters only come as capitals, and there is no tiny q in Unicode, so a lookalike fills that gap.",
        ] },
      ],
    },
    {
      h2: "3. Why do some styled letters show as boxes?",
      blocks: [
        { p: "A box or a question mark means the reader's device has no font with that character. The bold, italic and script letters come from a Unicode block that most current systems cover; enclosed letters like 🄰 are newer and less widely covered. It is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device. If one style shows boxes for a friend, switch that line to Sans Bold." },
      ],
    },
  ],
  built:
    "Sans Bold, Sans Italic, Bold Serif, Script and Monospace come from Unicode's Mathematical Alphanumeric Symbols block; Bubble and Squared come from Enclosed Alphanumerics and its Supplement; Small Caps and Tiny borrow phonetic and superscript letters; Fullwidth uses Halfwidth and Fullwidth Forms.",
  related: {
    heading: "More profile text tools",
    hrefs: ["/font-generator/old-english-ig", "/font-generator/fancy-letters", "/font-generator/italic", "/font-generator/signature", "/coquette", "/symbols"],
  },
  faq: [
    { q: "How do I get different fonts for my Instagram bio?", a: "Type each line here, copy the style you like and paste it into your bio. The style is part of the characters, so nothing needs to be installed." },
    { q: "How do I make bold text for a caption?", a: "Copy the Sans Bold or Bold Serif style. The letters themselves are bold characters, not formatting." },
    { q: "Are Instagram fonts free?", a: "Yes. They are standard Unicode characters, and this page converts them in your browser." },
    { q: "What is the cleanest bio font?", a: "Sans Bold for a name and Small Caps for a short description. Both keep normal letter shapes." },
    { q: "Can people search my styled name?", a: "Styled letters are different characters from normal ones, so a search for the plain spelling may not match them. Keep a plain version somewhere if you want to be found." },
    { q: "Do these fonts work for captions as well as bios?", a: "The same styles apply anywhere you can type text. Keep long captions mostly plain so they stay easy to read." },
    { q: "How do I write in small caps?", a: "Type your text and copy the Small Caps style. Lowercase and capitals both become small capitals." },
    { q: "Where are the gothic Instagram fonts?", a: "On the [Old English IG fonts](/font-generator/old-english-ig) page, which has the blackletter and tattoo-style options." },
  ],
};

export default page;
