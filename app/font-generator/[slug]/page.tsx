import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageView, { pageMetadata } from "@/components/PageView";
import { CLUSTERS, getCluster } from "@/content/pages";

// Restored /font-generator/<x> URLs. These ranked in Bing before the
// November 2026 rebuild moved them; every other /font-generator/ path is
// redirected or 410 (lib/redirects.mjs).
type Params = { slug: string };

const PREFIX = "font-generator/";

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CLUSTERS.filter((c) => c.slug.startsWith(PREFIX)).map((c) => ({ slug: c.slug.slice(PREFIX.length) }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getCluster(PREFIX + (await params).slug);
  return page ? pageMetadata(page) : {};
}

export default async function FontGeneratorPage({ params }: { params: Promise<Params> }) {
  const page = getCluster(PREFIX + (await params).slug);
  if (!page) notFound();
  return <PageView page={page} />;
}
