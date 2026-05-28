"use client";

import { useEffect, useState } from "react";
import { ALL_STYLES } from "@/lib/fonts";

type Parts = { prefixes: string[]; cores: string[]; suffixes: string[] };

const STYLE_POOL = [
  "double-struck",
  "bubble",
  "squared",
  "monospace",
  "small-caps",
  "fullwidth",
  "script",
  "fraktur",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomHandle(parts: Parts): string {
  const p = pick(parts.prefixes);
  const c = pick(parts.cores);
  const s = pick(parts.suffixes);
  const join = Math.random() < 0.4 ? "_" : "";
  return `${p}${join}${c}${s}`;
}

export default function NameClient({ parts, stylize }: { parts: Parts; stylize: boolean }) {
  const [items, setItems] = useState<{ id: string; base: string; styled: string; name: string }[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  function regenerate() {
    const next = Array.from({ length: 12 }, (_, i) => {
      const base = randomHandle(parts);
      if (stylize) {
        const sid = STYLE_POOL[i % STYLE_POOL.length];
        const s = ALL_STYLES[sid] ?? ALL_STYLES["monospace"];
        return { id: `${i}-${base}`, base, styled: s.transform(base), name: s.name };
      }
      return { id: `${i}-${base}`, base, styled: base, name: "Plain" };
    });
    setItems(next);
  }

  useEffect(() => { regenerate(); }, []);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied((c) => (c === value ? null : c)), 1400);
    } catch {}
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", margin: "0 0 24px" }}>
        <button className="load-more" onClick={regenerate}>Regenerate</button>
      </div>
      <div className="results">
        {items.map((u) => (
          <div
            key={u.id}
            className="style-card"
            onClick={() => copy(u.styled)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                copy(u.styled);
              }
            }}
          >
            <div className="left">
              <div className="name">{u.name}</div>
              <div className="preview">{u.styled}</div>
            </div>
            <button
              className={`icon-btn ${copied === u.styled ? "copied" : ""}`}
              onClick={(e) => { e.stopPropagation(); copy(u.styled); }}
              aria-label="Copy name"
            >
              {copied === u.styled ? "✓" : "⧉"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
