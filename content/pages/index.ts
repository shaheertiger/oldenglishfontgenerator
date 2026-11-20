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
import symbols from "./gothic-symbols";
import howto from "./how-to-write-old-english";
import tattooGen from "./tattoo-font-generator";
import gangster from "./gangster-font-generator";
import horror from "./horror-font-generator";
import metal from "./metal-font-generator";
import deathNote from "./death-note-font";
import bible from "./bible-verse-font";
import diploma from "./diploma-font";
import boldFraktur from "./bold-fraktur";
import biker from "./biker-font-generator";
import latin from "./latin-tattoo-font";
import masthead from "./newspaper-masthead-font";
import illuminated from "./illuminated-letters";
import tiktok from "./old-english-font-tiktok";
import facebook from "./old-english-font-facebook";
import snapchat from "./old-english-font-snapchat";
import youtube from "./old-english-font-youtube";
import roblox from "./old-english-font-roblox";
import viking from "./viking-font-generator";
import gothicLetters from "./gothic-letters";
import ancient from "./ancient-font-generator";
import renaissance from "./renaissance-font-generator";
import twitch from "./old-english-font-twitch";
import victorian from "./victorian-font-generator";
import birthday from "./happy-birthday-font";
import pinterest from "./old-english-font-pinterest";
import oldEnglishCopy from "./font-generator-old-english";

export { home };

export const CLUSTERS: PageContent[] = [
  // Restored /font-generator/ URLs that Bing still ranks (Nov 2026)
  oldEnglishCopy,
  tattoo, alphabet, letters, numbers, cursive, gothic, blackletter, fraktur,
  chicano, names, medieval, instagram, discord, image, symbols, howto,
  // Lettering by theme (Nov 2026)
  tattooGen, gangster, horror, metal, deathNote, bible, diploma, boldFraktur, biker, latin, masthead, illuminated, tiktok, facebook,
  // Daily picks 2026-11-11
  snapchat, youtube, roblox, viking,
  // Daily picks 2026-11-19 (from Search Console queries)
  gothicLetters, ancient, renaissance, twitch,
  victorian, birthday, pinterest,
];

export function getCluster(slug: string): PageContent | undefined {
  return CLUSTERS.find((c) => c.slug === slug);
}

/** Source file for a page, used for its sitemap lastmod. */
export function sourceFile(p: PageContent): string {
  return `content/pages/${p.file ?? (p.slug || "home")}.ts`;
}
