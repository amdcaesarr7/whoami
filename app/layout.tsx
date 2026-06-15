import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Special_Elite, Reenie_Beanie, Merriweather } from 'next/font/google'
import './globals.css'

const typewriter = Special_Elite({
  weight: '400',
  variable: '--font-typewriter',
  subsets: ['latin'],
})

const handwritten = Reenie_Beanie({
  weight: '400',
  variable: '--font-handwritten',
  subsets: ['latin'],
})

const body = Merriweather({
  weight: ['300', '400', '700'],
  variable: '--font-body',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'whoami — a notebook found in a backpack',
  description:
    'A forgotten notebook of a student, builder, repair guy, and explorer. Rummage through the pages.',
  generator: 'v0.app',
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
  colorScheme: 'light',
  themeColor: '#e8e0cf',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${typewriter.variable} ${handwritten.variable} ${body.variable} bg-background`}
    >
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
