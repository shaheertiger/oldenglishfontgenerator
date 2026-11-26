// Pages rendered outside content/pages that scripts/check-content.mjs must
// also check for prose overlap, length limits and untested claims.
import { CHARS, checkPage } from "./different-fonts";

export const CHECK_PAGES = CHARS.map(checkPage);
