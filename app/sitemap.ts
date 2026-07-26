import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/brand'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/poker-range-percentages`,
      lastModified: new Date('2026-07-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-5-bet`,
      lastModified: new Date('2026-07-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/suited-vs-offsuit`,
      lastModified: new Date('2026-07-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/set-mining-poker`,
      lastModified: new Date('2026-07-09'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-bankroll-management`,
      lastModified: new Date('2026-05-18'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-starting-hands`,
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-positions`,
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/what-is-a-3-bet-in-poker`,
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/gto-poker-for-beginners`,
      lastModified: new Date('2026-05-29'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-bet-sizing`,
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/preflop-poker-mistakes`,
      lastModified: new Date('2026-06-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/open-limping-poker`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-equity-explained`,
      lastModified: new Date('2026-06-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/isolate-limpers`,
      lastModified: new Date('2026-07-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-hand-notation`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/poker-4-bet`,
      lastModified: new Date('2026-06-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/pot-odds-calculator`,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/range-visualizer`,
      lastModified: new Date('2026-06-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/equity-calculator`,
      lastModified: new Date('2026-06-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/push-fold-chart`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date('2026-06-03'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-05-30'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}
