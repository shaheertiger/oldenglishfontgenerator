"use client";

import { useMemo, useState } from "react";
import { convertCase, type CaseMode } from "@/lib/texttools";

const MODES: { mode: CaseMode; label: string }[] = [
  { mode: "sentence", label: "Sentence case" },
  { mode: "lower", label: "lower case" },
  { mode: "upper", label: "UPPER CASE" },
  { mode: "capitalized", label: "Capitalized Case" },
  { mode: "title", label: "Title Case" },
  { mode: "alternating", label: "aLtErNaTiNg cAsE" },
  { mode: "inverse", label: "InVeRsE CaSe" },
];

const boxStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 160,
  background: "var(--bg-elev)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 16,
  fontFamily: "inherit",
  outline: "none",
  resize: "vertical",
};

const ghost: React.CSSProperties = {
  background: "transparent",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
};

export default function CaseClient() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog.");
  const [mode, setMode] = useState<CaseMode>("sentence");
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => convertCase(text, mode), [text, mode]);

  const stats = useMemo(() => {
    const chars = text.length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split(/\n/).length : 0;
    return { chars, words, lines };
  }, [text]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <>
      <div className="generator">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text…"
          aria-label="Text to convert"
          style={boxStyle}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            margin: "14px 0",
          }}
        >
          {MODES.map((m) => (
            <button
              key={m.mode}
              className="load-more"
              style={mode === m.mode ? undefined : ghost}
              onClick={() => setMode(m.mode)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span style={{ color: "var(--muted)", fontSize: 14 }}>
            {stats.words} words · {stats.chars} characters · {stats.lines} lines
          </span>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Converted text"
        style={{ ...boxStyle, marginTop: 16, whiteSpace: "pre-wrap" }}
      >
        {output || <span style={{ color: "var(--muted)" }}>Result appears here…</span>}
      </div>
    </>
  );
}
