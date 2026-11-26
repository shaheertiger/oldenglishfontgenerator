// Minimal Google service-account auth (JWT bearer) for the Search Console API.
// Reads GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY / GOOGLE_TOKEN_URI from the env.
import { createSign } from "crypto";

const b64 = (o) => Buffer.from(typeof o === "string" ? o : JSON.stringify(o)).toString("base64url");

export async function googleToken(scope = "https://www.googleapis.com/auth/webmasters.readonly") {
  const email = process.env.GOOGLE_CLIENT_EMAIL;
  const key = (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
  const aud = process.env.GOOGLE_TOKEN_URI || "https://oauth2.googleapis.com/token";
  if (!email || !key) throw new Error("GOOGLE_CLIENT_EMAIL / GOOGLE_PRIVATE_KEY not set");
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({ iss: email, scope, aud, iat: now, exp: now + 3600 })}`;
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key).toString("base64url");
  const r = await fetch(aud, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${sig}` }),
  });
  const j = await r.json();
  if (!j.access_token) throw new Error(`token error: ${JSON.stringify(j)}`);
  return j.access_token;
}

export async function gsc(token, path, body) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/${path}`, {
    method: body ? "POST" : "GET",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  return r.json();
}
