import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing (and was cited by
// Copilot for "signature font copy and paste") before the rebuild removed it.
// Angle: your own name laid out as a signature, plus email sign-off guidance.
const page: PageContent = {
  slug: "font-generator/signature",
  file: "font-generator-signature",
  title: "Signature Font Copy and Paste – 12 Name Styles, Free",
  description:
    "Signature font copy and paste: 12 script and initials styles for your name. Type it once, tap Copy, paste into an email sign-off or profile. Free.",
  h1: "Signature Font Copy and Paste",
  crumb: "Signature Font",
  intro:
    "A signature font copy and paste tool turns your typed name into flowing script letters you can paste as text; this one gives you 12 name layouts, from a full cursive name to initials and an underlined sign-off. Think of it as a signature font generator for places that never let you pick a font: type your name once and every layout updates. If you need a copy and paste signature font, start with the plain script, then try the bold and underlined versions to see which one still looks like you at a small size.",
  tool: {
    styles: [
      "script", "bold-script", "u-cursive-underline", "u-cursive-bold-spaced", "oe-cursive", "bold-cursive",
      "italic-serif", "roman-initial-italic", "u-sans-italic", "monogram", "monogram-ampersand", "u-small-caps",
    ],
    sample: "Olivia Bennett",
    placeholder: "Type your full name…",
    presets: ["Olivia Bennett", "J. R. Alvarez", "Best regards, Sam", "M & K"],
  },
  stylesHeading: "Signature Name Styles",
  howTo: {
    heading: "How to make a copy-and-paste signature",
    steps: [
      ["Type your name", "Use the name as you would sign it: first and last, first initial and surname, or just a first name for informal notes."],
      ["Compare at a glance", "Scan the list for a layout that stays readable. Underlined and bold versions hold up better when they appear small."],
      ["Copy and paste", "Tap Copy and paste the line wherever your sign-off goes. Keep a plain-text version of your name nearby for fields that need it."],
    ],
  },
  sections: [
    {
      h2: "Three signature layouts to try",
      blocks: [
        {
          cards: [
            { h: "Full name in script", p: "Type first and last name and copy Tattoo Script or its bold version. This is the closest to a handwritten autograph and suits a closing line on a personal note or a blog post." },
            { h: "Initials only", p: "Keep your full name in the box and copy Monogram Initials: it picks the first letter of each word and sets them as gothic capitals. Type two first names joined by \"&\" and Couple Monogram gives a shared mark. Initials fit a corner stamp on digital artwork or a short sign-off." },
            { h: "Name with a flourish", p: "Copy Cursive Underlined for a name with a line under it, the typed version of the swash many people draw under a signature. Old English Cursive gives the first letter of each name an old-fashioned capital." },
          ],
        },
      ],
    },
    {
      h2: "1. How do I write my signature like the old cursive style?",
      blocks: [
        { p: "The older looping signatures you see on letters and documents were written in a copperplate-style hand with tall, sloping capitals. The two script rows at the top of the list use Unicode's script capitals, which copy that tall entry stroke, so the first letter of your name carries most of the effect. For a signature with an even older flavor, Old English Cursive pairs a gothic capital with script lowercase; the [old cursive](/font-generator/old-cursive) page has more of those hands." },
        { p: "Every letter you need is in the chart below, so you can also build a signature one character at a time, for example a script capital followed by a plain surname." },
        { chart: { styles: ["script", "bold-script"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "2. Using a script name in an email signature",
      blocks: [
        {
          ul: [
            "Keep your name in plain text on the line below the script version. Search, screen readers and copy-paste into a contact card all rely on ordinary letters.",
            "Use script for the name only, not for your phone number or job title. Long lines of script are slow to read.",
            "Paste it into your email program's signature settings, then send a test message to yourself and to a second address. Whether a character shows depends on the fonts on the reader's device, so check before you rely on it.",
            "If a letter turns into a box in the test, switch to a different layout, such as Renaissance Italic, which uses a different block of characters.",
          ],
        },
        { p: "A script name is styled text, not a signature in the legal sense. It does not identify you or approve a document. To sign a contract, lease or form, use a proper e-signature process or sign on paper." },
      ],
    },
  ],
  built:
    "Script layouts use Mathematical Script (U+1D49C–U+1D4CF) and Bold Script (U+1D4D0–U+1D503), with Letterlike Symbols such as ℬ, ℰ, ℋ, ℳ and ℯ filling the gaps in the plain script set. Underlines are the combining low line U+0332 added after each character, and the monograms take Bold Fraktur capitals from U+1D56C–U+1D59F.",
  related: {
    heading: "More name and script tools",
    hrefs: ["/font-generator/handwriting", "/font-generator/old-cursive", "/font-generator/calligraphy", "/old-english-name-generator", "/font-generator/italic"],
  },
  faq: [
    { q: "How do I copy and paste a signature font?", a: "Type your name in the box, tap Copy next to the layout you want and paste it. Nothing is installed because the result is a string of Unicode characters." },
    { q: "Is a copy-and-paste signature a legal e-signature?", a: "No. It is decorative text. For contracts or official forms, use an e-signature service or a handwritten signature." },
    { q: "What are good fonts to copy and paste for signatures?", a: "Tattoo Script reads closest to handwriting, Bold Tattoo Script holds up at small sizes, and Cursive Underlined adds the line many people draw under their name." },
    { q: "Can I make a signature from just my initials?", a: "Yes. Monogram Initials reduces whatever you type to the first letter of each word, and Couple Monogram joins them with an ampersand." },
    { q: "Why does one letter in my signature look different?", a: "A few script capitals, such as ℬ, ℰ and ℳ, come from an older Unicode block, so the reader's device may draw them with a different font than the rest." },
    { q: "Can I put a script name in my email signature?", a: "You can paste it into your signature settings as text. Keep a plain version of your name beside it and send yourself a test message to check how it looks." },
    { q: "Is there a signature font generator that is free?", a: "This one is free and needs no account. You can copy as many name layouts as you like." },
  ],
};

export default page;
