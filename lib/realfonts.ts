// Real, open-licence blackletter and medieval typefaces shown on the
// /fonts/* directory pages. Every family here is on Google Fonts under the
// SIL Open Font License (checked against google/fonts ofl/ METADATA), so it
// can be used in personal and commercial work, including logos.
// Designers and dates come from Google Fonts' own metadata.

export type FontGroup = "fraktur" | "textura" | "bastarda" | "modern" | "display" | "uncial" | "medieval";

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
