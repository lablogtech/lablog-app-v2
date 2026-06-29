"use client"

import Image from "next/image"
import styles from "./FaqPage.module.css"
import { Accordion, Box, Button, Card, Container, Grid, Group, Paper, Text, TextInput, Title } from "@mantine/core"
import {
  IconBabyCarriage,
  IconBandage,
  IconDna2,
  IconHelpHexagon,
  IconPaw,
  IconRibbonHealth,
  IconSearch,
  IconStethoscope,
} from "@tabler/icons-react"

const SERVICE_TABS = [
  { label: "Paternity DNA Testing", icon: IconDna2 },
  { label: "Prenatal & NIPT", icon: IconBabyCarriage },
  { label: "Carrier & Newborn Screening", icon: IconStethoscope },
  { label: "Cancer Screening & Prevention", icon: IconRibbonHealth },
  { label: "DNA Blueprint (For Children)", icon: IconBandage },
  { label: "PetDNA", icon: IconPaw },
  { label: "General Questions", icon: IconHelpHexagon },
]

const CATEGORY_LIST = [
  "Paternity DNA Testing",
  "Legal Paternity Testing",
  "Prenatal Paternity (NIPPT)",
  "Family Relationship Testing",
  "NIPT (Non-Invasive Prenatal Testing)",
  "Carrier Screening",
  "Newborn Genetic Screening",
  "Cancer Screening",
  "BRCA Genetic Test",
  "HBOC Screening",
  "Comprehensive Hereditary Cancer Screening",
  "General Questions",
]

const FAQS = [
  {
    question: "What is the difference between Legal and Non-Legal Paternity DNA testing?",
    answer:
      "Non-legal testing is for personal knowledge and family clarification. Legal testing follows a strict chain-of-custody process and can be used in court, immigration, child support, and custody cases.",
  },
  {
    question: "How accurate is a Paternity DNA test?",
    answer:
      "Our paternity DNA tests provide over 99.99% probability of paternity when the alleged father is biologically related.",
  },
  {
    question: "How long does it take to get Paternity DNA test results?",
    answer:
      "Turnaround time typically ranges from 5 to 7 working days after sample collection and laboratory processing.",
  },
  {
    question: "Can I do a Paternity DNA test at home?",
    answer:
      "Yes. Non-legal options can be collected at home in select areas, while legal tests require supervised sample collection.",
  },
  {
    question: "Can participants be in different cities or provinces?",
    answer: "Yes. We can coordinate collection across locations through partner collection centers.",
  },
  {
    question: "Is the mother's sample required?",
    answer: "Not always, but adding the mother's sample can increase clarity and confidence in result interpretation.",
  },
]

export default function FaqPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box className={styles.heroSection} component="section">
        <Container size="xl">
          <Grid align="center" gutter={{ base: "md", lg: 40 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Text className={styles.breadcrumb}>Home / FAQ</Text>
              <Title order={1} className={styles.heroTitle}>
                Frequently Asked Questions
              </Title>
              <Text className={styles.heroSubtitle}>Your questions. Answered with clarity.</Text>
              <Text className={styles.heroDescription}>
                Browse answers to the most common questions about our DNA testing services. If you cannot find what you
                are looking for, our support team is here to help.
              </Text>
              <TextInput
                leftSection={<IconSearch size={16} stroke={2} />}
                placeholder="Search for a question..."
                radius="xl"
                size="md"
                classNames={{ input: styles.searchInput }}
                mt="lg"
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Image src="/hero.jpg" alt="Lablog support" fill className={styles.heroImage} sizes="50vw" />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.serviceNav} component="section">
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center" mb="md">
            Browse By Service
          </Title>
          <Grid gutter="sm">
            {SERVICE_TABS.map((tab) => {
              const Icon = tab.icon
              return (
                <Grid.Col key={tab.label} span={{ base: 6, md: 4, lg: 12 / 7 }}>
                  <Paper className={styles.serviceTab}>
                    <Icon size={20} stroke={2} />
                    <Text>{tab.label}</Text>
                  </Paper>
                </Grid.Col>
              )
            })}
          </Grid>
        </Container>
      </Box>

      <Box className={styles.section} component="section">
        <Container size="xl">
          <Grid gutter="lg" align="start">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Card withBorder radius="lg" className={styles.sidebarCard}>
                <Title order={4} className={styles.sidebarTitle}>
                  Categories
                </Title>
                <Box className={styles.categoryList}>
                  {CATEGORY_LIST.map((category, idx) => (
                    <Paper
                      key={category}
                      className={`${styles.categoryItem} ${idx === 0 ? styles.categoryActive : ""}`}
                    >
                      <Text>{category}</Text>
                      <Text className={styles.categoryCount}>{Math.max(4, 12 - (idx % 7))}</Text>
                    </Paper>
                  ))}
                </Box>

                <Paper className={styles.helpCard}>
                  <Text className={styles.helpTitle}>Still need help?</Text>
                  <Text className={styles.helpDescription}>Our team is here for you.</Text>
                  <Button variant="outline" className={styles.helpButton} radius="md" fullWidth mt="sm">
                    Contact Us
                  </Button>
                </Paper>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 9 }}>
              <Card withBorder radius="lg" className={styles.faqCard}>
                <Group justify="space-between" mb="md">
                  <Title order={3} className={styles.faqTitle}>
                    Paternity DNA Testing
                  </Title>
                  <Text className={styles.faqCount}>12 Questions</Text>
                </Group>

                <Accordion
                  variant="separated"
                  radius="md"
                  className={styles.accordion}
                  defaultValue={FAQS[0]?.question}
                >
                  {FAQS.map((item) => (
                    <Accordion.Item key={item.question} value={item.question}>
                      <Accordion.Control>{item.question}</Accordion.Control>
                      <Accordion.Panel>{item.answer}</Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>

                <Button variant="subtle" className={styles.viewAllButton} mt="md">
                  View all 12 questions
                </Button>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.ctaSection} component="section">
        <Container size="xl">
          <Paper className={styles.ctaCard}>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Title order={2} className={styles.ctaTitle}>
                  We are here to support you.
                </Title>
                <Text className={styles.ctaDescription}>
                  Need help choosing the right test? Talk to our team for personalized guidance.
                </Text>
                <Button className={styles.ctaButton} radius="md" mt="md">
                  Talk To Our Specialists
                </Button>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
