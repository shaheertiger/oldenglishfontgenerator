import type { PageContent } from "./types";

const page: PageContent = {
  slug: "old-english-text-to-image",
  title: "Old English Text to Image — PNG & SVG Blackletter Export",
  description:
    "Old English text to image: render words in real blackletter fonts and download a PNG or SVG with a transparent or parchment background. Free.",
  h1: "Old English Text to Image",
  crumb: "Old English Text to Image",
  intro:
    "Copy-paste letters are perfect for social media, but sometimes you need an actual image: a header for a video, a logo draft, a sticker, or a file a printer can work with. This Old English text to image tool draws your words with real open-licence blackletter typefaces and saves them as PNG or SVG, entirely in your browser.",
  tool: {
    styles: ["bold-fraktur", "fraktur", "illuminated", "fraktur-caps", "frame-banner", "gothic-framed"],
    sample: "Old English",
    placeholder: "Type text to compare as Unicode first…",
    presets: ["Old English", "The Black Lantern", "Est. 1987", "Saint & Sinner"],
  },
  stylesHeading: "Unicode version (for pasting)",
  howTo: {
    heading: "How to export Old English text as an image",
    steps: [
      ["Type in the image editor", "Use the text box under the preview. Press Enter to start a new line; up to four lines fit."],
      ["Pick typeface and colours", "UnifrakturCook is heavy and dramatic; UnifrakturMaguntia is a lighter, classic Fraktur. Choose background and ink."],
      ["Download", "PNG for social media and documents, SVG when you need something that scales without blurring."],
    ],
  },
  sections: [
    {
      h2: "Image editor",
      blocks: [{ widget: "image-export" }],
    },
    {
      h2: "PNG or SVG?",
      blocks: [
        {
          table: {
            head: ["Format", "Good for", "Keep in mind"],
            rows: [
              ["PNG", "Instagram posts, thumbnails, documents, slides", "Fixed size of 1200 × 600 pixels. Transparent background is available."],
              ["SVG", "Logos, cutting machines, print, further editing in vector software", "The typeface is embedded inside the file, so it displays without anything installed. Some editors may ask to convert the text to outlines."],
            ],
          },
        },
      ],
    },
    {
      h2: "About the typefaces",
      blocks: [
        { p: "Both typefaces are part of the Unifraktur project, which digitised historical German Fraktur designs and released them under the SIL Open Font License. That licence lets you use them in personal and commercial work, including logos, and the images you make are yours. UnifrakturMaguntia follows a classic book Fraktur; UnifrakturCook is heavier, with chunky strokes that survive small sizes and stickers well." },
        { p: "Because the image uses an actual font file, the letters look the same on every device, which isn't true of copy-paste text. That makes images the better choice whenever the exact shape matters." },
      ],
    },
  ],
  built:
    "This page combines two techniques. The style list uses Unicode Mathematical Fraktur characters for pasting. The image editor ignores Unicode and draws with the UnifrakturCook and UnifrakturMaguntia font files on an HTML canvas; the SVG export embeds the chosen font as base64 so the file is self-contained.",
  related: {
    heading: "Use your image with these tools",
    hrefs: ["/old-english-tattoo-font", "/blackletter-generator", "/old-english-letters", "/old-english-name-generator", "/fraktur-generator", "/chicano-font-generator", "/diploma-font"],
  },
  faq: [
    { q: "Can I use the exported images commercially?", a: "Yes. Both typefaces are released under the SIL Open Font License, which allows commercial use of images and documents made with them." },
    { q: "Why is there no SVG option for the tattoo mockup?", a: "The mockup includes a drawn forearm, which only makes sense as a picture. Use this page for a clean vector file to give your artist." },
    { q: "Is my text uploaded to a server?", a: "No. The image is drawn and saved in your browser." },
    { q: "Can I get a transparent background?", a: "Yes. Choose Transparent in the background menu before downloading a PNG." },
    { q: "Why doesn't the image use the same letters as the copy-paste styles?", a: "Copy-paste styles depend on your device's fonts. The image uses fixed font files so the output is identical everywhere." },
  ],
};

export default page;
