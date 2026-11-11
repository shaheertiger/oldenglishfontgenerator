import type { PageContent } from "./types";

const page: PageContent = {
  slug: "diploma-font",
  title: "Diploma Font — Old English Titles, Script Names, 14 Styles",
  description:
    "Diploma font: most diplomas set the school name in Old English blackletter and the graduate's name in a formal script. 14 styles to copy, plus free fonts.",
  h1: "Diploma Font",
  crumb: "Diploma Font",
  intro:
    "Most diplomas use two fonts: an Old English blackletter for the institution's name and a formal script for the graduate's name, with a plain serif for the small print. This page gives you 14 copy-paste styles covering all three roles and points to the free fonts that come closest to the typefaces diploma printers use, so you can make a certificate, a replacement-style keepsake or a classroom award that looks the part.",
  tool: {
    styles: [
      "fraktur", "bold-fraktur", "fraktur-small-caps", "illuminated", "fraktur-plain-lower", "script",
      "bold-script", "oe-cursive", "bold-serif", "roman-inscription", "roman-date-light", "frame-banner",
      "deco-fleuron", "monogram",
    ],
    sample: "Bachelor of Arts",
    placeholder: "School, degree or graduate's name…",
    presets: ["Bachelor of Arts", "Certificate of Completion", "Summa Cum Laude", "Master of Science", "Class of 2026", "Honor Roll"],
  },
  stylesHeading: "Diploma and certificate styles",
  howTo: {
    heading: "How to lay out a diploma-style certificate",
    steps: [
      ["Institution in blackletter", "Set the school or organisation name across the top in Fraktur or Bold Fraktur. It's the line people recognise as official."],
      ["Recipient in script", "Put the person's name in a formal script, larger than everything except the title. Tattoo Script or Bold Tattoo Script show the effect."],
      ["Details in a plain serif", "Degree wording, date and signatures read best in a quiet serif. Use Roman numerals for the year if you want a classical touch."],
    ],
  },
  sections: [
    {
      h2: "What font is used on diplomas?",
      blocks: [
        { p: "There's no standard, and each school or printer chooses its own, but the same handful of blackletter typefaces turns up again and again for the institution's name. Most commonly:" },
        {
          table: {
            head: ["Typeface", "Role on a diploma", "Where it comes from", "Free look-alike"],
            rows: [
              ["Old English Text MT", "School name", "Monotype; included with Microsoft Office", "[UnifrakturMaguntia](/fonts/old-english)"],
              ["Engravers Old English", "School name", "American Type Founders, early 1900s", "UnifrakturMaguntia"],
              ["Cloister Black", "School name", "American Type Founders, early 1900s", "UnifrakturCook"],
              ["Formal copperplate scripts", "Graduate's name", "Many foundries", "Pinyon Script"],
              ["Classic serifs (Times, Garamond-style)", "Degree text, date", "Many foundries", "Any serif in Word or Docs"],
            ],
          },
        },
        { p: "Details on each blackletter face, including licences and closer matches, are on the [Old English Text MT](/fonts/old-english-text-mt) and [Cloister Black](/fonts/cloister-black) pages. Script options are in the [calligraphy fonts](/fonts/calligraphy) collection." },
      ],
    },
    {
      h2: "What do the Latin words on a diploma mean?",
      blocks: [
        { p: "Many diplomas, especially from older universities, are partly or wholly in Latin. The honours lines are the ones people ask about most." },
        {
          table: {
            head: ["Latin", "Meaning", "Usual use"],
            rows: [
              ["Cum laude", "With praise", "Graduating with honours"],
              ["Magna cum laude", "With great praise", "Higher honours"],
              ["Summa cum laude", "With highest praise", "Highest honours"],
              ["Honoris causa", "For the sake of honour", "Honorary degrees"],
              ["Artium Baccalaureus", "Bachelor of Arts", "Degree name on Latin diplomas"],
            ],
          },
        },
        { p: "The exact thresholds for each honour differ by institution. For more Latin set in classical capitals, see the [Latin tattoo font](/latin-tattoo-font) page." },
      ],
    },
    {
      h2: "How do I make a certificate in Word or Google Docs?",
      blocks: [
        { ul: [
          "**Word on Windows or Mac:** Old English Text MT usually comes with Microsoft Office. Type the school name and pick it from the font box. The [Word guide](/fonts/old-english/word) covers what to do if it's missing and how to embed it.",
          "**Google Docs:** Docs can't use Old English Text MT, but More fonts includes UnifrakturMaguntia and Pinyon Script. See the [Google Docs guide](/fonts/old-english/google-docs).",
          "**Canva:** search its font library or paste the copied styles from this page into a text box.",
          "**Print on heavy card:** 200 gsm or heavier cream stock looks far more like a real diploma than office paper.",
        ] },
      ],
    },
    {
      h2: "Can I make a replica of my real diploma?",
      blocks: [
        { p: "For a lost or damaged diploma, ask your school's registrar for an official replacement. Making a copy that could pass as a genuine credential is fraud in many places, even if you did earn the degree. These styles are meant for awards, keepsakes, classroom certificates, props clearly marked as such and design practice." },
      ],
    },
  ],
  built:
    "The blackletter rows use Unicode Mathematical Fraktur and Bold Fraktur; the script rows use Mathematical Script and Bold Script; Bold Serif and Roman Inscription use Mathematical Bold. They're for screens and quick mockups: for printing, install a real font.",
  related: {
    heading: "More lettering for certificates",
    hrefs: ["/old-english-name-generator", "/newspaper-masthead-font", "/illuminated-letters", "/blackletter-generator", "/old-english-text-to-image", "/fonts/old-english"],
  },
  faq: [
    { q: "What font is used on most diplomas?", a: "Most commonly, an Old English blackletter such as Old English Text MT, Engravers Old English or Cloister Black for the school name, a formal script for the graduate's name, and a serif for the rest." },
    { q: "What is the diploma font in Microsoft Word?", a: "Old English Text MT, which ships with Microsoft Office, is the closest built-in match. Pair it with a script font for the recipient's name." },
    { q: "Is there a free diploma font?", a: "Yes. UnifrakturMaguntia is a free blackletter close to Old English Text MT, and Pinyon Script is a free formal script. Both are under the SIL Open Font License." },
    { q: "Can I copy and paste diploma lettering?", a: "Yes. Type your text, pick a style and tap Copy. For printed certificates, installed fonts give sharper results." },
    { q: "What does summa cum laude mean?", a: "With highest praise. It's the top Latin honour on many diplomas, above magna cum laude and cum laude." },
    { q: "What size should the school name be?", a: "Make the institution name the largest line and the recipient's name the second largest. Leave generous margins: blackletter is wide, and a title that runs edge to edge looks cramped once printed." },
  ],
};

export default page;
