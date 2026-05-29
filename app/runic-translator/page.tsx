import type { Metadata } from "next";
import Link from "next/link";
import TextTransformClient from "@/components/TextTransformClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Runic Translator – English to Runes (Elder Futhark) Copy & Paste",
  description:
    "Free runic translator. Convert English into Elder Futhark / Anglo-Saxon runes you can copy and paste anywhere. Real Unicode runes, runs in your browser.",
  keywords: [
    "runic translator",
    "english to runes",
    "elder futhark translator",
    "anglo saxon runes",
    "norse rune translator",
  ],
  alternates: { canonical: `${SITE_URL}/runic-translator` },
  openGraph: {
    title: "Runic Translator – English to Elder Futhark Runes",
    description: "Convert English into runes you can copy and paste anywhere.",
    url: `${SITE_URL}/runic-translator`,
    type: "website",
  },
};

export default function RunicPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Runic Translator</h1>
            <p className="lead">
              Turn English into runes using the Elder Futhark alphabet — the
              runic script of the Norse and Anglo-Saxon world. The output is
              real Unicode, so you can copy and paste it into bios, usernames,
              tattoos, and game profiles.
            </p>
            <TextTransformClient kind="runes" />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>About the runes</h2>
            <p>
              The <strong>Elder Futhark</strong> is the oldest form of the runic
              alphabets, used across northern Europe from roughly the 2nd to 8th
              centuries before evolving into the Anglo-Saxon Futhorc and the
              Younger Futhark. Each rune stands for a sound, which is why this
              tool maps letters phonetically — the &ldquo;th&rdquo; in a word, for
              example, becomes the single thorn rune <strong>ᚦ</strong>.
            </p>
            <h2 style={{ marginTop: 28 }}>How accurate is it?</h2>
            <p>
              This is a letter-for-sound transliteration meant for decoration
              and fun, not a scholarly reconstruction — historical runic
              spelling didn&rsquo;t map one-to-one onto modern English. It looks
              authentic and copies cleanly, which is what you want for a design
              mockup or a username. Rune glyphs render on most modern devices;
              very old systems may show boxes.
            </p>
            <h2 style={{ marginTop: 28 }}>Pair it with a medieval look</h2>
            <p>
              Building something with an old-world theme? Try the{" "}
              <Link href="/medieval-translator">Medieval English translator</Link>{" "}
              for the words and the{" "}
              <Link href="/font-generator/old-english">Old English font generator</Link>{" "}
              for blackletter styling.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
