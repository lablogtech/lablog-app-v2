"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import type { PaternityTestPageContent } from "./types"

type PaternityTestDetailPageProps = {
  content: PaternityTestPageContent
}

export default function PaternityTestDetailPage({ content }: PaternityTestDetailPageProps) {
  return <TestDetailPage content={content} />
}
