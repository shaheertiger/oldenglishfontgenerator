import type { PageContent } from "./types";

const page: PageContent = {
  slug: "biker-font-generator",
  title: "Biker Font Generator — 12 Rocker Patch Lettering Styles",
  description:
    "Biker font generator: turn a ride name, year or slogan into 12 heavy Old English patch styles to copy and paste, with tips for vest and jacket mockups.",
  h1: "Biker Font Generator",
  crumb: "Biker Font Generator",
  intro:
    "Biker fonts are mostly one thing: heavy Old English capitals, the lettering stitched on rocker patches for decades. Type a slogan, a year or a road name below and see it in 12 patch-style variations, from plain bold blackletter to versions flanked by skulls, swords and crosses, ready to paste into a post or a design brief.",
  tool: {
    styles: [
      "bold-fraktur-caps", "frame-banner", "wide-bold", "bold-fraktur", "deco-skull", "deco-maltese",
      "deco-swords", "roman-date", "gothic-framed", "distressed", "deco-cross", "frame-block",
    ],
    sample: "Live to Ride",
    placeholder: "Slogan, road name or year…",
    presets: ["Live to Ride", "Est. 1969", "Ride Free", "Iron Horse", "Highway 61", "Born to Roam"],
  },
  stylesHeading: "Biker lettering styles",
  howTo: {
    heading: "How to mock up biker lettering",
    steps: [
      ["Keep it short", "Patch text is read from across a parking lot. Two or three words in capitals beat a full sentence."],
      ["Try the all-caps rows first", "Bold Fraktur All Capitals and Wide Bold Fraktur are closest to stitched rocker lettering."],
      ["Hand it to the maker", "Paste your pick into a message to the embroiderer or printer, or export a PNG from the text to image tool for a cleaner reference."],
    ],
  },
  sections: [
    {
      h2: "What are the parts of a biker patch called?",
      blocks: [
        { p: "Motorcycle club vests follow a layout that riders recognise at a glance, which is why the lettering style matters so much. Here is the vocabulary you'll hear from patch makers:" },
        {
          table: {
            head: ["Part", "Where it sits", "What it usually says"],
            rows: [
              ["Top rocker", "Curved strip across the shoulders", "The club's name"],
              ["Center patch", "Middle of the back", "The club's logo or emblem"],
              ["Bottom rocker", "Curved strip below the emblem", "Territory: a state, region or city"],
              ["MC tab", "Small rectangle beside the emblem", "The letters MC (motorcycle club)"],
              ["Front patches", "Chest, left and right", "Rider name, role or smaller slogans"],
            ],
          },
        },
        { p: "A vest with top rocker, center patch and bottom rocker is called a three-piece patch. Old English capitals are by far the most common lettering on rockers, though the exact shapes are usually redrawn by the patch maker to fit the curve." },
      ],
    },
    {
      h2: "Can I put a club-style patch on my own jacket?",
      blocks: [
        { p: "For personal merch, keep it generic. A three-piece layout, especially with a territory on the bottom rocker, signals membership of a real club, and wearing one you didn't earn can cause genuine trouble. Slogans like Ride Free or Live to Ride on a single patch, or your own name on a front patch, are the safe way to get the look." },
        { p: "Brand logos are another line not to cross. Harley-Davidson's bar-and-shield, for example, is a trademark and isn't blackletter at all, so a font won't reproduce it and you shouldn't try. Use Old English lettering for your own words instead." },
      ],
    },
    {
      h2: "Which real fonts work for biker patches and shirts?",
      blocks: [
        {
          table: {
            head: ["Job", "Free font to try", "Why"],
            rows: [
              ["Embroidered rocker", "[UnifrakturCook](/fonts/unifrakturcook)", "Thick strokes survive stitching better than hairline blackletter."],
              ["Screen-printed tee", "[Pirata One](/fonts/pirata-one)", "Simplified shapes stay readable at chest size."],
              ["Event poster", "[Metal Mania](/fonts/metal-mania)", "Spiky and loud for rally or bike-night flyers."],
              ["Vintage garage sign", "Rye", "Western wood-type capitals, a common partner for blackletter."],
            ],
          },
        },
        { p: "The [clothing brand fonts](/fonts/clothing-brand) collection has more options for apparel, with notes on printing small lettering." },
      ],
    },
  ],
  built:
    "Most rows use Mathematical Bold Fraktur (U+1D56C–U+1D59F), the heaviest blackletter in Unicode, set in capitals for a patch look. The decorated rows add ☠ ✠ ⚔ ☩ from the Miscellaneous Symbols and Dingbats blocks, and the year style converts digits to Roman numerals.",
  related: {
    heading: "More lettering for riders",
    hrefs: ["/gothic-symbols", "/gothic-font-generator", "/metal-font-generator", "/tattoo-font-generator", "/old-english-text-to-image", "/old-english-numbers"],
  },
  faq: [
    { q: "What font do biker patches use?", a: "Most rocker patches use Old English or similar heavy blackletter capitals, redrawn by the patch maker to follow the curve. There isn't one official biker font." },
    { q: "What is a rocker patch?", a: "A curved strip of lettering on the back of a vest or jacket. The top rocker usually carries the club name and the bottom rocker a territory." },
    { q: "Can I copy this text into a patch order?", a: "Yes, as a reference. Embroiderers digitise the lettering themselves, so send the style you like plus the exact wording." },
    { q: "How do I write a year in biker lettering?", a: "Type it with digits, such as Est. 1969, and look at the Roman Numeral Date style, which gives Est. MCMLXIX in bold blackletter." },
    { q: "Is there a Harley-Davidson font?", a: "Harley-Davidson's logo is custom artwork and a registered trademark, not a downloadable font. This page doesn't reproduce it; use your own words in Old English lettering instead." },
    { q: "Will these symbols show on Facebook and Instagram?", a: "The skull, cross and sword symbols are long-standing Unicode characters and display on current phones and computers." },
    { q: "Which style is best for a vest mockup?", a: "Bold Fraktur All Capitals, because rockers are almost always set in capitals with a heavy stroke." },
  ],
};

export default page;
