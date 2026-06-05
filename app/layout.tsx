import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-j-works.vercel.app'),
  title: 'Jecin Elizabeth Rajesh | CS Engineer',
  description: 'Computer Science Engineering student building intelligent systems that put people first. Passionate about AI, data analytics, and user-centric solutions.',
  openGraph: {
    type: 'website',
    title: 'Jecin Elizabeth Rajesh | CS Engineer',
    description: 'Computer Science Engineering student building intelligent systems that put people first.',
    url: 'https://portfolio-j-works.vercel.app',
    siteName: 'Jecin Elizabeth Rajesh',
    images: [
      {
        url: 'https://portfolio-j-works.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jecin Elizabeth Rajesh | CS Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jecin Elizabeth Rajesh | CS Engineer',
    description: 'Computer Science Engineering student building intelligent systems that put people first.',
    images: ['https://portfolio-j-works.vercel.app/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-[#0A0A0A]`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
