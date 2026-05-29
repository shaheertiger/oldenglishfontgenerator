import type { Metadata } from "next";
import PigLatinClient from "./PigLatinClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Pig Latin Translator – English to Pig Latin & Back",
  description:
    "Free Pig Latin translator. Convert English to Pig Latin and translate Pig Latin back to English instantly. Copy and paste, runs in your browser.",
  keywords: [
    "pig latin translator",
    "pig latin to english",
    "english to pig latin",
    "pig latin generator",
  ],
  alternates: { canonical: `${SITE_URL}/pig-latin-translator` },
  openGraph: {
    title: "Pig Latin Translator",
    description: "Translate English to Pig Latin and back. Free, instant, copy & paste.",
    url: `${SITE_URL}/pig-latin-translator`,
    type: "website",
  },
};

export default function PigLatinPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Pig Latin Translator</h1>
            <p className="lead">
              Convert English into Pig Latin, or translate Pig Latin back into
              readable English. Type in the box, switch direction, and copy the
              result. Everything happens in your browser.
            </p>
            <PigLatinClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>What is Pig Latin?</h2>
            <p>
              Pig Latin is a playful language game built on a couple of simple
              rules. For a word that starts with a consonant, you move the
              leading consonant cluster to the end and add &ldquo;ay&rdquo; —
              so <em>pig</em> becomes <em>igpay</em> and <em>latin</em> becomes{" "}
              <em>atinlay</em>. For a word that starts with a vowel, you simply
              add &ldquo;way&rdquo; to the end, so <em>egg</em> becomes{" "}
              <em>eggway</em>.
            </p>
            <h2 style={{ marginTop: 28 }}>How the translator works</h2>
            <p>
              The encoder applies those rules to every word while leaving your
              spaces, punctuation, and capitalization intact. The decoder
              reverses the most common patterns: it strips the
              &ldquo;way&rdquo;/&ldquo;yay&rdquo; ending for vowel-initial words
              and moves a trailing consonant cluster back to the front for the
              rest. Because Pig Latin can be ambiguous, decoding is a best-effort
              guess and works best on text this tool encoded.
            </p>
            <h2 style={{ marginTop: 28 }}>Why people use it</h2>
            <p>
              Kids learn it as a secret language on the playground, writers use
              it for jokes and Easter eggs, and teachers use it to make phonics
              and syllable structure fun. It is also a quick way to obfuscate a
              short message without any real encryption.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
