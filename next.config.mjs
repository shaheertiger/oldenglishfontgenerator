import { withDualmark } from "@dualmark/nextjs";
import { REDIRECTS } from "./lib/redirects.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // No trailing slashes: /page/ -> /page (Next.js default, kept explicit).
  trailingSlash: false,
  outputFileTracingIncludes: {
    "/md/[...path]": ["./content/markdown/**/*"],
  },
  async redirects() {
    return [
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
