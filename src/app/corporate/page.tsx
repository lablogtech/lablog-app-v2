import type { Metadata } from "next"
import CorporatePage from "@/components/pages/corporate/CorporatePage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/corporate")

export default function CorporateLandingPage() {
  return <CorporatePage />
}
