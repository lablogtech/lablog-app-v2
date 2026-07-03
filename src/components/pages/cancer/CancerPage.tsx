"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./CancerPage.module.css"
import {
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
import Heading from "@/components/shared/heading/Heading"
import ConfidentialInfoCard from "@/components/shared/confidential-info-card/ConfidentialInfoCard"
import RecommendationMatrixCard from "@/components/shared/recommendation-matrix-card/RecommendationMatrixCard"
import FaqSection from "@/components/shared/faq-section/FaqSection"
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
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
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"

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

const PROCESS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Understand Family History",
    description: "Understand your family history.",
    icon: <IconUsers size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "Choose The Appropriate Test",
    description: "Choose the appropriate genetic screening.",
    icon: <IconDna2 size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Review Your Results",
    description: "Review your results with your healthcare provider.",
    icon: <IconFlask size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Plan Next Steps",
    description: "Create a personalized health plan.",
    icon: <IconHeartRateMonitor size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
]

const HERO_FEATURES: FeatureHighlightItem[] = [
  {
    label: "Personalized",
    subLabel: "risk assessment",
    Icon: IconFlask,
  },
  {
    label: "Suitable for",
    subLabel: "men and women",
    Icon: IconUsers,
  },
  {
    label: "Advanced genomic",
    subLabel: "technology",
    Icon: IconDna2,
  },
  {
    label: "Supports preventive",
    subLabel: "healthcare planning",
    Icon: IconHeartRateMonitor,
  },
  {
    label: "Nationwide",
    subLabel: "collection centers",
    Icon: IconUsers,
  },
  {
    label: "Mobile home service",
    subLabel: "selected areas",
    Icon: IconStethoscope,
  },
  {
    label: "ISO-certified",
    subLabel: "partner laboratory",
    Icon: IconMicroscope,
  },
  {
    label: "Powered by",
    subLabel: "BGI Genomics expertise",
    Icon: IconMicroscope,
  },
  {
    label: "Strictly",
    subLabel: "confidential process",
    Icon: IconShieldLock,
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

export default function CancerPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="stretch" gap={{ base: 28, lg: 42 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Heading
                order={1}
                eyebrow="Cancer"
                title="Hereditary Cancer Screening Philippines"
                subtitle="Understand Your Genetic Risk Before Symptoms Appear"
                description={[
                  "Cancer is one of the leading health concerns worldwide, but not all cancers happen by chance. A portion of cancers are inherited and may be linked to genetic changes passed down through families.",
                  "Lablog's Hereditary Cancer Screening solutions help identify certain inherited genetic risks associated with various cancers, allowing individuals and families to make more informed healthcare decisions earlier in life.",
                  "Early knowledge can help support more personalized screening strategies, proactive healthcare planning, and meaningful conversations with your doctor.",
                  "Using advanced genomic technology and our ISO-certified partner laboratory, Lablog provides accessible and confidential cancer genetic screening throughout the Philippines.",
                ]}
                classNames={{
                  eyebrow: styles.heroEyebrow,
                  title: styles.heroTitle,
                  subtitle: styles.heroLead,
                  description: styles.heroDescription,
                }}
              />

              <Title order={3} mt={24} className={styles.sectionTitle}>
                Why Choose Lablog For Hereditary Cancer Screening?
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
                  circleBackground: "#f2e9ff",
                  circleIcon: "#7f43cb",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />
              <Text className={styles.heroDescription} mt={16}>
                <strong>Important:</strong> Hereditary Cancer Screening is a genetic risk assessment tool and does not
                diagnose cancer.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Box className={styles.backgroundImage} aria-hidden="true">
                  <Image
                    src="/pages/Cancer parent page.png"
                    alt="Family discussing hereditary cancer screening"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className={styles.backgroundImageElement}
                  />
                  <Box className={styles.heroGlow} aria-hidden />
                </Box>
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
          <HowItWorksSteps
            title="Your Preventive Health Journey"
            subtitle="Follow these simple steps to complete hereditary cancer screening."
            steps={PROCESS_STEPS}
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Grid gap="lg" align="stretch">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <RecommendationMatrixCard
                title="Not Sure Which Test You Need?"
                subtitle="Here's a quick guide to help you decide."
                rows={[
                  {
                    situation: "Family history of breast cancer",
                    recommendation: "BRCA Genetic Test",
                    recommendationHref: "/cancer/brca-genetic-test-philippines",
                  },
                  {
                    situation: "Multiple generations affected",
                    recommendation: "HBOC Screening",
                    recommendationHref: "/cancer/hboc-screening-philippines",
                  },
                  {
                    situation: "Multiple cancer types in the family",
                    recommendation: "Comprehensive Hereditary Cancer Screening",
                    recommendationHref: "/cancer/comprehensive-hereditary-cancer-screening-philippines",
                  },
                  {
                    situation: "I want a broader preventive assessment",
                    recommendation: "Comprehensive Hereditary Cancer Screening",
                    recommendationHref: "/cancer/comprehensive-hereditary-cancer-screening-philippines",
                  },
                  {
                    situation: "I'm unsure where to start",
                    recommendation: "Speak with our specialists",
                    recommendationHref: "#contact",
                  },
                ]}
                note="Our team can help determine the most appropriate screening option for you."
                accentColor="#8a45d9"
              />
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
          <ConfidentialInfoCard
            title="Safe, Private & Confidential"
            paragraphs={[
              "We understand that genetic information is deeply personal.",
              "Every sample, report, and patient record is handled with strict confidentiality and released only to authorized individuals.",
              "Our team is here to support you with professionalism, compassion, and care throughout your journey.",
            ]}
            accentColor="#2e74e0"
            icon={<IconShieldLock size={22} stroke={1.9} aria-hidden />}
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <FaqSection items={FAQ_ITEMS} />
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
