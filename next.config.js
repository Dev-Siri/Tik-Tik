/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["yt3.ggpht.com", "lh3.googleusercontent.com"],
  },
};

export default nextConfig;
