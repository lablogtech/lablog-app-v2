"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { prenatalPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"

export default function NonInvasivePaternalPage() {
  return <TestDetailPage content={prenatalPaternityPageContent} />
}
