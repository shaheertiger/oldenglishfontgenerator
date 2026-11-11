import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "old-english-wedding-invitations",
  title: "Old English Wedding Invitations: Fonts for All 7 Lines",
  description:
    "Wedding invitation fonts in Old English: which of the 7 invitation lines suit blackletter, what to pair it with, and how to set it up in Microsoft Word.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Blackletter can make an invitation feel like a royal proclamation or like a ransom note. The difference is knowing which lines to letter and which to leave plain.",
  related: ["best-monogram-fonts-blackletter", "block-vs-script-font", "blackletter-font-pairings"],
  body: [
    { type: "p", text: "Old English lettering works on a wedding invitation when it is used for one or two lines, usually the couple's names, and the other five lines of a standard invitation are set in a script or a plain serif. A whole card in blackletter is hard to read; a card with blackletter names over a clear serif date and address looks formal and still gets people to the right venue on the right day." },
    { type: "h2", text: "When does a blackletter invitation suit the wedding?" },
    { type: "p", text: "Blackletter carries a lot of atmosphere, so it should match the day. It fits naturally with:" },
    { type: "ul", items: [
      "**Castle, church and cathedral venues**, where the lettering echoes the building.",
      "**Gothic, medieval or Renaissance-fair themes**, including costume weddings.",
      "**Winter and evening weddings** with dark card stock, wax seals and deep reds or greens.",
      "**German, Dutch or Scandinavian heritage**, where Fraktur was ordinary printing type for centuries.",
    ] },
    { type: "p", text: "It is a harder sell for a beach ceremony, a garden brunch or a minimalist city wedding. Those usually look better with a light script or a modern serif, perhaps with a single blackletter monogram on the envelope." },
    { type: "h2", text: "Which invitation lines should be in Old English?" },
    { type: "p", text: "A traditional invitation has about seven parts. The table suggests a style for each, assuming blackletter is the accent and a script or serif carries the rest." },
    {
      type: "table",
      head: ["Invitation line", "Example wording", "Suggested style"],
      rows: [
        ["Host line", "Together with their families", "Serif, small caps or italic"],
        ["Request line", "request the pleasure of your company", "Script or italic"],
        ["Couple's names", "Eleanor Grace & Thomas Hale", "**Blackletter**, the largest text on the card"],
        ["Date and time", "Saturday, the fourteenth of June, at four o'clock", "Serif, spelled out"],
        ["Venue and address", "St Mary's Church, 12 Abbey Road", "Serif, highest legibility"],
        ["Reception line", "Dinner and dancing to follow", "Script or italic"],
        ["RSVP", "Kindly reply by the first of May", "Serif, small size"],
      ],
    },
    { type: "p", text: "Spelling out the date has a practical benefit beyond tradition: blackletter fonts have plain-looking digits, and Unicode has no Fraktur numbers at all, so a written-out date avoids an awkward mix. The [Old English numbers](/old-english-numbers) page explains the digit problem if you do need figures." },
    { type: "h2", text: "What font pairs with Old English on an invitation?" },
    { type: "p", text: "Pair by contrast. Blackletter is dense, angular and vertical, so its partner should be open and calm. A formal script such as Pinyon Script or Great Vibes adds romance; a classical serif such as IM Fell English keeps things dignified. Avoid pairing two decorative faces, such as blackletter with a swashy script on the same line, because they compete." },
    { type: "p", text: "For the blackletter itself, UnifrakturMaguntia gives the traditional book look, UnifrakturCook is heavier for a bold name line, and Fruktur is softer if the strict look feels too severe. Preview them with your own names in the [Old English fonts](/fonts/old-english) and [calligraphy fonts](/fonts/calligraphy) collections." },
    { type: "h2", text: "How do you set up an Old English invitation in Microsoft Word?" },
    { type: "ol", items: [
      "Choose your font. Word on Windows and Mac usually includes **Old English Text MT** with Microsoft Office; type the name into the font box. Our [Old English Text MT page](/fonts/old-english-text-mt) explains what it is and the free lookalikes.",
      "Set the page size to your card (5 × 7 inches is a common invitation size) under Layout, Size, More Paper Sizes.",
      "Put each invitation line in its own paragraph, centre everything, and add space before the names line rather than blank lines, so spacing stays even.",
      "Give the blackletter names extra letter spacing (Font, Advanced, Spacing: Expanded by about 0.5–1 pt) so the dense letters breathe.",
      "Export as PDF before sending to a printer, so the font travels with the file. The [Word guide](/fonts/old-english/word) covers embedding fonts if you share the .docx instead.",
    ] },
    { type: "h2", text: "Can you create your own wedding calligraphy font?" },
    { type: "p", text: "Turning your own handwriting into a working font file is possible with font-making software, but drawing and spacing a full alphabet takes real time, and invitations only need a few words. Most couples get a better result one of three ways: hire a calligrapher to letter just the names and scan them; use an existing calligraphy font and adjust spacing by hand; or set the names in blackletter and export them as a high-resolution image with the [text to image tool](/old-english-text-to-image), then place that image in Word or Canva." },
    { type: "h2", text: "How big should the lettering be?" },
    { type: "p", text: "Print a test at actual size. As a rough guide, blackletter names usually need to be noticeably larger than the serif text around them, often around twice the size, because the tight counters close up when small. If guests have to squint at the venue address, the card has failed at its one practical job, so keep that line simple and generous." },
    {
      type: "faq",
      items: [
        { q: "Is Old English a good font for wedding invitations?", a: "Yes, for the couple's names or a monogram, especially at gothic, church, castle or winter weddings. Set the date, venue and RSVP in a clear serif or script." },
        { q: "What is the Old English font in Microsoft Word called?", a: "Old English Text MT. It normally comes with Microsoft Office. Free alternatives include UnifrakturMaguntia and UnifrakturCook." },
        { q: "What font goes with Old English on an invitation?", a: "A formal script such as Pinyon Script or Great Vibes, or a classical serif such as IM Fell English. Pair one decorative face with one calm one." },
        { q: "Should I write the wedding date in numbers or words?", a: "Formal invitations traditionally spell the date out, and it also avoids the plain digits that blackletter fonts use." },
        { q: "Can I print Old English invitations at home?", a: "Yes. Export to PDF, print a test at actual size, and check the names and address are readable before printing the full run." },
      ],
    },
    { type: "cta", text: "Try your names in blackletter, then export them as an image, with the", href: "/old-english-text-to-image", label: "Old English text to image tool" },
  ],
};

export default post;
