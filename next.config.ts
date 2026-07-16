import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/shuja-shah.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
