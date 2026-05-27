import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Old English Font Generator";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0f0d0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          padding: 60,
        }}
      >
        <div style={{ fontSize: 220, color: "#c9a96a", fontWeight: 700, lineHeight: 1 }}>
          Æ
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#f4ede1",
            marginTop: 30,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          Old English Font Generator
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#b8a98f",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Blackletter, gothic & cursive text — copy &amp; paste
        </div>
      </div>
    ),
    { ...size }
  );
}
