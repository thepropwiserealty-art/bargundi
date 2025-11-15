import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import ContextProvider from "@/components/contextProvider";
import './globals.css'
import type { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mantra-burgundy-best-deals.com'),
  
  title: {
    default: 'Burgundy Series: Luxury Properties by Mantra Realty',
    template: '%s | Mantra Realty Burgundy Series'
  },  
  
  description: 'Discover the Burgundy Series by Mantra Realty. Explore luxury 3BHK & 4BHK villas and apartments with world-class amenities in prime locations.',
  
  keywords: [
    'Mantra Realty',
    'Burgundy Series',
    'Marvilla Villas',
    'Mayfair Residences',
    'One Residences',
    'luxury apartments',
    'premium properties',
    '3BHK apartments',
    '4BHK apartments',
    'luxury villas',
    'real estate',
    'premium amenities',
    'swimming pool',
    'fitness center',
    'luxury living'
  ],  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mantra-burgundy-best-deals.com/',
    siteName: 'Mantra Realty - Burgundy Series',
    title: 'Burgundy Series - Luxury Properties by Mantra Realty',
    description: 'Explore luxury living with Marvilla Villas, Mayfair River Residences, and One Residences. Premium properties with exceptional amenities and thoughtfully designed floor plans.',
    images: [
      {
        url: '/mantralogo.png',
        width: 1200,
        height: 630,
        alt: 'Luxury Living Space - Mantra Realty Burgundy Series',
      },
    ],
  },
  verification: {
    google: 'G26jIDFbIHv0bLdWLPC5F9y8BvXYsoL3kzztbZAyCWE',
  },
  
  alternates: {
    canonical: 'https://mantra-burgundy-best-deals.com/',
  },
  
  category: 'Real Estate',

   // Additional metadata for single-page site
  other: {
    'article:section': 'Real Estate',
    'og:type': 'website',
  },

}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ContextProvider>
        {children}
        </ContextProvider>
      </body>
    </html>
  )
}
