import type { Metadata } from "next"
import ScreeningPage from "@/components/pages/screening/ScreeningPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/screening")

export default function ScreeningLandingPage() {
  return <ScreeningPage />
}
