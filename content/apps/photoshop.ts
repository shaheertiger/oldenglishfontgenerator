import type { AppGuide } from "@/lib/fontpages";

const guide: AppGuide = {
  app: "photoshop",
  name: "Photoshop",
  title: "Old English Font in Photoshop — Install a Font in 3 Steps",
  description:
    "How to install an Old English font in Photoshop: add a free blackletter font to your computer, restart Photoshop, and set it with the Type tool.",
  intro:
    "Photoshop uses the fonts installed on your computer, so getting a blackletter font into it is really a matter of installing the font file, then restarting Photoshop. Here's the full route, plus how to keep the text editable until you're done.",
  steps: [
    ["Install the font on your computer", "Download a free font such as UnifrakturCook or Pirata One from our [Old English fonts](/fonts/old-english) page. On Windows right-click the .ttf file and choose Install; on a Mac double-click it and click Install Font in Font Book."],
    ["Restart Photoshop", "Quit Photoshop completely and open it again. It reads the font list at start-up, so a font installed while it was running usually won't appear until then."],
    ["Set your text", "Choose the Type tool (T), click on the canvas and type. Open Window, Character to pick the font, size and tracking. Search the font menu by name, for example Unifraktur."],
  ],
  notes: [
    "Keep the layer as live text while you work. Rasterise it, or convert it to a shape, only when the design is final, because after that you can't change the wording.",
    "Blackletter usually looks better with slightly looser tracking at small sizes; try +10 to +25 in the Character panel.",
    "Sending a PSD to someone else? They need the same font installed. Share the open-licence font file with it, or flatten a copy.",
    "For a quick transparent PNG without opening Photoshop, use the [text to image tool](/old-english-text-to-image).",
  ],
  faq: [
    { q: "Why doesn't my new font show up in Photoshop?", a: "Photoshop hasn't reloaded its font list. Quit and reopen it. If it's still missing, check the font installed correctly in your system's font manager." },
    { q: "Can I use these fonts in client work made in Photoshop?", a: "Yes, if they're the open-licence fonts from our pages. The SIL Open Font License allows commercial use." },
    { q: "Is there an Old English font already in Photoshop?", a: "Photoshop doesn't ship its own blackletter, but if Microsoft Office is installed, Old English Text MT will appear in the menu because Photoshop uses system fonts." },
    { q: "How do I make blackletter text look distressed in Photoshop?", a: "Keep the type editable, add a layer mask and paint texture into the mask. For copy-paste text with a worn look, try the gothic font generator's distressed style." },
  ],
};

export default guide;
