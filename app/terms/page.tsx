import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";
const CONTACT_EMAIL = "hello@oldenglishfontgenerator.com";
const LAST_UPDATED = "June 17, 2026";

export const metadata: Metadata = {
  title: "Terms of Service – Old English Font Generator",
  description:
    "The terms that govern your use of Old English Font Generator: acceptable use, intellectual property, disclaimers, and limitations of liability for our free text tools.",
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: "Terms of Service – Old English Font Generator",
    description:
      "The terms governing your use of our free, browser-based text tools.",
    url: `${SITE_URL}/terms`,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${SITE_URL}/terms` },
  ],
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Terms of Service</span>
          </div>

          <section className="hero">
            <h1>Terms of Service</h1>
            <p className="lead">
              These Terms of Service ("Terms") govern your use of
              oldenglishfontgenerator.com (the "site") and the free text tools we
              provide. By using the site, you agree to these Terms. If you do not
              agree, please do not use the site.
            </p>
            <p><small>Last updated: {LAST_UPDATED}</small></p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Use of the site</h2>
            <p>
              Old English Font Generator provides free, browser-based tools that
              convert text into Unicode styles and perform related text
              transformations. You may use these tools for personal and
              commercial projects, such as social media profiles, captions,
              usernames, design mockups, and creative work.
            </p>
            <p>
              You agree not to misuse the site. In particular, you agree not to:
            </p>
            <ul className="where-list">
              <li>
                <strong>Disrupt the service</strong> — including attempting to
                overload, hack, scrape at scale, or otherwise interfere with the
                site or its infrastructure.
              </li>
              <li>
                <strong>Use it for unlawful or harmful purposes</strong> —
                including harassment, impersonation, fraud, or generating content
                that violates the law or the rights of others.
              </li>
              <li>
                <strong>Misrepresent the output</strong> — the styled text is
                produced using standard Unicode characters and should not be used
                to deceive or evade legitimate content systems.
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Your content</h2>
            <p>
              The text you enter into our tools belongs to you. It is processed in
              your browser to produce the styled output, and we do not claim any
              ownership over what you create. You are responsible for the content
              you generate and how you use it.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Intellectual property</h2>
            <p>
              The Unicode characters our tools output are part of the public
              Unicode standard and are not owned by us. However, the site itself —
              including its design, original written guides, code, and branding —
              is our property or used under license, and may not be copied or
              redistributed without permission. The names of third-party platforms
              (such as Instagram, TikTok, or Discord) are trademarks of their
              respective owners and are referenced only for descriptive purposes;
              this site is not affiliated with or endorsed by them.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Advertising</h2>
            <p>
              The site is free and supported by advertising, including Google
              AdSense. Ads and any links within them are the responsibility of the
              respective advertisers. For details on how advertising and cookies
              work, please review our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Disclaimer of warranties</h2>
            <p>
              The site and its tools are provided on an "as is" and "as available"
              basis, without warranties of any kind, whether express or implied.
              While we work to keep the tools accurate and compatible across apps,
              we do not guarantee that generated text will display correctly on
              every device or platform, that the site will be uninterrupted or
              error-free, or that it will meet your specific requirements.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Old English Font Generator
              and its operators will not be liable for any indirect, incidental,
              special, or consequential damages arising out of or related to your
              use of, or inability to use, the site or its tools. Your use of the
              site is at your own risk.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Third-party links</h2>
            <p>
              The site may contain links to third-party websites or services that
              we do not control. We are not responsible for the content, policies,
              or practices of any third-party sites, and including a link does not
              imply endorsement.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. When we do, we will
              revise the "Last updated" date above. Your continued use of the site
              after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Contact</h2>
            <p>
              If you have questions about these Terms, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or visit our{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
