"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { pickStyles } from "@/lib/fonts";

type Pill = { label: string; href: string };

type Props = {
  styles: string[];
  defaultText?: string;
  pills?: Pill[];
  initialVisible?: number;
  resultsTitle?: string;
};

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2 4.5 14h6L9 22l9-13h-6L13 2z" />
    </svg>
  );
}

export default function Generator({
  styles,
  defaultText = "Type or paste your text here…",
  pills,
  initialVisible = 8,
  resultsTitle,
}: Props) {
  const [text, setText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const source = text.length === 0 ? "Type or paste your text" : text;

  const styleObjs = useMemo(() => pickStyles(styles), [styles]);
  const allResults = useMemo(
    () => styleObjs.map((s) => ({ ...s, output: s.transform(source) })),
    [styleObjs, source]
  );

  const visible = showAll ? allResults : allResults.slice(0, initialVisible);
  const hasMore = allResults.length > initialVisible && !showAll;

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
      <div className="input-row">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={defaultText}
          aria-label="Text to convert"
          rows={1}
        />
        <button
          className="go-btn"
          onClick={() => {
            const first = visible[0];
            if (first) copy(first.id, first.output);
          }}
          aria-label="Copy first style"
        >
          <BoltIcon />
        </button>
      </div>

      {pills && pills.length > 0 && (
        <div className="pill-row" role="list">
          {pills.map((p) => (
            <Link key={p.href} href={p.href} className="pill" role="listitem">
              {p.label}
            </Link>
          ))}
        </div>
      )}

      {resultsTitle && <div className="results-title">{resultsTitle}</div>}

      <div className="results">
        {visible.map((r) => (
          <div
            key={r.id}
            className="style-card"
            onClick={() => copy(r.id, r.output)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                copy(r.id, r.output);
              }
            }}
          >
            <div className="left">
              <div className="name">{r.name}</div>
              <div className="preview">{r.output}</div>
            </div>
            <div className="actions">
              <button
                className={`icon-btn ${copiedId === r.id ? "copied" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  copy(r.id, r.output);
                }}
                aria-label={`Copy ${r.name}`}
              >
                {copiedId === r.id ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="load-more-wrap">
          <button className="load-more" onClick={() => setShowAll(true)}>
            Load More Styles
          </button>
        </div>
      )}
    </>
  );
}
