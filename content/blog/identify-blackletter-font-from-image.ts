import type { BlogPost } from "@/lib/blog";

const post: BlogPost = {
  slug: "identify-blackletter-font-from-image",
  title: "What Font Is This? 5 Steps to Identify Blackletter Text",
  description:
    "What font is this? Identify a blackletter or Old English font from an image in 5 steps: crop, run an identifier, check key letters, find a free match.",
  date: "2026-11-11",
  readingTime: "4 min read",
  excerpt:
    "Font identifiers struggle with blackletter more than with almost any other style. A few letters you can check by eye will get you most of the way.",
  related: ["block-vs-script-font", "is-old-english-font-free-commercial-use", "fraktur-letters-showing-as-boxes"],
  body: [
    { type: "p", text: "To identify a blackletter font from an image, take 5 steps: crop a clean, straight sample; run it through an image-based font identifier; check a handful of tell-tale letters yourself; accept that logos are often custom lettering with no exact font; and then pick the closest free font and test your own words in it. Expect step 3 to matter most, because automatic identifiers often confuse blackletter styles with one another." },
    { type: "h2", text: "Step 1: How do you get a usable sample?" },
    { type: "p", text: "Identifiers work by isolating individual letters, so give them easy material:" },
    { type: "ul", items: [
      "Crop to one line of text, ideally with five or more different letters.",
      "Straighten the image so the baseline is level; rotate and correct perspective if it was photographed at an angle.",
      "Increase contrast so letters are dark on light, and make sure letters don't touch each other or a background pattern.",
      "Use the largest version of the image you can find. A blurry thumbnail hides exactly the details that tell blackletter styles apart.",
    ] },
    { type: "h2", text: "Step 2: Which tools identify a font from a picture?" },
    { type: "p", text: "Upload-an-image identifiers compare the letter shapes in your picture with a database of fonts. Well-known examples include WhatTheFont from MyFonts and the Font Squirrel Matcherator. They usually ask you to confirm which letter each detected shape is, so check carefully: blackletter capitals are often misread, and a wrong confirmation sends the search in the wrong direction. Treat the results as a shortlist, not a verdict." },
    { type: "p", text: "If you want the words rather than the font, OCR tools can turn an image into text. Be aware that OCR software often misreads Fraktur, and old printing that uses the long s (ſ) is regularly transcribed as f. Our post on [the long s](/blog/long-s-explained) explains that letter." },
    { type: "h2", text: "Step 3: Which letters tell blackletter styles apart?" },
    { type: "p", text: "Blackletter is a family, not one style. A few features separate the main branches:" },
    {
      type: "table",
      head: ["Feature to check", "Textura", "Rotunda", "Fraktur", "Modern blackletter"],
      rows: [
        ["Lowercase o", "Fully broken, almost hexagonal", "Mostly round", "Broken on one side, curved on the other", "Simplified, often open and round"],
        ["Feet of letters (i, m, n)", "Diamond-shaped feet", "Softer, smaller feet", "Varied, often a flick", "Plain or none"],
        ["Capitals", "Narrow, fairly restrained", "Rounded, broad", "Ornate, with curling 'elephant trunk' strokes", "Simplified, easier to read"],
        ["Overall texture", "Very dense, picket-fence verticals", "Lighter, more open", "Dense but lively, mixed curves", "Even, open spacing"],
        ["Free font to try", "Texturina", "(few free options)", "UnifrakturMaguntia, UnifrakturCook", "Pirata One, Grenze Gotisch"],
      ],
    },
    { type: "p", text: "Capitals are the fastest clue. If they curl and swell with trunk-like strokes, you are almost certainly looking at Fraktur or something modelled on it, which includes the lettering most people call Old English. If everything is tall, narrow and fence-like, think textura. The [blackletter generator](/blackletter-generator) page has a fuller comparison of the families." },
    { type: "h2", text: "Step 4: What if the lettering is a logo?" },
    { type: "p", text: "Many famous blackletter marks, including newspaper nameplates, band logos and sports or clothing brands, are custom drawings or heavily modified fonts. No identifier will find an exact match, because there isn't one to find. In that case, aim for the closest family and weight, and remember that the logo itself is usually a trademark even when a similar font is free. The [newspaper masthead font](/newspaper-masthead-font) page shows how this works for mastheads." },
    { type: "h2", text: "Step 5: How do you find the closest free font?" },
    { type: "p", text: "Once you know the family, open the [free fonts comparison](/fonts) and type a word from your image into the preview of each likely candidate. Compare the capitals and the lowercase g, k, o and s side by side with your sample. Common results:" },
    { type: "ul", items: [
      "**Looks like the classic Old English of diplomas and tattoos:** start with UnifrakturMaguntia or UnifrakturCook, and read about [Old English Text MT](/fonts/old-english-text-mt), the commercial font many people mean.",
      "**Freeware blackletter seen on lots of free-font sites:** compare with [Old London](/fonts/old-london) and [Cloister Black](/fonts/cloister-black).",
      "**Readable, simplified blackletter on menus or games:** try [Pirata One](/fonts/pirata-one).",
      "**Spiky, aggressive band-style lettering:** look at [Metal Mania](/fonts/metal-mania) and New Rocker.",
    ] },
    { type: "h2", text: "What if the text in the image is copy-paste Unicode?" },
    { type: "p", text: "Screenshots of social media bios often show Unicode Fraktur characters like 𝔒𝔩𝔡 𝔈𝔫𝔤𝔩𝔦𝔰𝔥 rather than a font. Their exact look comes from whichever font the viewer's device uses for those characters, so the same text appears slightly different on different phones. You can recreate it instantly with the [Old English font generator](/) instead of hunting for a font file." },
    {
      type: "faq",
      items: [
        { q: "How do I find out what font is in an image?", a: "Crop a clean sample, upload it to an image-based font identifier such as WhatTheFont, confirm the letters carefully, then compare the shortlist by eye." },
        { q: "Why can't font identifiers find my blackletter font?", a: "Blackletter capitals are often misread, many styles look alike, and many logos are custom lettering with no exact font." },
        { q: "What is the most common Old English font?", a: "Old English Text MT, which comes with Microsoft Office, is the one most people mean. UnifrakturMaguntia is a close free alternative." },
        { q: "Can I copy the text out of an image of Fraktur?", a: "OCR tools can try, but they often misread Fraktur letters and the long s. Check the result carefully." },
        { q: "Is a font free if I identify it?", a: "Not necessarily. Identifying a font tells you its name, not its licence. Check the licence before using it commercially." },
      ],
    },
    { type: "cta", text: "Compare free lookalikes with your own words in the", href: "/fonts", label: "free blackletter fonts table" },
  ],
};

export default post;
