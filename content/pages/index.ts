import type { PageContent } from "./types";
import { isServed } from "@/lib/redirects.mjs";
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
import handwriting from "./font-generator-handwriting";
import cuneiform from "./cuneiform-translator";
import rCoquette from "./coquette";
import rEmoticonsShrug from "./emoticons-shrug";
import rEs from "./es";
import rEsCoolSymbolsHearts from "./es-cool-symbols-hearts";
import rEsFontGenerator from "./es-font-generator";
import rEsFontGeneratorOldEnglish from "./es-font-generator-old-english";
import rFontGenerator1940s from "./font-generator-1940s";
import rFontGenerator2000s from "./font-generator-2000s";
import rFontGeneratorAngelic from "./font-generator-angelic";
import rFontGeneratorAnimalistic from "./font-generator-animalistic";
import rFontGeneratorBlackletter from "./font-generator-blackletter";
import rFontGeneratorCalligraphy from "./font-generator-calligraphy";
import rFontGeneratorCalligraphyCapitalLetters from "./font-generator-calligraphy-capital-letters";
import rFontGeneratorDistortedText from "./font-generator-distorted-text";
import rFontGeneratorFancyLetters from "./font-generator-fancy-letters";
import rFontGeneratorFancyWriting from "./font-generator-fancy-writing";
import rFontGeneratorFontConverter from "./font-generator-font-converter";
import rFontGeneratorFortnite from "./font-generator-fortnite";
import rFontGeneratorFraktur from "./font-generator-fraktur";
import rFontGeneratorFun from "./font-generator-fun";
import rFontGeneratorGangster from "./font-generator-gangster";
import rFontGeneratorGraffiti from "./font-generator-graffiti";
import rFontGeneratorInstagram from "./font-generator-instagram";
import rFontGeneratorItalianate from "./font-generator-italianate";
import rFontGeneratorItalic from "./font-generator-italic";
import rFontGeneratorMinecraft from "./font-generator-minecraft";
import rFontGeneratorMockingText from "./font-generator-mocking-text";
import rFontGeneratorModernCalligraphy from "./font-generator-modern-calligraphy";
import rFontGeneratorMonster from "./font-generator-monster";
import rFontGeneratorOldCursive from "./font-generator-old-cursive";
import rFontGeneratorOldEnglishIg from "./font-generator-old-english-ig";
import rFontGeneratorOldEnglishLetters from "./font-generator-old-english-letters";
import rFontGeneratorOldEnglishTattoo from "./font-generator-old-english-tattoo";
import rFontGeneratorPrincess from "./font-generator-princess";
import rFontGeneratorRansomNote from "./font-generator-ransom-note";
import rFontGeneratorReverse from "./font-generator-reverse";
import rFontGeneratorSatanic from "./font-generator-satanic";
import rFontGeneratorScratchy from "./font-generator-scratchy";
import rFontGeneratorSignature from "./font-generator-signature";
import rFontGeneratorSlasher from "./font-generator-slasher";
import rFontGeneratorSmallGothic from "./font-generator-small-gothic";
import rFontGeneratorStrikethrough from "./font-generator-strikethrough";
import rFontGeneratorThankYou from "./font-generator-thank-you";
import rFontGeneratorWavy from "./font-generator-wavy";
import rFontGeneratorYeOldEnglish from "./font-generator-ye-old-english";
import rHieroglyphicsTranslator from "./hieroglyphics-translator";
import rMedievalTranslator from "./medieval-translator";
import rPirateTranslator from "./pirate-translator";
import rRunicTranslator from "./runic-translator";
import rSymbols from "./symbols";
import rSymbolsAlchemy from "./symbols-alchemy";
import rSymbolsBrackets from "./symbols-brackets";
import rSymbolsDownArrow from "./symbols-down-arrow";
import rSymbolsGreek from "./symbols-greek";
import rSymbolsNumbers from "./symbols-numbers";
import rSymbolsUpArrow from "./symbols-up-arrow";

export { home };

const ALL_CLUSTERS: PageContent[] = [
  // Restored Nov 26 2026 at the URLs Bing and Copilot ranked before 00a2b7f (docs/fix-2026-11.md)
  rCoquette, rEmoticonsShrug, rEs, rEsCoolSymbolsHearts, rEsFontGenerator, rEsFontGeneratorOldEnglish, rFontGenerator1940s, rFontGenerator2000s, rFontGeneratorAngelic, rFontGeneratorAnimalistic, rFontGeneratorBlackletter, rFontGeneratorCalligraphy, rFontGeneratorCalligraphyCapitalLetters, rFontGeneratorDistortedText, rFontGeneratorFancyLetters, rFontGeneratorFancyWriting, rFontGeneratorFontConverter, rFontGeneratorFortnite, rFontGeneratorFraktur, rFontGeneratorFun, rFontGeneratorGangster, rFontGeneratorGraffiti, rFontGeneratorInstagram, rFontGeneratorItalianate, rFontGeneratorItalic, rFontGeneratorMinecraft, rFontGeneratorMockingText, rFontGeneratorModernCalligraphy, rFontGeneratorMonster, rFontGeneratorOldCursive, rFontGeneratorOldEnglishIg, rFontGeneratorOldEnglishLetters, rFontGeneratorOldEnglishTattoo, rFontGeneratorPrincess, rFontGeneratorRansomNote, rFontGeneratorReverse, rFontGeneratorSatanic, rFontGeneratorScratchy, rFontGeneratorSignature, rFontGeneratorSlasher, rFontGeneratorSmallGothic, rFontGeneratorStrikethrough, rFontGeneratorThankYou, rFontGeneratorWavy, rFontGeneratorYeOldEnglish, rHieroglyphicsTranslator, rMedievalTranslator, rPirateTranslator, rRunicTranslator, rSymbols, rSymbolsAlchemy, rSymbolsBrackets, rSymbolsDownArrow, rSymbolsGreek, rSymbolsNumbers, rSymbolsUpArrow,
  // Restored /font-generator/ URLs that Bing still ranks (Nov 2026)
  oldEnglishCopy, handwriting, cuneiform,
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

/** Pages listed here but redirected or 410 in lib/redirects.mjs are not served. */
export const SERVED = (p: PageContent) => isServed(p.slug ? `/${p.slug}` : "/");
export const CLUSTERS: PageContent[] = ALL_CLUSTERS.filter(SERVED);

export function getCluster(slug: string): PageContent | undefined {
  return CLUSTERS.find((c) => c.slug === slug);
}

/** Source file for a page, used for its sitemap lastmod. */
export function sourceFile(p: PageContent): string {
  return `content/pages/${p.file ?? (p.slug || "home")}.ts`;
}
