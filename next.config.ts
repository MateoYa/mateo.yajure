import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    dirs: [], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    ignoreDuringBuilds: true,
    
  },
  typescript:{
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
