"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { legalPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"

export default function LegalPaternityPage() {
  return <TestDetailPage content={legalPaternityPageContent} />
}
