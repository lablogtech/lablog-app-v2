"use client"

import Image from "next/image"
import styles from "./FaqPage.module.css"
import { useState } from "react"
import {
  Accordion,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Highlight,
  Paper,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from "@mantine/core"
import { IconChevronDown, IconHelp, IconSearch } from "@tabler/icons-react"

type FaqItem = {
  question: string
  answer: string
}

type FaqCategory = {
  label: string
  items: FaqItem[]
}

const ALL_CATEGORIES_LABEL = "All Categories"

const COMPILED_FAQ_BY_CATEGORY: FaqCategory[] = [
  {
    label: "Paternity DNA Testing",
    items: [
      {
        question: "Is this DNA test confidential?",
        answer:
          "Yes. Your information, samples, and results are handled confidentially and only released to authorized individuals.",
      },
      {
        question: "Can participants be in different locations?",
        answer: "Yes. We can arrange separate sample collections if participants are in different cities or provinces.",
      },
      {
        question: "Can I use these results in court?",
        answer:
          "No. This peace-of-mind paternity DNA test is for personal knowledge only and cannot be used in court, immigration, or legal proceedings.",
      },
      {
        question: "Can we do the DNA test at home?",
        answer:
          "Yes. Depending on your situation, we can provide an at-home DNA test kit or arrange mobile home service in selected areas.",
      },
      {
        question: "How is accuracy determined?",
        answer:
          "Samples are processed through our ISO-certified partner laboratory using advanced DNA analysis technology and strict quality control procedures.",
      },
      {
        question: "Is the test painful?",
        answer:
          "Standard collection is typically done with painless cheek swab samples, making the process simple and minimally invasive.",
      },
    ],
  },
  {
    label: "NIPT (Non-Invasive Prenatal Testing)",
    items: [
      {
        question: "How early can I take NIPT?",
        answer: "NIPT can be performed as early as 10 weeks of pregnancy.",
      },
      {
        question: "Is NIPT safe for my baby?",
        answer: "Yes. Only a blood sample from the mother is required.",
      },
      {
        question: "Is NIPT accurate?",
        answer:
          "NIPT has 99%+ accuracy for common trisomies such as Down Syndrome, Edwards Syndrome, and Patau Syndrome.",
      },
      {
        question: "Do I need to fast?",
        answer: "No fasting is required.",
      },
      {
        question: "Is NIPT mandatory?",
        answer: "No. NIPT is an optional prenatal screening test.",
      },
      {
        question: "Can NIPT determine my baby's gender?",
        answer:
          "Yes. Fetal sex determination may be available depending on your selected package and local regulations.",
      },
    ],
  },
  {
    label: "Carrier Screening",
    items: [
      {
        question: "Is Carrier Screening only for pregnant women?",
        answer: "No. Carrier Screening can be done before or during pregnancy.",
      },
      {
        question: "Should both parents be tested?",
        answer: "Testing both parents provides the most comprehensive assessment.",
      },
      {
        question: "Does a positive result mean my child will have a disease?",
        answer: "No. Carrier Screening only identifies whether you carry certain inherited genetic variants.",
      },
      {
        question: "Do I need a family history?",
        answer: "No. Anyone can be a carrier, even without a known family history.",
      },
      {
        question: "Is this a diagnostic test?",
        answer: "No. Carrier Screening is a genetic risk assessment and not a diagnostic test.",
      },
      {
        question: "Is the process confidential?",
        answer: "Yes. All information, samples, and results are handled with strict confidentiality.",
      },
    ],
  },
  {
    label: "Newborn Genetic Screening",
    items: [
      {
        question: "Is this test safe?",
        answer:
          "Yes. Our pregnancy and newborn-focused tests are designed to be safe and minimally invasive using validated collection methods.",
      },
      {
        question: "Can I do this test in the province?",
        answer:
          "Yes. We coordinate sample collection nationwide through accredited partner collection centers and selected home collection options.",
      },
      {
        question: "Are results confidential?",
        answer:
          "Absolutely. Your sample information and report are handled with strict confidentiality and released only to authorized individuals.",
      },
      {
        question: "Will this replace my doctor consultation?",
        answer:
          "No. Genetic screening supports healthcare decisions, but results should always be reviewed with your physician for clinical guidance.",
      },
      {
        question: "How long are turnaround times?",
        answer:
          "Turnaround varies by panel and sample type. Our team confirms expected timelines before collection and keeps you updated until release.",
      },
      {
        question: "Can I ask for guidance before booking?",
        answer:
          "Yes. Our specialists can explain each option and recommend the most suitable test based on your stage and goals.",
      },
    ],
  },
  {
    label: "BRCA Genetic Test",
    items: [
      {
        question: "Does a BRCA mutation mean I have cancer?",
        answer: "No. BRCA testing identifies genetic risk and does not diagnose cancer.",
      },
      {
        question: "Is BRCA testing only for women?",
        answer: "No. Men can also inherit and pass on BRCA mutations.",
      },
      {
        question: "Do I need a family history?",
        answer: "Not necessarily. Many people choose BRCA testing as part of preventive healthcare.",
      },
      {
        question: "What sample is required?",
        answer: "A simple DNA sample is required. Collection methods may vary depending on your selected service.",
      },
      {
        question: "Is the process confidential?",
        answer: "Yes. All information and results are handled with strict confidentiality.",
      },
    ],
  },
  {
    label: "HBOC Screening",
    items: [
      {
        question: "Is HBOC the same as BRCA testing?",
        answer:
          "No. BRCA testing only screens BRCA1 and BRCA2, while HBOC screening evaluates multiple genes associated with hereditary breast and ovarian cancer syndromes.",
      },
      {
        question: "Does this diagnose cancer?",
        answer: "No. HBOC is a genetic risk assessment tool and not a diagnostic test.",
      },
      {
        question: "Is this only for women?",
        answer: "No. Men can also inherit and pass on hereditary cancer-related gene mutations.",
      },
      {
        question: "Do I need a family history?",
        answer:
          "A family history may increase the value of screening, but some individuals choose preventive genetic testing even without one.",
      },
      {
        question: "Is the process confidential?",
        answer: "Yes. All information and results are handled with strict confidentiality.",
      },
    ],
  },
  {
    label: "Comprehensive Hereditary Cancer Screening",
    items: [
      {
        question: "Does this diagnose cancer?",
        answer: "No. This is a genetic risk assessment and not a diagnostic test.",
      },
      {
        question: "Is this only for people with a family history?",
        answer: "No. Many individuals choose screening as part of their preventive healthcare strategy.",
      },
      {
        question: "Is this only for women?",
        answer: "No. This screening is designed for both men and women.",
      },
      {
        question: "Which cancers are included?",
        answer: "The cancers assessed may vary depending on the selected panel.",
      },
      {
        question: "Is the process confidential?",
        answer: "Yes. All information and results are handled with strict confidentiality.",
      },
    ],
  },
  {
    label: "Multi-Cancer Early Detection (MCED)",
    items: [
      {
        question: "What is MCED?",
        answer:
          "MCED stands for Multi-Cancer Early Detection. It is a blood-based screening test designed to detect signals associated with multiple types of cancer.",
      },
      {
        question: "How many cancers can MCED detect?",
        answer: "CancerScreenDx screens for signals associated with over 110 types of cancer.",
      },
      {
        question: "Is the test painful?",
        answer: "Only a standard blood draw is required.",
      },
      {
        question: "Can MCED diagnose cancer?",
        answer:
          "No. MCED is a screening tool. Positive findings require confirmation through additional diagnostic testing.",
      },
      {
        question: "Who should consider MCED?",
        answer:
          "Adults aged 40 and above, those with a family history of cancer, and individuals seeking more comprehensive cancer screening may benefit from MCED.",
      },
    ],
  },
  {
    label: "Preventive Health Screening",
    items: [
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
    ],
  },
  {
    label: "DNA Blueprint (KidsDNA)",
    items: [
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
    ],
  },
  {
    label: "PetDNA",
    items: [
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
    ],
  },
  {
    label: "Corporate Wellness",
    items: [
      {
        question: "What corporate wellness services do you provide?",
        answer:
          "We provide employee wellness programs, annual physical exams, executive checkups, on-site screening events, and laboratory services.",
      },
      {
        question: "Can your programs be customized for our company?",
        answer: "Yes. Packages can be customized based on your employee count, industry needs, and preferred setup.",
      },
      {
        question: "Do you offer on-site and multi-branch implementation?",
        answer:
          "Yes. We can implement onsite, clinic-based, or hybrid setups, including support for multiple branches.",
      },
      {
        question: "Are your corporate services available nationwide?",
        answer:
          "Yes. We support organizations across the Philippines through nationwide collection and partner networks.",
      },
      {
        question: "Can we request a proposal for our organization?",
        answer:
          "Yes. You may request a corporate proposal and our team will guide you through consultation, package customization, implementation, and reporting.",
      },
    ],
  },
  {
    label: "General Questions",
    items: [
      {
        question: "Are test results confidential?",
        answer:
          "Yes. All information, samples, and reports are handled with strict confidentiality and released only to authorized individuals.",
      },
      {
        question: "Can testing be arranged outside Metro Manila?",
        answer:
          "Yes. We coordinate collection nationwide through partner collection centers, with selected home service options.",
      },
      {
        question: "Are your tests diagnostic?",
        answer:
          "Most offerings are screening or risk-assessment tools and not diagnostic tests. Results should always be interpreted with your healthcare provider.",
      },
      {
        question: "How long do results usually take?",
        answer:
          "Turnaround times vary by test type and panel. Our team confirms expected timelines before collection and keeps you updated.",
      },
      {
        question: "Can your specialists help me choose the right test?",
        answer:
          "Yes. Our specialists can explain available options and guide you to the most suitable test based on your needs.",
      },
    ],
  },
]

const ALL_CATEGORY: FaqCategory = {
  label: ALL_CATEGORIES_LABEL,
  items: COMPILED_FAQ_BY_CATEGORY.flatMap((category) => category.items),
}

const FAQ_CATEGORIES_WITH_ALL: FaqCategory[] = [ALL_CATEGORY, ...COMPILED_FAQ_BY_CATEGORY]

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORIES_LABEL)
  const [showAllInAllCategory, setShowAllInAllCategory] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const activeCategory = FAQ_CATEGORIES_WITH_ALL.find((item) => item.label === selectedCategory) ?? null

  const activeQuestions = activeCategory?.items ?? []
  const isAllCategoriesSelected = selectedCategory === ALL_CATEGORIES_LABEL
  const visibleQuestions =
    isAllCategoriesSelected && !showAllInAllCategory ? activeQuestions.slice(0, 10) : activeQuestions
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredQuestions =
    normalizedQuery.length === 0
      ? visibleQuestions
      : visibleQuestions.filter(
          (item) =>
            item.question.toLowerCase().includes(normalizedQuery) ||
            item.answer.toLowerCase().includes(normalizedQuery),
        )
  const visibleQuestionEntries = filteredQuestions.map((item, index) => ({
    ...item,
    entryKey: `${selectedCategory}-${index}-${item.question}`,
  }))

  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box className={styles.heroSection} component="section">
        <Container size="xl">
          <Grid align="center" gap={{ base: "md", lg: 40 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Title order={1} className={styles.heroTitle}>
                Frequently Asked Questions
              </Title>
              <Text className={styles.heroSubtitle}>Your questions. Answered with clarity.</Text>
              <Text className={styles.heroDescription}>
                Browse answers to the most common questions about our DNA testing services. If you cannot find what you
                are looking for, our support team is here to help.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Image
                  src="/pages/Corporate APE.png"
                  alt="Lablog support"
                  fill
                  className={styles.heroImage}
                  sizes="50vw"
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.section} component="section">
        <Container size="xl">
          <Grid gap="lg" align="start">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Card withBorder radius="lg" className={styles.sidebarCard}>
                <Title order={4} className={styles.sidebarTitle}>
                  Categories
                </Title>
                <Box className={styles.categoryList}>
                  {FAQ_CATEGORIES_WITH_ALL.map((category) => (
                    <Paper
                      key={category.label}
                      className={`${styles.categoryItem} ${selectedCategory === category.label ? styles.categoryActive : ""}`}
                      onClick={() => {
                        setSelectedCategory(category.label)
                        setShowAllInAllCategory(false)
                        setSearchQuery("")
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          setSelectedCategory(category.label)
                          setShowAllInAllCategory(false)
                          setSearchQuery("")
                        }
                      }}
                    >
                      <Text>{category.label}</Text>
                      <Text className={styles.categoryCount}>{category.items.length}</Text>
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
                    {activeCategory?.label ?? "Frequently Asked Questions"}
                  </Title>
                  <Text className={styles.faqCount}>{visibleQuestionEntries.length} Questions</Text>
                </Group>

                <TextInput
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.currentTarget.value)}
                  placeholder="Search questions or answers"
                  leftSection={<IconSearch size={16} stroke={2} />}
                  radius="md"
                  mb="md"
                />

                {visibleQuestionEntries.length ? (
                  <Accordion
                    key={`${selectedCategory}-${showAllInAllCategory ? "all" : "partial"}-${normalizedQuery}`}
                    variant="separated"
                    radius="md"
                    chevron={<IconChevronDown size={15} stroke={2.2} />}
                    classNames={{
                      item: styles.faqItem,
                      control: styles.faqControl,
                      panel: styles.faqPanel,
                      chevron: styles.faqChevron,
                    }}
                    defaultValue={visibleQuestionEntries[0]?.entryKey}
                  >
                    {visibleQuestionEntries.map((item) => (
                      <Accordion.Item key={item.entryKey} value={item.entryKey}>
                        <Accordion.Control
                          icon={
                            <ThemeIcon size={20} radius="xl" variant="light" className={styles.faqQuestionIcon}>
                              <IconHelp size={13} stroke={2.1} aria-hidden />
                            </ThemeIcon>
                          }
                        >
                          <Highlight component="span" highlight={searchQuery.trim()}>
                            {item.question}
                          </Highlight>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <Text className={styles.faqAnswerText}>
                            <Highlight component="span" highlight={searchQuery.trim()}>
                              {item.answer}
                            </Highlight>
                          </Text>
                        </Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                ) : (
                  <Text c="dimmed">No matching questions found for your search.</Text>
                )}

                {isAllCategoriesSelected ? (
                  <Button
                    variant="subtle"
                    className={styles.viewAllButton}
                    mt="md"
                    onClick={() => setShowAllInAllCategory((current) => !current)}
                  >
                    {showAllInAllCategory
                      ? "Show only first 10 questions"
                      : `View all ${activeQuestions.length} questions`}
                  </Button>
                ) : null}
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
