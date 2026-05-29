import type { Metadata } from "next";
import TextTransformClient from "@/components/TextTransformClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Pirate Translator – English to Pirate Speak (Talk Like a Pirate)",
  description:
    "Free pirate translator. Turn normal English into pirate speak — ahoy, matey, ye, booty, avast. Copy and paste, runs entirely in your browser.",
  keywords: [
    "pirate translator",
    "english to pirate",
    "pirate speak",
    "talk like a pirate",
    "pirate language translator",
  ],
  alternates: { canonical: `${SITE_URL}/pirate-translator` },
  openGraph: {
    title: "Pirate Translator – English to Pirate Speak",
    description: "Turn normal English into pirate speak. Ahoy, matey! Copy and paste.",
    url: `${SITE_URL}/pirate-translator`,
    type: "website",
  },
};

export default function PiratePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Pirate Translator</h1>
            <p className="lead">
              Turn everyday English into salty pirate speak — <em>ahoy</em>,{" "}
              <em>matey</em>, <em>ye</em>, <em>booty</em>, <em>avast</em>. Type a
              sentence and copy your buccaneer version. Perfect for Talk Like a
              Pirate Day, party invites, and themed captions.
            </p>
            <TextTransformClient kind="pirate" />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How it works</h2>
            <p>
              The translator swaps common words for their pirate equivalents —{" "}
              <em>hello</em> becomes <em>ahoy</em>, <em>you</em> becomes{" "}
              <em>ye</em>, <em>your</em> becomes <em>yer</em>, <em>friend</em>{" "}
              becomes <em>matey</em>, and <em>treasure</em> becomes <em>booty</em>.
              Capitalization is preserved, and words it doesn&rsquo;t recognize
              are left alone so your sentence still makes sense.
            </p>
            <h2 style={{ marginTop: 28 }}>Where pirate speak comes from</h2>
            <p>
              The exaggerated &ldquo;arr, matey&rdquo; pirate accent owes more to
              Hollywood than to history — much of it traces back to actor Robert
              Newton&rsquo;s West Country performance in <em>Treasure Island</em>.
              It stuck, and now it&rsquo;s the go-to voice for pirate-themed fun,
              especially every September 19th on International Talk Like a Pirate
              Day.
            </p>
            <h2 style={{ marginTop: 28 }}>Good uses</h2>
            <p>
              Drop it into party invitations, social posts, game character bios,
              classroom activities, or a cheeky message to a friend. Everything
              runs in your browser — no text is uploaded anywhere.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
