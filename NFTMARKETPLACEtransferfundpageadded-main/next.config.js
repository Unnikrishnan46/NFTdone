/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["aoggle.infura-ipfs.io", "infura-ipfs.io"],
    loader: 'akamai',
    path: '',
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    // Will be available on both server and client
    apiUrl: 'http://localhost:3000'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/public',
  },
};

module.exports = nextConfig;
