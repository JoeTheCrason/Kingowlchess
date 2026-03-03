/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/chess.html',
      },
    ];
  },
};

export default nextConfig;
