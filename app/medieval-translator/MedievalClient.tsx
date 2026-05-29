"use client";

import { useMemo, useState } from "react";
import { toMedieval } from "@/lib/texttools";

const boxStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 140,
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

export default function MedievalClient() {
  const [text, setText] = useState("Hello friend, how are you today?");
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => toMedieval(text), [text]);

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
          placeholder="Type modern English…"
          aria-label="Modern English text"
          style={boxStyle}
        />
        <div className="controls" style={{ justifyContent: "flex-end", marginTop: 12 }}>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Medieval English"
        style={{ ...boxStyle, marginTop: 16, whiteSpace: "pre-wrap", minHeight: 100 }}
      >
        {output || <span style={{ color: "var(--muted)" }}>Ye olde text appears here…</span>}
      </div>
    </>
  );
}
