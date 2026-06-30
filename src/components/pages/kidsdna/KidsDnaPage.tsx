"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./KidsDnaPage.module.css"
import {
  Accordion,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core"
import Heading from "@/components/shared/heading/Heading"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"
import {
  IconCalendarEvent,
  IconCircleCheck,
  IconDna2,
  IconFileCheck,
  IconFlask,
  IconHeartRateMonitor,
  IconMicroscope,
  IconShieldLock,
  IconStethoscope,
  IconTestPipe,
  IconUsers,
} from "@tabler/icons-react"

const KEY_AREAS = [
  {
    title: "Ancestry & Origins",
    description: "Explore your child's genetic story and discover ancestral roots from different parts of the world.",
    icon: <IconUsers size={25} stroke={1.9} aria-hidden />,
    insights: ["Ancestry composition", "Maternal haplogroup", "Paternal haplogroup", "Neanderthal ancestry"],
  },
  {
    title: "Learning & Development",
    description: "Better understand how your child naturally learns, thinks, and processes information.",
    icon: <IconFlask size={25} stroke={1.9} aria-hidden />,
    insights: [
      "Learning tendencies",
      "Memory",
      "Focus and concentration",
      "Personality traits",
      "Emotional resilience",
      "Cognitive abilities",
    ],
  },
  {
    title: "Sports & Physical Potential",
    description: "Support activities that align with your child's natural tendencies.",
    icon: <IconHeartRateMonitor size={25} stroke={1.9} aria-hidden />,
    insights: [
      "Endurance",
      "Explosive power",
      "Recovery tendencies",
      "Exercise response",
      "Injury tendencies",
      "Body composition traits",
    ],
  },
  {
    title: "Nutrition & Wellness",
    description: "Build healthier habits with personalized insights.",
    icon: <IconStethoscope size={25} stroke={1.9} aria-hidden />,
    insights: [
      "Vitamin requirements",
      "Mineral requirements",
      "Metabolism",
      "Nutrient utilization",
      "Food sensitivities",
      "Dietary tendencies",
    ],
  },
  {
    title: "Health Awareness",
    description:
      "Gain awareness of certain genetic tendencies that may support long-term preventive healthcare discussions.",
    icon: <IconShieldLock size={25} stroke={1.9} aria-hidden />,
    insights: [
      "Cardiovascular wellness",
      "Bone health",
      "Immune health",
      "Digestive wellness",
      "General health predispositions",
    ],
    note: "Genetic predisposition does not mean a condition will develop.",
  },
  {
    title: "Medication Insights",
    description: "Understand how genetics may influence medication responses.",
    icon: <IconTestPipe size={25} stroke={1.9} aria-hidden />,
    insights: [
      "Insights may support future conversations with your healthcare provider",
      "Pharmacogenetic reports across numerous medication categories",
    ],
  },
  {
    title: "Lifestyle & Environmental Traits",
    description: "Discover how genetics may influence everyday habits and sensitivities.",
    icon: <IconDna2 size={25} stroke={1.9} aria-hidden />,
    insights: [
      "Sleep tendencies",
      "Skin characteristics",
      "Environmental sensitivities",
      "Lifestyle traits",
      "Exposure tendencies",
    ],
  },
]

const HOW_IT_WORKS = [
  {
    title: "Order your test",
    description: "Book online or speak with our team.",
    icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Collect your DNA sample",
    description: "A simple cheek swab is collected using the sterile collection kit provided.",
    icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
    options: ["Home DNA test kit", "Collection centers nationwide", "Mobile home service (selected areas)"],
  },
  {
    title: "Laboratory analysis",
    description:
      "Advanced genomic technologies analyze millions of genetic markers to generate your personalized reports.",
    icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Explore your personalized dashboard",
    description: "Access your secure online DNA Blueprint dashboard and discover over 700 personalized insights.",
    icon: <IconFileCheck size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Genetic consultation",
    description: "Receive a complimentary 30-minute consultation to better understand your results.",
    icon: <IconUsers size={28} stroke={1.8} aria-hidden />,
  },
]

const HERO_FEATURES: FeatureHighlightItem[] = [
  { label: "700+", subLabel: "personalized DNA reports", Icon: IconFileCheck },
  { label: "20 million+", subLabel: "genetic markers analyzed", Icon: IconDna2 },
  { label: "One simple", subLabel: "cheek swab collection", Icon: IconTestPipe },
  { label: "Personalized", subLabel: "digital dashboard", Icon: IconFlask },
  { label: "Available", subLabel: "nationwide", Icon: IconUsers },
  { label: "Home DNA", subLabel: "kit available", Icon: IconStethoscope },
  { label: "30-minute", subLabel: "consultation included", Icon: IconCalendarEvent },
  { label: "ISO-certified", subLabel: "partner laboratory", Icon: IconMicroscope },
  { label: "Secure", subLabel: "confidential results", Icon: IconShieldLock },
]

const SUPPORT_POINTS = [
  {
    title: "Support Learning",
    description: "Understand how your child may naturally absorb and process information.",
  },
  {
    title: "Support Wellness",
    description: "Build healthier routines based on personalized insights.",
  },
  {
    title: "Support Physical Development",
    description: "Choose activities that align with your child's natural tendencies.",
  },
  {
    title: "Support Long-Term Health",
    description: "Gain awareness that may support future healthcare discussions.",
  },
  {
    title: "Support Everyday Decisions",
    description: "Turn information into meaningful action.",
  },
]

const WHO_IS_IT_FOR = [
  "Parents who want a deeper understanding of their child",
  "Families who value personalized wellness",
  "Parents interested in preventive healthcare",
  "Families who want to support their child's growth and development",
  "Parents looking for science-backed insights",
]

const FAQ_ITEMS = [
  {
    question: "Is this a medical test?",
    answer:
      "No. DNA Blueprint is a wellness and educational tool that provides genetic insights and is not a diagnostic medical test.",
  },
  {
    question: "Does this predict my child's future?",
    answer:
      "No. Genetics is only one part of the equation. Environment, education, nutrition, and experiences also play significant roles.",
  },
  {
    question: "Can this tell me what sport my child will be good at?",
    answer:
      "No. It provides tendencies and traits that may help support activities and development, but does not guarantee outcomes.",
  },
  {
    question: "How is the sample collected?",
    answer: "Through a simple cheek swab collection.",
  },
  {
    question: "How long do results take?",
    answer: "Results are available approximately 8 to 10 weeks after the laboratory receives your sample.",
  },
]

function splitQuestions(items: typeof FAQ_ITEMS) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

export default function KidsDnaPage() {
  const faqColumns = splitQuestions(FAQ_ITEMS)

  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="stretch" gap={{ base: 28, lg: 42 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Heading
                order={1}
                eyebrow="Lablog DNA Blueprint Philippines"
                title="700+ Personalized DNA Insights To Better Understand and Support Your Child"
                description={[
                  "Every child is unique. From how they learn and play to how they respond to nutrition, exercise, and their environment, no two children develop exactly the same way.",
                  "Lablog DNA Blueprint is a comprehensive DNA-powered wellness platform designed to help parents better understand and support their child's growth and development.",
                  <>
                    Through over{" "}
                    <strong>700 personalized DNA insights powered by the analysis of 20 million genetic markers</strong>
                    , families can discover valuable information related to ancestry, learning, nutrition, physical
                    potential, health awareness, medication response, and everyday lifestyle traits.
                  </>,
                  "Our goal is simple: transform complex genetic science into practical insights that families can use throughout their child's journey.",
                ]}
                classNames={{
                  eyebrow: styles.heroEyebrow,
                  title: styles.heroTitle,
                  description: styles.heroDescription,
                }}
              />

              <FeatureHighlightsGrid
                items={HERO_FEATURES}
                cols={{ base: 2, sm: 3, lg: 5 }}
                spacing={{ base: 10, md: 14 }}
                mt={26}
                iconSize={30}
                iconStroke={1.8}
                themeIconSize={58}
                colors={{
                  circleBackground: "#f0e9ff",
                  circleIcon: "#6246cc",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />

              <Text className={styles.turnaroundNotice} mt={14} ta="left">
                Important: Lablog DNA Blueprint is an informational wellness tool and not a medical diagnostic test.
              </Text>

              <Group gap="sm" mt={22}>
                <Button component={Link} href="#contact" className={styles.primaryButton} radius="md">
                  Book a test
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

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Box className={styles.backgroundImage} aria-hidden="true">
                  <Image
                    src="/pages/DNA Blueprint.png"
                    alt="KidsDNA dashboard"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className={styles.backgroundImageElement}
                  />
                  <Box className={styles.heroGlow} aria-hidden />
                </Box>
                <Paper className={styles.heroFloatingCard} radius="xl" p="lg">
                  <Text className={styles.heroFloatingTitle}>Trusted by families across the Philippines</Text>
                  <Text className={styles.heroFloatingDescription}>
                    Understand your child better with clear and science-backed genetic context.
                  </Text>
                </Paper>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Box className={styles.sectionHeading}>
            <Text className={styles.sectionEyebrow}>What Makes Up DNA Blueprint</Text>
            <Title order={2} className={styles.sectionTitle}>
              7 Key Areas Designed To Help You Better Understand Your Child
            </Title>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
            {KEY_AREAS.map((area) => (
              <Paper key={area.title} radius="lg" className={styles.areaCard}>
                <ThemeIcon size={52} radius="xl" variant="light" className={styles.areaIcon}>
                  {area.icon}
                </ThemeIcon>
                <Title order={3} className={styles.areaTitle}>
                  {area.title}
                </Title>
                <Text className={styles.areaDescription}>{area.description}</Text>
                <Stack gap={6} mt={10}>
                  {area.insights.map((insight) => (
                    <Text key={insight} className={styles.metricItem}>
                      <IconCircleCheck size={14} stroke={2.1} aria-hidden />
                      {insight}
                    </Text>
                  ))}
                </Stack>
                {area.note && (
                  <Text className={styles.dashboardLabel} mt={8}>
                    {area.note}
                  </Text>
                )}
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.infoStripSection}`}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            More Than Just a DNA Test
          </Title>
          <Text className={styles.dashboardDescription} ta="center" mt={8}>
            Lablog DNA Blueprint is designed to help parents make more informed decisions throughout their child&apos;s
            development.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="sm" mt={18}>
            {SUPPORT_POINTS.map((item) => (
              <Paper key={item.title} radius="md" className={styles.infoStripCard}>
                <Text className={styles.areaTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.processSection}`}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            How It Works
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 5 }} spacing="md" mt={20}>
            {HOW_IT_WORKS.map((step, index) => (
              <Paper key={step.title} radius="lg" className={styles.processCard}>
                <Text className={styles.stepNumber}>{index + 1}</Text>
                <ThemeIcon size={60} radius="xl" variant="light" className={styles.processIcon}>
                  {step.icon}
                </ThemeIcon>
                <Title order={3} className={styles.processTitle}>
                  {step.title}
                </Title>
                <Text className={styles.processDescription}>{step.description}</Text>
                {step.options && (
                  <Stack gap={6} mt={10}>
                    {step.options.map((option) => (
                      <Text key={option} className={styles.metricItem}>
                        <IconCircleCheck size={14} stroke={2.1} aria-hidden />
                        {option}
                      </Text>
                    ))}
                  </Stack>
                )}
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Grid align="stretch" gap="lg">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Paper radius="xl" className={styles.dashboardPanel}>
                <Title order={3} className={styles.areaTitle}>
                  Who Is Lablog DNA Blueprint For?
                </Title>
                <Stack gap={8} className={styles.dashboardMetrics}>
                  {WHO_IS_IT_FOR.map((item) => (
                    <Text key={item} className={styles.metricItem}>
                      <IconCircleCheck size={15} stroke={2.1} aria-hidden />
                      {item}
                    </Text>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Title order={2} className={styles.sectionTitle}>
                Safe, Secure and Confidential
              </Title>
              <Text className={styles.dashboardDescription}>
                We understand that genetic information is deeply personal.
              </Text>
              <Text className={styles.dashboardDescription} mt={10}>
                Every sample, report, and patient record is handled with strict confidentiality and released only to
                authorized individuals.
              </Text>
              <Text className={styles.dashboardDescription} mt={10}>
                Our team is here to support your family with professionalism, compassion, and care every step of the
                way.
              </Text>
              <Button component={Link} href="#contact" className={styles.primaryButton} radius="md" mt={16}>
                Talk to our specialists
              </Button>
            </Grid.Col>
          </Grid>
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
              Better understanding today. Better support tomorrow.
            </Title>
            <Text className={styles.ctaDescription}>
              Give your child a more personalized future with Lablog DNA Blueprint.
            </Text>
            <Button component={Link} href="#contact" className={styles.primaryButton} radius="md" mt={14}>
              Book your KidsDNA test
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
