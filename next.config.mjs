/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "avatars.githubusercontent.com"
      },
      {
        hostname: "cdn4.thedogapi.com"
      },
       {
        hostname: "cdn1.thedogapi.com"
      },
        {
        hostname: "cdn2.thedogapi.com"
      },
       {
        hostname: "storage.googleapis.com"
      }
    ],
  },
};

export default nextConfig;
