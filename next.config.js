/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://marketing.affboat.com/api/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
