import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "fraktur-letters-showing-as-boxes",
  title: "Old English Text Showing as Boxes? 5 Causes and Fixes",
  description:
    "Old English or Fraktur text showing as boxes, question marks or odd capitals? The 5 usual causes, from missing font coverage to the C H I R Z gap.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Empty rectangles, question marks or five capitals that look wrong: what's happening when pasted blackletter breaks, and how to fix it.",
  related: ["long-s-explained", "old-english-font-size-guide", "how-unicode-fonts-actually-work"],
  body: [
    { type: "p", text: "When pasted Old English letters turn into □ boxes, the device viewing them has no font that can draw characters from Unicode's Mathematical Alphanumeric Symbols block (U+1D400–U+1D7FF). That block was only added in Unicode 3.1 in 2001, so older systems and some apps never got a font for it. There are 5 common causes in total; updating the device, switching app or posting an image instead fixes almost all of them." },

    { type: "h2", text: "What do the boxes mean?" },
    { type: "p", text: "Typographers call these empty rectangles \"tofu\". Your text hasn't been damaged: the characters arrived intact, but the screen showing them can't find a drawing for those code points, so it shows a placeholder. Copy the same text into a newer phone and it will usually appear correctly. That's also why you might see your bio fine while a friend sees boxes." },
    { type: "p", text: "Fraktur letters sit far outside the everyday Latin alphabet. Each one is a separate character with a five-digit code, for example 𝔄 is U+1D504. A font has to deliberately include that range, and many fonts designed for normal reading don't." },

    { type: "h2", text: "Why do my boxes, question marks or odd letters appear?" },
    { type: "table", head: ["What you see", "Likely cause", "Fix"], rows: [
      ["Every Fraktur letter is a □ box", "The viewing device has no font covering U+1D400–U+1D7FF", "Update the operating system, or view it on another device"],
      ["Question marks or ? in a diamond", "The text passed through a system that only handles older encodings, such as some SMS gateways, forms or databases", "Paste somewhere that supports full Unicode; for forms, use plain text"],
      ["5 capitals (C, H, I, R, Z) look different from the rest", "Those 5 come from the Letterlike Symbols block, so a different font may draw them", "Use Bold Fraktur, whose 52 letters are all in one block"],
      ["Letters show in one app but not another", "Each app can bring its own font and fallback rules", "Try the native app instead of a web view, or vice versa"],
      ["Letters look fine but a game or site rejects the name", "The platform filters characters outside a basic set", "Use the styled text only where it's allowed, such as display names or bios"],
    ] },

    { type: "h2", text: "Why do C, H, I, R and Z look different?" },
    { type: "p", text: "Unicode encoded ℭ, ℌ, ℑ, ℜ and ℨ years before the full Fraktur alphabet, as standalone symbols for mathematics. When the complete set arrived in 2001, those five positions were left empty in the new block and point back to the older characters instead. A phone might draw most of a word with one font and those five capitals with another, so they come out slightly bigger, thinner or a different shape." },
    { type: "p", text: "Regular Fraktur has this gap; Bold Fraktur doesn't. All 52 Bold Fraktur letters live together in one range, which tends to look more consistent. You can grab them from the [Bold Fraktur alphabet](/bold-fraktur) or pick a bold style in the [Old English font generator](/)." },

    { type: "h2", text: "Which devices are most likely to show boxes?" },
    { type: "p", text: "Current versions of iOS, Android, Windows and macOS generally display these letters, because their system fonts include the math alphabets. Problems usually come from:" },
    { type: "ul", items: [
      "Phones and tablets that no longer receive system updates, especially older Android versions with limited fonts.",
      "Older Windows installations, smart TVs, car displays and other devices that ship with a small set of fonts.",
      "Apps that bundle their own typeface and don't fall back to the system font for missing characters.",
      "Printers and label makers with built-in fonts, which may print nothing or a placeholder.",
    ] },
    { type: "p", text: "Exact version cut-offs vary by manufacturer and by the fonts a phone maker installs, so the reliable test is to look at your text on the oldest device your audience is likely to use." },

    { type: "h2", text: "How do I fix boxes in my own bio or post?" },
    { type: "ol", items: [
      "**Check on a second device.** If it looks right there, the problem is the viewer's device, not your text.",
      "**Update the device that shows boxes.** A system update often brings new fonts.",
      "**Switch to Bold Fraktur.** It avoids the five mixed-in capitals.",
      "**Shorten the styled part.** Keep blackletter to your name or one line, so a reader with tofu still sees the rest in plain letters.",
      "**Post an image instead.** For banners, thumbnails or print, export real blackletter type with the [text to image tool](/old-english-text-to-image). An image looks identical on every screen.",
    ] },

    { type: "h2", text: "Is there a version that never breaks?" },
    { type: "p", text: "Only images and installed fonts. Copy-paste text depends on the reader's device by design. If you control the app, as in Word, Canva or Cricut, install a real blackletter font from our [free font directory](/fonts) instead; the letters are then ordinary A–Z drawn in a blackletter style, and nothing can turn into boxes." },

    { type: "faq", items: [
      { q: "Why does Old English text show as boxes on some phones?", a: "The phone doesn't have a font that includes the Mathematical Fraktur characters, so it shows an empty box as a placeholder." },
      { q: "Will other people see boxes if I see the letters fine?", a: "Some might. What each person sees depends on their own device and app, so check your text on an older phone if it matters." },
      { q: "Why are some capital letters a different size?", a: "C, H, I, R and Z come from an older Unicode block and may be drawn by a different font. Bold Fraktur doesn't have this problem." },
      { q: "Can I fix boxes without updating my phone?", a: "Sometimes. Try a different app or browser, which may bring its own fonts. Otherwise, send the text as an image." },
      { q: "Do boxes mean the text is corrupted?", a: "No. The characters are intact; only the display is missing a font. Paste the same text on a newer device and it will normally appear correctly." },
    ] },
    { type: "cta", text: "Get a version that looks the same everywhere with the", href: "/old-english-text-to-image", label: "Old English text to image tool" },
  ],
};

export default post;
