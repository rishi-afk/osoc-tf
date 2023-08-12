/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  experimental: { serverActions: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      { hostname: "picsum.photos", protocol: "https" },
    ],
  },
};
module.exports = nextConfig;
