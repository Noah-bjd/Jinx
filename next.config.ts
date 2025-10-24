import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ❌ Don't fail the build because of ESLint errors
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
