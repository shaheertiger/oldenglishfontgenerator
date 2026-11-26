import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// The retired /old-english-tattoo-font page now 301s here; its skin-mockup
// widget, layout ideas and artist notes are merged below.
const page: PageContent = {
  slug: "font-generator/old-english-tattoo",
  file: "font-generator-old-english-tattoo",
  title: "Old English Tattoo Font: 16 Styles + Skin Mockup Preview",
  description:
    "Old English tattoo font: try a name or date in 16 blackletter styles, preview it on 5 skin tones and save a PNG for your artist. Free, no sign-up.",
  h1: "Old English Tattoo Font",
  crumb: "Old English Tattoo",
  intro:
    "An Old English tattoo font is the heavy blackletter lettering used for names, dates and short mottos, and this page lets you test 16 versions of it before you book. Type the exact wording, compare the bold and light old english tattoo lettering side by side, then put your favorite on a skin mockup and download it. Plenty of people searching for tattoo writing in Old English letters are really choosing between two or three styles; a saved picture makes that conversation with your artist much quicker.",
  tool: {
    styles: [
      "bold-fraktur", "tattoo", "fraktur", "bold-cursive", "roman-date", "roman-date-light", "vertical", "wide-bold",
      "frame-banner", "deco-cross", "deco-rose", "deco-swords", "bold-fraktur-caps", "gothic-framed", "chicano", "monogram-framed",
    ],
    sample: "Familia",
    placeholder: "Name, date or short quote…",
    presets: ["Familia", "Est. 2008", "Mom 1962", "Loyalty", "14.02.2019", "Only God Can Judge Me"],
  },
  stylesHeading: "Tattoo lettering styles",
  howTo: {
    heading: "How to plan Old English tattoo lettering",
    steps: [
      ["Type it exactly", "Enter the wording with the spelling, capitals and punctuation you want inked. A typo is easy to catch on a screen and permanent on skin."],
      ["Shortlist two", "Copy one heavy option and one lighter one. A clear either-or is easier for an artist to work from than ten screenshots."],
      ["Save the mockup", "Use the skin preview below, pick a tone and download the PNG to bring to your consultation."],
    ],
  },
  sections: [
    {
      h2: "Preview your lettering on a skin mockup",
      blocks: [
        { p: "This preview does not use copy-paste characters. It draws your words with UnifrakturCook or UnifrakturMaguntia, two open-licence blackletter typefaces, so the shapes stay the same on every phone. Add a line break to try a stacked layout, such as a name above a date, then download a PNG or SVG." },
        { widget: "tattoo-preview" },
      ],
    },
    {
      h2: "1. How do I write numbers and dates in Old English for a tattoo?",
      blocks: [
        { p: "Blackletter was never given its own digits in Unicode, so there is no true Old English 7 to copy. You have three options. Bold serif figures (what the Bold Fraktur style produces) are the plainest and easiest for anyone to read. Roman numerals are the traditional choice for a year: type 14.02.2019 and the Roman Numeral Date style turns each group into letters, which blend into the blackletter rather than interrupting it. Or ask your artist to hand-draw figures with the same pen angle as the lettering." },
        { p: "Before you settle on Roman numerals, check them. A long year such as 1988 becomes MCMLXXXVIII, eleven characters wide, which may not fit the space you had in mind." },
      ],
    },
    {
      h2: "2. Which layouts suit Old English tattoo writing?",
      blocks: [
        {
          ul: [
            "**One word across the forearm or collarbone.** Bold Fraktur reads best here; short words give the artist room to make each letter large.",
            "**Name over date.** Set the name in Bold Fraktur and the date underneath in the light Roman numeral style, so the two lines have similar weight.",
            "**Down the spine or ribs.** The Vertical Spine Stack puts one letter per line. Expect the artist to tighten the spacing by hand.",
            "**Across the knuckles.** Four letters per hand, capitals only. Bold Fraktur All Capitals shows how the shapes look in a row.",
            "**Initials in a frame.** Framed Monogram turns a full name into bold initials, a common choice for a small, discreet piece.",
          ],
        },
      ],
    },
    {
      h2: "3. Bold Old English tattoo letters, A to Z",
      blocks: [
        { p: "The full heavy alphabet and its matching script-lowercase version, for checking individual letters or sending one initial to your artist. Tap a cell to copy it." },
        { chart: { styles: ["bold-fraktur", "bold-cursive"], sets: ["upper", "lower"] } },
        { p: "Blackletter is dense by design. Ink spreads slightly under the skin over the years, so the small enclosed spaces inside letters like e, a and o can fill in, and small sizes make that worse. If you love the look but want it small, consider the lighter Fraktur style or slightly wider spacing, and ask your artist what size they recommend for the detail you have chosen." },
      ],
    },
  ],
  built:
    "The styles in the list use Mathematical Bold Fraktur (U+1D56C–U+1D59F) for most layouts, with ꧁ ꧂ ornaments from the Javanese block around the framed tattoo version. The mockup and its PNG download do not use Unicode letters at all: they render real open-licence blackletter fonts on a canvas in your browser.",
  related: {
    heading: "More tools for tattoo planning",
    hrefs: ["/tattoo-font-generator", "/latin-tattoo-font", "/chicano-font-generator", "/old-english-text-to-image", "/font-generator/old-english-letters", "/bible-verse-font"],
  },
  faq: [
    { q: "Which Old English style is most common for tattoos?", a: "The heavy Bold Fraktur look most people picture: thick strokes, sharp points and decorative capitals. Wide strokes also tend to age better than hairlines." },
    { q: "Can my artist use the copied text as a stencil?", a: "Not reliably. Copied letters are drawn by whatever font the viewing device has, so they can change between phones. Bring the PNG as a reference and let the artist draw the final linework." },
    { q: "How small can Old English tattoo lettering go?", a: "That depends on the artist, their needles and your skin, so ask them. In general, the more detail a style has, the larger it needs to be to stay readable." },
    { q: "How do I write a year in Roman numerals?", a: "Type the year or full date as digits and copy the Roman Numeral Date style. Each group of digits becomes Roman letters." },
    { q: "Does the preview match my exact skin tone?", a: "It offers five general tones on a simple forearm shape. It is meant to show contrast and proportion, not to match your skin exactly." },
    { q: "Is my text uploaded anywhere?", a: "No. The preview and the image file are created in your browser and nothing you type is sent to a server." },
    { q: "Should I use all capitals for a name?", a: "Usually not. Blackletter capitals are wide and ornate, so a name in all caps becomes hard to read; a capital only at the start is the common choice." },
  ],
};

export default page;
