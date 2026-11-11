// App guides with their own copy file. The original seven live in lib/fontpages.ts.
import type { AppGuide } from "@/lib/fontpages";
import powerpoint from "./powerpoint";
import photoshop from "./photoshop";
import inkscape from "./inkscape";

const g = (guide: AppGuide) => ({ file: `content/apps/${guide.app}.ts`, guide });

export const APP_GUIDE_FILES: { file: string; guide: AppGuide }[] = [g(powerpoint), g(photoshop), g(inkscape)];
