import type { ReactNode } from "react";

type Art = "instagram" | "discord" | "tattoo" | "logo" | "gaming" | "youtube" | "tiktok" | "invite";

const COMMON = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ARTS: Record<Art, ReactNode> = {
  instagram: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <rect x="12" y="12" width="40" height="40" rx="10" />
      <circle cx="32" cy="32" r="9" />
      <circle cx="44" cy="20" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  discord: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <path d="M16 18c0 0 5-4 14-4s14 4 14 4l3 22c-2 3-7 6-10 6l-2-4c-7 2-12 2-19 0l-2 4c-3 0-8-3-10-6l3-22z" />
      <ellipse cx="25" cy="34" rx="2.5" ry="3.5" fill="currentColor" stroke="none" />
      <ellipse cx="39" cy="34" rx="2.5" ry="3.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  tattoo: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <path d="M14 50 c4-12 14-22 28-30" />
      <path d="M40 14 l8 8" />
      <path d="M44 10 l8 8" />
      <path d="M14 50 l-4 4" />
      <circle cx="44" cy="20" r="2.5" />
    </svg>
  ),
  logo: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <circle cx="32" cy="32" r="22" />
      <path d="M22 32 L32 22 L42 32 L32 42 Z" />
      <path d="M28 32 L36 32" />
    </svg>
  ),
  gaming: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <path d="M14 28 c0-4 4-8 9-8 h18 c5 0 9 4 9 8 v10 c0 3-3 6-7 6 c-3 0-5-2-7-4 h-8 c-2 2-4 4-7 4 c-4 0-7-3-7-6 z" />
      <path d="M22 30 v6 M19 33 h6" />
      <circle cx="42" cy="31" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="46" cy="35" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <rect x="8" y="16" width="48" height="32" rx="8" />
      <path d="M28 26 L40 32 L28 38 Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <path d="M34 12 v28 a8 8 0 1 1 -8 -8" />
      <path d="M34 12 c2 6 7 10 13 10" />
    </svg>
  ),
  invite: (
    <svg viewBox="0 0 64 64" {...COMMON} aria-hidden="true">
      <rect x="10" y="16" width="44" height="32" rx="4" />
      <path d="M10 20 L32 36 L54 20" />
      <path d="M22 42 L32 36 L42 42" />
    </svg>
  ),
};

export default function UsecaseArt({ name }: { name: Art }) {
  return <div className="usecase-art">{ARTS[name]}</div>;
}
