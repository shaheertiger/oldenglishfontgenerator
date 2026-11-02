import Link from "next/link";
import { TOOL_LINKS } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/old-english-tattoo-font", label: "Tattoo" },
  { href: "/old-english-alphabet", label: "Alphabet" },
  { href: "/gothic-font-generator", label: "Gothic" },
  { href: "/fraktur-generator", label: "Fraktur" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container-wide row">
        <Link href="/" className="logo" aria-label="Old English Font Generator home">
          <span aria-hidden="true">𝔒𝔈</span> Old English Fonts
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-brand">Old English Font Generator</span>
            <p>
              Blackletter, gothic and Fraktur text built from Unicode characters.
              Everything converts in your browser; nothing you type is sent to us.
            </p>
          </div>
          <div className="footer-col footer-tools">
            <h2 className="footer-h">Old English tools</h2>
            <ul>
              {TOOL_LINKS.map((t) => (
                <li key={t.href}><Link href={t.href}>{t.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h2 className="footer-h">Site</h2>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © oldenglishfontgenerator.com — free Old English and blackletter text tools.
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span className="sep" aria-hidden="true">›</span>
      <span className="current" aria-current="page">{current}</span>
    </nav>
  );
}
