import type { Metadata } from "next"
import PetDnaPage from "@/components/pages/petdna/PetDnaPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/petdna")

export default function PetDnaLandingPage() {
  return <PetDnaPage />
}
