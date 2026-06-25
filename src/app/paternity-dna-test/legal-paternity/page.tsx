"use client"

import PaternityTestDetailPage from "@/components/shared/paternity-test-detail/PaternityTestDetailPage"
import { legalPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"

export default function LegalPaternityPage() {
  return <PaternityTestDetailPage content={legalPaternityPageContent} />
}
