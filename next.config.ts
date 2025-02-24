import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  plugins: [require("@tailwindcss/line-clamp")],
  images: {
    domains: ["t4.ftcdn.net"],
  },
};

export default nextConfig;
