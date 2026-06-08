import Link from "next/link";
import { Fragment } from "react";

// Renders a plain string that may contain markdown-style links —
// [label](/internal/path) or [label](https://external) — as text with
// real anchors. Internal paths use next/link; everything else falls back
// to a normal <a>. Lets page copy in lib/pages.ts carry contextual
// internal links without embedding JSX.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

export default function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) {
      nodes.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    }
    const label = m[1];
    const href = m[2];
    if (href.startsWith("/")) {
      nodes.push(
        <Link key={key++} href={href}>
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a key={key++} href={href}>
          {label}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  }
  return <>{nodes}</>;
}
