import type { Metadata } from "next";
import SubscriptClient from "./SubscriptClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Subscript Generator – Subscript & Superscript Text Copy Paste",
  description:
    "Free subscript and superscript generator. Turn text and numbers into tiny ₛᵤᵦ and ˢᵘᵖ Unicode characters you can copy and paste anywhere.",
  keywords: [
    "subscript generator",
    "superscript generator",
    "subscript text",
    "subscript copy and paste",
    "small numbers text",
  ],
  alternates: { canonical: `${SITE_URL}/subscript-generator` },
  openGraph: {
    title: "Subscript & Superscript Generator",
    description: "Convert text and numbers into subscript and superscript. Copy and paste anywhere.",
    url: `${SITE_URL}/subscript-generator`,
    type: "website",
  },
};

export default function SubscriptPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Subscript &amp; Superscript Generator</h1>
            <p className="lead">
              Convert letters and numbers into tiny subscript (below the line)
              or superscript (above the line) Unicode characters. Type your
              text, pick a mode, and copy it into places that don&rsquo;t
              normally allow formatting.
            </p>
            <SubscriptClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Subscript vs. superscript</h2>
            <p>
              <strong>Subscript</strong> characters sit slightly below the
              baseline — think of the &ldquo;2&rdquo; in H₂O or the numbers in
              chemical formulas. <strong>Superscript</strong> characters sit
              above the baseline, like exponents (x², m²) or footnote markers.
            </p>
            <h2 style={{ marginTop: 28 }}>How it works</h2>
            <p>
              Unlike a word processor that uses formatting, this tool swaps each
              character for a dedicated Unicode subscript or superscript glyph.
              Because the result is plain text, it survives copy and paste into
              social media bios, usernames, chat apps, comments, and anywhere
              else that strips rich formatting.
            </p>
            <h2 style={{ marginTop: 28 }}>A note on coverage</h2>
            <p>
              Unicode provides a complete set of superscript letters and digits,
              but the subscript set is missing a few letters (such as b, c, d,
              and several others). When a character has no real subscript or
              superscript form, the tool leaves it as-is so your text stays
              readable.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
