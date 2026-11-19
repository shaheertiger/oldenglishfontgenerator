import type { PageContent } from "./types";

const page: PageContent = {
  slug: "renaissance-font-generator",
  title: "Renaissance Font Generator — 12 Italic & Roman Styles",
  description:
    "Renaissance font generator: chancery italic, Roman capitals, long s and fleurons in 12 copy-and-paste styles, plus free fonts like real Renaissance type.",
  h1: "Renaissance Font Generator",
  crumb: "Renaissance Font Generator",
  intro:
    "This Renaissance font generator gives you 12 styles drawn from 15th- and 16th-century Italy: slanted chancery italic, Roman inscription capitals, a capital-plus-italic mix, the long s and printers' ornaments. Type a title, a name or a quote and copy any row. Renaissance lettering is the opposite of blackletter: open, round and light, which is exactly why the humanists invented it.",
  tool: {
    styles: [
      "italic-serif", "bold-italic-serif", "roman-initial-italic", "roman-inscription", "bold-serif", "script",
      "bold-script", "long-s", "interpunct", "deco-fleuron", "deco-hedera", "fraktur",
    ],
    sample: "Ars longa, vita brevis",
    placeholder: "Type a title, a motto or a name…",
    presets: ["Ars longa, vita brevis", "Leonardo", "Renaissance Faire", "Florentia MDXX", "The Merchant of Venice"],
  },
  stylesHeading: "Renaissance lettering styles",
  howTo: {
    heading: "How to make text look Renaissance",
    steps: [
      ["Start with italic", "The slanted chancery hand is the signature Renaissance look. Use it for a whole line, or pair a Roman capital with italic lowercase."],
      ["Add one period detail", "A long s, a raised dot between words or a ❦ fleuron at the end says 'old book' without making the text hard to read."],
      ["Copy and paste", "Tap Copy. For a faire banner or an invitation you will print, use one of the free fonts listed below instead of copied text."],
    ],
  },
  sections: [
    {
      h2: "Renaissance vs medieval lettering",
      blocks: [
        { p: "Around 1400, scholars in Florence such as Poggio Bracciolini and Niccolò Niccoli grew tired of the cramped gothic script in the books around them. Copying old manuscripts, they found the clearer Carolingian minuscule of the 9th century, took it for genuinely ancient Roman writing, and modelled a new hand on it: humanist minuscule. A quicker, slanted version became the chancery italic used in papal offices. Both were meant to look clean and classical, in deliberate contrast to blackletter, which the same humanists dismissed as \"gothic\"." },
        {
          table: {
            head: ["", "Medieval (gothic)", "Renaissance (humanist)"],
            rows: [
              ["Example", "𝔄𝔯𝔰 𝔩𝔬𝔫𝔤𝔞", "𝐀𝑟𝑠 𝑙𝑜𝑛𝑔𝑎"],
              ["Shapes", "Narrow, angular, broken strokes", "Round, open, continuous strokes"],
              ["Spacing", "Tight letters, dark page", "Wider letters, light page"],
              ["Capitals", "Ornate, often unreadable alone", "Based on Roman stone inscriptions"],
              ["Where it lives on", "Tattoos, mastheads, diplomas", "Almost every book typeface, including the one you are reading"],
            ],
          },
        },
        { p: "If you want the darker manuscript look instead, the [medieval font generator](/medieval-font-generator) has thorns, illuminated capitals and Fraktur." },
      ],
    },
    {
      h2: "Italic, Roman capitals and printers' ornaments",
      blocks: [
        { p: "Three Renaissance inventions are behind the styles above:" },
        {
          ul: [
            "**Italic type.** The Venetian printer Aldus Manutius issued the first italic typeface in 1501, cut by Francesco Griffo and modelled on chancery handwriting. The Renaissance Italic rows use Unicode's mathematical italic, the closest standard characters to it.",
            "**Roman capitals.** Humanists copied letters from imperial inscriptions such as the base of Trajan's Column in Rome (AD 113). The Roman Inscription style sets text in capitals, writes U as V and J as I, and separates words with a raised dot, as carvers did.",
            "**Fleurons.** Printers decorated pages with small flower and leaf ornaments; ❦ and ❧, the hedera or ivy leaf, are still in Unicode today.",
          ],
        },
        { p: "Ludovico degli Arrighi's La Operina (1522) taught chancery italic to anyone who could buy a book, which is one reason the style spread across Europe. Its letters still shape calligraphy courses; our [how to write Old English](/how-to-write-old-english) guide covers the broad-pen basics both styles share." },
      ],
    },
    {
      h2: "Free fonts that look Renaissance",
      blocks: [
        { p: "Copy-and-paste italic is fine for a caption, but print work deserves a real font. These are free on Google Fonts under the SIL Open Font License, so they're fine for faire signage, menus and merchandise." },
        {
          table: {
            head: ["Font", "Based on", "Good for"],
            rows: [
              ["EB Garamond", "Claude Garamond's 16th-century French roman and Robert Granjon's italic", "Body text, invitations, programmes"],
              ["Cormorant", "Garamond-style display type", "Large headings and posters"],
              ["Cinzel", "Roman inscription capitals", "Titles, banners, logos (capitals only)"],
              ["IM Fell English", "17th-century types collected by John Fell", "A rough, hand-printed look"],
              ["Uncial Antiqua", "Early medieval uncial, not Renaissance", "Celtic and fantasy themes; see [Uncial Antiqua](/fonts/uncial-antiqua)"],
            ],
          },
        },
        { p: "For a Renaissance faire, pair Cinzel or Roman capitals for the event name with EB Garamond italic for details. Avoid blackletter for the main title if you want the period to read as Renaissance rather than medieval." },
      ],
    },
  ],
  built:
    "Italic rows use Mathematical Italic (U+1D434–U+1D467, with ℎ U+210E for h) and Bold Italic (U+1D468–U+1D49B). Roman rows use Mathematical Bold (U+1D400–U+1D433). The long s is U+017F, the word dot is U+00B7 and the fleurons are U+2766 and U+2767. Script rows come from Mathematical Script, which looks closer to later copperplate than to Renaissance hands.",
  related: {
    heading: "More historical lettering",
    hrefs: ["/medieval-font-generator", "/latin-tattoo-font", "/illuminated-letters", "/ancient-font-generator", "/old-english-cursive", "/diploma-font"],
  },
  faq: [
    { q: "What font was used in the Renaissance?", a: "Scribes wrote humanist minuscule and chancery italic by hand, and printers cut roman and italic types based on them, such as those of Nicolas Jenson, Aldus Manutius and later Claude Garamond. Blackletter stayed common in Germany and for legal and religious texts." },
    { q: "Is Old English a Renaissance font?", a: "No. Old English or blackletter is medieval and Renaissance humanists rejected it. Use italic and Roman capitals for a Renaissance look and blackletter for a medieval one." },
    { q: "What font should I use for a Renaissance faire sign?", a: "Cinzel or another Roman-capital font for the main words and a Garamond italic for smaller text. Both are free for commercial use." },
    { q: "Why does the italic h look different from the other letters?", a: "Unicode's mathematical italic set has a gap where h should be, because an italic h (ℎ, the Planck constant) already existed elsewhere. It comes from a different block, so some fonts draw it slightly differently." },
    { q: "Can I use these styles on Instagram or in a document?", a: "On Instagram, TikTok and Discord, yes, in bios, names and captions. In Word or Google Docs, choose a real font such as EB Garamond instead; copied Unicode italics can't be spell-checked and may confuse screen readers." },
    { q: "What does the long s (ſ) mean?", a: "It is simply an old form of lowercase s, used at the start and middle of words until around 1800. It isn't an f, though it looks like one; see our [long s guide](/blog/long-s-explained)." },
  ],
};

export default page;
