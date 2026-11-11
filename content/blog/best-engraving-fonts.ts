import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "best-engraving-fonts",
  title: "Best Engraving Fonts: 7 Blackletter Picks by Method",
  description:
    "Best engraving fonts for laser, rotary and hand engraving: 7 free blackletter and script picks, how Engravers Old English fits in, and hairline limits.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Laser, rotary and hand engraving each forgive different things. Seven free fonts matched to the method, and why Engravers Old English is still the reference.",
  related: ["best-fonts-for-embroidery-blackletter", "best-fonts-for-signs-blackletter", "is-old-english-font-free-commercial-use"],
  body: [
    { type: "p", text: "The best engraving font depends on the machine more than on taste. For **laser engraving**, nearly any blackletter works if it's large enough, and **UnifrakturMaguntia** gives the most traditional result. For **rotary engraving**, where a spinning cutter traces each stroke, choose heavier, simpler shapes such as **Pirata One** or **Germania One**. For the trophy-shop look people call \"engravers' Old English\", the free stand-ins below get close; the original Engravers Old English is a commercial typeface from the early 1900s, covered on our [Old English Text MT](/fonts/old-english-text-mt) page." },
    { type: "h2", text: "How does the engraving method change the font choice?" },
    { type: "table", head: ["Method", "How it marks", "What fails first", "Font advice"], rows: [
      ["Laser (CO₂, fibre, diode)", "Burns or vaporises the surface along the shape", "Hairlines on rough or dark materials; tiny counters that char shut on wood", "Most fonts work at decent size; go heavier on wood and leather"],
      ["Rotary / drag", "A cutter or diamond tip traces strokes", "Strokes thinner than the tool tip; tight inside corners", "Simple, even strokes; consider single-line fonts for very small text"],
      ["Hand engraving", "A graver cuts by hand", "Nothing in the font; the engraver redraws letters", "Bring a reference, not a file; let the engraver adapt it"],
    ]},
    { type: "p", text: "On a rotary machine, an outline font is cut by tracing the outline and then clearing the inside, which can take many passes on bold letters. Shops often use single-line (\"single-stroke\") fonts for small serial numbers or dates, then switch to an outline font for names and titles." },
    { type: "h2", text: "Which 7 free fonts engrave best?" },
    { type: "table", head: ["Font", "Style", "Best method", "Typical job"], rows: [
      ["UnifrakturMaguntia", "Classic book Fraktur", "Laser", "Plaques, certificates on metal, award titles"],
      ["[UnifrakturCook](/fonts/unifrakturcook)", "Heavy Fraktur", "Laser on wood or leather", "Signs, boxes, belts, bold names"],
      ["[Pirata One](/fonts/pirata-one)", "Simplified blackletter", "Rotary or laser", "Small names on tags, pens, lighters"],
      ["Germania One", "Condensed blackletter", "Rotary", "Narrow surfaces: rings, bracelets, knife blades"],
      ["Texturina", "Textura-inspired text face", "Laser", "Longer inscriptions where pure Fraktur would be too dense"],
      ["Pinyon Script", "Copperplate script", "Laser on metal or glass", "Wedding dates, monograms, gift messages"],
      ["Cinzel Decorative", "Roman capitals, decorative", "Laser or rotary", "Formal trophies when blackletter is too dark"],
    ]},
    { type: "p", text: "All seven are free under the SIL Open Font License, which allows commercial engraving work. Compare them on [Old English fonts](/fonts/old-english), [calligraphy fonts](/fonts/calligraphy) and the full [font comparison](/fonts)." },
    { type: "h2", text: "What is Engravers Old English, and is there a free version?" },
    { type: "p", text: "Engravers Old English is a blackletter released by American Type Founders in the early 1900s and commonly attributed to Morris Fuller Benton. It became the standard look for trophies, diplomas and stationery, and digital versions are sold commercially (Bitstream's is labelled Engravers' Old English BT). There is no official free version. Files labelled with that name on free-download sites are usually unlicensed copies. The closest free alternatives are UnifrakturMaguntia for the lighter book feel and [Cloister Black](/fonts/cloister-black)-style lookalikes for the heavier one." },
    { type: "h2", text: "How do I prepare blackletter text for an engraver?" },
    { type: "ol", items: [
      "Set the text in your font, then convert it to outlines or paths so the engraver's software can't swap the font. In Inkscape that's Path → Object to Path; see the [Inkscape guide](/fonts/old-english/inkscape).",
      "Check the smallest stroke against the engraver's minimum line width; ask them, since it varies by machine and material.",
      "For curved surfaces like rings or tumblers, keep text short and give the engraver the real measurements.",
      "Proof at actual size on paper. Blackletter that looks fine on screen is often too small in real life.",
    ]},
    { type: "faq", items: [
      { q: "What font is used for engraving trophies?", a: "Traditionally Engravers Old English and similar blackletter, plus Roman capitals and scripts. Free stand-ins include UnifrakturMaguntia and Cinzel Decorative." },
      { q: "What is the best font for laser engraving?", a: "For Old English lettering, UnifrakturMaguntia on metal and UnifrakturCook on wood or leather, where a heavier stroke survives charring." },
      { q: "Why does my engraving look blobby?", a: "Letters are too small for the method or material. Enclosed spaces burn or cut shut. Increase the size or switch to a simpler font like Pirata One." },
      { q: "Can I sell engraved products made with free fonts?", a: "Yes, when the font uses the SIL Open Font License. Fonts that came with your computer or software may have different terms." },
      { q: "Is Old English Text MT the same as Engravers Old English?", a: "No. They're different blackletter typefaces with a similar look; Old English Text MT ships with Microsoft Office, while Engravers Old English is sold separately." },
    ]},
    { type: "cta", text: "Export engraving-ready blackletter as SVG with the", href: "/old-english-text-to-image", label: "Old English text to image tool" },
  ],
};

export default post;
