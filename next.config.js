/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/the-shirts-that-sold-themselves' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/the-shirts-that-sold-themselves/' : '',
}

module.exports = nextConfig

