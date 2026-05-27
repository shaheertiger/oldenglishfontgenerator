import type { Metadata } from "next";
import UuidClient from "./UuidClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "UUID Generator – Random v4 UUIDs Copy & Paste",
  description:
    "Generate random v4 UUIDs in batches. Dashes or no dashes, upper or lower case, in braces. Free, instant, runs in your browser.",
  keywords: ["uuid generator", "v4 uuid", "guid generator", "random id"],
  alternates: { canonical: `${SITE_URL}/uuid-generator` },
  openGraph: {
    title: "UUID Generator",
    description: "Random v4 UUIDs, instant batch generation, copy and paste ready.",
    url: `${SITE_URL}/uuid-generator`,
    type: "website",
  },
};

export default function UuidPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>UUID Generator</h1>
            <p className="lead">
              Generate random v4 UUIDs in batches. Pick a format, choose how
              many, and copy individually or all at once. Uses your
              browser&rsquo;s crypto API — no network calls.
            </p>
            <UuidClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What is a v4 UUID?</h2>
            <p>
              A UUID (Universally Unique Identifier) is a 128-bit value
              typically shown as a 36-character hex string with four dashes.
              The &ldquo;v4&rdquo; flavor draws those 128 bits from a random
              source — so the odds of two clients generating the same UUID
              are vanishingly small, which is why it&rsquo;s the standard
              choice for database primary keys, request IDs, file names, and
              any value that needs to be unique without coordination.
            </p>
            <h2 style={{ marginTop: 28 }}>How this generator works</h2>
            <p>
              It calls <code>crypto.randomUUID()</code> in your browser, which
              is the official Web Crypto API for generating cryptographically
              random v4 UUIDs. Nothing is sent to a server. The format
              options just reshape the string — they don&rsquo;t change the
              underlying random value.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
