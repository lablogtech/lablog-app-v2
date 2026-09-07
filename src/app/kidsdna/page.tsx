import type { Metadata } from "next"
import Script from "next/script"
import KidsDnaPage from "@/components/pages/kidsdna/KidsDnaPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/kidsdna")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this medical test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. DNA Blueprint is a wellness and educational tool that provides genetic insights and is not a diagnostic medical test.",
      },
    },
    {
      "@type": "Question",
      name: "Does this predict my child's future?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Genetics is only one part of the equation. Environment, education, nutrition, and experiences also play significant roles.",
      },
    },
    {
      "@type": "Question",
      name: "Can this tell me what sport my child will be good at?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It provides tendencies and traits that may help support activities and development, but does not guarantee outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "How is the sample collected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through a simple cheek swab collection.",
      },
    },
    {
      "@type": "Question",
      name: "How long do results take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results are available approximately 8 to 10 weeks after the laboratory receives your sample.",
      },
    },
  ],
}

export default function KidsDnaLandingPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KidsDnaPage />
    </>
  )
}
