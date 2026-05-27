import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container row">
        <Link href="/" className="logo">Old English Font Generator</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/font-generator">Font Generator</Link>
          <Link href="/ascii-generator">ASCII</Link>
          <Link href="/image-to-ascii">Image → ASCII</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-brand">Old English Font Generator</span>
            <p>
              Free Unicode gothic, blackletter, and medieval font styles you
              can copy and paste anywhere — Instagram, TikTok, Discord, X,
              YouTube and more. Nothing is uploaded; everything is generated
              in your browser.
            </p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/font-generator">Font Generator</Link></li>
              <li><Link href="/ascii-generator">ASCII Generator</Link></li>
              <li><Link href="/image-to-ascii">Image to ASCII</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Popular tools</h4>
            <ul>
              <li><Link href="/font-generator/cursive">Cursive Generator</Link></li>
              <li><Link href="/font-generator/bold">Bold Generator</Link></li>
              <li><Link href="/font-generator/instagram">Instagram Fonts</Link></li>
              <li><Link href="/font-generator/discord">Discord Fonts</Link></li>
              <li><Link href="/font-generator/tiktok">TikTok Fonts</Link></li>
              <li><Link href="/font-generator/bubble">Bubble Generator</Link></li>
              <li><Link href="/font-generator/zalgo">Zalgo Generator</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More styles</h4>
            <ul>
              <li><Link href="/font-generator/italic">Italic Generator</Link></li>
              <li><Link href="/font-generator/strikethrough">Strikethrough</Link></li>
              <li><Link href="/font-generator/underline">Underline</Link></li>
              <li><Link href="/font-generator/small-caps">Small Caps</Link></li>
              <li><Link href="/font-generator/upside-down">Upside Down</Link></li>
              <li><Link href="/font-generator/reverse">Reverse Text</Link></li>
              <li><Link href="/font-generator/fancy">Fancy Fonts</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {year} oldenglishfontgenerator.com — Free in your browser. No accounts, no tracking, no nonsense.
        </div>
      </div>
    </footer>
  );
}
