"use client";

import { useMemo, useState } from "react";
import { pickStyles } from "@/lib/fonts";

type Props = {
  styles: string[];
  defaultText?: string;
};

export default function Generator({ styles, defaultText = "Type something here" }: Props) {
  const [text, setText] = useState(defaultText);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const source = text.length === 0 ? defaultText : text;

  const styleObjs = useMemo(() => pickStyles(styles), [styles]);
  const results = useMemo(
    () => styleObjs.map((s) => ({ ...s, output: s.transform(source) })),
    [styleObjs, source]
  );

  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1400);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <>
      <div className="generator">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={defaultText}
          aria-label="Text to convert"
        />
        <div className="controls">
          <button className="btn ghost" onClick={() => setText("")}>Clear</button>
        </div>
      </div>

      <div className="results">
        {results.map((r) => (
          <div className="style-card" key={r.id}>
            <div className="left">
              <div className="name">{r.name}</div>
              <div className="preview">{r.output}</div>
            </div>
            <button
              className={`copy-btn ${copiedId === r.id ? "copied" : ""}`}
              onClick={() => copy(r.id, r.output)}
            >
              {copiedId === r.id ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
