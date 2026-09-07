import type { Metadata } from "next"
import Script from "next/script"
import TestDetailPage from "@/components/shared/test-detail/TestDetailPage"
import { mcedCancerPageContent } from "@/components/pages/cancer/cancerTestDetailContent"
import { getPageMetadata } from "@/lib/seo"

export const metadata: Metadata = getPageMetadata("/cancer/multi-cancer-early-detection-mced")

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MCED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MCED stands for Multi-Cancer Early Detection. It is a blood-based screening test designed to detect signals associated with multiple types of cancer.",
      },
    },
    {
      "@type": "Question",
      name: "How many cancers can MCED detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CancerScreenDx screens for signals associated with over 110 types of cancer.",
      },
    },
    {
      "@type": "Question",
      name: "Is the test painful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only a standard blood draw is required.",
      },
    },
    {
      "@type": "Question",
      name: "Can MCED diagnose cancer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. MCED is a screening tool. Positive findings require confirmation through additional diagnostic testing.",
      },
    },
    {
      "@type": "Question",
      name: "Who should consider MCED?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adults aged 40 and above, those with a family history of cancer, and individuals seeking more comprehensive cancer screening may benefit from MCED.",
      },
    },
  ],
}

export default function McedPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TestDetailPage content={mcedCancerPageContent} />
    </>
  )
}
