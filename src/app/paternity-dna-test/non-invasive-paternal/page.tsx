"use client"

import PaternityTestDetailPage from "@/components/shared/paternity-test-detail/PaternityTestDetailPage"
import { prenatalPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"

export default function NonInvasivePaternalPage() {
  return <PaternityTestDetailPage content={prenatalPaternityPageContent} />
}
