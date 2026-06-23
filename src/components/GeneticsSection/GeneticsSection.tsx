"use client"

import styles from "./GeneticsSection.module.css"
import { Anchor, Box, Card, Container, List, Text, Title } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import {
  IconArrowRight,
  IconCertificate,
  IconDna,
  IconHeartbeat,
  IconMapPin,
  IconMicroscope,
  IconPill,
  IconScale,
  IconUsers,
} from "@tabler/icons-react"

const PACKAGES = [
  {
    title: "Paternity DNA Testing",
    description:
      "Get accurate answers for peace of mind, legal requirements, immigration applications, and family documentation.",
    items: [
      "Non-Legal Paternity DNA Test",
      "Legal Paternity DNA Test",
      "Immigration DNA Testing",
      "Prenatal Paternity Testing",
    ],
    iconColor: "#e8eeff",
    iconStroke: "var(--mantine-color-blue-6)",
    icon: <IconUsers size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "NIPT Philippines",
    description:
      "Screen for common chromosomal conditions as early as 10 weeks of pregnancy through a simple maternal blood test.",
    items: ["NIPT Basic", "NIPT Premium", "Fetal Sex Determination"],
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: <IconHeartbeat size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Halo DNA Testing",
    description: "Gain insights into your genetics to better understand your health, nutrition, fitness, and wellness.",
    items: ["Health & Wellness Insights", "Fitness & Nutrition", "Traits & Ancestry"],
    iconColor: "#e6faf8",
    iconStroke: "#0d9488",
    icon: <IconDna size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Genetic Health Screening",
    description: "Advanced screening panels for inherited health conditions and disease risks.",
    items: ["Hereditary Cancer Screening", "Carrier Screening", "Newborn Genetic Screening"],
    iconColor: "#f3eeff",
    iconStroke: "#7c3aed",
    icon: <IconCertificate size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Immigration DNA Testing",
    description: "Court-admissible DNA tests accepted by embassies and immigration authorities worldwide.",
    items: ["Embassy-Accepted Reports", "Chain-of-Custody Collection", "Fast Turnaround"],
    iconColor: "#e8eeff",
    iconStroke: "var(--mantine-color-blue-6)",
    icon: <IconMapPin size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Legal DNA Testing",
    description:
      "Strictly chain-of-custody compliant testing for court submissions, legal disputes, and estate claims.",
    items: ["Court-Admissible Results", "Estate & Inheritance Claims", "Legal Dispute Resolution"],
    iconColor: "#fff7e6",
    iconStroke: "#d97706",
    icon: <IconScale size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Pharmacogenomics",
    description: "Understand how your unique genetic makeup influences your response to medications and therapies.",
    items: ["Medication Response Profile", "Drug Sensitivity Analysis", "Personalized Treatment Guidance"],
    iconColor: "#e6faf8",
    iconStroke: "#0d9488",
    icon: <IconPill size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Whole Genome Sequencing",
    description: "Comprehensive analysis of your complete DNA sequence for deep health and ancestry insights.",
    items: ["Full Genome Analysis", "Rare Variant Detection", "Lifetime Access to Data"],
    iconColor: "#f3eeff",
    iconStroke: "#7c3aed",
    icon: <IconMicroscope size={26} stroke={1.8} aria-hidden />,
  },
  {
    title: "Ancestry & Heritage Testing",
    description: "Discover your ethnic origins, migration history, and connect with genetic relatives worldwide.",
    items: ["Ethnicity Breakdown", "Migration History", "Relative Matching"],
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: <IconUsers size={26} stroke={1.8} aria-hidden />,
  },
]

export default function GeneticsSection() {
  return (
    <Container
      component="section"
      id="services"
      size="xl"
      py={{ base: 48, md: 72 }}
      px={{ base: 16, md: 40 }}
      className={styles.section}
    >
      <Box className={styles.sectionHeader}>
        <Title order={2} className={styles.title}>
          Genetics &amp; Specialized Testing
        </Title>
        <Text className={styles.subtitle}>Advanced genetic testing for you and your loved ones.</Text>
      </Box>

      <Carousel
        withIndicators
        className={styles.carousel}
        slideGap={20}
        emblaOptions={{
          align: "start",
          loop: true,
        }}
        controlSize={40}
        slideSize={{ base: "80%", sm: "50%", lg: "25%" }}
        classNames={{
          controls: styles.controls,
          control: styles.control,
          indicators: styles.indicators,
          indicator: styles.indicator,
        }}
      >
        {PACKAGES.map((pkg, i) => (
          <Carousel.Slide key={i}>
            <Card className={styles.card}>
              <Box className={styles.iconWrap} style={{ background: pkg.iconColor, color: pkg.iconStroke }}>
                {pkg.icon}
              </Box>
              <Title order={3} className={styles.cardTitle}>
                {pkg.title}
              </Title>
              <Text className={styles.cardDesc}>{pkg.description}</Text>
              <List className={styles.cardList}>
                {pkg.items.map((item, j) => (
                  <List.Item key={j}>{item}</List.Item>
                ))}
              </List>
              <Anchor href="#contact" className={styles.learnMore} underline="never">
                Learn More <IconArrowRight size={14} stroke={2.5} aria-hidden />
              </Anchor>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  )
}
