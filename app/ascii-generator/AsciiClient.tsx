"use client";

import { useMemo, useState } from "react";
import { textToAscii } from "@/lib/ascii";

const CHARS = ["█", "#", "@", "*", "▓", "░"];

export default function AsciiClient() {
  const [text, setText] = useState("HELLO");
  const [ch, setCh] = useState("█");
  const [copied, setCopied] = useState(false);

  const output = useMemo(() => textToAscii(text || "HELLO", ch), [text, ch]);

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
          placeholder="HELLO"
          aria-label="Text to convert to ASCII"
          style={{
            width: "100%",
            background: "var(--bg-elev)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            padding: "14px 16px",
            fontSize: 16,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
        <div className="controls" style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ color: "var(--muted)", fontSize: 14 }}>Block:</span>
            {CHARS.map((c) => (
              <button
                key={c}
                className={`btn ${c === ch ? "" : "ghost"}`}
                onClick={() => setCh(c)}
                style={{ padding: "6px 12px" }}
              >
                {c}
              </button>
            ))}
          </div>
          <button className="btn" onClick={copy}>
            {copied ? "Copied!" : "Copy ASCII"}
          </button>
        </div>
      </div>

      <pre
        style={{
          marginTop: 20,
          background: "var(--panel)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 20,
          overflow: "auto",
          fontSize: 14,
          lineHeight: 1.1,
          color: "var(--text)",
        }}
      >
        {output}
      </pre>
    </>
  );
}
