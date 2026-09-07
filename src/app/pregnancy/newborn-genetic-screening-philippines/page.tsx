import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { newbornGeneticScreeningPageContent } from "@/components/pages/pregnancy/pregnancyTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy/newborn-genetic-screening-philippines")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this test safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our pregnancy and newborn-focused tests are designed to be safe and minimally invasive using validated collection methods.",
      },
    },
    {
      "@type": "Question",
      name: "Can I do this test in the province?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We coordinate sample collection nationwide through accredited partner collection centers and selected home collection options.",
      },
    },
    {
      "@type": "Question",
      name: "Are results confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Your sample information and report are handled with strict confidentiality and released only to authorized individuals.",
      },
    },
    {
      "@type": "Question",
      name: "Will this replace my doctor consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Genetic screening supports healthcare decisions, but results should always be reviewed with your physician for clinical guidance.",
      },
    },
    {
      "@type": "Question",
      name: "How long are turnaround times?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Turnaround varies by panel and sample type. Our team confirms excepted timelines before collection and keeps you updated until release.",
      },
    },
    {
      "@type": "Question",
      name: "Can I ask for guidance before booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our specialists can explain each option and recommend the most suitable test based on your stage and goals.",
      },
    },
  ],
}

export default function NewbornGeneticScreeningPhilippinesPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={newbornGeneticScreeningPageContent} />
    </>
  )
}
