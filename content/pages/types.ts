// Content model shared by the homepage and every cluster page.
// Copy lives in one file per page (content/pages/<slug>.ts) so the sitemap
// can use each file's git commit date as that page's real lastmod.

export type Block =
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][]; glyphCols?: number[] } }
  | { cards: { h: string; p: string }[] }
  | { widget: Widget };

export type Widget =
  | "alphabet-compact"
  | "alphabet-full"
  | "letters"
  | "numbers"
  | "tattoo-preview"
  | "image-export"
  | "symbols"
  | "letter-index";

export type Section = { h2: string; blocks: Block[] };

export type PageContent = {
  /** URL path without leading slash; "" for the homepage. */
  slug: string;
  /** <title>, ≤ 60 characters. */
  title: string;
  /** Meta description, ≤ 155 characters, keyword first. */
  description: string;
  h1: string;
  /** Breadcrumb label. */
  crumb: string;
  /** First paragraph; may contain [label](/path) links. */
  intro: string;
  tool: {
    styles: string[];
    sample: string;
    placeholder?: string;
    presets?: string[];
    limit?: { label: string; max: number };
  };
  /** Heading above the tool list. */
  stylesHeading: string;
  /** Three how-to steps: [title, text]. */
  howTo: { heading: string; steps: [string, string][] };
  sections: Section[];
  /** "How we built this style" note (Unicode blocks used). */
  built?: string;
  related: { heading: string; hrefs: string[] };
  faq: { q: string; a: string }[];
};
