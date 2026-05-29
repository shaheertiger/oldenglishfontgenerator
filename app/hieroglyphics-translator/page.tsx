import type { Metadata } from "next";
import TextTransformClient from "@/components/TextTransformClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Hieroglyphics Translator – English to Egyptian Hieroglyphs",
  description:
    "Free Egyptian hieroglyphics translator. Convert English into hieroglyph symbols you can copy and paste. Real Unicode hieroglyphs, runs in your browser.",
  keywords: [
    "hieroglyphics translator",
    "english to hieroglyphics",
    "egyptian hieroglyphics translator",
    "hieroglyph generator",
    "hieroglyphics copy and paste",
  ],
  alternates: { canonical: `${SITE_URL}/hieroglyphics-translator` },
  openGraph: {
    title: "Hieroglyphics Translator – English to Egyptian Hieroglyphs",
    description: "Convert English into Egyptian hieroglyph symbols you can copy and paste.",
    url: `${SITE_URL}/hieroglyphics-translator`,
    type: "website",
  },
};

export default function HieroglyphicsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Hieroglyphics Translator</h1>
            <p className="lead">
              Convert English into Egyptian hieroglyphs. Type your text and copy
              the symbols — they&rsquo;re real Unicode characters, so they paste
              into documents, bios, and posts wherever the hieroglyph font is
              supported.
            </p>
            <TextTransformClient kind="hieroglyphs" />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How the translation works</h2>
            <p>
              Ancient Egyptian writing used hundreds of signs, including a set of
              <em> uniliteral</em> signs that each stood for a single sound. This
              tool maps the English alphabet onto those phonetic signs, so a
              letter like <code>m</code> becomes the owl sign <strong>𓅓</strong>{" "}
              and <code>n</code> becomes the water sign <strong>𓈖</strong>.
            </p>
            <h2 style={{ marginTop: 28 }}>Authentic spelling vs. fun</h2>
            <p>
              Real hieroglyphic writing didn&rsquo;t record vowels the way modern
              English does and combined signs in ways no letter-by-letter tool
              can reproduce. Treat this as a playful, decorative transliteration
              — perfect for themed designs, profiles, and projects — rather than
              an Egyptological transcription.
            </p>
            <h2 style={{ marginTop: 28 }}>A note on display</h2>
            <p>
              Egyptian hieroglyphs are valid Unicode, but not every device ships
              a font for them. Recent versions of Windows, macOS, iOS, and
              Android render them well; on older systems you may see empty boxes.
              The characters are still correct — they just need a font that knows
              how to draw them.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
