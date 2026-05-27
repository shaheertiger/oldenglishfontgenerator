import type { Metadata } from "next";
import ImageClient from "./ImageClient";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Image to ASCII – Photo to ASCII Converter",
  description:
    "Convert any photo into ASCII art in your browser. Adjustable width, invertable, copy-paste ready. Nothing is uploaded.",
  keywords: ["photo to ascii converter", "image to ascii", "ascii art from image"],
  alternates: { canonical: "https://www.oldenglishfontgenerator.com/image-to-ascii" },
  openGraph: {
    title: "Image to ASCII Converter",
    description: "Turn photos into ASCII art entirely in your browser.",
    url: "https://www.oldenglishfontgenerator.com/image-to-ascii",
    type: "website",
  },
};

export default function ImageToAsciiPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero container">
          <h1>Image to ASCII Converter</h1>
          <p>
            Upload a photo and turn it into ASCII art. Adjust the width,
            invert for dark backgrounds, and copy the result. Everything runs
            locally in your browser — your image is never uploaded.
          </p>
          <ImageClient />
        </section>

        <section className="section">
          <div className="container">
            <h2>Tips for cleaner ASCII art</h2>
            <p>
              High-contrast photos (silhouettes, portraits with strong
              lighting, logos on flat backgrounds) convert best. Busy
              backgrounds turn into noise — crop tight before uploading.
            </p>
            <h2>How conversion works</h2>
            <p>
              The image is resized to your chosen width, then each pixel is
              mapped to a character based on its brightness. Brighter pixels
              become lighter characters (or vice versa, if you invert).
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
