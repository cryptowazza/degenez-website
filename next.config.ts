import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.drift.trade',
        pathname: '/assets/icons/**',
      },
    ],
  },
};

export default nextConfig;
