// Font pages with their own copy file (one file per page so each gets a real
// sitemap lastmod). The three original collections live in lib/fontpages.ts.
import type { FontPage } from "@/lib/fontpages";
import chicano from "./chicano";
import tattoo from "./tattoo";
import halloween from "./halloween";
import fantasy from "./fantasy";
import clothingBrand from "./clothing-brand";
import calligraphy from "./calligraphy";
import oldEnglishTextMt from "./old-english-text-mt";
import oldLondon from "./old-london";
import cloisterBlack from "./cloister-black";
import unifrakturcook from "./unifrakturcook";
import uncialAntiqua from "./uncial-antiqua";
import pirataOne from "./pirata-one";
import metalMania from "./metal-mania";

const f = (page: FontPage) => ({ file: `content/fonts/${page.style}.ts`, page });

export const FONT_PAGE_FILES: { file: string; page: FontPage }[] = [
  // Collections
  f(chicano), f(tattoo), f(halloween), f(fantasy), f(clothingBrand), f(calligraphy),
  // Individual fonts
  f(oldEnglishTextMt), f(oldLondon), f(cloisterBlack), f(unifrakturcook), f(uncialAntiqua), f(pirataOne), f(metalMania),
];
