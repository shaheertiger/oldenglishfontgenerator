// Typed JSON-LD builders. schema-dts types catch invalid properties at
// compile time, which is our local structured-data validation.
import type {
  BreadcrumbList,
  FAQPage,
  Organization,
  SoftwareApplication,
  WebSite,
  WithContext,
} from "schema-dts";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/site";

export { SITE_URL };

export const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

export const stripLinks = (s: string) =>
  s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");

export function appLd(name: string, path: string, description: string): WithContext<SoftwareApplication> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${abs(path)}#app`,
    name,
    url: abs(path),
    description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any (web browser)",
    isAccessibleForFree: true,
    inLanguage: "en",
    offers: { "@type": "Offer", price: 0, priceCurrency: "USD" },
    publisher: { "@id": `${SITE_URL}/#org` },
  };
}

export function faqLd(faq: { q: string; a: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: stripLinks(f.q),
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function orgLd(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icon.svg`,
    email: CONTACT_EMAIL,
  };
}

export function websiteLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#org` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?text={search_term_string}` },
      "query-input": "required name=search_term_string",
    } as never,
  };
}
