import type { Metadata } from "next"
import PaternityHeroSection from "@/components/pages/paternity-dna-test/PaternityHeroSection"
import PaternityTestOptionsSection from "@/components/pages/paternity-dna-test/PaternityTestOptionsSection"
import AlternativeRelationshipSection from "@/components/pages/paternity-dna-test/AlternativeRelationshipSection"
import TestRecommendationMatrixSection from "@/components/pages/paternity-dna-test/TestRecommendationMatrixSection"
import PaternityProcessSection from "@/components/pages/paternity-dna-test/PaternityProcessSection"
import styles from "./page.module.css"
import { getPageMetadata } from "@/lib/seo"
import { Box } from "@mantine/core"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test")

export default function PaternityDnaTestPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <PaternityHeroSection />
      <PaternityTestOptionsSection />
      <AlternativeRelationshipSection />
      <TestRecommendationMatrixSection />
      <PaternityProcessSection />
    </Box>
  )
}
