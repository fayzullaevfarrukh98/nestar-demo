import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["import"], // ✅ @import ogohlantirishini o'chiradi
  },
};

export default nextConfig;
