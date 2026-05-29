import type { Metadata } from "next";
import BinaryClient from "./BinaryClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Binary Code Translator – Text to Binary & Binary to Text",
  description:
    "Free binary code translator. Convert text to binary and decode binary back to text instantly. 8-bit ASCII/Unicode, copy and paste, runs in your browser.",
  keywords: [
    "binary code translator",
    "text to binary",
    "binary to text",
    "binary translator",
    "binary decoder",
  ],
  alternates: { canonical: `${SITE_URL}/binary-code-translator` },
  openGraph: {
    title: "Binary Code Translator",
    description: "Convert text to binary and binary back to text. Free, instant, copy & paste.",
    url: `${SITE_URL}/binary-code-translator`,
    type: "website",
  },
};

export default function BinaryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Binary Code Translator</h1>
            <p className="lead">
              Convert text into binary, or decode binary back into readable
              text. Switch direction, type or paste, and copy the result. The
              translation runs entirely in your browser.
            </p>
            <BinaryClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How binary represents text</h2>
            <p>
              Computers store every character as a number. This translator uses
              each character&rsquo;s Unicode code point and writes it as an
              8-bit binary value — so the letter <code>A</code> (code point 65)
              becomes <code>01000001</code>. Space-separating each byte keeps the
              output readable and lets the decoder split it back apart cleanly.
            </p>
            <h2 style={{ marginTop: 28 }}>Decoding binary</h2>
            <p>
              To go the other way, paste groups of binary digits separated by
              spaces. The decoder reads each group as a base-2 number and maps
              it back to its character. Standard ASCII characters fit in 8 bits;
              characters above code point 255 are written with as many bits as
              they need.
            </p>
            <h2 style={{ marginTop: 28 }}>Common uses</h2>
            <p>
              Students use it to learn how text maps to bits, hobbyists hide
              short messages in binary, and developers use it to sanity-check
              character encoding. Because nothing is uploaded, it&rsquo;s safe
              for quick, private conversions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
