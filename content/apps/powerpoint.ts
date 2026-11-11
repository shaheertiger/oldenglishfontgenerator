import type { AppGuide } from "@/lib/fontpages";

const guide: AppGuide = {
  app: "powerpoint",
  name: "PowerPoint",
  title: "Old English Font in PowerPoint — Add It and Embed in 3 Steps",
  description:
    "How to add an Old English font to PowerPoint: use Old English Text MT or a free blackletter font, then embed it so slides look right on any computer.",
  intro:
    "PowerPoint already includes a blackletter font, Old English Text MT, because it ships with Microsoft Office. You can also install any free font. The step people miss is embedding: without it, your gothic title turns into Arial on someone else's laptop.",
  steps: [
    ["Pick or install the font", "Select a text box and type Old English Text MT into the font box on the Home tab. For a free alternative, download UnifrakturMaguntia from our [Old English fonts](/fonts/old-english) page and install it (Windows: right-click the .ttf and choose Install; Mac: double-click and click Install Font), then restart PowerPoint."],
    ["Embed it on Windows", "Go to File, Options, Save and tick Embed fonts in the file. Choose Embed only the characters used to keep the file small, or Embed all characters if other people will edit the text."],
    ["Embed it on a Mac", "Open PowerPoint, Preferences, Save, and tick Embed fonts in the file. Save the presentation again so the setting takes effect."],
  ],
  notes: [
    "Embedding works for TrueType and OpenType fonts that allow it. All the open-licence fonts on [our font pages](/fonts) permit embedding.",
    "Use blackletter for a title slide or one heading per slide. In bullet points it slows reading down a lot.",
    "If you present from Google Slides or a web viewer, embedded fonts may be ignored. Export to PDF, or put the title on the slide as an image made with the [text to image tool](/old-english-text-to-image).",
    "Old English Text MT is licensed with Office for documents. For a logo you'll reuse elsewhere, choose an open-licence font; the [Old English Text MT page](/fonts/old-english-text-mt) explains why.",
  ],
  faq: [
    { q: "Why does my Old English font change when I open the file on another computer?", a: "The font wasn't embedded and the other computer doesn't have it installed. Turn on Embed fonts in the file in the Save settings and save again." },
    { q: "Does PowerPoint have an Old English font built in?", a: "Yes. Old English Text MT comes with Microsoft Office. Type its name into the font box if it isn't near the top of the list." },
    { q: "Should I embed only the characters used?", a: "Only if nobody will edit the text. It keeps the file smaller, but anyone typing new letters may get a substitute font." },
    { q: "Can I use Old English text in PowerPoint without installing anything?", a: "Yes. Copy Unicode Fraktur text from the Old English font generator and paste it into a text box; it displays with your system's math font." },
  ],
};

export default guide;
