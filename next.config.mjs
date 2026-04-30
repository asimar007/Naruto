/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Image optimization ON — Next.js will serve WebP/AVIF and proper sizes
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
