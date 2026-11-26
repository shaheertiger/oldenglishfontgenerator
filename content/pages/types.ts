// Content model shared by the homepage and every cluster page.
// Copy lives in one file per page (content/pages/<slug>.ts) so the sitemap
// can use each file's git commit date as that page's real lastmod.

export type Block =
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][]; glyphCols?: number[] } }
  | { cards: { h: string; p: string }[] }
  | { widget: Widget }
  /** Full tap-to-copy character chart: one group per style, every cell a copy button. */
  | { chart: { styles: string[]; sets: ChartSet[] } };

export type ChartSet = "upper" | "lower" | "digits" | "punct";

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
  /** URL path without leading slash; "" for the homepage. May contain one "/" (font-generator/<x>). */
  slug: string;
  /** Source file name in content/pages/ when it differs from the slug. */
  file?: string;
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
  /** Page language when not English (the Spanish pages under /es). */
  lang?: "es";
  /** Extra words masked by the overlap check (the page's own style/tool names). */
  mask?: string[];
};
