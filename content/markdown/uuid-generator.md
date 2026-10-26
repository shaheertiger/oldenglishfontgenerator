# UUID Generator

> Generate random v4 UUIDs in batches. Dashes or no dashes, upper or lower case, in braces. Free, instant, runs in your browser.

- **URL**: https://www.oldenglishfontgenerator.com/uuid-generator

---

Generate random v4 UUIDs in batches. Pick a format, choose how many, and copy individually or all at once. Uses your browser’s crypto API — no network calls.

## What is a v4 UUID?

A UUID (Universally Unique Identifier) is a 128-bit value typically shown as a 36-character hex string with four dashes. The “v4” flavor draws those 128 bits from a random source — so the odds of two clients generating the same UUID are vanishingly small, which is why it’s the standard choice for database primary keys, request IDs, file names, and any value that needs to be unique without coordination.

## How this generator works

It calls `crypto.randomUUID()` in your browser, which is the official Web Crypto API for generating cryptographically random v4 UUIDs. Nothing is sent to a server. The format options just reshape the string — they don’t change the underlying random value.
