import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { comprehensiveCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/comprehensive-hereditary-cancer-screening-philippines")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does this diagnose cancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is a genetic risk assessment and not a diagnostic test.",
      },
    },
    {
      "@type": "Question",
      name: "Is this only for people with a family history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Many individuals choose screening as part of their preventive healthcare strategy.",
      },
    },
    {
      "@type": "Question",
      name: "Is this only for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This screening is designed for both men and women.",
      },
    },
    {
      "@type": "Question",
      name: "Which cancers are included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cancers assessed may vary depending on the selected panel.",
      },
    },
    {
      "@type": "Question",
      name: "Is the process confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All information and results are handled with strict confidentiality.",
      },
    },
  ],
}

export default function ComprehensiveCancerScreeningPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={comprehensiveCancerPageContent} />
    </>
  )
}
