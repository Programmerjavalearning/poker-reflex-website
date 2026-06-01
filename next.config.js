/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.poker-reflex.com' }],
        destination: 'https://poker-reflex.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig