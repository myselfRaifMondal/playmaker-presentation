import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Generates static HTML, CSS and JavaScript inside /out
  output: "export",

  // Helps GitHub Pages serve routes correctly
  trailingSlash: true,

  // Required because this is a project site hosted under:
  // /playmaker-presentation/
  basePath,
  assetPrefix: basePath,

  // GitHub Pages cannot run Next.js image optimisation servers
  images: {
    unoptimized: true,
  },
};

export default nextConfig;