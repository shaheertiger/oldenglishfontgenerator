import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageView, { pageMetadata } from "@/components/PageView";
import { CLUSTERS, getCluster } from "@/content/pages";

// Two-segment pages from content/pages (symbols/<x>, emoticons/<x>, es/<x>).
// /font-generator/<x> and /different-fonts/<x> have their own routes. The old
// /old-english-alphabet/<letter> pages now 301 to /different-fonts/<letter>
// (lib/redirects.mjs); their per-letter copy lives on there.
type Params = { slug: string; letter: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CLUSTERS.filter((c) => c.slug.split("/").length === 2 && !c.slug.startsWith("font-generator/"))
    .map((c) => { const [slug, letter] = c.slug.split("/"); return { slug, letter }; });
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, letter } = await params;
  const page = getCluster(`${slug}/${letter}`);
  return page ? pageMetadata(page) : {};
}

export default async function NestedPage({ params }: { params: Promise<Params> }) {
  const { slug, letter } = await params;
  const page = getCluster(`${slug}/${letter}`);
  if (!page) notFound();
  return <PageView page={page} />;
}
