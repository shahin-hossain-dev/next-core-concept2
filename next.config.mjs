/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "www.themealdb.com", //specific domain
        hostname: "**", //all domain allow
      },
    ],
  },
};

export default nextConfig;
