import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { carrierScreeningPageContent } from "@/components/pages/pregnancy/pregnancyTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy/carrier-screening-philippines")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Carrier Screening only for pregnant women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Carrier Screening can be done before or during pregnancy.",
      },
    },
    {
      "@type": "Question",
      name: "Should both parents be tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Testing both parents provides the most comprehensive assessment.",
      },
    },
    {
      "@type": "Question",
      name: "Does a positive result mean my child will have a disease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Carrier Screening only identifies whether you carry certain inherited genetic variants.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a family history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Anyone can be a carrier, even without a known family history.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a diagnostic test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Carrier Screening is a genetic risk assessment and not a diagnostic test.",
      },
    },
    {
      "@type": "Question",
      name: "Is the process confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All information, samples, and results are handled with strict confidentiality.",
      },
    },
  ],
}

export default function CarrierScreeningPhilippinesPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={carrierScreeningPageContent} />
    </>
  )
}
