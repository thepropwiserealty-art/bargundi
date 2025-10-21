import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import ContextProvider from "@/components/contextProvider";
import './globals.css'

export const metadata: Metadata = {
  title: 'Mantra Burgundy Luxuries Series',
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
        <ContextProvider>
        {children}
        </ContextProvider>
        <Analytics />
      </body>
    </html>
  )
}
