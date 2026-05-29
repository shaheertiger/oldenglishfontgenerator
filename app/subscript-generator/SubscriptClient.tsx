"use client";

import { useMemo, useState } from "react";
import { toSubscript, toSuperscript } from "@/lib/texttools";

type Mode = "subscript" | "superscript";

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

const ghost: React.CSSProperties = {
  background: "transparent",
  color: "var(--text)",
  border: "1px solid var(--border-strong)",
};

export default function SubscriptClient() {
  const [text, setText] = useState("H2O x2 CO2");
  const [mode, setMode] = useState<Mode>("subscript");
  const [copied, setCopied] = useState(false);

  const output = useMemo(
    () => (mode === "subscript" ? toSubscript(text) : toSuperscript(text)),
    [text, mode]
  );

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
        <div className="controls" style={{ gap: 8, marginBottom: 12 }}>
          <button
            className="load-more"
            style={mode === "subscript" ? undefined : ghost}
            onClick={() => setMode("subscript")}
          >
            Subscript ₓ
          </button>
          <button
            className="load-more"
            style={mode === "superscript" ? undefined : ghost}
            onClick={() => setMode("superscript")}
          >
            Superscript ˣ
          </button>
        </div>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type text…"
          aria-label="Text to convert"
          style={boxStyle}
        />

        <div className="controls" style={{ justifyContent: "flex-end", marginTop: 12 }}>
          <button className="load-more" onClick={copy}>
            {copied ? "Copied!" : "Copy result"}
          </button>
        </div>
      </div>

      <div
        aria-label="Converted text"
        style={{
          ...boxStyle,
          marginTop: 16,
          minHeight: 60,
          fontSize: 22,
          display: "flex",
          alignItems: "center",
          wordBreak: "break-word",
        }}
      >
        {output || <span style={{ color: "var(--muted)", fontSize: 16 }}>Result appears here…</span>}
      </div>

      <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 12 }}>
        Letters or symbols without a Unicode {mode} form are left unchanged.
      </p>
    </>
  );
}
