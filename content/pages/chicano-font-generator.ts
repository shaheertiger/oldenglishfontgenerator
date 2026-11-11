import type { PageContent } from "./types";

const page: PageContent = {
  slug: "chicano-font-generator",
  title: "Chicano Font Generator — Lowrider Lettering Copy & Paste",
  description:
    "Chicano font generator for lowrider and cholo-style lettering: bold blackletter capitals, script flow and cross frames. Copy and paste free.",
  h1: "Chicano Font Generator",
  crumb: "Chicano Font Generator",
  intro:
    "Chicano lettering grew out of the barrios of Los Angeles and the American Southwest: hand-painted on lowriders, written on walls, drawn in ballpoint, tattooed in fine black-and-grey. Its backbone is Old English, pushed bolder and given extra swing. This Chicano font generator gets you close with copy-paste text: heavy blackletter capitals, script lowercase and the crosses that often frame a name.",
  tool: {
    styles: ["chicano", "bold-cursive", "bold-fraktur", "deco-cross", "frame-banner", "illuminated", "bold-fraktur-caps", "roman-date", "deco-crown", "deco-rose", "frame-tibetan", "tattoo", "oe-cursive"],
    sample: "Mi Vida Loca",
    placeholder: "Type a name, barrio or phrase…",
    presets: ["Mi Vida Loca", "Familia Primero", "East Side", "Sonrisa Ahora", "Lowrider"],
  },
  stylesHeading: "Chicano and lowrider styles",
  howTo: {
    heading: "How to make Chicano-style text",
    steps: [
      ["Type it in title case", "The bold capital at the start of each word carries the style, so capitalise names and key words."],
      ["Choose your frame", "Plain, cross-framed or crowned. The cross is the classic look; the crown suits names."],
      ["Copy and adapt", "Paste into a caption or send it to an artist as a starting idea for real hand lettering."],
    ],
  },
  sections: [
    {
      h2: "Roots of Chicano lettering",
      blocks: [
        { p: "The style took shape in the mid-20th century among Mexican-American communities. Pachuco culture, car clubs and neighbourhood murals all fed into it, and in the 1970s and 80s tattoo artists in East LA turned it into the fine-line black-and-grey tradition still practised today. Lettering was often done freehand, so every artist developed their own capitals, flourishes and spacing." },
        { p: "Compared with classic Old English, Chicano letters tend to be taller, with exaggerated capitals, sharper serifs and decorative strokes that loop under the word. Phrases are frequently in Spanish or a mix of Spanish and English." },
      ],
    },
    {
      h2: "Common elements to combine",
      blocks: [
        { cards: [
          { h: "Heavy capitals", p: "A big ornate initial on each word, as in the Bold Fraktur and Illuminated Initials styles." },
          { h: "Script body", p: "Lowercase that flows, which is why the top style mixes bold blackletter with bold script." },
          { h: "Crosses and crowns", p: "Symbols of faith and pride that frame names and memorial pieces." },
          { h: "Roman numeral dates", p: "Birth years, anniversaries and area codes, often written in numerals." },
        ] },
      ],
    },
    {
      h2: "Respecting the style",
      blocks: [
        { p: "Chicano lettering is part of a living culture, and many phrases and symbols carry personal or community meaning. If you are planning a tattoo, look for an artist who works in the tradition. They'll know how to draw the letters properly and can tell you if a phrase has a meaning you didn't intend." },
      ],
    },
  ],
  built:
    "The signature style uses Bold Fraktur capitals (U+1D56C–U+1D585) followed by Mathematical Bold Script lowercase (U+1D4EA–U+1D503), framed by the Latin cross ✞ (U+271E). Dates use the same Roman numeral conversion as the numbers page, mapped into Bold Fraktur.",
  related: {
    heading: "Related lettering tools",
    hrefs: ["/old-english-tattoo-font", "/old-english-cursive", "/old-english-numbers", "/gothic-font-generator", "/old-english-name-generator", "/old-english-text-to-image", "/gangster-font-generator", "/biker-font-generator"],
  },
  faq: [
    { q: "What is Chicano font?", a: "A lettering style from Mexican-American culture, built on Old English blackletter with taller capitals, extra flourishes and a mix of script. It is traditionally hand-drawn rather than a single typeface." },
    { q: "Is Chicano lettering the same as cholo font?", a: "People often use the two terms for the same look. Cholo usually refers to the street and graffiti side; Chicano is the broader cultural term." },
    { q: "Can I copy this for a lowrider plaque or club logo?", a: "Use it to sketch ideas. A plaque or logo needs vector artwork, which a sign painter or designer can draw in the proper style." },
    { q: "Why does the script look thin next to the bold capitals?", a: "Unicode only has one bold script weight. Real Chicano lettering balances the weights by hand." },
    { q: "Does it work with Spanish accents?", a: "Yes. Accented letters like é and ñ keep their accents on the styled letter." },
  ],
};

export default page;
