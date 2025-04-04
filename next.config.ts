import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 compiler: {
    styledComponents: true,
  },
  images: {
      remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  }
};

export default nextConfig;
