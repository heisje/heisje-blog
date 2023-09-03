const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
};

module.exports = withContentlayer(nextConfig);
