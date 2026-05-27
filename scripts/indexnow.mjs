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
];

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/font-generator`,
  `https://${HOST}/auto-font-styler`,
  `https://${HOST}/font-mixer`,
  `https://${HOST}/username-generator`,
  `https://${HOST}/headcanon-generator`,
  `https://${HOST}/story-generator`,
  `https://${HOST}/uuid-generator`,
  `https://${HOST}/ascii-generator`,
  `https://${HOST}/image-to-ascii`,
  ...SLUGS.map((s) => `https://${HOST}/font-generator/${s}`),
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
