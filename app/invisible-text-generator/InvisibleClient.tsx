"use client";

import { useMemo, useState } from "react";

// Invisible / blank Unicode characters that survive copy-paste in most apps.
const CHARS: { id: string; label: string; char: string; note: string }[] = [
  { id: "hangul", label: "Hangul Filler", char: "ㅤ", note: "U+3164 — works in most usernames" },
  { id: "braille", label: "Braille Blank", char: "⠀", note: "U+2800 — reliable blank space" },
  { id: "zwsp", label: "Zero-Width Space", char: "​", note: "U+200B — truly zero width" },
  { id: "zwnbsp", label: "Word Joiner", char: "⁠", note: "U+2060 — invisible, non-breaking" },
  { id: "nbsp", label: "No-Break Space", char: " ", note: "U+00A0 — visible-width blank" },
];

export default function InvisibleClient() {
  const [charId, setCharId] = useState("hangul");
  const [count, setCount] = useState(1);
  const [copied, setCopied] = useState(false);

  const selected = CHARS.find((c) => c.id === charId) ?? CHARS[0];
  const output = useMemo(
    () => selected.char.repeat(Math.max(1, count)),
    [selected, count]
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }

  return (
    <>
      <div className="generator">
        <div className="mixer-controls">
          <label className="mixer-field">
            <span>Invisible character</span>
            <select value={charId} onChange={(e) => setCharId(e.target.value)}>
              {CHARS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label className="mixer-field">
            <span>How many</span>
            <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
              {[1, 2, 3, 5, 10, 25, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p style={{ color: "var(--muted)", fontSize: 14, margin: "14px 0" }}>
          {selected.note}
        </p>

        {/* The "preview" box intentionally looks empty — that's the point. */}
        <div
          aria-label="Invisible text preview (empty on purpose)"
          style={{
            border: "1px dashed var(--border-strong)",
            borderRadius: 10,
            padding: "22px 16px",
            textAlign: "center",
            color: "var(--muted)",
            fontSize: 14,
            background: "var(--bg-elev)",
          }}
        >
          {copied
            ? `Copied ${count} invisible character${count > 1 ? "s" : ""} ✓`
            : "The text is here — it's just invisible. Click copy."}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy invisible text"}
          </button>
        </div>
      </div>
    </>
  );
}
