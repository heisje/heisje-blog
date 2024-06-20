const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
