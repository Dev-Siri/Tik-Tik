/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["yt3.ggpht.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
