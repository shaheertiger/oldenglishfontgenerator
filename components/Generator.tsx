"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { pickStyles } from "@/lib/fonts";

type Props = {
  /** Style ids in display order. */
  styles: string[];
  /** Phrase rendered server-side before the visitor types anything. */
  sample: string;
  placeholder?: string;
  /** One-tap example inputs (names, dates, bio lines). */
  presets?: string[];
  /** Rows rendered before "Show all styles". */
  initialVisible?: number;
  /** Optional character budget, e.g. a 32-character Discord display name. */
  limit?: { label: string; max: number };
  /** Read ?text= from the URL (homepage only, powers the WebSite SearchAction). */
  readQuery?: boolean;
};

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

/** Count what platforms are likely to count: UTF-16 code units (the stricter number). */
function units(s: string) {
  return s.length;
}

export default function Generator({
  styles,
  sample,
  placeholder = "Type your name or phrase…",
  presets,
  initialVisible = 12,
  limit,
  readQuery = false,
}: Props) {
  const [text, setText] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!readQuery) return;
    const q = new URLSearchParams(window.location.search).get("text");
    if (q) setText(q.slice(0, 200));
  }, [readQuery]);

  const source = text.trim().length === 0 ? sample : text;
  const styleObjs = useMemo(() => pickStyles(styles), [styles]);
  const visible = showAll ? styleObjs : styleObjs.slice(0, initialVisible);

  const copy = useCallback(async (name: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast(`Copied ${name}`);
    } catch {
      setToast("Copy failed — long-press the text to copy it");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 1600);
  }, []);

  return (
    <div className="gen">
      <div className="input-row">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          aria-label="Text to convert into Old English letters"
          rows={1}
          maxLength={500}
        />
      </div>

      {presets && presets.length > 0 && (
        <div className="presets" aria-label="Example text">
          {presets.map((p) => (
            <button key={p} type="button" className="preset" onClick={() => setText(p)}>
              {p}
            </button>
          ))}
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        Plain-text version: {source}
      </p>

      <ul className="results">
        {visible.map((s) => {
          const out = s.transform(source);
          const n = units(out);
          return (
            <li key={s.id} className="style-card">
              <div className="left">
                <div className="name">
                  {s.name}
                  {limit && (
                    <span className={`count ${n > limit.max ? "over" : ""}`}>
                      {n}/{limit.max}
                    </span>
                  )}
                </div>
                <div className="preview" aria-hidden="true">{out}</div>
              </div>
              <button
                type="button"
                className="icon-btn"
                onClick={() => copy(s.name, out)}
                aria-label={`Copy "${source}" in ${s.name} style`}
              >
                <CopyIcon />
                <span className="copy-label">Copy</span>
              </button>
            </li>
          );
        })}
      </ul>

      {!showAll && styleObjs.length > initialVisible && (
        <div className="load-more-wrap">
          <button type="button" className="load-more" onClick={() => setShowAll(true)}>
            Show all {styleObjs.length} styles
          </button>
        </div>
      )}

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}
