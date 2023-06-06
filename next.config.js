/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  env: {
    JWT_SECRET: "todoLogin123456",
    MONGODB_URL: "mongodb://localhost:27017/todoes"
  }
}

module.exports = nextConfig
