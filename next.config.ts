import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.flash.trade',
        pathname: '/logo/**',
      },
    ],
  },
};

export default nextConfig;
