#!/usr/bin/env node
// Submits all site URLs to the IndexNow API. Run after deploy:
//   npm run indexnow

const HOST = "www.oldenglishfontgenerator.com";
const KEY = "257716b88f564b339f3f2c4f9dd56ba0";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const SLUGS = [
  "cursive", "instagram", "cool", "bold", "strikethrough", "bubble",
  "fonts-copy-and-paste", "weird", "small", "discord", "discord-font",
  "glitch", "facebook", "italic", "upside-down", "fancy", "cursed",
  "creepy", "twitter", "big", "bold-text-generator", "small-caps", "zalgo",
  "tiktok", "ig-font", "underline", "stylish", "reverse",
  "calligraphy", "gothic", "cute", "superscript", "aesthetic", "fortnite",
  "vaporwave", "hacked", "tattoo", "signature", "handwriting", "old-english",
];

const BLOG_SLUGS = [
  "blackletter-gothic-fraktur-difference",
  "old-english-fonts-instagram-bio",
  "old-english-fonts-tattoo-guide",
  "how-unicode-fonts-actually-work",
  "best-old-english-fonts-for-discord",
];

const LETTERS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");

const SYMBOL_SLUGS = [
  "down-arrow", "up-arrow", "left-arrow", "right-arrow",
  "heart", "star", "sun", "moon", "music",
  "check-mark", "cross", "currency", "infinity",
  "bullet", "triangle", "crown",
  "smiley-faces", "numbers", "alchemy", "brackets", "hands", "greek",
];

const EMOTICON_SLUGS = [
  "shrug", "blushing", "uwu", "happy", "sad", "angry",
  "love", "crying", "bear", "cat", "table-flip", "dance",
];

const NAME_SLUGS = [
  "roblox-names", "cute-names", "aesthetic-names",
  "discord-names", "minecraft-names", "twitter-names",
];

const ES_FONT_SLUGS = ["cursive", "fancy", "bold", "instagram"];

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/es`,
  `https://${HOST}/blog`,
  `https://${HOST}/preppy`,
  `https://${HOST}/coquette`,
  `https://${HOST}/different-fonts`,
  `https://${HOST}/symbols`,
  `https://${HOST}/emoticons`,
  `https://${HOST}/name-generator`,
  `https://${HOST}/es/font-generator`,
  `https://${HOST}/es/cool-symbols/hearts`,
  ...LETTERS.map((l) => `https://${HOST}/different-fonts/${l}`),
  ...SYMBOL_SLUGS.map((s) => `https://${HOST}/symbols/${s}`),
  ...EMOTICON_SLUGS.map((s) => `https://${HOST}/emoticons/${s}`),
  ...NAME_SLUGS.map((s) => `https://${HOST}/name-generator/${s}`),
  ...ES_FONT_SLUGS.map((s) => `https://${HOST}/es/font-generator/${s}`),
  `https://${HOST}/font-generator`,
  `https://${HOST}/auto-font-styler`,
  `https://${HOST}/font-mixer`,
  `https://${HOST}/username-generator`,
  `https://${HOST}/headcanon-generator`,
  `https://${HOST}/story-generator`,
  `https://${HOST}/uuid-generator`,
  `https://${HOST}/ascii-generator`,
  `https://${HOST}/image-to-ascii`,
  `https://${HOST}/favorites`,
  ...SLUGS.map((s) => `https://${HOST}/font-generator/${s}`),
  ...BLOG_SLUGS.map((s) => `https://${HOST}/blog/${s}`),
];

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log(`IndexNow → ${res.status} ${res.statusText}`);
if (text) console.log(text);

if (res.status === 200 || res.status === 202) {
  console.log(`Submitted ${urlList.length} URLs.`);
} else {
  process.exit(1);
}
