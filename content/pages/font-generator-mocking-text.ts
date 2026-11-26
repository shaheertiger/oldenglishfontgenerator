import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL (old keyword: "spongebob text
// generator"). No Bing queries recorded for it yet.
// NOTE for lib owner: "mocking" and "mocking-upper" are not registered yet.
// They need a plain-letter case-alternating transform (aLtErNaTiNg, letters
// only, spaces/punctuation don't advance the counter). Until they exist they
// are silently skipped and the other 8 styles show.
const page: PageContent = {
  slug: "font-generator/mocking-text",
  file: "font-generator-mocking-text",
  title: "Mocking Text Generator – Free SpongeBob aLtErNaTiNg Caps",
  description:
    "Mocking text generator: turn any line into sarcastic alternating caps (lIkE tHiS) plus 8 extra styles. Tap Copy, paste anywhere. Free, no sign-up.",
  h1: "Mocking Text Generator",
  crumb: "Mocking Text",
  intro:
    "Mocking text is a sentence written in alternating lower and upper case, like \"wElL aCtUaLlY\", used to repeat someone's words back in a sarcastic voice; this mocking text generator does the alternating for you. People also call it SpongeBob text or the mocking SpongeBob meme font, after the reaction image that made the pattern famous, and a few search for \"sarcastic text\" or \"alternating caps generator\". It is not a font at all: the result is ordinary letters with their case switched, so it copies as normal text. The extra styles below push the joke further with small caps, a bouncing up-and-down line and a letter-by-letter mix. This page is a fan tool and has no connection to the SpongeBob SquarePants show or its owners.",
  tool: {
    styles: [
      "mocking", "mocking-upper",
      "u-alternating", "u-bent", "u-leet", "u-weird",
      "u-small-caps", "u-superscript", "u-sans-bold-italic", "u-italic-underline", "u-mono-spaced",
    ],
    sample: "i'm not mad, you're mad",
    placeholder: "Paste the thing they said…",
    presets: ["i'm not mad, you're mad", "it's just a game", "you should read the rules", "that's not how this works"],
  },
  stylesHeading: "Mocking and Sarcastic Text Styles",
  howTo: {
    heading: "How to make mocking SpongeBob text",
    steps: [
      ["Paste the original line", "Copy the exact words you want to mock and paste them in. Quoting them word for word is what makes the joke land."],
      ["Choose how it starts", "One version starts with a small letter (mOcKiNg), the other with a capital (MoCkInG). Pick whichever reads funnier for that line."],
      ["Copy and send", "Tap Copy. Since only the case changes, the result is normal text and can be edited or retyped later."],
    ],
  },
  sections: [
    {
      h2: "1. How do you write in mocking SpongeBob text by hand?",
      blocks: [
        { p: "Switch case on every letter, ignoring spaces and punctuation: \"this is fine\" becomes \"tHiS iS fInE\". The strict rule is not required; plenty of people break the pattern on purpose (\"tHiS iS fiNe\") so it looks less mechanical. What matters is that no two neighboring letters keep the same rhythm for long." },
        { ul: [
          "Keep the original wording and punctuation. Mocking text works because it is a quote.",
          "Short lines read better. After two sentences the alternating becomes tiring to read.",
          "Leave names and numbers alone if they need to stay recognizable.",
        ] },
      ],
    },
    {
      h2: "2. Sarcastic tone without alternating caps",
      blocks: [
        { p: "If the joke needs something softer than full mocking case, the other styles carry a similar tone. Small caps (ᴛʜɪs ɪs ꜰɪɴᴇ style) sounds like a mutter. Tiny superscript reads like a whisper under your breath. Bent text bobs up and down like a sing-song voice. Leet speak swaps letters for numbers and reads as playful rather than mean." },
      ],
    },
    {
      h2: "Small caps, tiny and slanted letters to copy",
      blocks: [
        { p: "These three alphabets are the building blocks for the quieter sarcastic styles. Tap any cell to copy one character." },
        { chart: { styles: ["u-small-caps", "u-superscript", "u-sans-bold-italic"], sets: ["upper", "lower"] } },
      ],
    },
  ],
  built:
    "Mocking case uses only the basic Latin letters A–Z and a–z, switching between upper and lower case. The extra styles use small capital letters from IPA Extensions and Phonetic Extensions, Modifier Letters for the tiny text, and Mathematical Sans-Serif Bold Italic.",
  related: {
    heading: "More joke and meme text",
    hrefs: ["/font-generator/reverse", "/font-generator/ransom-note", "/font-generator/fun", "/font-generator/strikethrough", "/emoticons/shrug"],
  },
  faq: [
    { q: "What is mocking text called?", a: "It is usually called mocking SpongeBob text, sarcastic text or alternating caps. They all mean the same lower-upper-lower pattern." },
    { q: "How do I make SpongeBob text?", a: "Type or paste your line into the box and copy the mocking style. Every letter alternates between small and capital." },
    { q: "Should mocking text start with a lowercase letter?", a: "There is no rule. Starting lowercase (\"tHiS\") is more common, so both versions are offered." },
    { q: "Is mocking text a font?", a: "No. It is plain letters with their case changed, which is why it can be copied, searched and edited like any other text." },
    { q: "Do spaces and punctuation count in the pattern?", a: "No. Only letters switch case, so a space or comma never breaks the rhythm." },
    { q: "Is this affiliated with SpongeBob SquarePants?", a: "No. The name comes from a meme. This page is not connected to the show, its studio or its network." },
    { q: "Can I use mocking text in a work chat?", a: "You can, but it reads as openly sarcastic. Most people keep it for friends who know the meme." },
  ],
};

export default page;
