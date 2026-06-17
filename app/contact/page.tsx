import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const SITE_URL = "https://www.oldenglishfontgenerator.com";
const CONTACT_EMAIL = "hello@oldenglishfontgenerator.com";

export const metadata: Metadata = {
  title: "Contact – Old English Font Generator",
  description:
    "Get in touch with the Old English Font Generator team. Send feedback, report a bug, request a new tool, or ask about advertising and partnerships.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact – Old English Font Generator",
    description:
      "Send feedback, report a bug, request a new tool, or ask a question.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Old English Font Generator",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "Old English Font Generator",
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Contact</span>
          </div>

          <section className="hero">
            <h1>Contact Us</h1>
            <p className="lead">
              We would love to hear from you. Whether you have found a bug, want
              to suggest a new tool, or just have a question about how something
              works, the fastest way to reach us is by email.
            </p>
          </section>
        </div>

        <section className="section">
          <div className="container">
            <h2>Email</h2>
            <p>
              Send any message to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <strong>{CONTACT_EMAIL}</strong>
              </a>
              . We read every email and aim to reply within a few business days.
              To help us respond faster, please include as much detail as you can
              — for example, which tool you were using, the device and browser,
              and what you expected to happen.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>What you can write to us about</h2>
            <ul className="where-list">
              <li>
                <strong>Feedback &amp; ideas</strong> — tell us what is working,
                what is not, or a new generator you would like to see.
              </li>
              <li>
                <strong>Bug reports</strong> — if a tool produces unexpected
                output or will not load, let us know the details so we can fix it.
              </li>
              <li>
                <strong>Content &amp; corrections</strong> — spotted an error in a
                guide or reference chart? Point us to it.
              </li>
              <li>
                <strong>Advertising &amp; partnerships</strong> — for business and
                advertising inquiries, use the same address and mention "Business"
                in the subject line.
              </li>
              <li>
                <strong>Privacy requests</strong> — questions about your data are
                covered in our <Link href="/privacy">Privacy Policy</Link>, and you
                can email us with any specific request.
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Looking for something else?</h2>
            <p>
              You might find a quick answer in one of these places before
              reaching out:
            </p>
            <ul className="where-list">
              <li>
                <strong>How the tools work</strong> — see our{" "}
                <Link href="/about">About page</Link>.
              </li>
              <li>
                <strong>All tools</strong> — browse the full list on the{" "}
                <Link href="/tools">Tools page</Link>.
              </li>
              <li>
                <strong>Guides &amp; tips</strong> — read the{" "}
                <Link href="/blog">blog</Link>.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
    </>
  );
}
