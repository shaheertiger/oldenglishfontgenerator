import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "long-s-explained",
  title: "Long S (ſ): Why Old Books Use f for s — 9 Free Fonts Have It",
  description:
    "Long s (ſ) explained: why old books seem to print s as f, the rules printers followed, when it vanished, and the 9 free fonts we measured that include it.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Congreſs, Bleſſing, Miſtreſs: the 'f' in old books is a long s. How it worked, why it vanished, and which free fonts can still set it.",
  related: ["fraktur-letters-showing-as-boxes", "blackletter-history-1941-ban", "blackletter-gothic-fraktur-difference"],
  body: [
    { type: "p", text: "The letter that looks like an f in old books is a long s, ſ (Unicode U+017F). It is simply the old form of s used at the start and in the middle of words, while the familiar round s went at the end, so \"success\" was printed \"ſucceſs\". English printers dropped it around the late 18th and early 19th century, German Fraktur kept it into the 20th, and of the 41 free fonts we measured, only 9 include it." },

    { type: "h2", text: "Is the long s an f?" },
    { type: "p", text: "No. The two only look alike. Compare them closely in a printed book and the f has a crossbar that runs through the stem on both sides, while the long s has at most a small nub on the left and none on the right. Readers at the time never confused them; the mix-up is ours, because we've stopped seeing the long s at all." },
    { type: "p", text: "The habit comes from handwriting. Scribes wrote a tall s that flowed easily into the next letter, and kept the short, round s for the end of a word where nothing followed. Early printers cast both shapes so their type would look like the books readers already knew." },

    { type: "h2", text: "When did printers use ſ and when s?" },
    { type: "p", text: "Rules differed by country, period and print shop, but most English printing of the 1600s and 1700s followed roughly this pattern:" },
    { type: "table", head: ["Position", "Usual form", "Example as printed"], rows: [
      ["Start of a word", "ſ", "ſeaſon"],
      ["Middle of a word", "ſ", "Engliſh"],
      ["End of a word", "s", "books"],
      ["Double s in the middle", "ſſ or ſs", "Bleſſing, Miſtreſs"],
      ["Capital letter", "S (there is no capital long s)", "Sunday"],
      ["Before f (in many shops)", "s, to avoid the clash ſf", "satisfaction printed with round s before f"],
    ] },
    { type: "p", text: "German Fraktur had its own detailed rules tied to word parts, so a round s could appear inside a compound word where one part ended. The German ß is widely traced to a joined pair of long s with z or s, which is why it still sits in the alphabet today." },

    { type: "h2", text: "When did the long s disappear?" },
    { type: "p", text: "In English it faded over a few decades around 1800. Reformist printers began dropping it in the 1780s and 1790s, and by the early 19th century most new books and newspapers used the round s everywhere. The Times of London is often cited as one of the papers that switched in 1803. Reprints and some legal and church printing held on longer." },
    { type: "p", text: "German printing kept it much longer because it kept Fraktur. Books and newspapers set in Fraktur used ſ into the 1930s, until the 1941 order that pushed German printing over to roman type, which you can read about in [our history of the 1941 Fraktur ban](/blog/blackletter-history-1941-ban). Roman (Antiqua) German texts had already mostly dropped it." },

    { type: "h2", text: "Which free fonts include the long s?" },
    { type: "p", text: "We opened the font file of every open-licence font on this site and checked whether it contains U+017F. 9 of the 41 do:" },
    { type: "table", head: ["Font", "Style", "Good for"], rows: [
      ["[UnifrakturMaguntia](/fonts/old-english)", "Fraktur", "Faithful German Fraktur, with ſ alongside umlauts and ß"],
      ["[UnifrakturCook](/fonts/unifrakturcook)", "Fraktur (heavy)", "Display headings in historical German style"],
      ["Grenze Gotisch", "Modern blackletter", "Branding that wants a period detail"],
      ["Manufacturing Consent", "Modern blackletter", "Posters and covers"],
      ["Germania One", "Blackletter display", "Narrow headlines"],
      ["MedievalSharp", "Medieval hand", "Game text and maps"],
      ["IM Fell English", "Fantasy / old print", "Reproducing 17th-century English pages"],
      ["Pinyon Script", "Script", "Copperplate-era handwriting"],
      ["Italianno", "Script", "Fine, light script lettering"],
    ] },
    { type: "p", text: "Popular faces such as Pirata One, Fruktur, Texturina and Uncial Antiqua don't contain it, so a pasted ſ will drop to a fallback font there. The full measurement table, with glyph counts, is on the [all fonts compared](/fonts) page." },

    { type: "h2", text: "How do I type a long s?" },
    { type: "ul", items: [
      "**Windows:** hold Alt and type 383 on the number pad in many apps, or in Word type 017F and press Alt+X.",
      "**Mac:** open the Character Viewer (Control+Command+Space) and search for \"long s\".",
      "**Anywhere:** copy it from here: ſ",
      "**A whole phrase:** type normally and pick the Long S Manuscript style in the [medieval font generator](/medieval-font-generator). It changes every s that is followed by another lowercase letter into ſ and leaves word endings round.",
    ] },
    { type: "p", text: "That automatic rule is simpler than a real printer's judgement. Check words where s comes before f, or compound words, and fix them by hand if accuracy matters." },

    { type: "h2", text: "Should I use the long s today?" },
    { type: "p", text: "Use it where readers expect a period feel and have time to look: a reenactment banner, a historical game, a brewery label with a founding date. Avoid it where the text has to be read fast, and in names that could be misread. \"Bleſſed\" on a sign will be read as \"Blefsed\" by more people than you'd think." },

    { type: "faq", items: [
      { q: "What is the long s called?", a: "It is the long s, also called the medial s or descending s. Its Unicode name is LATIN SMALL LETTER LONG S, code point U+017F." },
      { q: "Why did old books use f instead of s?", a: "They didn't. That letter is a long s, ſ, an older form of lowercase s used at the start and in the middle of words. It looks like an f but has no full crossbar." },
      { q: "When did English stop using the long s?", a: "Gradually around 1800. Many printers abandoned it between the 1780s and the early 1800s." },
      { q: "Is there a capital long s?", a: "No. The long s only exists as a lowercase letter; capitals always use S." },
      { q: "Which free blackletter font has the long s?", a: "Of the fonts we measured, UnifrakturMaguntia, UnifrakturCook, Grenze Gotisch, Manufacturing Consent and Germania One are the blackletter options that include it." },
    ] },
    { type: "cta", text: "Turn any phrase into period spelling with the Long S style in the", href: "/medieval-font-generator", label: "medieval font generator" },
  ],
};

export default post;
