/** @type {import('next').NextConfig} */

const nextConfig = {

  allowedDevOrigins: [
    "172.20.10.2",
  ],

  images: {

    remotePatterns: [

      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },

    ],

  },

};

export default nextConfig;