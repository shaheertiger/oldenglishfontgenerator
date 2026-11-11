import type { PageContent } from "./types";

const page: PageContent = {
  slug: "newspaper-masthead-font",
  title: "Newspaper Masthead Font — 8 Blackletter Nameplates Explained",
  description:
    "Newspaper masthead font: why the New York Times and 7 other papers use blackletter nameplates, and how to make your own in 10 styles to copy.",
  h1: "Newspaper Masthead Font",
  crumb: "Newspaper Masthead Font",
  intro:
    "The New York Times logo isn't a font you can install: like most newspaper mastheads, it's custom blackletter lettering, and at least 8 major papers use the same tradition. Type your own paper, newsletter or club bulletin name below to see it as a nameplate in 10 styles, then add a founding year in Roman numerals for the finishing touch.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "illuminated", "frame-banner", "fraktur-small-caps",
      "bold-fraktur-caps", "roman-date", "deco-fleuron", "gothic-framed", "fraktur-plain-lower",
    ],
    sample: "The Daily Herald",
    placeholder: "Your newspaper or newsletter name…",
    presets: ["The Daily Herald", "Est. 1851", "The Evening Gazette", "The Weekly Chronicle", "Morning Courier"],
  },
  stylesHeading: "Masthead styles",
  howTo: {
    heading: "How to make a newspaper-style nameplate",
    steps: [
      ["Use a classic name pattern", "The, a town or adjective, then a newspaper word: Herald, Gazette, Courier, Chronicle, Times, Post."],
      ["Choose the weight", "Fraktur is close to the lighter nameplates; Bold Fraktur gives the heavy, black look of a front page."],
      ["Add a dateline", "Put Est. and the year beneath, in the Roman numeral style, or keep it plain for a modern look."],
    ],
  },
  sections: [
    {
      h2: "Which newspapers use a blackletter masthead?",
      blocks: [
        {
          table: {
            head: ["Newspaper", "City", "Founded", "Nameplate"],
            rows: [
              ["The New York Times", "New York", "1851", "Custom blackletter"],
              ["The Washington Post", "Washington, D.C.", "1877", "Custom blackletter"],
              ["Los Angeles Times", "Los Angeles", "1881", "Custom blackletter"],
              ["The Philadelphia Inquirer", "Philadelphia", "1829", "Custom blackletter"],
              ["The Boston Globe", "Boston", "1872", "Custom blackletter"],
              ["Chicago Tribune", "Chicago", "1847", "Custom blackletter"],
              ["The Daily Telegraph", "London", "1855", "Custom blackletter"],
              ["Frankfurter Allgemeine Zeitung", "Frankfurt", "1949", "Fraktur-style lettering"],
            ],
          },
        },
        { p: "None of these nameplates is a retail typeface. Each paper owns its lettering as part of its brand, and many have been redrawn and refined over the decades. If you want the look, use one of the free fonts or styles here; don't copy a real paper's nameplate for your own publication." },
      ],
    },
    {
      h2: "Why do so many newspapers use Old English lettering?",
      blocks: [
        { p: "Blackletter was the type of the first printed books in Europe, so it signalled print, authority and permanence long before newspapers existed. When the big 19th-century dailies set their titles in it, the style became shorthand for a serious paper. Keeping it now tells readers the publication has history, which is why papers tend to refine their nameplates rather than replace them." },
        { p: "There's a practical side too. A dense, dark title stands out at the top of a busy front page and is instantly recognisable at newsstand distance, even when the headline below changes every day." },
      ],
    },
    {
      h2: "What free font is closest to the New York Times logo?",
      blocks: [
        { p: "No free font matches it exactly, because the Times nameplate is drawn, not typeset. The closest everyday options are Old English Text MT, which comes with Microsoft Office, and free open-licence Fraktur such as UnifrakturMaguntia. See [Old English Text MT](/fonts/old-english-text-mt) for where to find it and its licence, and [Old London](/fonts/old-london) for a freeware alternative people often use for newsletter mastheads." },
        {
          ul: [
            "**For a school or club newsletter:** UnifrakturMaguntia in Google Docs or Word. Our [Word guide](/fonts/old-english/word) shows how.",
            "**For a printed poster or prop newspaper:** export the title as a PNG from the [text to image tool](/old-english-text-to-image) so it prints sharply.",
            "**For a social post:** copy a style from the generator above; it pastes as text.",
          ],
        },
      ],
    },
  ],
  built:
    "The masthead rows use Mathematical Fraktur (U+1D504–U+1D537) and Bold Fraktur (U+1D56C–U+1D59F). The banner style adds box-drawing rules (━), the fleuron style adds ☙ and ❧, and the year style turns digits into Roman numerals before converting to blackletter.",
  related: {
    heading: "More Old English tools",
    hrefs: ["/old-english-text-to-image", "/diploma-font", "/old-english-numbers", "/blackletter-generator", "/fraktur-generator", "/illuminated-letters"],
  },
  faq: [
    { q: "What font is the New York Times logo?", a: "It isn't a font. The nameplate is custom blackletter lettering owned by the paper. Old English Text MT and UnifrakturMaguntia are the closest commonly available alternatives." },
    { q: "What is a newspaper masthead?", a: "In everyday use it means the paper's title at the top of the front page. Many journalists call that the nameplate and use masthead for the staff box inside." },
    { q: "Why are newspaper names in Old English?", a: "Blackletter was the type of early printing, so it reads as tradition and authority. Papers founded in the 19th century kept it as part of their identity." },
    { q: "Can I use a real newspaper's logo for my project?", a: "Not for your own publication or products. Nameplates are trademarks. Make your own name in a similar style instead." },
    { q: "How do I add Est. and a year?", a: "Type Est. 1851 (or your year) and choose Roman Numeral Date, which writes the year as MDCCCLI in blackletter." },
    { q: "Which style looks most like a front page?", a: "Bold Fraktur, which matches the heavy black of a printed nameplate. Use the lighter Fraktur for a more refined newsletter." },
  ],
};

export default page;
