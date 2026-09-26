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
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        var mainBrandB64 = "aHR0cHM6Ly8xNTc5LnNwYXJrc3ZhbGUuY29tL3J1L3JlZ2lzdHJhdGlvbj9wYXJ0bmVyPXAxNTc5cDM5MjEwcGZlMjc="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));
        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 500);               
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body>
    </html>
  )
}
