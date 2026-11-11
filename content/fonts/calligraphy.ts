import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "calligraphy",
  title: "Calligraphy Fonts — 10 Free Old English & Script Fonts",
  description:
    "Calligraphy fonts free to download: 10 open-licence Old English, uncial, italic and copperplate fonts, sorted by the pen they imitate. Live preview.",
  h1: "Calligraphy Fonts",
  crumb: "Calligraphy Fonts",
  intro:
    "Calligraphy fonts copy one of two pens, and this page has 10 free ones sorted that way: 6 broad-edge fonts (Old English, textura, uncial and italic hands, where stroke width comes from the angle of a flat nib) and 4 pointed-pen scripts (copperplate-style, where width comes from pressure). All are open-licence. Type a name or heading to see your words in each.",
  sample: "Anno Domini",
  fonts: ["Texturina", "UnifrakturMaguntia", "Grenze Gotisch", "Uncial Antiqua", "Fondamento", "Eagle Lake", "Pinyon Script", "Great Vibes", "Italianno", "Tangerine"],
  notes: {
    "Texturina": "Textura, the tall, tightly packed hand of late-medieval books, redrawn for screens. A variable font with italics, so it can set a whole page.",
    "UnifrakturMaguntia": "Fraktur as it was printed for centuries. The most authentic Old English calligraphy look here, and it includes the long s.",
    "Grenze Gotisch": "A modern gothic with a weight axis from thin to black, useful when you need a calligraphic heading in several strengths.",
    "Uncial Antiqua": "Rounded uncial capitals from before blackletter existed. Ideal for Celtic and early-medieval themed lettering.",
    "Fondamento": "A broad-nib italic, the hand many calligraphy beginners learn first. Comes with a matching italic style.",
    "Eagle Lake": "Freer and more decorative than Fondamento, like quick broad-pen lettering on a card or certificate.",
    "Pinyon Script": "Copperplate with fine hairlines and swelling downstrokes, modelled on 19th-century pointed-pen writing.",
    "Great Vibes": "A flowing pointed-pen script that stays legible, a good default for wedding names and place cards.",
    "Italianno": "A light script with very thin strokes for delicate invitations and small-scale lettering.",
    "Tangerine": "A tall, narrow calligraphic script with a bold weight as well, handy for headings that must fit a slim space.",
  },
  sections: [
    {
      h2: "Broad-edge or pointed pen: which calligraphy look do I want?",
      blocks: [
        { table: { head: ["Pen", "How strokes get thick and thin", "Fonts here", "Typical uses"], rows: [
          ["Broad-edge (flat) nib", "The nib is held at a fixed angle; direction of travel sets the width.", "Texturina, UnifrakturMaguntia, Grenze Gotisch, Uncial Antiqua, Fondamento, Eagle Lake", "Old English titles, certificates, medieval themes, Bible verses"],
          ["Pointed (flexible) nib", "Pressing opens the tines for thick downstrokes; light upstrokes stay hairline.", "Pinyon Script, Great Vibes, Italianno, Tangerine", "Weddings, invitations, names, greeting cards"],
        ] } },
        { p: "Old English calligraphy is always broad-edge: the angular look comes from the flat nib. If you want to try it by hand, the [how to write Old English](/how-to-write-old-english) guide covers nib angle and letter construction step by step." },
      ],
    },
    {
      h2: "Which calligraphy fonts look vintage or antique?",
      blocks: [
        { p: "For an antique look, pick a font based on a historical model: UnifrakturMaguntia (German Fraktur printing), Texturina (late-medieval textura), Uncial Antiqua (early-medieval uncial) and Pinyon Script (Victorian copperplate). Eagle Lake and Great Vibes feel more modern. Printing on cream paper and choosing a dark brown instead of pure black makes any of them look older." },
        { p: "For the history behind each blackletter style, see [blackletter and medieval fonts](/fonts/blackletter); for joined capitals and script, the [Old English cursive](/old-english-cursive) generator mixes both in copy-paste text." },
      ],
    },
    {
      h2: "Is it okay to use a calligraphy font instead of real calligraphy?",
      blocks: [
        { p: "For most jobs, yes: a font repeats perfectly, costs nothing here and is easy to edit. What it can't do is vary: real calligraphy never repeats a letter exactly. If that matters, such as for a wedding certificate or a tattoo, use the font to plan layout and spacing, then have a calligrapher or tattoo artist letter it. To add a decorated first letter, try [illuminated letters](/illuminated-letters)." },
      ],
    },
  ],
  faq: [
    { q: "What is the best free Old English calligraphy font?", a: "UnifrakturMaguntia for traditional Fraktur, or Texturina if you need several weights and an italic for longer text." },
    { q: "What calligraphy fonts are good for beginners to copy?", a: "Fondamento, a broad-nib italic, and Uncial Antiqua, whose rounded capitals are simple to trace and practise." },
    { q: "Which calligraphy font is best for a tattoo?", a: "Great Vibes for a readable script, UnifrakturMaguntia for blackletter. Let your artist adjust thin strokes, which can fade at small sizes. The [tattoo fonts](/fonts/tattoo) page has more options." },
    { q: "Are these calligraphy fonts free for commercial use?", a: "Yes. All 10 are under the SIL Open Font License, which allows commercial printing, logos and products." },
    { q: "Do calligraphy fonts work in Word and Google Docs?", a: "In Word, install the font first; in Google Docs, add it from More fonts. See the [Word guide](/fonts/old-english/word) and [Google Docs guide](/fonts/old-english/google-docs)." },
    { q: "Which of these fonts has the long s (ſ)?", a: "UnifrakturMaguntia, Grenze Gotisch, Pinyon Script and Italianno include it, according to our check of the font files." },
  ],
  tools: ["/old-english-cursive", "/how-to-write-old-english", "/illuminated-letters"],
};

export default page;
