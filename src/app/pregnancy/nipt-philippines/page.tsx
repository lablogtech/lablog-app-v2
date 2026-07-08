import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { niptPageContent } from "@/components/pages/pregnancy/pregnancyTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy/nipt-philippines")

export default function NiptPhilippinesPage() {
  return <TestDetailPage content={niptPageContent} />
}
