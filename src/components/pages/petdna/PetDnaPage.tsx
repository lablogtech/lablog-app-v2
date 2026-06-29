"use client"

import Image from "next/image"
import Link from "next/link"
import styles from "./PetDnaPage.module.css"
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

const WHY_PETDNA_POINTS = [
  "Comprehensive dog and cat DNA analysis",
  "Breed and lineage identification",
  "Genetic disease screening",
  "Behavioral insights",
  "Wellness recommendations",
  "Grooming guidance",
  "Diet recommendations",
  "Breeding guidance",
  "Simple cheek swab collection",
  "Personalized digital reports",
  "Nationwide accessibility",
  "Secure and confidential results",
]

const DISCOVERY_CARDS = [
  {
    title: "Breed & Ancestry Analysis",
    description: "Discover your pet's genetic background and lineage.",
    dogs: "Identify up to 149 dog breeds.",
    cats: "Identify up to 28 cat breeds.",
    points: [
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
    dogs: "Screen for 133 canine genetic diseases.",
    cats: "Screen for 49 feline genetic diseases across 6 categories.",
    points: [
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
    points: [
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
    points: [
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
    points: [],
    icon: <IconStethoscope size={25} stroke={1.9} aria-hidden />,
  },
  {
    title: "Breeding Guidance",
    description: "Helpful for breeders and pet owners who want to make responsible breeding decisions.",
    points: [
      "Carrier status awareness",
      "Genetic compatibility considerations",
      "Blood type information (cats)",
      "Breeding recommendations",
    ],
    icon: <IconDna2 size={25} stroke={1.9} aria-hidden />,
  },
]

const HOW_IT_WORKS = [
  {
    title: "Order your test",
    description: "Book online or speak with our team.",
    icon: <IconCalendarEvent size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Collect a simple DNA sample",
    description: "Collect a cheek swab using the kit provided.",
    options: ["Home test kit", "Collection centers", "Mobile home service (selected areas)"],
    icon: <IconTestPipe size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Laboratory analysis",
    description: "Advanced genomic technologies analyze your pet's DNA to generate personalized reports.",
    icon: <IconMicroscope size={28} stroke={1.8} aria-hidden />,
  },
  {
    title: "Explore your PetDNA report",
    description: "Receive an easy-to-understand report containing your pet's genetic insights.",
    icon: <IconFileCheck size={28} stroke={1.8} aria-hidden />,
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

function splitQuestions(items: typeof FAQ_ITEMS) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

export default function PetDnaPage() {
  const faqColumns = splitQuestions(FAQ_ITEMS)

  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="center" gap={{ base: 28, lg: 42 }}>
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

              <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="sm" mt={12}>
                {WHY_PETDNA_POINTS.map((item) => (
                  <Paper key={item} radius="md" className={styles.heroFeature}>
                    <IconCircleCheck size={16} stroke={2.1} aria-hidden />
                    <Text>{item}</Text>
                  </Paper>
                ))}
              </SimpleGrid>

              <Group gap="sm" mt={22}>
                <Button component={Link} href="#contact" className={styles.primaryButton} radius="md">
                  Book a test
                </Button>
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
              <Box className={styles.heroVisualWrap}>
                <Image src="/hero.jpg" alt="PetDNA insights" fill priority className={styles.heroImage} />
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
          <Box className={styles.sectionHeading}>
            <Title order={2} className={styles.sectionTitle}>
              What Can PetDNA Help You Discover?
            </Title>
          </Box>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
            {DISCOVERY_CARDS.map((card) => (
              <Paper key={card.title} radius="xl" className={styles.discoveryCard}>
                <ThemeIcon size={56} radius="xl" variant="light" className={styles.discoveryIcon}>
                  {card.icon}
                </ThemeIcon>
                <Title order={3} className={styles.discoveryTitle}>
                  {card.title}
                </Title>
                <Text className={styles.discoveryDescription}>{card.description}</Text>
                {card.dogs && (
                  <Text className={styles.valueDescription}>
                    <strong>Dogs:</strong> {card.dogs}
                  </Text>
                )}
                {card.cats && (
                  <Text className={styles.valueDescription}>
                    <strong>Cats:</strong> {card.cats}
                  </Text>
                )}
                <Stack gap={6} mt={10}>
                  {card.points.map((point) => (
                    <Text key={point} className={styles.discoveryPoint}>
                      <IconCircleCheck size={14} stroke={2.1} aria-hidden />
                      {point}
                    </Text>
                  ))}
                </Stack>
                {card.note && (
                  <Text className={styles.previewDescription}>
                    <strong>{card.note}</strong>
                  </Text>
                )}
              </Paper>
            ))}
          </SimpleGrid>
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
                <Button component={Link} href="#contact" variant="outline" radius="md" className={styles.sampleButton}>
                  Book your PetDNA test
                </Button>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={`${styles.section} ${styles.processSection}`}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            How Does PetDNA Work?
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md" mt={20}>
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
                      <Text key={option} className={styles.discoveryPoint}>
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
          <Grid align="center" gap="lg">
            <Grid.Col span={{ base: 12, lg: 7 }}>
              <Box className={styles.previewPanel}>
                <Image src="/hero.jpg" alt="PetDNA sample dashboard" fill className={styles.previewImage} />
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
              Better understanding. Better care. Better life.
            </Title>
            <Text className={styles.ctaDescription}>
              Book your PetDNA test today and start making more informed decisions for your beloved companion.
            </Text>
            <Button component={Link} href="#contact" className={styles.primaryButton} radius="md" mt={14}>
              Book your PetDNA test
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
