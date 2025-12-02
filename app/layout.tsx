import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ContextProvider from "@/components/contextProvider";
import './globals.css'
import JsonLd from '@/components/JsonLd';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mantra-burgundy-best-deals.com'),

  title: {
    default: 'Mantra Burgundy Luxury Line | Villas & Apts in Mundhwa, Pune',
    template: '%s | Mantra Realty Burgundy Series',
  },

  description:
    "Explore Mantra's premium collection: Marvilla Villas, 1 Residences Magarpatta, & Mayfair KP Annexe. 3-5 BHK luxury homes in Mundhwa from ₹1.5 Cr*",

  keywords: [
    // Broad / High-Volume
    "Mantra Properties Pune",
    "Luxury projects in Mundhwa",
    "Flats in Magarpatta City",
    "New projects in Koregaon Park Annexe",
    "3 BHK in Hadapsar",
    "4 BHK luxury apartments Pune",
    "5 BHK villas in Pune",
    "Real estate Mundhwa",
    "Mantra Burgundy collection",

    // Project-Specific
    "Mantra Marvilla Mundhwa",
    "Mantra 1 Residences Magarpatta",
    "Mantra Mayfair Koregaon Park Annexe",
    "Mantra Marvilla villas price",
    "Mantra One Residences brochure",
    "Mantra Mayfair floor plan",
    "Mantra Burgundy Mundhwa location",

    // Intent-Based
    "Buy luxury home Pune",
    "Ready possession flats Mundhwa",
    "Under construction projects Magarpatta",
    "Gated community villas Pune",
    "High-end real estate Pune",
    "Mantra sales office contact"
  ],

  // Authorship
  authors: [{ name: 'Mantra Properties' }],
  creator: 'Mantra Properties',
  publisher: 'Mantra Properties',

  // Robot directives
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

  // Social Media Sharing (Facebook/WhatsApp/LinkedIn)
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mantra-burgundy-best-deals.com/',
    siteName: 'Mantra Realty - Burgundy Series',
    title: 'Burgundy Series - Luxury Properties by Mantra Realty',
    description:
      "Explore Mantra's premium collection: Marvilla Villas, 1 Residences Magarpatta, & Mayfair KP Annexe. 3-5 BHK luxury homes in Mundhwa.",
    images: [
      {
        // TIP: Use a render of the building here, not the logo!
        url: '/mantrabg', 
        width: 1200,
        height: 630,
        alt: 'Mantra Burgundy Luxury Villas and Apartments in Pune',
      },
    ],
  },

  // Twitter Card (Important for large image previews)
  twitter: {
    card: 'summary_large_image',
    title: 'Mantra Burgundy Luxury Line | Villas & Apts in Mundhwa',
    description: "Premium 3-5 BHK homes in Mundhwa, Pune. Marvilla, 1 Residences & Mayfair.",
    images: ['/mantrabg'], // Same hero image as OG
  },

  verification: {
    google: 'G26jIDFbIHv0bLdWLPC5F9y8BvXYsoL3kzztbZAyCWE',
  },
  
  alternates: {
    canonical: 'https://mantra-burgundy-best-deals.com/',
  },
  
  category: 'Real Estate',

  // Local SEO Tags
  other: {
    // These are Geo-coordinates for Mundhwa, Pune (Approximate)
    // Helps Google Map your site to the location
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5302;73.9262', // Coordinates for Mundhwa
    'ICBM': '18.5302, 73.9262',
  },

  // Favicon setup
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ REQUIRED for Google reCAPTCHA v2 checkbox */}
        <script
          src="https://www.recaptcha.net/recaptcha/api.js"
          async
          defer
        ></script>
      </head>

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <JsonLd />
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
