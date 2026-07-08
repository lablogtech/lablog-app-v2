import type { Metadata } from "next"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { newbornGeneticScreeningPageContent } from "@/components/pages/pregnancy/pregnancyTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy/newborn-genetic-screening-philippines")

export default function NewbornGeneticScreeningPhilippinesPage() {
  return <TestDetailPage content={newbornGeneticScreeningPageContent} />
}
