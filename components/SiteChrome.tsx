import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container row">
        <Link href="/" className="logo">Old English Font Generator</Link>
        <nav className="nav">
          <Link href="/font-generator">Font Generator</Link>
          <Link href="/ascii-generator">ASCII</Link>
          <Link href="/image-to-ascii">Image → ASCII</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        © {new Date().getFullYear()} oldenglishfontgenerator.com — Free
        Unicode font &amp; ASCII tools.
      </div>
    </footer>
  );
}
