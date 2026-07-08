"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./PregnancyPage.module.css"
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
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
import RecommendationMatrixCard from "@/components/shared/recommendation-matrix-card/RecommendationMatrixCard"
import FaqSection from "@/components/shared/faq-section/FaqSection"
import {
  IconArrowRight,
  IconBabyCarriage,
  IconBuildingHospital,
  IconCalendarEvent,
  IconDna2,
  IconFlask,
  IconHeadset,
  IconHeartHandshake,
  IconHome,
  IconMapPin,
  IconMicroscope,
  IconPhone,
  IconShieldLock,
  IconStethoscope,
  IconTestPipe,
} from "@tabler/icons-react"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"

const HERO_FEATURES: FeatureHighlightItem[] = [
  {
    label: "Advanced",
    subLabel: "genetic technology",
    Icon: IconFlask,
  },
  {
    label: "ISO-Certified",
    subLabel: "laboratories",
    Icon: IconBuildingHospital,
  },
  {
    label: "Nationwide",
    subLabel: "collection centers",
    Icon: IconMapPin,
  },
  {
    label: "Home service",
    subLabel: "available",
    Icon: IconHome,
  },
  {
    label: "Confidential",
    subLabel: "and secure",
    Icon: IconShieldLock,
  },
  {
    label: "Expert",
    subLabel: "support",
    Icon: IconHeartHandshake,
  },
]

const TEST_OPTIONS = [
  {
    title: "NIPT (Non-Invasive Prenatal Test)",
    subtitle: "Best for screening your baby's chromosomal health during pregnancy.",
    description: "A simple blood test that analyzes your baby's DNA to screen for common chromosomal conditions.",
    href: "/pregnancy/nipt-philippines",
    icon: <IconBabyCarriage size={28} stroke={1.8} aria-hidden />,
    points: [
      "10-week pregnant and beyond",
      "Down Syndrome screening",
      "Edwards Syndrome screening",
      "Patau Syndrome screening",
    ],
    theme: "green",
  },
  {
    title: "Carrier Screening",
    subtitle: "Best for understanding inherited conditions parents may carry.",
    description:
      "Find out if you and your partner carry specific inherited conditions that may be passed on to your child.",
    href: "/pregnancy/carrier-screening-philippines",
    icon: <IconDna2 size={28} stroke={1.8} aria-hidden />,
    points: ["Spinal Muscular Atrophy (SMA)", "Thalassemia", "Cystic Fibrosis", "And many more"],
    theme: "blue",
  },
  {
    title: "Newborn Genetic Screening",
    subtitle: "Best for early health insights after your baby is born.",
    description:
      "Helps identify certain inherited conditions early, allowing for proactive care and better health outcomes.",
    href: "/pregnancy/newborn-genetic-screening-philippines",
    icon: <IconStethoscope size={28} stroke={1.8} aria-hidden />,
    points: [
      "Early detection of genetic conditions",
      "Informed healthcare decisions",
      "Support long-term wellness",
      "Peace of mind for new parents",
    ],
    theme: "purple",
  },
]

const JOURNEY_STEPS = [
  {
    stage: "Before Pregnancy",
    title: "Carrier Screening",
    description: "Understand inherited conditions you and your partner may carry.",
    icon: <IconDna2 size={28} stroke={1.8} aria-hidden />,
  },
  {
    stage: "During Pregnancy",
    title: "NIPT",
    description: "Screen your baby's chromosomal health through a simple blood test.",
    icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
  },
  {
    stage: "After Birth",
    title: "Newborn Screening",
    description: "Gain early insights that may support your child's long-term development.",
    icon: <IconBabyCarriage size={28} stroke={1.8} aria-hidden />,
  },
]

const PROCESS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Contact Our Team",
    description: "Tell us about your stage or goals. We'll guide you to the right test.",
    icon: <IconPhone size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "Sample Collection",
    description: "Depending on the test, sample collection may include:",
    bulletPoints: ["Blood sample", "Cheek swab", "Newborn sample collection"],
    icon: <IconTestPipe size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Laboratory Analysis",
    description: "Samples are processed in our ISO-certified partner laboratories.",
    icon: <IconMicroscope size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Receive Your Results",
    description: "Your confidential report will be securely released to authorized individuals.",
    icon: <IconCalendarEvent size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
]

const VALUE_POINTS = [
  {
    title: "Science-Backed Insights",
    icon: <IconFlask size={24} stroke={1.9} aria-hidden />,
    description: "Advanced technology for informed decisions.",
  },
  {
    title: "Convenient & Accessible",
    icon: <IconMapPin size={24} stroke={1.9} aria-hidden />,
    description: "Nationwide centers, home service, and easy collection.",
  },
  {
    title: "Expert Support",
    icon: <IconHeartHandshake size={24} stroke={1.9} aria-hidden />,
    description: "Our team guides you every step of the way.",
  },
  {
    title: "Privacy First",
    icon: <IconShieldLock size={24} stroke={1.9} aria-hidden />,
    description: "Your information and results are always confidential.",
  },
  {
    title: "Trusted Laboratory Partners",
    icon: <IconBuildingHospital size={24} stroke={1.9} aria-hidden />,
    description: "Processed with strict international standards for accuracy.",
  },
]

const FAQ_ITEMS = [
  {
    question: "Are these tests safe?",
    answer: "Yes. The tests are non-invasive or minimally invasive depending on the service selected.",
  },
  {
    question: "Do I need a doctor's referral?",
    answer: "Not always. Our team can guide you based on your situation.",
  },
  {
    question: "Can these tests diagnose diseases?",
    answer:
      "Most of these tests are screening tools that provide valuable health insights but are not diagnostic tests.",
  },
  {
    question: "Can participants be in different locations?",
    answer: "For certain tests, yes. Our team can coordinate collections if needed.",
  },
  {
    question: "Are the results confidential?",
    answer: "Yes. All information and results are handled with strict confidentiality.",
  },
]

export default function PregnancyPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="stretch" gap={{ base: 28, lg: 42 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Heading
                order={1}
                eyebrow="Pregnancy"
                title="Prenatal & Newborn Genetic Testing Philippines"
                subtitle="Genetic insights for every stage of your parenting journey"
                description="From planning your pregnancy to welcoming your baby, our advanced genetic testing solutions provide valuable insights that help you make informed healthcare decisions with greater confidence."
                classNames={{
                  eyebrow: styles.heroEyebrow,
                  title: styles.heroTitle,
                  subtitle: styles.heroLead,
                  description: styles.heroDescription,
                }}
              />

              <FeatureHighlightsGrid
                items={HERO_FEATURES}
                cols={{ base: 2, sm: 3, lg: 6 }}
                spacing="sm"
                mt={22}
                colors={{
                  circleBackground: "#eaf2ff",
                  circleIcon: "#356fcb",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Box className={styles.backgroundImage} aria-hidden="true">
                  <Image
                    src="/pages/Pregnancy parent page.png"
                    alt="Expecting mother consultation"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className={styles.backgroundImageElement}
                  />
                  <Box className={styles.heroGlow} aria-hidden />
                </Box>
                <Paper className={styles.heroFloatingCard} radius="xl" p="lg">
                  <Text className={styles.heroFloatingTitle}>Not sure which test is right for you?</Text>
                  <Text className={styles.heroFloatingDescription}>
                    Our specialists will help you choose the most appropriate test based on your stage and needs.
                  </Text>
                  <MessengerButton
                    message="Hi Lablog team, I need help choosing the right pregnancy genetic test."
                    className={styles.heroFloatingButton}
                    radius="md"
                  >
                    Ask our specialists
                  </MessengerButton>
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
              Which Pregnancy Genetic Test Is Right For You?
            </Title>
            <Text className={styles.sectionSubtitle}>
              We offer three testing solutions depending on your stage of pregnancy and your healthcare goals.
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

      <Box component="section" className={`${styles.section} ${styles.journeySection}`}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Your Genetic Journey Through Parenthood
          </Title>
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={24}>
            {JOURNEY_STEPS.map((step) => (
              <Paper key={step.title} radius="xl" className={styles.journeyCard}>
                <Group wrap="nowrap" align="center" gap="md">
                  <ThemeIcon size={58} radius="xl" variant="light" className={styles.journeyIcon}>
                    {step.icon}
                  </ThemeIcon>
                  <Box>
                    <Text className={styles.journeyStage}>{step.stage}</Text>
                    <Title order={3} className={styles.journeyTitle}>
                      {step.title}
                    </Title>
                  </Box>
                </Group>
                <Text className={styles.journeyDescription}>{step.description}</Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Grid gap="lg" align="stretch">
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <RecommendationMatrixCard
                title="Not Sure Which Test You Need?"
                subtitle="Here's a simple guide to help you."
                rows={[
                  {
                    situation: "We are planning to have a baby.",
                    recommendation: "Carrier Screening",
                    recommendationHref: "/pregnancy/carrier-screening-philippines",
                  },
                  {
                    situation: "I am currently pregnant.",
                    recommendation: "NIPT (Non-Invasive Prenatal Test)",
                    recommendationHref: "/pregnancy/nipt-philippines",
                  },
                  {
                    situation: "My baby has already been born.",
                    recommendation: "Newborn Genetic Screening",
                    recommendationHref: "/pregnancy/newborn-genetic-screening-philippines",
                  },
                  {
                    situation: "We have a family history of genetic conditions.",
                    recommendation: "Carrier Screening",
                    recommendationHref: "/pregnancy/carrier-screening-philippines",
                  },
                  {
                    situation: "I want additional reassurance during pregnancy.",
                    recommendation: "NIPT (Non-Invasive Prenatal Test)",
                    recommendationHref: "/pregnancy/nipt-philippines",
                  },
                  {
                    situation: "I want early health insights for my newborn",
                    recommendation: "Newborn Genetic Screening",
                    recommendationHref: "/pregnancy/newborn-genetic-screening-philippines",
                  },
                ]}
                accentColor="#3477d5"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Paper radius="xl" className={styles.supportCard}>
                <ThemeIcon size={72} radius="xl" variant="light" className={styles.supportIcon}>
                  <IconHeadset size={30} stroke={1.8} aria-hidden />
                </ThemeIcon>
                <Title order={3} className={styles.supportTitle}>
                  We&apos;re Here To Help
                </Title>
                <Text className={styles.supportDescription}>
                  Our care specialists can answer your questions and recommend the most suitable test for your needs.
                </Text>
                <MessengerButton
                  message="Hi Lablog team, I have questions about pregnancy genetic screening options."
                  radius="md"
                  className={styles.supportButton}
                >
                  Contact Us
                </MessengerButton>
                <Text className={styles.supportPhone}>or call us at 0956 064 8809</Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.processSection}`}>
        <Container size="xl">
          <HowItWorksSteps
            title="How Does The Process Work?"
            subtitle="A guided and confidential process from consultation to result release."
            steps={PROCESS_STEPS}
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Box className={styles.sectionHeading}>
            <Title order={2} className={styles.sectionTitle}>
              Why Families Choose Lablog
            </Title>
          </Box>
          <Paper className={styles.valueStrip} radius="xl">
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="md">
              {VALUE_POINTS.map((item) => (
                <Box key={item.title} className={styles.valueItem}>
                  <ThemeIcon size={54} radius="xl" variant="light" className={styles.valueIcon}>
                    {item.icon}
                  </ThemeIcon>
                  <Text className={styles.valueTitle}>{item.title}</Text>
                  <Text className={styles.valueDescription}>{item.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </Paper>
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
                  Knowledge today. Healthier tomorrows.
                </Title>
                <Text className={styles.ctaDescription}>Take the next step for you and your family.</Text>
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
