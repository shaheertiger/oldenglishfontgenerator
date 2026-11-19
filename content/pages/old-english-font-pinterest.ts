import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-font-pinterest",
  title: "Old English Font for Pinterest — 12 Pin & Board Styles",
  description:
    "Pinterest font generator in Old English: 12 gothic styles for pin titles, boards and your profile, checked against the 100-character title limit.",
  h1: "Old English Font for Pinterest",
  crumb: "Old English Font for Pinterest",
  intro:
    "Pinterest has no font picker, but the 12 blackletter styles below paste into your display name, board names, pin titles and descriptions. Type your text, check it against the 100-character pin title limit and copy a row. One warning first: Pinterest is a search engine, and styled letters aren't read as words, so keep your keywords in plain text and use gothic letters for decoration.",
  tool: {
    styles: [
      "bold-fraktur", "fraktur", "fraktur-plain-lower", "illuminated", "deco-fleuron", "deco-rose",
      "deco-heart", "deco-stars", "frame-corner", "gothic-framed", "bold-cursive", "fraktur-small-caps",
    ],
    sample: "Dark Academia Aesthetic",
    placeholder: "Type a board name or pin title…",
    presets: ["Dark Academia Aesthetic", "Gothic Wedding Ideas", "Tattoo Inspo", "Witchy Home Decor", "Lettering Practice"],
    limit: { label: "Pin title", max: 100 },
  },
  stylesHeading: "Pinterest name and board styles",
  howTo: {
    heading: "How to use an Old English font on Pinterest",
    steps: [
      ["Style one word", "Pick the word that sets the mood (Gothic, Witchy, Vintage) and style just that. Leave the rest in plain text so search can read it."],
      ["Copy the row", "Tap Copy beside the style you like. Each styled letter can count as two characters toward the limit."],
      ["Paste into Pinterest", "Paste into a board name, a pin title or Edit profile, then save and check how it looks on your phone."],
    ],
  },
  sections: [
    {
      h2: "Which Pinterest fields take gothic letters?",
      blocks: [
        {
          table: {
            head: ["Pinterest field", "Blackletter works?", "What to know"],
            rows: [
              ["Display name", "Usually", "Shown on your profile and under your pins"],
              ["Username", "No", "Letters, numbers and underscores only; it is part of your profile URL"],
              ["Board names", "Usually", "A plain keyword in the name still helps people find the board"],
              ["Pin title", "Yes", "Up to 100 characters; styled letters may count double"],
              ["Pin description", "Yes", "Up to 500 characters; keep keywords plain"],
              ["Text on the pin image", "Use a real font", "Image text is part of the picture, so any installed font works"],
            ],
          },
        },
        { p: "Pinterest updates its fields from time to time. If a paste is rejected or shows boxes, trust the app over this table." },
      ],
    },
    {
      h2: "Do fancy fonts hurt Pinterest SEO?",
      blocks: [
        { p: "They can. Pinterest finds and ranks pins largely from the words in titles, descriptions and board names. A word written as 𝔊𝔬𝔱𝔥𝔦𝔠 is a string of mathematical symbols to a search engine, not the word gothic, so a pin titled entirely in blackletter is invisible to someone searching for gothic wedding ideas. Screen readers struggle with the same characters." },
        { ul: [
          "**Keep the main keyword plain:** Gothic Wedding Ideas ✦ 𝔇𝔞𝔯𝔨 ℜ𝔬𝔪𝔞𝔫𝔠𝔢 keeps the searchable part readable.",
          "**Style your display name, not your username.** The name is decoration; the username is your address.",
          "**Put the dramatic lettering on the image** instead, where it can't affect search at all.",
        ] },
      ],
    },
    {
      h2: "Old English lettering on the pin image",
      blocks: [
        { p: "The text people notice first on Pinterest is on the image itself. Because it's part of the picture, you can use any real blackletter font, which looks far cleaner than copied characters. Pinterest's own guidance favours vertical pins in a 2:3 ratio, such as 1000 × 1500 pixels." },
        {
          table: {
            head: ["Pin style", "Free font", "Why"],
            rows: [
              ["Gothic wedding or dark romance", "[UnifrakturCook](/fonts/unifrakturcook)", "Heavy enough to read over a photo"],
              ["Tattoo flash and lettering boards", "[Pirata One](/fonts/pirata-one)", "Readable at small preview sizes in the feed"],
              ["Fantasy, witchy and medieval", "[Uncial Antiqua](/fonts/uncial-antiqua)", "Softer, storybook look"],
              ["Quotes and printables", "Grenze Gotisch", "Several weights for a headline plus a subtitle"],
            ],
          },
        },
        { p: "Design pins in Canva with a blackletter font using our [Canva guide](/fonts/old-english/canva), or type your words into [Old English text to image](/old-english-text-to-image) and download a transparent PNG to place on your photo." },
      ],
    },
  ],
  built:
    "Every style starts from Unicode's Mathematical Fraktur (U+1D504–U+1D537) or Bold Fraktur (U+1D56C–U+1D59F). Each of those letters takes two UTF-16 code units, which is why the counter rises faster than the letters you type. Roses, hearts and stars are standard symbols or emoji.",
  related: {
    heading: "Old English for other apps",
    hrefs: ["/old-english-font-instagram", "/old-english-font-tiktok", "/old-english-font-facebook", "/old-english-font-youtube", "/gothic-letters", "/old-english-text-to-image"],
  },
  faq: [
    { q: "How do I change my font on Pinterest?", a: "Pinterest doesn't let you change its font, but you can paste Unicode letters that look like a different font. Copy a style here and paste it into your display name, a board name or a pin title." },
    { q: "Can my Pinterest username be in Old English?", a: "No. Usernames only allow plain letters, numbers and underscores because they form your profile URL. Put the gothic version in your display name." },
    { q: "Is there a Pinterest font generator for pin text?", a: "This page works for pin titles and descriptions. For text on the pin image, use a real font in a design app instead; it looks sharper and doesn't affect search." },
    { q: "Will styled text stop my pins showing in search?", a: "Styled words aren't read as words, so they don't help a pin rank for them. Keep the important keywords in plain text and use styled letters only for decoration." },
    { q: "Why do some people see boxes instead of my gothic text?", a: "Their device lacks the fonts for those characters, usually because the phone or computer is old. Bold Fraktur is among the best supported styles." },
    { q: "What font should I use for Pinterest printables?", a: "A free font you're allowed to use commercially, such as UnifrakturCook or Grenze Gotisch, both under the SIL Open Font License. Avoid fonts marked free for personal use only if you sell the printable." },
  ],
};

export default page;
