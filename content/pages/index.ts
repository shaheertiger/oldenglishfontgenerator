import type { PageContent } from "./types";
import home from "./home";
import tattoo from "./old-english-tattoo-font";
import alphabet from "./old-english-alphabet";
import letters from "./old-english-letters";
import numbers from "./old-english-numbers";
import cursive from "./old-english-cursive";
import gothic from "./gothic-font-generator";
import blackletter from "./blackletter-generator";
import fraktur from "./fraktur-generator";
import chicano from "./chicano-font-generator";
import names from "./old-english-name-generator";
import medieval from "./medieval-font-generator";
import instagram from "./old-english-font-instagram";
import discord from "./old-english-font-discord";
import image from "./old-english-text-to-image";

export { home };

export const CLUSTERS: PageContent[] = [
  tattoo, alphabet, letters, numbers, cursive, gothic, blackletter, fraktur,
  chicano, names, medieval, instagram, discord, image,
];

export function getCluster(slug: string): PageContent | undefined {
  return CLUSTERS.find((c) => c.slug === slug);
}

/** Source file for a page, used for its sitemap lastmod. */
export function sourceFile(p: PageContent): string {
  return `content/pages/${p.slug || "home"}.ts`;
}
