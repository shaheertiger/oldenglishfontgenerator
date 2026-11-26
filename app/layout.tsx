import type { Metadata, Viewport } from "next";
import DeferredGA from "@/components/DeferredGA";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-6QVJF7N2H3";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Old English Font Generator — Copy & Paste Blackletter Text",
    template: "%s",
  },
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <DeferredGA id={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
