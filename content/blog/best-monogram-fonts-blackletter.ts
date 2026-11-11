import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "best-monogram-fonts-blackletter",
  title: "Best Fonts for Monograms: 3 Styles, 9 Free Fonts Compared",
  description:
    "Best fonts for monograms by style: blackletter, script and Roman capitals, with 9 free fonts, the traditional letter order and couples' layouts.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "A monogram is two or three letters doing the work of a whole name, so the font carries everything. Here are the three styles that hold up and nine free fonts to try.",
  related: ["old-english-wedding-invitations", "block-vs-script-font", "best-fonts-for-embroidery-blackletter"],
  body: [
    { type: "p", text: "The best monogram fonts fall into three families: blackletter for heritage and heraldic looks, formal script for weddings and gifts, and Roman capitals for clean, classic initials. Of the 9 free fonts compared below, UnifrakturCook, Great Vibes and Cinzel Decorative are the strongest starting point in each family, and all nine are open-licence, so you can use them on products you sell." },
    { type: "p", text: "A monogram is unforgiving because there are only two or three letters. A weak capital that would pass unnoticed in a sentence becomes the whole design. That is why monogram choices lean towards fonts with confident, distinctive capitals rather than fonts that are merely pretty in a paragraph." },
    { type: "h2", text: "Which monogram font style should you pick?" },
    { type: "p", text: "Start from where the monogram will live. Engraved silver, a family crest or a brewery label suits blackletter. Towels, invitations and stationery usually look right in script. Signet rings, business stamps and minimal branding read best in Roman capitals, because the letters stay legible even when they are tiny." },
    {
      type: "table",
      head: ["Style", "Free fonts to try", "Best for", "Watch out for"],
      rows: [
        ["Blackletter", "UnifrakturCook, UnifrakturMaguntia, Grenze Gotisch", "Crests, labels, leather, tattoos", "Capitals like 𝔍 and 𝔗 are easy to misread"],
        ["Formal script", "Great Vibes, Pinyon Script, Monsieur La Doulaise", "Weddings, linens, gifts", "Swashes collide when letters overlap"],
        ["Roman and collegiate capitals", "Cinzel Decorative, IM Fell English, Graduate", "Rings, stamps, minimal logos, team gear", "Can look plain without a frame or rule"],
      ],
    },
    { type: "p", text: "You can preview every one of these with your own initials in the [calligraphy fonts](/fonts/calligraphy) and [Old English fonts](/fonts/old-english) collections. If you only need the letters for a bio or a caption, copy Unicode initials from the [Old English letters](/old-english-letters) page instead; nothing has to be installed." },
    { type: "h2", text: "What order do the letters go in a monogram?" },
    { type: "p", text: "There is no law, only conventions, and they differ between countries and families. The most common English-language conventions are these:" },
    {
      type: "table",
      head: ["Layout", "Letter order", "Example (Jane Ann Smith; couple Jane and Mark Smith)"],
      rows: [
        ["Single initial", "Surname initial only", "S"],
        ["Traditional three-letter", "First, SURNAME (larger, centre), middle", "J S A"],
        ["Block or stacked", "First, middle, surname, all the same size", "J A S"],
        ["Couple, traditional", "One partner's first, shared SURNAME (larger), other's first", "J S M"],
        ["Couple, before the wedding", "Both first initials joined by an ampersand", "J & M"],
      ],
    },
    { type: "p", text: "The traditional three-letter layout is the one that confuses people: the surname initial sits in the middle and is drawn larger, with the first and middle initials smaller on either side. A block monogram keeps the letters in reading order at one size, which is simpler and safer if the design will be read by strangers. Couples' monograms traditionally put the shared surname in the centre, but plenty of couples now pick whichever order looks best, or use just their first initials until the wedding." },
    { type: "h2", text: "Why does blackletter work so well for initials?" },
    { type: "p", text: "Blackletter capitals were designed to be ornamental. Medieval scribes drew them larger and more elaborate than the text around them, and Fraktur printers kept that habit. As a result, a single blackletter capital already looks like a finished emblem. Set three of them in a frame and you have something that reads as heraldic without any extra drawing." },
    { type: "p", text: "The catch is legibility. Several Fraktur capitals look alike to modern eyes: I and J are near twins, and C, E and G can blur at small sizes. If the monogram will be small, or the people reading it are not familiar with blackletter, test it on someone who doesn't know the initials. The [illuminated letters](/illuminated-letters) page shows decorated single capitals if you want one large letter instead of three." },
    { type: "h2", text: "How do you make a monogram in Word or Canva?" },
    { type: "p", text: "Type each initial in its own text box so you can size and nudge them separately. Make the centre letter about one and a half times the height of the side letters for a traditional layout, then group the boxes. For embroidery or engraving, export the arrangement as a PNG or SVG with the [text to image tool](/old-english-text-to-image) and send that file, because the workshop may not have your font installed. Our guides for [Word](/fonts/old-english/word) and [Canva](/fonts/old-english/canva) cover installing the font itself." },
    { type: "h2", text: "Script or blackletter for a wedding monogram?" },
    { type: "p", text: "Script is the default because it feels soft and romantic, and overlapping script letters can be woven together beautifully. Blackletter suits gothic, medieval, winter or castle weddings, and it pairs well with a script for everything else on the stationery. Our post on [Old English wedding invitations](/blog/old-english-wedding-invitations) covers how to combine the two without the invitation becoming hard to read." },
    {
      type: "faq",
      items: [
        { q: "What is the best free font for a monogram?", a: "It depends on the style. UnifrakturCook is a strong free blackletter, Great Vibes a dependable script and Cinzel Decorative a classic Roman option. All three are under the SIL Open Font License." },
        { q: "Which letter is bigger in a three-letter monogram?", a: "In the traditional layout, the surname initial is larger and placed in the middle, with the first initial on the left and the middle initial on the right." },
        { q: "Can I use these fonts on monogrammed products I sell?", a: "Yes. All nine fonts listed here are open-licence, which allows commercial use. You can't sell the font files themselves." },
        { q: "Do monograms have to follow the traditional order?", a: "No. The traditional order is a convention, not a rule. Block monograms in reading order are common and easier for strangers to understand." },
        { q: "Can I put a monogram in my Instagram bio?", a: "Yes, as Unicode letters. Copy blackletter initials from the Old English letters page; installed fonts don't work inside Instagram." },
      ],
    },
    { type: "cta", text: "Copy blackletter initials and framed monograms from the", href: "/old-english-letters", label: "Old English letters page" },
  ],
};

export default post;
