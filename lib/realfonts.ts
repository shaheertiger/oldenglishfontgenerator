// Real, open-licence blackletter and medieval typefaces shown on the
// /fonts/* directory pages. Every family here is on Google Fonts under the
// SIL Open Font License (checked against google/fonts ofl/ METADATA), so it
// can be used in personal and commercial work, including logos.
// Designers and dates come from Google Fonts' own metadata.

export type FontGroup =
  | "fraktur" | "textura" | "bastarda" | "modern" | "display" | "uncial" | "medieval"
  | "script" | "horror" | "fantasy" | "typewriter" | "varsity" | "western";

export type RealFont = {
  family: string;
  /** Google Fonts css2 family parameter (weight included when the family has no 400). */
  css: string;
  weight: number;
  designers: string;
  added: number;
  group: FontGroup;
  blurb: string;
};

export const REAL_FONTS: RealFont[] = [
  { family: "UnifrakturMaguntia", css: "UnifrakturMaguntia", weight: 400, designers: "j. 'mach' wust", added: 2010, group: "fraktur",
    blurb: "A classic book Fraktur from the Unifraktur project, named after Maguntia, the Latin name for Mainz. The closest free match to the lettering people call Old English." },
  { family: "UnifrakturCook", css: "UnifrakturCook:wght@700", weight: 700, designers: "j. 'mach' wust", added: 2010, group: "fraktur",
    blurb: "The heavy sibling of Maguntia. Thick strokes and tight counters make it a strong choice for headlines, stickers and tattoo references." },
  { family: "Fruktur", css: "Fruktur", weight: 400, designers: "Viktoriya Grabowska, Eben Sorkin", added: 2013, group: "fraktur",
    blurb: "A rounder, more playful Fraktur with an italic. It keeps the broken strokes but feels friendlier than book Fraktur." },
  { family: "Texturina", css: "Texturina", weight: 400, designers: "Guillermo Torres, Omnibus-Type", added: 2020, group: "textura",
    blurb: "A text family inspired by textura, the tall, tightly packed script of Gutenberg's Bible, redrawn so it stays readable in paragraphs. Comes in many weights with italics." },
  { family: "Jacquarda Bastarda 9", css: "Jacquarda+Bastarda+9", weight: 400, designers: "Sarah Cadigan-Fried", added: 2024, group: "bastarda",
    blurb: "A pixel-grid take on bastarda, the faster, slanted blackletter hand that sat between formal textura and everyday handwriting." },
  { family: "Jacquard 24", css: "Jacquard+24", weight: 400, designers: "Sarah Cadigan-Fried", added: 2024, group: "display",
    blurb: "Blackletter built from square pixels, like letters woven into fabric. Striking for game titles and retro graphics." },
  { family: "Jacquard 12", css: "Jacquard+12", weight: 400, designers: "Sarah Cadigan-Fried", added: 2024, group: "display",
    blurb: "A smaller, chunkier pixel grid than Jacquard 24, so it reads well at small sizes and in 8-bit style designs." },
  { family: "Pirata One", css: "Pirata+One", weight: 400, designers: "Rodrigo Fuenzalida, Nicolás Massi", added: 2012, group: "modern",
    blurb: "A simplified, modern blackletter with open shapes. One of the most readable options for body-length text such as menus and labels." },
  { family: "Grenze Gotisch", css: "Grenze+Gotisch", weight: 400, designers: "Omnibus-Type", added: 2020, group: "modern",
    blurb: "The blackletter cut of the Grenze family, which mixes roman and gothic structure. Its wide range of weights makes it unusually flexible for branding." },
  { family: "Manufacturing Consent", css: "Manufacturing+Consent", weight: 400, designers: "Fredrick Brennan", added: 2025, group: "modern",
    blurb: "A heavy contemporary blackletter with crisp, sharp joins. Works best large, in posters and wordmarks." },
  { family: "Germania One", css: "Germania+One", weight: 400, designers: "John Vargas Beltrán", added: 2012, group: "display",
    blurb: "A condensed, geometric blackletter display face. Straight, clipped strokes give it an industrial, poster-like feel." },
  { family: "New Rocker", css: "New+Rocker", weight: 400, designers: "Impallari Type", added: 2012, group: "display",
    blurb: "Blackletter with a rock-poster attitude: decorative capitals and lively curves. Popular for band names and merchandise mockups." },
  { family: "Metal Mania", css: "Metal+Mania", weight: 400, designers: "Open Window", added: 2012, group: "display",
    blurb: "Spiky letterforms in the spirit of heavy metal band logos. Pure display: use it for one or two words." },
  { family: "MedievalSharp", css: "MedievalSharp", weight: 400, designers: "Wojciech Kalinowski", added: 2011, group: "medieval",
    blurb: "A pen-written medieval look with sharp, angled strokes. Lighter and more informal than true blackletter, good for fantasy maps and game text." },
  { family: "Uncial Antiqua", css: "Uncial+Antiqua", weight: 400, designers: "Astigmatic", added: 2011, group: "uncial",
    blurb: "Based on uncial, the rounded capital script of early medieval Latin manuscripts. It predates blackletter by several centuries." },
  // Companion faces used by the tattoo, chicano, calligraphy, horror,
  // fantasy and clothing collections. Same rule: OFL only, checked against
  // google/fonts METADATA (see scripts/fontstats.py).
  { family: "Great Vibes", css: "Great+Vibes", weight: 400, designers: "Robert Leuschke", added: 2012, group: "script",
    blurb: "A flowing formal script with long entry strokes. Easy to read for a script, which matters for names on skin or invitations." },
  { family: "Pinyon Script", css: "Pinyon+Script", weight: 400, designers: "Nicole Fally", added: 2011, group: "script",
    blurb: "A copperplate-style script with fine hairlines and round loops, modelled on 19th-century pointed-pen writing." },
  { family: "Mrs Saint Delafield", css: "Mrs+Saint+Delafield", weight: 400, designers: "Sudtipos", added: 2012, group: "script",
    blurb: "A fast, slanted signature script with dramatic capitals. Close to the loose cursive many script tattoos use." },
  { family: "Monsieur La Doulaise", css: "Monsieur+La+Doulaise", weight: 400, designers: "Sudtipos", added: 2011, group: "script",
    blurb: "Ornate swash capitals over a small, tight lowercase. Built for one or two words, not sentences." },
  { family: "Herr Von Muellerhoff", css: "Herr+Von+Muellerhoff", weight: 400, designers: "Sudtipos", added: 2011, group: "script",
    blurb: "A strongly slanted, narrow handwriting script that looks pen-made rather than drawn." },
  { family: "Mr De Haviland", css: "Mr+De+Haviland", weight: 400, designers: "Sudtipos", added: 2011, group: "script",
    blurb: "A light, elegant script with long ascenders. Reads as old-fashioned handwriting." },
  { family: "Rouge Script", css: "Rouge+Script", weight: 400, designers: "Sabrina Mariela Lopez", added: 2012, group: "script",
    blurb: "A compact script with heavy downstrokes, closer to sign-painter lettering than to calligraphy." },
  { family: "Kaushan Script", css: "Kaushan+Script", weight: 400, designers: "Impallari Type", added: 2012, group: "script",
    blurb: "A brush script with rough, energetic strokes. Popular for streetwear and logo mockups." },
  { family: "Italianno", css: "Italianno", weight: 400, designers: "Robert Leuschke", added: 2011, group: "script",
    blurb: "A thin, upright-ish script with very fine strokes, close to the fine-line lettering style." },
  { family: "Tangerine", css: "Tangerine", weight: 400, designers: "Toshi Omagari", added: 2010, group: "script",
    blurb: "A calligraphic italic with tall ascenders and a small x-height, inspired by chancery hands." },
  { family: "Courier Prime", css: "Courier+Prime", weight: 400, designers: "Alan Dague-Greene", added: 2019, group: "typewriter",
    blurb: "A refined Courier made for screenplays. The typewriter look used for small quote tattoos and labels." },
  { family: "Creepster", css: "Creepster", weight: 400, designers: "Sideshow", added: 2011, group: "horror",
    blurb: "Dripping, hand-cut capitals in the style of mid-century horror comics and B-movie posters." },
  { family: "Nosifer", css: "Nosifer", weight: 400, designers: "Typomondo", added: 2011, group: "horror",
    blurb: "Wide, heavy letters with blood drips running off the baseline. Unmistakably Halloween." },
  { family: "Eater", css: "Eater", weight: 400, designers: "Typomondo", added: 2011, group: "horror",
    blurb: "Letters that look chewed or torn, with ragged edges. Works for zombie and splatter themes." },
  { family: "Butcherman", css: "Butcherman", weight: 400, designers: "Typomondo", added: 2011, group: "horror",
    blurb: "Pointed, slashed shapes like a slasher-film title card." },
  { family: "Griffy", css: "Griffy", weight: 400, designers: "Neapolitan", added: 2012, group: "horror",
    blurb: "A playful, twisted display face with crooked curls. Spooky rather than scary, good for kids' parties." },
  { family: "Jolly Lodger", css: "Jolly+Lodger", weight: 400, designers: "Font Diner", added: 2012, group: "horror",
    blurb: "Tall, condensed letters with a haunted-house feel, borrowed from vintage Halloween signage." },
  { family: "Cinzel Decorative", css: "Cinzel+Decorative", weight: 400, designers: "Natanael Gama", added: 2012, group: "fantasy",
    blurb: "Classical Roman capitals with decorative swashes. The epic-fantasy title look, in three weights." },
  { family: "Almendra", css: "Almendra", weight: 400, designers: "Ana Sanfelippo", added: 2011, group: "fantasy",
    blurb: "A text face with calligraphic, late-medieval details. Readable in paragraphs, so it suits lore and rulebooks." },
  { family: "IM Fell English", css: "IM+Fell+English", weight: 400, designers: "Igino Marini", added: 2010, group: "fantasy",
    blurb: "A digital revival of 17th-century English type from the Fell collection, with the irregular inking of old print." },
  { family: "Macondo", css: "Macondo", weight: 400, designers: "John Vargas Beltrán", added: 2012, group: "fantasy",
    blurb: "Rounded, uncial-flavoured capitals with a storybook feel." },
  { family: "Eagle Lake", css: "Eagle+Lake", weight: 400, designers: "Astigmatic", added: 2012, group: "fantasy",
    blurb: "A calligraphic display face that looks written with a broad pen. Good for maps and scroll headings." },
  { family: "Fondamento", css: "Fondamento", weight: 400, designers: "Astigmatic", added: 2011, group: "fantasy",
    blurb: "A broad-nib italic hand with an italic companion. The closest free font to chancery calligraphy." },
  { family: "Metamorphous", css: "Metamorphous", weight: 400, designers: "James Grieshaber", added: 2011, group: "fantasy",
    blurb: "Mixes uncial and blackletter forms into a hybrid that reads as old without being hard to read." },
  { family: "Graduate", css: "Graduate", weight: 400, designers: "Eduardo Tunni", added: 2012, group: "varsity",
    blurb: "Slab-serif collegiate capitals, the varsity-jacket look. Pairs with blackletter on team and school merch." },
  { family: "Rye", css: "Rye", weight: 400, designers: "Nicole Fally", added: 2012, group: "western",
    blurb: "Decorative wood-type capitals in the style of Western wanted posters and whiskey labels." },
];

export const FONT_BY_FAMILY = Object.fromEntries(REAL_FONTS.map((f) => [f.family, f])) as Record<string, RealFont>;

export const GROUP_LABEL: Record<FontGroup, string> = {
  fraktur: "Fraktur",
  textura: "Textura",
  bastarda: "Bastarda",
  modern: "Modern blackletter",
  display: "Blackletter display",
  uncial: "Uncial (pre-blackletter)",
  medieval: "Medieval hand",
  script: "Script",
  horror: "Horror display",
  fantasy: "Fantasy",
  typewriter: "Typewriter",
  varsity: "Varsity",
  western: "Western",
};

export function fontsByName(names: string[]): RealFont[] {
  return names.map((n) => FONT_BY_FAMILY[n]).filter(Boolean);
}

export function specimenUrl(f: RealFont): string {
  return `https://fonts.google.com/specimen/${f.family.replace(/ /g, "+")}`;
}

export function cssHref(fonts: RealFont[]): string {
  return `https://fonts.googleapis.com/css2?${fonts.map((f) => `family=${f.css}`).join("&")}&display=swap`;
}
