import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ramenbet официальный сайт — зеркало и вход в казино',
  description: 'Ramenbet: актуальная информация об официальном сайте, рабочем зеркале и мобильной версии казино. Простая инструкция для входа и ответственный подход к игре.',
  metadataBase: new URL('https://ramenbet8casino.vercel.app/'),
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/ramenbet-favicon.svg', apple: '/ramenbet-favicon.svg' },
  openGraph: {
    title: 'Ramenbet — официальный сайт и рабочее зеркало',
    description: 'Понятная навигация для игроков Ramenbet: официальный сайт, зеркало и мобильный вход.',
    url: 'https://ramenbet8casino.vercel.app/',
    siteName: 'Ramenbet',
    type: 'website',
  },
}

export const viewport: Viewport = { themeColor: '#111715', colorScheme: 'dark', width: 'device-width', initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="author" content="Ramenbet" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
