import type { Metadata } from "next"
import Script from "next/script"
import ScreeningPage from "@/components/pages/screening/ScreeningPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/screening")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How often should I undergo preventive health screening?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many adults benefit from annual screening, but frequency may vary depending on age, family history, and existing conditions.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to fast before my laboratory test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some packages may require fasting. Our team will provide instructions before your appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Are these tests diagnostic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "These packages are screening tools designed to monitor important health markers. Further evaluation may be required if abnormalities are detected.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a home service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Home service is available in selected areas.",
      },
    },
    {
      "@type": "Question",
      name: "Are these packages available nationwide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Collection centers and partner clinics are available nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine multiple packages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team can help customize your screening experience based on your needs.",
      },
    },
  ],
}

export default function ScreeningLandingPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScreeningPage />
    </>
  )
}
