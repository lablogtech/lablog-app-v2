"use client"

import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import type { PregnancyTestPageContent } from "./types"

type PregnancyTestDetailPageProps = {
  content: PregnancyTestPageContent
}

export default function PregnancyTestDetailPage({ content }: PregnancyTestDetailPageProps) {
  return <TestDetailPage content={content} />
}
