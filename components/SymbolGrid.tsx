"use client";

import { useState } from "react";

export default function SymbolGrid({ symbols }: { symbols: string[] }) {
  const [copied, setCopied] = useState<string | null>(null);
  const seen = new Set<string>();
  const unique = symbols.filter((s) => {
    if (seen.has(s)) return false;
    seen.add(s);
    return true;
  });

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied((c) => (c === value ? null : c)), 1200);
    } catch {}
  }

  return (
    <div className="sym-grid" role="list">
      {unique.map((s, i) => (
        <button
          key={`${s}-${i}`}
          className={`sym-tile ${copied === s ? "copied" : ""}`}
          onClick={() => copy(s)}
          aria-label={`Copy ${s}`}
          title={copied === s ? "Copied!" : "Click to copy"}
        >
          <span className="sym-glyph">{s}</span>
          {copied === s && <span className="sym-toast">Copied</span>}
        </button>
      ))}
    </div>
  );
}
