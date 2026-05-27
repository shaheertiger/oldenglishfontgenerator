import type { Metadata } from "next";
import FavoritesClient from "./FavoritesClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Favorites – Your Saved Font Styles",
  description:
    "Every style you've starred in the generator, in one place. Type any sample text to preview them all and copy with one tap.",
  alternates: { canonical: `${SITE_URL}/favorites` },
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Favorites</h1>
            <p className="lead">
              Every style you&rsquo;ve starred, in one place. Type a sample
              to preview them, copy with one tap, or remove ones you&rsquo;re
              done with. Stored only in your browser — clearing your site
              data wipes the list.
            </p>
            <FavoritesClient />
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
