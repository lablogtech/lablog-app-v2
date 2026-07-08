import type { Metadata } from "next"

type SeoPagePath =
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lablog.tech"
const socialImage = "/hero.jpg"

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
    title: "Online Laboratory Tests in the Philippines",
    description:
      "Book online laboratory and DNA tests in the Philippines with nationwide collection centers, selected home service, and confidential result handling.",
    keywords: [
      "online lab test booking",
      "DNA and genetic screening Philippines",
      "medical laboratory services Philippines",
      "preventive health packages",
    ],
  },
  "/about-us": {
    title: "About Lablog Philippines",
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
    title: "Cancer Genetic Screening Philippines",
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
    title: "BRCA Genetic Test Philippines",
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
    title: "Comprehensive Hereditary Cancer Screening Philippines",
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
    title: "HBOC Screening Philippines",
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
    title: "Multi-Cancer Early Detection (MCED) Philippines",
    description:
      "Screen for cancer-associated signals using a non-invasive MCED blood test designed to support earlier health conversations and follow-up care.",
    keywords: [
      "MCED test Philippines",
      "multi cancer early detection",
      "blood based cancer screening",
      "early cancer signal screening",
    ],
  },
  "/corporate": {
    title: "Corporate Wellness and APE Packages Philippines",
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
    title: "FAQ on DNA and Genetic Testing Philippines",
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
    title: "Kids DNA Blueprint Philippines",
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
    title: "Paternity DNA Test Philippines",
    description:
      "Compare non-legal, legal, prenatal, and family relationship DNA testing options with confidential handling and nationwide collection support.",
    keywords: [
      "paternity DNA test Philippines",
      "legal paternity test",
      "non legal DNA test",
      "family relationship DNA testing",
    ],
  },
  "/paternity-dna-test/family-relationship-testing": {
    title: "Family Relationship DNA Testing Philippines",
    description:
      "Choose avuncular, grandparent, sibling, and discreet DNA testing options to clarify biological relationships with specialist guidance.",
    keywords: [
      "family relationship DNA test Philippines",
      "avuncular DNA test",
      "grandparent DNA test",
      "sibling DNA test",
    ],
  },
  "/paternity-dna-test/legal-paternity": {
    title: "Legal Paternity DNA Test Philippines",
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
    title: "Non-Invasive Prenatal Paternity Test Philippines",
    description:
      "Access safe prenatal paternity DNA testing using maternal blood and alleged father sample, with private support and accurate laboratory analysis.",
    keywords: [
      "non invasive prenatal paternity test Philippines",
      "prenatal DNA test Philippines",
      "paternity test during pregnancy",
      "safe prenatal paternity",
    ],
  },
  "/paternity-dna-test/peace-of-mind": {
    title: "Peace of Mind Paternity DNA Test Philippines",
    description:
      "Get a private non-legal paternity DNA test for personal knowledge with confidential processing, at-home options, and nationwide accessibility.",
    keywords: [
      "peace of mind paternity test",
      "non legal paternity DNA test Philippines",
      "private paternity test",
      "at home DNA test Philippines",
    ],
  },
  "/petdna": {
    title: "Pet DNA Test Philippines",
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
    title: "Pregnancy Genetic Testing Philippines",
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
    title: "Carrier Screening Philippines",
    description:
      "Identify inherited genetic variants that parents may carry before or during pregnancy to support informed family planning and clinical discussions.",
    keywords: [
      "carrier screening Philippines",
      "preconception genetic test",
      "inherited condition screening",
      "family planning DNA test",
    ],
  },
  "/pregnancy/newborn-genetic-screening-philippines": {
    title: "Newborn Genetic Screening Philippines",
    description:
      "Screen for selected genetic and metabolic conditions early to support timely follow-up care and healthier long-term outcomes for newborns.",
    keywords: [
      "newborn genetic screening Philippines",
      "newborn DNA test Philippines",
      "early infant genetic screening",
      "newborn metabolic condition screening",
    ],
  },
  "/pregnancy/nipt-philippines": {
    title: "NIPT Philippines (Non-Invasive Prenatal Test)",
    description:
      "Take NIPT as early as 10 weeks to screen for common chromosomal conditions through a safe maternal blood test with confidential results.",
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
    title: "Preventive Health Screening Packages Philippines",
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

export function getPageMetadata(path: SeoPagePath): Metadata {
  const page = pageSeo[path]
  const canonicalPath = path === "/" ? "/" : path
  const pageUrl = new URL(canonicalPath, siteUrl).toString()
  const mergedKeywords = Array.from(new Set([...baseKeywords, ...page.keywords]))

  return {
    title: page.title,
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
