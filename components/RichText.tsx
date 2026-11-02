import Link from "next/link";
import { Fragment } from "react";

// Renders a string that may contain [label](/path) links and **bold** spans.
const TOKEN_RE = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

export function stripMarkdown(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1").replace(/\*\*([^*]+)\*\*/g, "$1");
}

export default function RichText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(text)) !== null) {
    if (m.index > last) nodes.push(<Fragment key={key++}>{text.slice(last, m.index)}</Fragment>);
    if (m[3]) {
      nodes.push(<strong key={key++}>{m[3]}</strong>);
    } else if (m[2].startsWith("/")) {
      nodes.push(<Link key={key++} href={m[2]}>{m[1]}</Link>);
    } else {
      nodes.push(<a key={key++} href={m[2]}>{m[1]}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(<Fragment key={key++}>{text.slice(last)}</Fragment>);
  return <>{nodes}</>;
}
