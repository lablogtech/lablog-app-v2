import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { comprehensiveCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/comprehensive-hereditary-cancer-screening-philippines")

export default function ComprehensiveCancerScreeningPage() {
  return <TestDetailPage content={comprehensiveCancerPageContent} />
}
