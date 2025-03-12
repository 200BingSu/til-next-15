import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
  // 백엔드 API 호출 과정 및 DATA Cash 정보
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
