import type { PageContent } from "./types";

const page: PageContent = {
  slug: "gangster-font-generator",
  title: "Gangster Font Generator — 18 Cursive & Old English Styles",
  description:
    "Gangster font generator: 18 copy-and-paste styles mixing Old English capitals with cursive script, for captions, tattoo ideas and merch mockups.",
  h1: "Gangster Font Generator",
  crumb: "Gangster Font Generator",
  intro:
    "Gangster lettering is usually two scripts in one: a heavy Old English capital followed by a slanted cursive lowercase, and this generator gives you 18 versions of that mix to copy. Type a name, a street, a crew or a motto and compare the cursive-heavy styles with the full blackletter ones. For the lowrider side of the same tradition, try the [Chicano font generator](/chicano-font-generator).",
  tool: {
    styles: [
      "gangster-initials", "bold-cursive", "chicano", "bold-script", "script", "bold-fraktur",
      "bold-fraktur-caps", "oe-cursive", "fraktur", "tattoo", "roman-date", "deco-cross",
      "deco-crown", "deco-rose", "frame-banner", "wide-bold", "monogram", "distressed",
    ],
    sample: "Loyalty Over Everything",
    placeholder: "Name, motto or street…",
    presets: ["Loyalty Over Everything", "Westside", "Familia", "Real Ones", "Blessed", "Est. 1992", "Mi Vida Loca"],
  },
  stylesHeading: "Gangster lettering styles",
  howTo: {
    heading: "How to get the gangster script look",
    steps: [
      ["Start with the capital", "The first letter carries the attitude. Try Old English Initial + Script, which sets each word's first letter in Bold Fraktur and the rest in bold cursive."],
      ["Choose how much script", "Bold Old English Cursive keeps every capital in blackletter; Bold Tattoo Script goes fully cursive. Pick by how readable the phrase needs to be."],
      ["Copy and test it", "Paste into the caption, bio or note where you'll use it. Check that every letter shows on your phone before posting."],
    ],
  },
  sections: [
    {
      h2: "What makes a font look gangster?",
      blocks: [
        { p: "The look grew out of West Coast street lettering, where sign painters, tattooers and graffiti writers combined the blackletter of old newspaper mastheads with a fast, slanted handwriting script. Three things give it away:" },
        { ul: [
          "**Blackletter capitals.** Heavy, broken strokes with sharp points, usually only at the start of each word.",
          "**Slanted cursive lowercase.** Joined letters with long entry strokes, closer to a signature than to school handwriting.",
          "**Weight contrast.** Thick downstrokes against thin upstrokes, which reads as hand-made even on a screen.",
        ] },
        { p: "Real gangster lettering is drawn by hand, often with flourishes no font can reproduce. These Unicode styles are a quick way to try an idea before paying a lettering artist." },
      ],
    },
    {
      h2: "Which style should I use for a caption, a tattoo or a shirt?",
      blocks: [
        {
          table: {
            head: ["Use", "Best style here", "Why"],
            rows: [
              ["Instagram or TikTok caption", "Old English Initial + Script", "Capitals stand out, the rest stays readable on a small screen"],
              ["Tattoo idea for an artist", "Bold Old English Cursive", "Shows the classic capital-plus-script pairing clearly"],
              ["Shirt or hoodie mockup", "Bold Fraktur All Capitals", "Uniform weight prints more cleanly than thin script"],
              ["Date or year", "Roman Numeral Date", "Numerals blend into blackletter better than digits"],
              ["Initials", "Monogram Initials", "Turns a full name into spaced Bold Fraktur letters"],
            ],
          },
        },
        { p: "For an actual garment or tattoo you'll want real font files rather than copied text. The [free chicano and gangster fonts](/fonts/chicano) page lists open-licence blackletter and script fonts you can install and pair yourself." },
      ],
    },
    {
      h2: "Is gangster font the same as Chicano or cholo lettering?",
      blocks: [
        { p: "They overlap heavily. Chicano and cholo lettering come from Mexican-American neighbourhoods in Los Angeles and the Southwest and include placas, the hand styles used to mark names and neighbourhoods on walls. Gangster font is a looser label people use online for the same blackletter-and-script mix, often in a hip-hop context. If you want the lowrider and tattoo-flash side, the Chicano generator has presets for that; this page leans toward mottos and captions." },
      ],
    },
    {
      h2: "Why does a letter show as a box?",
      blocks: [
        { p: "Each style uses characters from Unicode's mathematical alphabets. Devices from roughly the last decade display them, but very old phones and some game chats or company systems don't. If a box appears, try a different style, or make a picture of the text with the [text to image tool](/old-english-text-to-image)." },
      ],
    },
  ],
  built:
    "The mixed styles take capitals from Mathematical Bold Fraktur (U+1D56C–U+1D59F) and lowercase from Mathematical Bold Script (U+1D4D0 onwards). Unicode has no blackletter digits, so numbers stay as bold serif digits or become Roman numerals.",
  related: {
    heading: "Related lettering tools",
    hrefs: ["/chicano-font-generator", "/old-english-cursive", "/tattoo-font-generator", "/biker-font-generator", "/old-english-name-generator", "/old-english-font-instagram"],
  },
  faq: [
    { q: "What is a gangster font called?", a: "There's no single font with that name. It usually means Old English (blackletter) capitals combined with a slanted cursive script, the way West Coast lettering artists draw it." },
    { q: "Can I copy and paste gangster letters?", a: "Yes. Type your text, then tap Copy next to any style. The letters are Unicode characters, so they paste into Instagram, TikTok, Discord and most messaging apps." },
    { q: "What is the best gangster cursive for a tattoo?", a: "Bold Old English Cursive is a good starting point because it shows clear capitals and a readable script. Your artist will redraw it by hand to fit the placement." },
    { q: "Can I write a whole alphabet in gangster style?", a: "Type a to z or A to Z into the box and every style converts the full alphabet. The [Old English alphabet](/old-english-alphabet) page also has a printable chart." },
    { q: "Does it work for Spanish words?", a: "Yes. Accented letters like é and ñ keep their accent as a combining mark, so words like Mi Vida Loca and Familia convert normally." },
    { q: "Can I use this lettering on merch I sell?", a: "Copied Unicode text has no font licence attached, but for printing you should use real font files. The fonts on our chicano and tattoo font pages are under the SIL Open Font License, which allows commercial use." },
  ],
};

export default page;
