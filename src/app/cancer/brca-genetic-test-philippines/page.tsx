"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { brcaCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"

export default function BrcaGeneticTestPage() {
  return <TestDetailPage content={brcaCancerPageContent} />
}
