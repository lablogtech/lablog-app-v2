import type { Metadata } from "next"
import Script from "next/script"
import CancerPage from "@/components/pages/cancer/CancerPage"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does this test diagnose cancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is a genetic risk assessment that identifies inherited cancer risks.",
      },
    },
    {
      "@type": "Question",
      name: "If I have a mutation, will I definitely get cancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A mutation may increase risk but does not guarantee cancer will develop.",
      },
    },
    {
      "@type": "Question",
      name: "Is this only for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Men can also inherit and pass on certain genetic mutations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a family history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Many people choose preventive screening even without a known family history.",
      },
    },
    {
      "@type": "Question",
      name: "Is this confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All samples and reports are handled under strict confidentiality protocols.",
      },
    },
  ],
}

export default function CancerLandingPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CancerPage />
    </>
  )
}
