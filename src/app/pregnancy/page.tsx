import type { Metadata } from "next"
import PregnancyPage from "@/components/pages/pregnancy/PregnancyPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy")

export default function PregnancyLandingPage() {
  return <PregnancyPage />
}
