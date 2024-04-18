/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/asset-prefix/:path*",
          destination: "/:path*",
        },
        {
          source: "/not-asset-prefix/:path*",
          destination: "/:path*",
        },
      ],
    };
  },
  assetPrefix: "/asset-prefix",
};

module.exports = nextConfig;
