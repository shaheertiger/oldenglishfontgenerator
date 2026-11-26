import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageView, { pageMetadata } from "@/components/PageView";
import { CLUSTERS, getCluster } from "@/content/pages";

// Three-segment pages from content/pages (es/font-generator/<x>, es/cool-symbols/<x>).
type Params = { slug: string; letter: string; sub: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CLUSTERS.filter((c) => c.slug.split("/").length === 3)
    .map((c) => { const [slug, letter, sub] = c.slug.split("/"); return { slug, letter, sub }; });
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, letter, sub } = await params;
  const page = getCluster(`${slug}/${letter}/${sub}`);
  return page ? pageMetadata(page) : {};
}

export default async function DeepPage({ params }: { params: Promise<Params> }) {
  const { slug, letter, sub } = await params;
  const page = getCluster(`${slug}/${letter}/${sub}`);
  if (!page) notFound();
  return <PageView page={page} />;
}
