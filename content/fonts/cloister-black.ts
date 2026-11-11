import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "cloister-black",
  title: "Cloister Black Font — 1904 ATF Blackletter & 5 Free Matches",
  description:
    "Cloister Black font: the 1904 American Type Founders blackletter, how it differs from Cloister Old Style, and a preview of your text in 5 free lookalike fonts.",
  h1: "Cloister Black Font",
  crumb: "Cloister Black",
  intro:
    "Cloister Black is an American blackletter released by American Type Founders in 1904 and credited to Morris Fuller Benton and Joseph W. Phinney. We can't show the font itself here, because the digital versions aren't open-licence. What the box below does is preview your words in five free fonts with the same broken, pointed shapes, which is the closest honest thing to a Cloister Black generator.",
  sample: "Cloister Black",
  fonts: ["UnifrakturMaguntia", "UnifrakturCook", "Texturina", "Manufacturing Consent", "Germania One"],
  notes: {
    "UnifrakturMaguntia": "Similar ornate capitals and an even, book-like texture. The safest swap for Cloister Black.",
    "UnifrakturCook": "A heavier take on the same idea, better for signs, mastheads and anything viewed from a distance.",
    "Texturina": "Textura structure like Cloister Black's lowercase, but drawn to stay readable in sentences.",
    "Manufacturing Consent": "Sharper and more modern; keeps the blackletter skeleton without the period feel.",
    "Germania One": "Condensed and severe, for narrow spaces where Cloister Black would be too wide.",
  },
  about: {
    name: "Cloister Black",
    facts: [
      ["Original foundry", "American Type Founders (ATF)"],
      ["Released", "1904"],
      ["Credited to", "Morris Fuller Benton and Joseph W. Phinney"],
      ["Style", "Blackletter (textura-style lowercase with decorative capitals)"],
      ["Digital versions", "Several commercial revivals and freeware digitisations exist; terms differ, so check each licence"],
      ["Not to be confused with", "Cloister Old Style, a roman (non-blackletter) ATF typeface"],
    ],
  },
  sections: [
    {
      h2: "Is Cloister Black the same as Cloister Old Style?",
      blocks: [
        { p: "No. They share the Cloister name because ATF used it for several designs, but Cloister Old Style is a roman typeface inspired by Renaissance Venetian printing, with no blackletter features at all. If you searched for Cloister Old Style for body text, you want a roman serif; if you want the gothic look of old diplomas and newspaper nameplates, Cloister Black is the one." },
      ],
    },
    {
      h2: "Where is Cloister Black used?",
      blocks: [
        { ul: [
          "**Diplomas and certificates.** Its capitals are a familiar choice for school names; see the [diploma font](/diploma-font) page for layouts.",
          "**Newspaper nameplates and old-fashioned signage.** Compare real mastheads on the [newspaper masthead font](/newspaper-masthead-font) page.",
          "**Tattoo lettering and streetwear.** Many \"Old English\" tattoo references are Cloister Black or a close relative.",
        ] },
        { p: "For text you can paste into a bio or caption, a font file doesn't help; use the [blackletter generator](/blackletter-generator) for Unicode text with a similar look." },
      ],
    },
  ],
  tools: ["/blackletter-generator", "/diploma-font", "/newspaper-masthead-font", "/old-english-tattoo-font"],
  faq: [
    { q: "Is there a Cloister Black font generator?", a: "Not with the real font, because it isn't open-licence. The preview on this page shows your text in five free lookalikes, and the blackletter generator gives copy-paste Unicode text in a similar style." },
    { q: "Who designed Cloister Black?", a: "It's credited to Morris Fuller Benton and Joseph W. Phinney at American Type Founders, released in 1904." },
    { q: "Is Cloister Black free?", a: "Some freeware digitisations circulate, each with its own terms. For guaranteed commercial use, choose an open-licence font such as UnifrakturMaguntia." },
    { q: "What's the difference between Cloister Black and Old English Text MT?", a: "Both are blackletter with similar uses. Cloister Black is the American ATF design from 1904; Old English Text MT is Monotype's font that ships with Microsoft Office." },
  ],
};

export default page;
