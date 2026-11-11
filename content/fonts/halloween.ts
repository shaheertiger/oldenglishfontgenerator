import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "halloween",
  title: "Halloween Fonts — 10 Free Spooky Fonts for Posters & Canva",
  description:
    "Halloween fonts free to download: 10 open-licence spooky, dripping, vampire and gothic fonts for party invites, posters and Canva, with live preview.",
  h1: "Halloween Fonts",
  crumb: "Halloween Fonts",
  intro:
    "Here are 10 free Halloween fonts in three moods: 6 classic horror display faces (dripping, torn and haunted-house letters), 1 heavy-metal face and 3 gothic blackletters for vampire and witchy designs. All are open-licence, so you can use them on party invitations, shop signs, merch and event posters you're paid for. Type your headline to try every one.",
  sample: "Trick or Treat",
  fonts: ["Creepster", "Nosifer", "Eater", "Butcherman", "Griffy", "Jolly Lodger", "Metal Mania", "UnifrakturCook", "New Rocker", "Pirata One"],
  notes: {
    "Creepster": "The classic comic-book horror title with dripping cuts. Instantly reads as Halloween on a party flyer.",
    "Nosifer": "Blood runs off the bottom of every letter. Very wide, so keep it to two or three words.",
    "Eater": "Torn, chewed edges for zombie walks and haunted trails. Looks best large, where the texture shows.",
    "Butcherman": "Slashed, pointed letters like a slasher-film poster. Good for escape rooms and scare attractions.",
    "Griffy": "Twisted and playful rather than frightening, so it suits kids' parties and school events.",
    "Jolly Lodger": "Tall, narrow and old-fashioned, like a vintage haunted-house sign. Fits long words such as Halloween in a narrow space.",
    "Metal Mania": "Spiky heavy-metal capitals for a darker, adult event or a horror-movie night.",
    "UnifrakturCook": "Heavy Old English for vampire, Dracula and witch themes. Pair it with a plain font for the date and address.",
    "New Rocker": "Gothic with flared capitals, ideal for a rock-and-roll Halloween party or tattoo-shop flash day.",
    "Pirata One": "Legible gothic, so it works for the smaller text on a menu or the rules of a costume contest.",
  },
  sections: [
    {
      h2: "Which Halloween font fits my event?",
      blocks: [
        { table: { head: ["Event or theme", "Try", "Why it works"], rows: [
          ["Family or kids' party", "Griffy, Jolly Lodger", "Spooky without gore; still readable for young guests."],
          ["Haunted house or scare maze", "Butcherman, Eater, Nosifer", "Sharp or bloody shapes that set expectations before people walk in."],
          ["Classic horror movie night", "Creepster", "The look of old horror comics and drive-in posters."],
          ["Vampire, witch or gothic ball", "UnifrakturCook, Pirata One", "Blackletter suggests castles, candles and old books rather than gore."],
          ["Metal or rock Halloween gig", "Metal Mania, New Rocker", "Spikes and flared capitals borrowed from band logos."],
        ] } },
        { p: "Add bats, skulls and candles around a title with the [gothic symbols](/gothic-symbols) page, or browse more dark blackletter in the [gothic fonts](/fonts/gothic) collection." },
      ],
    },
    {
      h2: "Can I use these Halloween fonts in Canva?",
      blocks: [
        { p: "Maybe, depending on your plan. Canva's built-in library changes over time, so search for the font names above and use any that appear. If one is missing and you have a paid plan, download it from Google Fonts and upload the file through your Brand Kit. Free Canva accounts can't upload fonts; the workaround is to make your title as a transparent PNG with the [text to image tool](/old-english-text-to-image) and add it as an image. The [Canva guide](/fonts/old-english/canva) walks through both routes." },
      ],
    },
    {
      h2: "How do I make Halloween text for Instagram or TikTok?",
      blocks: [
        { p: "Installed fonts don't work in captions, bios or usernames. For those, use the [horror font generator](/horror-font-generator), which turns your text into cursed, distressed and bat-framed gothic characters you can paste anywhere. The [gothic font generator](/gothic-font-generator) has more blackletter variations." },
      ],
    },
  ],
  faq: [
    { q: "What is the best free Halloween font?", a: "Creepster is the most recognisable: it's the dripping comic-horror look most people picture. For something more elegant, try UnifrakturCook." },
    { q: "Are these Halloween fonts free for commercial use?", a: "Yes. All 10 use the SIL Open Font License, so you can use them on tickets, merch and paid event posters. You just can't sell the font files." },
    { q: "What font looks like blood dripping?", a: "Nosifer, which has drips running from the base of every letter. Creepster has a lighter dripping effect." },
    { q: "What is a good vampire font?", a: "A heavy blackletter such as UnifrakturCook gives the old-world, Dracula feel. Add a bat or rose symbol for extra atmosphere." },
    { q: "Do Halloween fonts work on Cricut?", a: "Yes, after you install them on your computer. Chunky faces such as Creepster and Jolly Lodger cut and weed more easily than thin ones; see the [Cricut guide](/fonts/old-english/cricut)." },
    { q: "Why does the preview look plain for a second?", a: "The fonts load from Google Fonts after the page appears, so a fallback font shows briefly on slow connections." },
  ],
  tools: ["/horror-font-generator", "/gothic-font-generator", "/gothic-symbols"],
};

export default page;
