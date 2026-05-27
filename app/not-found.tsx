import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { PAGES } from "@/lib/pages";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>404 — Page not found</h1>
          <p>
            That URL doesn&rsquo;t exist (anymore). Try one of the font
            generators below, or head back to the{" "}
            <Link href="/">homepage</Link>.
          </p>
        </section>
        <section className="section">
          <div className="container">
            <h2>Popular generators</h2>
            <div className="features">
              {PAGES.slice(0, 9).map((p) => (
                <Link
                  key={p.slug}
                  href={`/font-generator/${p.slug}`}
                  className="feature"
                  style={{ textDecoration: "none" }}
                >
                  <h3>{p.h1}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
