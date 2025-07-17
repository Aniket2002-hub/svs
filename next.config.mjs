/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
      // Redirect http to https
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        permanent: true,
        destination: 'https://www.svsconstructions.com/:path*',
      },
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'svsconstructions.com',
          },
        ],
        permanent: true,
        destination: 'https://www.svsconstructions.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
