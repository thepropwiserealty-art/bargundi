import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'react-hot-toast';
import './globals.css'

export const metadata: Metadata = {
  title: 'Project',
  description: 'Created with VIT student',
  generator: 'Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Toaster
          position="top-center"  // default positions: top-right, top-left, bottom-right, bottom-left
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
