import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Old English Font Generator",
    short_name: "OE Fonts",
    description:
      "Free Unicode font generator: Old English, blackletter, cursive, bold, bubble, glitch and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0d0a",
    theme_color: "#0f0d0a",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
