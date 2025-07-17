// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  async redirects() {
    return [
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

export default nextConfig;
