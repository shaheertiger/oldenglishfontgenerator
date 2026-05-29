"use client";

import Link from "next/link";
import { useState } from "react";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  home: "M3 12 12 3l9 9M5 10v10h14V10",
  generator: "M14.7 6.3a4 4 0 0 1 5.6 5.6L9 23.2 2.8 24l.8-6.2L14.7 6.3z",
  ascii: "M4 17 10 11 4 5 M12 19h8",
  image: "M3 5h18v14H3zM7 10a2 2 0 1 0 0-.1ZM21 16l-5-5-9 9",
  book: "M2 4h7a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2zM22 4h-7a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h8z",
  mail: "M3 5h18v14H3zM3 5l9 8 9-8",
  bolt: "M13 2 4.5 14h6L9 22l9-13h-6L13 2z",
};

const MOBILE_GENERATORS: { label: string; slug: string }[] = [
  { label: "Bold", slug: "bold" },
  { label: "Cursive", slug: "cursive" },
  { label: "Fancy", slug: "fancy" },
  { label: "Italic", slug: "italic" },
  { label: "Cool", slug: "cool" },
  { label: "Stylish", slug: "stylish" },
  { label: "Glitch", slug: "glitch" },
  { label: "Weird", slug: "weird" },
  { label: "Zalgo", slug: "zalgo" },
  { label: "Cursed", slug: "cursed" },
  { label: "Creepy", slug: "creepy" },
  { label: "Big", slug: "big" },
  { label: "Small", slug: "small" },
  { label: "Small Caps", slug: "small-caps" },
  { label: "Upside Down", slug: "upside-down" },
  { label: "Reverse", slug: "reverse" },
  { label: "Bubble", slug: "bubble" },
  { label: "Strikethrough", slug: "strikethrough" },
  { label: "Underline", slug: "underline" },
  { label: "Instagram", slug: "instagram" },
  { label: "IG Font", slug: "ig-font" },
  { label: "TikTok", slug: "tiktok" },
  { label: "Twitter", slug: "twitter" },
  { label: "Facebook", slug: "facebook" },
  { label: "Discord", slug: "discord" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [genOpen, setGenOpen] = useState(true);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container-wide row">
        <Link href="/" className="logo" onClick={close}>Old English Fonts</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/font-generator">Font Generator</Link>
          <Link href="/ascii-generator">ASCII</Link>
          <Link href="/image-to-ascii">Image → ASCII</Link>
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="mobile-nav" role="dialog" aria-label="Site menu">
          <button
            className="mn-group"
            onClick={() => setGenOpen((v) => !v)}
            aria-expanded={genOpen}
          >
            <span>Font Generators</span>
            <span className={`mn-caret ${genOpen ? "up" : ""}`}>▾</span>
          </button>
          {genOpen && (
            <div className="mn-grid">
              {MOBILE_GENERATORS.map((g) => (
                <Link
                  key={g.slug}
                  href={`/font-generator/${g.slug}`}
                  onClick={close}
                  className="mn-item"
                >
                  {g.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/font-generator" onClick={close} className="mn-top">
            All Font Generators
          </Link>
          <Link href="/preppy" onClick={close} className="mn-top">
            Preppy Fonts
          </Link>
          <Link href="/coquette" onClick={close} className="mn-top">
            Coquette Fonts
          </Link>
          <Link href="/different-fonts" onClick={close} className="mn-top">
            Different Fonts (A–Z)
          </Link>
          <Link href="/symbols" onClick={close} className="mn-top">
            Cool Symbols
          </Link>
          <Link href="/auto-font-styler" onClick={close} className="mn-top">
            Auto Font Styler
          </Link>
          <Link href="/font-mixer" onClick={close} className="mn-top">
            Font Mixer
          </Link>
          <Link href="/username-generator" onClick={close} className="mn-top">
            Username Generator
          </Link>
          <Link href="/name-generator" onClick={close} className="mn-top">
            Name Generator
          </Link>
          <Link href="/emoticons" onClick={close} className="mn-top">
            Emoticons (Kaomoji)
          </Link>
          <Link href="/name-generator" onClick={close} className="mn-top">
            Name Generator
          </Link>
          <Link href="/emoticons" onClick={close} className="mn-top">
            Emoticons (Kaomoji)
          </Link>
          <Link href="/headcanon-generator" onClick={close} className="mn-top">
            Headcanon Generator
          </Link>
          <Link href="/story-generator" onClick={close} className="mn-top">
            Story Generator
          </Link>
          <Link href="/uuid-generator" onClick={close} className="mn-top">
            UUID Generator
          </Link>
          <Link href="/ascii-generator" onClick={close} className="mn-top">
            ASCII Art
          </Link>
          <Link href="/image-to-ascii" onClick={close} className="mn-top">
            Image to ASCII
          </Link>
          <Link href="/case-converter" onClick={close} className="mn-top">
            Case Converter
          </Link>
          <Link href="/pig-latin-translator" onClick={close} className="mn-top">
            Pig Latin Translator
          </Link>
          <Link href="/subscript-generator" onClick={close} className="mn-top">
            Subscript &amp; Superscript
          </Link>
          <Link href="/binary-code-translator" onClick={close} className="mn-top">
            Binary Code Translator
          </Link>
          <Link href="/stacked-text-generator" onClick={close} className="mn-top">
            Stacked Text Generator
          </Link>
          <Link href="/invisible-text-generator" onClick={close} className="mn-top">
            Invisible Text Generator
          </Link>
          <Link href="/morse-code-translator" onClick={close} className="mn-top">
            Morse Code Translator
          </Link>
          <Link href="/medieval-translator" onClick={close} className="mn-top">
            Medieval English Translator
          </Link>
          <Link href="/favorites" onClick={close} className="mn-top">
            ★ Favorites
          </Link>
          <Link href="/blog" onClick={close} className="mn-top">
            Blog
          </Link>
          <Link href="/sitemap" onClick={close} className="mn-top">
            Sitemap
          </Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-brand">Old English Fonts</span>
            <p>
              Free Unicode gothic, blackletter, and medieval font styles you
              can copy and paste anywhere. Everything runs in your browser —
              no accounts, no uploads, no tracking.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/"><Icon d={ICONS.home} /> Home</Link></li>
              <li><Link href="/font-generator"><Icon d={ICONS.generator} /> Font Generator</Link></li>
              <li><Link href="/blog"><Icon d={ICONS.book} /> Blog</Link></li>
              <li><Link href="/sitemap"><Icon d={ICONS.book} /> Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More tools</h4>
            <ul>
              <li><Link href="/auto-font-styler"><Icon d={ICONS.bolt} /> Auto Font Styler</Link></li>
              <li><Link href="/font-mixer"><Icon d={ICONS.bolt} /> Font Mixer</Link></li>
              <li><Link href="/username-generator"><Icon d={ICONS.generator} /> Username Generator</Link></li>
              <li><Link href="/name-generator"><Icon d={ICONS.generator} /> Name Generator</Link></li>
              <li><Link href="/emoticons"><Icon d={ICONS.generator} /> Emoticons (Kaomoji)</Link></li>
              <li><Link href="/name-generator"><Icon d={ICONS.generator} /> Name Generator</Link></li>
              <li><Link href="/emoticons"><Icon d={ICONS.book} /> Emoticons (Kaomoji)</Link></li>
              <li><Link href="/headcanon-generator"><Icon d={ICONS.book} /> Headcanon Generator</Link></li>
              <li><Link href="/story-generator"><Icon d={ICONS.book} /> Story Generator</Link></li>
              <li><Link href="/uuid-generator"><Icon d={ICONS.bolt} /> UUID Generator</Link></li>
              <li><Link href="/ascii-generator"><Icon d={ICONS.ascii} /> ASCII Generator</Link></li>
              <li><Link href="/image-to-ascii"><Icon d={ICONS.image} /> Image to ASCII</Link></li>
              <li><Link href="/case-converter"><Icon d={ICONS.generator} /> Case Converter</Link></li>
              <li><Link href="/pig-latin-translator"><Icon d={ICONS.generator} /> Pig Latin Translator</Link></li>
              <li><Link href="/subscript-generator"><Icon d={ICONS.generator} /> Subscript &amp; Superscript</Link></li>
              <li><Link href="/binary-code-translator"><Icon d={ICONS.bolt} /> Binary Code Translator</Link></li>
              <li><Link href="/stacked-text-generator"><Icon d={ICONS.generator} /> Stacked Text Generator</Link></li>
              <li><Link href="/invisible-text-generator"><Icon d={ICONS.bolt} /> Invisible Text Generator</Link></li>
              <li><Link href="/morse-code-translator"><Icon d={ICONS.bolt} /> Morse Code Translator</Link></li>
              <li><Link href="/medieval-translator"><Icon d={ICONS.book} /> Medieval English Translator</Link></li>
              <li><Link href="/favorites"><Icon d={ICONS.bolt} /> ★ Favorites</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Aesthetic &amp; reference</h4>
            <ul>
              <li><Link href="/preppy"><Icon d={ICONS.generator} /> Preppy Fonts</Link></li>
              <li><Link href="/coquette"><Icon d={ICONS.generator} /> Coquette Fonts</Link></li>
              <li><Link href="/different-fonts"><Icon d={ICONS.generator} /> Different Fonts (A–Z)</Link></li>
              <li><Link href="/symbols"><Icon d={ICONS.bolt} /> Cool Symbols</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@oldenglishfontgenerator.com"><Icon d={ICONS.mail} /> Contact</a></li>
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <div className="lang-switcher">
            <Link href="/" className="active">EN</Link>
            <Link href="/es">ES</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © {year} oldenglishfontgenerator.com — Unicode font styling tool. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
