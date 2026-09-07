import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { hbocCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/hboc-screening-philippines")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is HBOC the same as BRCA testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. BRCA testing only screens BRCA1 and BRCA2, while HBOC screening evaluates multiple genes associated with hereditary breast and ovarian cancer syndromes.",
      },
    },
    {
      "@type": "Question",
      name: "Does this diagnose cancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. HBOC is a genetic risk assessment tool and not a diagnostic test.",
      },
    },
    {
      "@type": "Question",
      name: "Is this only for women?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Men can also inherit and pass on hereditary cancer-related gene mutations.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a family history?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A family history may increase the value of screening, but some individuals choose preventive genetic testing even without one.",
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

export default function HbocScreeningPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={hbocCancerPageContent} />
    </>
  )
}
