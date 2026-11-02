"use client";

import { useRef, useState } from "react";

export type CharGroup = { label: string; cells: { glyph: string; hint: string }[] };

/** Grid of single characters; each tile copies its glyph. */
export default function CharGrid({ groups, printable = false }: { groups: CharGroup[]; printable?: boolean }) {
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy(glyph: string, hint: string) {
    try {
      await navigator.clipboard.writeText(glyph);
      setToast(`Copied ${hint}`);
    } catch {
      setToast("Copy failed — long-press the letter instead");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 1400);
  }

  return (
    <div>
      {printable && (
        <p className="no-print">
          <button type="button" className="load-more" onClick={() => window.print()}>
            Print this alphabet
          </button>
        </p>
      )}
      {groups.map((g) => (
        <div key={g.label}>
          <div className="grid-label">{g.label}</div>
          <ul className="letter-grid">
            {g.cells.map((c) => (
              <li key={g.label + c.hint}>
                <button type="button" onClick={() => copy(c.glyph, c.hint)} aria-label={`Copy ${c.hint}`}>
                  <span className="g" aria-hidden="true">{c.glyph}</span>
                  <small>{c.hint.replace(/^.* /, "")}</small>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </div>
  );
}
