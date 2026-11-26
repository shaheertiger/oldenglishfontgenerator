// @retired 2026-11-26: daily-batch page (Nov 2-19) with 0 Bing impressions; now 410. Source kept on purpose (we don't delete files); not registered or served.
import type { PageContent } from "./types";

const page: PageContent = {
  slug: "victorian-font-generator",
  title: "Victorian Font Generator — 12 Cursive & Gothic Styles",
  description:
    "Victorian font generator: copperplate-style cursive, Gothic Revival blackletter and ornate poster lettering in 12 copy-and-paste styles, plus free fonts.",
  h1: "Victorian Font Generator",
  crumb: "Victorian Font Generator",
  intro:
    "This Victorian font generator turns your text into 12 styles from the 1837–1901 era: flowing copperplate-style cursive, the Gothic Revival blackletter of churches and certificates, and ornate poster lettering with fleurons. Type a name, a shop sign or an invitation line and copy any row. The table further down lists free fonts with the same look for anything you plan to print.",
  tool: {
    styles: [
      "script", "bold-script", "script-spaced", "oe-cursive", "bold-cursive", "fraktur",
      "bold-fraktur", "deco-fleuron", "deco-hedera", "varsity-outline", "bold-serif", "frame-white",
    ],
    sample: "The Apothecary",
    placeholder: "Type a name, a shop sign or an invitation line…",
    presets: ["The Apothecary", "Mr & Mrs Whitmore", "Est. 1887", "Curiosities", "A Victorian Christmas"],
  },
  stylesHeading: "Victorian lettering styles",
  howTo: {
    heading: "How to make text look Victorian",
    steps: [
      ["Pick the right kind of Victorian", "Cursive for letters and invitations, blackletter for churches and certificates, bold serif and outline for shop signs and posters."],
      ["Add one ornament", "A ❦ fleuron or a framed line reads as a 19th-century printer's touch; three ornaments read as clutter."],
      ["Copy, or switch to a real font", "Copied text is fine for a bio or a caption. For a printed sign or invitation, use one of the free fonts below."],
    ],
  },
  sections: [
    {
      h2: "What did Victorian lettering actually look like?",
      blocks: [
        { p: "There was no single Victorian font. Queen Victoria's reign covered more than six decades of booming print, so the period's lettering falls into three families, each with its own job:" },
        {
          table: {
            head: ["Family", "Where you saw it", "Closest styles here"],
            rows: [
              ["Copperplate and Spencerian script", "Letters, ledgers, invitations, calling cards; handwriting taught in schools", "Victorian cursive rows"],
              ["Gothic Revival blackletter", "Churches, Bibles, certificates, newspaper titles, memorials", "Fraktur and Bold Fraktur, and Fraktur capitals with script"],
              ["Ornate display type", "Playbills, shop fronts, patent medicine labels, wanted posters", "Bold serif, outline and framed rows"],
            ],
          },
        },
        { p: "The Gothic Revival is why blackletter feels Victorian as well as medieval. Architects such as Augustus Pugin, who designed much of the interior of the Palace of Westminster, pushed medieval forms back into fashion, and lettering followed. The [medieval font generator](/font-generator/medieval) has the older, manuscript side of the same letters." },
      ],
    },
    {
      h2: "Victorian cursive: copperplate and Spencerian",
      blocks: [
        { p: "Victorian handwriting was formal and slanted, with thick downstrokes and hairline upstrokes made by a flexible pointed pen. In Britain the standard hand was copperplate, or English roundhand, named after the engraved copper plates used to print writing manuals. In the United States, Platt Rogers Spencer's Spencerian script became the business and school hand from the mid-1800s; the Coca-Cola logo is a well-known descendant." },
        { p: "The cursive rows in the generator use Unicode's mathematical script letters, which have that slanted, looped shape but none of the thick-and-thin contrast of a real pen. For an invitation or a wedding sign, a real font does it far better; see the table below and our [wedding invitation guide](/blog/old-english-wedding-invitations)." },
      ],
    },
    {
      h2: "Free fonts with a Victorian look",
      blocks: [
        { p: "All of these are free under the SIL Open Font License, so they're fine for printed signs, labels, invitations and products. Glyph counts are from our own measurement of each font file." },
        {
          table: {
            head: ["Font", "Victorian style", "Glyphs", "Good for"],
            rows: [
              ["Pinyon Script", "Copperplate-style script", "836", "Invitations, place cards, labels"],
              ["Great Vibes", "Formal flowing script", "2,025", "Names and headings; very large character set"],
              ["Italianno", "Light calligraphic script", "814", "Elegant subtitles at larger sizes"],
              ["Mrs Saint Delafield", "Signature-style script", "238", "A single name or signature line"],
              ["UnifrakturMaguntia", "Gothic Revival blackletter", "270", "Church notices, certificates, mastheads"],
              ["Rye", "19th-century wood type", "271", "Posters, apothecary and saloon signs"],
            ],
          },
        },
        { p: "Preview them with your own words on the [free fonts page](/fonts), or browse more pointed-pen scripts in the [calligraphy fonts](/fonts/calligraphy) collection. Script fonts need room: set them larger than you would a plain font, and never in all capitals." },
      ],
    },
  ],
  built:
    "Cursive rows use Mathematical Script (U+1D49C–U+1D4CF, with eleven letters from the Letterlike Symbols block) and Bold Script (U+1D4D0–U+1D503). Blackletter rows use Mathematical Fraktur and Bold Fraktur. The outline row uses Double-Struck letters (U+1D538–U+1D56B), and the fleurons ❦ and ❧ are U+2766 and U+2767.",
  related: {
    heading: "More historical lettering",
    hrefs: ["/font-generator/medieval", "/renaissance-font-generator", "/old-english-cursive", "/newspaper-masthead-font", "/diploma-font", "/old-english-text-to-image"],
  },
  faq: [
    { q: "What fonts were used in the Victorian era?", a: "Handwriting was mostly copperplate in Britain and Spencerian in the US. Printers used blackletter for formal and religious work and a huge range of bold, decorated display types, including slab serifs and wood types, for posters and advertising." },
    { q: "Is Old English a Victorian font?", a: "Blackletter is medieval in origin, but the Victorians revived it heavily during the Gothic Revival, so it fits Victorian churches, certificates and newspaper titles." },
    { q: "What is the best free Victorian cursive font?", a: "Pinyon Script is the closest free match to copperplate. Great Vibes is bolder and easier to read at small sizes." },
    { q: "Can I use Victorian fonts on Instagram or TikTok?", a: "Yes, the copy-and-paste styles here work in bios, names and captions. Font files such as Pinyon Script only work in apps that let you choose a font, like Canva or Word." },
    { q: "Why does the cursive text look thin compared with real copperplate?", a: "Unicode script letters have an even stroke. Real copperplate swells on downstrokes from pen pressure, which only a proper font or hand lettering can reproduce." },
    { q: "Is steampunk lettering Victorian?", a: "Steampunk borrows Victorian display type, brass-plate engraving and industrial labels, then adds fantasy. The bold serif, outline and framed rows get close to the look, especially with a ❦ fleuron." },
  ],
};

export default page;
