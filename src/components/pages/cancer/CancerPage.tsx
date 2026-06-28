"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./CancerPage.module.css"
import {
  Accordion,
  Anchor,
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
import {
  IconArrowRight,
  IconCircleCheck,
  IconDna2,
  IconFlask,
  IconHeartRateMonitor,
  IconMicroscope,
  IconShieldLock,
  IconStethoscope,
  IconUsers,
} from "@tabler/icons-react"

const TEST_OPTIONS = [
  {
    title: "BRCA Genetic Test",
    subtitle: "Focused breast and ovarian cancer risk assessment",
    description: "Screens the BRCA1 and BRCA2 genes associated with hereditary breast and ovarian cancer.",
    href: "/cancer/brca-genetic-test-philippines",
    icon: <IconDna2 size={28} stroke={1.8} aria-hidden />,
    points: [
      "Individuals with family history of breast cancer",
      "Individuals with family history of ovarian cancer",
      "Individuals seeking focused risk assessment",
    ],
    theme: "purple",
  },
  {
    title: "HBOC Screening",
    subtitle: "Expanded hereditary breast and ovarian cancer screening",
    description: "Provides broader analysis beyond BRCA genes for hereditary breast and ovarian cancer syndromes.",
    href: "/cancer/hboc-screening-philippines",
    icon: <IconShieldLock size={28} stroke={1.8} aria-hidden />,
    points: ["Strong family history", "Multiple generations affected", "Individuals seeking broader insights"],
    theme: "blue",
  },
  {
    title: "Comprehensive Hereditary Cancer Screening",
    subtitle: "Broader screening across multiple hereditary cancers",
    description:
      "Analyzes a wider panel of genes associated with various hereditary cancers affecting both men and women.",
    href: "/cancer/comprehensive-hereditary-cancer-screening-philippines",
    icon: <IconStethoscope size={28} stroke={1.8} aria-hidden />,
    points: [
      "Preventive healthcare planning",
      "Multiple cancer types within the family",
      "Individuals seeking comprehensive screening",
    ],
    theme: "green",
  },
]

const PROCESS_STEPS = [
  {
    title: "Understand Family History",
    description: "Understand your family history.",
    icon: <IconUsers size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Choose The Appropriate Test",
    description: "Choose the appropriate genetic screening.",
    icon: <IconDna2 size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Review Your Results",
    description: "Review your results with your healthcare provider.",
    icon: <IconFlask size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Plan Next Steps",
    description: "Create a personalized health plan.",
    icon: <IconHeartRateMonitor size={28} stroke={1.8} aria-hidden />,
  },
]

const FAQ_ITEMS = [
  {
    question: "Does this test diagnose cancer?",
    answer: "No. This is a genetic risk assessment that identifies inherited cancer risks.",
  },
  {
    question: "If I have a mutation, will I definitely get cancer?",
    answer: "No. A mutation may increase risk but does not guarantee cancer will develop.",
  },
  {
    question: "Is this only for women?",
    answer: "No. Men can also inherit and pass on certain genetic mutations.",
  },
  {
    question: "Do I need a family history?",
    answer: "Not necessarily. Many people choose preventive screening even without a known family history.",
  },
  {
    question: "Is this confidential?",
    answer: "Yes. All samples and reports are handled under strict confidentiality protocols.",
  },
]

function splitQuestions(items: typeof FAQ_ITEMS) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

export default function CancerPage() {
  const faqColumns = splitQuestions(FAQ_ITEMS)

  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="center" gap={{ base: 28, lg: 42 }}>
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Text className={styles.heroEyebrow}>Cancer</Text>
              <Title order={1} className={styles.heroTitle}>
                Hereditary Cancer Screening Philippines
              </Title>
              <Text className={styles.heroLead}>Understand Your Genetic Risk Before Symptoms Appear</Text>
              <Text className={styles.heroDescription}>
                Cancer is one of the leading health concerns worldwide, but not all cancers happen by chance. A portion
                of cancers are inherited and may be linked to genetic changes passed down through families.
              </Text>
              <Text className={styles.heroDescription}>
                Lablog&apos;s Hereditary Cancer Screening solutions help identify certain inherited genetic risks
                associated with various cancers, allowing individuals and families to make more informed healthcare
                decisions earlier in life.
              </Text>
              <Text className={styles.heroDescription}>
                Early knowledge can help support more personalized screening strategies, proactive healthcare planning,
                and meaningful conversations with your doctor.
              </Text>
              <Text className={styles.heroDescription}>
                Using advanced genomic technology and our ISO-certified partner laboratory, Lablog provides accessible
                and confidential cancer genetic screening throughout the Philippines.
              </Text>

              <Title order={3} mt={24} className={styles.sectionTitle}>
                Why Choose Lablog For Hereditary Cancer Screening?
              </Title>

              <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="sm" mt={12}>
                {[
                  {
                    label: "Personalized",
                    subLabel: "risk assessment",
                    icon: <IconFlask size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Suitable for",
                    subLabel: "men and women",
                    icon: <IconUsers size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Advanced genomic",
                    subLabel: "technology",
                    icon: <IconDna2 size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Supports preventive",
                    subLabel: "healthcare planning",
                    icon: <IconHeartRateMonitor size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Nationwide",
                    subLabel: "collection centers",
                    icon: <IconUsers size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Mobile home service",
                    subLabel: "selected areas",
                    icon: <IconStethoscope size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "ISO-certified",
                    subLabel: "partner laboratory",
                    icon: <IconMicroscope size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Powered by",
                    subLabel: "BGI Genomics expertise",
                    icon: <IconMicroscope size={20} stroke={2} aria-hidden />,
                  },
                  {
                    label: "Strictly",
                    subLabel: "confidential process",
                    icon: <IconShieldLock size={20} stroke={2} aria-hidden />,
                  },
                ].map((feature) => (
                  <Box key={feature.label} className={styles.heroFeature}>
                    <ThemeIcon size={42} radius="xl" variant="light" className={styles.heroFeatureIcon}>
                      {feature.icon}
                    </ThemeIcon>
                    <Text className={styles.heroFeatureLabel}>{feature.label}</Text>
                    <Text className={styles.heroFeatureSubLabel}>{feature.subLabel}</Text>
                  </Box>
                ))}
              </SimpleGrid>
              <Text className={styles.heroDescription} mt={16}>
                <strong>Important:</strong> Hereditary Cancer Screening is a genetic risk assessment tool and does not
                diagnose cancer.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Box className={styles.heroVisualWrap}>
                <Image
                  src="/hero.jpg"
                  alt="Family discussing hereditary cancer screening"
                  fill
                  priority
                  className={styles.heroImage}
                  style={{ objectPosition: "62% center" }}
                />
                <Paper className={styles.heroFloatingCard} radius="xl" p="lg">
                  <Text className={styles.heroFloatingTitle}>Knowledge before symptoms</Text>
                  <Text className={styles.heroFloatingDescription}>
                    Take control of your health through earlier screening and better preparation.
                  </Text>
                  <Button component={Link} href="#contact" className={styles.heroFloatingButton} radius="md">
                    Talk to our specialists
                  </Button>
                </Paper>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Box className={styles.sectionHeading}>
            <Title order={2} className={styles.sectionTitle}>
              Which Cancer Genetic Test Is Right For You?
            </Title>
            <Text className={styles.sectionSubtitle}>
              We offer three screening options depending on your personal and family history.
            </Text>
          </Box>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {TEST_OPTIONS.map((option) => (
              <Paper
                key={option.title}
                className={`${styles.testCard} ${styles[`testCard${option.theme}`]}`}
                radius="xl"
              >
                <ThemeIcon
                  size={72}
                  radius="xl"
                  variant="light"
                  className={`${styles.testIcon} ${styles[`testIcon${option.theme}`]}`}
                >
                  {option.icon}
                </ThemeIcon>
                <Title order={3} className={styles.testTitle}>
                  {option.title}
                </Title>
                <Text className={styles.testSubtitle}>{option.subtitle}</Text>
                <Text className={styles.testDescription}>{option.description}</Text>
                <Stack gap={8} className={styles.testPoints}>
                  {option.points.map((point) => (
                    <Text key={point} className={styles.testPoint}>
                      <IconCircleCheck size={16} stroke={2.2} aria-hidden />
                      {point}
                    </Text>
                  ))}
                </Stack>
                <Anchor component={Link} href={option.href} className={styles.learnMoreLink} underline="never">
                  Learn More
                  <IconArrowRight size={16} stroke={2.2} aria-hidden />
                </Anchor>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
            <Paper radius="xl" className={styles.infoCard}>
              <Title order={3} className={styles.infoTitle}>
                Who Should Consider Hereditary Cancer Screening?
              </Title>
              <Stack gap={8} mt={12}>
                {[
                  "Cancer runs in your family",
                  "Multiple relatives have had cancer",
                  "A relative was diagnosed at a young age",
                  "Family members have had the same type of cancer",
                  "You have concerns about your inherited risk",
                  "You want to be proactive about your future health",
                ].map((item) => (
                  <Text key={item} className={styles.infoPoint}>
                    <IconCircleCheck size={16} stroke={2.2} aria-hidden />
                    {item}
                  </Text>
                ))}
              </Stack>
              <Text mt={14}>
                Even without a known family history, some individuals choose screening as part of a preventive
                healthcare strategy.
              </Text>
            </Paper>

            <Paper radius="xl" className={styles.infoCard}>
              <Title order={3} className={styles.infoTitle}>
                Why Early Genetic Awareness Matters
              </Title>
              <Text mt={8}>Genetic information can help guide future healthcare decisions.</Text>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt={12}>
                {[
                  {
                    title: "Personalized Screening Plans",
                    description: "Work with your doctor to create tailored screening strategies.",
                  },
                  {
                    title: "Earlier Monitoring",
                    description: "Some individuals may benefit from earlier surveillance.",
                  },
                  {
                    title: "Better Family Awareness",
                    description: "Genetic information may also be relevant for other family members.",
                  },
                  {
                    title: "More Informed Decisions",
                    description: "Use genetic insights to support long-term health planning.",
                  },
                  {
                    title: "Greater Peace Of Mind",
                    description: "Knowledge can help reduce uncertainty about your future health.",
                  },
                ].map((item) => (
                  <Box key={item.title} className={styles.infoMiniCard}>
                    <Text fw={700}>{item.title}</Text>
                    <Text size="sm" mt={4}>
                      {item.description}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
              <Text mt={12}>
                Your genes do not determine your destiny. They provide information that can help you prepare.
              </Text>
            </Paper>
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.processSection}`}>
        <Container size="xl">
          <Box className={styles.sectionHeading}>
            <Title order={2} className={styles.sectionTitle}>
              Your Preventive Health Journey
            </Title>
          </Box>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" mt={20}>
            {PROCESS_STEPS.map((step, index) => (
              <Paper key={step.title} radius="xl" className={styles.processCard}>
                <Box className={styles.stepNumber}>{index + 1}</Box>
                <ThemeIcon size={66} radius="xl" variant="light" className={styles.processIcon}>
                  {step.icon}
                </ThemeIcon>
                <Title order={3} className={styles.processTitle}>
                  {step.title}
                </Title>
                <Text className={styles.processDescription}>{step.description}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Grid gap="lg" align="stretch">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Paper radius="xl" className={styles.matrixCard}>
                <Title order={2} className={styles.matrixTitle}>
                  Not Sure Which Test You Need?
                </Title>
                <Text className={styles.matrixSubtitle}>Here&apos;s a quick guide to help you decide.</Text>

                <Stack gap={0} mt={16}>
                  {[
                    ["Family history of breast cancer", "BRCA Genetic Test"],
                    ["Multiple generations affected", "HBOC Screening"],
                    ["Multiple cancer types in the family", "Comprehensive Hereditary Cancer Screening"],
                    ["I want a broader preventive assessment", "Comprehensive Hereditary Cancer Screening"],
                    ["I&apos;m unsure where to start", "Speak with our specialists"],
                  ].map(([situation, recommendation]) => (
                    <Group key={situation} justify="space-between" className={styles.matrixRow}>
                      <Text className={styles.matrixSituation}>{situation}</Text>
                      <Text className={styles.matrixRecommendation}>{recommendation}</Text>
                    </Group>
                  ))}
                </Stack>
                <Text mt={14}>Our team can help determine the most appropriate screening option for you.</Text>
              </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Paper radius="xl" className={styles.supportCard}>
                <ThemeIcon size={72} radius="xl" variant="light" className={styles.supportIcon}>
                  <IconMicroscope size={30} stroke={1.8} aria-hidden />
                </ThemeIcon>
                <Title order={3} className={styles.supportTitle}>
                  Powered by Advanced Genomic Science
                </Title>
                <Text className={styles.supportDescription}>
                  Lablog partners with global genomics leaders and processes samples through our ISO-certified partner
                  laboratory following strict international quality standards.
                </Text>
                <Text className={styles.supportDescription}>
                  Advanced genomic technologies and internationally recognized laboratory protocols help ensure
                  reliable, accurate, and confidential results.
                </Text>
                <Button component={Link} href="#contact" radius="md" className={styles.supportButton}>
                  Contact Us
                </Button>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Paper radius="xl" className={styles.infoCard}>
            <Title order={2} className={styles.sectionTitle}>
              Safe, Private &amp; Confidential
            </Title>
            <Text mt={12}>We understand that genetic information is deeply personal.</Text>
            <Text mt={8}>
              Every sample, report, and patient record is handled with strict confidentiality and released only to
              authorized individuals.
            </Text>
            <Text mt={8}>
              Our team is here to support you with professionalism, compassion, and care throughout your journey.
            </Text>
          </Paper>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Box className={styles.sectionHeading}>
            <Title order={2} className={styles.sectionTitle}>
              Frequently Asked Questions
            </Title>
          </Box>

          <Grid gap="lg">
            {faqColumns.map((column, columnIndex) => (
              <Grid.Col key={`column-${columnIndex}`} span={{ base: 12, md: 6 }}>
                <Accordion variant="separated" radius="md" className={styles.faqAccordion}>
                  {column.map((item) => (
                    <Accordion.Item key={item.question} value={item.question} className={styles.faqItem}>
                      <Accordion.Control icon={<IconFlask size={16} stroke={2.2} aria-hidden />}>
                        <Text className={styles.faqQuestion}>{item.question}</Text>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text className={styles.faqAnswer}>{item.answer}</Text>
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.ctaSection} id="contact">
        <Container size="xl">
          <Paper radius="xl" className={styles.ctaCard}>
            <Group justify="space-between" align="center" gap="lg">
              <Box>
                <Title order={2} className={styles.ctaTitle}>
                  Knowledge today. Prevention tomorrow.
                </Title>
                <Text className={styles.ctaDescription}>
                  Take control of your health with hereditary cancer screening.
                </Text>
              </Box>
              <Stack gap={8} align="flex-end">
                <Button component={Link} href="#" className={styles.ctaButton} radius="md">
                  Book Your Test Now
                </Button>
                <Text className={styles.ctaContact}>or email us at admin@lablog.tech</Text>
              </Stack>
            </Group>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
