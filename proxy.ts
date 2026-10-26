import { NextResponse, type NextRequest } from "next/server";
import { detectAIBot } from "@dualmark/core";
import { createDualmarkMiddleware } from "@dualmark/nextjs";

// Markdown content negotiation (Dualmark / AEO spec v1.0).
//  - /page.md                      -> markdown twin (rewritten to /md/page)
//  - Accept: text/markdown         -> markdown twin
//  - AI agents (GPTBot, ClaudeBot, ChatGPT-User, ...) -> markdown twin
//  - Accept excludes HTML and md   -> 406
//  - everything else               -> HTML + `Link: </page.md>; rel="alternate"`
// Next.js 16 runs this file as "proxy" (formerly middleware.ts).

const dualmark = createDualmarkMiddleware({
  siteUrl: "https://www.oldenglishfontgenerator.com",
  // Generated image/icon routes have no file extension, so list them here.
  middleware: { skipPaths: ["/opengraph-image", "/apple-icon", "/icon"] },
});

// Any path with a file extension other than .md (robots.txt, sitemap.xml,
// ads.txt, icon.svg, manifest.webmanifest, ...) is a file, not a page.
// Without this, an AI bot fetching /robots.txt would be rewritten to a
// markdown 404.
const FILE_PATH = /\.(?!md$)[a-z0-9]+$/i;

export default async function proxy(request: NextRequest) {
  if (FILE_PATH.test(request.nextUrl.pathname)) return NextResponse.next();

  // Search-index crawlers (OAI-SearchBot, Claude-SearchBot, PerplexityBot, ...)
  // keep getting HTML unless they ask for markdown. The markdown twin carries
  // `X-Robots-Tag: noindex`, which must not reach a search index in place of
  // the real page. They can still find the twin via the Link header.
  const bot = detectAIBot(request.headers.get("user-agent") ?? "");
  if (bot.isBot && bot.purpose === "search") {
    const headers = new Headers(request.headers);
    headers.delete("user-agent");
    return dualmark({ headers, nextUrl: request.nextUrl, url: request.url });
  }

  return dualmark(request);
}

// Must be an inline literal: Next.js parses it statically.
export const config = {
  matcher: [
    {
      source: "/((?!_next/|favicon.ico|md/).*)",
      missing: [{ type: "header", key: "next-router-prefetch" }],
    },
  ],
};
