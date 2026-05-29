import type { Metadata } from "next";
import RomanClient from "./RomanClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Roman Numeral Converter – Numbers to Roman Numerals & Back",
  description:
    "Free Roman numeral converter. Convert numbers (1–3999) to Roman numerals and decode Roman numerals back to numbers. Instant, copy and paste.",
  keywords: [
    "roman numeral converter",
    "number to roman numerals",
    "roman numerals to number",
    "roman numeral translator",
    "convert to roman numerals",
  ],
  alternates: { canonical: `${SITE_URL}/roman-numeral-converter` },
  openGraph: {
    title: "Roman Numeral Converter",
    description: "Convert numbers to Roman numerals and back. Free, instant, copy & paste.",
    url: `${SITE_URL}/roman-numeral-converter`,
    type: "website",
  },
};

export default function RomanPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Roman Numeral Converter</h1>
            <p className="lead">
              Convert ordinary numbers into Roman numerals, or decode Roman
              numerals back into numbers. Works for 1 to 3999, the standard
              range, and runs entirely in your browser.
            </p>
            <RomanClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How Roman numerals work</h2>
            <p>
              Roman numerals build numbers from seven letters: <code>I</code> (1),{" "}
              <code>V</code> (5), <code>X</code> (10), <code>L</code> (50),{" "}
              <code>C</code> (100), <code>D</code> (500), and <code>M</code>{" "}
              (1000). Letters are added together left to right, except when a
              smaller value sits before a larger one — then it&rsquo;s subtracted.
              That&rsquo;s why <code>IV</code> is 4 and <code>IX</code> is 9.
            </p>
            <h2 style={{ marginTop: 28 }}>Why the 1–3999 limit?</h2>
            <p>
              Standard Roman numerals don&rsquo;t have a symbol for zero and only
              go up to 3,999 (<code>MMMCMXCIX</code>) using the basic letters.
              Larger numbers historically used bars over letters to multiply them
              by 1,000, which most modern uses skip. This converter validates
              both directions, so a malformed numeral like <code>IIII</code> is
              flagged rather than silently misread.
            </p>
            <h2 style={{ marginTop: 28 }}>Common uses</h2>
            <p>
              Roman numerals still appear on clock faces, book chapters, movie
              sequels, Super Bowl numbers, building cornerstones, and copyright
              years. This tool is handy for reading those off — or for writing a
              year like {new Date().getFullYear()} in numerals for a design.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
