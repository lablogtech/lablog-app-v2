"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { comprehensiveCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"

export default function ComprehensiveCancerScreeningPage() {
  return <TestDetailPage content={comprehensiveCancerPageContent} />
}
