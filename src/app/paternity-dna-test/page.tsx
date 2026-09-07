import type { Metadata } from "next"
import Script from "next/script"
import PaternityHeroSection from "@/components/pages/paternity-dna-test/PaternityHeroSection"
import PaternityTestOptionsSection from "@/components/pages/paternity-dna-test/PaternityTestOptionsSection"
import AlternativeRelationshipSection from "@/components/pages/paternity-dna-test/AlternativeRelationshipSection"
import TestRecommendationMatrixSection from "@/components/pages/paternity-dna-test/TestRecommendationMatrixSection"
import PaternityProcessSection from "@/components/pages/paternity-dna-test/PaternityProcessSection"
import styles from "./page.module.css"
import { getPageMetadata } from "@/lib/seo"
import { Box } from "@mantine/core"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which DNA test do I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team will walk you through the best option and process details based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Is the DNA test confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team will walk you through the best option and process details based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Can the DNA test be done at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team will walk you through the best option and process details based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Can participants be in different locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team will walk you through the best option and process details based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are the results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team will walk you through the best option and process details based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How long do results take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team will walk you through the best option and process details based on your situation.",
      },
    },
  ],
}

export default function PaternityDnaTestPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PaternityHeroSection />
      <PaternityTestOptionsSection />
      <AlternativeRelationshipSection />
      <TestRecommendationMatrixSection />
      <PaternityProcessSection />
    </Box>
  )
}
