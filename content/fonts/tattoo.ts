import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "tattoo",
  title: "Tattoo Fonts — 12 Free Script, Cursive & Blackletter Fonts",
  description:
    "Tattoo fonts to download free: 12 open-licence script, cursive, fine-line, typewriter and blackletter fonts with live preview of your own words.",
  h1: "Tattoo Fonts",
  crumb: "Tattoo Fonts",
  intro:
    "Most lettering tattoos fall into five families (see the table below), and this page has 12 free fonts covering all of them: 2 Old English blackletters plus a rock-poster blackletter, 8 cursive and handwriting scripts (one of them fine-line) and 1 typewriter face. Type your word, compare them side by side, then take your two favourites to your artist. Every font is open-licence, so the files are free to install and use.",
  sample: "Still I Rise",
  fonts: [
    "UnifrakturCook", "UnifrakturMaguntia", "New Rocker",
    "Mrs Saint Delafield", "Monsieur La Doulaise", "Herr Von Muellerhoff", "Pinyon Script", "Great Vibes", "Tangerine",
    "Italianno", "Mr De Haviland", "Courier Prime",
  ],
  notes: {
    "UnifrakturCook": "Heavy Old English with thick strokes. Holds up best over the years of the three blackletters, because wide strokes leave less to blur.",
    "UnifrakturMaguntia": "Classic book Fraktur, thinner than Cook. Better for a single capital or a short word placed large.",
    "New Rocker": "Blackletter with a rock-and-roll swagger. Popular for band-style lettering on banners and flash sheets.",
    "Mrs Saint Delafield": "The slanted, signature-like script many people mean by a cursive tattoo. Strong capitals make names stand out.",
    "Monsieur La Doulaise": "Ornate swash capitals over a small lowercase. Pick it for one word or an initial, never a sentence.",
    "Herr Von Muellerhoff": "Looks like real pen handwriting. A good fit if you want a phrase to feel written rather than designed.",
    "Pinyon Script": "Copperplate with fine hairlines and round loops: the elegant, formal cursive. Needs some size so the hairlines stay visible.",
    "Great Vibes": "A flowing script that stays readable, useful when a quote must be legible to strangers, not only to you.",
    "Tangerine": "A calligraphic italic with tall ascenders and a bold weight as well as the regular. Good for a short word that should look written with a calligraphy pen.",
    "Italianno": "Very fine strokes: the closest free font to fine-line script. Ask your artist about minimum size before committing.",
    "Mr De Haviland": "Light and airy with tall ascenders, for delicate names, dates and small wrist pieces.",
    "Courier Prime": "Typewriter lettering for short quotes, coordinates and song lyrics. Even stroke width keeps it clean when small.",
  },
  sections: [
    {
      h2: "Which tattoo font style suits my idea?",
      blocks: [
        { table: { head: ["Style family", "Good for", "Watch out for"], rows: [
          ["Blackletter (Old English)", "Names across the chest, surnames, single bold words, knuckles", "Tight counters can fill in at small sizes; capitals are hard to read in all-caps phrases."],
          ["Formal script (copperplate)", "Names of children or partners, elegant quotes", "Hairlines need size; very thin joins may fade."],
          ["Handwriting cursive", "Short phrases, signatures, lyrics", "Loose letters can look messy if spacing isn't tightened by the artist."],
          ["Fine-line script", "Small wrist, rib and collarbone text", "Thin lines are more prone to spreading and fading over time; your artist will advise on size."],
          ["Typewriter", "Quotes, coordinates, dates, book lines", "Plain at large sizes; it shines small and in one line."],
        ] } },
        { p: "Still deciding on blackletter? The [Old English tattoo font](/old-english-tattoo-font) page has a skin-tone mockup and PNG download. For phrases, the [Latin tattoo font](/latin-tattoo-font) page lists popular Latin lines with their meanings and letter counts." },
      ],
    },
    {
      h2: "Should I bring a font file or a drawing to my artist?",
      blocks: [
        { p: "Bring a printout or screenshot of your word in two or three fonts, plus the font names. Good artists rarely trace a font directly: they adjust letter spacing, line weight and curves to suit the placement and their machine setup. A font gets everyone looking at the same shapes, which makes the consultation faster." },
        { ul: [
          "**Type the exact wording first.** Spelling mistakes are easier to catch in a preview than on skin.",
          "**Check the capitals.** Script and blackletter capitals vary the most between fonts, so compare those letters closely.",
          "**Test the length.** A long quote in a wide script may not fit the spot you have in mind; a narrower font such as Herr Von Muellerhoff can help.",
        ] },
      ],
    },
    {
      h2: "Are free tattoo fonts really free to use?",
      blocks: [
        { p: "All 12 fonts here are published under the SIL Open Font License, so you can install them, use them for your own tattoo and use them in flash or designs you sell. The licence only stops people selling the font files themselves. Many fonts labelled free on download sites are free for personal use only, which matters if you're an artist selling designs." },
        { p: "Want the look as copy-paste text for a caption instead? The [tattoo font generator](/tattoo-font-generator) shows blackletter, script and typewriter styles you can paste anywhere." },
      ],
    },
  ],
  faq: [
    { q: "What is the most popular font for tattoos?", a: "Heavy Old English blackletter and slanted cursive script are the two most requested lettering styles. UnifrakturCook and Mrs Saint Delafield are free fonts that cover each." },
    { q: "What is a good cursive tattoo font?", a: "Mrs Saint Delafield for a bold signature look, Pinyon Script for formal copperplate, and Herr Von Muellerhoff for something that looks handwritten." },
    { q: "What font do fine-line tattoos use?", a: "Fine-line lettering is usually a thin script. Italianno is the closest free font; Mr De Haviland is a slightly more open option." },
    { q: "Which tattoo font is easiest to read?", a: "Great Vibes is the most legible script here, and Courier Prime is the plainest option overall. Blackletter becomes hard to read in long phrases." },
    { q: "How do I preview a tattoo font on my own words?", a: "Type into the box at the top of this page. Every card updates with your text in that font." },
    { q: "Can I get a tattoo font on my phone?", a: "Installed fonts won't change Instagram or messages. For text you can paste, use the [tattoo font generator](/tattoo-font-generator)." },
  ],
  tools: ["/tattoo-font-generator", "/old-english-tattoo-font", "/latin-tattoo-font"],
};

export default page;
