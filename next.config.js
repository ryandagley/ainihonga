/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: './ImageLoader.js'
  }
}

module.exports = nextConfig
