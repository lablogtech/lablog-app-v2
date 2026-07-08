import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { peaceOfMindPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test/peace-of-mind")

export default function PeaceOfMindPaternityPage() {
  return <TestDetailPage content={peaceOfMindPaternityPageContent} />
}
