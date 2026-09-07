import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { niptPageContent } from "@/components/pages/pregnancy/pregnancyTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy/nipt-philippines")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How early can I take NIPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NIPT can be performed as early as 10 weeks of pregnancy.",
      },
    },
    {
      "@type": "Question",
      name: "Is NIPT safe for my baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Only a blood sample from the mother is required.",
      },
    },
    {
      "@type": "Question",
      name: "Is NIPT accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NIPT has 99% + accuracy for common trisomies such as Down Syndrome, Edwards Syndrome, and Patau Syndrome.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to fast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No fasting is required.",
      },
    },
    {
      "@type": "Question",
      name: "Is NIPT mandatory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. NIPT is an optional prenatal screening test.",
      },
    },
    {
      "@type": "Question",
      name: "Can NIPT determine my baby's gender?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fetal sex determination may be available depending on your selected package and local regulations.",
      },
    },
  ],
}

export default function NiptPhilippinesPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={niptPageContent} />
    </>
  )
}
