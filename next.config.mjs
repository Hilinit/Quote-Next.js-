/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "admin.xannesrleri.az",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      
    ],
  },
};

export default nextConfig;