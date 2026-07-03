import {
  IconCalendarEvent,
  IconCertificate,
  IconClockHour4,
  IconDna2,
  IconDroplet,
  IconFileCheck,
  IconFlask,
  IconHeartRateMonitor,
  IconMapPin,
  IconMicroscope,
  IconRibbonHealth,
  IconSearch,
  IconShieldLock,
  IconStethoscope,
  IconTarget,
  IconTestPipe,
  IconUsers,
} from "@tabler/icons-react"
import type { TestPageContent } from "@/components/shared/test-detail/types"
import AccreditationBadge from "@/components/shared/accreditation-badge/AccreditationBadge"

const brcaFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Does a BRCA mutation mean I have cancer?",
      answer: "No. BRCA testing identifies genetic risk and does not diagnose cancer.",
    },
    {
      question: "Is BRCA testing only for women?",
      answer: "No. Men can also inherit and pass on BRCA mutations.",
    },
    {
      question: "Do I need a family history?",
      answer: "Not necessarily. Many people choose BRCA testing as part of preventive healthcare.",
    },
    {
      question: "What sample is required?",
      answer: "A simple DNA sample is required. Collection methods may vary depending on your selected service.",
    },
    {
      question: "Is the process confidential?",
      answer: "Yes. All information and results are handled with strict confidentiality.",
    },
  ],
}

const hbocFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Is HBOC the same as BRCA testing?",
      answer:
        "No. BRCA testing only screens BRCA1 and BRCA2, while HBOC screening evaluates multiple genes associated with hereditary breast and ovarian cancer syndromes.",
    },
    {
      question: "Does this diagnose cancer?",
      answer: "No. HBOC is a genetic risk assessment tool and not a diagnostic test.",
    },
    {
      question: "Is this only for women?",
      answer: "No. Men can also inherit and pass on hereditary cancer-related gene mutations.",
    },
    {
      question: "Do I need a family history?",
      answer:
        "A family history may increase the value of screening, but some individuals choose preventive genetic testing even without one.",
    },
    {
      question: "Is the process confidential?",
      answer: "Yes. All information and results are handled with strict confidentiality.",
    },
  ],
}

const mcedFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "What is MCED?",
      answer:
        "MCED stands for Multi-Cancer Early Detection. It is a blood-based screening test designed to detect signals associated with multiple types of cancer.",
    },
    {
      question: "How many cancers can MCED detect?",
      answer: "CancerScreenDx screens for signals associated with over 110 types of cancer.",
    },
    {
      question: "Is the test painful?",
      answer: "Only a standard blood draw is required.",
    },
    {
      question: "Can MCED diagnose cancer?",
      answer:
        "No. MCED is a screening tool. Positive findings require confirmation through additional diagnostic testing.",
    },
    {
      question: "Who should consider MCED?",
      answer:
        "Adults aged 40 and above, those with a family history of cancer, and individuals seeking more comprehensive cancer screening may benefit from MCED.",
    },
  ],
}

const comprehensiveFaq = {
  title: "Frequently Asked Questions",
  items: [
    {
      question: "Does this diagnose cancer?",
      answer: "No. This is a genetic risk assessment and not a diagnostic test.",
    },
    {
      question: "Is this only for people with a family history?",
      answer: "No. Many individuals choose screening as part of their preventive healthcare strategy.",
    },
    {
      question: "Is this only for women?",
      answer: "No. This screening is designed for both men and women.",
    },
    {
      question: "Which cancers are included?",
      answer: "The cancers assessed may vary depending on the selected panel.",
    },
    {
      question: "Is the process confidential?",
      answer: "Yes. All information and results are handled with strict confidentiality.",
    },
  ],
}

export const brcaCancerPageContent: TestPageContent = {
  backLabel: "Back to Cancer Screening",
  backHref: "/cancer",
  theme: {
    accent: "#d3398d",
    accentSoft: "#fff0f7",
    accentBorder: "#f7d9ea",
    accentStrong: "#b72f79",
    surface: "#fffafd",
    ctaBackground: "#1b2a8f",
    ctaButton: "#d3398d",
  },
  hero: {
    eyebrow: "Cancer - BRCA Genetic Test",
    title: "BRCA Genetic Test Philippines",
    lead: "Understand Your Risk. Take Control Of Your Future.",
    description:
      "Breast and ovarian cancers are among the most common cancers affecting women worldwide. While many cases occur by chance, some are linked to inherited genetic changes that can be passed down through families. Lablog's BRCA Genetic Test screens the BRCA1 and BRCA2 genes, which are associated with an increased risk of hereditary breast, ovarian, prostate, pancreatic, and certain other cancers. Knowing your genetic risk early can help you and your healthcare provider make more informed decisions about screening, prevention, and long-term health planning. Using advanced genomic technology and our ISO-certified partner laboratory, Lablog provides accessible and confidential BRCA genetic testing throughout the Philippines.",
    features: [
      { label: "Screens", subLabel: "BRCA1 and BRCA2 genes", icon: <IconDna2 size={28} stroke={1.8} aria-hidden /> },
      { label: "Suitable for", subLabel: "both men and women", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      {
        label: "One simple",
        subLabel: "DNA sample required",
        icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Supports preventive",
        subLabel: "healthcare planning",
        icon: <IconHeartRateMonitor size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Nationwide", subLabel: "collection centers", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Mobile home service",
        subLabel: "selected areas",
        icon: <IconStethoscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "ISO-certified",
        subLabel: "partner laboratory",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Powered by",
        subLabel: "BGI Genomics expertise",
        icon: <IconFlask size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Strictly",
        subLabel: "confidential process",
        icon: <IconShieldLock size={28} stroke={1.8} aria-hidden />,
      },
    ],
    note: "Important: BRCA testing is a genetic risk assessment tool and does not diagnose cancer.",
    imageSrc: "/pages/Hero page.png",
    imageAlt: "BRCA screening consultation",
    imagePosition: "62% center",
    floatingCard: {
      eyebrow: "Who Should Consider BRCA Testing?",
      title: "BRCA Genetic Testing may be suitable if:",
      items: [
        "You have a family history of breast cancer",
        "You have a family history of ovarian cancer",
        "A close relative was diagnosed before age 50",
        "Multiple family members have had cancer",
        "A male relative has had breast cancer",
        "You want to be proactive about your health",
        "Your doctor recommended genetic testing",
      ],
      note: "Even individuals without a known family history may choose BRCA testing as part of a preventive healthcare strategy.",
    },
  },
  process: {
    eyebrow: "How does the process work?",
    title: "How Does BRCA Testing Work?",
    subtitle: "Simple, guided, and confidential from booking to result release.",
    steps: [
      {
        title: "Book Your Test",
        description: "Schedule your appointment with our team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "DNA Sample Collection",
        description:
          "A simple DNA sample is collected. Collection options may include collection centers nationwide, home DNA kits, and mobile home service in selected areas.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description:
          "Your DNA is analyzed for clinically significant variants within the BRCA1 and BRCA2 genes using advanced genomic technologies.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description: "Your confidential report will be securely released to authorized individuals.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    eyebrow: "What Is BRCA?",
    title: "What Cancers Are Associated With BRCA?",
    cols: { base: 1, sm: 2, lg: 5 },
    items: [
      {
        title: "Breast Cancer",
        description: "One of the most common cancers linked to BRCA mutations.",
        icon: <IconRibbonHealth size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Ovarian Cancer",
        description: "BRCA mutations may significantly increase lifetime risk.",
        icon: <IconStethoscope size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Male Breast Cancer",
        description: "Although less common, men can also inherit BRCA mutations.",
        icon: <IconUsers size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Prostate Cancer",
        description: "Certain BRCA mutations may increase prostate cancer risk.",
        icon: <IconHeartRateMonitor size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Pancreatic Cancer",
        description: "Some hereditary pancreatic cancers may be associated with BRCA mutations.",
        icon: <IconFlask size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "BRCA stands for Breast Cancer Susceptibility Gene. Everyone is born with BRCA1 and BRCA2 genes that help repair damaged DNA and protect cells. Inherited changes in these genes may increase a person's lifetime cancer risk. Having a BRCA mutation does not mean you will definitely develop cancer, but it may increase your risk compared to the general population.",
  },
  turnaround: {
    eyebrow: "Why Early Genetic Awareness Matters",
    title: "Knowing your genetic risk can help support future healthcare decisions.",
    description:
      "More informed decisions can help reduce uncertainty and support long-term planning. Your genes are not your destiny. They are information that can help you prepare.",
    visualTitle: "Earlier Screening",
    visualBody: "Your doctor may recommend earlier or more frequent screening.",
    noteTitle: "Better Prevention Strategies",
    noteBody: "Lifestyle, surveillance, and medical recommendations may be personalized.",
  },
  results: {
    eyebrow: "More Benefits",
    title: "Additional value of early BRCA awareness",
    description: "Your results may also support family planning and long-term preventive care decisions.",
    positive: {
      title: "Family Awareness",
      description: "Your results may also provide important information for family members.",
    },
    negative: {
      title: "More Informed Decisions",
      description: "Knowledge can help reduce uncertainty and support long-term planning.",
    },
    sidePanel: {
      eyebrow: "What to do next",
      title: "Use your BRCA report to support preventive healthcare planning",
      description:
        "Results should always be interpreted with your healthcare provider alongside personal and family history.",
      items: [
        "Discuss recommended screening schedules",
        "Explore preventive options based on risk profile",
        "Review relevance for family members",
        "Build a long-term health plan",
      ],
    },
  },
  trust: {
    eyebrow: "Why Choose BGI Genomics?",
    title: "Powered by global genomics leadership and strict quality systems",
    description:
      "Lablog partners with BGI Genomics, a global leader in genomics and precision medicine. BGI is recognized internationally for advancing genetic science and supporting healthcare systems worldwide through innovative sequencing technologies.",
    bullets: [
      "Every sample is processed through our ISO-certified partner laboratory",
      "Strict international laboratory standards",
      "Quality assurance protocols for reliable results",
      "Advanced genomic technologies and precision workflows",
    ],
    media: {
      src: "/hero.jpg",
      alt: "Safe and confidential genetic testing process",
      objectPosition: "60% center",
    },
    badgeTitle: "Safe, Private & Confidential",
    badgeSubtitle: "Handled with strict confidentiality",
    badgeVisual: <AccreditationBadge type="NATA" />,
    sideTitle: "Your privacy is always protected",
    sideDescription:
      "We understand that genetic information is deeply personal. Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
    sideItems: [
      "Strictly confidential process",
      "Released only to authorized individuals",
      "Professional, compassionate support",
    ],
  },
  faq: brcaFaq,
  cta: {
    title: "Understand your BRCA risk with confidence.",
    description: "Book your BRCA Genetic Test and take a proactive step toward long-term health planning.",
    buttonLabel: "Book BRCA Genetic Test",
    email: "admin@lablog.tech",
  },
}

export const hbocCancerPageContent: TestPageContent = {
  backLabel: "Back to Cancer Screening",
  backHref: "/cancer",
  theme: {
    accent: "#7f4ad4",
    accentSoft: "#f4eeff",
    accentBorder: "#e6dcfb",
    accentStrong: "#6538b8",
    surface: "#fdfbff",
    ctaBackground: "#1d2f92",
    ctaButton: "#d3398d",
  },
  hero: {
    eyebrow: "Cancer - HBOC Screening",
    title: "Hereditary Breast & Ovarian Cancer (HBOC) Screening Philippines",
    lead: "Go Beyond BRCA And Better Understand Your Family's Cancer Risk",
    description:
      "Not all hereditary breast and ovarian cancers are linked to BRCA1 and BRCA2 alone. Some families may carry genetic changes in other cancer-associated genes that can also increase the risk of developing certain cancers. Lablog's Hereditary Breast & Ovarian Cancer (HBOC) Screening is an expanded genetic screening panel designed to evaluate multiple genes associated with hereditary breast and ovarian cancer syndromes. By understanding your inherited risk earlier, you and your healthcare provider can make more informed decisions about future screening, prevention, and long-term health planning. Using advanced genomic technology and our ISO-certified partner laboratory, Lablog provides accessible and confidential hereditary cancer screening throughout the Philippines.",
    features: [
      {
        label: "Expanded hereditary",
        subLabel: "breast and ovarian panel",
        icon: <IconDna2 size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Screens multiple",
        subLabel: "clinically relevant genes",
        icon: <IconFlask size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Suitable for", subLabel: "both men and women", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Supports preventive",
        subLabel: "healthcare planning",
        icon: <IconHeartRateMonitor size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "One simple",
        subLabel: "DNA sample required",
        icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Nationwide", subLabel: "collection centers", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Mobile home service",
        subLabel: "selected areas",
        icon: <IconStethoscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "ISO-certified",
        subLabel: "partner laboratory",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Powered by",
        subLabel: "BGI Genomics expertise",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Strictly",
        subLabel: "confidential process",
        icon: <IconShieldLock size={28} stroke={1.8} aria-hidden />,
      },
    ],
    note: "Important: HBOC Screening is a genetic risk assessment tool and does not diagnose cancer.",
    imageSrc: "/pages/HBOC.png",
    imageAlt: "HBOC screening family consultation",
    imagePosition: "58% center",
    floatingCard: {
      eyebrow: "Who Should Consider HBOC Screening?",
      title: "HBOC Screening may be suitable if:",
      items: [
        "Multiple relatives have had breast cancer",
        "Multiple relatives have had ovarian cancer",
        "Family members were diagnosed at a young age",
        "Cancer has occurred across several generations",
        "There are multiple cancer types within your family",
        "You want broader insights beyond BRCA testing",
        "Your healthcare provider recommended expanded screening",
      ],
      note: "Even men may benefit from hereditary cancer screening.",
    },
  },
  process: {
    eyebrow: "How does the process work?",
    title: "How Does HBOC Screening Work?",
    subtitle: "Simple, guided, and secure from booking to result release.",
    steps: [
      {
        title: "Book Your Test",
        description: "Schedule your appointment with our team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "DNA Sample Collection",
        description:
          "A simple DNA sample is collected. Collection options may include collection centers nationwide, home DNA kits, and mobile home service available in selected areas.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description:
          "Your DNA is analyzed using advanced genomic technologies to identify clinically significant variants associated with hereditary breast and ovarian cancer syndromes.",
        icon: <IconFlask size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description:
          "Your confidential report will be securely released to authorized individuals. Our team will guide you through understanding your results and potential next steps.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    eyebrow: "What Is HBOC?",
    title: "What can HBOC screening help assess?",
    cols: { base: 1, sm: 2, lg: 5 },
    items: [
      {
        title: "Breast Cancer",
        description: "One of the most commonly inherited cancers associated with hereditary syndromes.",
        icon: <IconRibbonHealth size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Ovarian Cancer",
        description: "Early awareness may help support proactive healthcare planning.",
        icon: <IconStethoscope size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Prostate Cancer",
        description: "Certain hereditary cancer genes may also increase risk in men.",
        icon: <IconHeartRateMonitor size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Pancreatic Cancer",
        description: "Some inherited syndromes are associated with pancreatic cancer risk.",
        icon: <IconFlask size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Additional Hereditary Cancer Risks",
        description: "Expanded panels may include other clinically significant genes related to hereditary cancers.",
        icon: <IconDna2 size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "HBOC stands for Hereditary Breast and Ovarian Cancer Syndrome. It refers to inherited genetic changes that may increase a person's lifetime risk of developing certain cancers. While BRCA1 and BRCA2 are the most recognized genes, other genes may also contribute to hereditary cancer risk. Expanded screening helps provide a broader picture of your inherited cancer predisposition.",
  },
  turnaround: {
    eyebrow: "Why Early Genetic Awareness Matters",
    title: "Knowing your genetic risk may help support future healthcare decisions.",
    description:
      "Knowledge can reduce uncertainty and help guide future decisions. Your genes do not determine your destiny. They provide information that can help you prepare.",
    visualTitle: "More Personalized Screening",
    visualBody: "Doctors may recommend tailored screening plans.",
    noteTitle: "Earlier Monitoring",
    noteBody: "Certain individuals may benefit from earlier surveillance.",
  },
  results: {
    eyebrow: "BRCA vs HBOC",
    title: "BRCA vs HBOC: What's The Difference?",
    description: "If you're unsure which test is appropriate, our specialists can guide you.",
    positive: {
      title: "BRCA Genetic Test",
      description:
        "Focuses on BRCA1 and BRCA2 only. Focused risk assessment. Ideal for straightforward family histories. Entry-level hereditary cancer screening.",
    },
    negative: {
      title: "HBOC Screening",
      description:
        "Evaluates multiple hereditary cancer genes. Expanded risk assessment. Ideal for complex or multiple family histories. Broader hereditary cancer evaluation.",
    },
    sidePanel: {
      eyebrow: "Additional Benefits",
      title: "What else can early HBOC awareness support?",
      items: [
        "Family Awareness: results may provide important information for family members",
        "Better Prevention Strategies: long-term health plans can become more personalized",
        "Greater Peace Of Mind: knowledge helps reduce uncertainty",
        "Future-ready decisions with your healthcare provider",
      ],
    },
  },
  trust: {
    eyebrow: "Powered By BGI Genomics",
    title: "Global genomics leadership with trusted local support",
    description: "All HBOC samples are processed under strict quality controls using validated genomic workflows.",
    bullets: [
      "Lablog partners with BGI Genomics, a global leader in genomics and precision medicine",
      "ISO-certified partner laboratory",
      "Strict international laboratory standards",
      "Quality assurance protocols",
      "Accessible and trusted support throughout the Philippines",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: <AccreditationBadge type="NATA" />,
    sideTitle: "Safe, Private & Confidential",
    sideDescription:
      "We understand that genetic information is deeply personal. Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
    sideItems: ["Strictly confidential handling", "Authorized release only", "Professional and compassionate support"],
  },
  faq: hbocFaq,
  cta: {
    title: "Take the next step with HBOC Screening.",
    description: "Book your test and gain broader hereditary insights beyond BRCA.",
    buttonLabel: "Book HBOC Screening",
    email: "admin@lablog.tech",
  },
}

export const comprehensiveCancerPageContent: TestPageContent = {
  backLabel: "Back to Cancer Screening",
  backHref: "/cancer",
  theme: {
    accent: "#17a567",
    accentSoft: "#eefaf4",
    accentBorder: "#d5efe2",
    accentStrong: "#128a57",
    surface: "#fbfffd",
    ctaBackground: "#15317d",
    ctaButton: "#17a567",
  },
  hero: {
    eyebrow: "Cancer - Comprehensive Screening",
    title: "Comprehensive Hereditary Cancer Screening Philippines",
    lead: "A More Comprehensive Way To Understand Your Inherited Cancer Risk",
    description:
      "Your family history can reveal important clues about your long-term health. While some cancers happen by chance, others may be influenced by inherited genetic changes passed down through generations. Lablog's Comprehensive Hereditary Cancer Screening is an advanced genetic screening test designed to analyze multiple genes associated with hereditary cancers affecting both men and women. By identifying inherited risks early, you and your healthcare provider can make more informed decisions about screening, prevention, and long-term health planning. Using advanced genomic technology and our ISO-certified partner laboratory, Lablog provides accessible and confidential hereditary cancer screening throughout the Philippines.",
    features: [
      {
        label: "Advanced multi-gene",
        subLabel: "hereditary cancer panel",
        icon: <IconDna2 size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Suitable for", subLabel: "both men and women", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Screens multiple",
        subLabel: "hereditary cancer risks",
        icon: <IconFlask size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Supports preventive",
        subLabel: "healthcare planning",
        icon: <IconHeartRateMonitor size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "One simple",
        subLabel: "DNA sample required",
        icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
      },
      { label: "Nationwide", subLabel: "collection centers", icon: <IconUsers size={28} stroke={1.8} aria-hidden /> },
      {
        label: "Mobile home service",
        subLabel: "selected areas",
        icon: <IconStethoscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "ISO-certified",
        subLabel: "partner laboratory",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Powered by",
        subLabel: "BGI Genomics expertise",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Strictly",
        subLabel: "confidential process",
        icon: <IconShieldLock size={28} stroke={1.8} aria-hidden />,
      },
    ],
    note: "Important: This is a genetic risk assessment tool and does not diagnose cancer.",
    imageSrc: "/pages/Hereditary Cancer Screening.png",
    imageAlt: "Comprehensive hereditary screening consultation",
    imagePosition: "63% center",
    floatingCard: {
      eyebrow: "Who Should Consider Comprehensive Hereditary Cancer Screening?",
      title: "You may benefit if:",
      items: [
        "Multiple relatives have had cancer",
        "Different cancer types run in your family",
        "Family members were diagnosed at a younger age",
        "Cancer has occurred across multiple generations",
        "You want a broader preventive assessment",
        "You want a more complete genetic evaluation",
        "Your healthcare provider recommended expanded screening",
      ],
      note: "Even without a known family history, some individuals choose comprehensive screening as part of a preventive healthcare strategy.",
    },
  },
  process: {
    eyebrow: "How does the process work?",
    title: "How Does Comprehensive Hereditary Cancer Screening Work?",
    subtitle: "Simple, guided, and secure from booking through result release.",
    steps: [
      {
        title: "Book Your Test",
        description: "Schedule your appointment with our team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "DNA Sample Collection",
        description:
          "A simple DNA sample is collected. Collection options may include collection centers nationwide, home DNA kits, and mobile home service available in selected areas.",
        icon: <IconTestPipe size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description:
          "Your DNA is analyzed using advanced genomic technologies to identify clinically significant variants associated with hereditary cancer syndromes.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description:
          "Your confidential report will be securely released to authorized individuals. Our team will guide you through understanding your report and next steps.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    eyebrow: "What Is Comprehensive Hereditary Cancer Screening?",
    title: "What Types Of Cancers May Be Assessed?",
    cols: { base: 1, sm: 2, lg: 4 },
    items: [
      {
        title: "Breast Cancer",
        description: "One of the most common hereditary cancers.",
        icon: <IconRibbonHealth size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Ovarian Cancer",
        description: "Early awareness may support more personalized monitoring.",
        icon: <IconStethoscope size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Colorectal Cancer",
        description: "Certain hereditary syndromes may increase risk.",
        icon: <IconDna2 size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Prostate Cancer",
        description: "Men may also inherit hereditary cancer risks.",
        icon: <IconHeartRateMonitor size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Pancreatic Cancer",
        description: "Some inherited syndromes are associated with pancreatic cancer risk.",
        icon: <IconFlask size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Endometrial Cancer",
        description: "Certain hereditary conditions may increase risk.",
        icon: <IconHeartRateMonitor size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Gastric (Stomach) Cancer",
        description: "Some hereditary gene mutations may be associated with increased risk.",
        icon: <IconStethoscope size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Additional Hereditary Cancers",
        description: "Expanded panels may include multiple hereditary cancer syndromes.",
        icon: <IconUsers size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "Comprehensive Hereditary Cancer Screening evaluates multiple genes associated with inherited cancer risks. Unlike focused tests that assess only one or a few genes, this broader panel provides a more complete picture of hereditary predisposition. The number of genes and conditions screened may vary depending on the selected panel.",
  },
  turnaround: {
    eyebrow: "Why Early Genetic Awareness Matters",
    title: "Knowing your inherited risk may help support future healthcare decisions.",
    description:
      "Knowledge can help reduce uncertainty and support future decisions. Your genes do not determine your future. They provide information that can help you prepare.",
    visualTitle: "Personalized Screening Plans",
    visualBody: "Doctors may recommend tailored screening schedules.",
    noteTitle: "Earlier Monitoring",
    noteBody: "Some individuals may benefit from earlier surveillance.",
  },
  results: {
    eyebrow: "Why Is This Different From BRCA And HBOC?",
    title: "Choosing the right hereditary cancer test",
    description: "If you're unsure which test is appropriate, our specialists can guide you.",
    positive: {
      title: "BRCA Genetic Test",
      description: "Focused breast and ovarian cancer risk assessment.",
    },
    negative: {
      title: "HBOC Screening",
      description: "Expanded hereditary breast and ovarian cancer evaluation.",
    },
    sidePanel: {
      eyebrow: "Comprehensive Option",
      title: "Comprehensive Hereditary Cancer Screening",
      description: "Broader hereditary cancer assessment across multiple cancer types.",
      items: [
        "Family Awareness: results may provide valuable information for family members",
        "Better Prevention Strategies: long-term healthcare plans may become more personalized",
        "Greater Peace Of Mind: reduce uncertainty with clearer inherited risk insights",
        "Plan with your healthcare provider using broader genetic context",
      ],
    },
  },
  trust: {
    eyebrow: "Powered By BGI Genomics",
    title: "Global genomics leadership with trusted local delivery",
    description:
      "Lablog partners with BGI Genomics, a global leader in genomics and precision medicine. Every sample is processed through our ISO-certified partner laboratory following strict international laboratory standards and quality assurance protocols.",
    bullets: [
      "Advanced genomic technology",
      "ISO-certified partner laboratory",
      "Strict international standards and quality assurance",
      "Accessible and trusted service throughout the Philippines",
    ],
    badgeTitle: "NATA",
    badgeSubtitle: "World recognized accreditation",
    badgeVisual: <AccreditationBadge type="NATA" />,
    sideTitle: "Safe, Private & Confidential",
    sideDescription:
      "We understand that genetic information is deeply personal. Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
    sideItems: ["Strict confidentiality", "Authorized release only", "Professional and compassionate care"],
  },
  faq: comprehensiveFaq,
  cta: {
    title: "Get broader hereditary cancer insights with confidence.",
    description: "Book your comprehensive screening and take a proactive step toward long-term health planning.",
    buttonLabel: "Book Comprehensive Screening",
    email: "admin@lablog.tech",
  },
}

export const mcedCancerPageContent: TestPageContent = {
  backLabel: "Back to Cancer Screening",
  backHref: "/cancer",
  theme: {
    accent: "#6b3fc4",
    accentSoft: "#f3eefc",
    accentBorder: "#e2d6f7",
    accentStrong: "#56309f",
    surface: "#fdfbff",
    ctaBackground: "#4c2a9c",
    ctaButton: "#f5a623",
  },
  hero: {
    eyebrow: "Cancer - Multi-Cancer Early Detection (MCED)",
    title: "Multi-Cancer Early Detection (MCED)",
    lead: "Detect Multiple Types of Cancer from a Single Blood Test",
    description:
      "CancerScreenDx Multi-Cancer Early Detection (MCED) is an advanced blood-based screening test designed to detect cancer signals across more than 110 types of cancer, including many cancers that currently have no routine screening options. The test analyzes circulating tumor DNA (ctDNA) found in the bloodstream and can help identify potential cancer signals before symptoms appear. Unlike traditional cancer screening methods that focus on a single cancer type, MCED provides a broader approach to early cancer detection through a simple blood draw.",
    features: [
      {
        label: "Over 110 types",
        subLabel: "of cancer detected",
        icon: <IconSearch size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Non-invasive",
        subLabel: "blood test",
        icon: <IconDroplet size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Tissue-of-origin",
        subLabel: "prediction",
        icon: <IconMapPin size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Results in",
        subLabel: "7-14 working days",
        icon: <IconClockHour4 size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "ISO 15189",
        subLabel: "certified laboratory",
        icon: <IconCertificate size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Supports proactive",
        subLabel: "preventive healthcare",
        icon: <IconHeartRateMonitor size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "One simple",
        subLabel: "blood sample required",
        icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Powered by",
        subLabel: "BGI Genomics expertise",
        icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
      },
      {
        label: "Strictly",
        subLabel: "confidential process",
        icon: <IconShieldLock size={28} stroke={1.8} aria-hidden />,
      },
    ],
    note: "Important: MCED is a screening test and is not intended to diagnose cancer.",
    imageSrc: "/pages/Hero page.png",
    imageAlt: "Multi-cancer early detection consultation",
    imagePosition: "60% center",
    floatingCard: {
      eyebrow: "Who May Benefit From MCED?",
      title: "MCED may be particularly beneficial for:",
      items: [
        "Adults aged 40 and above",
        "Individuals with a family history of cancer",
        "Individuals with a personal history of cancer",
        "People seeking a more proactive approach to preventive healthcare",
        "Individuals looking for broader cancer screening beyond conventional methods",
      ],
      note: "MCED offers broader early cancer screening through a simple blood draw.",
    },
  },
  process: {
    eyebrow: "How does the process work?",
    title: "How Does MCED Work?",
    subtitle: "Simple, non-invasive, and confidential from booking to result release.",
    steps: [
      {
        title: "Book Your Test",
        description: "Schedule your appointment with our team.",
        icon: <IconCalendarEvent size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Blood Sample Collection",
        description:
          "A simple, non-invasive blood sample is collected. Collection options may include collection centers nationwide and mobile home service in selected areas.",
        icon: <IconDroplet size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Laboratory Analysis",
        description:
          "Cancer cells release small fragments of DNA into the bloodstream, known as circulating tumor DNA (ctDNA). CancerScreenDx analyzes these DNA fragments and looks for patterns associated with cancer.",
        icon: <IconMicroscope size={40} stroke={1.6} aria-hidden />,
      },
      {
        title: "Receive Your Results",
        description:
          "When a cancer signal is identified, the test can estimate the most likely tissue or organ where the signal originated.",
        icon: <IconFileCheck size={40} stroke={1.6} aria-hidden />,
      },
    ],
  },
  strip: {
    eyebrow: "Benefits Of MCED",
    title: "Why Choose Multi-Cancer Early Detection?",
    cols: { base: 1, sm: 2, lg: 4 },
    items: [
      {
        title: "Comprehensive Cancer Screening",
        description: "Detect cancer signals across a broad range of cancer types through a single blood sample.",
        icon: <IconTarget size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Non-Invasive",
        description: "No scans, no scopes, and no surgical procedures. The test requires only a blood draw.",
        icon: <IconDroplet size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Tissue-of-Origin Prediction",
        description:
          "If a cancer signal is detected, the test can help predict the most likely location of the cancer, assisting healthcare providers in determining appropriate follow-up investigations.",
        icon: <IconMapPin size={34} stroke={1.7} aria-hidden />,
      },
      {
        title: "Fast Results",
        description: "Results are typically available within 7-14 working days after sample receipt.",
        icon: <IconClockHour4 size={34} stroke={1.7} aria-hidden />,
      },
    ],
    footerNote:
      "CancerScreenDx can detect signals associated with over 110 different cancer types, including lung, breast, colorectal, ovarian, pancreatic, liver, prostate, cervical, thyroid, kidney cancers, melanoma, lymphoma, brain cancer, and many others. Many of these cancers have no routine screening options, making early detection especially valuable.",
  },
  turnaround: {
    eyebrow: "Early Detection Saves Lives",
    title: "Detecting cancer signals earlier may help improve health outcomes.",
    description:
      "Many cancers are often diagnosed only when symptoms develop or when the disease has already progressed. Early detection can improve treatment options and health outcomes by identifying potential cancer signals at an earlier stage.",
    visualTitle: "Screen for More Than 110 Types of Cancer",
    visualBody:
      "CancerScreenDx can detect signals associated with over 110 different cancer types, including lung, breast, colorectal, ovarian, pancreatic, liver, prostate, cervical, thyroid, kidney cancers, lymphoma, melanoma, and brain cancer.",
    noteTitle: "And Many Others",
    noteBody: "MCED provides broader cancer screening coverage beyond conventional single-cancer screening methods.",
  },
  results: {
    eyebrow: "Important Information",
    title: "MCED is a screening test and not intended to diagnose cancer",
    description:
      "A positive result indicates that a cancer signal may be present and should be followed by appropriate diagnostic testing as recommended by a healthcare professional.",
    positive: {
      title: "If A Signal Is Detected",
      description:
        "A positive result should be followed by appropriate diagnostic testing to confirm diagnosis and guide treatment planning.",
    },
    negative: {
      title: "If No Signal Is Detected",
      description:
        "A negative result does not completely rule out cancer. Routine cancer screening should still be continued according to medical guidelines.",
    },
    sidePanel: {
      eyebrow: "Clinical Guidance",
      title: "Always interpret MCED results with your healthcare provider",
      description:
        "MCED is a screening tool and should be used alongside clinical evaluation and standard guideline-based cancer screening.",
      items: [
        "Positive results require diagnostic follow-up",
        "Negative results do not completely rule out cancer",
        "Continue routine cancer screening per medical guidelines",
        "Use results to inform next-step discussions with your doctor",
      ],
    },
  },
  trust: {
    eyebrow: "Powered By BGI Genomics",
    title: "Global genomics leadership with trusted local delivery",
    description:
      "Lablog partners with BGI Genomics, a global leader in genomics and precision medicine. Every sample is processed through our ISO 15189 certified partner laboratory following strict international laboratory standards and quality assurance protocols.",
    bullets: [
      "Advanced genomic technology and ctDNA analysis",
      "ISO 15189 certified partner laboratory",
      "Strict international standards and quality assurance",
      "Accessible and trusted service throughout the Philippines",
    ],
    media: {
      src: "/hero.jpg",
      alt: "Safe and confidential multi-cancer screening process",
      objectPosition: "60% center",
    },
    badgeTitle: "ISO 15189",
    badgeSubtitle: "Certified laboratory standards",
    badgeVisual: <AccreditationBadge type="ISO" />,
    sideTitle: "Safe, Private & Confidential",
    sideDescription:
      "We understand that health information is deeply personal. Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
    sideItems: ["Strict confidentiality", "Authorized release only", "Professional and compassionate care"],
  },
  faq: mcedFaq,
  cta: {
    title: "Take a proactive step towards your health.",
    description: "Book a test or speak with our genetic counselors today.",
    buttonLabel: "Book MCED Test",
    email: "admin@lablog.tech",
  },
}
