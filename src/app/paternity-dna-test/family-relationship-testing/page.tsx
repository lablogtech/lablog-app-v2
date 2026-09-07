import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { familyRelationshipTestingPageContent } from "@/components/pages/paternity-dna-test/paternityTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/paternity-dna-test/family-relationship-testing")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I do DNA test without the father?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Alternative tests such as Grandparent, Avuncular, and Sibling DNA tests may be available.",
      },
    },
    {
      "@type": "Question",
      name: "Are discreet samples accepted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Certain discreet samples may be analyzed, although success rates vary.",
      },
    },
    {
      "@type": "Question",
      name: "Which test is the most accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A direct paternity test remains the gold standard whenever possible.",
      },
    },
    {
      "@type": "Question",
      name: "Can participants be in different locations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Separate collections can be arranged nationwide.",
      },
    },
    {
      "@type": "Question",
      name: "Are these tests confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All samples, information, and results are handled with strict confidentiality.",
      },
    },
  ],
}

export default function FamilyRelationshipTestingPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={familyRelationshipTestingPageContent} />
    </>
  )
}
