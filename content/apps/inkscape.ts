import type { AppGuide } from "@/lib/fontpages";

const guide: AppGuide = {
  app: "inkscape",
  name: "Inkscape",
  title: "Old English Font in Inkscape — Add Fonts and Convert to Path",
  description:
    "How to add an Old English font to Inkscape: install a free blackletter font, find it in Text and Font, and convert it to a path for cutting or laser work.",
  intro:
    "Inkscape, the free vector editor, uses fonts installed on your system. Install a blackletter font, restart Inkscape, and you can set it, then turn the letters into paths for a vinyl cutter, laser or embroidery software.",
  steps: [
    ["Install the font", "Download a free font such as UnifrakturCook from our [Old English fonts](/fonts/old-english) page. Windows: right-click the .ttf and choose Install. Mac: double-click it and click Install Font. Linux: copy it into ~/.local/share/fonts (or use your font manager)."],
    ["Restart Inkscape and set the text", "Close and reopen Inkscape so it loads the new font. Pick the Text tool (T), type, then open Text, Text and Font (Ctrl+Shift+T) to search for the font by name."],
    ["Convert to path when you're done", "Select the text and choose Path, Object to Path (Shift+Ctrl+C). The letters become shapes, so the file works without the font installed and cutting software reads it reliably."],
  ],
  notes: [
    "Keep an unconverted copy of the text on a hidden layer; once it's a path you can't edit the wording.",
    "Blackletter letters overlap at their joins. For cutting, use Path, Union on the converted letters so each word cuts as one shape.",
    "Some recent Inkscape versions also let you load fonts from extra folders in Preferences; menu names vary by version, so installing system-wide is the reliable route.",
    "Heavier fonts such as UnifrakturCook or Pirata One have fewer hairlines that can tear when weeding vinyl. See the [Cricut guide](/fonts/old-english/cricut) for sizes.",
  ],
  faq: [
    { q: "Why can't Inkscape find my font?", a: "Inkscape loads fonts when it starts. Restart it after installing. On Windows, if it still doesn't appear, try installing the font for all users." },
    { q: "Do I need to convert text to path before sending an SVG?", a: "Yes, if the other person or machine might not have the font. Paths keep the exact shapes; live text gets replaced by a fallback font." },
    { q: "Can I use these fonts for products I sell?", a: "Yes. The fonts we list are under the SIL Open Font License, which allows commercial use, including laser-cut and vinyl products." },
  ],
};

export default guide;
