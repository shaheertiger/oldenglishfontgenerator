#!/usr/bin/env node
// Submits all site URLs to the IndexNow API.
//
// URL list is derived from the built sitemap at .next/server/app/sitemap.xml.body
// so it stays automatically in sync with app/sitemap.ts — run `npm run build`
// first, then `npm run indexnow`.

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const HOST = "www.oldenglishfontgenerator.com";
const KEY = "257716b88f564b339f3f2c4f9dd56ba0";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = resolve(root, ".next/server/app/sitemap.xml.body");

let sitemapXml;
try {
  sitemapXml = readFileSync(sitemapPath, "utf8");
} catch {
  console.error(
    "Could not read .next/server/app/sitemap.xml.body.\n" +
    "Run `npm run build` first, then `npm run indexnow`."
  );
  process.exit(1);
}

// Extract every <loc> value — these are the canonical URLs the build produced.
const urlList = [...sitemapXml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)].map(
  (m) => m[1]
);

if (urlList.length === 0) {
  console.error("No URLs found in sitemap — is the build output up to date?");
  process.exit(1);
}

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
