#!/usr/bin/env node
// Submits all site URLs to the IndexNow API.
//
// URL list is derived from the built sitemap at .next/server/app/sitemap.xml.body
// so it stays automatically in sync with app/sitemap.ts — run `npm run build`
// first, then `npm run indexnow`.
//
// Options:
//   --live         read the deployed sitemap instead of the local build
//                  (use after a deploy, e.g. from the daily routine)
//   --days N       only submit URLs whose <lastmod> is within the last N days,
//                  which is what IndexNow asks for (new and changed pages)

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const HOST = "www.oldenglishfontgenerator.com";
const KEY = "257716b88f564b339f3f2c4f9dd56ba0";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sitemapPath = resolve(root, ".next/server/app/sitemap.xml.body");
const args = process.argv.slice(2);
const live = args.includes("--live");
const days = args.includes("--days") ? Number(args[args.indexOf("--days") + 1]) : null;

let sitemapXml;
if (live) {
  const r = await fetch(`https://${HOST}/sitemap.xml`);
  if (!r.ok) {
    console.error(`Could not fetch the live sitemap: ${r.status}`);
    process.exit(1);
  }
  sitemapXml = await r.text();
} else {
  try {
    sitemapXml = readFileSync(sitemapPath, "utf8");
  } catch {
    console.error(
      "Could not read .next/server/app/sitemap.xml.body.\n" +
      "Run `npm run build` first, then `npm run indexnow` (or use --live)."
    );
    process.exit(1);
  }
}

// Extract every <loc> value — these are the canonical URLs the build produced.
const cutoff = days != null ? new Date(Date.now() - days * 86400000).toISOString().slice(0, 10) : null;
const urlList = [...sitemapXml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
  .map((m) => ({ loc: m[1].match(/<loc>(https?:\/\/[^<]+)<\/loc>/)?.[1], lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? "" }))
  .filter((u) => u.loc && (!cutoff || u.lastmod.slice(0, 10) >= cutoff))
  .map((u) => u.loc);

if (cutoff) console.log(`Submitting URLs modified since ${cutoff}:\n${urlList.join("\n")}`);

if (urlList.length === 0) {
  if (cutoff) {
    console.log("No URLs changed in that window; nothing to submit.");
    process.exit(0);
  }
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
