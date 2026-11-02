import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageView, { pageMetadata } from "@/components/PageView";
import { CLUSTERS, getCluster } from "@/content/pages";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CLUSTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getCluster((await params).slug);
  return page ? pageMetadata(page) : {};
}

export default async function ClusterPage({ params }: { params: Promise<Params> }) {
  const page = getCluster((await params).slug);
  if (!page) notFound();
  return <PageView page={page} />;
}
