/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["aoggle.infura-ipfs.io", "infura-ipfs.io"],
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
