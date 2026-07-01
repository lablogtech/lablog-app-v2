"use client"

import Link from "next/link"
import styles from "./GeneticsSection.module.css"
import { Anchor, Box, Card, Container, List, Text, Title } from "@mantine/core"
import { Carousel } from "@mantine/carousel"
import Heading from "@/components/shared/heading/Heading"
import {
  IconArrowRight,
  IconCertificate,
  IconDna,
  IconHeartbeat,
  IconMicroscope,
  IconScale,
  IconUsers,
} from "@tabler/icons-react"

const PACKAGES = [
  {
    title: "Peace of Mind Paternity DNA Test",
    description: "Private and confidential paternity testing for personal knowledge and family reassurance.",
    items: ["Personal knowledge results", "Confidential sample handling", "Collection center or home options"],
    href: "/paternity-dna-test/peace-of-mind",
    iconColor: "#e8eeff",
    iconStroke: "var(--mantine-color-blue-6)",
    icon: <IconUsers size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "Legal Paternity DNA Test",
    description: "Court-admissible paternity testing with chain-of-custody procedures for legal documentation.",
    items: ["Court-recognized process", "Identity verification", "Official result reporting"],
    href: "/paternity-dna-test/legal-paternity",
    iconColor: "#fff7e6",
    iconStroke: "#d97706",
    icon: <IconScale size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "Non-Invasive Prenatal Paternity Test",
    description: "Safe prenatal paternity testing during pregnancy using maternal blood and alleged father samples.",
    items: ["Non-invasive procedure", "Suitable from early pregnancy", "Confidential support process"],
    href: "/paternity-dna-test/non-invasive-paternal",
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: <IconHeartbeat size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "NIPT Philippines",
    description: "Non-invasive prenatal screening for chromosomal risk insights as early as 10 weeks of pregnancy.",
    items: ["NIFTY Basic option", "NIFTY Pro option", "Fetal sex determination"],
    href: "/pregnancy/nipt-philippines",
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: <IconHeartbeat size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "Carrier Screening Philippines",
    description: "Preconception or prenatal carrier screening to assess inherited condition risks for future children.",
    items: ["Family planning support", "Inherited risk insights", "Partner testing guidance"],
    href: "/pregnancy/carrier-screening-philippines",
    iconColor: "#f3eeff",
    iconStroke: "#7c3aed",
    icon: <IconCertificate size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "Newborn Genetic Screening Philippines",
    description: "Early newborn screening for selected inherited and metabolic conditions after birth.",
    items: ["Early health insights", "Supports early intervention", "Parent-friendly guidance"],
    href: "/pregnancy/newborn-genetic-screening-philippines",
    iconColor: "#e6faf8",
    iconStroke: "#0d9488",
    icon: <IconDna size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "BRCA Genetic Test Philippines",
    description: "Focused hereditary risk screening for BRCA-related cancer susceptibility.",
    items: ["BRCA1 and BRCA2 analysis", "Supports risk-informed screening", "Confidential laboratory handling"],
    href: "/cancer/brca-genetic-test-philippines",
    iconColor: "#f3eeff",
    iconStroke: "#7c3aed",
    icon: <IconMicroscope size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "HBOC Screening Philippines",
    description: "Expanded hereditary breast and ovarian cancer risk assessment beyond BRCA-only testing.",
    items: ["Broader hereditary panel", "Family-history aligned insights", "Guided result interpretation"],
    href: "/cancer/hboc-screening-philippines",
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: <IconCertificate size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "Comprehensive Hereditary Cancer Screening",
    description: "Multi-gene hereditary cancer screening for broader inherited cancer risk coverage.",
    items: ["Expanded cancer gene panel", "Multiple hereditary cancer types", "Supports personalized monitoring"],
    href: "/cancer/comprehensive-hereditary-cancer-screening-philippines",
    iconColor: "#e6faf8",
    iconStroke: "#0d9488",
    icon: <IconDna size={48} stroke={1.8} aria-hidden />,
  },
  {
    title: "Multi-Cancer Early Detection (MCED)",
    description: "Blood-based screening designed to detect signals from multiple cancer types at earlier stages.",
    items: ["Screen for many cancer signals", "Non-invasive blood collection", "Tissue-of-origin prediction support"],
    href: "/cancer/multi-cancer-early-detection-mced",
    iconColor: "#e8eeff",
    iconStroke: "var(--mantine-color-blue-6)",
    icon: <IconMicroscope size={48} stroke={1.8} aria-hidden />,
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
      <Heading
        title="Genetics & Specialized Testing"
        subtitle="Advanced genetic testing for you and your loved ones."
        order={1}
        classNames={{
          root: styles.sectionHeading,
          title: styles.sectionTitle,
          subtitle: styles.sectionSubtitle,
        }}
      />

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
        {PACKAGES.map((pkg) => (
          <Carousel.Slide key={pkg.href}>
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
              <Anchor component={Link} href={pkg.href} className={styles.learnMore} underline="never">
                Learn More <IconArrowRight size={14} stroke={2.5} aria-hidden />
              </Anchor>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  )
}
