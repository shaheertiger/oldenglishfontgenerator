import type { Metadata } from "next";
import Link from "next/link";
import TextTransformClient from "@/components/TextTransformClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Cuneiform Translator – English to Cuneiform Copy & Paste",
  description:
    "Free cuneiform translator. Convert English into ancient Sumerian/Babylonian cuneiform symbols you can copy and paste. Real Unicode, runs in your browser.",
  keywords: [
    "cuneiform translator",
    "english to cuneiform",
    "cuneiform generator",
    "sumerian translator",
    "cuneiform copy and paste",
  ],
  alternates: { canonical: `${SITE_URL}/cuneiform-translator` },
  openGraph: {
    title: "Cuneiform Translator – English to Cuneiform",
    description: "Convert English into ancient cuneiform symbols you can copy and paste.",
    url: `${SITE_URL}/cuneiform-translator`,
    type: "website",
  },
};

export default function CuneiformPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Cuneiform Translator</h1>
            <p className="lead">
              Convert English into cuneiform — the wedge-shaped script of ancient
              Sumer and Babylon. The symbols are real Unicode characters you can
              copy and paste anywhere a cuneiform font is available.
            </p>
            <TextTransformClient kind="cuneiform" />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What is cuneiform?</h2>
            <p>
              Cuneiform is one of the earliest writing systems, pressed into clay
              tablets with a reed stylus over 5,000 years ago in Mesopotamia. Its
              name comes from the Latin <em>cuneus</em>, &ldquo;wedge,&rdquo; for
              the distinctive wedge-shaped strokes. It was used to write Sumerian,
              Akkadian, and several other ancient languages.
            </p>
            <h2 style={{ marginTop: 28 }}>How this tool works</h2>
            <p>
              Real cuneiform is a mix of syllabic and logographic signs rather
              than a simple alphabet, so a one-to-one English mapping is a
              stylized approximation, not a true transcription. This tool assigns
              each English letter a distinct cuneiform sign so your text takes on
              an authentic ancient appearance for designs, profiles, and themed
              projects.
            </p>
            <h2 style={{ marginTop: 28 }}>Display support</h2>
            <p>
              Cuneiform sits in its own Unicode block. Many modern systems render
              it, but support is less universal than everyday text — older
              devices may show boxes. If you need maximum compatibility, see the{" "}
              <Link href="/hieroglyphics-translator">hieroglyphics translator</Link>{" "}
              or the <Link href="/runic-translator">runic translator</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
