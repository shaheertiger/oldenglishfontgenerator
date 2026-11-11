import type { FontPage } from "@/lib/fontpages";

const page: FontPage = {
  style: "clothing-brand",
  title: "Clothing Brand Fonts — 10 Free Streetwear & Shirt Fonts",
  description:
    "Clothing brand fonts free for merch: 10 open-licence blackletter, varsity, western and brush fonts for streetwear logos, hoodies and t-shirt prints.",
  h1: "Clothing Brand Fonts",
  crumb: "Clothing Brand Fonts",
  intro:
    "Blackletter is the backbone of streetwear lettering, so 6 of these 10 free clothing brand fonts are blackletter or blackletter-inspired, joined by a varsity slab, a Western wood-type face, a brush script and a pixel blackletter for drops with a retro edge. All 10 are open-licence: you can put them on shirts, hoodies, labels and a logo for a brand you sell, with no fee and no attribution on the garment.",
  sample: "Sinners Club",
  fonts: ["UnifrakturCook", "Manufacturing Consent", "Pirata One", "Grenze Gotisch", "Germania One", "New Rocker", "Jacquard 24", "Graduate", "Rye", "Kaushan Script"],
  notes: {
    "UnifrakturCook": "The classic Old English chest print. Heavy enough to screen print at hoodie scale without the thin parts breaking up.",
    "Manufacturing Consent": "Contemporary heavy blackletter with crisp joins, closest to current luxury-streetwear wordmarks.",
    "Pirata One": "Open, simplified blackletter. Use it for sleeve hits, neck labels and smaller back text where Fraktur would clog.",
    "Grenze Gotisch": "Variable from thin to black, so one font can cover a bold front logo and a fine tagline.",
    "Germania One": "Condensed and straight-edged; stacks well down a sleeve or across a narrow chest panel.",
    "New Rocker": "Rock-poster blackletter with flared capitals. Fits band-style merch and metal-inspired hoodies.",
    "Jacquard 24": "Pixel blackletter that looks woven, a natural fit for knitwear patterns and retro gaming drops.",
    "Graduate": "Collegiate slab capitals. Pair a Graduate word with a blackletter crest for the varsity look.",
    "Rye": "Western wood-type capitals for ranch, rodeo or whiskey-label aesthetics.",
    "Kaushan Script": "Rough brush script to sit over or under a blackletter word, the classic two-font streetwear stack.",
  },
  sections: [
    {
      h2: "Which print method suits blackletter lettering?",
      blocks: [
        { table: { head: ["Method", "What to watch", "Font advice"], rows: [
          ["Screen printing", "Very fine lines can fill in or break up. Many printers ask for strokes of at least about 1 pt at final size; check your printer's spec.", "Heavy faces: UnifrakturCook, Manufacturing Consent, Grenze Gotisch at bold weights."],
          ["DTF and DTG", "Handles fine detail better than screen printing, but tiny hairlines can still look weak on dark fabric.", "Most fonts here work; test thin scripts at real size."],
          ["Embroidery", "Small, detailed letters lose shape. Many embroiderers want lettering at least about 0.25 in (6 mm) tall, and more for blackletter.", "Pirata One or Germania One for small text; save Fraktur for large chest or back pieces."],
          ["Vinyl / heat transfer", "Every enclosed counter and hairline must be weeded by hand.", "Chunky fonts weed fastest; avoid thin scripts below a few centimetres tall."],
        ] } },
        { p: "Always send your printer a vector file with the text converted to outlines, so their computer doesn't swap the font. The [Inkscape guide](/fonts/old-english/inkscape) and [Photoshop guide](/fonts/old-english/photoshop) show how to set up the lettering." },
      ],
    },
    {
      h2: "Can I use a free font for my clothing brand logo?",
      blocks: [
        { p: "Yes, if it's under the SIL Open Font License like these 10. The licence allows logos, printed garments and products you sell. Two things it doesn't settle: trademarks, which protect brand names and logos regardless of the font, and the font name, which you shouldn't use to market a modified copy of the font. If you're building a brand to last, customise the lettering (spacing, a ligature, a redrawn capital) so the mark is distinctly yours, and get trademark advice for the name." },
        { p: "Want to mock up Old English lettering quickly? Set it in the [gothic font generator](/gothic-font-generator) or export real blackletter as a transparent PNG with the [text to image tool](/old-english-text-to-image)." },
      ],
    },
    {
      h2: "How do I build the streetwear blackletter look?",
      blocks: [
        { ul: [
          "**One heavy word, big.** A single blackletter word across the chest or back reads from across the street; whole sentences don't.",
          "**Add a script or varsity partner.** Kaushan Script or Graduate under the main word gives contrast without a third font.",
          "**Arch it.** Curving the top line, as on a jersey or rocker patch, instantly reads as merch. See the [biker font generator](/biker-font-generator) for rocker-style layouts.",
          "**Keep a small version.** Have a simpler mark (an initial in Pirata One, for example) for labels, tags and embroidery.",
        ] },
      ],
    },
  ],
  faq: [
    { q: "What font do streetwear brands use?", a: "Many use custom or modified blackletter. Free fonts such as Manufacturing Consent and UnifrakturCook give a similar heavy gothic look you can build on." },
    { q: "What is the best Old English font for a hoodie?", a: "UnifrakturCook for a big screen-printed chest or back graphic, because its thick strokes survive printing on fleece." },
    { q: "Do I need to credit the font on my shirts?", a: "No. The SIL Open Font License doesn't require attribution on products. Keep the licence file with your design files." },
    { q: "Can I trademark a logo made with a free font?", a: "Trademark rules depend on your country and on how distinctive the mark is, not just on the font licence. The OFL allows the use; ask a trademark professional about registering." },
    { q: "What fonts work for metal-style band merch?", a: "New Rocker and the spikier Metal Mania; see the [metal font generator](/metal-font-generator) for copy-paste versions." },
    { q: "Which of these fonts embroider best?", a: "Simpler, heavier ones such as Pirata One, Germania One and Graduate, set large. Ask your embroiderer for a stitch-out sample first." },
  ],
  tools: ["/gothic-font-generator", "/metal-font-generator", "/old-english-text-to-image"],
};

export default page;
