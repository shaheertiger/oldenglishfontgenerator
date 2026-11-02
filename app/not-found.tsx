import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

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
          <h1>Page not found</h1>
          <p>
            That page doesn&rsquo;t exist. The{" "}
            <Link href="/">Old English font generator</Link> has every blackletter
            style in one place, and the tools are listed at the bottom of this page.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
