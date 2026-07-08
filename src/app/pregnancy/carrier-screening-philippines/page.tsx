import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { carrierScreeningPageContent } from "@/components/pages/pregnancy/pregnancyTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy/carrier-screening-philippines")

export default function CarrierScreeningPhilippinesPage() {
  return <TestDetailPage content={carrierScreeningPageContent} />
}
