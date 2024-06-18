/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/cv',
        destination: '/cv.pdf',
      },
      {
        source: '/gh',
        destination: 'https://github.com/gfrancomontero',
      },
      {
        source: '/x',
        destination: 'https://x.com/gfrancomontero',
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/gfrancomontero',
      },
      {
        source: '/telegram',
        destination: 'https://t.me/gqfranco',
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/gonzalofranco123',
      },
    ];
  },
};

export default nextConfig;
