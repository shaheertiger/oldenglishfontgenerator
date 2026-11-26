export const REDIRECTS: { source: string; destination: string }[];
export const GONE: string[];
export const GONE_PREFIXES: string[];
export const LIVE: string[];
export function isGone(path: string): boolean;
export function isServed(path: string): boolean;
