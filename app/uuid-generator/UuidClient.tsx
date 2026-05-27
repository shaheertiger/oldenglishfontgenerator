"use client";

import { useEffect, useState } from "react";

function uuidv4(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // fallback
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

type Variant = "v4" | "v4-no-dashes" | "v4-upper" | "v4-braces";

function format(uuid: string, v: Variant): string {
  switch (v) {
    case "v4-no-dashes": return uuid.replace(/-/g, "");
    case "v4-upper": return uuid.toUpperCase();
    case "v4-braces": return `{${uuid}}`;
    default: return uuid;
  }
}

export default function UuidClient() {
  const [variant, setVariant] = useState<Variant>("v4");
  const [count, setCount] = useState(10);
  const [ids, setIds] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  function regenerate() {
    const next = Array.from({ length: count }, () => format(uuidv4(), variant));
    setIds(next);
  }

  useEffect(() => { regenerate(); /* eslint-disable-next-line */ }, [variant, count]);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied((c) => (c === value ? null : c)), 1400);
    } catch {}
  }

  async function copyAll() {
    await copy(ids.join("\n"));
  }

  return (
    <>
      <div className="mixer-controls">
        <label className="mixer-field">
          <span>Format</span>
          <select value={variant} onChange={(e) => setVariant(e.target.value as Variant)}>
            <option value="v4">v4 (with dashes)</option>
            <option value="v4-no-dashes">v4 (no dashes)</option>
            <option value="v4-upper">v4 uppercase</option>
            <option value="v4-braces">v4 in braces</option>
          </select>
        </label>
        <label className="mixer-field">
          <span>How many</span>
          <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
            {[1, 5, 10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>

      <div style={{ display: "flex", gap: 10, justifyContent: "center", margin: "16px 0 24px" }}>
        <button className="load-more" onClick={regenerate}>Regenerate</button>
        <button className="load-more" style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--border-strong)" }} onClick={copyAll}>
          Copy all
        </button>
      </div>

      <div className="results">
        {ids.map((id, i) => (
          <div
            key={`${id}-${i}`}
            className="style-card"
            onClick={() => copy(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copy(id); }
            }}
          >
            <div className="left">
              <div className="name">UUID #{i + 1}</div>
              <div className="preview" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 17 }}>
                {id}
              </div>
            </div>
            <button
              className={`icon-btn ${copied === id ? "copied" : ""}`}
              onClick={(e) => { e.stopPropagation(); copy(id); }}
              aria-label="Copy UUID"
            >
              {copied === id ? "✓" : "⧉"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
