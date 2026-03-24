import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

import { Footer } from '@/components/site/footer';
import { Navbar } from '@/components/site/navbar';
import { WaveField } from '@/components/site/wave-field';
import { siteConfig } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://degenez.com'),
  title: {
    default: siteConfig.title,
    template: `%s | DegenEZ`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: 'https://degenez.com',
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DegenEZ - Easy Degen Trading on Solana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/og-image.png'],
    creator: '@DegenEzApp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://degenez.com',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="theme-color" content="#071018" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DegenEZ" />
      </head>
      <body>
        <div className="fixed inset-0 -z-20 overflow-hidden">
          <WaveField className="scale-[1.15]" />
        </div>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(98,235,222,0.07),transparent_32%),linear-gradient(180deg,rgba(7,16,24,0.78),rgba(2,7,13,0.28)_30%,rgba(2,7,13,0.75))]" />
        <Navbar />
        <div className="relative min-h-screen">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
