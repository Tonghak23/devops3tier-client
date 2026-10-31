import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (1 tier, no server)
  output: "export",

  // Next's image optimizer needs a server, so disable it for static hosting
  images: { unoptimized: true },
};

export default nextConfig;