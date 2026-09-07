import type { MetadataRoute } from "next"
import { seoPagePaths, siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return seoPagePaths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified,
    changeFrequency: "daily",
    priority: path === "/" ? 1.0 : 0.9,
  }))
}
