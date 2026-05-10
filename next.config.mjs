/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  eslint: {
    // This will allow the build to finish even if there are small linting warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
