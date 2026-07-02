"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./ScreeningPage.module.css"
import {
  Accordion,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core"
import Heading from "@/components/shared/heading/Heading"
import ConfidentialInfoCard from "@/components/shared/confidential-info-card/ConfidentialInfoCard"
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
import HighlightCards, { type HighlightCardItem } from "@/components/shared/highlight-cards/HighlightCards"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"
import {
  IconCalendarEvent,
  IconCircleCheck,
  IconDna2,
  IconFlask,
  IconHeartRateMonitor,
  IconMapPin,
  IconMicroscope,
  IconShieldLock,
  IconStethoscope,
  IconTestPipe,
  IconUsers,
} from "@tabler/icons-react"

const HERO_FEATURES: FeatureHighlightItem[] = [
  { label: "Comprehensive", subLabel: "laboratory packages", Icon: IconFlask },
  { label: "Home service", subLabel: "available", Icon: IconStethoscope },
  { label: "Collection centers", subLabel: "nationwide", Icon: IconMapPin },
  { label: "Convenient", subLabel: "booking process", Icon: IconCalendarEvent },
  { label: "Fast", subLabel: "turnaround times", Icon: IconTestPipe },
  { label: "Personalized", subLabel: "wellness approach", Icon: IconHeartRateMonitor },
  { label: "Doctor-friendly", subLabel: "reports", Icon: IconUsers },
  { label: "Suitable for", subLabel: "routine preventive care", Icon: IconShieldLock },
]

const SCREENING_CARDS: HighlightCardItem[] = [
  {
    title: "Cardiac Health Screening",
    description: "Monitor key markers associated with cardiovascular and metabolic health.",
    details: ["Ideal for:"],
    insights: [
      "Family history of heart disease",
      "High cholesterol",
      "Hypertension risk",
      "Individuals prioritizing heart health",
    ],
    icon: <IconHeartRateMonitor size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Diet & Lifestyle Screening",
    description: "Understand important health markers that may be influenced by your lifestyle habits.",
    details: ["Ideal for:"],
    insights: [
      "Weight management",
      "Metabolic health concerns",
      "Nutritional awareness",
      "Individuals building healthier habits",
    ],
    icon: <IconFlask size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Diabetes Screening",
    description: "Monitor blood sugar and metabolic markers that support long-term health management.",
    details: ["Ideal for:"],
    insights: ["Diabetes risk", "Family history of diabetes", "Obesity concerns", "Preventive health monitoring"],
    icon: <IconTestPipe size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Hormone Screening",
    description: "Evaluate important hormones that may affect energy, metabolism, mood, and overall wellbeing.",
    details: ["Ideal for:"],
    insights: ["Fatigue", "Weight fluctuations", "Hormonal imbalances", "Thyroid concerns", "PCOS support"],
    icon: <IconDna2 size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Elite Fitness Screening",
    description: "Optimize your fitness journey through comprehensive laboratory monitoring.",
    details: ["Ideal for:"],
    insights: ["Athletes", "Active individuals", "Fitness enthusiasts", "Performance optimization"],
    icon: <IconStethoscope size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Men's Prime Health Package",
    description: "A comprehensive wellness assessment designed specifically for men's health needs.",
    details: ["Ideal for:"],
    insights: [
      "Men aged 35 and above",
      "Annual health checkups",
      "Family history of chronic diseases",
      "Preventive health management",
    ],
    icon: <IconUsers size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Women's Prime Health Package",
    description: "A comprehensive wellness assessment designed specifically for women's health needs.",
    details: ["Ideal for:"],
    insights: [
      "Women aged 35 and above",
      "Annual health checkups",
      "Long-term preventive care",
      "Health monitoring through different life stages",
    ],
    icon: <IconUsers size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Men's Tumor Marker Screening",
    description: "Monitor specific tumor markers that may support discussions around cancer surveillance.",
    details: ["Ideal for:"],
    insights: [
      "Family history of cancer",
      "High-risk individuals",
      "Ongoing monitoring",
      "Preventive health strategies",
    ],
    note: "This is not a cancer diagnostic test.",
    icon: <IconMicroscope size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Women's Tumor Marker Screening",
    description: "Monitor specific tumor markers associated with women's health.",
    details: ["Ideal for:"],
    insights: [
      "Family history of cancer",
      "High-risk individuals",
      "Ongoing monitoring",
      "Preventive health strategies",
    ],
    note: "This is not a cancer diagnostic test.",
    icon: <IconMicroscope size={26} stroke={1.9} aria-hidden />,
  },
  {
    title: "Pregnancy Wellness Screening",
    description: "Essential laboratory screening designed to support maternal health during pregnancy.",
    details: ["Ideal for:"],
    insights: ["Expecting mothers", "Routine prenatal care", "Early pregnancy screening"],
    icon: <IconShieldLock size={26} stroke={1.9} aria-hidden />,
  },
]

const GOAL_OPTIONS = [
  { goal: "I Want To Protect My Heart", packageName: "Cardiac Health Screening" },
  { goal: "I Want To Improve My Weight & Metabolism", packageName: "Diet & Lifestyle Screening" },
  { goal: "I Want To Monitor My Blood Sugar", packageName: "Diabetes Screening" },
  { goal: "I Feel Tired And Want To Check My Hormones", packageName: "Hormone Screening" },
  { goal: "I Want To Optimize My Fitness", packageName: "Elite Fitness Screening" },
  { goal: "I Want An Annual Men's Checkup", packageName: "Men's Prime Health Package" },
  { goal: "I Want An Annual Women's Checkup", packageName: "Women's Prime Health Package" },
  { goal: "I Want Additional Cancer Monitoring", packageName: "Tumor Marker Screening" },
  { goal: "I Need Pregnancy Laboratory Tests", packageName: "Pregnancy Wellness Screening" },
]

const BENEFIT_POINTS = [
  "Earlier awareness of potential health concerns",
  "Better long-term health planning",
  "Improved lifestyle decisions",
  "Monitoring existing conditions",
  "Establishing healthier routines",
  "Tracking your health over time",
]

const PROCESS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Book your package",
    description: "Choose the screening package that best matches your health goals.",
    icon: <IconCalendarEvent size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "Sample collection",
    description: "Choose your preferred collection method.",
    bulletPoints: ["Collection centers nationwide", "Mobile home service", "Partner clinics"],
    icon: <IconMapPin size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Laboratory analysis",
    description: "Your samples are analyzed and processed following strict quality standards.",
    icon: <IconMicroscope size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Receive your results",
    description: "Receive your report and discuss the findings with your healthcare provider if needed.",
    icon: <IconStethoscope size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
]

const FAQ_ITEMS = [
  {
    question: "How often should I undergo preventive health screening?",
    answer:
      "Many adults benefit from annual screening, but frequency may vary depending on age, family history, and existing conditions.",
  },
  {
    question: "Do I need to fast before my laboratory tests?",
    answer: "Some packages may require fasting. Our team will provide instructions before your appointment.",
  },
  {
    question: "Are these tests diagnostic?",
    answer:
      "These packages are screening tools designed to monitor important health markers. Further evaluation may be required if abnormalities are detected.",
  },
  {
    question: "Can I book a home service?",
    answer: "Yes. Home service is available in selected areas.",
  },
  {
    question: "Are these packages available nationwide?",
    answer: "Yes. Collection centers and partner clinics are available nationwide.",
  },
  {
    question: "Can I combine multiple packages?",
    answer: "Yes. Our team can help customize your screening experience based on your needs.",
  },
]

function splitQuestions(items: typeof FAQ_ITEMS) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

export default function ScreeningPage() {
  const faqColumns = splitQuestions(FAQ_ITEMS)

  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="stretch" gap={{ base: 28, lg: 40 }}>
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Heading
                order={1}
                eyebrow="Preventive Health Screening Philippines"
                title="Comprehensive Laboratory Packages For Proactive Healthcare"
                description={[
                  "Your health should not start when symptoms appear.",
                  "Lablog's Preventive Health Screening packages are designed to help individuals monitor important health markers, detect potential risks early, and make more informed decisions about their long-term wellbeing.",
                  "Whether you're focused on heart health, diabetes, hormones, fitness performance, age-related wellness, or cancer monitoring, our laboratory packages provide practical insights to support a healthier future.",
                  "With nationwide accessibility, home service options, and comprehensive reports, Lablog makes proactive healthcare easier and more convenient.",
                ]}
                classNames={{
                  eyebrow: styles.heroEyebrow,
                  title: styles.heroTitle,
                  description: styles.heroDescription,
                }}
              />

              <Title order={3} mt={18} className={styles.sectionTitle}>
                Why Choose Lablog Preventive Health Screening?
              </Title>
              <FeatureHighlightsGrid
                items={HERO_FEATURES}
                cols={{ base: 2, sm: 3, lg: 5 }}
                spacing={{ base: 10, md: 14 }}
                mt={26}
                iconSize={30}
                iconStroke={1.8}
                themeIconSize={58}
                colors={{
                  circleBackground: "#e8f7f0",
                  circleIcon: "#14a76b",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />

              <Text className={styles.whyDescription} mt={12}>
                <strong>Early awareness often leads to better health outcomes.</strong>
              </Text>

              <Group gap="sm" mt={22}>
                <Button component={Link} href="#contact" className={styles.primaryButton} radius="md">
                  Book a screening
                </Button>
                <Button
                  component={Link}
                  href="#contact"
                  variant="outline"
                  className={styles.secondaryButton}
                  radius="md"
                >
                  Talk to our specialists
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Box className={styles.heroVisual}>
                <Box className={styles.backgroundImage} aria-hidden="true">
                  <Image
                    src="/pages/Preventive Healthcare.png"
                    alt="Preventive health screening"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className={styles.backgroundImageElement}
                  />
                  <Box className={styles.heroGlow} aria-hidden />
                </Box>
                <Paper className={styles.heroFloatingCard} radius="xl" p="lg">
                  <Text className={styles.heroFloatingTitle}>Early awareness supports better outcomes.</Text>
                  <Text className={styles.heroFloatingDescription}>
                    Monitor key health markers and make informed long-term decisions.
                  </Text>
                </Paper>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <HighlightCards
            title="Find The Right Health Screening For You"
            items={SCREENING_CARDS}
            cols={{ base: 1, sm: 2, lg: 5 }}
            accentColor="#14a66a"
          />
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.goalSection}`}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Not Sure Which Package To Choose?
          </Title>
          <Text className={styles.whyDescription} ta="center" mt={8}>
            Choose based on your health goals.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm" mt={18}>
            {GOAL_OPTIONS.map((item) => (
              <Paper key={item.goal} radius="md" className={styles.goalCard}>
                <Text fw={700}>{item.goal}</Text>
                <Text mt={6}>{item.packageName}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.whySection}`}>
        <Container size="xl">
          <Grid align="center" gap="xl">
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Title order={2} className={styles.sectionTitle}>
                Why Preventive Health Screening Matters
              </Title>
              <Text className={styles.whyDescription}>
                Preventive healthcare allows you to understand your body before symptoms appear.
              </Text>
              <Text className={styles.whyDescription} mt={12}>
                Investing in preventive care today may help support a healthier tomorrow.
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
                {BENEFIT_POINTS.map((point) => (
                  <Paper key={point} radius="lg" className={styles.whyPointCard}>
                    <ThemeIcon size={50} radius="xl" variant="light" className={styles.whyPointIcon}>
                      <IconCircleCheck size={22} stroke={2.1} aria-hidden />
                    </ThemeIcon>
                    <Text className={styles.whyPointText}>{point}</Text>
                  </Paper>
                ))}
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.processSection}`}>
        <Container size="xl">
          <HowItWorksSteps
            title="How Does It Work?"
            subtitle="Simple steps from booking to receiving your report."
            steps={PROCESS_STEPS}
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <ConfidentialInfoCard
            title="Safe, Convenient & Confidential"
            paragraphs={[
              "We understand that health information is personal.",
              "Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
              "Our goal is to make preventive healthcare more accessible for everyone.",
            ]}
            accentColor="#14a66a"
            icon={<IconShieldLock size={22} stroke={1.9} aria-hidden />}
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Frequently Asked Questions
          </Title>
          <Grid mt={18} gap="lg">
            {faqColumns.map((column, columnIndex) => (
              <Grid.Col key={columnIndex} span={{ base: 12, md: 6 }}>
                <Accordion variant="separated" radius="md" className={styles.faqAccordion}>
                  {column.map((faq) => (
                    <Accordion.Item key={faq.question} value={faq.question}>
                      <Accordion.Control>{faq.question}</Accordion.Control>
                      <Accordion.Panel>{faq.answer}</Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="contact" className={styles.ctaSection}>
        <Container size="xl">
          <Paper radius="xl" className={styles.ctaCard}>
            <Title order={2} className={styles.ctaTitle}>
              Invest in your health today.
            </Title>
            <Text className={styles.ctaDescription}>
              Book your preventive package now and take the first step to a healthier tomorrow.
            </Text>
            <Button component={Link} href="#contact" className={styles.primaryButton} radius="md" mt={14}>
              Book a screening now
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
