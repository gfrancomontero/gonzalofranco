import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';

export async function GET() {
  // Static pages for now, you can add more or fetch them dynamically later
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    // Add more static URLs here
  ];

  const stream = new SitemapStream({ hostname: 'https://gonzalofranco.com' });

  // Pipe the links to the sitemap stream
  const xmlData = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  // Return the sitemap XML
  return new NextResponse(xmlData, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
