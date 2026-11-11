import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "uncial-antiqua",
  title: "Uncial Antiqua Font — Free Celtic-Style Uncial, 371 Glyphs",
  description:
    "Uncial Antiqua font: a free uncial typeface for Celtic and early medieval designs, with 371 glyphs and accented letters. Preview text and 5 similar fonts.",
  h1: "Uncial Antiqua Font",
  crumb: "Uncial Antiqua",
  intro:
    "Uncial Antiqua is a free font by Astigmatic, on Google Fonts since 2011, based on uncial: the rounded capital script of early medieval Latin books. It is the font to reach for when something should look Celtic or early medieval rather than gothic. Our measurement of the file counts 371 glyphs with accented and Central European letters, but no long s. It's under the SIL Open Font License.",
  sample: "Celtic Knot",
  fonts: ["Uncial Antiqua", "Macondo", "Metamorphous", "Eagle Lake", "MedievalSharp", "Texturina"],
  notes: {
    "Uncial Antiqua": "The subject of this page: rounded, single-case uncial forms with a pen-made feel.",
    "Macondo": "Softer uncial-flavoured capitals with a storybook mood.",
    "Metamorphous": "Blends uncial and blackletter shapes; a bridge between Celtic and gothic looks.",
    "Eagle Lake": "Broad-pen calligraphy that suits scroll headings beside uncial titles.",
    "MedievalSharp": "Angular, informal medieval lettering for maps and game text.",
    "Texturina": "Later, gothic textura, for contrast with the earlier uncial style.",
  },
  focus: "Uncial Antiqua",
  sections: [
    {
      h2: "What is an uncial font?",
      blocks: [
        { p: "Uncial was a book hand used for Latin and Greek manuscripts from roughly the 4th to the 8th century. Its letters are round, written with a broad pen held fairly flat, and it has essentially one case: there's no separate set of small letters as we know them today. Blackletter came much later, in the Gothic period, which is why uncial looks gentler and older at the same time." },
        { p: "Uncial Antiqua keeps that single-case feel, so typing in lowercase or capitals gives similar shapes. That makes it forgiving for titles but tiring in long paragraphs." },
      ],
    },
    {
      h2: "Is Uncial Antiqua a Celtic font?",
      blocks: [
        { p: "It's the font most people use for a Celtic look, and for good reason: Irish and Scottish manuscripts used related rounded scripts. Strictly, the famous Book of Kells is usually described as written in insular majuscule, a regional relative of uncial rather than uncial itself. For a pub sign, a St Patrick's Day poster or a fantasy map, the difference won't matter." },
        { table: { head: ["Project", "Good pairing"], rows: [
          ["Celtic or Irish theme", "Uncial Antiqua titles, Eagle Lake for subtitles"],
          ["Fantasy map or game", "Uncial Antiqua for place names, MedievalSharp for labels"],
          ["Gothic medieval look", "Choose Texturina or UnifrakturMaguntia instead"],
        ] } },
        { p: "Celtic knot fonts, where each letter is woven from interlace, are a separate decorative category; Uncial Antiqua has plain strokes. Browse more in the [fantasy fonts](/fonts/fantasy) and [blackletter & medieval fonts](/fonts/blackletter) collections." },
      ],
    },
  ],
  tools: ["/medieval-font-generator", "/illuminated-letters", "/blackletter-generator"],
  faq: [
    { q: "Is Uncial Antiqua free to use?", a: "Yes. It's published under the SIL Open Font License, so personal and commercial use are both allowed." },
    { q: "Does Uncial Antiqua have lowercase letters?", a: "It has lowercase characters mapped, but like historical uncial they look much like small capitals, so the text reads as a single case." },
    { q: "Does Uncial Antiqua support accented letters?", a: "Yes. Our check found ß, umlauts and Central European letters such as ą, č and ł. It doesn't include the long s." },
    { q: "Is uncial the same as blackletter?", a: "No. Uncial is an early medieval rounded script; blackletter is the later, angular Gothic family." },
    { q: "What font looks like the Book of Kells?", a: "Uncial Antiqua is the common free choice. The manuscript itself uses insular majuscule, a related script, so no font matches it exactly." },
  ],
};

export default page;
