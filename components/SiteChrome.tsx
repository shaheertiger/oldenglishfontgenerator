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

const NAV = [
  { href: "/", label: "Home" },
  { href: "/font-generator", label: "Font Generator" },
  { href: "/ascii-generator", label: "ASCII" },
  { href: "/image-to-ascii", label: "Image → ASCII" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container-wide row">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>Old English Fonts</Link>
        <nav className="nav">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
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
      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        {NAV.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </nav>
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
              <li><Link href="/sitemap"><Icon d={ICONS.book} /> Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More tools</h4>
            <ul>
              <li><Link href="/ascii-generator"><Icon d={ICONS.ascii} /> ASCII Generator</Link></li>
              <li><Link href="/image-to-ascii"><Icon d={ICONS.image} /> Image to ASCII</Link></li>
              <li><Link href="/font-generator/cursive"><Icon d={ICONS.bolt} /> Cursive Generator</Link></li>
              <li><Link href="/font-generator/bold"><Icon d={ICONS.bolt} /> Bold Generator</Link></li>
              <li><Link href="/font-generator/instagram"><Icon d={ICONS.bolt} /> Instagram Fonts</Link></li>
              <li><Link href="/font-generator/discord"><Icon d={ICONS.bolt} /> Discord Fonts</Link></li>
              <li><Link href="/font-generator/zalgo"><Icon d={ICONS.bolt} /> Zalgo Generator</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:hello@oldenglishfontgenerator.com"><Icon d={ICONS.mail} /> Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {year} oldenglishfontgenerator.com — Unicode font styling tool. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
