import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.oldenglishfontgenerator.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Old English Font Generator – Blackletter & Gothic Text Styles",
    template: "%s | Old English Font Generator",
  },
  description:
    "Convert plain text into Old English, blackletter, and gothic Unicode fonts you can copy and paste anywhere — Instagram, TikTok, Discord, Twitter and more.",
  applicationName: "Old English Font Generator",
  authors: [{ name: "Old English Font Generator" }],
  keywords: [
    "old english font",
    "blackletter font",
    "gothic font generator",
    "old english text generator",
    "copy paste fonts",
    "cursive font generator",
    "font generator",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    siteName: "Old English Font Generator",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Old English Font Generator",
    description:
      "Free Unicode font generator: Old English, blackletter, cursive, bold, bubble, glitch and more.",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0d0a",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Old English Font Generator",
      description:
        "Free Unicode font generator for blackletter, gothic, cursive and other copy-paste text styles.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/font-generator?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Old English Font Generator",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
