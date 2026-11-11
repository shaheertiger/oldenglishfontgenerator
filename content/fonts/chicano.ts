import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "chicano",
  title: "Chicano Fonts — 10 Free Lettering Fonts for Tattoos",
  description:
    "Chicano fonts you can download free: 10 open-licence blackletter and script faces that rebuild cholo-style lettering for tattoos, shirts and flash.",
  h1: "Chicano Fonts",
  crumb: "Chicano Fonts",
  intro:
    "There is no single Chicano font: the lettering grew out of hand-drawn work by tattooers, sign painters and car-club artists in Los Angeles, and the best of it is still drawn by hand. What you can download free are its 10 building blocks below, four heavy blackletters for the Old English half and six sharp, high-contrast scripts for the cursive half. All are open-licence, so you can use them for tattoo references, shirts and flyers.",
  sample: "Varrio Loco",
  fonts: [
    "UnifrakturCook", "UnifrakturMaguntia", "Pirata One", "Grenze Gotisch",
    "Mrs Saint Delafield", "Rouge Script", "Herr Von Muellerhoff", "Monsieur La Doulaise", "Kaushan Script", "Mr De Haviland",
  ],
  notes: {
    "UnifrakturCook": "The heaviest Fraktur here and the usual base for cholo block lettering. Its fat strokes survive being outlined and shadowed, which is how most Chicano pieces finish a word.",
    "UnifrakturMaguntia": "Lighter and more upright than Cook. Use it when you want a crisp Old English capital at the start of a script name rather than a whole word in blackletter.",
    "Pirata One": "Simplified blackletter with open counters. Good for the smaller second line under a big name, such as a neighbourhood or a year, where Fraktur would close up.",
    "Grenze Gotisch": "A variable font that goes from hairline to black. Pull it to the heaviest end for chunky gang-style capitals, or keep it light for elegant lettering on a memorial piece.",
    "Mrs Saint Delafield": "The closest free script to the long, slanted cursive used for names in Chicano tattoos. The capitals sweep wide, so give the first letter room.",
    "Rouge Script": "Compact with thick downstrokes, nearer to sign-painter brush lettering. Reads well on a shirt from a distance.",
    "Herr Von Muellerhoff": "Narrow, steeply slanted handwriting. Works for a short word like Familia or Mi Vida stacked under a blackletter line.",
    "Monsieur La Doulaise": "Swash capitals with lots of curl. Use it for one initial or a single word; whole phrases get tangled.",
    "Kaushan Script": "A rough brush script with more texture than the others. Suits flyers, lowrider show posters and streetwear graphics.",
    "Mr De Haviland": "A thin, airy script for fine-line work or a delicate date line next to heavy lettering.",
  },
  sections: [
    {
      h2: "Why can't I just download a Chicano font?",
      blocks: [
        { p: "Chicano lettering is a hand style, closer to graffiti or sign painting than to type. Artists bend letters around the body, exaggerate capitals, add drop shadows and change stroke weight from one letter to the next. Fonts sold under the name usually freeze one artist's version of that style. Free fonts don't do that, but they give you clean versions of the two ingredients: Old English capitals and slanted script." },
        { p: "Treat the fonts as a starting draft. Set the word, print it, then let your tattooer or designer redraw it. If you only need the look as text on Instagram or in a caption, the [Chicano font generator](/chicano-font-generator) makes copy-and-paste Unicode instead of a font file." },
      ],
    },
    {
      h2: "How do I combine blackletter and script the Chicano way?",
      blocks: [
        { table: { head: ["Layout", "Top line", "Second line", "Tip"], rows: [
          ["Name and surname", "UnifrakturCook", "Mrs Saint Delafield", "Make the blackletter line about twice the height of the script."],
          ["Barrio or city piece", "Grenze Gotisch at its heaviest weight", "Pirata One", "Arch the top line; keep the second line straight."],
          ["Memorial with dates", "Mr De Haviland for the name", "UnifrakturMaguntia for the dates", "Roman numerals often look cleaner than digits; try the [Old English numbers](/old-english-numbers) page."],
          ["Shirt or flyer", "UnifrakturCook", "Kaushan Script", "Add a thick outline in your design app so both fonts share one edge colour."],
        ] } },
        { p: "Heavier mixes like this also appear in [gangster lettering](/gangster-font-generator), which leans more on script. For more blackletter options, see the main [Old English fonts](/fonts/old-english) collection or the single-font guide to [UnifrakturCook](/fonts/unifrakturcook)." },
      ],
    },
    {
      h2: "Can I use these fonts for a tattoo or merch I sell?",
      blocks: [
        { p: "Yes. All 10 are under the SIL Open Font License, which allows commercial use, including printed shirts, stickers and tattoo flash you sell. What the licence doesn't cover is somebody else's artwork: copying a tattooer's hand-drawn piece is a different matter from setting a word in a free font." },
      ],
    },
  ],
  faq: [
    { q: "What font is used for Chicano lettering?", a: "Mostly none: it's hand-drawn. Designers who need a font usually pair a heavy blackletter such as UnifrakturCook with a slanted script such as Mrs Saint Delafield, then redraw the result." },
    { q: "Is cholo font the same as Chicano font?", a: "People use the two names for the same style: Old English capitals, cursive script and heavy outlines that came out of Mexican-American neighbourhoods in Southern California." },
    { q: "Are there free Chicano fonts for commercial use?", a: "The 10 fonts on this page are free for commercial use under the SIL Open Font License. Fonts sold or shared elsewhere as Chicano fonts have their own licences, so read them before printing anything for sale." },
    { q: "Which free font is best for a Chicano name tattoo?", a: "Mrs Saint Delafield for a script name, or UnifrakturCook if you want the whole name in heavy Old English. Show your artist both and let them adjust the spacing." },
    { q: "How do I get Chicano letters on Instagram?", a: "Installed fonts don't work in Instagram bios. Use the [Chicano font generator](/chicano-font-generator), which turns your text into Unicode characters you can paste." },
    { q: "Can I use these fonts in Cricut or Canva?", a: "Yes. Install them on your computer for Cricut Design Space, or upload them to Canva on a paid plan. See the [Cricut guide](/fonts/old-english/cricut) and [Canva guide](/fonts/old-english/canva)." },
  ],
  tools: ["/chicano-font-generator", "/gangster-font-generator", "/old-english-tattoo-font"],
};

export default page;
