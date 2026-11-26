import type { PageContent } from "./types";

// Restored Nov 2026 at /symbols/alchemy (ranked in Bing before 00a2b7f).
// Code points are computed from the characters; meanings follow the Unicode
// character names and standard histories of chemistry.
const cp = (s: string) => [...s].map((c) => "U+" + c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")).join(" ");

// [glyph, name, group, meaning]
const CORE: [string, string, string, string][] = [
  ["🜂", "Fire", "Element", "Hot and dry. An upward triangle, because fire rises."],
  ["🜄", "Water", "Element", "Cold and wet. A downward triangle, because water sinks."],
  ["🜁", "Air", "Element", "Hot and wet. The fire triangle crossed by a bar."],
  ["🜃", "Earth", "Element", "Cold and dry. The water triangle crossed by a bar."],
  ["🜀", "Quintessence", "Element", "The \"fifth essence\" beyond the four elements, sought as a pure extract."],
  ["☉", "Gold · Sun", "Metal", "The perfect metal, the goal of transmutation."],
  ["☽", "Silver · Moon", "Metal", "The second noble metal, paired with gold as moon to sun."],
  ["☿", "Mercury (quicksilver)", "Metal", "The liquid metal, and one of the three principles (see below)."],
  ["♀", "Copper · Venus", "Metal", "Linked with Venus and Cyprus, an ancient source of copper."],
  ["♂", "Iron · Mars", "Metal", "The metal of weapons, so of the war god Mars."],
  ["♃", "Tin · Jupiter", "Metal", "Assigned to Jupiter in the classical scheme of seven metals."],
  ["♄", "Lead · Saturn", "Metal", "The heavy, dull metal alchemists hoped to raise to gold."],
  ["🜚", "Gold (alternate)", "Metal", "A second gold sign found in some manuscripts."],
  ["🜛", "Silver (alternate)", "Metal", "A second silver sign."],
  ["🜍", "Sulfur", "Principle", "The principle of combustion and of a substance's soul or character."],
  ["🜔", "Salt", "Principle", "The principle of fixity and solid body."],
];

const MORE: [string, string, string][] = [
  ["🜅", "Aquafortis", "\"Strong water\": nitric acid, used to part silver from gold."],
  ["🜆", "Aqua regia", "\"Royal water\": nitric plus hydrochloric acid, which dissolves gold."],
  ["🜈", "Aqua vitae", "\"Water of life\": distilled alcohol."],
  ["🜊", "Vinegar", "Acetic acid, a common solvent."],
  ["🜕", "Nitre", "Saltpeter (potassium nitrate)."],
  ["🜖", "Vitriol", "Metal sulfates such as green vitriol; oil of vitriol was sulfuric acid."],
  ["🜓", "Cinnabar", "Red mercury sulfide, the ore of mercury."],
  ["🜺", "Arsenic", "The element and its poisonous compounds."],
  ["🜹", "Sal ammoniac", "Ammonium chloride."],
  ["🝁", "Quicklime", "Calcium oxide, made by burning limestone."],
  ["🝂", "Borax", "Sodium borate, used as a flux in metalwork."],
  ["🝅", "Alum", "Potassium aluminum sulfate, used in dyeing."],
  ["🜿", "Tartar", "The crust left in wine casks (potassium bitartrate)."],
  ["🝎", "Caput mortuum", "\"Dead head\": the useless residue left after distilling or subliming."],
  ["🝞", "Sublimation", "Turning a solid straight to vapor and back to a solid."],
  ["🝡", "Dissolve", "Breaking a substance down in a liquid."],
  ["🝟", "Precipitate", "A solid dropping out of a solution."],
  ["🝠", "Distill", "Separating by boiling and condensing."],
  ["🝣", "Purify", "Removing impurities."],
  ["🝤", "Putrefaction", "Slow decay, an early stage of the Great Work."],
  ["🝥", "Crucible", "The heat-proof pot for melting."],
  ["🝪", "Alembic", "The still head used for distilling."],
  ["🝭", "Retort", "A long-necked glass vessel for distilling."],
  ["🝫", "Bath of Mary", "A gentle water bath, the ancestor of the cook's bain-marie."],
  ["🝮", "Hour", "Time units appear in recipes for how long to heat."],
  ["🝯", "Night", "Another timing sign, for processes left overnight."],
  ["🝱", "Month", "For long digestions measured in months."],
];

const page: PageContent = {
  slug: "symbols/alchemy",
  file: "symbols-alchemy",
  title: "Alchemy Symbols Copy and Paste – 43 Alchemical Signs",
  description:
    "Alchemy symbols to copy and paste: 43 alchemical signs for the elements, the seven metals, salts, acids and lab processes, each with its meaning and code.",
  h1: "Alchemy Symbols Copy and Paste",
  crumb: "Alchemy Symbols",
  intro:
    "Alchemy symbols are the shorthand signs that alchemists used for elements, metals, substances and lab steps, and this page lists 43 of them to copy and paste, each with what it meant. You will find the four elemental triangles, the seven planetary metals from gold ☉ to lead ♄, and alchemical symbols for acids, salts, vessels and processes like distilling 🝠. If you need an alchemy symbol in text for a game, a story, a tattoo sketch or notes, select it in the tables and copy. The box below writes your words in manuscript styles to sit beside the signs.",
  tool: {
    styles: ["fraktur", "bold-fraktur", "long-s", "thorn", "interpunct", "word-dots", "illuminated", "medieval-speech-scroll", "u-script", "deco-stars"],
    sample: "Solve et Coagula",
    placeholder: "Type a recipe title or motto…",
    presets: ["Solve et Coagula", "Magnum Opus", "Aqua Vitae", "Philosopher's Stone"],
  },
  stylesHeading: "Manuscript lettering for alchemy notes",
  howTo: {
    heading: "How to use alchemy symbols",
    steps: [
      ["Find the sign", "The first table covers elements, metals and principles; the second covers substances and processes."],
      ["Copy it", "Select the symbol in the left column and copy. Each cell is one character."],
      ["Check the font", "Signs from U+1F700 onward need a font with the Alchemical Symbols block. ☉ ☽ ☿ ♀ ♂ ♃ ♄ are older characters and appear on far more devices."],
    ],
  },
  sections: [
    {
      h2: "Elements, metals and principles",
      blocks: [
        {
          table: {
            head: ["Symbol", "Name", "Group", "Code point", "Meaning"],
            glyphCols: [0],
            rows: CORE.map(([g, n, grp, m]) => [g, n, grp, cp(g), m]),
          },
        },
      ],
    },
    {
      h2: "Substances, vessels and processes",
      blocks: [
        {
          table: {
            head: ["Symbol", "Name", "Code point", "Meaning"],
            glyphCols: [0],
            rows: MORE.map(([g, n, m]) => [g, n, cp(g), m]),
          },
        },
      ],
    },
    {
      h2: "1. What are the three primes in alchemy?",
      blocks: [
        { p: "The Swiss physician Paracelsus, in the 16th century, taught that every substance is made of three principles, the tria prima: sulfur 🜍 (what burns), mercury ☿ (what turns to vapor) and salt 🜔 (what remains as ash). They sat alongside the four elements rather than replacing them, and the three signs often appear together as a set." },
        { p: "Many recipes also gave planets and metals the same sign, which is why ☿ means both the planet Mercury and quicksilver, and ♀ both Venus and copper. Today ♀ and ♂ are best known as the female and male signs, a use that biology borrowed from these planetary symbols. Unicode explains the block in its [Alchemical Symbols chart](https://www.unicode.org/charts/PDF/U1F700.pdf)." },
      ],
    },
  ],
  built:
    "Most signs come from the Alchemical Symbols block (U+1F700–U+1F77F), added in Unicode 6.0. The planetary metals ☉ ☽ ☿ ♀ ♂ ♃ ♄ are from Miscellaneous Symbols (U+2600–U+26FF). Many signs had several historical shapes; each code point here is one standard form.",
  related: {
    heading: "More symbols and old scripts",
    hrefs: ["/symbols", "/symbols/greek", "/ancient-font-generator", "/runic-translator", "/illuminated-letters", "/medieval-translator"],
  },
  faq: [
    { q: "How do I copy and paste alchemy symbols?", a: "Select the symbol in the left column of either table and copy it. Each cell holds a single character, so it pastes as text." },
    { q: "What are the four alchemical elements symbols?", a: "Fire 🜂 is an upward triangle, water 🜄 a downward triangle, air 🜁 an upward triangle with a bar, and earth 🜃 a downward triangle with a bar." },
    { q: "What is the alchemy symbol for gold?", a: "The sun sign ☉, a circle with a dot. Unicode also has an alternate gold sign, 🜚." },
    { q: "Why do alchemy symbols show as empty boxes?", a: "Signs from U+1F700 need a font that covers the Alchemical Symbols block, and many devices lack one. The planetary signs ☉ ☽ ☿ ♀ ♂ ♃ ♄ are much more widely available." },
    { q: "What does the mercury symbol ☿ mean?", a: "It stands for quicksilver (the metal), the planet Mercury, and one of the three principles Paracelsus described." },
    { q: "What is caput mortuum?", a: "Latin for \"dead head\": the worthless residue left in the vessel after distilling or subliming. Its sign is 🝎." },
    { q: "Is there an alchemy font generator?", a: "Alchemical signs stand for whole substances, not letters, so there is no alphabet to convert to. The box above sets your text in manuscript styles to go with the signs." },
  ],
};

export default page;
