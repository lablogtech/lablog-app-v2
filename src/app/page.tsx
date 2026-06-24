"use client"

import styles from "./page.module.css"
import Header from "@/components/Header/Header"
import Hero from "@/components/pages/home/Hero/Hero"
import StatsBar from "@/components/pages/home/StatsBar/StatsBar"
import GeneticsSection from "@/components/pages/home/GeneticsSection/GeneticsSection"
import PreventiveHealthSection from "@/components/pages/home/PreventiveHealthSection/PreventiveHealthSection"
import HowItWorks from "@/components/shared/how-it-works/HowItWorks"
import WhyChooseLablog from "@/components/pages/home/WhyChooseLablog/WhyChooseLablog"
import FAQReviewsSection from "@/components/pages/home/FAQReviewsSection/FAQReviewsSection"
import CorporateWellness from "@/components/pages/home/CorporateWellness/CorporateWellness"
import CollectionCenters from "@/components/pages/home/CollectionCenters/CollectionCenters"
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
