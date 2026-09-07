import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { brcaCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/brca-genetic-test-philippines")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does a BRCA mutation mean I have cancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BRCA testing identifies genetic risk and does not diagnose cancer.",
      },
    },
    {
      "@type": "Question",
      name: "Is BRCA testing only for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Men can also inherit and pass on BRCA mutations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a family history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Many people choose BRCA testing as part of preventive healthcare.",
      },
    },
    {
      "@type": "Question",
      name: "What sample is required?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple DNA sample is required. Collection methods may vary depending on your selected service.",
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

export default function BrcaGeneticTestPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={brcaCancerPageContent} />
    </>
  )
}
