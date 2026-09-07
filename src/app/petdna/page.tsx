import type { Metadata } from "next"
import Script from "next/script"
import PetDnaPage from "@/components/pages/petdna/PetDnaPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/petdna")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this available for both dogs and cats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PetDNA is available for both dogs and cats.",
      },
    },
    {
      "@type": "Question",
      name: "Does this diagnose diseases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. PetDNA is a wellness and genetic insight tool and not a diagnostic test.",
      },
    },
    {
      "@type": "Question",
      name: "How is this sample collected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple cheek swab is used.",
      },
    },
    {
      "@type": "Question",
      name: "Can mixed breed pets be tested?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mixed breed pets are excellent candidates for DNA testing.",
      },
    },
    {
      "@type": "Question",
      name: "Will this tell me exactly what diseases my pet will get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It provides information about genetic tendencies and inherited risks, not certainty.",
      },
    },
    {
      "@type": "Question",
      name: "Are the reports easy to understand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Reports are designed to be user-friendly and actionable.",
      },
    },
  ],
}

export default function PetDnaLandingPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PetDnaPage />
    </>
  )
}
