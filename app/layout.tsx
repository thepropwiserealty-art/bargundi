import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ContextProvider from "@/components/contextProvider";
import './globals.css'
import JsonLd from '@/components/JsonLd';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://mantra-burgundy-best-deals.com'),

  title: {
    default: 'Mantra Burgundy Luxury Collection | Marvilla, 1 Residences & Mayfair | Exclusive Offers & Info',
    template: '%s | Mantra Burgundy Best Deals',
  },

  description:
    "Experience luxury at Mantra Burgundy: Marvilla Villas, 1 Residences & Mayfair.Best Deals Guaranteed.Request Price Sheet, Brochure & Floor Plans for Mundhwa Projects.",

  keywords: [
    // --- TOP PRIORITY PROJECTS ---
    "Mantra Burgundy",
    "Mantra Marvilla",
    "Mantra 1 Residences",
    "Mantra One Residences",
    "Mantra Mayfair",
    "Mantra Mirari",
    "Mantra Magnus",

    // --- SPECIFIC UNIT TYPES (High Intent) ---
    "Penthouse flat in Mantra 1 Residences",
    "Penthouse flat in Mantra Mayfair",
    "Luxury villas 5 BHK Mundhwa Pune",
    "3.5 BHK flat in Mantra 1 Residences",
    "4.5 BHK flat in Mantra one Residences",
    "4 BHK flat in Mantra Mayfair",


    "Real estate Mundhwa 411036",        // Home Location
    "Luxury projects in Viman Nagar 411014",
    "Flats in Hadapsar 411028",
    "Apartments in Lohgaon 411047",
    "Villas in Wagholi 412207",
    "Projects in Undri 411060",
    "Homes in Baner 411045",
    "Flats in Hinjewadi 411057",
    "Properties in Tathawade 411033",
    "Projects in Bavdhan 411021",
    "Flats in Kothrud 411038",
    "Villas in Warje 411058",
    "Real estate Kondhwa 411048",
    "Properties in Pune City 411002",
    "Flats in Sadashiv Peth 411030",

    // --- INVESTOR TARGETING (Intent Based) ---
    "Luxury property investment Pune",
    "Buy Pune flats from Mumbai",
    "NRI property investment Pune",
    "Pune luxury homes for Mumbai buyers",
    "Holiday homes near Mumbai",
    "Real estate investment for NRIs",

    // --- BRANDED VARIATIONS ---
    "Mantra Burgundy One Residences",
    "1 Residences by Burgundy Mantra",
    "Mayfair by Mantra Pune"
  ],

  // Authorship - REPLACED to generic/descriptive names
  authors: [{ name: 'Mantra Burgundy Best Deals' }],
  creator: 'Pune Luxury Real Estate',
  publisher: 'Mantra Burgundy Best Deals',

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
    locale: 'en_IN',
    url: 'https://mantra-burgundy-best-deals.com/',
    siteName: 'Mantra Burgundy - Project Highlights & Deals',
    title: 'Mantra Burgundy: Marvilla, 1 Residences, Mayfair | Pricing & Availability',
    description:
      // REPLACED: "Authorized Sales Partner" -> "Book Your Site Visit"
      "Request Pricing for Mantra Marvilla Villas, 1 Residences & Mayfair. 3, 4, 5 BHK in Mundhwa. Book Your Site Visit Today.",
    images: [
      {
        url: '/mantrabg',
        width: 1200,
        height: 630,
        alt: 'Mantra Burgundy Luxury Villas and Apartments in Pune',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mantra Burgundy Luxury Line | Villas & Penthouses',
    description: "Check Availability: Premium 3-5 BHK & Penthouses in Mundhwa. Marvilla, 1 Residences & Mayfair.",
    images: ['/mantrabg'],
  },

  verification: {
    google: 'G26jIDFbIHv0bLdWLPC5F9y8BvXYsoL3kzztbZAyCWE',
  },

  alternates: {
    canonical: 'https://mantra-burgundy-best-deals.com/',
  },

  category: 'Real Estate',

  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune',
    'geo.position': '18.5302;73.9262',
    'ICBM': '18.5302, 73.9262',
    'target-locations': '411014, 411028, 411047, 412207, 411060, 411036, 411045, 411057, 411033, 411021, 411038, 411058, 411002, 411030, 411048, 400050, 400052, 400053, 400069, 400049, 400057, 400061, 400064, 400067, 400092, 400013, 400018, 400011, 400025, 400026, 400051, 400601, 400606, 400607, 421204, 421301, 400703, 400705, 400706, 400614, 410210, 410206, 440001, 440010, 440022, 440015, 422001, 422009, 422010, 422222, 431001, 431005, 431210, 110016, 110048, 110057, 560034, 560038, 500034, 500033, 500032, 600020, 600040, 600017'
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAdsId = process.env.GOOGLE_ADS_ID;
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <JsonLd />
        <ContextProvider>{children}</ContextProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {
            ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');`
          }
        </Script>
      </body>
    </html>
  )
}