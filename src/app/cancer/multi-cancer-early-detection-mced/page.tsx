import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { mcedCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/multi-cancer-early-detection-mced")

export default function McedPage() {
  return <TestDetailPage content={mcedCancerPageContent} />
}
