import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-name-generator",
  title: "Old English Name Generator — Your Name in Blackletter",
  description:
    "Old English name generator: write your name in blackletter with date and bio presets. Copy styled names for profiles, gifts and tattoo ideas.",
  h1: "Old English Name Generator",
  crumb: "Old English Name Generator",
  intro:
    "Want to see your name in Old English? Type it once and this name generator shows it in every blackletter style, from a simple Fraktur signature to a framed name with a Roman numeral birth year. The presets include common name-and-date combinations and short bio lines you can adapt.",
  tool: {
    styles: ["bold-fraktur", "fraktur", "illuminated", "oe-cursive", "gothic-framed", "tattoo", "frame-banner", "deco-crown", "deco-fleur", "roman-date", "fraktur-small-caps", "monogram", "wide-bold", "frame-corner"],
    sample: "Olivia Bennett",
    placeholder: "Type your first and last name…",
    presets: ["Olivia Bennett", "Marcus 1996", "Ava • Est. 2004", "The Hendersons", "Lucas | Artist | NYC"],
  },
  stylesHeading: "Your name in Old English",
  howTo: {
    heading: "How to style your name",
    steps: [
      ["Type your name the way you sign it", "Include a middle initial, nickname or family name if you want it in the result."],
      ["Add a year if you like", "Typing a year after the name lets the Roman numeral style turn it into letters."],
      ["Copy the version you prefer", "Paste it into a profile, a gift tag draft or a message to the person whose name it is."],
    ],
  },
  sections: [
    {
      h2: "Name and date presets",
      blocks: [
        { p: "The preset buttons above the list show layouts people ask for most. You can tap one and then edit it:" },
        { ul: [
          "**Name and birth year** (Marcus 1996). Popular for tattoo ideas and personal logos. Try Roman Numeral Date to see MCMXCVI.",
          "**Name with a separator** (Ava • Est. 2004). The middle dot keeps two pieces of information apart without extra words.",
          "**Family name** (The Hendersons). Suits house signs, holiday card drafts and group chats.",
          "**Bio line** (Lucas | Artist | NYC). Vertical bars are a compact way to list who you are on Instagram or TikTok.",
        ] },
      ],
    },
    {
      h2: "Choosing a style for a name",
      blocks: [
        { p: "Short names, especially those of four or five letters, can take the heaviest styles because each letter has room to show its detail. Longer names read better in regular Fraktur or with only the initial styled. Names with lots of rounded letters, such as Olivia or Noah, look softer in the cursive hybrid; names with many straight letters, like William, look sharp in Bold Fraktur." },
        { p: "If a name contains letters with accents, such as José or Zoë, the accent stays above the styled letter." },
      ],
    },
    {
      h2: "Gifts and keepsakes",
      blocks: [
        { p: "A styled name makes a nice touch on a birthday message or a digital card. For anything physical, such as a mug, engraving or embroidery, send the maker the plain spelling and tell them the style you liked, or download an image from the [text to image](/old-english-text-to-image) page so they have something exact to match." },
      ],
    },
  ],
  built:
    "Names are converted with Mathematical Bold Fraktur and Fraktur. The monogram style looks only at the first letter of each word, and the year conversion turns digit groups between 1 and 3999 into Roman numerals before applying Bold Fraktur.",
  related: {
    heading: "Other Old English tools for names",
    hrefs: ["/old-english-letters", "/old-english-font-instagram", "/old-english-font-discord", "/old-english-tattoo-font", "/old-english-cursive", "/old-english-numbers"],
  },
  faq: [
    { q: "Can it translate my name into Old English?", a: "No. It changes how the letters look, not the language. Names that existed in Anglo-Saxon England, like Ælfred for Alfred, are a matter of history rather than font style." },
    { q: "Will my name show up correctly for other people?", a: "On nearly all modern phones and computers, yes. Very old devices may show empty boxes instead of letters." },
    { q: "Which style looks most like a signature?", a: "Old English Cursive, which pairs a blackletter capital with flowing script lowercase." },
    { q: "Can I use a styled name as my Instagram handle?", a: "Not as the @username, which only accepts plain letters, numbers, periods and underscores. Put it in the Name field instead." },
    { q: "Does it work for names in other alphabets?", a: "Only Latin letters A to Z are converted. Characters from Cyrillic, Greek, Arabic and other scripts are left unchanged." },
  ],
};

export default page;
