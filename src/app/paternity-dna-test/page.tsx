"use client"

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import PaternityHeroSection from "@/components/pages/paternity-dna-test/PaternityHeroSection"
import PaternityTestOptionsSection from "@/components/pages/paternity-dna-test/PaternityTestOptionsSection"
import AlternativeRelationshipSection from "@/components/pages/paternity-dna-test/AlternativeRelationshipSection"
import TestRecommendationMatrixSection from "@/components/pages/paternity-dna-test/TestRecommendationMatrixSection"
import PaternityProcessSection from "@/components/pages/paternity-dna-test/PaternityProcessSection"
import styles from "./page.module.css"
import { Box } from "@mantine/core"

export default function PaternityDnaTestPage() {
  return (
    <Box className={styles.page}>
      <Header />

      <Box component="main">
        <PaternityHeroSection />
        <PaternityTestOptionsSection />
        <AlternativeRelationshipSection />
        <TestRecommendationMatrixSection />
        <PaternityProcessSection />
      </Box>

      <Footer />
    </Box>
  )
}
