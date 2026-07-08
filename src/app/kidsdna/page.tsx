import type { Metadata } from "next"
import KidsDnaPage from "@/components/pages/kidsdna/KidsDnaPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/kidsdna")

export default function KidsDnaLandingPage() {
  return <KidsDnaPage />
}
