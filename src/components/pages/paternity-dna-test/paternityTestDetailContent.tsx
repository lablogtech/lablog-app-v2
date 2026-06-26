import { Box, Stack, Text } from "@mantine/core"
import {
  IconBuilding,
  IconCalendarEvent,
  IconClock,
  IconCreditCard,
  IconDna2,
  IconDroplet,
  IconFileCheck,
  IconFingerprint,
  IconHome,
  IconMapPin,
  IconMicroscope,
  IconPackage,
  IconScale,
  IconShieldLock,
  IconTestPipe,
  IconUserCircle,
  IconUsersGroup,
  IconVenus,
} from "@tabler/icons-react"
import type { PaternityTestPageContent } from "@/components/shared/paternity-test-detail/types"

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

const faq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Is this DNA test confidential?",
      answer:
        "Yes. Your information, samples, and results are handled confidentially and only released to authorized individuals.",
    },
    {
      question: "Can participants be in different locations?",
      answer: "Yes. We can arrange separate sample collections if participants are in different cities or provinces.",
    },
    {
      question: "Can I use these results in court?",
      answer:
        "No. This peace-of-mind paternity DNA test is for personal knowledge only and cannot be used in court, immigration, or legal proceedings.",
    },
    {
      question: "Can we do the DNA test at home?",
      answer:
        "Yes. Depending on your situation, we can provide an at-home DNA test kit or arrange mobile home service in selected areas.",
    },
    {
      question: "How is accuracy determined?",
      answer:
        "Samples are processed through our ISO-certified partner laboratory using advanced DNA analysis technology and strict quality control procedures.",
    },
    {
      question: "Is the test painful?",
      answer:
        "Standard collection is typically done with painless cheek swab samples, making the process simple and minimally invasive.",
    },
  ],
}

export const peaceOfMindPaternityPageContent: PaternityTestPageContent = {
  backLabel: "Back to Paternity DNA Test",
  theme: {
    accent: "#17a567",
    accentSoft: "#eefaf4",
    accentBorder: "#d5efe2",
    accentStrong: "#118a57",
    surface: "#fbfffd",
    ctaBackground: "#0f2e6b",
    ctaButton: "#1eaf68",
  },
  hero: {
    eyebrow: "Non-Legal (Peace of Mind)",
    title: "Paternity DNA Test Philippines",
    lead: "Find Answers with a Private, Accurate, and Confidential DNA Test",
    description:
      "Lablog's Non-Legal (Peace of Mind) Paternity DNA Test provides a safe, discreet, and highly accurate way to determine a biological relationship between a father and child without going through a court process. Whether you're seeking clarity for yourself, your family, or simply want answers, our process is straightforward, confidential, and convenient.",
    features: [
      { label: "99.99%", subLabel: "Accuracy", icon: <IconDna2 size={28} stroke={1.8} aria-hidden /> },
      { label: "Confidential", subLabel: "& Discreet", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
      { label: "Available", subLabel: "Nationwide", icon: <IconMapPin size={28} stroke={1.8} aria-hidden /> },
      { label: "At-Home", subLabel: "DNA Kits", icon: <IconHome size={28} stroke={1.8} aria-hidden /> },
      { label: "Results In", subLabel: "7-10 Working Days", icon: <IconClock size={28} stroke={1.8} aria-hidden /> },
    ],
    note: "Important: This is a non-legal DNA test intended for personal knowledge only and cannot be used in court, immigration, or any legal proceedings.",
    imageSrc: "/hero.jpg",
    imageAlt: "Family DNA testing visual",
    imagePosition: "39% center",
    floatingCard: {
      title: "Collection Options That Fit Your Schedule",
      description: "We offer multiple sample collection options designed for convenience and privacy.",
      items: [
        "Collection center appointments",
        "At-home DNA test kits",
        "Mobile home service in selected areas",
        "Collection centers nationwide",
      ],
    },
  },
  process: {
    eyebrow: "How does the process work?",
    title: "Simple. Private. Convenient.",
    subtitle:
      "Getting a DNA test has never been easier. Our streamlined process can be completed in just four simple steps.",
    steps: [
      {
        title: "Book Your Test",
        description: "Book online or contact our team to arrange your appointment and preferred collection option.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Complete Payment",
        description: "Our team will guide you through the payment process before sample collection.",
        icon: <IconCreditCard size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "DNA Sample Collection",
        description:
          "Choose the collection method that works best for you, including collection center appointments, at-home DNA kits, or mobile home service.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description: "Your confidential DNA report will be securely sent to you once testing is complete.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    title: "Choose the collection option that works best for you",
    cols: { base: 1, sm: 2, lg: 3 },
    items: [
      {
        title: "Collection Center",
        description: "Visit one of our partner collection centers nationwide for quick and easy sample collection.",
        icon: <IconBuilding size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Home DNA Test Kit",
        description:
          "We can ship a DNA collection kit directly to your home, complete with easy-to-follow instructions.",
        icon: <IconPackage size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Mobile Home Service",
        description: "Our authorized specimen collectors can visit your home and assist with sample collection.",
        icon: <IconHome size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "If participants are located in different cities or provinces, we can also arrange separate sample collections.",
  },
  turnaround: {
    eyebrow: "Turnaround Time",
    title: "Results When You Need Them",
    description:
      "We understand that waiting for answers can be stressful. Standard processing time is 7-10 working days from the time the laboratory receives all required samples.",
    visualTitle: "Fast, Guided Scheduling",
    visualBody:
      "We coordinate appointment timing, sample collection, and release updates so the process stays easy to follow.",
    noteTitle: "Express Service",
    noteBody:
      "Express processing may be available for standard mouth swab samples. Please note that express processing is not available for discreet samples.",
  },
  results: {
    eyebrow: "Understanding Your Results",
    title: "Clear. Accurate. Easy to Understand.",
    description: "Our DNA paternity test provides clear and easy-to-understand results.",
    positive: {
      title: "The tested male is confirmed to be the biological father.",
      description: "Results will show a 99.99% probability of paternity or higher.",
    },
    negative: {
      title: "The tested male is excluded as the biological father.",
      description: "Results will show a 0% probability of paternity.",
    },
    sidePanel: {
      eyebrow: "Discreet DNA Testing Options",
      title: "In certain situations, discreet samples may be used for testing.",
      items: ["Hair with roots", "Nail clippings", "Used toothbrush", "Ear swab"],
      note: "Our team first assesses whether the sample is suitable for testing. Some discreet samples may vary in quality depending on sample condition.",
    },
  },
  trust: {
    eyebrow: "Accredited & Trusted",
    title: "Trusted and Accredited Laboratory Testing",
    description:
      "Accuracy matters when it comes to DNA testing. All DNA samples are processed through our ISO-certified partner laboratory, following strict international quality standards and laboratory protocols.",
    bullets: [
      "ISO-certified partner laboratory",
      "Advanced genetic analysis technology",
      "Rigorous quality control procedures",
      "Reliable, highly accurate, and confidential results",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: accreditationMark("NATA", "#2559d6", "World Recognised Accreditation"),
    sideTitle: "High testing standards you can rely on.",
    sideDescription:
      "Our laboratory utilizes advanced DNA analysis technology to ensure reliable, highly accurate, and confidential results. Every sample undergoes strict quality control to maintain the highest testing standards.",
    sideItems: ["Confidential release process", "Responsive specialist support", "Nationwide collection coordination"],
  },
  faq,
  cta: {
    title: "Your privacy is our priority.",
    description: "Book your non-legal paternity DNA test with confidential support from our team.",
    buttonLabel: "Order Your Test Now",
    email: "admin@lablog.tech",
  },
}

export const legalPaternityPageContent: PaternityTestPageContent = {
  backLabel: "Back to Paternity DNA Test",
  theme: {
    accent: "#19a768",
    accentSoft: "#eefaf4",
    accentBorder: "#d5efe2",
    accentStrong: "#118956",
    surface: "#fafcff",
    ctaBackground: "#102d67",
    ctaButton: "#1fb16a",
  },
  hero: {
    eyebrow: "Legal (Court-Admissible)",
    title: "Paternity DNA Test Philippines",
    lead: "Court-Recognized DNA Testing You Can Trust",
    description:
      "Lablog's Legal Paternity DNA Test follows a strict chain-of-custody process to ensure your results are admissible for legal and official use. Unlike a Peace of Mind DNA Test, a Legal DNA Test requires identity verification, authorized specimen collection, and documented handling procedures from start to finish. Whether you're dealing with family disputes, custody matters, immigration requirements, or official documentation, our team will guide you every step of the way.",
    features: [
      { label: "Court", subLabel: "Admissible", icon: <IconScale size={28} stroke={1.8} aria-hidden /> },
      { label: "Strict Chain", subLabel: "Of Custody", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
      { label: "Identity", subLabel: "Verification", icon: <IconFingerprint size={28} stroke={1.8} aria-hidden /> },
      { label: "ISO-Certified", subLabel: "Partner Lab", icon: <IconMicroscope size={28} stroke={1.8} aria-hidden /> },
      { label: "Results In", subLabel: "7-10 Working Days", icon: <IconClock size={28} stroke={1.8} aria-hidden /> },
    ],
    note: "Important: This is a legal DNA test for official and court-related purposes. Self-collection and unsupervised samples are not permitted.",
    imageSrc: "/hero.jpg",
    imageAlt: "Legal paternity DNA test visual",
    imagePosition: "62% center",
    floatingCard: {
      title: "Why choose our Legal Paternity DNA Test?",
      description: "A legally compliant testing process with documented handling from start to finish.",
      items: [
        "Court-admissible results",
        "Authorized specimen collectors",
        "Collection centers nationwide",
        "Mobile home service in selected areas",
        "Confidential and secure process",
      ],
    },
  },
  process: {
    eyebrow: "How does the process work?",
    title: "Simple. Secure. Legally Compliant.",
    subtitle: "Getting a Legal DNA Test is straightforward while maintaining strict legal standards.",
    steps: [
      {
        title: "Book Appointment",
        description: "Contact our team to schedule your legal DNA test appointment.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Identity Verification",
        description:
          "All participants must present valid government-issued identification before sample collection. For minors, the accompanying legal guardian must also provide valid identification.",
        icon: <IconFingerprint size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Authorized DNA Sample Collection",
        description:
          "An authorized specimen collector will supervise and document the process, including identity verification, consent forms, chain-of-custody documentation, and proper sample labeling and sealing.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description: "Samples are securely transported to our ISO-certified partner laboratory for DNA analysis.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Official Results",
        description:
          "Results will be released according to the authorized release protocol and can be used for legal and official purposes.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    eyebrow: "Common reasons for legal paternity testing",
    title: "Our Legal Paternity DNA Test is commonly used for:",
    cols: { base: 2, sm: 2, md: 4, lg: 4 },
    items: [
      { title: "Child Custody Cases", icon: <IconUsersGroup size={32} stroke={1.7} aria-hidden /> },
      { title: "Child Support Disputes", icon: <IconScale size={32} stroke={1.7} aria-hidden /> },
      { title: "Birth Certificate Amendments", icon: <IconFileCheck size={32} stroke={1.7} aria-hidden /> },
      { title: "Immigration Requirements", icon: <IconMapPin size={32} stroke={1.7} aria-hidden /> },
      { title: "Estate and Inheritance Claims", icon: <IconShieldLock size={32} stroke={1.7} aria-hidden /> },
      { title: "Adoption-related Documentation", icon: <IconUserCircle size={32} stroke={1.7} aria-hidden /> },
      { title: "Court Proceedings", icon: <IconScale size={32} stroke={1.7} aria-hidden /> },
      {
        title: "Personal Legal Documentation Requirements",
        icon: <IconFingerprint size={32} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "If you're unsure whether you need a Legal or Non-Legal DNA Test, our team can help determine which option is appropriate for your situation.",
  },
  turnaround: {
    eyebrow: "Turnaround Time",
    title: "Results When You Need Them",
    description:
      "We understand that legal matters are often time-sensitive. Standard processing time is 7-10 working days from the time all required samples are received by the laboratory.",
    visualTitle: "Priority Handling Available",
    visualBody:
      "Our team can advise on urgent-case handling, collection coordination, and documentation timelines for official matters.",
    noteTitle: "Expedited Service",
    noteBody:
      "Expedited processing may be available in certain situations. Please speak with our team for time-sensitive legal cases.",
  },
  results: {
    eyebrow: "Understanding Your Results",
    title: "Clear. Definitive. Court-Recognized.",
    description: "Our legal DNA reports provide clear and definitive conclusions.",
    positive: {
      title: "The tested male is confirmed to be the biological father.",
      description: "Results will indicate a 99.99% probability of paternity or higher.",
    },
    negative: {
      title: "The tested male is excluded as the biological father.",
      description: "Results will indicate a 0% probability of paternity.",
    },
    sidePanel: {
      eyebrow: "What makes a DNA test legally valid?",
      title: "Legal DNA testing follows strict international procedures to preserve the integrity of every sample.",
      items: [
        "Identity verification: all participants are properly identified before collection.",
        "Authorized collection: samples are collected by trained and authorized specimen collectors.",
        "Secure documentation: every sample is documented, labeled, and tracked throughout the process.",
        "Tamper-proof handling: samples are securely packaged and transported to the laboratory.",
        "Confidential release: results are only released to authorized individuals.",
      ],
    },
  },
  trust: {
    eyebrow: "Accredited. Trusted. Reliable.",
    title: "Trusted and Accredited Laboratory Testing",
    description:
      "Accuracy and reliability are essential when legal matters are involved. All DNA samples are processed through our ISO-certified partner laboratory, following internationally recognized quality standards and laboratory protocols.",
    bullets: [
      "ISO-certified partner laboratory",
      "Advanced genetic analysis technology",
      "Rigorous quality control procedures",
      "Highly accurate, secure, and confidential results",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: accreditationMark("NATA", "#2559d6", "World Recognised Accreditation"),
    sideTitle: "Scientific integrity from collection to reporting.",
    sideDescription:
      "Our laboratory utilizes advanced genetic analysis technology to ensure highly accurate, secure, and confidential results. Every sample undergoes rigorous quality control procedures to maintain the highest level of scientific integrity.",
    sideItems: [
      "Documented handling procedures",
      "Confidential release protocol",
      "Specialist guidance for official cases",
    ],
  },
  faq,
  cta: {
    title: "Your case matters. Your results matter.",
    description: "Book your legal paternity DNA test with chain-of-custody support from our team.",
    buttonLabel: "Book Your Appointment",
    email: "admin@lablog.tech",
  },
}

export const prenatalPaternityPageContent: PaternityTestPageContent = {
  backLabel: "Back to Paternity DNA Test",
  theme: {
    accent: "#8d57e8",
    accentSoft: "#f4efff",
    accentBorder: "#e7dafd",
    accentStrong: "#7340cb",
    surface: "#fdfbff",
    ctaBackground: "#102b66",
    ctaButton: "#8d57e8",
  },
  hero: {
    eyebrow: "Non-Invasive",
    title: "Non-Invasive Prenatal Paternity Test Philippines",
    lead: "Determine Paternity Safely During Pregnancy",
    description:
      "Lablog's Non-Invasive Prenatal Paternity (NIPP) Test allows you to determine biological paternity safely and accurately during pregnancy without any risk to the baby. Using advanced DNA technology, the test analyzes fetal DNA naturally circulating in the mother's bloodstream and compares it with the alleged father's DNA sample. Unlike invasive procedures, there are no needles inserted into the womb and no risk to the pregnancy.",
    features: [
      { label: "Safe &", subLabel: "Non-Invasive", icon: <IconShieldLock size={28} stroke={1.8} aria-hidden /> },
      { label: "As Early As", subLabel: "10 Weeks", icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden /> },
      { label: "99.9%", subLabel: "Accuracy", icon: <IconDna2 size={28} stroke={1.8} aria-hidden /> },
      { label: "Maternal", subLabel: "Blood Sample", icon: <IconDroplet size={28} stroke={1.8} aria-hidden /> },
      { label: "Results In", subLabel: "10-15 Working Days", icon: <IconClock size={28} stroke={1.8} aria-hidden /> },
    ],
    note: "Important: This test is intended to establish biological paternity during pregnancy and does not replace any prenatal medical examinations recommended by your doctor.",
    imageSrc: "/hero.jpg",
    imageAlt: "Prenatal paternity DNA testing visual",
    imagePosition: "8% center",
    floatingCard: {
      title: "Why choose our Prenatal Paternity Test?",
      description: "A safe, confidential process designed to give early answers during pregnancy.",
      items: [
        "Safe and non-invasive procedure",
        "Available as early as 10 weeks of pregnancy",
        "Maternal blood sample and alleged father's DNA sample only",
        "Nationwide sample collection available",
        "Strictly confidential process",
      ],
    },
  },
  process: {
    eyebrow: "How does the test work?",
    title: "Simple. Safe. Confidential.",
    subtitle: "Our Non-Invasive Prenatal Paternity Test is simple, safe, and discreet.",
    steps: [
      {
        title: "Book Your Appointment",
        description:
          "Contact our team to schedule your prenatal paternity test. Our specialists will verify your pregnancy timeline and answer any questions before proceeding.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "DNA Sample Collection",
        description:
          "Two samples are required: a simple maternal blood draw to collect fetal DNA fragments in the bloodstream, and a painless cheek swab from the alleged father.",
        icon: <IconDroplet size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description:
          "Our ISO-certified partner laboratory analyzes and compares the DNA profiles to determine biological paternity.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description: "Your confidential results will be securely released to the authorized recipient.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    title: "Who is this test for?",
    cols: { base: 1, sm: 2, lg: 5 },
    items: [
      {
        title: "You want to establish paternity before birth",
        icon: <IconVenus size={32} stroke={1.7} aria-hidden />,
      },
      {
        title: "Parents are in different cities or provinces",
        icon: <IconMapPin size={32} stroke={1.7} aria-hidden />,
      },
      {
        title: "You need early answers during pregnancy",
        icon: <IconClock size={32} stroke={1.7} aria-hidden />,
      },
      {
        title: "You prefer a safer alternative to invasive procedures",
        icon: <IconShieldLock size={32} stroke={1.7} aria-hidden />,
      },
      {
        title: "You want to prepare emotionally, legally, or personally before delivery",
        icon: <IconUsersGroup size={32} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote: "Our team can arrange separate sample collections if participants are in different locations.",
  },
  turnaround: {
    eyebrow: "Turnaround Time",
    title: "Answers When You Need Them",
    description:
      "We understand that waiting for answers can be stressful. Standard processing time is 10-15 working days from the time all required samples are received by the laboratory.",
    visualTitle: "Coordinated Prenatal Support",
    visualBody:
      "Our team keeps you updated throughout the process while coordinating collection timing and confidential release expectations.",
    noteTitle: "Process Support",
    noteBody:
      "Our team will keep you updated throughout the process and confirm the expected laboratory timeline based on your sample set.",
  },
  results: {
    eyebrow: "Understanding Your Results",
    title: "Clear. Definitive. Easy to Understand.",
    description: "Our prenatal paternity reports provide clear and definitive conclusions.",
    positive: {
      title: "The tested male is confirmed to be the biological father.",
      description: "Results will indicate a 99.9% probability of paternity or higher.",
    },
    negative: {
      title: "The tested male is excluded as the biological father.",
      description: "Results will indicate a 0% probability of paternity.",
    },
    sidePanel: {
      eyebrow: "Safe, Private and Confidential",
      title: "We understand that prenatal paternity testing is a sensitive matter.",
      items: [
        "Every client is treated with compassion, professionalism, and complete confidentiality.",
        "Your information, samples, and results are only accessible to authorized individuals.",
      ],
    },
  },
  trust: {
    eyebrow: "Trusted. Accurate. ISO-Certified.",
    title: "Trusted and ISO-Certified Laboratory Testing",
    description:
      "Every sample is processed through our ISO-certified partner laboratory, following strict international quality standards and laboratory protocols.",
    bullets: [
      "Advanced DNA analysis technology",
      "Highly accurate and reliable results",
      "Strict confidentiality and quality control",
    ],
    media: {
      src: "/hero.jpg",
      alt: "Laboratory support visual",
      objectPosition: "19% center",
    },
    badgeTitle: "ISO Certified Laboratory",
    badgeSubtitle: "Validated testing standards for prenatal DNA analysis",
    badgeVisual: accreditationMark("ISO", "#8d57e8", "Certified Laboratory"),
    sideTitle: "Reliable testing standards you can trust.",
    sideDescription:
      "Our advanced DNA analysis technology ensures highly accurate and reliable results while maintaining the highest level of confidentiality and quality control.",
    sideItems: ["Private coordination", "Secure release procedures", "Confidential handling throughout the process"],
  },
  faq,
  cta: {
    title: "Find answers with confidence and peace of mind.",
    description: "Book your non-invasive prenatal paternity test with guided support from our team.",
    buttonLabel: "Book Your Test Now",
    email: "admin@lablog.tech",
  },
}
