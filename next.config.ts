import type { NextConfig } from "next";

// GitHub Pages serves the site under a subpath (e.g. /react-portfolio/).
// We read NEXT_PUBLIC_BASE_PATH from the environment so:
//   - local dev (no env var)              -> served at /
//   - GitHub Pages (env var set in CI)    -> served at /react-portfolio
//   - custom domain later (env var unset) -> served at /
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Static HTML export for GitHub Pages (no Node server at runtime).
  output: "export",

  // Required for static export; disables the next/image optimizer.
  images: { unoptimized: true },

  // Apply the basePath to all internal routes + assets handled by Next.
  basePath,
  assetPrefix: basePath || undefined,

  // GitHub Pages prefers /about/index.html over /about.html for clean URLs.
  trailingSlash: true,
};

export default nextConfig;
