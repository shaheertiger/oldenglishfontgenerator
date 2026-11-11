import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "blackletter-font-pairings",
  title: "Blackletter Font Pairings: 8 Free Combinations That Work",
  description:
    "Blackletter font pairings: 8 free combinations of an Old English headline font with a readable serif or mono body font, with use cases and sizing rules.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Blackletter makes a great headline and a terrible paragraph. Eight free pairings that give you both, plus the three rules behind them.",
  related: ["best-font-big-bold-letters-album-cover", "old-english-wedding-invitations", "old-english-font-size-guide"],
  body: [
    { type: "p", text: "Pair a blackletter headline with a calm, readable body font, never with a second blackletter. The safest free combination is **UnifrakturMaguntia for headings with IM Fell English for text**: both come from the age of hand-set type, so they feel related without competing. For a modern brand system, **Grenze Gotisch with Texturina** works because both families come from the same foundry, Omnibus-Type, and both have weights from 100 to 900. All 14 fonts mentioned below are free under the SIL Open Font License." },
    { type: "h2", text: "Why does blackletter need a partner font?" },
    { type: "p", text: "Blackletter packs dark vertical strokes close together. That density is what makes a single word look striking, and it is also why a full paragraph becomes tiring: readers today are used to round, open letterforms. Give the blackletter one job (a title, a name, a masthead) and hand every sentence to a body font. If you'd rather keep everything gothic, the [Old English fonts](/fonts/old-english) page explains which blackletter faces read best in longer text." },
    { type: "h2", text: "Which 8 pairings work best?" },
    { type: "table", head: ["Headline font", "Body font", "Mood", "Use it for"], rows: [
      ["UnifrakturMaguntia", "IM Fell English", "Old printed book", "Certificates, menus with history, book covers"],
      ["Grenze Gotisch", "Texturina", "Modern heritage", "Brand systems, labels, packaging"],
      ["[Pirata One](/fonts/pirata-one)", "Almendra", "Storybook fantasy", "Game rulebooks, tavern menus, map legends"],
      ["[UnifrakturCook](/fonts/unifrakturcook)", "Courier Prime", "Raw, zine-like", "Tattoo flash sheets, punk flyers, merch tags"],
      ["Manufacturing Consent", "Graduate", "Streetwear", "Lookbooks, drop announcements, hang tags"],
      ["Fruktur", "Fondamento", "Warm and handmade", "Cafés, bakeries, craft-beer labels"],
      ["[Metal Mania](/fonts/metal-mania)", "Pirata One", "Gig poster", "Band name over readable dates and venues"],
      ["Jacquard 24", "Courier Prime", "Retro pixel", "Game title screens, devlogs, chiptune covers"],
    ]},
    { type: "p", text: "Of the seven body fonts, four are serif or slab faces (IM Fell English, Texturina, Almendra, Graduate), Fondamento is a broad-pen italic hand, Courier Prime is a typewriter mono, and Pirata One doubles as a body font because it's the most open blackletter here. You can preview every headline font with your own words on the [font comparison](/fonts) page." },
    { type: "h2", text: "What are the rules for pairing fonts with blackletter?" },
    { type: "ol", items: [
      "**Contrast, not conflict.** Pair dense with open: blackletter headline, round serif or mono body. Two decorative faces fight for attention.",
      "**Share one trait.** A historical period (Maguntia + IM Fell), a foundry (Grenze + Texturina) or a mood (Cook + Courier Prime) makes the pair feel deliberate.",
      "**Size the headline well above the body.** Blackletter needs roughly two to three times the body size to read comfortably as a heading; at the same size it just looks like a smudge.",
    ]},
    { type: "h2", text: "Which serif fonts are best for body text next to Old English?" },
    { type: "p", text: "From the free fonts on this site, **IM Fell English** (a revival of 17th-century English type, with an italic), **Texturina** (variable weights 100–900 plus italics) and **Almendra** (calligraphic details, weights 400 and 700 with italics) carry long text best. Outside this directory, any well-made book serif already on your computer is a fine choice too; the pairing rules matter more than the specific face." },
    { type: "h2", text: "How do I apply a pairing in Word, Canva or Google Docs?" },
    { type: "p", text: "Install both fonts (or enable them in the app's font menu), then set them as styles: Heading 1 for the blackletter and Normal for the body. That way you change the pairing once instead of word by word. Step-by-step help: [Word](/fonts/old-english/word), [Google Docs](/fonts/old-english/google-docs), [Canva](/fonts/old-english/canva) and [PowerPoint](/fonts/old-english/powerpoint)." },
    { type: "faq", items: [
      { q: "What font goes well with Old English?", a: "A readable serif such as IM Fell English or Texturina, or a mono like Courier Prime for a rougher look. Avoid pairing it with another blackletter or a busy script." },
      { q: "Can I use two blackletter fonts together?", a: "Rarely. If you must, use one heavy face for the title and a much simpler one, such as Pirata One, for subtitles. Body text should still be a non-blackletter font." },
      { q: "What is the best serif font for body text?", a: "From the free fonts on this site, IM Fell English, Texturina and Almendra. Any well-made book serif works if it's open and even." },
      { q: "How much bigger should the blackletter heading be?", a: "Roughly two to three times the body size is a good starting point. Blackletter at body size is hard to read." },
      { q: "Are these font pairings free for commercial use?", a: "Yes. Every font named here uses the SIL Open Font License, which allows commercial projects, logos and products." },
    ]},
    { type: "cta", text: "Preview your headline in Old English styles with the", href: "/blackletter-generator", label: "blackletter generator" },
  ],
};

export default post;
