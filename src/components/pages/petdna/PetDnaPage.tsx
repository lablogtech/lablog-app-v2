"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./PetDnaPage.module.css"
import { Box, Button, Container, Grid, Group, Paper, Stack, Text, Title } from "@mantine/core"
import Heading from "@/components/shared/heading/Heading"
import FaqSection from "@/components/shared/faq-section/FaqSection"
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
import HighlightCards, { type HighlightCardItem } from "@/components/shared/highlight-cards/HighlightCards"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"
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

const HERO_FEATURES: FeatureHighlightItem[] = [
  { label: "Comprehensive", subLabel: "dog and cat DNA analysis", Icon: IconDna2 },
  { label: "Breed & lineage", subLabel: "identification", Icon: IconUsers },
  { label: "Genetic disease", subLabel: "screening", Icon: IconShieldLock },
  { label: "Behavioral", subLabel: "insights", Icon: IconHeartRateMonitor },
  { label: "Wellness", subLabel: "recommendations", Icon: IconFlask },
  { label: "Grooming", subLabel: "guidance", Icon: IconStethoscope },
  { label: "Diet", subLabel: "recommendations", Icon: IconTestPipe },
  { label: "Breeding", subLabel: "guidance", Icon: IconDna2 },
  { label: "Simple cheek swab", subLabel: "collection", Icon: IconTestPipe },
  { label: "Personalized", subLabel: "digital reports", Icon: IconFileCheck },
  { label: "Available", subLabel: "nationwide", Icon: IconUsers },
  { label: "Secure", subLabel: "confidential results", Icon: IconShieldLock },
]

const DISCOVERY_CARDS: HighlightCardItem[] = [
  {
    title: "Breed & Ancestry Analysis",
    description: "Discover your pet's genetic background and lineage.",
    details: [
      <>
        <strong>Dogs:</strong> Identify up to 149 dog breeds.
      </>,
      <>
        <strong>Cats:</strong> Identify up to 28 cat breeds.
      </>,
    ],
    insights: [
      "Mixed breed pets",
      "Rescue pets",
      "Understanding inherited traits",
      "Learning more about your pet's origins",
    ],
    icon: <IconUsers size={25} stroke={1.9} aria-hidden />,
  },
  {
    title: "Genetic Health Screening",
    description: "Understand inherited risks that may help support preventive veterinary care.",
    details: [
      <>
        <strong>Dogs:</strong> Screen for 133 canine genetic diseases.
      </>,
      <>
        <strong>Cats:</strong> Screen for 49 feline genetic diseases across 6 categories.
      </>,
    ],
    insights: [
      "Blood and heart",
      "Internal medicine conditions",
      "Skin and facial traits",
      "Metabolic and immune system",
      "Nervous system",
      "Musculoskeletal system",
    ],
    note: "Important: Genetic predisposition does not mean a disease will develop.",
    icon: <IconShieldLock size={25} stroke={1.9} aria-hidden />,
  },
  {
    title: "Behavioral Insights",
    description: "Better understand your pet's natural tendencies.",
    insights: [
      "Energy levels",
      "Trainability",
      "Intelligence",
      "Social behavior",
      "Activity preferences",
      "Behavioral tendencies",
    ],
    icon: <IconHeartRateMonitor size={25} stroke={1.9} aria-hidden />,
  },
  {
    title: "Nutrition & Wellness Guidance",
    description: "Support healthier routines based on your pet's genetic profile.",
    insights: [
      "Feeding recommendations",
      "Nutritional tendencies",
      "Weight management support",
      "Lifestyle recommendations",
    ],
    icon: <IconFlask size={25} stroke={1.9} aria-hidden />,
  },
  {
    title: "Grooming Insights",
    description: "Understand coat and grooming traits that may help you establish better grooming routines.",
    insights: [],
    icon: <IconStethoscope size={25} stroke={1.9} aria-hidden />,
  },
  {
    title: "Breeding Guidance",
    description: "Helpful for breeders and pet owners who want to make responsible breeding decisions.",
    insights: [
      "Carrier status awareness",
      "Genetic compatibility considerations",
      "Blood type information (cats)",
      "Breeding recommendations",
    ],
    icon: <IconDna2 size={25} stroke={1.9} aria-hidden />,
  },
]

const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Order your test",
    description: "Book online or speak with our team.",
    icon: <IconCalendarEvent size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "Collect a simple DNA sample",
    description: "Collect a cheek swab using the kit provided.",
    bulletPoints: ["Home test kit", "Collection centers", "Mobile home service (selected areas)"],
    icon: <IconTestPipe size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Laboratory analysis",
    description: "Advanced genomic technologies analyze your pet's DNA to generate personalized reports.",
    icon: <IconMicroscope size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Explore your PetDNA report",
    description: "Receive an easy-to-understand report containing your pet's genetic insights.",
    icon: <IconFileCheck size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
]

const MORE_THAN_TEST_POINTS = [
  "Understand Their Origins",
  "Support Long-Term Health",
  "Improve Daily Care",
  "Understand Their Personality",
  "Plan For The Future",
]

const WHO_IS_FOR = [
  "Dog owners",
  "Cat owners",
  "Rescue pet owners",
  "Breeders",
  "First-time pet owners",
  "Multi-pet households",
  "Owners who want a proactive approach to pet wellness",
]

const FAQ_ITEMS = [
  {
    question: "Is this available for both dogs and cats?",
    answer: "Yes. PetDNA is available for both dogs and cats.",
  },
  {
    question: "Does this diagnose diseases?",
    answer: "No. PetDNA is a wellness and genetic insight tool and not a diagnostic test.",
  },
  {
    question: "How is the sample collected?",
    answer: "A simple cheek swab is used.",
  },
  {
    question: "Can mixed breed pets be tested?",
    answer: "Yes. Mixed breed pets are excellent candidates for DNA testing.",
  },
  {
    question: "Will this tell me exactly what diseases my pet will get?",
    answer: "No. It provides information about genetic tendencies and inherited risks, not certainty.",
  },
  {
    question: "Are the reports easy to understand?",
    answer: "Yes. Reports are designed to be user-friendly and actionable.",
  },
]

export default function PetDnaPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="stretch" gap={{ base: 28, lg: 42 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Heading
                order={1}
                eyebrow="PetDNA Philippines"
                title="Personalized DNA Insights for the Pets You Love"
                subtitle="Our pets are family."
                description={[
                  "Every pet has a unique genetic story that influences their breed, health, behavior, and overall wellness.",
                  "Lablog PetDNA is a comprehensive DNA wellness report designed to help pet owners better understand and care for their dogs and cats through personalized genetic insights.",
                  "Using advanced genomic technologies and our ISO-certified partner laboratory, PetDNA transforms complex genetic information into easy-to-understand reports that can support your pet's lifelong wellbeing.",
                  "Whether you're curious about your pet's ancestry, genetic health risks, behavioral tendencies, or breeding considerations, PetDNA helps you make more informed decisions for your beloved companion.",
                ]}
                classNames={{
                  eyebrow: styles.heroEyebrow,
                  title: styles.heroTitle,
                  subtitle: styles.heroLead,
                  description: styles.heroDescription,
                }}
              />

              <Title order={3} mt={18} className={styles.valueTitle}>
                Why Pet Owners Choose Lablog PetDNA
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
                  circleBackground: "#f0e9ff",
                  circleIcon: "#5a3ec8",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />

              <Group gap="sm" mt={22}>
                <MessengerButton
                  message="Hi Lablog team, I would like to book a PetDNA test."
                  className={styles.primaryButton}
                  radius="md"
                >
                  Book a test
                </MessengerButton>
                <Button
                  component={Link}
                  href="#discover"
                  variant="outline"
                  className={styles.secondaryButton}
                  radius="md"
                >
                  Learn more
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Box className={styles.backgroundImage} aria-hidden="true">
                  <Image
                    src="/pages/FAQ.png"
                    alt="PetDNA insights"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className={styles.backgroundImageElement}
                  />
                  <Box className={styles.heroGlow} aria-hidden />
                </Box>
                <Paper className={styles.heroFloatingCard} radius="xl" p="lg">
                  <Text className={styles.heroFloatingTitle}>Trusted by pet parents across the Philippines</Text>
                  <Text className={styles.heroFloatingDescription}>
                    Personalized and easy-to-understand reports designed to support lifelong pet wellness.
                  </Text>
                </Paper>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" id="discover" className={styles.section}>
        <Container size="xl">
          <HighlightCards title="What Can PetDNA Help You Discover?" items={DISCOVERY_CARDS} />
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.valueSection}`}>
        <Container size="xl">
          <Grid gap="lg" align="stretch">
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Paper radius="xl" className={styles.valueCard}>
                <Title order={3} className={styles.valueTitle}>
                  More Than A DNA Test
                </Title>
                <Text className={styles.valueDescription}>PetDNA helps you become a more informed pet parent.</Text>
                <Stack gap={8} mt={12}>
                  {MORE_THAN_TEST_POINTS.map((point) => (
                    <Text key={point} className={styles.valuePoint}>
                      <IconCircleCheck size={16} stroke={2.1} aria-hidden />
                      {point}
                    </Text>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Paper radius="xl" className={styles.sampleBanner}>
                <Text className={styles.sampleBannerText}>
                  Understand their origins, support long-term health, and improve daily care.
                </Text>
                <MessengerButton
                  message="Hi Lablog team, I would like to book a PetDNA test."
                  variant="outline"
                  radius="md"
                  className={styles.sampleButton}
                >
                  Book your PetDNA test
                </MessengerButton>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.processSection}`}>
        <Container size="xl">
          <HowItWorksSteps
            title="How Does PetDNA Work?"
            subtitle="A simple process from booking to a personalized PetDNA report."
            steps={HOW_IT_WORKS}
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Grid align="center" gap="lg">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Box className={styles.previewPanel}>
                <Image
                  src="/hero.jpg"
                  alt="PetDNA sample dashboard"
                  fill
                  sizes="(max-width: 992px) 100vw, 58vw"
                  className={styles.previewImage}
                />
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 5 }}>
              <Title order={2} className={styles.sectionTitle}>
                Who Is PetDNA For?
              </Title>
              <Text className={styles.previewDescription}>
                PetDNA is ideal for pet owners and families who want a proactive approach to pet wellness.
              </Text>
              <Stack gap={8} mt={12}>
                {WHO_IS_FOR.map((point) => (
                  <Text key={point} className={styles.valuePoint}>
                    <IconCircleCheck size={16} stroke={2.1} aria-hidden />
                    {point}
                  </Text>
                ))}
              </Stack>
              <MessengerButton
                message="Hi Lablog team, I want to speak with a specialist about PetDNA."
                className={styles.primaryButton}
                radius="md"
                mt={16}
              >
                Talk to our specialists
              </MessengerButton>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <FaqSection items={FAQ_ITEMS} />
        </Container>
      </Box>

      <Box component="section" id="contact" className={styles.ctaSection}>
        <Container size="xl">
          <Paper radius="xl" className={styles.ctaCard}>
            <Title order={2} className={styles.ctaTitle}>
              Better understanding. Better care. Better life.
            </Title>
            <Text className={styles.ctaDescription}>
              Book your PetDNA test today and start making more informed decisions for your beloved companion.
            </Text>
            <MessengerButton
              message="Hi Lablog team, I would like to book a PetDNA test."
              className={styles.primaryButton}
              radius="md"
              mt={14}
            >
              Book your PetDNA test
            </MessengerButton>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
