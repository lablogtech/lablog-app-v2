"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { hbocCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"

export default function HbocScreeningPage() {
  return <TestDetailPage content={hbocCancerPageContent} />
}
