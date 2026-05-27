import type { Metadata } from "next";
import UsernameClient from "./UsernameClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Username Generator – Gothic & Old English Style Handles",
  description:
    "Generate random gothic, blackletter, and Old English style usernames for Instagram, TikTok, Discord, Steam, and gaming profiles. Free and instant.",
  keywords: ["username generator", "gothic username", "old english username", "discord name generator"],
  alternates: { canonical: `${SITE_URL}/username-generator` },
  openGraph: {
    title: "Username Generator – Gothic Style Handles",
    description: "Random Old English and gothic usernames, copy and paste ready.",
    url: `${SITE_URL}/username-generator`,
    type: "website",
  },
};

export default function UsernamePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Username Generator</h1>
            <p className="lead">
              Random gothic, blackletter, and Old English style usernames for
              Discord, Instagram, TikTok, Steam, and gaming profiles. Hit
              Regenerate until one feels right — tap any row to copy.
            </p>
            <UsernameClient />
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>How the username generator works</h2>
            <p>
              Each handle is a randomly combined adjective + noun (occasionally with
              a numeric or symbol suffix), then run through one of 11 Unicode
              style transforms — fraktur, blackletter, script, small caps,
              double-struck, and a few composed variants. Nothing is sent to a
              server; the wordlists and styling happen in your browser.
            </p>
            <h2 style={{ marginTop: 28 }}>Where these handles work</h2>
            <p>
              Bios and display names on Instagram, TikTok, X, YouTube, Discord,
              and most chat apps accept the full Unicode range. Username fields
              are stricter — Instagram, TikTok, and Steam filter some exotic
              characters. If a handle won&rsquo;t save, regenerate or pick a
              less decorative style.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
