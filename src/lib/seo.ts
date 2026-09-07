import type { Metadata } from "next"

export type SeoPagePath =
  | "/"
  | "/about-us"
  | "/cancer"
  | "/cancer/brca-genetic-test-philippines"
  | "/cancer/comprehensive-hereditary-cancer-screening-philippines"
  | "/cancer/hboc-screening-philippines"
  | "/cancer/multi-cancer-early-detection-mced"
  | "/corporate"
  | "/faq"
  | "/kidsdna"
  | "/paternity-dna-test"
  | "/paternity-dna-test/family-relationship-testing"
  | "/paternity-dna-test/legal-paternity"
  | "/paternity-dna-test/non-invasive-paternal"
  | "/paternity-dna-test/peace-of-mind"
  | "/petdna"
  | "/pregnancy"
  | "/pregnancy/carrier-screening-philippines"
  | "/pregnancy/newborn-genetic-screening-philippines"
  | "/pregnancy/nipt-philippines"
  | "/privacy-policy"
  | "/screening"

type PageSeoDefinition = {
  title: string
  description: string
  keywords: string[]
}

export const siteUrl = withWww(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lablog.tech")
const socialImage = "/hero.jpg"

function withWww(url: string): string {
  return url.replace(/^(https?:\/\/)(?!www\.)/, "$1www.")
}

const baseKeywords = [
  "online laboratory test Philippines",
  "laboratory test Philippines",
  "genetic testing Philippines",
  "DNA test Philippines",
  "preventive health screening Philippines",
  "nationwide sample collection",
  "home service laboratory test",
  "Lablog",
]

const pageSeo: Record<SeoPagePath, PageSeoDefinition> = {
  "/": {
    title: "Lablog | DNA Testing, NIPT & Genetic Screening Philippines",
    description:
      "Book DNA lab tests online across the Philippines with Lablog. Access NIPT, genetic testing, and confidential results at nationwide collection centers.",
    keywords: [
      "online lab test booking",
      "DNA and genetic screening Philippines",
      "medical laboratory services Philippines",
      "preventive health packages",
    ],
  },
  "/about-us": {
    title: "About Lablog Philippines | Meet Our Founders",
    description:
      "Learn about Lablog, our patient-first approach, trusted laboratory partnerships, and nationwide accessibility for DNA and preventive health testing in the Philippines.",
    keywords: [
      "about Lablog",
      "trusted laboratory partner Philippines",
      "BGI genomics partner Philippines",
      "Eurofins laboratory partner",
    ],
  },
  "/cancer": {
    title: "Cancer Screening & Genetic Test Philippines | Lablog",
    description:
      "Explore BRCA, HBOC, comprehensive hereditary cancer screening, and MCED options to support early risk awareness and long-term health planning in the Philippines.",
    keywords: [
      "cancer genetic screening Philippines",
      "hereditary cancer test Philippines",
      "BRCA test Philippines",
      "MCED Philippines",
    ],
  },
  "/cancer/brca-genetic-test-philippines": {
    title: "BRCA Genetic Test Philippines | Know Your Cancer Risk | Lablog",
    description:
      "Screen BRCA1 and BRCA2 genes to assess hereditary cancer risk with confidential, accessible testing and nationwide collection options in the Philippines.",
    keywords: [
      "BRCA genetic test Philippines",
      "BRCA1 BRCA2 screening",
      "breast ovarian cancer risk test",
      "hereditary breast cancer test",
    ],
  },
  "/cancer/comprehensive-hereditary-cancer-screening-philippines": {
    title: "Comprehensive Hereditary Cancer Screening Philippines | Lablog",
    description:
      "Get broader hereditary cancer risk insights across multiple cancer-associated genes for more informed screening and prevention planning in the Philippines.",
    keywords: [
      "comprehensive hereditary cancer screening",
      "multi gene cancer panel Philippines",
      "family cancer risk test",
      "preventive cancer genomics",
    ],
  },
  "/cancer/hboc-screening-philippines": {
    title: "HBOC Test Philippines | Breast & Ovarian Cancer Test | Lablog",
    description:
      "Evaluate hereditary breast and ovarian cancer risk beyond BRCA using an expanded multi-gene panel with confidential processing in the Philippines.",
    keywords: [
      "HBOC screening Philippines",
      "hereditary breast ovarian cancer test",
      "expanded BRCA panel",
      "genetic cancer risk screening",
    ],
  },
  "/cancer/multi-cancer-early-detection-mced": {
    title: "MCED Blood Test: Multi-Cancer Early Detection Philippines | Lablog",
    description:
      "Screen for cancer-associated signals with a non-invasive MCED blood test in the Philippines to support earlier health conversations and timely follow-up care.",
    keywords: [
      "MCED test Philippines",
      "multi cancer early detection",
      "blood based cancer screening",
      "early cancer signal screening",
    ],
  },
  "/corporate": {
    title: "Corporate APE & Employee Health Screening Check Up Philippines | Lablog",
    description:
      "Offer employee health screening with flexible onsite, clinic-based, or hybrid APE and wellness packages for companies across the Philippines.",
    keywords: [
      "corporate wellness Philippines",
      "APE packages Philippines",
      "employee health screening",
      "onsite annual physical exam",
    ],
  },
  "/faq": {
    title: "FAQ on DNA and Genetic Testing Philippines | Lablog",
    description:
      "Find answers on paternity DNA tests, NIPT, carrier screening, newborn screening, and cancer genetic tests offered by Lablog in the Philippines.",
    keywords: [
      "DNA test FAQ Philippines",
      "NIPT FAQ",
      "paternity DNA FAQ",
      "genetic screening questions",
    ],
  },
  "/kidsdna": {
    title: "Kids DNA Test Philippines | Lablog DNA Blueprint",
    description:
      "Discover your child's DNA-based insights for learning, wellness, nutrition, and development through a secure and guided Kids DNA testing journey.",
    keywords: [
      "kids DNA test Philippines",
      "child genetic insights",
      "DNA blueprint for children",
      "learning and wellness genetics",
    ],
  },
  "/paternity-dna-test": {
    title: "Paternity DNA Test Philippines: 99.9% Accurate Testing | Lablog",
    description:
      "Compare non-legal, legal, prenatal, and family relationship DNA testing options with confidential handling and nationwide collection support across the Philippines.",
    keywords: [
      "paternity DNA test Philippines",
      "legal paternity test",
      "non legal DNA test",
      "family relationship DNA testing",
    ],
  },
  "/paternity-dna-test/family-relationship-testing": {
    title: "Family DNA Test Philippines: Sibling, Grandparent, Avuncular | Lablog",
    description:
      "Choose avuncular, grandparent, sibling, and discreet DNA testing options in the Philippines to clarify biological relationships with specialist guidance.",
    keywords: [
      "family relationship DNA test Philippines",
      "avuncular DNA test",
      "grandparent DNA test",
      "sibling DNA test",
    ],
  },
  "/paternity-dna-test/legal-paternity": {
    title: "Accredited Legal Paternity DNA Testing Philippines | Lablog",
    description:
      "Get court-admissible paternity DNA testing with strict chain-of-custody, identity verification, and secure result release in the Philippines.",
    keywords: [
      "legal paternity DNA test Philippines",
      "court admissible DNA test",
      "chain of custody DNA",
      "immigration DNA test Philippines",
    ],
  },
  "/paternity-dna-test/non-invasive-paternal": {
    title: "Non-Invasive Prenatal Paternity Test Philippines (NIPP) | Lablog",
    description:
      "Access safe prenatal paternity DNA testing (NIPP) in the Philippines using a maternal blood sample and an alleged father's sample, supported by private assistance and accurate laboratory analysis.",
    keywords: [
      "non invasive prenatal paternity test Philippines",
      "prenatal DNA test Philippines",
      "paternity test during pregnancy",
      "safe prenatal paternity",
    ],
  },
  "/paternity-dna-test/peace-of-mind": {
    title: "Non-Legal Peace of Mind Paternity DNA Test Philippines | Lablog",
    description:
      "Get a private non-legal paternity DNA test for personal knowledge with confidential processing, at-home options, and nationwide accessibility in the Philippines.",
    keywords: [
      "peace of mind paternity test",
      "non legal paternity DNA test Philippines",
      "private paternity test",
      "at home DNA test Philippines",
    ],
  },
  "/petdna": {
    title: "Pet DNA Test: Genetic Health Check Screening Philippines | Lablog",
    description:
      "Understand your pet's breed ancestry, inherited health markers, and behavioral traits through a simple cheek swab and comprehensive DNA report.",
    keywords: [
      "pet DNA test Philippines",
      "dog DNA test Philippines",
      "pet breed ancestry test",
      "pet genetic health screening",
    ],
  },
  "/pregnancy": {
    title: "Book Pregnancy Genetic Testing Online | Lablog Philippines",
    description:
      "Explore NIPT, carrier screening, and newborn genetic screening options with confidential reporting and nationwide collection access in the Philippines.",
    keywords: [
      "pregnancy genetic test Philippines",
      "NIPT Philippines",
      "carrier screening Philippines",
      "newborn genetic screening Philippines",
    ],
  },
  "/pregnancy/carrier-screening-philippines": {
    title: "Book Genetic Carrier Screening Online Philippines | Lablog",
    description:
      "Identify inherited genetic variants that parents in the Philippines may carry before or during pregnancy to support informed family planning and clinical discussions.",
    keywords: [
      "carrier screening Philippines",
      "preconception genetic test",
      "inherited condition screening",
      "family planning DNA test",
    ],
  },
  "/pregnancy/newborn-genetic-screening-philippines": {
    title: "Book Newborn Genetic Screening Online Philippines | Lablog",
    description:
      "Screen for selected genetic and metabolic conditions early in the Philippines to support timely follow-up care and healthier long-term outcomes for newborns.",
    keywords: [
      "newborn genetic screening Philippines",
      "newborn DNA test Philippines",
      "early infant genetic screening",
      "newborn metabolic condition screening",
    ],
  },
  "/pregnancy/nipt-philippines": {
    title: "NIPT Screening Philippines: Non-Invasive Prenatal Test | Lablog",
    description:
      "Take NIPT (Non-Invasive Prenatal Test) in the Philippines as early as 10 weeks to screen for common chromosomal conditions through a safe maternal blood test with confidential results.",
    keywords: [
      "NIPT Philippines",
      "non invasive prenatal test",
      "Down syndrome screening pregnancy",
      "prenatal chromosomal screening",
    ],
  },
  "/privacy-policy": {
    title: "Privacy Policy | Lablog Philippines",
    description:
      "Read how Lablog collects, uses, and protects personal, health, and genetic information with strict confidentiality and secure data handling.",
    keywords: [
      "Lablog privacy policy",
      "genetic data privacy Philippines",
      "health information confidentiality",
      "laboratory data protection",
    ],
  },
  "/screening": {
    title: "Preventive Health Screening Packages Philippines | Lablog",
    description:
      "Choose preventive health screening packages including cardiac, diabetes, hormone, and wellness panels with online booking and nationwide access.",
    keywords: [
      "preventive health screening Philippines",
      "wellness package Philippines",
      "cardiac screening package",
      "diabetes and hormone screening",
    ],
  },
}

export const seoPagePaths = Object.keys(pageSeo) as SeoPagePath[]

export function getPageMetadata(path: SeoPagePath): Metadata {
  const page = pageSeo[path]
  const canonicalPath = path === "/" ? "/" : path
  const pageUrl = new URL(canonicalPath, siteUrl).toString()
  const mergedKeywords = Array.from(new Set([...baseKeywords, ...page.keywords]))

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_PH",
      url: pageUrl,
      siteName: "Lablog",
      title: page.title,
      description: page.description,
      images: [
        {
          url: socialImage,
          alt: "Lablog online laboratory testing services in the Philippines",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [socialImage],
    },
    category: "healthcare",
    other: {
      "geo.region": "PH",
      "geo.placename": "Philippines",
      "distribution": "global",
      "target-country": "PH",
    },
  }
}
