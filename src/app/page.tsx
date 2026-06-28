"use client"

import styles from "./page.module.css"
import Hero from "@/components/pages/home/Hero/Hero"
import StatsBar from "@/components/pages/home/StatsBar/StatsBar"
import GeneticsSection from "@/components/pages/home/GeneticsSection/GeneticsSection"
import PreventiveHealthSection from "@/components/pages/home/PreventiveHealthSection/PreventiveHealthSection"
import HowItWorks from "@/components/shared/how-it-works/HowItWorks"
import WhyChooseLablog from "@/components/pages/home/WhyChooseLablog/WhyChooseLablog"
import FAQReviewsSection from "@/components/pages/home/FAQReviewsSection/FAQReviewsSection"
import CorporateWellness from "@/components/pages/home/CorporateWellness/CorporateWellness"
import CollectionCenters from "@/components/pages/home/CollectionCenters/CollectionCenters"
import { Box } from "@mantine/core"

export default function Home() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
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
  )
}
