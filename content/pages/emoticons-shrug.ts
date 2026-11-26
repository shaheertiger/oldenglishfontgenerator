import type { PageContent } from "./types";

// Restored Nov 2026 at /emoticons/shrug, which Bing and Copilot cited before
// the Nov 1 removal. The tool styles the caption; the shrugs are in the table.
const page: PageContent = {
  slug: "emoticons/shrug",
  file: "emoticons-shrug",
  title: "Shrug Emoticon ¯\\_(ツ)_/¯ – 22 Versions to Copy and Paste",
  description:
    "Shrug emoticon ¯\\_(ツ)_/¯ plus 21 other shrug kaomoji to copy. Tap one to copy, add a styled caption, and learn the backslash fix. Free.",
  h1: "Shrug Emoticon",
  crumb: "Shrug Emoticon",
  intro:
    "The shrug emoticon is ¯\\_(ツ)_/¯, a text face with raised arms that says \"who knows\" or \"oh well\"; tap it or any of the 21 variations in the table below to copy it. People also search for it as the shrug kaomoji or the shrug face text symbol, and they all mean the same thing: a shrug typed with ordinary characters instead of an emoji picture. The box underneath turns a short caption such as \"no idea\" or \"idk\" into small caps, tiny letters and other styles, so you can paste the caption next to the shrug.",
  tool: {
    styles: ["shrug-after", "shrug-before", "shrug-script", "u-small-caps", "u-superscript", "u-sans-italic", "u-strikethrough", "u-upside-down", "u-fullwidth", "u-japanese-style", "u-mirrored", "u-monospace", "u-bubble"],
    sample: "no idea",
    placeholder: "Type a caption to go with your shrug…",
    presets: ["no idea", "idk", "oh well", "it is what it is"],
  },
  stylesHeading: "Caption Styles to Pair With a Shrug",
  howTo: {
    heading: "How to copy the shrug emoticon",
    steps: [
      ["Tap a shrug", "Tap the version you like in the table to copy it. The classic ¯\\_(ツ)_/¯ is the first row."],
      ["Style a caption (optional)", "Type a few words in the box above and copy one of the styled versions."],
      ["Paste both", "Paste the shrug, then the caption. If the arm disappears where you paste it, use the backslash fix below."],
    ],
  },
  sections: [
    {
      h2: "Shrug emoticons to copy and paste",
      blocks: [
        { p: "Each shrug below is copyable on its own. The right column says which characters make the face and arms, which helps if one of them shows as a box on your screen." },
        {
          table: {
            head: ["Shrug", "What it is made of"],
            glyphCols: [0],
            rows: [
              ["¯\\_(ツ)_/¯", "The classic: macrons for hands, backslash and slash for arms, katakana tsu ツ for the face"],
              ["¯\\_(シ)_/¯", "Same shrug with katakana shi シ, a near twin of ツ"],
              ["¯\\(°_o)/¯", "Short arms and mismatched degree-sign and o eyes, a confused shrug"],
              ["¯\\_( ͡° ͜ʖ ͡°)_/¯", "Shrug with the Lenny face, built from combining breves and ʖ"],
              ["¯\\_(⊙_ʖ⊙)_/¯", "Wide circled-dot eyes"],
              ["¯\\_(´・ω・)_/¯", "Soft face with an omega ω mouth"],
              ["┐(ツ)┌", "Box-drawing corners as bent arms"],
              ["┐(´∀｀)┌", "Grinning \"for all\" ∀ mouth"],
              ["┐(´～｀)┌", "Wavy fullwidth tilde mouth, a bored shrug"],
              ["┐(´д｀)┌", "Cyrillic д as an open, exasperated mouth"],
              ["┐(￣ヘ￣)┌", "Flat fullwidth macron eyes and katakana he ヘ for a frown"],
              ["┐(￣ー￣)┌", "Flat eyes and a straight katakana long-sound mark mouth"],
              ["╮(╯_╰)╭", "Rounded box-drawing arcs for arms and droopy eyes"],
              ["╮(╯▽╰)╭", "Droopy eyes with an open triangle mouth"],
              ["╮(´∀｀)╭", "The grinning face with rounded arms"],
              ["╮(￣～￣)╭", "Flat eyes and a wavy mouth with rounded arms"],
              ["╮( ˘ ⌣ ˘ )╭", "Calm closed eyes made of breves and a smile ⌣"],
              ["╮(. ❛ ᴗ ❛.)╭", "Quotation-ornament eyes and a small ᴗ smile"],
              ["乁(ツ)ㄏ", "A CJK character and Bopomofo ㄏ as raised arms"],
              ["乁( ◔ ౪◔)ㄏ", "Rolling eyes and a Telugu digit four ౪ as the mouth"],
              ["乁༼☯‿☯✿༽ㄏ", "Tibetan brackets, yin-yang eyes and a flower"],
              ["ヘ(´－｀;)ヘ", "Katakana he ヘ as limp arms, with a sweat drop"],
            ],
          },
        },
      ],
    },
    {
      h2: "1. Why does the shrug emoticon lose its arm when I paste it?",
      blocks: [
        { p: "Many chat apps, forums and note tools format text with Markdown. In Markdown a backslash escapes the character after it, and underscores mark italics, so ¯\\_(ツ)_/¯ gets read as formatting: the backslash vanishes, and the two underscores may italicize the face instead of drawing the arms. You end up with ¯_(ツ)_/¯ or a slanted face with no left arm." },
        { p: "The fix is to escape the special characters yourself. Type ¯\\\\\\_(ツ)\\_/¯ and the formatter turns it back into the full shrug: the first two backslashes become one visible backslash, and the other two stop the underscores from starting italics. Copy it from here if typing it is fiddly:" },
        {
          table: {
            head: ["Type this in a Markdown box", "To get"],
            glyphCols: [0, 1],
            rows: [["¯\\\\\\_(ツ)\\_/¯", "¯\\_(ツ)_/¯"]],
          },
        },
        { p: "In a place with no formatting at all, such as a plain text file, the escaped version shows its extra backslashes, so use the plain shrug there." },
      ],
    },
    {
      h2: "2. Is there a shrug emoji instead of the text shrug?",
      blocks: [
        { p: "Yes: 🤷 (person shrugging, U+1F937), with 🤷‍♀️ and 🤷‍♂️ variants. The emoji is a picture whose look changes with each device's emoji set, while the text shrug is a row of ordinary characters, so it looks much the same wherever the fonts include katakana. Use the emoji where people expect a quick reaction and the text version when you want its drier, deadpan tone. If you like building faces out of letters, the [symbols](/symbols) page collects more characters to work with." },
      ],
    },
  ],
  built:
    "The classic shrug is nine characters: ¯ (U+00AF macron), \\ (U+005C), _ (U+005F), (, ツ (U+30C4 katakana tsu), ), _, / and ¯. Variants mix in box-drawing characters (U+2500 block), CJK and Bopomofo letters, and fullwidth forms; the caption styles map Latin letters to Unicode small caps, superscripts and other alphabets.",
  related: {
    heading: "More symbols and text tools",
    hrefs: ["/symbols", "/font-generator/fun", "/font-generator/reverse", "/font-generator/mocking-text", "/different-fonts"],
  },
  faq: [
    { q: "How do you type the shrug emoticon?", a: "Copy ¯\\_(ツ)_/¯ from the table. To type it from scratch you need a macron, a backslash, an underscore, parentheses and the katakana ツ, which most keyboards cannot type directly." },
    { q: "What does ¯\\_(ツ)_/¯ mean?", a: "A shrug: I don't know, I don't care, or that's just how it is. The tone depends on the message around it." },
    { q: "What is the face in the shrug emoticon?", a: "The Japanese katakana letter tsu, ツ. Its two dots and curve happen to look like a smiling face." },
    { q: "Why does my shrug show as ¯_(ツ)_/¯?", a: "Markdown formatting removed the backslash. Type ¯\\\\\\_(ツ)\\_/¯ instead, as explained above." },
    { q: "Is the shrug emoticon a kaomoji?", a: "Yes, in the broad sense. Kaomoji are Japanese-style text faces read upright rather than sideways, and the shrug uses a katakana character for its face." },
    { q: "Can I put text next to the shrug?", a: "Yes. Type a caption in the box above, copy a styled version and paste it after the shrug. It is plain Unicode text, so you can paste it anywhere you can type; whether every character shows depends on the fonts on the reader's device." },
    { q: "What is the shrug with the Lenny face?", a: "¯\\_( ͡° ͜ʖ ͡°)_/¯, the shrug arms around the Lenny face ( ͡° ͜ʖ ͡°). It is the fourth row of the table." },
  ],
};

export default page;
