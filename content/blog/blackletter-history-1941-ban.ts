import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "blackletter-history-1941-ban",
  title: "Is Blackletter Offensive? Fraktur's History and 1941 Ban",
  description:
    "Is blackletter offensive? A short history of Fraktur from Gutenberg to the 1941 Nazi ban that called it 'Jewish', and what the style signals today.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Fraktur was Germany's everyday type for 400 years, and the Nazi regime banned it in 1941. Why the style's associations are more mixed than people think.",
  related: ["long-s-explained", "is-old-english-font-free-commercial-use", "blackletter-gothic-fraktur-difference"],
  body: [
    { type: "p", text: "No, blackletter is not offensive in itself. It was the normal printing type for German-speaking readers for about 400 years, it's on newspaper mastheads, diplomas and beer labels, and the Nazi regime, often assumed to have owned the style, actually banned Fraktur on 3 January 1941. Context decides how it reads: the same letters signal tradition on a bakery sign and something very different next to extremist symbols." },

    { type: "h2", text: "Where did blackletter come from?" },
    { type: "p", text: "Blackletter grew out of the Gothic book hands that scribes across Europe used from around the 12th century. When Johannes Gutenberg printed his Bible in Mainz in the 1450s, he cut type that imitated textura, the formal manuscript hand of the day. Over the next century, printers in German-speaking lands developed Schwabacher and then Fraktur, which became the standard type for books, newspapers and official documents. The [blackletter generator](/blackletter-generator) shows how the main families differ." },
    { type: "p", text: "Most of Europe moved to roman type (Antiqua) during the 16th and 17th centuries. German-speaking printing kept Fraktur for everyday text, while using Antiqua for Latin and many scientific works. By the 19th century, which typeface to use had become a cultural argument, known in German as the Antiqua–Fraktur dispute." },

    { type: "h2", text: "What happened to Fraktur in Nazi Germany?" },
    { type: "p", text: "In the early years of the regime, Fraktur was promoted as the \"German\" script and roman type was discouraged in some official settings. That changed abruptly. On 3 January 1941, Martin Bormann signed a circular, now usually called the Normalschrifterlass (normal-type decree), stating that Fraktur and its relatives were \"Schwabacher Jew-letters\" and ordering a switch to roman type, the new \"normal script\", in official use, schools and publishing." },
    { type: "p", text: "The claim was false. Blackletter had no Jewish origin; it was the work of German and other European scribes and printers. Historians generally read the decree as a practical move dressed up in antisemitic language: roman type was far easier to read in occupied countries and for propaganda abroad. The same order also moved schoolchildren from the old German handwriting to Latin-style handwriting." },

    { type: "h2", text: "Key dates at a glance" },
    { type: "table", head: ["When", "What happened"], rows: [
      ["12th–15th century", "Gothic book hands (textura and others) spread across European manuscripts"],
      ["1450s", "Gutenberg prints his Bible in Mainz in a textura-style type"],
      ["16th century", "Fraktur becomes the dominant type in German-speaking printing"],
      ["19th century", "The Antiqua–Fraktur dispute over which type Germany should use"],
      ["1930s", "The Nazi regime promotes Fraktur as the 'German' type"],
      ["3 January 1941", "Bormann's circular bans Fraktur, falsely calling it 'Jewish', and makes roman type the standard"],
      ["After 1945", "Roman type stays the norm in Germany; Fraktur survives as a decorative and traditional style"],
    ] },

    { type: "h2", text: "Why do some people still link blackletter with the Nazis?" },
    { type: "p", text: "Films, posters and photos from the period often show Fraktur, so many viewers connect the style with the era even though the regime eventually rejected it. Some extremist groups today also use blackletter in logos, tattoos and merchandise, usually combined with specific numbers, runes or symbols. In those combinations the meaning comes from the symbols and the group, not from the letterforms, but the association is real and people will react to it." },

    { type: "h2", text: "Where is blackletter used today?" },
    { type: "p", text: "Far more widely, and in far more communities, than its dark reputation suggests:" },
    { type: "ul", items: [
      "**Newspapers:** many mastheads use blackletter, from American dailies to the Frankfurter Allgemeine Zeitung. See [newspaper masthead fonts](/newspaper-masthead-font).",
      "**Diplomas and certificates:** school names are often set in a blackletter such as Old English Text MT. See the [diploma font guide](/diploma-font).",
      "**Beer, bread and wine labels:** a signal of tradition, especially in German-speaking regions.",
      "**Chicano and West Coast lettering:** a central part of an art tradition built in Mexican-American communities. See [Chicano fonts](/fonts/chicano).",
      "**Hip hop and streetwear:** names and logos in Old English lettering have been common for decades.",
      "**Metal and goth music:** band logos and album art. See the [metal font generator](/metal-font-generator).",
      "**Tattoos:** names, dates and phrases in blackletter remain one of the most requested lettering styles.",
    ] },

    { type: "h2", text: "How do I use blackletter without sending the wrong message?" },
    { type: "ul", items: [
      "Look at the whole design, not just the font. Avoid pairing blackletter with eagles, runes, numbers or slogans associated with extremist groups.",
      "Think about your audience. In Germany some readers react more strongly than in the US, where blackletter mostly reads as \"tradition\" or \"street\".",
      "Choose the variant that fits the mood: a lighter, rounder Fraktur or a modern blackletter like Pirata One feels friendlier than heavy, spiky display faces.",
      "If you're designing for someone else, show them a mockup and ask how it reads to them.",
    ] },

    { type: "faq", items: [
      { q: "Did the Nazis invent blackletter?", a: "No. Blackletter developed from medieval European manuscript hands and was used in print from the 1450s, nearly 500 years before the Nazi era." },
      { q: "Did the Nazis ban Fraktur?", a: "Yes. A circular signed by Martin Bormann on 3 January 1941 banned Fraktur, falsely calling it 'Jewish', and made roman type the official standard." },
      { q: "Is it offensive to get an Old English tattoo?", a: "Not by itself. Blackletter tattoos are common in many cultures. What matters is the wording and any symbols that come with it." },
      { q: "Why is blackletter used on diplomas and newspapers?", a: "It signals age, authority and tradition, because it was the type of early printing and official documents." },
      { q: "Is Fraktur still used in Germany?", a: "Rarely for running text, but it's common on signs, mastheads, labels and traditional branding." },
    ] },
    { type: "cta", text: "Compare textura, rotunda and Fraktur side by side in the", href: "/blackletter-generator", label: "blackletter generator" },
  ],
};

export default post;
