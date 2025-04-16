import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: '.next',
  
  // Use this to allow request from other origins
  // such as your workspace url
  allowedDevOrigins: ['9002-idx-studio-1744790472926.cluster-ikxjzjhlifcwuroomfkjrx437g.cloudworkstations.dev'],

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
