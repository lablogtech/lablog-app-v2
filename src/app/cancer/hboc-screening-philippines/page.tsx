import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { hbocCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/hboc-screening-philippines")

export default function HbocScreeningPage() {
  return <TestDetailPage content={hbocCancerPageContent} />
}
