import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: '.next',
  
  // Use this to allow request from other origins
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ]
  },
  // such as your workspace url
  allowedDevOrigins: ['https://9004-idx-studio-1744790472926.cluster-ikxjzjhlifcwuroomfkjrx437g.cloudworkstations.dev'],

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
