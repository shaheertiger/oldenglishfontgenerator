import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-letters",
  title: "Old English Letters — Copy & Paste Initials & Monograms",
  description:
    "Old English letters to copy and paste: single blackletter initials, framed capitals and couple monograms for profiles, gifts and logos. Free.",
  h1: "Old English Letters",
  crumb: "Old English Letters",
  intro:
    "Sometimes you only need one or two Old English letters: an initial for a profile picture caption, the first letters of a couple's names for a wedding sign, or a single framed capital to start a post. Type a full name below and the monogram styles at the top reduce it to initials automatically.",
  tool: {
    styles: ["monogram", "monogram-framed", "monogram-ampersand", "drop-cap", "illuminated", "gothic-framed", "frame-white", "circled", "boxed", "bold-fraktur", "fraktur", "frame-corner", "deco-fleur"],
    sample: "Amelia Rose",
    placeholder: "Type a full name to get its initials…",
    presets: ["Amelia Rose", "James Carter", "Liam Noah", "Sofia & Mateo"],
  },
  stylesHeading: "Initial and monogram styles",
  howTo: {
    heading: "How to make an Old English monogram",
    steps: [
      ["Type the full name", "Enter first and last name, or two names for a couple. The monogram styles pick out the first letter of each word."],
      ["Choose a layout", "Pick dotted initials, a framed block or the ampersand version used for couples."],
      ["Copy it into place", "Paste into a caption, a gift note, a story or the draft you send to a printer."],
    ],
  },
  sections: [
    {
      h2: "Framed single letters",
      blocks: [
        { p: "Each tile copies one framed capital. These work well as a lone initial at the start of a bio or as a divider in a long caption." },
        { widget: "letters" },
      ],
    },
    {
      h2: "Monogram conventions",
      blocks: [
        { p: "Traditional monograms follow a few rules that are worth knowing before you order anything engraved:" },
        {
          ul: [
            "For one person, the three-letter format puts the surname initial in the middle and larger: first, LAST, middle. Unicode can't change the size of one letter, so the framed style is the nearest equivalent.",
            "For a couple before marriage, initials are often joined with an ampersand, as the couple monogram style does.",
            "After marriage, many couples use the shared surname initial in the centre with the two first-name initials either side.",
          ],
        },
        { p: "None of these are strict. If a layout simply looks better to you, use it." },
      ],
    },
    {
      h2: "Using a single letter well",
      blocks: [
        { p: "A drop cap, the oversized first letter you see in old books, is a nice way to use blackletter without making a whole sentence hard to read. The Framed Drop Cap style places a bold capital in brackets and sets the rest of the word in the lighter weight. On a phone screen that single dark letter does more than a whole line of heavy text." },
      ],
    },
  ],
  built:
    "Monograms and initials use Bold Fraktur capitals from U+1D56C–U+1D585. The bubble and boxed variations add the combining enclosing circle (U+20DD) or enclosing square (U+20DE) after each letter, so their appearance depends heavily on your device's fonts.",
  related: {
    heading: "More ways to use Old English letters",
    hrefs: ["/old-english-alphabet", "/old-english-name-generator", "/old-english-tattoo-font", "/medieval-font-generator", "/old-english-text-to-image", "/old-english-font-instagram"],
  },
  faq: [
    { q: "How do I get just my initials in Old English?", a: "Type your full name. The first three styles in the list take the first letter of each word and convert only those letters." },
    { q: "Can I make a three-letter monogram with a bigger middle letter?", a: "Not with copy-paste text, because every character has the same size. Use the text to image tool to export a PNG and enlarge the centre letter in any image editor." },
    { q: "Why does the circled style look broken on my phone?", a: "The circle is a combining mark placed over the previous letter. Some fonts position it badly. Try the framed or boxed style instead." },
    { q: "Can I use these letters on a wedding invitation?", a: "They are great for drafting. For printing, ask your designer to set the monogram in a real blackletter typeface so the shapes are crisp at any size." },
    { q: "Are lowercase initials possible?", a: "Yes. Copy from the alphabet page, where every lowercase letter has its own tile." },
  ],
};

export default page;
