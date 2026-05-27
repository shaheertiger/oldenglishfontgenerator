"use client";

import { useMemo, useState } from "react";
import { STYLES } from "@/lib/fonts";

const DEFAULT_TEXT = "Type something here";

export default function Home() {
  const [text, setText] = useState(DEFAULT_TEXT);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const source = text.length === 0 ? DEFAULT_TEXT : text;

  const results = useMemo(
    () => STYLES.map((s) => ({ ...s, output: s.transform(source) })),
    [source]
  );

  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1400);
    } catch {
      // clipboard unavailable — ignore
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container row">
          <div className="logo">Old English Font Generator</div>
          <nav className="nav">
            <a href="#generator">Generator</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container" id="generator">
          <h1>
            Turn plain text into <span className="fancy">Old English</span> fonts
          </h1>
          <p>
            Type anything below and instantly get blackletter, gothic, and medieval
            Unicode styles you can copy &amp; paste into Instagram, TikTok, Discord,
            Twitter, YouTube, and anywhere else text is allowed.
          </p>

          <div className="generator">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type something here"
              aria-label="Text to convert"
            />
            <div className="controls">
              <button className="btn ghost" onClick={() => setText("")}>
                Clear
              </button>
            </div>
          </div>

          <div className="results">
            {results.map((r) => (
              <div className="style-card" key={r.id}>
                <div className="left">
                  <div className="name">{r.name}</div>
                  <div className="preview">{r.output}</div>
                </div>
                <button
                  className={`copy-btn ${copiedId === r.id ? "copied" : ""}`}
                  onClick={() => copy(r.id, r.output)}
                >
                  {copiedId === r.id ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <h2>What is an Old English font?</h2>
            <p>
              &ldquo;Old English&rdquo; usually refers to a family of blackletter
              typefaces — dense, ornate scripts that scribes used across medieval
              Europe and that printers like Gutenberg later cast in metal. The
              tall, angular shapes feel formal, ceremonial, and a little
              mysterious, which is why they keep showing up on diplomas,
              newspaper mastheads, tattoos, and band logos centuries later.
            </p>

            <div className="features">
              <div className="feature">
                <h3>Instant preview</h3>
                <p>
                  Every style updates as you type — no buttons to press, no
                  waiting. Pick the one you like and copy it in a single tap.
                </p>
              </div>
              <div className="feature">
                <h3>Works everywhere</h3>
                <p>
                  These styles are real Unicode characters, not images. They
                  paste into bios, captions, usernames, and DMs on practically
                  any modern app.
                </p>
              </div>
              <div className="feature">
                <h3>No sign-up</h3>
                <p>
                  Free, browser-only, and private. Your text never leaves your
                  device — everything is generated locally.
                </p>
              </div>
              <div className="feature">
                <h3>Multiple variants</h3>
                <p>
                  Classic fraktur, bold blackletter, gothic cursive, outline,
                  small caps, and more — so you can match the mood you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="container">
            <h2>How to use the generator</h2>
            <p>
              1. Type or paste your text into the box above.<br />
              2. Browse the generated styles — they update live.<br />
              3. Hit <strong>Copy</strong> on the one you like and paste it wherever you need it.
            </p>
            <p>
              Tip: some apps render certain Unicode ranges differently. If a
              style looks like boxes, try a different variant — your audience&rsquo;s
              device may not have a font that covers those characters.
            </p>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container">
            <h2>Frequently asked questions</h2>

            <details>
              <summary>Is this actually a font?</summary>
              <p>
                Not quite. We don&rsquo;t change your device&rsquo;s font — we
                substitute each letter for a similar-looking Unicode character.
                The result <em>looks</em> like a different font but is just
                regular text, so it pastes anywhere.
              </p>
            </details>

            <details>
              <summary>Will it work on Instagram, TikTok, and Discord?</summary>
              <p>
                Yes. The blackletter and gothic styles work in bios, captions,
                comments, and usernames on most major platforms. A few apps
                strip unusual characters from usernames; in that case try the
                Small Caps or Heavy Sans variant.
              </p>
            </details>

            <details>
              <summary>Can I use this for tattoos or logos?</summary>
              <p>
                The preview here is great for mocking up an idea, but for a
                tattoo or printed logo you&rsquo;ll want a true vector font so
                the linework stays sharp at any size. Use the generator to pick
                a style, then ask your designer for a matching blackletter
                typeface.
              </p>
            </details>

            <details>
              <summary>Is it free?</summary>
              <p>
                Completely free. No account, no watermark, no limits.
              </p>
            </details>

            <details>
              <summary>Why do some characters look like empty boxes?</summary>
              <p>
                That means the device viewing the text doesn&rsquo;t have a
                font installed that covers those Unicode codepoints. Most
                modern phones and browsers cover the common math/alphanumeric
                ranges used here.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} oldenglishfontgenerator.com — Free
          blackletter &amp; gothic text styles.
        </div>
      </footer>
    </>
  );
}
