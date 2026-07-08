import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { prenatalPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test/non-invasive-paternal")

export default function NonInvasivePaternalPage() {
  return <TestDetailPage content={prenatalPaternityPageContent} />
}
