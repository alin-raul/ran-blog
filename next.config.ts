import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.amcnetworks.com",
        port: "",
        pathname: "/**", // Allow any path on this domain
      },
      // You can add other trusted domains here as well
      // For example, if you use Clerk for user images:
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
