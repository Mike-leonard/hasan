/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : (isProd ? '/hasan' : '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: [
    '192.168.1.150',
    '192.168.1.150:3000',
    '192.168.1.*',
    '192.168.*.*',
    'localhost:3000',
    '*.local',
  ],
};

module.exports = nextConfig;
