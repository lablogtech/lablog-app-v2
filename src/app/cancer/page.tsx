import type { Metadata } from "next"
import CancerPage from "@/components/pages/cancer/CancerPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer")

export default function CancerLandingPage() {
  return <CancerPage />
}
