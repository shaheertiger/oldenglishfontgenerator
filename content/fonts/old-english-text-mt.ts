import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "old-english-text-mt",
  title: "Old English Text MT Font — Where to Get It + 6 Free Lookalikes",
  description:
    "Old English Text MT font: who makes it, how to get it legally with Microsoft Office, what its licence allows, and 6 free open-licence lookalikes to preview.",
  h1: "Old English Text MT Font",
  crumb: "Old English Text MT",
  intro:
    "Old English Text MT is a Monotype blackletter typeface, and the legal way to get it is through Microsoft Office, which includes it. It is not a free font, so sites offering it as a free download are not licensed to. If you need something you can install anywhere and use on products, the six open-licence fonts below come closest; type your text to compare them.",
  sample: "Certificate of Achievement",
  fonts: ["UnifrakturMaguntia", "UnifrakturCook", "Pirata One", "Grenze Gotisch", "Manufacturing Consent", "Fruktur"],
  notes: {
    "UnifrakturMaguntia": "The nearest free match in weight and proportion. Swap it in for Old English Text MT on certificates and headings and most readers won't notice.",
    "UnifrakturCook": "Darker than Old English Text MT. Pick it when the lettering has to hold up small, cut in vinyl or printed on fabric.",
    "Pirata One": "Simplified blackletter that is easier to read in a full line, such as a long award title.",
    "Grenze Gotisch": "Has a weight axis from 100 to 900, so one install covers a thin subtitle and a heavy name.",
    "Manufacturing Consent": "A sharper, contemporary cut for logos where the classic look feels too formal.",
    "Fruktur": "Softer and rounder, with an italic. Useful when Old English Text MT reads as too stern.",
  },
  about: {
    name: "Old English Text MT",
    facts: [
      ["Publisher", "Monotype (the MT in the name stands for Monotype)"],
      ["Style", "Blackletter (English textura style)"],
      ["Origin", "Monotype describes it as based on 18th-century English blackletter type"],
      ["Where you get it", "Included with Microsoft Office on Windows and Mac"],
      ["Licence", "Commercial. Covered by your Office licence for documents; check Monotype's terms for logos and products you sell"],
      ["Free download?", "Not legally as a standalone file. Free font sites that host it don't have the right to redistribute it"],
      ["Free alternatives", "UnifrakturMaguntia, UnifrakturCook and the other open-licence fonts on this page"],
    ],
  },
  sections: [
    {
      h2: "Do I already have Old English Text MT?",
      blocks: [
        { p: "If Microsoft Word, PowerPoint or Excel is installed, probably yes. Open the font box and type the full name. In Microsoft 365 some fonts download on demand the first time you pick them, so it may appear after a short wait. Step-by-step instructions are in the guides for [Word](/fonts/old-english/word) and [PowerPoint](/fonts/old-english/powerpoint)." },
        { p: "Google Docs, Canva's free plan and most phone apps don't include it, because it isn't part of the Google Fonts library. There, UnifrakturMaguntia is the usual stand-in." },
      ],
    },
    {
      h2: "Why are the free download sites a problem?",
      blocks: [
        { p: "A font is software with a licence. Monotype hasn't released Old English Text MT for free redistribution, so a .ttf file posted on a free font site comes with no rights at all. For a school poster nobody may notice, but for a logo, a T-shirt run or an app, an unlicensed font is a real legal risk. The fonts in the preview above use the SIL Open Font License, which explicitly allows commercial use." },
        { p: "Searches for Monotype Old English, Olde English or Collins Old English usually point at the same family of letter shapes. Collins Old English is a separate freeware design, and Engravers Old English, released by American Type Founders in the early 1900s and attributed to Morris Fuller Benton, is a close cousin that is also sold commercially (Bitstream's version is Engravers Old English BT)." },
      ],
    },
    {
      h2: "Which free font matches Old English Text MT best?",
      blocks: [
        { table: { head: ["You need", "Use", "Why"], rows: [
          ["Same look on a certificate", "UnifrakturMaguntia", "Similar weight and classic capitals"],
          ["Bolder lettering for vinyl or print", "UnifrakturCook", "Thicker strokes survive cutting and weeding"],
          ["A readable long line", "Pirata One", "Open, simplified shapes"],
          ["Several weights for branding", "Grenze Gotisch", "Variable weight 100–900"],
        ] } },
        { p: "For text that has to paste into Instagram or Discord, no font file works. Use the [Old English font generator](/) instead, or compare more downloads in the [Old English fonts](/fonts/old-english) collection." },
      ],
    },
  ],
  tools: ["/old-english-name-generator", "/diploma-font", "/old-english-tattoo-font", "/old-english-text-to-image"],
  faq: [
    { q: "Is Old English Text MT free?", a: "No. It's a commercial Monotype font. You get it at no extra cost with Microsoft Office, but you can't legally download it on its own from free font sites." },
    { q: "Can I use Old English Text MT in a logo?", a: "Your Office licence is aimed at documents. For logos, merchandise or anything you sell, check Monotype's licensing or use an open-licence font such as UnifrakturMaguntia." },
    { q: "What font is closest to Old English Text MT?", a: "UnifrakturMaguntia is the closest free match. UnifrakturCook is a heavier alternative." },
    { q: "Why can't I find Old English Text MT in Google Docs?", a: "Google Docs only offers fonts from the Google Fonts library, and Old English Text MT isn't in it. Add UnifrakturMaguntia from the More fonts menu instead." },
    { q: "Is Old English Text MT the same as Engravers Old English?", a: "No, they're different designs with a similar look. Engravers Old English came from American Type Founders in the early 1900s; Old English Text MT is Monotype's." },
  ],
};

export default page;
