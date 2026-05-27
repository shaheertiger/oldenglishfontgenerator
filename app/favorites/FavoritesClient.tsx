"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ALL_STYLES } from "@/lib/fonts";

const FAV_KEY = "oef-favorites";

export default function FavoritesClient() {
  const [favs, setFavs] = useState<string[]>([]);
  const [text, setText] = useState("favorite styles");
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(FAV_KEY);
      if (raw) setFavs(JSON.parse(raw));
    } catch {}
  }, []);

  function remove(id: string) {
    setFavs((prev) => {
      const next = prev.filter((x) => x !== id);
      try { localStorage.setItem(FAV_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  function clearAll() {
    if (!confirm("Remove all favorites?")) return;
    setFavs([]);
    try { localStorage.setItem(FAV_KEY, "[]"); } catch {}
  }

  async function copy(id: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1400);
    } catch {}
  }

  if (!mounted) return null;

  const items = favs.map((id) => ALL_STYLES[id]).filter(Boolean);
  const source = text || "favorite styles";

  if (items.length === 0) {
    return (
      <div className="mixer-output" style={{ marginTop: 0 }}>
        <div className="mixer-output-label">No favorites yet</div>
        <div className="mixer-output-text" style={{ fontSize: 16, color: "var(--muted)" }}>
          Hit the ☆ next to any style on a generator to save it. Saved styles
          show up here and stay pinned to the top of every generator&rsquo;s
          results list.
        </div>
        <div style={{ marginTop: 18 }}>
          <Link href="/" className="load-more" style={{ display: "inline-block", textDecoration: "none" }}>
            Open the generator →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="input-row">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something to preview"
          aria-label="Sample text"
          rows={1}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 8px" }}>
        <div className="fav-label" style={{ padding: 0 }}>★ {items.length} favorite{items.length === 1 ? "" : "s"}</div>
        <button
          className="load-more"
          style={{ background: "transparent", color: "var(--text)", border: "1px solid var(--border-strong)", padding: "8px 16px", fontSize: 13 }}
          onClick={clearAll}
        >
          Clear all
        </button>
      </div>

      <div className="results">
        {items.map((s) => {
          const out = s.transform(source);
          return (
            <div
              key={s.id}
              className="style-card"
              onClick={() => copy(s.id, out)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); copy(s.id, out); }
              }}
            >
              <div className="left">
                <div className="name">{s.name}</div>
                <div className="preview">{out}</div>
              </div>
              <div className="actions">
                <button
                  className="fav-btn active"
                  onClick={(e) => { e.stopPropagation(); remove(s.id); }}
                  aria-label="Remove from favorites"
                  title="Remove from favorites"
                >
                  ★
                </button>
                <button
                  className={`icon-btn ${copied === s.id ? "copied" : ""}`}
                  onClick={(e) => { e.stopPropagation(); copy(s.id, out); }}
                  aria-label="Copy"
                >
                  {copied === s.id ? "✓" : "⧉"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
