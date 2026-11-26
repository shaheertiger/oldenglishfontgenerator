import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before 00a2b7f.
// The retired /gangster-font-generator page now 301s here; its history notes
// and use-case table are merged below.
const page: PageContent = {
  slug: "font-generator/gangster",
  file: "font-generator-gangster",
  title: "Gangster Font Generator: 14 Old English Script Styles",
  description:
    "Gangster font generator: 14 styles mixing Old English capitals with bold cursive, plus Roman-numeral dates. Type a motto, tap Copy, paste. Free.",
  h1: "Gangster Font Generator",
  crumb: "Gangster",
  intro:
    "A gangster font generator gives you street-style lettering, usually a heavy Old English capital followed by slanted bold cursive, and this one has 14 versions to copy. Type a name, a crew, a street or a motto and compare the script-heavy styles with the full blackletter ones. People looking for gangster fonts to copy and paste, or gangster letters for a caption, are usually after that capital-plus-script contrast. Each result is plain Unicode text, so you can paste it anywhere you can type; whether a character shows depends on the fonts on the reader's device.",
  tool: {
    styles: [
      "gangster-initials", "bold-cursive", "chicano", "bold-script", "bold-fraktur", "bold-fraktur-caps", "roman-date",
      "deco-crown", "frame-block", "monogram", "distressed", "u-gothic-spaced", "u-sans-bold", "varsity-outline",
    ],
    sample: "Loyalty Over Everything",
    placeholder: "Name, motto or street…",
    presets: ["Loyalty Over Everything", "Westside", "Familia", "Real Ones", "Est. 1992", "Mi Vida Loca"],
  },
  stylesHeading: "Gangster lettering styles",
  howTo: {
    heading: "How to get the gangster script look",
    steps: [
      ["Lead with the capital", "Try Old English Initial + Script first: each word's first letter becomes Bold Fraktur and the rest bold cursive."],
      ["Decide how much script", "Bold Old English Cursive keeps every capital in blackletter; Bold Tattoo Script goes fully cursive. Pick by how readable the phrase must be."],
      ["Copy and check", "Paste it where you will use it and look at every letter before you post or print a mockup."],
    ],
  },
  sections: [
    {
      h2: "1. What makes a font look gangster?",
      blocks: [
        { p: "The look borrows from two places: the blackletter of old newspaper nameplates and certificates, and fast, slanted sign-painter and tattoo script. Three details give it away:" },
        {
          ul: [
            "**Blackletter capitals.** Heavy, broken strokes with sharp points, usually only at the start of each word.",
            "**Slanted cursive small letters.** Long entry strokes and loops, closer to a signature than to school handwriting.",
            "**Weight contrast.** Thick downstrokes against thin upstrokes, which reads as hand-made even on a screen.",
          ],
        },
        { p: "Real street lettering is drawn by hand, with flourishes and connections no character set can copy. These styles are for trying an idea quickly before you pay a lettering artist." },
        { chart: { styles: ["bold-cursive", "bold-script"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "2. Which gangster style should I use?",
      blocks: [
        {
          table: {
            head: ["Use", "Style to try", "Why"],
            rows: [
              ["Caption or bio line", "Old English Initial + Script", "Capitals stand out while the rest stays readable at small sizes"],
              ["Tattoo idea for an artist", "Bold Old English Cursive", "Shows the classic capital-plus-script pairing clearly"],
              ["Shirt or hoodie mockup", "Bold Fraktur All Capitals", "Even weight looks cleaner than thin script on fabric"],
              ["Date or year", "Roman Numeral Date", "Numerals blend into blackletter better than digits"],
              ["Initials or crew tag", "Monogram Initials", "Turns a full name into spaced Bold Fraktur letters"],
              ["Sports-style name", "Varsity Outline", "Hollow letters like a team jersey"],
            ],
          },
        },
        { p: "For an actual garment or tattoo, use installed font files rather than copied text, so the letters stay sharp. The [fonts](/fonts) page lists open-licence blackletter faces you can download." },
      ],
    },
    {
      h2: "3. Is gangster font the same as Chicano lettering?",
      blocks: [
        { p: "They overlap heavily. Chicano and cholo lettering come from Mexican-American communities in Los Angeles and the Southwest, including placas, the hand styles used to write names and neighborhoods on walls. Gangster font is a looser online label for the same blackletter-and-script mix, often used in a hip-hop context. For the lowrider and tattoo-flash side, the [Chicano font generator](/chicano-font-generator) has presets for that; this page leans toward mottos, captions and crew names." },
      ],
    },
  ],
  built:
    "The mixed styles take capitals from Mathematical Bold Fraktur (U+1D56C–U+1D59F) and small letters from Mathematical Bold Script (U+1D4D0–U+1D503). Unicode has no blackletter or script digits, so numbers stay plain in the script styles, turn bold in Bold Fraktur, or become Roman numerals.",
  related: {
    heading: "Related lettering tools",
    hrefs: ["/chicano-font-generator", "/font-generator/graffiti", "/tattoo-font-generator", "/font-generator/old-english-tattoo", "/font-generator/old-cursive", "/old-english-name-generator"],
  },
  faq: [
    { q: "What is a gangster font called?", a: "There is no single font with that name. It usually means Old English (blackletter) capitals combined with a slanted cursive script." },
    { q: "Can I copy and paste gangster letters?", a: "Yes. Type your text, then press Copy next to any style. The letters are Unicode characters, so nothing needs installing." },
    { q: "How do I write numbers in gangster font?", a: "Script has no special digits, so numbers stay plain in the cursive styles. Use Roman Numeral Date for a year, or Bold Fraktur for heavier bold figures." },
    { q: "What is the best gangster cursive for a tattoo?", a: "Bold Old English Cursive is a good starting point because it shows clear capitals and readable script. Your artist will redraw it by hand to fit the placement." },
    { q: "Does it convert Spanish words?", a: "Yes. Accented letters like é and ñ keep their accent as a combining mark, so words like Familia and Mi Vida Loca convert normally." },
    { q: "Why does a letter show as a box?", a: "The reader's device lacks a font with that character. Try another style, or make a picture of the text with the [text to image tool](/old-english-text-to-image)." },
    { q: "Can I use this lettering on merch I sell?", a: "Copied characters carry no font licence, but for printing you should use real font files and check each font's licence; open-licence fonts under the SIL OFL allow commercial use." },
  ],
};

export default page;
