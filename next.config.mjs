/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'svsconstructions.com',
          },
        ],
        destination: 'https://www.svsconstructions.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

