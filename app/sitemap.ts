import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mantra-burgundy-best-deals.com'

  return [
    {
      url: baseUrl,
      lastModified: "2025-11-30", // Or hardcode '2025-11-28' if you manually update content
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}