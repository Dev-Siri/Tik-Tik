/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["yt3.ggpht.com", "lh3.googleusercontent.com"],
  },
  webpack(config, { dev }) {
    if (!dev)
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          ...config.optimization.splitChunks,
          chunks: "all",
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            vendors: false,
          },
        },
        runtimeChunk: false,
        usedExports: true,
        sideEffects: true,
        moduleIds: "deterministic",
      };

    return config;
  },
};

export default nextConfig;
