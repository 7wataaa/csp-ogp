/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gh-card.dev',
        pathname: '/repos/7wataaa/**',
      },
    ],
  },
};

module.exports = nextConfig;
