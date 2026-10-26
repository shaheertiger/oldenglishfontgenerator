import { withDualmark } from "@dualmark/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The markdown route reads the hand-kept twins from content/markdown at
  // request time, so ship them with that function.
  outputFileTracingIncludes: {
    "/md/[...path]": ["./content/markdown/**/*"],
  },
};

export default withDualmark(nextConfig, {
  siteUrl: "https://www.oldenglishfontgenerator.com",
});
