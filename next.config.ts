// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  sassOptions: {
    // Silence the deprecation warnings
    silenceDeprecations: ["legacy-js-api"],
    // You can add other Sass options here if needed
  },
  // You can include other Next.js config options here
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
