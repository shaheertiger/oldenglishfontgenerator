import type { Metadata } from "next";
import MorseClient from "./MorseClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Morse Code Translator – Text to Morse & Morse to Text",
  description:
    "Free Morse code translator. Convert text to Morse code and decode Morse back to text instantly. Copy and paste, runs entirely in your browser.",
  keywords: [
    "morse code translator",
    "text to morse",
    "morse to text",
    "morse code decoder",
    "morse code generator",
  ],
  alternates: { canonical: `${SITE_URL}/morse-code-translator` },
  openGraph: {
    title: "Morse Code Translator",
    description: "Convert text to Morse code and back. Free, instant, copy & paste.",
    url: `${SITE_URL}/morse-code-translator`,
    type: "website",
  },
};

export default function MorsePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Morse Code Translator</h1>
            <p className="lead">
              Convert plain text into Morse code, or decode dots and dashes back
              into readable text. Switch direction, type or paste, and copy the
              result. Everything runs in your browser.
            </p>
            <MorseClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How Morse code works</h2>
            <p>
              Morse code represents each letter and number as a sequence of
              short signals (dots, written <code>.</code>) and long signals
              (dashes, written <code>-</code>). For example, the letter{" "}
              <code>S</code> is <code>...</code> and <code>O</code> is{" "}
              <code>---</code>, which is why <code>SOS</code> —{" "}
              <code>... --- ...</code> — became the universal distress signal.
            </p>
            <h2 style={{ marginTop: 28 }}>Reading the output</h2>
            <p>
              This translator separates letters with a single space and words
              with a forward slash (<code>/</code>). When decoding, paste your
              Morse the same way: spaces between letters and a <code>/</code>{" "}
              between words. Unsupported characters are skipped so the rest of
              the message still comes through.
            </p>
            <h2 style={{ marginTop: 28 }}>What people use it for</h2>
            <p>
              Amateur radio operators, scouts, and puzzle makers still use Morse
              every day. It also shows up in escape rooms, geocaching clues, and
              games. Because the output is plain text, you can paste it into a
              message, a document, or a sound/light app that taps it out.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
