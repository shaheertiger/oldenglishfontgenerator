import type { PageContent } from "./types";

// Restored Nov 2026 at its original URL, which ranked in Bing before the
// rebuild removed it.
const page: PageContent = {
  slug: "font-generator/graffiti",
  file: "font-generator-graffiti",
  title: "Graffiti Font Copy and Paste – 14 Street-Style Text Styles",
  description:
    "Graffiti font copy and paste: 14 street-style text styles – bubble, heavy italic, Chicano gothic, crowned tags. Type your tag, tap Copy. Free.",
  h1: "Graffiti Font Copy and Paste",
  crumb: "Graffiti Font",
  intro:
    "Graffiti font copy and paste means turning your name or tag into heavy, street-style Unicode letters you can paste as text, and this page gives you 14 of them. Spray-painted pieces are drawn by hand, so no text can copy a real wildstyle, but a graffiti font copy paste set can borrow its moves: fat bubble letters, forward-leaning bold, Chicano-style blackletter and crowned or slashed tags. Think of it as a street font generator copy and paste kit for handles and captions.",
  tool: {
    styles: [
      "u-bubble-filled", "u-bubble", "u-sans-bold", "u-sans-bold-italic", "u-sans-bold-spaced", "bold-fraktur",
      "chicano", "gangster-initials", "frame-block", "u-slash-through", "u-stacked-bold-strike", "deco-crown",
      "u-bent", "u-outline-gothic",
    ],
    sample: "DREAM BIG",
    placeholder: "Type your tag or crew name…",
    presets: ["DREAM BIG", "Kaze", "No Limits", "Crew 81", "Rebel"],
  },
  stylesHeading: "Graffiti text styles",
  howTo: {
    heading: "How to make a graffiti-style tag",
    steps: [
      ["Keep it short", "Tags are usually one word of three to six letters. Short words survive heavy styles."],
      ["Choose throw-up or tag", "Bubble styles feel like a quick round throw-up; Sans Bold Italic feels like a fast tag; Chicano and Bold Fraktur feel like lettering on a wall in LA."],
      ["Copy and add a mark", "Copy the result and finish it with a crown ♛, a star ★ or an arrow ➤."],
    ],
  },
  sections: [
    {
      h2: "Graffiti letters A to Z: bubble, bold italic and blackletter",
      blocks: [
        { p: "Three alphabets that cover most street looks. Bubble letters are the round, inflated shapes of a throw-up; Sans Bold Italic leans forward like a hand moving at speed; Bold Fraktur is the heavy blackletter that turns up in Chicano and tattoo-influenced pieces." },
        { chart: { styles: ["u-bubble", "u-sans-bold-italic", "bold-fraktur"], sets: ["upper", "lower"] } },
      ],
    },
    {
      h2: "1. Which graffiti style should I use for my tag?",
      blocks: [
        {
          table: {
            head: ["Graffiti term", "Closest style here", "Why"],
            rows: [
              ["Tag (quick signature)", "Sans Bold Italic", "Slanted, fast, readable"],
              ["Throw-up (round two-color letters)", "Bubble Filled or Bubble", "Inflated round letters"],
              ["Blockbuster (big square letters)", "Sans Bold Spaced or Block Frame", "Wide, blocky, heavy"],
              ["Chicano lettering", "Chicano / Lowrider", "Blackletter capitals with script and a cross"],
              ["Crossed-out (a struck tag)", "Slashed or Bold Slash", "A line through every letter"],
              ["Wildstyle (interlocking arrows)", "None", "Too complex for text; needs hand lettering"],
            ],
          },
        },
        { p: "Want more of the Chicano direction? The [Chicano font generator](/chicano-font-generator) and the [gangster font](/font-generator/gangster) page are built around it." },
      ],
    },
    {
      h2: "2. Why doesn't text look like a real graffiti piece?",
      blocks: [
        { p: "A painted piece has outlines, fills, highlights, drop shadows, drips and arrows, all drawn around letters the writer invented. Unicode only offers a fixed set of letter shapes, one color, no layering. So text can hint at graffiti but not reproduce it. For a poster, a shirt or a logo, sketch the letters by hand or start from an open-licence graffiti display font in a design app. If you only need a picture of your styled tag, the [text to image](/old-english-text-to-image) tool saves it as a PNG." },
      ],
    },
    {
      h2: "3. Graffiti font copy paste: what are the marks around some styles?",
      blocks: [
        { p: "Block Frame puts half-blocks ▌ ▐ on each side, like a wall section; Crowned adds ♛, a nod to the crown that writers draw over a name to claim they are the best on a line; Chicano adds a ✞. They are separate symbols, so you can delete them after pasting if you only want the letters." },
      ],
    },
  ],
  built:
    "Bubble styles use Enclosed Alphanumerics (Ⓐ–ⓩ) and the negative circled capitals 🅐–🅩; Sans Bold and Sans Bold Italic come from the Mathematical Sans-Serif ranges; Bold Fraktur and the Chicano mix come from Mathematical Bold Fraktur and Bold Script; slashes are the combining overlay U+0337.",
  related: {
    heading: "More street and bold lettering",
    hrefs: ["/chicano-font-generator", "/font-generator/gangster", "/tattoo-font-generator", "/font-generator/ransom-note", "/font-generator/scratchy", "/old-english-text-to-image"],
  },
  faq: [
    { q: "Is there a graffiti font I can copy and paste?", a: "Yes. Type your word above and copy one of the 14 styles. They are Unicode text, not a font file, so they paste like normal text." },
    { q: "Which style looks most like graffiti?", a: "Bubble Filled for a throw-up look and Sans Bold Italic for a tag. Chicano and Bold Fraktur suit West Coast lettering." },
    { q: "Can I make wildstyle graffiti with text?", a: "No. Wildstyle depends on interlocking, hand-drawn shapes that Unicode doesn't have. Use it as a starting sketch instead." },
    { q: "Why are bubble letters all capitals?", a: "The filled-circle set in Unicode only has capitals. The outlined Bubble style has lowercase ⓐ–ⓩ if you need them." },
    { q: "How do I add a crown to my tag?", a: "Copy the Crowned style, or paste ♛ or 👑 next to your name yourself." },
    { q: "Can I use a graffiti text style on a shirt?", a: "For printing, use a real graffiti display font or hand lettering. Unicode characters may be drawn by whatever font the design program substitutes." },
  ],
};

export default page;
