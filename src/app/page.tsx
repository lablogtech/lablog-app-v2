import type { Metadata } from "next"
import Script from "next/script"
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
import { getPageMetadata } from "@/lib/seo"
import { Box } from "@mantine/core"

export const metadata: Metadata = getPageMetadata("/")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How accurate is a paternity DNA test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our paternity DNA tests are highly accurate and are performed using accredited laboratory methods. Results are reviewed by trained professionals before release.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I do NIPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NIPT can typically be done starting at 10 weeks of pregnancy. Our team can help determine the best timing based on your needs and physician's recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between legal and non-legal DNA testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legal DNA testing follows a strict chain-of-custody process and is suitable for court, immigration, and official documentation. Non-legal testing is for personal knowledge only.",
      },
    },
    {
      "@type": "Question",
      name: "Is DNA testing confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle all samples and results with strict confidentiality and secure data handling protocols from collection to release.",
      },
    },
  ],
}

export default function Home() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
