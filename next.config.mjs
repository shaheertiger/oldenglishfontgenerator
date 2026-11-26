import { withDualmark } from "@dualmark/nextjs";
import { REDIRECTS } from "./lib/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Inline the (small) global stylesheet so first paint needs no extra request.
  experimental: { inlineCss: true },
  // No trailing slashes: /page/ -> /page (Next.js default, kept explicit).
  trailingSlash: false,
  outputFileTracingIncludes: {
    "/md/[...path]": ["./content/markdown/**/*"],
  },
  async redirects() {
    return [
      // Apex URLs that redirect go straight to their final www URL (one hop),
      // so Bing sees each old apex URL redirect one-to-one.
      ...REDIRECTS.map((r) => ({
        source: r.source,
        has: [{ type: "host", value: "oldenglishfontgenerator.com" }],
        destination: `https://www.oldenglishfontgenerator.com${r.destination}`,
        statusCode: 301,
      })),
      // Apex -> www (HTTPS is enforced by the Vercel edge).
      {
        source: "/:path*",
        has: [{ type: "host", value: "oldenglishfontgenerator.com" }],
        destination: "https://www.oldenglishfontgenerator.com/:path*",
        statusCode: 301,
      },
      ...REDIRECTS.map((r) => ({ ...r, statusCode: 301 })),
    ];
  },
};

export default withDualmark(nextConfig, {
  siteUrl: "https://www.oldenglishfontgenerator.com",
});
