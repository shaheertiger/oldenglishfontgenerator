#!/usr/bin/env node
// Page URLs whose content changed between two git refs, for IndexNow after a
// deploy (growth plan step 5: only the changed URLs).
//   node scripts/changed-urls.mjs <fromRef> [toRef=HEAD] > /tmp/changed.txt
//   npm run indexnow -- --file /tmp/changed.txt
// Maps content source files to their URLs; shared code (components, CSS) is
// not mapped on purpose: a layout change is not a content change.
import { execFileSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";

const [from, to = "HEAD"] = process.argv.slice(2);
if (!from) { console.error("usage: node scripts/changed-urls.mjs <fromRef> [toRef]"); process.exit(1); }
const files = execFileSync("git", ["diff", "--name-only", `${from}..${to}`], { encoding: "utf8" }).trim().split("\n").filter(Boolean);
const urls = new Set();
const CHARS = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
for (const f of files) {
  if (f.startsWith("content/pages/") && !f.endsWith("index.ts") && !f.endsWith("types.ts") && existsSync(f)) {
    const src = readFileSync(f, "utf8");
    if (src.includes("@retired")) continue;
    const m = src.match(/slug:\s*"([^"]*)"/);
    if (m) urls.add(m[1] ? `/${m[1]}` : "/");
  } else if (f.startsWith("content/fonts/")) {
    urls.add(`/fonts/${f.split("/").pop().replace(/\.ts$/, "")}`);
  } else if (f.startsWith("content/apps/")) {
    urls.add(`/fonts/old-english/${f.split("/").pop().replace(/\.ts$/, "")}`);
  } else if (f.startsWith("content/blog/")) {
    urls.add(`/blog/${f.split("/").pop().replace(/\.ts$/, "")}`);
  } else if (["lib/different-fonts.ts", "lib/letters.ts", "lib/char-history.ts"].includes(f)) {
    urls.add("/different-fonts");
    CHARS.forEach((c) => urls.add(`/different-fonts/${c}`));
  } else if (f === "lib/owners.ts") {
    // Definitions live here: every owner page changed.
    for (const m of readFileSync(f, "utf8").matchAll(/path:\s*"([^"]+)"/g)) urls.add(m[1]);
  } else if (f.startsWith("app/") && f.endsWith("page.tsx") && !f.includes("[")) {
    urls.add("/" + f.replace(/^app\//, "").replace(/\/?page\.tsx$/, ""));
  }
}
console.log([...urls].sort().join("\n"));
