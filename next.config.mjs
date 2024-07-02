/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "",
  images: {
    loader: "custom",
    loaderFile: "./app/util/imageLoader.tsx",
  },
};

export default nextConfig;
