import type { PageContent } from "./types";

const page: PageContent = {
  slug: "tattoo-font-generator",
  title: "Tattoo Font Generator — 24 Lettering Styles, Free",
  description:
    "Tattoo font generator with 24 lettering styles: script, fine line, typewriter, blackletter, Roman numerals and vertical. Type once, compare, copy. Free.",
  h1: "Tattoo Font Generator",
  crumb: "Tattoo Font Generator",
  intro:
    "This tattoo font generator shows your words in 24 lettering styles at once, from thin cursive script and typewriter text to heavy blackletter, Roman numeral dates and a vertical spine stack. Type a name, date or short phrase, scroll the list, and copy the two or three you want to take to your artist. If you already know you want Old English lettering, the [Old English tattoo font](/old-english-tattoo-font) page adds a skin mockup and PNG download.",
  tool: {
    styles: [
      "script", "bold-script", "script-spaced", "typewriter", "bold-fraktur", "fraktur",
      "bold-cursive", "oe-cursive", "gangster-initials", "chicano", "roman-date", "roman-date-light",
      "roman-inscription", "vertical", "bold-serif", "varsity-outline", "fraktur-small-caps", "illuminated",
      "tattoo", "deco-rose", "deco-cross", "deco-heart", "deco-stars", "monogram-ampersand",
    ],
    sample: "Still I Rise",
    placeholder: "Name, date or phrase for your tattoo…",
    presets: ["Still I Rise", "Mom", "Est. 1994", "Carpe Diem", "Strength", "Let It Be", "23.06.2018"],
  },
  stylesHeading: "Tattoo lettering styles to compare",
  howTo: {
    heading: "How to pick a tattoo font in three steps",
    steps: [
      ["Decide the family first", "Script, typewriter, blackletter and Roman numerals give very different moods. Choose the family before you worry about the exact letter shapes."],
      ["Test the real wording", "Type the exact text, including capitals and punctuation. A style that looks great on one word can fall apart on a full sentence."],
      ["Bring screenshots, not files", "Copy or screenshot your favourites and show them at your consultation. The artist will redraw the lettering to suit the placement."],
    ],
  },
  sections: [
    {
      h2: "Which tattoo lettering family suits your idea?",
      blocks: [
        { p: "Most tattoo lettering falls into five families. The table matches each one to the styles in the generator above and to the placements where it usually works. Sizes are a rough guide only: line weight, needle choice and your skin all change what holds up, so ask your artist before committing to something small." },
        {
          table: {
            head: ["Family", "Generator styles", "Typical use", "Size to discuss with your artist"],
            rows: [
              ["Script / cursive", "Tattoo Script, Bold Tattoo Script", "Names, single words, love notes", "Medium; loops close up when very small"],
              ["Fine line", "Fine Line Spaced Script", "Wrist, finger, behind the ear", "Small, but expect softening over the years"],
              ["Typewriter", "Typewriter", "Quotes, song lyrics, coordinates", "Small to medium; even strokes age well"],
              ["Blackletter", "Bold Fraktur, Fraktur, Old English Tattoo", "Family names, chest pieces, knuckles", "Larger; dense letters need room"],
              ["Roman numerals", "Roman Numeral Date, Roman Inscription", "Birth and anniversary dates", "Any size; straight strokes are forgiving"],
            ],
          },
        },
        { p: "Mixing families is common. A blackletter name over a typewriter date, or an Old English capital followed by script, gives contrast without clashing. The Old English Initial + Script style shows that pairing in one line." },
      ],
    },
    {
      h2: "Is script or blackletter better for a small tattoo?",
      blocks: [
        { p: "Neither is automatically better, but they fail in different ways. Script relies on thin joining strokes and open loops; as ink spreads, the loops in letters like e, l and o can fill in. Blackletter relies on tight black shapes with small gaps between them; at small sizes those gaps vanish and the word becomes a dark bar." },
        { p: "If you want something tiny, typewriter lettering and Roman numerals are usually the safest, because their strokes are even and widely spaced. For the most popular script look, keep the word short. For blackletter, see the size and spacing notes on the [Old English tattoo font](/old-english-tattoo-font) page." },
      ],
    },
    {
      h2: "How do I turn a date into tattoo lettering?",
      blocks: [
        { p: "Type the date with dots, slashes or dashes, such as 23.06.2018. The Roman Numeral Date style converts each group of digits separately, so it becomes XXIII.VI.MMXVIII. The Roman Inscription style writes the same idea in bold capitals with a centred dot between words, the way Latin was carved in stone. The [Old English numbers](/old-english-numbers) page explains why blackletter has no digits of its own." },
        { ul: [
          "**Check the order.** Day-month-year and month-day-year produce different numerals. Write down which order you mean.",
          "**Count the characters.** MMXVIII is seven letters long. Long years make Roman dates wider than you might expect.",
          "**Pair it with a name.** A script name over a Roman date is one of the most requested layouts.",
        ] },
      ],
    },
    {
      h2: "Can I use these tattoo fonts for free?",
      blocks: [
        { p: "Yes. The styles here are Unicode characters, not font files, so there's nothing to license or download, and you can copy them as often as you like. If you or your artist want real font files to trace or print, the [free tattoo fonts](/fonts/tattoo) collection lists open-licence script, blackletter and typewriter fonts that allow commercial use." },
      ],
    },
  ],
  built:
    "Script styles come from Unicode's Mathematical Script and Bold Script alphabets (U+1D49C onwards), typewriter from Mathematical Monospace (U+1D670), and the blackletter rows from Mathematical Fraktur and Bold Fraktur. Roman numerals are ordinary capital letters chosen by a converter that handles 1 to 3999.",
  related: {
    heading: "More tattoo lettering tools",
    hrefs: ["/old-english-tattoo-font", "/latin-tattoo-font", "/bible-verse-font", "/gangster-font-generator", "/old-english-numbers", "/chicano-font-generator", "/old-english-text-to-image"],
  },
  faq: [
    { q: "What is the most popular tattoo font style?", a: "Script and blackletter are the two most requested families. Script is chosen for names and soft phrases; blackletter (Old English) for family names, chest pieces and anything meant to look bold." },
    { q: "Can my tattoo artist use the copied text as a stencil?", a: "Only as a reference. The letters you copy are drawn by whatever font your device has installed, so they can look different on the artist's screen. A good artist redraws lettering to fit the body." },
    { q: "Which tattoo font holds up best over time?", a: "Styles with even, open strokes, such as typewriter lettering and Roman numerals, tend to stay readable longest. Very thin script and tightly packed blackletter need more size to age well." },
    { q: "Is there a fine line tattoo font here?", a: "Yes. Fine Line Spaced Script puts a space between every letter of a thin script so you can judge how a delicate, airy layout reads. Your artist will set the final spacing." },
    { q: "How do I write a vertical tattoo?", a: "Use the Vertical Spine Stack style, which puts one letter per line. It suits spines, ribs and the side of a finger; expect your artist to adjust the spacing by hand." },
    { q: "Do these fonts work on my phone?", a: "Yes. They are standard Unicode characters that display on current iPhone, Android, Windows and Mac devices, so you can paste them into notes or messages to share with your artist." },
    { q: "Is anything I type saved?", a: "No. The conversion runs in your browser and nothing you type is sent to us." },
  ],
};

export default page;
