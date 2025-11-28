import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mantra-burgundy-best-deals.com'

  return [
    {
      url: baseUrl,
      lastModified: "2025-11-30",
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}