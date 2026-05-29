import type { Metadata } from "next";
import MedievalClient from "./MedievalClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import Link from "next/link";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Medieval Translator – Modern English to Ye Olde / Old English",
  description:
    "Free medieval English translator. Turn modern English into ye olde, archaic, Shakespearean-style text — thee, thou, hath, prithee. Copy and paste.",
  keywords: [
    "medieval translator",
    "modern english to medieval",
    "old english translator",
    "shakespearean translator",
    "ye olde english",
  ],
  alternates: { canonical: `${SITE_URL}/medieval-translator` },
  openGraph: {
    title: "Medieval English Translator",
    description: "Turn modern English into ye olde, archaic, Shakespearean-style text.",
    url: `${SITE_URL}/medieval-translator`,
    type: "website",
  },
};

export default function MedievalPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Medieval English Translator</h1>
            <p className="lead">
              Turn everyday modern English into archaic &ldquo;ye olde&rdquo;
              English — thee, thou, hath, prithee, and more. Type a sentence and
              copy the medieval-flavored version. It pairs perfectly with our{" "}
              <Link href="/font-generator/old-english">Old English font generator</Link>.
            </p>
            <MedievalClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How the translator works</h2>
            <p>
              The tool swaps modern words for their archaic and Early Modern
              English counterparts — <em>you</em> becomes <em>thou</em>,{" "}
              <em>your</em> becomes <em>thy</em>, <em>have</em> becomes{" "}
              <em>hath</em>, <em>please</em> becomes <em>prithee</em>, and{" "}
              <em>hello</em> becomes <em>well met</em>. Capitalization is kept,
              and any word it doesn&rsquo;t recognize is left untouched so your
              sentence still reads.
            </p>
            <h2 style={{ marginTop: 28 }}>Authentic, or just for fun?</h2>
            <p>
              This is a stylized, for-fun translator rather than a scholarly one.
              Real Old English (the language of <em>Beowulf</em>) and Early
              Modern English (the language of Shakespeare) are different stages
              of the language with their own grammar. The substitutions here
              capture the <em>flavor</em> of medieval and Elizabethan speech —
              great for D&amp;D campaigns, fantasy writing, renaissance-faire
              captions, and themed invitations.
            </p>
            <h2 style={{ marginTop: 28 }}>Make it look the part</h2>
            <p>
              For the full effect, run your translated text through the{" "}
              <Link href="/font-generator/old-english">Old English (blackletter) font generator</Link>{" "}
              so the words <em>look</em> as medieval as they read. You can also
              try the <Link href="/font-generator/gothic">gothic</Link> and{" "}
              <Link href="/font-generator/calligraphy">calligraphy</Link> styles.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
