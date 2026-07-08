import type { Metadata } from "next"
import AboutUsPage from "@/components/pages/about-us/AboutUsPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/about-us")

export default function AboutUsLandingPage() {
  return <AboutUsPage />
}
