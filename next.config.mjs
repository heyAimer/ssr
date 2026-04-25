/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:"imgix.bustle.com"
      },
      {
        protocol: "https",
        hostname: "static0.srcdn.com",
      },
    ],
  },
};

export default nextConfig;
