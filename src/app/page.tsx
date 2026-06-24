"use client"

import styles from "./page.module.css"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import StatsBar from "@/components/StatsBar/StatsBar"
import GeneticsSection from "@/components/GeneticsSection/GeneticsSection"
import PreventiveHealthSection from "@/components/PreventiveHealthSection/PreventiveHealthSection"
import HowItWorks from "@/components/HowItWorks/HowItWorks"
import WhyChooseLablog from "@/components/WhyChooseLablog/WhyChooseLablog"
import FAQReviewsSection from "@/components/FAQReviewsSection/FAQReviewsSection"
import CorporateWellness from "@/components/CorporateWellness/CorporateWellness"
import CollectionCenters from "@/components/CollectionCenters/CollectionCenters"
import Footer from "@/components/Footer/Footer"
import { Box } from "@mantine/core"

export default function Home() {
  return (
    <Box className={styles.page}>
      <Header />

      <Box component="main">
        <Hero />
        <StatsBar />
        <GeneticsSection />
        <PreventiveHealthSection />
        <WhyChooseLablog />
        <HowItWorks />
        <CollectionCenters />
        <FAQReviewsSection />
        <CorporateWellness />
      </Box>

      <Footer />
    </Box>
  )
}
