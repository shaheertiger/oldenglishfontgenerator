import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "old-london",
  title: "Old London Font — Freeware Blackletter + 5 Open-Licence Matches",
  description:
    "Old London font explained: the freeware blackletter by Dieter Steffmann, what its licence means for commercial use, and 5 open-licence fonts that look similar.",
  h1: "Old London Font",
  crumb: "Old London",
  intro:
    "Old London is a freeware blackletter font by the German designer Dieter Steffmann, and it is the font most people mean when they search for \"the font called London\". It is distributed free, but freeware is not the same as open source: read the licence file that comes with the download before you use it on anything you sell. The five fonts below are open-licence matches you can preview with your own text right now.",
  sample: "The London Gazette",
  fonts: ["UnifrakturMaguntia", "UnifrakturCook", "Manufacturing Consent", "Germania One", "Pirata One"],
  notes: {
    "UnifrakturMaguntia": "Closest in spirit: traditional Fraktur capitals with a light, even texture similar to Old London.",
    "UnifrakturCook": "The same family as Maguntia but heavier, for when Old London looks too thin at small sizes.",
    "Manufacturing Consent": "Crisper and more modern, a good swap if you liked Old London for a streetwear or band logo.",
    "Germania One": "Narrow and geometric. Less ornate than Old London but fits tall, tight layouts.",
    "Pirata One": "The most readable of the five when the text runs longer than a title.",
  },
  about: {
    name: "Old London",
    facts: [
      ["Designer", "Dieter Steffmann"],
      ["Style", "Blackletter display, with an Old London Alternate variant"],
      ["Licence", "Distributed as freeware. Terms are in the licence file included with the download; read them before commercial use"],
      ["Where to get it", "Free font sites that list Dieter Steffmann's fonts"],
      ["Open-licence alternative", "UnifrakturMaguntia (SIL Open Font License)"],
    ],
  },
  sections: [
    {
      h2: "What does Old London look like?",
      blocks: [
        { p: "Old London follows the textura tradition: tall, narrow lowercase letters built from straight strokes with diamond-shaped feet, and wide, curly capitals. It is lighter than many newspaper blackletters, which is why it shows up on wedding invitations, pub signs and old-fashioned shop fronts as often as on band merch." },
        { p: "If you want the look in a caption or bio rather than in a design app, a font file won't help. Paste-ready text from the [Old English font generator](/) uses Unicode Fraktur, which has a similar feel." },
      ],
    },
    {
      h2: "Freeware or open licence: which should I choose?",
      blocks: [
        { table: { head: ["Question", "Freeware (Old London)", "SIL Open Font License (fonts above)"], rows: [
          ["Cost", "Free", "Free"],
          ["Commercial use", "Depends on the included licence text", "Allowed, including logos and products"],
          ["Embedding in apps or games", "Check the licence", "Allowed"],
          ["Official source", "Varies by download site", "Google Fonts"],
        ] } },
        { p: "For a one-off flyer, freeware is usually fine. For a brand, a product line or a client project, an open-licence font removes the guesswork. Every font in the [Old English fonts](/fonts/old-english) collection is OFL." },
      ],
    },
  ],
  tools: ["/old-english-text-to-image", "/newspaper-masthead-font", "/gothic-font-generator", "/blackletter-generator"],
  faq: [
    { q: "What is the font called London?", a: "Usually Old London, a freeware blackletter by Dieter Steffmann. Some people also mean Old English Text MT, which has a similar style." },
    { q: "Is Old London free for commercial use?", a: "It's distributed as freeware, but commercial terms depend on the licence file in the download. Read it, or use an OFL font such as UnifrakturMaguntia, which is clearly allowed commercially." },
    { q: "Is there an Old London font generator?", a: "Type into the preview at the top of this page to see your words in five similar open-licence fonts, or use the Old English font generator for copy-paste text." },
    { q: "Does Old London work in Google Docs or Canva?", a: "Not by default, because it isn't in those libraries. In Canva Pro you can upload font files; in Google Docs, use UnifrakturMaguntia from More fonts." },
  ],
};

export default page;
