import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";
const CONTACT_EMAIL = "hello@oldenglishfontgenerator.com";
const LAST_UPDATED = "June 17, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy – Old English Font Generator",
  description:
    "How Old English Font Generator handles your data: what we collect, how cookies and third-party advertising (including Google AdSense) work, analytics, and your privacy choices.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: "Privacy Policy – Old English Font Generator",
    description:
      "What we collect, how cookies and advertising work, and your privacy choices.",
    url: `${SITE_URL}/privacy`,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Privacy Policy</span>
          </div>

          <section className="hero">
            <h1>Privacy Policy</h1>
            <p className="lead">
              This Privacy Policy explains what information Old English Font
              Generator ("we", "us", or "the site") collects when you use{" "}
              oldenglishfontgenerator.com, how that information is used, and the
              choices you have. We keep this short and plain on purpose.
            </p>
            <p><small>Last updated: {LAST_UPDATED}</small></p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>The short version</h2>
            <p>
              The text you type into our tools is processed in your browser to
              generate styled output. We do not require an account, and we do not
              store the content you type on our servers. The site is free and
              supported by advertising, which means third-party partners such as
              Google may use cookies to show relevant ads, as described below.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Information we collect</h2>
            <ul className="where-list">
              <li>
                <strong>Text you generate</strong> — the words you type into a
                generator are converted within your browser. This content is not
                transmitted to us for storage and is not saved to your account
                (there are no accounts). Some tools may save preferences, such as
                favorites, locally in your browser.
              </li>
              <li>
                <strong>Usage and analytics data</strong> — like most websites, we
                collect anonymous, aggregated usage information (such as which
                pages are visited and general device or browser type) to
                understand how the site is used and to improve it.
              </li>
              <li>
                <strong>Information you send us</strong> — if you email us, we
                receive your email address and the contents of your message so we
                can reply.
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Cookies and local storage</h2>
            <p>
              Cookies are small files stored on your device. We and our partners
              use cookies and similar technologies (including your browser&apos;s
              local storage) for a few purposes: to remember preferences like
              saved favorites, to measure traffic with analytics, and — through
              advertising partners — to help display relevant ads.
            </p>
            <p>
              You can control or delete cookies through your browser settings, and
              you can clear local storage at any time. Disabling cookies will not
              stop the core generators from working, but some conveniences (such
              as remembering favorites) may no longer persist.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Advertising and Google AdSense</h2>
            <p>
              This site uses third-party advertising to remain free, including
              Google AdSense. Third-party vendors, including Google, use cookies
              to serve ads based on a user&apos;s prior visits to this and other
              websites.
            </p>
            <ul className="where-list">
              <li>
                Google&apos;s use of advertising cookies enables it and its
                partners to serve ads to you based on your visit to this site
                and/or other sites on the internet.
              </li>
              <li>
                You may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Ads Settings
                </a>
                .
              </li>
              <li>
                You can also opt out of a third-party vendor&apos;s use of cookies
                for personalized advertising by visiting{" "}
                <a
                  href="https://www.aboutads.info/choices/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.aboutads.info
                </a>
                .
              </li>
              <li>
                For more on how Google uses data when you use our partners&apos;
                sites or apps, see{" "}
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s policy
                </a>
                .
              </li>
            </ul>
            <p>
              Third-party ad networks may also use cookies to track your activity
              across websites to provide measurement services and target ads. We
              do not control these third-party cookies and recommend reviewing the
              privacy policies of any advertising partners for more detail.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Analytics</h2>
            <p>
              We use privacy-conscious analytics to understand aggregate traffic
              patterns — for example, which tools are most popular and where the
              site can be improved. This data is collected in an anonymized,
              aggregated form and is not used to personally identify you.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Your rights and choices</h2>
            <p>
              Depending on where you live, you may have rights regarding your
              personal data, including the right to access, correct, or delete it,
              and the right to object to certain processing. Because we do not
              maintain user accounts or store the text you generate, most data is
              either anonymous or held by third-party services under their own
              policies. For any privacy request, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will
              do our best to assist.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Children&apos;s privacy</h2>
            <p>
              This site is intended for a general audience and is not directed to
              children under the age of 13. We do not knowingly collect personal
              information from children. If you believe a child has provided us
              with personal information, please contact us so we can remove it.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &quot;Last updated&quot; date at the top of this
              page. Significant changes will be reflected here, so we encourage
              you to review it periodically.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Contact us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, email{" "}
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
