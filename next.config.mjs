/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.svsconstructions.com',
          },
        ],
        destination: 'https://svsconstructions.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
