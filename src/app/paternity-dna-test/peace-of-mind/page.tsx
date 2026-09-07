import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { peaceOfMindPaternityPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test/peace-of-mind")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this DNA test confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your information, samples, and results are handled confidentially and only released to authorized individuals.",
      },
    },
    {
      "@type": "Question",
      name: "Can participants be in different locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can arrange separate sample collections if participants are in different cities or provinces.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use these results in court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This peace-of-mind paternity DNA test is for personal knowledge only and cannot be used in court, immigration, or legal proceedings.",
      },
    },
    {
      "@type": "Question",
      name: "Can we do the DNA test at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Depending on your situation, we can provide an at-home DNA test kit or arrange mobile home service in selected areas.",
      },
    },
    {
      "@type": "Question",
      name: "How is accuracy determined?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samples are processed through our ISO-certified partner laboratory using advanced DNA analysis technology and strict quality control procedures.",
      },
    },
    {
      "@type": "Question",
      name: "Is the test painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard collection is typically done with painless cheek swab samples making the process simple and minimally invasive.",
      },
    },
  ],
}

export default function PeaceOfMindPaternityPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={peaceOfMindPaternityPageContent} />
    </>
  )
}
