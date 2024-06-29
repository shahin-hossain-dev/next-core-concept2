/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "www.themealdb.com", //specific domain
        hostname: "**", //all domain allow
      },
    ],
  },
  // কোনো পেজে ঢুকতে গেলে যদি অন্য পেজে পাঠানোর প্রয়োজন হয় তাহলে redirect func use করতে হবে।
  /* redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/posts",
        permanent: true,
      },
    ];
  }, */
};

export default nextConfig;
