import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { legalPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test/legal-paternity")

export default function LegalPaternityPage() {
  return <TestDetailPage content={legalPaternityPageContent} />
}
