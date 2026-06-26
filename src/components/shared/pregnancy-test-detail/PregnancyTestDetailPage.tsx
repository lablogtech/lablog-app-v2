"use client"

import PaternityTestDetailPage from "@/components/shared/paternity-test-detail/PaternityTestDetailPage"
import type { PregnancyTestPageContent } from "./types"

type PregnancyTestDetailPageProps = {
  content: PregnancyTestPageContent
}

export default function PregnancyTestDetailPage({ content }: PregnancyTestDetailPageProps) {
  return <PaternityTestDetailPage content={content} />
}
