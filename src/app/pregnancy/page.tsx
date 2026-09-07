import type { Metadata } from "next"
import Script from "next/script"
import PregnancyPage from "@/components/pages/pregnancy/PregnancyPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/pregnancy")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are these tests safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The tests are non-invasive or minimally invasive depending on the service selected.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a doctor's referral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Our team can guide you based on your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Can these tests diagnose diseases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of these tests are screening tools that provide valuable health insights but are not diagnostic tests.",
      },
    },
    {
      "@type": "Question",
      name: "Can participants be in different locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For certain tests, yes. Our team can coordinate collections if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Are the results confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All information and results are handled with strict confidentiality.",
      },
    },
  ],
}

export default function PregnancyLandingPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PregnancyPage />
    </>
  )
}
