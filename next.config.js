/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["cdn.radixhealthcare.org"],
    qualities: [90],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

module.exports = nextConfig;
