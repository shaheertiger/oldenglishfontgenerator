#!/usr/bin/env node
// Writes lib/lastmod.json: { "<source file>": "<ISO date of last commit>" }
// for every page source, using full git history. Run after committing
// content changes:  npm run lastmod && git commit -am "Update lastmod"
import { execFileSync } from "node:child_process";
import { readdirSync, writeFileSync } from "node:fs";

const files = [
  ...readdirSync("content/pages").filter((f) => f.endsWith(".ts") && !["types.ts", "index.ts"].includes(f)).map((f) => `content/pages/${f}`),
  ...["content/fonts", "content/apps"].flatMap((d) => readdirSync(d).filter((f) => f.endsWith(".ts") && f !== "index.ts").map((f) => `${d}/${f}`)),
  "lib/letters.ts",
  "lib/fontpages.ts",
  "lib/fontstats.json",
  "app/about/page.tsx",
  "app/contact/page.tsx",
  "app/privacy/page.tsx",
  "app/terms/page.tsx",
];
const out = {};
for (const f of files.sort()) {
  const d = execFileSync("git", ["log", "-1", "--format=%cI", "--", f], { encoding: "utf8" }).trim();
  if (d) out[f] = d;
}
writeFileSync("lib/lastmod.json", JSON.stringify(out, null, 2) + "\n");
console.log(`lib/lastmod.json: ${Object.keys(out).length} files`);
