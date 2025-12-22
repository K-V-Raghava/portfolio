/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; // NOTE: If your file is named .mjs, use "export default nextConfig;" instead
