"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { mcedCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"

export default function McedPage() {
  return <TestDetailPage content={mcedCancerPageContent} />
}
