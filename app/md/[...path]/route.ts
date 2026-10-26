import { estimateTokens, AEO_SPEC_VERSION } from "@dualmark/core";
import { renderMarkdown } from "@/lib/markdown";
import { SITE_URL } from "@/lib/seo";

// Markdown twins (Dualmark / AEO spec v1.0). proxy.ts rewrites
// /about.md, /index.md, and AI-agent requests here as /md/about, /md/index.
//
// We build the response ourselves instead of using the package's
// createDualmarkRouteHandler: its markdownResponse() runs normalizeUnicode(),
// which turns 𝗯𝗼𝗹𝗱 letters back into ASCII and strips zero-width joiners.
// That would corrupt the font samples this site exists to show.
//
// Rendered per request (not prerendered) because Next.js/Vercel replace the
// Vary header on prerendered output, and the spec requires `Vary: Accept`.
// The CDN still caches responses via s-maxage.
export const dynamic = "force-dynamic";

function markdown(body: string, status: number, canonicalPath?: string): Response {
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    "X-Markdown-Tokens": String(Math.max(1, estimateTokens(body))),
    "X-Robots-Tag": "noindex",
    Vary: "Accept",
    "X-Content-Type-Options": "nosniff",
    "X-AEO-Version": AEO_SPEC_VERSION,
    "Cache-Control":
      status === 200 ? "public, max-age=3600, s-maxage=86400" : "public, max-age=60",
  });
  // Point search engines at the HTML page as the canonical version.
  if (canonicalPath) headers.set("Link", `<${SITE_URL}${canonicalPath}>; rel="canonical"`);
  return new Response(body, { status, headers });
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path } = await params;
  const segments = path.filter(Boolean);
  const body = await renderMarkdown(segments.length ? segments : ["index"]);
  if (body === null) {
    return markdown(
      `# Not found\n\nThere is no markdown version of this page. See ${SITE_URL}/sitemap.md for every page.\n`,
      404
    );
  }
  const htmlPath = segments.join("/") === "index" ? "/" : `/${segments.join("/")}`;
  return markdown(body, 200, htmlPath);
}
