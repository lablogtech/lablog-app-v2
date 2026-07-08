import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { brcaCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/brca-genetic-test-philippines")

export default function BrcaGeneticTestPage() {
  return <TestDetailPage content={brcaCancerPageContent} />
}
