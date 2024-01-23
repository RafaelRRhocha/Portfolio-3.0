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
  },
  env: {
    EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
    EMAIL_PUBLIC_KEY: process.env.EMAIL_PUBLIC_KEY
  }
}

module.exports = nextConfig
