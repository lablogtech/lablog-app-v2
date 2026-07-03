"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { familyRelationshipTestingPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"

export default function FamilyRelationshipTestingPage() {
  return <TestDetailPage content={familyRelationshipTestingPageContent} />
}
