export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['']
      },
    ],
    sitemap: 'https://svsconstructions.com/',
};
}