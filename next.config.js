/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  eslint: {
    dirs: ['pages/', 'components/']
  }
}

module.exports = nextConfig
