import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "best-fonts-for-signs-blackletter",
  title: "Best Fonts for Signs: 6 Picks + a Letter-Height Chart",
  description:
    "Best fonts for signs that use blackletter: 6 free picks for pubs, barbers and tattoo shops, when Old English hurts readability, and a letter-height chart.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Blackletter can make a shopfront, or make it unreadable. Six free fonts, where each belongs, and how tall the letters need to be for the distance.",
  related: ["best-font-big-bold-letters-album-cover", "best-engraving-fonts", "old-english-font-size-guide"],
  body: [
    { type: "p", text: "The best font for a sign is the one people can read from where they'll actually stand. Use blackletter for one short word (the business name) and a plain font for everything else: opening hours, prices and directions. For the gothic part, **Pirata One** and **Germania One** stay readable at a distance; **UnifrakturCook** gives the most traditional look but needs about one and a half times the letter height of a plain font, by our rule of thumb. The common sign-trade guideline is roughly 1 inch of letter height for every 10 feet of viewing distance for comfortable reading." },
    { type: "h2", text: "When does blackletter work on a sign?" },
    { type: "p", text: "Blackletter signals tradition, craft and a bit of attitude. It fits businesses where that feeling is the point:" },
    { type: "ul", items: [
      "**Pubs, taverns and breweries.** Gilded Fraktur on a dark board is a centuries-old convention.",
      "**Barbers and tattoo studios.** Old English lettering on glass or a hanging sign reads instantly as the trade.",
      "**Bakeries, butchers and delis** with a heritage angle, especially German or Central European ones.",
      "**Event and festival signage** for medieval fairs, Halloween and metal shows, where atmosphere outweighs speed.",
    ]},
    { type: "h2", text: "When should a sign avoid blackletter?" },
    { type: "p", text: "Anything people must read quickly or while moving: road-facing directions, parking rules, safety notices, wayfinding inside a building and menus with prices. Dense letter shapes take longer to decode, and capitals in blackletter are especially hard to read in a row, so never set a whole sign in Old English capitals. Accessibility guidance for signage generally favours simple, high-contrast letterforms for exactly this reason." },
    { type: "h2", text: "Which 6 free fonts work best on signs?" },
    { type: "table", head: ["Font", "Readability at distance", "Good for", "Watch out for"], rows: [
      ["[Pirata One](/fonts/pirata-one)", "High for blackletter", "Business names on fascias, A-frame boards", "Looks modern rather than antique"],
      ["Germania One", "High; condensed", "Narrow vertical blade signs and banners", "Straight cuts feel industrial"],
      ["[UnifrakturCook](/fonts/unifrakturcook)", "Medium; needs size", "Pub boards, barber glass, one bold word", "Tight counters fill in at small sizes"],
      ["Grenze Gotisch", "Medium to high at bold weights", "Signs that need a matching thin line (est. date, tagline)", "Thin weights disappear outdoors"],
      ["Manufacturing Consent", "Medium", "Tattoo shops, streetwear stores, venue names", "Sharp details get lost on rough surfaces"],
      ["Rye", "High; not blackletter", "Western, whiskey-bar or saloon themes", "Very decorative, so use it for one word"],
    ]},
    { type: "p", text: "All six are free under the SIL Open Font License, which allows commercial signage. Preview your business name in each on the [Old English fonts](/fonts/old-english) and [gothic fonts](/fonts/gothic) pages, or browse [all free fonts compared](/fonts)." },
    { type: "h2", text: "How tall should sign letters be for the viewing distance?" },
    { type: "p", text: "The chart uses the sign-trade rule of thumb of about 1 inch of capital height per 10 feet for comfortable reading. The blackletter column is our own suggestion of 1.5× that, because broken strokes and ornate capitals need extra size. Treat both as starting points and test on site." },
    { type: "table", head: ["Viewing distance", "Plain font (rule of thumb)", "Blackletter (our suggestion)"], rows: [
      ["10 ft (3 m)", "1 in (2.5 cm)", "1.5 in (4 cm)"],
      ["25 ft (7.5 m)", "2.5 in (6 cm)", "4 in (10 cm)"],
      ["50 ft (15 m)", "5 in (13 cm)", "7.5 in (19 cm)"],
      ["100 ft (30 m)", "10 in (25 cm)", "15 in (38 cm)"],
      ["200 ft (60 m)", "20 in (51 cm)", "30 in (76 cm)"],
    ]},
    { type: "p", text: "Contrast matters as much as size. Gold or cream on deep green, black or oxblood is the classic pub combination for a reason; mid-grey on beige will fail at any height." },
    { type: "h2", text: "How do I get the lettering made?" },
    { type: "ol", items: [
      "Set the name in your chosen font and export it as a vector (SVG or PDF) with the text converted to outlines. The [Inkscape guide](/fonts/old-english/inkscape) covers that step.",
      "Print it at full size on paper, tape it up and look from the street. Adjust size and spacing before anything gets cut or painted.",
      "Give the sign maker the vector file and the font name. For hand-painted signs, a good sign writer will adapt the letters rather than trace them.",
    ]},
    { type: "faq", items: [
      { q: "What is the best font for a business sign?", a: "For the main name, a readable display font; for everything else, a plain sans or serif. If you want blackletter, Pirata One and Germania One are the most legible free options." },
      { q: "How big should letters be on a sign?", a: "A common rule of thumb is about 1 inch of letter height per 10 feet of viewing distance. Ornate fonts such as blackletter need more, roughly 1.5× by our suggestion." },
      { q: "Is Old English font hard to read on signs?", a: "In long text or all capitals, yes. A single word in mixed case at a generous size reads fine, which is why pubs and barbers still use it." },
      { q: "Can I use a free font on a commercial sign?", a: "Yes, if it's under an open licence such as the SIL Open Font License. Fonts bundled with an operating system or app may have different terms, so check before using them." },
      { q: "What colours work best with blackletter signs?", a: "High contrast: gold, cream or white on a dark ground, or black on a pale ground. Avoid busy textures behind the letters." },
    ]},
    { type: "cta", text: "Try your business name in a dozen gothic styles with the", href: "/gothic-font-generator", label: "gothic font generator" },
  ],
};

export default post;
