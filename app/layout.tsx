import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Old English Font Generator – Blackletter & Gothic Text Styles",
  description:
    "Convert plain text into Old English, blackletter, and gothic Unicode fonts you can copy and paste anywhere — Instagram, TikTok, Discord, Twitter and more.",
  keywords: [
    "old english font",
    "blackletter font",
    "gothic font generator",
    "old english text generator",
    "copy paste fonts",
  ],
  openGraph: {
    title: "Old English Font Generator",
    description:
      "Turn any text into Old English, blackletter and gothic Unicode styles. Copy & paste ready.",
    type: "website",
    url: "https://oldenglishfontgenerator.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
