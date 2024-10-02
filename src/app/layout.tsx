import React, { ReactNode } from 'react';
import './globals.scss';

export const metadata = {
  title: 'Gonzalo Franco',
  description: 'Software Engineer',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Gonzalo Franco" />
        <meta property="og:description" content="Software Engineer" />
        <meta property="og:image" content="https://gonzalofranco.vercel.app/me.jpg" />
        <meta property="og:url" content="https://gonzalofranco.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gonzalo Franco" />
        <meta name="twitter:description" content="Software Engineer" />
        <meta name="twitter:image" content="https://gonzalofranco.vercel.app/me.jpg" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤖</text></svg>" />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
