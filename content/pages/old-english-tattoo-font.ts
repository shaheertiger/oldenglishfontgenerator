import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-tattoo-font",
  title: "Old English Tattoo Font — Preview & Copy Lettering",
  description:
    "Old English tattoo font preview: try names, dates and quotes in blackletter, see them on a skin mockup and save a PNG for your artist. Free.",
  h1: "Old English Tattoo Font",
  crumb: "Old English Tattoo Font",
  intro:
    "Testing an Old English tattoo font before you book saves a lot of second-guessing in the chair. Type the name, date or phrase you have in mind, compare heavy and light blackletter side by side, then put your favourite on a skin-tone mockup and download it to show your artist.",
  tool: {
    styles: [
      "bold-fraktur", "tattoo", "fraktur", "bold-cursive", "roman-date", "chicano", "vertical",
      "illuminated", "bold-fraktur-caps", "wide-bold", "frame-banner", "deco-cross", "deco-rose",
      "oe-cursive", "drop-cap", "fraktur-caps", "deco-crown", "deco-swords", "monogram-framed",
    ],
    sample: "Familia",
    placeholder: "Name, date or short quote…",
    presets: ["Familia", "Est. 2008", "Mom 1962", "Only God Can Judge Me", "Loyalty", "14.02.2019"],
  },
  stylesHeading: "Tattoo lettering styles",
  howTo: {
    heading: "How to plan your Old English tattoo lettering",
    steps: [
      ["Write it out exactly", "Type the wording with the spelling, capitals and punctuation you want inked. Mistakes are easier to catch on a screen than on skin."],
      ["Shortlist two styles", "Copy one heavy option (Bold Fraktur) and one lighter option (Fraktur). Artists find it easier to work from a clear choice."],
      ["Save the mockup", "Use the skin preview below, pick your tone and download the PNG. Bring it to the consultation alongside any reference photos."],
    ],
  },
  sections: [
    {
      h2: "Tattoo preview on a skin mockup",
      blocks: [
        { p: "The preview below draws your words with UnifrakturCook or UnifrakturMaguntia, two free blackletter typefaces, so the letter shapes are consistent instead of depending on your phone. Use the line breaks to test a stacked layout, such as a name over a date." },
        { widget: "tattoo-preview" },
      ],
    },
    {
      h2: "Name and date layouts that work",
      blocks: [
        {
          ul: [
            "**One word across the forearm or collarbone.** Bold Fraktur reads best; keep it under ten letters if you want it larger than about 2 cm tall.",
            "**Name over date.** Put the name in Bold Fraktur and the date in the Roman numeral style beneath it so the two lines have similar visual weight.",
            "**Down the spine or ribs.** The vertical stack style places one letter per line. Expect your artist to tighten the spacing by hand.",
            "**Across the knuckles.** Four letters per hand, capitals only. Bold Fraktur All Capitals shows how the shapes look in a row.",
          ],
        },
      ],
    },
    {
      h2: "Spacing tips your artist will thank you for",
      blocks: [
        { p: "Blackletter is dense by design. That looks great on paper but ink spreads under the skin over the years, so tight counters (the closed spaces inside e, a and o) can fill in. Small sizes make that worse. If you love the look but want it small, choose the lighter Fraktur style or ask for slightly wider letter spacing." },
        { p: "Capitals in this style are ornate and wide. Writing a whole phrase in capitals makes it hard to read, so most lettering artists use a capital only at the start of each word. The Illuminated Initials style shows that pattern." },
      ],
    },
    {
      h2: "Show your artist, don't hand them a stencil",
      blocks: [
        { p: "Copy-and-paste letters are a planning tool. Their exact shapes come from the font installed on whichever phone opens them, so the artist's screen may show something slightly different from yours. A professional will redraw the lettering to fit the placement, curve of the body and line weight they use. Bring the PNG, tell them which style you picked and why, and let them adapt it." },
      ],
    },
  ],
  built:
    "The tattoo styles in the list use Mathematical Bold Fraktur (U+1D56C–U+1D59F) for most layouts, with ꧁ ꧂ ornaments borrowed from the Javanese block for the framed version. The mockup and PNG download do not use Unicode at all: they render real OFL-licensed blackletter fonts on a canvas in your browser.",
  related: {
    heading: "More tools for tattoo planning",
    hrefs: ["/old-english-numbers", "/old-english-name-generator", "/chicano-font-generator", "/old-english-cursive", "/old-english-letters", "/old-english-text-to-image", "/gothic-font-generator"],
  },
  faq: [
    { q: "Which Old English style is most popular for tattoos?", a: "Heavy Bold Fraktur is the one most people picture: thick strokes, sharp points and decorative capitals. It holds up well over time because the strokes are wide." },
    { q: "Can my artist use this text directly as a stencil?", a: "Not reliably. The letters you copy are drawn by your device's fonts and can change from phone to phone. Use the downloaded PNG as a reference and let the artist produce the final linework." },
    { q: "How small can blackletter lettering go?", a: "That is a question for your artist, because it depends on their needles and your skin. In general, the more detail a style has, the more size it needs for the letters to stay readable as the ink settles." },
    { q: "How do I write a date for a tattoo?", a: "Type it as numbers, for example 14.02.2019, and look at the Roman Numeral Date style. Each group of digits becomes Roman letters, which blend into a blackletter design better than plain digits." },
    { q: "Does the preview show my exact skin tone?", a: "It offers five general tones on a simple forearm shape. It is meant to show contrast and proportion, not to match your skin exactly." },
    { q: "Is my text saved anywhere?", a: "No. The preview and the PNG are created in your browser. Nothing you type is uploaded." },
  ],
};

export default page;
