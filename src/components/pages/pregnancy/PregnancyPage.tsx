"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import styles from "./PregnancyPage.module.css"
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

const PROCESS_STEPS = [
  {
    title: "Contact Our Team",
    description: "Tell us about your stage or goals. We'll guide you to the right test.",
    icon: <IconPhone size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Sample Collection",
    description: "Depending on the test, sample collection may include:",
    bulletPoints: ["Blood sample", "Cheek swab", "Newborn sample collection"],
    icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Laboratory Analysis",
    description: "Samples are processed in our ISO-certified partner laboratories.",
    icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Receive Your Results",
    description: "Your confidential report will be securely released to authorized individuals.",
    icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden />,
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

function splitQuestions(items: typeof FAQ_ITEMS) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

export default function PregnancyPage() {
  const faqColumns = splitQuestions(FAQ_ITEMS)

  return (
    <Box className={styles.page}>
      <Header />

      <Box component="main">
        <Box component="section" className={styles.heroSection}>
          <Container size="xl">
            <Grid align="center" gap={{ base: 28, lg: 42 }}>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Text className={styles.heroEyebrow}>Pregnancy</Text>
                <Title order={1} className={styles.heroTitle}>
                  Prenatal & Newborn Genetic Testing Philippines
                </Title>
                <Text className={styles.heroLead}>Genetic insights for every stage of your parenting journey</Text>
                <Text className={styles.heroDescription}>
                  From planning your pregnancy to welcoming your baby, our advanced genetic testing solutions provide
                  valuable insights that help you make informed healthcare decisions with greater confidence.
                </Text>

                <SimpleGrid cols={{ base: 2, sm: 3, lg: 6 }} spacing="sm" mt={22}>
                  {[
                    {
                      label: "Advanced",
                      subLabel: "genetic technology",
                      icon: <IconFlask size={20} stroke={2} aria-hidden />,
                    },
                    {
                      label: "ISO-Certified",
                      subLabel: "laboratories",
                      icon: <IconBuildingHospital size={20} stroke={2} aria-hidden />,
                    },
                    {
                      label: "Nationwide",
                      subLabel: "collection centers",
                      icon: <IconMapPin size={20} stroke={2} aria-hidden />,
                    },
                    {
                      label: "Home service",
                      subLabel: "available",
                      icon: <IconHome size={20} stroke={2} aria-hidden />,
                    },
                    {
                      label: "Confidential",
                      subLabel: "and secure",
                      icon: <IconShieldLock size={20} stroke={2} aria-hidden />,
                    },
                    {
                      label: "Expert",
                      subLabel: "support",
                      icon: <IconHeartHandshake size={20} stroke={2} aria-hidden />,
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
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Box className={styles.heroVisualWrap}>
                  <Image
                    src="/hero.jpg"
                    alt="Expecting mother consultation"
                    fill
                    priority
                    className={styles.heroImage}
                    style={{ objectPosition: "68% center" }}
                  />
                  <Paper className={styles.heroFloatingCard} radius="xl" p="lg">
                    <Text className={styles.heroFloatingTitle}>Not sure which test is right for you?</Text>
                    <Text className={styles.heroFloatingDescription}>
                      Our specialists will help you choose the most appropriate test based on your stage and needs.
                    </Text>
                    <Button component={Link} href="#contact" className={styles.heroFloatingButton} radius="md">
                      Ask our specialists
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
                <Paper radius="xl" className={styles.matrixCard}>
                  <Title order={2} className={styles.matrixTitle}>
                    Not Sure Which Test You Need?
                  </Title>
                  <Text className={styles.matrixSubtitle}>Here&apos;s a simple guide to help you.</Text>

                  <Stack gap={0} mt={18}>
                    {[
                      {
                        situation: "We are planning to have a baby.",
                        recommendation: "Carrier Screening",
                      },
                      {
                        situation: "I am currently pregnant.",
                        recommendation: "NIPT (Non-Invasive Prenatal Test)",
                      },
                      {
                        situation: "My baby has already been born.",
                        recommendation: "Newborn Genetic Screening",
                      },
                      {
                        situation: "We have a family history of genetic conditions.",
                        recommendation: "Carrier Screening",
                      },
                      {
                        situation: "I want additional reassurance during pregnancy.",
                        recommendation: "NIPT (Non-Invasive Prenatal Test)",
                      },
                      {
                        situation: "I want early health insights for my newborn",
                        recommendation: "Newborn Genetic Screening",
                      },
                    ].map((row) => (
                      <Group key={row.situation} justify="space-between" className={styles.matrixRow}>
                        <Text className={styles.matrixSituation}>{row.situation}</Text>
                        <Text className={styles.matrixRecommendation}>{row.recommendation}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Paper>
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
                  <Button component={Link} href="#contact" radius="md" className={styles.supportButton}>
                    Contact Us
                  </Button>
                  <Text className={styles.supportPhone}>or call us at +63 917 817 5468</Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        <Box component="section" className={`${styles.section} ${styles.processSection}`}>
          <Container size="xl">
            <Box className={styles.sectionHeading}>
              <Title order={2} className={styles.sectionTitle}>
                How Does The Process Work?
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
                  {step.bulletPoints ? (
                    <Box component="ul" className={styles.processList}>
                      {step.bulletPoints.map((point) => (
                        <li key={point} className={styles.processListItem}>
                          {point}
                        </li>
                      ))}
                    </Box>
                  ) : null}
                </Paper>
              ))}
            </SimpleGrid>
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

      <Footer />
    </Box>
  )
}
