import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { familyRelationshipTestingPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test/family-relationship-testing")

export default function FamilyRelationshipTestingPage() {
  return <TestDetailPage content={familyRelationshipTestingPageContent} />
}
