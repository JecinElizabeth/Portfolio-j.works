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
  title: 'Jecin Elizabeth Rajesh | CS Engineer',
  description: 'Computer Science Engineering student building intelligent systems that put people first. Passionate about AI, data analytics, and user-centric solutions.',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    title: 'Jecin Elizabeth Rajesh | CS Engineer',
    description: 'Computer Science Engineering student building intelligent systems that put people first.',
    url: 'https://jecinrajesh.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jecin Elizabeth Rajesh | CS Engineer',
    description: 'Computer Science Engineering student building intelligent systems that put people first.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
