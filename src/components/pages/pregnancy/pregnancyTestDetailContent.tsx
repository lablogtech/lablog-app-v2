import { Box, Stack, Text } from "@mantine/core"
import {
  IconBabyCarriage,
  IconCalendarEvent,
  IconCheck,
  IconClock,
  IconDna2,
  IconDroplet,
  IconFileCheck,
  IconFlask,
  IconGenderBigender,
  IconHome,
  IconLungs,
  IconMapPin,
  IconMicroscope,
  IconRosetteDiscountCheck,
  IconShieldLock,
  IconTestPipe,
  IconUsers,
} from "@tabler/icons-react"
import type { PregnancyTestPageContent } from "@/components/shared/pregnancy-test-detail/types"

function accreditationMark(label: string, accent: string, subtitle: string) {
  return (
    <Stack justify="center" align="center" h="100%" gap={8}>
      <Box
        style={{
          width: 132,
          height: 132,
          borderRadius: 26,
          border: `2px solid ${accent}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #ffffff 0%, #f7faff 100%)",
        }}
      >
        <Text style={{ color: accent, fontSize: "2.5rem", fontWeight: 800, letterSpacing: "0.08em" }}>{label}</Text>
      </Box>
      <Text ta="center" style={{ color: accent, fontSize: "0.92rem", fontWeight: 800, lineHeight: 1.35 }}>
        {subtitle}
      </Text>
    </Stack>
  )
}

const sharedFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Is this test safe?",
      answer:
        "Yes. Our pregnancy and newborn-focused tests are designed to be safe and minimally invasive using validated collection methods.",
    },
    {
      question: "Can I do this test in the province?",
      answer:
        "Yes. We coordinate sample collection nationwide through accredited partner collection centers and selected home collection options.",
    },
    {
      question: "Are results confidential?",
      answer:
        "Absolutely. Your sample information and report are handled with strict confidentiality and released only to authorized individuals.",
    },
    {
      question: "Will this replace my doctor consultation?",
      answer:
        "No. Genetic screening supports healthcare decisions, but results should always be reviewed with your physician for clinical guidance.",
    },
    {
      question: "How long are turnaround times?",
      answer:
        "Turnaround varies by panel and sample type. Our team confirms expected timelines before collection and keeps you updated until release.",
    },
    {
      question: "Can I ask for guidance before booking?",
      answer:
        "Yes. Our specialists can explain each option and recommend the most suitable test based on your stage and goals.",
    },
  ],
}

const niptFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "How early can I take NIPT?",
      answer: "NIPT can be performed as early as 10 weeks of pregnancy.",
    },
    {
      question: "Is NIPT safe for my baby?",
      answer: "Yes. Only a blood sample from the mother is required.",
    },
    {
      question: "Is NIPT accurate?",
      answer:
        "NIPT has 99%+ accuracy for common trisomies such as Down Syndrome, Edwards Syndrome, and Patau Syndrome.",
    },
    {
      question: "Do I need to fast?",
      answer: "No fasting is required.",
    },
    {
      question: "Is NIPT mandatory?",
      answer: "No. NIPT is an optional prenatal screening test.",
    },
    {
      question: "Can NIPT determine my baby's gender?",
      answer: "Yes. Fetal sex determination may be available depending on your selected package and local regulations.",
    },
  ],
}

const carrierFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Is Carrier Screening only for pregnant women?",
      answer: "No. Carrier Screening can be done before or during pregnancy.",
    },
    {
      question: "Should both parents be tested?",
      answer: "Testing both parents provides the most comprehensive assessment.",
    },
    {
      question: "Does a positive result mean my child will have a disease?",
      answer: "No. Carrier Screening only identifies whether you carry certain inherited genetic variants.",
    },
    {
      question: "Do I need a family history?",
      answer: "No. Anyone can be a carrier, even without a known family history.",
    },
    {
      question: "Is this a diagnostic test?",
      answer: "No. Carrier Screening is a genetic risk assessment and not a diagnostic test.",
    },
    {
      question: "Is the process confidential?",
      answer: "Yes. All information, samples, and results are handled with strict confidentiality.",
    },
  ],
}

export const niptPageContent: PregnancyTestPageContent = {
  backLabel: "Back to Pregnancy Testing",
  backHref: "/pregnancy",
  theme: {
    accent: "#8b4de0",
    accentSoft: "#f5eeff",
    accentBorder: "#e7dcfb",
    accentStrong: "#6e3fc5",
    surface: "#fcf9ff",
    ctaBackground: "#5f2dbf",
    ctaButton: "#df3e9f",
  },
  hero: {
    eyebrow: "Pregnancy - NIPT",
    title: "NIPT Philippines (Non-Invasive Prenatal Test)",
    lead: "A safer way to learn more about your baby's health during pregnancy",
    description:
      "Pregnancy comes with many questions, and every parent wants reassurance that their baby is developing well. Lablog's Non-Invasive Prenatal Test (NIPT) is an advanced prenatal genetic screening test that analyzes fragments of your baby's DNA through a simple blood sample from the mother. There is no risk to the baby, no risk to the pregnancy, and no invasive procedures required. Powered by NIFTY by BGI Genomics, one of the world's leading genomics organizations, our NIPT provides highly accurate screening for common chromosomal conditions early in pregnancy.",
    features: [
      { label: "As Early As", subLabel: "10 Weeks", icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden /> },
      { label: "Simple", subLabel: "Maternal Blood Draw", icon: <IconDroplet size={28} stroke={1.8} aria-hidden /> },
      {
        label: "99%+",
        subLabel: "Trisomy Accuracy",
        icon: <IconRosetteDiscountCheck size={28} stroke={1.8} aria-hidden />,
      },
      { label: "No Risk", subLabel: "To Mother Or Baby", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
      {
        label: "ISO-Certified",
        subLabel: "Partner Laboratory",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Powered By", subLabel: "NIFTY by BGI", icon: <IconDna2 size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Collection",
        subLabel: "Centers Nationwide",
        icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Mobile", subLabel: "Home Service", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      { label: "Strictly", subLabel: "Confidential", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
      { label: "Results In", subLabel: "10-15 Working Days", icon: <IconClock size={28} stroke={1.8} aria-hidden /> },
    ],
    note: "Important: NIPT is a screening test and not a diagnostic test. Any high-risk results should always be discussed with your healthcare provider.",
    imageSrc: "/pages/NIPT page.png",
    imageAlt: "Pregnant mother for NIPT consultation",
    imagePosition: "62% center",
    floatingCard: {
      title: "Who should consider NIPT?",
      description: "NIPT may be suitable for:",
      items: [
        "Women who are 10 weeks pregnant or beyond",
        "First-time mothers seeking additional reassurance",
        "Women aged 35 years and older",
        "Twin pregnancies (depending on eligibility)",
        "Pregnancies with family history concerns",
        "Parents who want early genetic insights",
        "Anyone looking for a safer alternative to invasive testing",
      ],
    },
  },
  process: {
    eyebrow: "How does NIPT work?",
    title: "Simple. Safe. Reassuring.",
    subtitle: "The NIPT process is designed to be straightforward from booking to final report release.",
    steps: [
      {
        title: "Book Your Test",
        description: "Schedule your appointment online or through our specialist team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Blood Sample Collection",
        description: "A simple maternal blood sample is collected. No fasting is required.",
        icon: <IconDroplet size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description: "Advanced sequencing technology analyzes DNA fragments circulating in your bloodstream.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description: "Your confidential report is released securely in around 10-15 working days.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    title: "What can NIPT screen for?",
    cols: { base: 1, sm: 2, lg: 2 },
    items: [
      {
        title: "NIFTY Basic",
        description:
          "Down syndrome (Trisomy 21), Edwards syndrome (Trisomy 18), Patau syndrome (Trisomy 13), and optional fetal sex determination.",
        icon: <IconCheck size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "NIFTY Pro",
        description:
          "Includes everything in NIFTY Basic plus additional screening for sex chromosome abnormalities, selected microdeletion syndromes, additional chromosomal conditions, and optional fetal sex determination.",
        icon: <IconDna2 size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "Important: NIPT is a screening test and not a diagnostic test. Any high-risk results should always be discussed with your healthcare provider.",
  },
  turnaround: {
    eyebrow: "Why parents choose NIPT",
    title: "Early answers with a safe, convenient process",
    description:
      "NIPT provides early answers, greater reassurance, and trusted science to help families make confident decisions throughout pregnancy.",
    visualTitle: "Early Answers",
    visualBody: "Get valuable insights as early as 10 weeks into pregnancy.",
    noteTitle: "Safe & Non-Invasive",
    noteBody: "No needles into the womb and no risk to your baby.",
  },
  results: {
    eyebrow: "Safe, private, and confidential",
    title: "Your privacy matters at every step",
    description:
      "Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
    positive: {
      title: "Greater Reassurance",
      description: "Feel more confident throughout your pregnancy journey.",
    },
    negative: {
      title: "Convenient Process",
      description: "Available through collection centers nationwide and selected home services.",
    },
    sidePanel: {
      eyebrow: "Compassionate support",
      title: "Safe, private, and confidential care you can trust.",
      description:
        "We understand that pregnancy is a deeply personal experience. Our team is here to support you with professionalism, compassion, and care every step of the way.",
      items: [
        "Strictly confidential process",
        "Released only to authorized individuals",
        "Professional and compassionate support",
        "Trusted end-to-end patient care",
      ],
    },
  },
  trust: {
    eyebrow: "Why choose NIFTY by BGI Genomics?",
    title: "Global science, trusted standards, local support",
    description:
      "NIFTY is one of the world's pioneering NIPT technologies and has been helping families globally since 2010. BGI Genomics is a global leader in genomics and precision medicine, trusted by healthcare professionals worldwide.",
    bullets: [
      "One of the world's largest genomics organizations",
      "Millions of NIPT samples processed globally",
      "International presence across numerous countries",
      "Advanced sequencing technology",
      "Multiple internationally recognized quality systems",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: accreditationMark("NATA", "#6f42ce", "World Recognised Accreditation"),
    sideTitle: "Trusted science with nationwide accessibility.",
    sideDescription:
      "Combined with Lablog's local support and nationwide accessibility, families receive a seamless and trusted testing experience.",
    sideItems: [
      "ISO-certified partner laboratory",
      "Collection centers nationwide",
      "Mobile home service in selected areas",
    ],
  },
  faq: niptFaq,
  cta: {
    title: "Take the next step with confidence.",
    description: "Book your NIPT today and get earlier answers for your pregnancy journey.",
    buttonLabel: "Book Your NIPT Now",
    email: "admin@lablog.tech",
  },
}

export const carrierScreeningPageContent: PregnancyTestPageContent = {
  backLabel: "Back to Pregnancy Testing",
  backHref: "/pregnancy",
  theme: {
    accent: "#db3f9f",
    accentSoft: "#fff1f8",
    accentBorder: "#f6d9eb",
    accentStrong: "#b42f82",
    surface: "#fffafd",
    ctaBackground: "#592bb4",
    ctaButton: "#df3f9f",
  },
  hero: {
    eyebrow: "Pregnancy - Carrier Screening",
    title: "Carrier Screening Philippines",
    lead: "Understand the genetic conditions you may pass on to your future child",
    description:
      "Building a family starts long before your baby is born. Many healthy individuals unknowingly carry genetic conditions that can be passed on to their children, even without any symptoms or family history. Lablog's Carrier Screening Test helps identify whether you or your partner carry certain inherited genetic conditions that may affect your future child. This simple DNA test provides valuable information before or during pregnancy, helping families make more informed healthcare decisions with greater confidence. Powered by advanced genomic technology and processed through our ISO-certified partner laboratory, Carrier Screening offers proactive insights for your growing family.",
    features: [
      { label: "Before", subLabel: "Or During Pregnancy", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      { label: "Simple", subLabel: "DNA Collection", icon: <IconTestPipe size={28} stroke={1.8} aria-hidden /> },
      { label: "Multiple", subLabel: "Conditions Screened", icon: <IconDna2 size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Supports",
        subLabel: "Family Planning",
        icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Ideal For",
        subLabel: "Couples & Expecting Parents",
        icon: <IconUsers size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Nationwide", subLabel: "Collection Centers", icon: <IconMapPin size={28} stroke={1.8} aria-hidden /> },
      { label: "Mobile", subLabel: "Home Service", icon: <IconHome size={28} stroke={1.8} aria-hidden /> },
      { label: "ISO-Certified", subLabel: "Laboratory", icon: <IconMicroscope size={28} stroke={1.8} aria-hidden /> },
      { label: "Strictly", subLabel: "Confidential", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
    ],
    note: "Important: Carrier Screening does not diagnose diseases. It identifies whether an individual carries certain inherited genetic variants that may be passed on to their children.",
    imageSrc: "/pages/Carrier Screening.png",
    imageAlt: "Couple reviewing carrier screening options",
    imagePosition: "57% center",
    floatingCard: {
      title: "Who should consider Carrier Screening?",
      description: "Carrier Screening may be suitable for:",
      items: [
        "Couples planning to have a baby",
        "Couples undergoing fertility treatments",
        "Expecting parents",
        "First-time parents",
        "Individuals with a family history of genetic conditions",
        "Anyone who wants proactive health information before starting a family",
      ],
    },
  },
  process: {
    eyebrow: "How does Carrier Screening work?",
    title: "Plan early. Decide confidently.",
    subtitle: "A four-step process to help you understand potential inherited risks.",
    steps: [
      {
        title: "Book Your Test",
        description: "Schedule your appointment online or with our team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "DNA Sample Collection",
        description: "A simple DNA sample is collected through approved sample methods.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description: "Your sample is analyzed for selected inherited variants in our partner laboratory.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description: "A confidential report is released to help guide your next healthcare discussion.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    eyebrow: "What is Carrier Screening?",
    title: "What conditions can Carrier Screening identify?",
    cols: { base: 1, sm: 2, lg: 4 },
    items: [
      {
        title: "Spinal Muscular Atrophy (SMA)",
        description: "A genetic condition that affects muscle strength and movement.",
        icon: <IconDna2 size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Thalassemia",
        description: "An inherited blood disorder that affects hemoglobin production.",
        icon: <IconDroplet size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Cystic Fibrosis",
        description: "A condition that affects the lungs, digestive system, and other organs.",
        icon: <IconLungs size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Additional Inherited Conditions",
        description:
          "Our expanded panel may screen for numerous inherited genetic conditions depending on the selected package.",
        icon: <IconFlask size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "Carrier Screening is a genetic test that identifies whether a person carries a gene associated with specific inherited conditions. Carriers are usually healthy and may not show any signs or symptoms. However, if both parents carry variants associated with the same condition, there may be an increased chance of passing that condition on to their child. Understanding these risks early allows families to discuss available options with their healthcare provider.",
  },
  turnaround: {
    eyebrow: "Why is Carrier Screening important?",
    title: "Knowing your status helps families prepare with confidence",
    description:
      "Many carriers never know they carry a genetic condition because they feel completely healthy. Knowing this information before your child is born can help you plan ahead, understand potential risks, support future family planning, and reduce uncertainty.",
    visualTitle: "Plan Ahead",
    visualBody: "Make informed decisions with your healthcare provider.",
    noteTitle: "Reduce Uncertainty",
    noteBody: "Move forward with greater confidence and peace of mind.",
  },
  results: {
    eyebrow: "Should both parents be tested?",
    title: "Testing both partners provides the most comprehensive assessment",
    description: "Our team can guide you through the process from testing through follow-up next steps.",
    positive: {
      title: "If One Parent Is A Carrier",
      description: "Your healthcare provider may recommend testing the other parent.",
    },
    negative: {
      title: "If Both Parents Are Carriers",
      description: "Your healthcare provider can discuss additional options and next steps.",
    },
    sidePanel: {
      eyebrow: "Who should consider Carrier Screening?",
      title: "Carrier Screening may be suitable for:",
      items: [
        "Couples planning to have a baby",
        "Couples undergoing fertility treatments",
        "Expecting parents",
        "First-time parents",
        "Individuals with a family history of genetic conditions",
        "Anyone who wants proactive health information before starting a family",
      ],
      note: "Even without a family history, anyone can be a carrier.",
    },
  },
  trust: {
    eyebrow: "Why families choose Carrier Screening",
    title: "Proactive insights for informed family decisions",
    description: "Genetic information does not determine your future. It helps you prepare for it.",
    bullets: [
      "Be Proactive: Take action before problems arise",
      "Prepare For The Future: Make more informed decisions together",
      "Build Your Family With Confidence: Knowledge can help reduce uncertainty",
      "Simple & Convenient: Easy sample collection and nationwide availability",
      "Trusted Science: Advanced genomic technology backed by international laboratory standards",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: accreditationMark("NATA", "#bc3a89", "World Recognised Accreditation"),
    sideTitle: "Safe, Private & Confidential",
    sideDescription:
      "We understand that genetic information is personal. Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals. Our team is here to support you with professionalism, compassion, and care every step of the way.",
    sideItems: ["Strict confidentiality", "Authorized-result release only", "Compassionate specialist support"],
  },
  faq: carrierFaq,
  cta: {
    title: "Knowledge today. A healthier tomorrow.",
    description: "Take the first step in protecting the family you're building.",
    buttonLabel: "Book Your Test Now",
    email: "admin@lablog.tech",
  },
}

export const newbornGeneticScreeningPageContent: PregnancyTestPageContent = {
  backLabel: "Back to Pregnancy Testing",
  backHref: "/pregnancy",
  theme: {
    accent: "#7b4ad3",
    accentSoft: "#f3efff",
    accentBorder: "#e4dbf8",
    accentStrong: "#6639bf",
    surface: "#fbf9ff",
    ctaBackground: "#5a2cb4",
    ctaButton: "#de3fa0",
  },
  hero: {
    eyebrow: "Pregnancy - Newborn Screening",
    title: "Newborn Genetic Screening Philippines",
    lead: "Early genetic insights for a healthier start in life",
    description:
      "Give your child the best start possible. Our newborn-focused genetic screening can provide early insights into selected inherited risks so families can make informed decisions with their pediatric care team.",
    features: [
      { label: "Early", subLabel: "Health Insights", icon: <IconBabyCarriage size={28} stroke={1.8} aria-hidden /> },
      { label: "Simple", subLabel: "DNA Sample", icon: <IconTestPipe size={28} stroke={1.8} aria-hidden /> },
      { label: "Multiple", subLabel: "Genetic Conditions", icon: <IconDna2 size={28} stroke={1.8} aria-hidden /> },
      { label: "ISO-Certified", subLabel: "Laboratory", icon: <IconMicroscope size={28} stroke={1.8} aria-hidden /> },
      { label: "Confidential", subLabel: "And Secure", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
    ],
    note: "Important: Newborn Genetic Screening provides health insights and does not replace routine pediatric care or medical consultations.",
    imageSrc: "/pages/Newborn Genetic Screening.png",
    imageAlt: "Newborn baby genetic screening",
    imagePosition: "65% center",
    floatingCard: {
      title: "Early knowledge. Better preparation.",
      description: "Knowledge today can support your child's health and development for years to come.",
      items: [
        "Parents wanting proactive insights",
        "Families with inherited condition history",
        "First-time parents seeking reassurance",
      ],
    },
  },
  process: {
    eyebrow: "How does newborn screening work?",
    title: "Simple steps for early guidance",
    subtitle: "The process is designed for convenience, confidentiality, and dependable laboratory handling.",
    steps: [
      {
        title: "Book Your Test",
        description: "Set your appointment and discuss suitable panel options with our team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Sample Collection",
        description: "A simple sample is collected using approved and child-appropriate collection methods.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description: "Your sample is processed using advanced genomic technologies.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Results",
        description: "A secure and confidential report is released to authorized individuals.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    title: "What can newborn screening help identify?",
    cols: { base: 1, sm: 2, lg: 5 },
    items: [
      {
        title: "Metabolic Disorders",
        description: "Conditions that may affect energy use and body processes.",
        icon: <IconFlask size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Inherited Blood Conditions",
        description: "Selected blood-related inherited conditions based on panel coverage.",
        icon: <IconDroplet size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Endocrine Conditions",
        description: "Conditions linked to hormone and growth function.",
        icon: <IconGenderBigender size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Immune System Conditions",
        description: "Selected immune-related conditions included by the chosen panel.",
        icon: <IconShieldLock size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Additional Genetic Conditions",
        description: "Expanded panels may include other inherited conditions.",
        icon: <IconDna2 size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote: "The conditions screened may vary depending on the selected panel.",
  },
  turnaround: {
    eyebrow: "Why early screening matters",
    title: "Earlier insight can support earlier action",
    description:
      "Screening insights may help families and doctors make proactive decisions, monitor development, and plan follow-up care where appropriate.",
    visualTitle: "Parent-Friendly Guidance",
    visualBody: "Our team supports you from panel selection to report release with clear communication throughout.",
    noteTitle: "Peace of mind",
    noteBody: "Many families value screening for added reassurance while supporting long-term child wellness planning.",
  },
  results: {
    eyebrow: "Understanding newborn screening reports",
    title: "Structured insights for medical discussion",
    description:
      "Reports are designed to provide clear findings that can be reviewed alongside your child's healthcare provider.",
    positive: {
      title: "A finding may require follow-up",
      description:
        "If a screened condition is flagged, your doctor may recommend confirmatory testing or additional assessment.",
    },
    negative: {
      title: "No flagged finding in screened panel",
      description:
        "A clear screen lowers likelihood for tested conditions but does not exclude all possible health conditions.",
    },
    sidePanel: {
      eyebrow: "Why families choose this test",
      title: "Newborn Genetic Screening supports:",
      items: [
        "Earlier medical intervention opportunities",
        "More informed healthcare decisions",
        "Proactive long-term wellness planning",
        "Additional reassurance for parents",
      ],
      note: "Even babies without known family history may benefit from selected screening panels.",
    },
  },
  trust: {
    eyebrow: "Quality and confidence",
    title: "Accredited laboratory processing for dependable results",
    description:
      "Our newborn screening workflow follows strict quality systems and confidentiality standards from collection through report release.",
    bullets: [
      "ISO-certified partner laboratories",
      "Advanced genomic technologies",
      "Quality-controlled processing",
      "Secure and confidential reporting",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: accreditationMark("NATA", "#7349d1", "World Recognised Accreditation"),
    sideTitle: "Built to support families with reliable insights.",
    sideDescription:
      "Every sample is handled through standardized protocols with specialist support available when questions arise.",
    sideItems: ["Confidential handling", "Specialist-assisted journey", "Nationwide accessibility"],
  },
  faq: sharedFaq,
  cta: {
    title: "Give your child a healthier start.",
    description: "Book Newborn Genetic Screening today.",
    buttonLabel: "Book Your Test Now",
    email: "admin@lablog.tech",
  },
}
