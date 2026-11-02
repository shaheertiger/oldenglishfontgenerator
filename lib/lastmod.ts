// Real "last content change" dates for the sitemap.
//
// Preferred source: `git log -1 --format=%cI -- <file>` for the file that
// holds a page's copy. Build machines often clone with shallow history,
// where git would report the latest commit for every file, so in that case
// we fall back to lib/lastmod.json, which `npm run lastmod` regenerates from
// full local history. We never use the build time.
import { execFileSync } from "node:child_process";
import committed from "./lastmod.json";

const COMMITTED = committed as Record<string, string>;

function gitAvailable(): boolean {
  try {
    const shallow = execFileSync("git", ["rev-parse", "--is-shallow-repository"], { encoding: "utf8" }).trim();
    return shallow === "false";
  } catch {
    return false;
  }
}

const USE_GIT = gitAvailable();

export function lastModified(file: string): string | undefined {
  if (USE_GIT) {
    try {
      const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim();
      if (out) return out;
    } catch {}
  }
  return COMMITTED[file];
}
