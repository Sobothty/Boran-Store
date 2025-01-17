/** @type {import('next').NextConfig} */

const nextConfig: import('next').NextConfig = {
    image: {
      remotePatterns: [
        {
          hostname: "res.cloudinary.com"
        }
      ]
    }

};

export default nextConfig;
