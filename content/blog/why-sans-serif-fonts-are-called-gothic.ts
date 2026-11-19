import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "why-sans-serif-fonts-are-called-gothic",
  title: "Why Is Century Gothic Not Gothic? 8 \"Gothic\" Fonts Explained",
  description:
    "Why are Century Gothic, Franklin Gothic and MS Gothic plain sans-serifs, not blackletter? The history, 8 \"gothic\" fonts compared, free alternatives.",
  date: "2026-11-19",
  readingTime: "5 min read",
  excerpt:
    "In American type and in Japanese, \"gothic\" means sans-serif, the opposite of the spiky blackletter most people picture. Here's how one word ended up meaning both.",
  related: ["blackletter-gothic-fraktur-difference", "identify-blackletter-font-from-image", "blackletter-font-pairings"],
  body: [
    { type: "p", text: "Century Gothic, Franklin Gothic and MS Gothic are plain sans-serif fonts because, in American type-founding and later in Japanese, **\"gothic\" became a name for sans-serif type**. It has nothing to do with blackletter, the spiky medieval script most people mean by a gothic font. If you came here looking for that, the [gothic font generator](/gothic-font-generator) and [gothic letters](/gothic-letters) pages have it; if you want to know why one word means two opposite things, read on." },
    { type: "h2", text: "How did \"gothic\" come to mean sans-serif?" },
    { type: "p", text: "Letters without serifs appeared in British type foundries in the early 1800s, and the trade had no settled name for them. British founders called them grotesque or sans-serif. American founders called them gothic; the Boston Type and Stereotype Foundry is usually credited with using the name for sans-serif type in the 1830s, and the label stuck in the United States for more than a century." },
    { type: "p", text: "Nobody recorded why. The most common explanation is that \"gothic\" was a loose 19th-century word for anything that looked old, plain or crude, the same way Renaissance scholars had called blackletter \"gothic\" to mean barbaric. Bare, serifless letters looked primitive next to the elegant serif types of the day, so they got the same insulting label. Over time the insult faded and gothic simply meant sans-serif in American printing." },
    { type: "h2", text: "Which \"gothic\" fonts are really sans-serifs?" },
    { type: "p", text: "All eight fonts below carry the word in their name and none is blackletter. They are commercial or bundled with software, so check your licence before using them in a logo or on products." },
    { type: "table", head: ["Font", "Designer or maker", "Year", "What it actually is"], rows: [
      ["Copperplate Gothic", "Frederic Goudy", "1901", "Wide capitals with tiny serifs, for engraved stationery"],
      ["Franklin Gothic", "Morris Fuller Benton, American Type Founders", "1902", "Heavy American grotesque, used in newspaper headlines"],
      ["News Gothic", "Morris Fuller Benton, American Type Founders", "1908", "Lighter companion to Franklin Gothic for news text"],
      ["Trade Gothic", "Jackson Burke, Linotype", "from 1948", "Workhorse grotesque with condensed widths"],
      ["Letter Gothic", "Roger Roberson, IBM", "1950s", "Monospaced typewriter sans-serif"],
      ["Sackers Gothic", "Gary Sackers", "1970s", "Wide engraver's capitals in the Copperplate tradition"],
      ["Century Gothic", "Monotype", "1990", "Round geometric sans, bundled with Microsoft Office"],
      ["MS Gothic", "Microsoft", "1990s", "Japanese sans-serif system font shipped with Windows"],
    ]},
    { type: "p", text: "Dates are for the original release; most have been expanded and redrawn since, so the font on your computer may be a later digital version." },
    { type: "h2", text: "Why do Japanese and Korean fonts say \"Gothic\"?" },
    { type: "p", text: "Japanese typography uses the same word. Its two basic text styles are **Mincho**, with brush-like strokes and small hooks that work like serifs, and **Gothic** (ゴシック体, goshikku-tai), with even strokes and no ornaments, the equivalent of a sans-serif. That's why MS Gothic, Yu Gothic and Hiragino Kaku Gothic are clean and plain. Korean font names follow a similar pattern: Malgun Gothic and Apple SD Gothic Neo are sans-serifs too." },
    { type: "h2", text: "So which fonts are gothic in the blackletter sense?" },
    { type: "table", head: ["If the name says…", "It's probably…", "Examples"], rows: [
      ["Gothic, in an American or Japanese font name", "A sans-serif", "Franklin Gothic, Century Gothic, MS Gothic"],
      ["Fraktur, Textura, Gotisch, Old English", "Blackletter", "UnifrakturCook, Texturina, Grenze Gotisch, Old English Text MT"],
      ["Gothic, in a display or tattoo font name", "Could be either; look at it", "Check the letters before you install it"],
    ]},
    { type: "p", text: "Notice Grenze Gotisch: the German word for gothic, used in its original blackletter meaning. If you want a real blackletter font for free, the [Old English fonts](/fonts/old-english) page lists ten under the SIL Open Font License, and our guide to [blackletter, gothic and Fraktur](/blog/blackletter-gothic-fraktur-difference) explains the families." },
    { type: "h2", text: "Are there free alternatives to these gothic sans-serifs?" },
    { type: "ul", items: [
      "**Libre Franklin** is a free, open-licence interpretation of Franklin Gothic on Google Fonts.",
      "**News Cycle** is a free revival of News Gothic, also on Google Fonts.",
      "**For Century Gothic**, round geometric sans-serifs such as Didact Gothic or Questrial are often suggested; compare them with your own text, because none is an exact copy.",
      "**For MS Gothic**, Noto Sans JP covers Japanese in the same plain gothic style and is free to use and embed.",
    ]},
    { type: "faq", items: [
      { q: "Is Century Gothic a gothic font?", a: "Not in the blackletter sense. Century Gothic is a geometric sans-serif; \"gothic\" in its name follows the old American habit of calling sans-serif type gothic." },
      { q: "Why is it called Franklin Gothic?", a: "Morris Fuller Benton designed it for American Type Founders in 1902, when American founders called sans-serif type gothic. The Franklin is generally taken as a tribute to Benjamin Franklin." },
      { q: "What is the difference between gothic and sans-serif?", a: "In American and Japanese type naming, none: gothic is an older name for sans-serif. In everyday speech, gothic usually means blackletter, which is the opposite, a dense medieval script full of angles." },
      { q: "Is MS Gothic the same as Century Gothic?", a: "No. MS Gothic is a Japanese system font from Microsoft and Century Gothic is a Latin geometric sans-serif. Both are sans-serifs that happen to share the word gothic." },
      { q: "How do I get real gothic (blackletter) letters?", a: "Install a free blackletter font such as UnifrakturCook, or, for apps without a font menu, copy Unicode blackletter letters from the gothic font generator." },
    ]},
    { type: "cta", text: "Want the spiky kind of gothic? Try the", href: "/gothic-font-generator", label: "gothic font generator" },
  ],
};

export default post;
