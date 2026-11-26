// Node resolve hook so scripts can import the site's TS sources directly:
// "@/x" -> <repo>/x, and extensionless relative imports -> .ts/.tsx/.json.
// Use: node --experimental-strip-types --import ./scripts/lib/ts-register.mjs <script>
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve as r, dirname } from "node:path";

const ROOT = r(dirname(fileURLToPath(import.meta.url)), "../..");

export async function resolve(spec, ctx, next) {
  let s = spec;
  if (s.startsWith("@/")) s = pathToFileURL(r(ROOT, s.slice(2))).href;
  if (s.startsWith("file:") || s.startsWith(".")) {
    const base = s.startsWith("file:") ? fileURLToPath(s) : r(dirname(fileURLToPath(ctx.parentURL)), s);
    if (!existsSync(base) || !/\.[a-z]+$/.test(base)) {
      for (const ext of [".ts", ".tsx", ".mjs", ".js", ".json", "/index.ts"]) {
        if (existsSync(base + ext)) return next(pathToFileURL(base + ext).href, ctx);
      }
    }
    return next(pathToFileURL(base).href, ctx);
  }
  return next(s, ctx);
}
