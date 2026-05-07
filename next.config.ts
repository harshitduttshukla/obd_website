import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vl.imgix.net",
      },
      {
        protocol: "https",
        hostname: "www.carlogos.org",
      },
    ],
  },
};

export default nextConfig;
