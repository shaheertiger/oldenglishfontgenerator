"use client";

import { useMemo, useState } from "react";
import { toStacked } from "@/lib/texttools";

const boxStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-elev)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 16,
  fontFamily: "inherit",
  outline: "none",
};

export default function StackedClient() {
  const [text, setText] = useState("stacked");
  const [intensity, setIntensity] = useState(6);
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => toStacked(text, intensity), [text, intensity]);

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
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text…"
          aria-label="Text to stack"
          style={boxStyle}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            margin: "16px 0",
            flexWrap: "wrap",
          }}
        >
          <label htmlFor="intensity" style={{ color: "var(--muted)", fontSize: 14 }}>
            Stack height: {intensity}
          </label>
          <input
            id="intensity"
            type="range"
            min={1}
            max={21}
            value={intensity}
            onChange={(e) => setIntensity(Number(e.target.value))}
            style={{ flex: 1, minWidth: 160 }}
          />
        </div>

        <div className="controls" style={{ justifyContent: "flex-end" }}>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Stacked text"
        style={{
          ...boxStyle,
          marginTop: 16,
          minHeight: 90,
          fontSize: 26,
          lineHeight: 2.4,
          display: "flex",
          alignItems: "center",
          wordBreak: "break-word",
        }}
      >
        {output || <span style={{ color: "var(--muted)", fontSize: 16 }}>Result appears here…</span>}
      </div>
    </>
  );
}
