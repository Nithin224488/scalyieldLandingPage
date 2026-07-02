import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "scalyieldLandingPage";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // GitHub Pages project-site deploy: https://<user>.github.io/<repo>/
  ...(isProd
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
