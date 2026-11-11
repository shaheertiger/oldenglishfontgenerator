import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "is-old-english-font-free-commercial-use",
  title: "Is Old English Font Free for Commercial Use? 4 Cases",
  description:
    "Is Old English font free for commercial use? It depends on which one: Old English Text MT, freeware like Old London, OFL fonts or copy-paste Unicode text.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "\"Old English\" can mean a Microsoft font, a freeware download, an open-licence font or Unicode text. Each comes with different rules for logos and merch.",
  related: ["old-english-font-size-guide", "blackletter-history-1941-ban", "best-fonts-for-embroidery-blackletter"],
  body: [
    { type: "p", text: "Short answer: there are 4 common kinds of \"Old English font\", and only 2 of them are clearly free for commercial work. Open-licence fonts such as UnifrakturMaguntia are free for logos, shirts and products. Copy-paste Unicode text isn't a font at all, so no font licence applies. Old English Text MT is a commercial Monotype font you get through Microsoft Office, and freeware downloads like Old London or Cloister Black come with whatever terms their maker wrote." },
    { type: "p", text: "This is a practical guide, not legal advice. If a project carries real money or a trademark filing, read the licence file yourself or ask a lawyer." },

    { type: "h2", text: "Which Old English fonts can I use for a business?" },
    { type: "p", text: "Start by working out which file you actually have. People search for the same look under one name, but the licence follows the file, not the style." },
    { type: "table", head: ["What you have", "Who controls the licence", "Logos and merch?", "What to check"], rows: [
      ["Old English Text MT", "Monotype (supplied with Microsoft Office and Windows)", "Not automatically", "Your Office licence covers documents; for logos, products or embedding, check Monotype's licensing"],
      ["Old London, Cloister Black and similar freeware", "The person who digitised it", "Sometimes", "The readme or licence inside the download; terms differ by maker and by site"],
      ["OFL fonts (UnifrakturCook, Pirata One, Grenze Gotisch and others)", "SIL Open Font License 1.1", "Yes", "Don't sell the font files alone; rename any modified version"],
      ["Copy-paste Unicode text from a generator", "Nobody; it's characters, not a font file", "Yes, as text", "Trademarks: your design can't copy someone else's brand"],
    ] },

    { type: "h2", text: "Is Old English Text MT free?" },
    { type: "p", text: "It's included at no extra charge with Microsoft Office, which is why so many people already have it. That isn't the same as being free to use anywhere. The font is a Monotype product, and the rights you get come through your Microsoft licence, which is aimed at creating documents. Printing a church bulletin or a certificate in Word is the normal use. Putting it in a registered logo, screen-printed hoodies for sale or an app is a different question; Monotype sells licences for those uses." },
    { type: "p", text: "Sites that offer \"Old English Text MT free download\" are usually redistributing a file they have no right to share. A safer route for commercial work is an open-licence lookalike. Our [Old English Text MT page](/fonts/old-english-text-mt) compares the closest free alternatives side by side." },

    { type: "h2", text: "What about freeware like Old London and Cloister Black?" },
    { type: "p", text: "\"Freeware\" only means you didn't pay to download it. Each designer sets their own rules: some allow any use, some ask for a donation for commercial work, some say personal use only. The same font can also appear on several download sites with different, sometimes wrong, licence labels." },
    { type: "ul", items: [
      "Open the .txt or readme file that came in the zip and keep a copy with your project.",
      "If there is no licence file, assume you don't have commercial permission.",
      "If the terms are unclear, email the designer. Many reply.",
    ] },
    { type: "p", text: "Background on both fonts: [Old London](/fonts/old-london) and [Cloister Black](/fonts/cloister-black)." },

    { type: "h2", text: "What does the SIL Open Font License actually allow?" },
    { type: "p", text: "All 41 fonts in our [free font directory](/fonts) use the SIL Open Font License 1.1. In plain terms it lets you:" },
    { type: "ul", items: [
      "Use the font for personal and commercial work, including logos, packaging, apparel, books and videos.",
      "Embed it in PDFs, websites, apps and games.",
      "Modify it, as long as the modified version is released under the same licence.",
    ] },
    { type: "p", text: "The two limits: you can't sell the font files on their own, and if you modify a font that declares a Reserved Font Name, the modified version needs a new name. Neither affects someone who simply sets a word in the font and prints it on a mug." },

    { type: "h2", text: "Is copy-paste Old English text copyrighted?" },
    { type: "p", text: "The characters a generator produces, such as 𝔒𝔩𝔡 𝔈𝔫𝔤𝔩𝔦𝔰𝔥, are standard Unicode code points. They belong to nobody, and you can paste them into a bio, a caption or a product title freely. When you need a printable graphic, the [text to image tool](/old-english-text-to-image) draws your words with OFL fonts, so the PNG or SVG it makes is covered by that open licence too." },
    { type: "p", text: "What a font licence never covers is trademark. If your shirt spells out a band's name in its logo style, or your shop sign imitates a famous brewery, the problem is the brand, not the typeface. Using a free font doesn't make a copied logo safe." },

    { type: "h2", text: "A quick checklist before you print" },
    { type: "ul", items: [
      "Write down the exact font name and where you downloaded it.",
      "Save the licence file with your artwork.",
      "If the font came with Office, check Monotype's terms for anything you'll sell.",
      "For a logo you plan to register, prefer an OFL font so the licence is never in doubt.",
      "Convert text to outlines in the final print file so the printer doesn't need the font installed.",
    ] },

    { type: "faq", items: [
      { q: "Can I use Old English Text MT for a logo?", a: "Not just because it came with Office. Your Microsoft licence is aimed at documents; for logos and products, check Monotype's licensing or use an open-licence lookalike such as UnifrakturMaguntia." },
      { q: "Which free Old English font is safest for merchandise?", a: "Any font under the SIL Open Font License, for example UnifrakturCook, UnifrakturMaguntia or Pirata One. The licence explicitly allows commercial products." },
      { q: "Do I need to credit an OFL font?", a: "No credit is required for using the font in your designs. The licence notice only has to travel with the font files if you redistribute them." },
      { q: "Can I sell a tattoo flash sheet made with these fonts?", a: "With an OFL font, yes. With freeware, only if its licence allows commercial use." },
      { q: "Is text from a font generator safe to use on Etsy listings?", a: "The Unicode characters themselves are free to use. Just make sure the words and design don't copy a trademarked brand." },
    ] },
    { type: "cta", text: "Make a print-ready PNG or SVG with open-licence blackletter in the", href: "/old-english-text-to-image", label: "Old English text to image tool" },
  ],
};

export default post;
