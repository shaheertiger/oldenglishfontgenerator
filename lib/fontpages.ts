// Content for /fonts/{style} directory pages and /fonts/old-english/{app}
// how-to pages. Copy is written per page.

import type { Block } from "@/content/pages/types";

export type FontPage = {
  style: string;
  title: string;
  description: string;
  h1: string;
  crumb: string;
  intro: string;
  sample: string;
  fonts: string[];
  /** Page-specific note per font, replacing the generic blurb. */
  notes?: Record<string, string>;
  sections: { h2: string; blocks: Block[] }[];
  faq: { q: string; a: string }[];
};

export const FONT_PAGES: FontPage[] = [
  {
    style: "old-english",
    title: "Old English Fonts — 10 Free Blackletter Fonts to Download",
    description:
      "Old English fonts you can download free: 10 open-licence blackletter typefaces with live preview of your own text, licence details and download links.",
    h1: "Old English Fonts",
    crumb: "Old English Fonts",
    intro:
      "These are real Old English fonts: font files you install once and then use in Word, Canva, Photoshop, Cricut or anywhere else. Every one is free under the SIL Open Font License, which allows personal and commercial use, including logos and merchandise. Type below to preview your own words in each.",
    sample: "Old English Lettering",
    fonts: ["UnifrakturMaguntia", "UnifrakturCook", "Pirata One", "Grenze Gotisch", "Fruktur", "Texturina", "Manufacturing Consent", "Germania One", "New Rocker", "Jacquard 24"],
    sections: [
      {
        h2: "Font file or copy-paste text?",
        blocks: [
          { p: "A font file changes how ordinary letters look inside one app, so the text stays editable and searchable and prints sharply at any size. Copy-paste text from our [Old English font generator](/) works in places where you can't choose a font, such as Instagram bios or Discord names. Use a font file for documents, print, logos and cutting machines; use copy-paste for social media." },
        ],
      },
      {
        h2: "How to choose an Old English font",
        blocks: [
          { ul: [
            "**Closest to the classic look:** UnifrakturMaguntia, or UnifrakturCook if you want it heavier.",
            "**Needs to be readable in several lines:** Pirata One or Texturina.",
            "**Branding with several weights:** Grenze Gotisch, which ranges from thin to very bold.",
            "**Posters and band names:** New Rocker or Manufacturing Consent.",
            "**Games and pixel art:** Jacquard 24.",
          ] },
          { p: "Want the font inside a specific app? See the step-by-step guides for [Google Docs](/fonts/old-english/google-docs), [Microsoft Word](/fonts/old-english/word), [Canva](/fonts/old-english/canva) and [Cricut](/fonts/old-english/cricut)." },
        ],
      },
      {
        h2: "Licence in plain English",
        blocks: [
          { p: "The SIL Open Font License lets you use these fonts for anything, including commercial products, and embed them in documents and apps. You can't sell the font files on their own, and modified versions must not reuse the original font name. Download from the official Google Fonts page linked on each card so you get the current version and licence file." },
        ],
      },
    ],
    faq: [
      { q: "What is the real name of the Old English font?", a: "Old English is a general label, not one typeface. Microsoft ships a font called Old English Text MT with Office; free alternatives with a similar look include UnifrakturMaguntia and UnifrakturCook." },
      { q: "Are these Old English fonts really free for commercial use?", a: "Yes. All ten are published under the SIL Open Font License, which permits commercial use, including logos, apparel and printed products." },
      { q: "How do I install a font after downloading it?", a: "On Windows, right-click the .ttf file and choose Install. On a Mac, double-click it and press Install Font. Then restart the app you want to use it in." },
      { q: "Can I use these fonts on Instagram?", a: "Instagram can't use installed fonts in bios or captions. Use the copy-paste generator for that, or make an image with the text to image tool." },
      { q: "Why does my preview look plain for a moment?", a: "The fonts load from Google Fonts after the page appears. On a slow connection you'll briefly see a fallback font." },
    ],
  },
  {
    style: "gothic",
    title: "Gothic Fonts — Free Dark Blackletter Fonts to Download",
    description:
      "Gothic fonts in the blackletter sense: free open-licence typefaces for band names, horror titles and dark branding. Live preview and download links.",
    h1: "Gothic Fonts",
    crumb: "Gothic Fonts",
    intro:
      "Gothic fonts here means the dark, pointed blackletter look of cathedrals, metal albums and horror titles, not the plain sans-serif typefaces that are also sold under names like Century Gothic. All ten are free, open-licence fonts you can install and use commercially. Type your band name, game title or headline to compare them.",
    sample: "Midnight Requiem",
    fonts: ["UnifrakturCook", "Metal Mania", "New Rocker", "Manufacturing Consent", "Pirata One", "Grenze Gotisch", "Germania One", "Jacquard 12", "Fruktur", "UnifrakturMaguntia"],
    notes: {
      "UnifrakturCook": "The darkest classic Fraktur here. Set a single word large and it looks like the title of an old horror film.",
      "Metal Mania": "Spikes on almost every terminal. Best for one or two words, such as a band name or event title.",
      "New Rocker": "Lively, flared capitals that suit rock posters, tour merch and tattoo flash sheets.",
      "Manufacturing Consent": "Sharp joins and heavy black shapes, closest to contemporary dark-fashion branding.",
      "Pirata One": "Gothic but legible, so it works for menus, tracklists and longer subtitles.",
      "Grenze Gotisch": "Choose a thin weight for an elegant, Victorian-gothic feel or a heavy weight for drama.",
      "Germania One": "Narrow and severe. Good for vertical banners and tall poster layouts.",
      "Jacquard 12": "Pixel gothic for dark fantasy and retro horror games.",
      "Fruktur": "A softer gothic option when you want blackletter without menace, such as for a café or bakery.",
      "UnifrakturMaguntia": "Traditional and restrained, the right pick for a gothic wedding invitation or a classical concert poster.",
    },
    sections: [
      {
        h2: "Two meanings of gothic font",
        blocks: [
          { p: "In type history, gothic first meant blackletter, the scripts of medieval Europe. In the 19th century, American type founders also used gothic for bold sans-serif faces, which is why Franklin Gothic and Century Gothic have no spikes at all. If you're searching for those, this isn't the page; if you want the dark, medieval look, every font below fits." },
        ],
      },
      {
        h2: "Picking a gothic font by mood",
        blocks: [
          { table: { head: ["Mood", "Try", "Why"], rows: [
            ["Heavy metal", "Metal Mania, New Rocker", "Spiky terminals and aggressive capitals built for logos."],
            ["Horror and Halloween", "UnifrakturCook, Manufacturing Consent", "Dense black shapes that look ominous at large sizes."],
            ["Gothic romance, goth fashion", "Grenze Gotisch, Fruktur", "Elegant contrast; Grenze also comes in light weights."],
            ["Retro games", "Jacquard 12", "Blackletter on a pixel grid."],
          ] } },
          { p: "Want to add crosses, daggers or bats around the name? Copy them from the [gothic symbols](/gothic-symbols) page, or style the text instantly with the [gothic font generator](/gothic-font-generator)." },
        ],
      },
    ],
    faq: [
      { q: "Is Century Gothic a gothic font?", a: "Not in the blackletter sense. Century Gothic is a geometric sans-serif; the name comes from an older American use of gothic for sans-serif type." },
      { q: "What font do metal bands use?", a: "Most metal logos are hand-drawn. Fonts like Metal Mania and New Rocker imitate that style and are a good starting point for a mockup." },
      { q: "Can I use these gothic fonts for merch I sell?", a: "Yes. They are all under the SIL Open Font License, which allows commercial use." },
      { q: "How do I get gothic text on Instagram or Discord?", a: "Installed fonts don't work there. Use the gothic font generator, which produces copy-paste Unicode text." },
    ],
  },
  {
    style: "blackletter",
    title: "Blackletter & Medieval Fonts — Free Downloads by Style",
    description:
      "Medieval and blackletter fonts sorted by historical style: Fraktur, textura, bastarda, uncial and modern revivals. Free, open-licence, with live preview.",
    h1: "Blackletter & Medieval Fonts",
    crumb: "Blackletter & Medieval Fonts",
    intro:
      "A medieval font can mean several very different scripts. This directory sorts free, open-licence typefaces by the historical style they come from, from the rounded uncials of the early Middle Ages to German Fraktur and modern blackletter revivals, so you can pick the one that matches the period you have in mind.",
    sample: "Anno Domini MCCCXLVIII",
    fonts: ["Uncial Antiqua", "Texturina", "Jacquarda Bastarda 9", "UnifrakturMaguntia", "UnifrakturCook", "Fruktur", "MedievalSharp", "Pirata One", "Grenze Gotisch", "Manufacturing Consent"],
    notes: {
      "Uncial Antiqua": "Uncial: rounded capitals with no real lowercase, the right look for early medieval and Celtic-themed settings.",
      "Texturina": "Textura: tall, compressed strokes like a 15th-century missal, adapted for readability.",
      "Jacquarda Bastarda 9": "Bastarda: the quicker late-medieval book hand, here rebuilt on a pixel grid.",
      "UnifrakturMaguntia": "Fraktur: the German book type that dominated printing from the 16th century onwards.",
      "UnifrakturCook": "Fraktur, heavier: closer to display Fraktur used on posters and mastheads.",
      "Fruktur": "Fraktur, informal: keeps the broken curves but adds warmth and an italic.",
      "MedievalSharp": "Medieval-inspired rather than historical. Light, pen-like and easy to read in game interfaces.",
      "Pirata One": "Modern blackletter: simplified shapes designed for contemporary readers.",
      "Grenze Gotisch": "Modern blackletter with roman influences and a full range of weights.",
      "Manufacturing Consent": "Modern display blackletter, heavy and crisp.",
    },
    sections: [
      {
        h2: "Timeline of medieval scripts",
        blocks: [
          { table: { head: ["Style", "Era", "Free font here"], rows: [
            ["Uncial", "4th–8th century", "Uncial Antiqua"],
            ["Textura", "12th–15th century", "Texturina"],
            ["Bastarda", "14th–16th century", "Jacquarda Bastarda 9 (pixel)"],
            ["Fraktur", "16th–20th century", "UnifrakturMaguntia, UnifrakturCook, Fruktur"],
            ["Modern blackletter", "20th century onwards", "Pirata One, Grenze Gotisch, Manufacturing Consent"],
          ] } },
          { p: "For a game set in the early Middle Ages, uncial is more accurate than blackletter. For anything that should feel like a printed Bible or a German beer label, choose textura or Fraktur. The [blackletter generator](/blackletter-generator) explains the differences in more detail." },
        ],
      },
      {
        h2: "Accuracy versus atmosphere",
        blocks: [
          { p: "MedievalSharp isn't based on a specific historical script, but it reads instantly as medieval and is lighter than blackletter, which makes it good for maps, inventory screens and fantasy book covers. If historical accuracy matters, such as for a reenactment banner, stick to the dated styles in the table." },
        ],
      },
    ],
    faq: [
      { q: "What is the most medieval-looking font?", a: "Textura is the script most people picture from medieval manuscripts. Texturina is a free font inspired by it; UnifrakturMaguntia gives the later, German Fraktur look." },
      { q: "Is uncial a blackletter font?", a: "No. Uncial is an earlier, rounded script. Blackletter developed from later Gothic book hands." },
      { q: "Are these fonts accurate for historical documents?", a: "They are modern digital designs inspired by historical scripts, not exact copies of any manuscript. They're fine for themed design but not for scholarly facsimiles." },
      { q: "Can I use them in a video game?", a: "Yes. The SIL Open Font License allows embedding fonts in games and apps, including commercial ones." },
    ],
  },
];

export type AppGuide = {
  app: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  steps: [string, string][];
  notes: string[];
  faq: { q: string; a: string }[];
};

export const APP_GUIDES: AppGuide[] = [
  {
    app: "google-docs", name: "Google Docs",
    title: "Old English Font in Google Docs — How to Add It",
    description: "How to use an Old English font in Google Docs: find blackletter fonts in the More fonts menu, which ones to pick, and what to do if yours is missing.",
    intro: "Google Docs can't install font files, but it has built-in access to the Google Fonts library, which includes several free blackletter fonts. Here's how to switch them on.",
    steps: [
      ["Open the font menu", "Click the font name in the toolbar (it usually says Arial) and choose More fonts at the top of the list."],
      ["Search for a blackletter font", "Type UnifrakturMaguntia, UnifrakturCook, Pirata One or Grenze Gotisch into the search box and click the name to add it to My fonts."],
      ["Apply it", "Click OK, select your text and choose the font from the menu. It now appears in the list in every document."],
    ],
    notes: [
      "Google Docs can't upload your own .ttf files, so Microsoft's Old English Text MT isn't available here. UnifrakturMaguntia is the closest free substitute.",
      "Newer Google Fonts additions sometimes take a while to appear in Docs. If a font from our directory isn't listed, try another one.",
      "When you download the document as .docx, Word will substitute the font unless the reader has it installed. Export to PDF to keep the look.",
    ],
    faq: [
      { q: "Does Google Docs have Old English Text MT?", a: "No. That font is licensed by Microsoft and isn't part of the Google Fonts library. Use UnifrakturMaguntia or UnifrakturCook instead." },
      { q: "Can I add my own font to Google Docs?", a: "Not directly. Docs only offers fonts from the Google Fonts library." },
      { q: "Will my Old English heading print correctly?", a: "Yes. Docs embeds the font when printing or exporting to PDF." },
    ],
  },
  {
    app: "word", name: "Microsoft Word",
    title: "Old English Font in Word — Old English Text MT & Free Fonts",
    description: "Use an Old English font in Microsoft Word: find Old English Text MT, install free blackletter fonts, and embed them so others see the same look.",
    intro: "Microsoft Office comes with a blackletter font called Old English Text MT, and you can install any free blackletter font alongside it. Here's how to use both.",
    steps: [
      ["Try the built-in font", "Select your text, click the font box on the Home tab and type Old English Text MT. In Microsoft 365 it may download the first time you use it."],
      ["Or install a free font", "Download a font such as UnifrakturMaguntia from our Old English fonts page. On Windows right-click the .ttf file and choose Install; on a Mac double-click it and click Install Font."],
      ["Restart Word and apply it", "Close and reopen Word so it notices the new font, then pick it from the font box."],
    ],
    notes: [
      "To make sure other people see your font, embed it: on Windows go to File, Options, Save and tick Embed fonts in the file.",
      "Blackletter is hard to read in long paragraphs. Use it for headings, certificate titles or names, and keep body text in a regular font.",
      "Exporting to PDF is the safest way to share a document that uses a custom font.",
    ],
    faq: [
      { q: "What is the Old English font in Word called?", a: "Old English Text MT. It's included with Microsoft Office." },
      { q: "Why isn't Old English Text MT in my font list?", a: "Some Office installations download fonts on demand. Type the full name into the font box; if it still doesn't appear, install a free alternative such as UnifrakturMaguntia." },
      { q: "Can I use an Old English font on a certificate?", a: "Yes, it's one of the most common uses. Pair a blackletter title with a plain serif for the names and dates." },
    ],
  },
  {
    app: "canva", name: "Canva",
    title: "Old English Font in Canva — Find or Upload Blackletter",
    description: "How to get an Old English font in Canva: search Canva's font library for blackletter options, or upload a free font file with Canva Pro.",
    intro: "Canva has its own font library, and on paid plans you can upload font files. Either route can give you Old English lettering.",
    steps: [
      ["Search Canva's fonts", "Select a text box, open the font menu and search for names like UnifrakturMaguntia, Pirata One or Grenze Gotisch. Canva's library changes over time, so availability can vary."],
      ["Upload a font if needed", "With Canva Pro or Teams, download a font from our Old English fonts page, then upload the .ttf file through the Brand Kit's font upload option."],
      ["Apply and adjust", "Pick the font, then increase letter spacing slightly. Blackletter benefits from a little extra room on social graphics."],
    ],
    notes: [
      "Free Canva accounts can't upload fonts. If the font you want isn't in the library, use a similar one that is, or create the text as a transparent PNG with our text to image tool and upload that as an image.",
      "All fonts in our directory use the SIL Open Font License, so they're allowed in designs you sell.",
    ],
    faq: [
      { q: "Does Canva have an Old English font?", a: "Canva's library includes some blackletter-style fonts, but the selection changes. Search the names listed above, or upload one with a paid plan." },
      { q: "Can I upload fonts to Canva for free?", a: "No. Font uploads require Canva Pro, Teams or another paid plan." },
      { q: "Is there a workaround on the free plan?", a: "Yes. Export your text as a transparent PNG with the text to image tool and add it to your design as an image." },
    ],
  },
  {
    app: "cricut", name: "Cricut Design Space",
    title: "Old English Font for Cricut — Install & Cut Blackletter",
    description: "Use an Old English font in Cricut Design Space: install a free blackletter font on your computer, find it under System fonts, and cut it cleanly.",
    intro: "Cricut Design Space can use any font installed on your computer or phone. Install a free blackletter font once and it's ready for vinyl, iron-on and card projects.",
    steps: [
      ["Install a font on your device", "Download a free font such as UnifrakturCook from our Old English fonts page and install it (right-click and Install on Windows, double-click and Install Font on a Mac)."],
      ["Restart Design Space", "Close Design Space completely and reopen it so it loads the new font."],
      ["Find it under System", "Add text, open the font list and switch to the System filter. Search for the font name and apply it."],
    ],
    notes: [
      "Heavier fonts cut and weed more easily. UnifrakturCook is a better choice than the thinner UnifrakturMaguntia for small vinyl lettering.",
      "Use Weld on script-like text so overlapping letters cut as one piece, but check that blackletter letters don't merge into blobs at small sizes.",
      "Leave extra size: fine hairlines in blackletter can tear when weeding below about 2.5 cm tall.",
    ],
    faq: [
      { q: "Why doesn't my font show up in Cricut?", a: "Design Space only loads system fonts at start-up. Restart it fully after installing, and check the System filter." },
      { q: "Can I sell Cricut projects made with these fonts?", a: "Yes. The fonts in our directory use the SIL Open Font License, which allows commercial products." },
      { q: "Which Old English font is best for vinyl?", a: "A heavier one such as UnifrakturCook or Pirata One, which have fewer thin hairlines to tear when weeding." },
    ],
  },
  {
    app: "procreate", name: "Procreate",
    title: "Old English Font in Procreate — Import Blackletter Fonts",
    description: "Import an Old English font into Procreate on iPad: download a free blackletter font, add it through the text tool, and use it for lettering.",
    intro: "Procreate can import font files directly, which is useful as a guide for hand-lettering or for adding clean blackletter text to artwork.",
    steps: [
      ["Save a font to Files", "Download a free font such as UnifrakturMaguntia from our Old English fonts page and save the .ttf file to the Files app."],
      ["Add text in Procreate", "Open Actions (the wrench icon), tap Add, then Add Text."],
      ["Import the font", "With the text selected, open Edit Style and tap Import Font, then pick the file from Files. The font now appears in your list."],
    ],
    notes: [
      "Lettering artists often set text in a blackletter font on a low-opacity layer, then trace and adjust it by hand.",
      "Rasterise text only when you're done editing; until then it stays editable.",
    ],
    faq: [
      { q: "What font formats does Procreate accept?", a: "TrueType (.ttf), OpenType (.otf) and TrueType Collection (.ttc) files." },
      { q: "Can I use the font for commercial artwork?", a: "Yes, if it's one of the open-licence fonts in our directory." },
      { q: "Is tracing a font cheating for tattoo flash?", a: "It's a common starting point. Most artists adjust spacing, weight and flourishes by hand so the final piece is their own." },
    ],
  },
  {
    app: "iphone", name: "iPhone",
    title: "Old English Font on iPhone — Apps vs Copy & Paste",
    description: "Get an Old English font on iPhone: what installed fonts can and can't do on iOS, and how to use copy-paste blackletter in any app instead.",
    intro: "iPhones don't let you change the system font, and installed fonts only work in some apps. For most people the copy-paste route is easier.",
    steps: [
      ["For Instagram, TikTok and messages", "Open the Old English font generator in Safari, type your text, tap Copy and paste it into the app. This works everywhere because it's Unicode text, not a font."],
      ["For Pages, Keynote and design apps", "Install a font through an app from the App Store that offers font installation. Installed fonts appear under Settings, General, Fonts."],
      ["Check the app supports it", "Installed fonts only show up in apps that support custom fonts, such as Pages, Keynote and many design apps. They won't change Instagram or the keyboard."],
    ],
    notes: [
      "iOS doesn't offer a setting to change the font across the whole phone, and no legitimate app can do that.",
      "Some keyboard apps offer fancy-text layouts. They produce the same Unicode characters as our generator, but require keyboard permissions; copy-paste needs none.",
    ],
    faq: [
      { q: "Can I change my iPhone's font to Old English?", a: "No. iOS doesn't allow changing the system font. You can use Old English text in apps by copying it from the generator." },
      { q: "Why do some letters show as boxes on my iPhone?", a: "Modern iOS versions show Fraktur characters correctly. Boxes usually mean a very old iOS version, so update if you can." },
      { q: "Do I need a keyboard app for Old English text?", a: "No. Copying from the website works without installing anything." },
    ],
  },
  {
    app: "mac", name: "Mac",
    title: "Old English Font on Mac — Install with Font Book",
    description: "Install an Old English font on your Mac with Font Book and use it in Pages, Word, Keynote and Photoshop. Includes free blackletter font picks.",
    intro: "Installing a font on a Mac takes a few seconds, and it then appears in every app that uses system fonts, from Pages to Photoshop.",
    steps: [
      ["Download a font", "Pick one from our Old English fonts page and download it from Google Fonts. Unzip the file if needed."],
      ["Install with Font Book", "Double-click the .ttf file and click Install Font. Font Book validates and installs it."],
      ["Use it in any app", "Restart the app you want to use, then choose the font from its font menu."],
    ],
    notes: [
      "If you use Microsoft Office on a Mac, Old English Text MT may already be available in the font list.",
      "Font Book can also remove fonts later if your font menus get crowded.",
    ],
    faq: [
      { q: "Where are fonts stored on a Mac?", a: "Font Book installs fonts for your user in your Library's Fonts folder by default." },
      { q: "Why doesn't the font appear in my app?", a: "Most apps only scan for fonts when they start. Quit and reopen the app." },
      { q: "Is it safe to install fonts from the internet?", a: "Fonts from reputable sources such as Google Fonts are safe. Font Book also checks files for problems before installing." },
    ],
  },
];

export const FONT_PAGE_BY_STYLE = Object.fromEntries(FONT_PAGES.map((p) => [p.style, p])) as Record<string, FontPage>;
export const APP_BY_SLUG = Object.fromEntries(APP_GUIDES.map((a) => [a.app, a])) as Record<string, AppGuide>;
