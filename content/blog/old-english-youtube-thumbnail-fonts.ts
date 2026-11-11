import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "old-english-youtube-thumbnail-fonts",
  title: "YouTube Thumbnail Fonts: 8 Free Old English Picks",
  description:
    "YouTube thumbnail fonts in Old English style: 8 free fonts that stay legible at phone size, with glyph counts, weights and a 1280×720 checklist.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Blackletter can work on a thumbnail if you choose a heavy cut and keep the words short. Eight free fonts, measured, plus the specs to export at.",
  related: ["best-font-big-bold-letters-album-cover", "old-english-font-size-guide", "blackletter-font-pairings"],
  body: [
    { type: "p", text: "The best Old English fonts for YouTube thumbnails are the heavy, simplified ones: **UnifrakturCook** for the classic look, **Pirata One** when you need the word read in a split second, and **Germania One** when space is tight. All 8 fonts below are free under the SIL Open Font License, so they're fine on a monetised channel. Keep it to 1 to 3 words and export at 1280 × 720 pixels." },
    { type: "h2", text: "Why do most blackletter fonts fail on thumbnails?" },
    { type: "p", text: "A thumbnail is judged at the size of a fingernail on a phone feed. Classic Fraktur relies on thin hairlines and tight inner spaces, and both disappear first when an image is scaled down. Letters that look ornate at full size turn into a dark smudge, and viewers scroll past before decoding the word. The fix isn't to avoid blackletter; it's to pick cuts with thick strokes and open shapes, and to give them far more room than you'd give a sans-serif." },
    { type: "h2", text: "Which 8 free fonts hold up at thumbnail size?" },
    { type: "p", text: "Glyph and weight figures come from our own measurement of each font file on Google Fonts (November 2026). Six are blackletter; two are honest alternatives for channels where gothic is the wrong tone." },
    { type: "table", head: ["Font", "Style", "Weights", "Glyphs", "Use it when"], rows: [
      ["[UnifrakturCook](/fonts/unifrakturcook)", "Heavy Fraktur", "700", "271", "You want the unmistakable Old English stamp: hip-hop, history, true crime"],
      ["[Pirata One](/fonts/pirata-one)", "Simplified blackletter", "400", "386", "Legibility matters most; the shapes are the most open of the group"],
      ["Germania One", "Condensed gothic", "400", "282", "A long word has to fit across a narrow area"],
      ["Manufacturing Consent", "Sharp modern blackletter", "400", "355", "Gaming, drill and streetwear channels that want a crisp edge"],
      ["New Rocker", "Rock-poster blackletter", "400", "442", "Music reactions and gig vlogs"],
      ["Jacquard 24", "Pixel blackletter", "400", "357", "Retro and indie game videos"],
      ["Nosifer", "Dripping horror", "400", "337", "Horror and Halloween videos where gothic alone feels too calm"],
      ["Rye", "Western wood type", "400", "271", "Outdoor, cowboy or whiskey content that wants old-fashioned without gothic"],
    ]},
    { type: "p", text: "Heavier isn't always better: [Metal Mania](/fonts/metal-mania) and the spikier display faces look great as a channel logo but can be hard to read as a two-word title. Try them on the [free fonts page](/fonts) with your own words before committing." },
    { type: "h2", text: "What size and format should a YouTube thumbnail be?" },
    { type: "p", text: "Per YouTube's help pages at the time of writing, upload thumbnails at 1280 × 720 pixels (16:9), at least 640 pixels wide, as JPG, PNG or GIF, and under 2 MB. Check the current help page before a big redesign, as limits change." },
    { type: "table", head: ["Setting", "Value", "Why it matters for blackletter"], rows: [
      ["Canvas", "1280 × 720 px, 16:9", "Design at full size so strokes stay crisp after YouTube scales the image down"],
      ["Minimum width", "640 px", "Below this, thin Fraktur strokes break up"],
      ["File size", "Under 2 MB", "Export PNG for sharp letter edges; use JPG only if PNG is too heavy"],
      ["Text height", "Aim for a large share of the frame", "Blackletter needs more height than a plain font to read the same"],
      ["Word count", "1 to 3 words", "Each extra word shrinks every letter"],
    ]},
    { type: "h2", text: "How do I make Old English text readable on a busy background?" },
    { type: "ul", items: [
      "**Add a thick outline or a hard shadow.** A dark stroke around light letters (or the reverse) separates them from a face or a game screenshot.",
      "**Capitalise only the first letter.** Blackletter capitals are ornate; a word in all capitals reads as a texture, not a word.",
      "**Put the text on the calmer side of the image.** Faces and bright areas compete with dense letter shapes.",
      "**Test it small.** Zoom out until the thumbnail is about phone size, or view it on your own phone, and ask someone who hasn't seen it to read it.",
      "**Pair it.** If you need a second line, set it in a plain sans-serif; our [font pairing guide](/blog/blackletter-font-pairings) has combinations that work.",
    ]},
    { type: "h2", text: "Do I need a font generator for thumbnails?" },
    { type: "p", text: "Not usually. A thumbnail is an image, so any installed font works in your editor, and installed fonts render more cleanly than copy-paste Unicode letters. If you don't have an editor that loads fonts, type your words into [Old English text to image](/old-english-text-to-image) and download a transparent PNG to drop onto your frame. For the title, description and comments, where you can't choose a font, use the [Old English font for YouTube](/old-english-font-youtube) generator instead." },
    { type: "faq", items: [
      { q: "What is the best Old English font for YouTube thumbnails?", a: "UnifrakturCook for a traditional look and Pirata One for maximum readability. Both are free, heavy enough to survive scaling, and allowed on monetised channels under the SIL Open Font License." },
      { q: "Can I use these fonts on a monetised channel?", a: "Yes. All eight are under the SIL Open Font License, which allows commercial use, including thumbnails and channel art." },
      { q: "What size should thumbnail text be?", a: "Big enough to read at phone size. For blackletter, that usually means the main word fills a large part of the frame and you keep to one to three words." },
      { q: "Why does my blackletter text look blurry after upload?", a: "Thin strokes lose detail when YouTube scales the image. Use a heavier font, export as PNG at 1280 × 720, and add an outline so the letter edges stay distinct." },
      { q: "Can I put copy-paste Old English text in my video title?", a: "Yes, most Unicode Fraktur letters display in titles, but they can hurt search and screen-reader access. Use them sparingly, for one styled word rather than the whole title." },
    ]},
    { type: "cta", text: "Make a transparent PNG of your thumbnail text with", href: "/old-english-text-to-image", label: "Old English text to image" },
  ],
};

export default post;
