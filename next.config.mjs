/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "",
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
