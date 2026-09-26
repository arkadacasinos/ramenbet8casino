import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://ramenbet8casino.vercel.app/sitemap.xml', host: 'https://ramenbet8casino.vercel.app' }
}
