import type { Metadata } from "next"
import FaqPage from "@/components/pages/faq/FaqPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/faq")

export default function FaqLandingPage() {
  return <FaqPage />
}
