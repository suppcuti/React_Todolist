import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  basePath: "/React_Todolist", // Replace with your repo name
  assetPrefix: "/React_Todolist/", // Ensure assets load correctly
  images: {
    unoptimized: true, // Disable Next.js image optimization (GitHub Pages doesn't support it)
  },
};

export default nextConfig;
