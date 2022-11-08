/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.postimg.cc',
      'user-images.githubusercontent.com',
      'placeimg.com',
      'img.icons8.com'
    ],
  }
}

module.exports = nextConfig
