"use client"

import Image from "next/image"
import Link from "next/link"
import { Box, Button, Container, Grid, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconBuilding,
  IconBuildingFactory2,
  IconCalendarEvent,
  IconCheck,
  IconClipboardList,
  IconHeartRateMonitor,
  IconMapPin,
  IconPill,
  IconReportAnalytics,
  IconStethoscope,
  IconTargetArrow,
  IconTools,
  IconUserCheck,
  IconUsers,
  IconVaccine,
} from "@tabler/icons-react"
import styles from "./CorporatePage.module.css"
import Heading from "@/components/shared/heading/Heading"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"

type IconType = typeof IconBuilding

const HERO_FEATURES: FeatureHighlightItem[] = [
  { Icon: IconStethoscope, label: "Onsite APE", subLabel: "available" },
  { Icon: IconMapPin, label: "Nationwide", subLabel: "collection network" },
  { Icon: IconUsers, label: "Employee-Friendly", subLabel: "experience" },
  { Icon: IconUserCheck, label: "Dedicated", subLabel: "account management" },
  { Icon: IconTools, label: "Scalable", subLabel: "solutions" },
]

const HERO_PARAGRAPHS = [
  "Healthy employees build stronger businesses.",
  "Lablog helps companies simplify their Annual Physical Examination (APE) requirements through a streamlined, scalable, and employee-friendly healthcare solution.",
  "We partner with businesses, schools, startups, and organizations across the Philippines to provide convenient employee health screening programs that minimize operational disruption while ensuring compliance with annual healthcare requirements.",
  "From small teams to large organizations, our goal is to make preventive healthcare accessible, efficient, and easy to manage.",
]

const WHY_BUSINESSES_CHOOSE = [
  {
    icon: IconClipboardList,
    title: "One Point Of Contact",
    description: "Avoid coordinating with multiple providers.",
  },
  {
    icon: IconTools,
    title: "Flexible Setup",
    description: "Onsite, clinic-based, or hybrid solutions.",
  },
  {
    icon: IconMapPin,
    title: "Nationwide Accessibility",
    description: "Support employees across different locations.",
  },
  {
    icon: IconUsers,
    title: "Employee-Friendly Experience",
    description: "Simple booking and scheduling processes.",
  },
  {
    icon: IconHeartRateMonitor,
    title: "Scalable Solutions",
    description: "From startups to enterprise organizations.",
  },
]

const CORPORATE_SOLUTIONS_INCLUDE = [
  "Annual Physical Examinations (APE)",
  "Employee Health Screening Packages",
  "Executive Health Packages",
  "School Enrollment Health Requirements",
  "Onsite Health Screening",
  "Multi-Branch Employee Screening",
  "Home Service Options (selected areas)",
  "Nationwide Collection Network",
  "Consolidated Reporting",
  "Dedicated Account Management",
]

const FLEXIBLE_SOLUTIONS = [
  {
    title: "Onsite APE",
    description: "We bring healthcare directly to your office.",
    idealFor: [
      "Medium to large companies",
      "Manufacturing facilities",
      "Corporate offices",
      "BPO companies",
      "Educational institutions",
    ],
    benefits: [
      "Minimal employee downtime",
      "Increased participation",
      "Convenient scheduling",
      "Reduced operational disruptions",
    ],
  },
  {
    title: "Partner Clinic Screening",
    description: "Employees may visit designated collection centers and partner clinics at their convenience.",
    idealFor: ["Distributed teams", "Hybrid workforces", "Smaller businesses", "Multiple branch locations"],
    benefits: [],
  },
  {
    title: "Executive Health Packages",
    description: "Customized preventive health packages for leadership teams and executives.",
    idealFor: [],
    benefits: ["Comprehensive laboratory tests", "Cardiac screening", "Cancer screening", "Wellness assessments"],
  },
]

const APE_PACKAGES = [
  {
    icon: IconVaccine,
    title: "Basic APE",
    subtitle: "Common inclusions:",
    points: ["Medical history", "Physical examination", "CBC", "Urinalysis", "Chest X-ray"],
  },
  {
    icon: IconPill,
    title: "Comprehensive APE",
    subtitle: "Additional options may include:",
    points: [
      "Fasting Blood Sugar",
      "Lipid Profile",
      "Liver Function Tests",
      "Kidney Function Tests",
      "ECG",
      "Drug Testing",
      "Tumor Markers",
      "Wellness Screening",
    ],
  },
  {
    icon: IconTargetArrow,
    title: "Industry-Specific APE",
    subtitle: "Examples:",
    points: [
      "Corporate Offices",
      "Manufacturing",
      "Schools & Universities",
      "Technology Companies",
      "Healthcare Organizations",
    ],
  },
]

const WHO_WE_WORK_WITH = [
  "Startups",
  "SMEs",
  "Large corporations",
  "BPO companies",
  "Schools and universities",
  "Clinics and healthcare institutions",
  "NGOs and organizations",
]

const INDUSTRIES: Array<{ icon: IconType; label: string }> = [
  { icon: IconBuilding, label: "Corporate Offices" },
  { icon: IconUsers, label: "Educational Institutions" },
  { icon: IconBuildingFactory2, label: "Manufacturing" },
  { icon: IconTools, label: "Technology Companies" },
  { icon: IconHeartRateMonitor, label: "Healthcare Providers" },
  { icon: IconBuilding, label: "Retail Businesses" },
  { icon: IconBuildingFactory2, label: "Logistics Companies" },
  { icon: IconBuilding, label: "Hospitality Businesses" },
]

const PROCESS = [
  {
    title: "Initial Consultation",
    description: "Tell us about your company size, employee count, and requirements.",
    icon: IconUsers,
  },
  {
    title: "Package Customization",
    description: "We'll build a solution based on your organization.",
    icon: IconTools,
  },
  {
    title: "Implementation",
    description: "Choose onsite, clinic-based, or hybrid screening.",
    icon: IconCalendarEvent,
  },
  {
    title: "Employee Screening",
    description: "Our team coordinates the entire process.",
    icon: IconStethoscope,
  },
  {
    title: "Reporting & Support",
    description: "Receive consolidated reports and ongoing support.",
    icon: IconReportAnalytics,
  },
]

export default function CorporatePage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box component="section" className={styles.heroSection}>
        <Container size="xl">
          <Grid align="stretch" gap={{ base: 24, lg: 36 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Heading
                order={1}
                eyebrow="Corporate APE & Employee Health Screening"
                title="Corporate APE & Employee Health Screening Philippines"
                subtitle="End-to-End Annual Physical Examination Solutions For Businesses"
                description={HERO_PARAGRAPHS}
                classNames={{
                  eyebrow: styles.eyebrow,
                  title: styles.heroTitle,
                  subtitle: styles.heroLead,
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
                  circleBackground: "#e9f7f1",
                  circleIcon: "#10915d",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />

              <Group mt={20} gap="sm">
                <Button component={Link} href="#contact" className={styles.primaryButton} radius="md">
                  Talk to our corporate team
                </Button>
                <Button
                  component={Link}
                  href="#contact"
                  variant="outline"
                  className={styles.secondaryButton}
                  radius="md"
                >
                  Request a proposal
                </Button>
              </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Box className={styles.backgroundImage} aria-hidden="true">
                  <Image
                    src="/pages/Hero page corporate.png"
                    alt="Corporate team consultation"
                    fill
                    priority
                    sizes="(max-width: 992px) 100vw, 50vw"
                    className={styles.backgroundImageElement}
                  />
                  <Box className={styles.heroGlow} aria-hidden />
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Why Partner With Lablog?
          </Title>

          <Title order={3} className={styles.sectionTitleLeft} mt={14} ta="center">
            A Simpler Way To Manage Employee Health
          </Title>
          <Text className={styles.cardDescription} ta="center" maw={840} mx="auto" mt={8}>
            Managing employee health screenings shouldn&apos;t create additional work for your HR team.
          </Text>
          <Text className={styles.cardDescription} ta="center" maw={840} mx="auto">
            Lablog handles the coordination so your organization can focus on running the business.
          </Text>

          <Title order={3} className={styles.sectionTitleLeft} mt={20}>
            Our Corporate Solutions Include:
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" mt={12}>
            {CORPORATE_SOLUTIONS_INCLUDE.map((item) => (
              <Paper key={item} radius="md" className={styles.inclusionCard}>
                <Text className={styles.pointRow}>
                  <IconCheck size={16} stroke={2.1} aria-hidden />
                  {item}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Flexible Screening Solutions For Every Organization
          </Title>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md" mt={20}>
            {FLEXIBLE_SOLUTIONS.map((item) => (
              <Paper key={item.title} radius="lg" className={styles.solutionCard}>
                <Box className={styles.solutionImageWrap}>
                  <Image
                    src="/hero.jpg"
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.solutionImage}
                  />
                </Box>
                <Title order={3} className={styles.cardTitle}>
                  {item.title}
                </Title>
                <Text className={styles.cardDescription}>{item.description}</Text>

                {item.idealFor.length ? (
                  <>
                    <Text className={styles.caption} ta="left">
                      Ideal for:
                    </Text>
                    <Stack gap={6} mt={6}>
                      {item.idealFor.map((point) => (
                        <Text key={point} className={styles.pointRow}>
                          <IconCheck size={15} stroke={2.2} aria-hidden />
                          {point}
                        </Text>
                      ))}
                    </Stack>
                  </>
                ) : null}

                {item.benefits.length ? (
                  <>
                    <Text className={styles.caption} ta="left">
                      {item.title === "Executive Health Packages" ? "Packages may include:" : "Benefits:"}
                    </Text>
                    <Stack gap={6} mt={6}>
                      {item.benefits.map((point) => (
                        <Text key={point} className={styles.pointRow}>
                          <IconCheck size={15} stroke={2.2} aria-hidden />
                          {point}
                        </Text>
                      ))}
                    </Stack>
                  </>
                ) : null}
              </Paper>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            APE Packages We Can Customize
          </Title>

          <Text className={styles.cardDescription} ta="center" maw={820} mx="auto" mt={8}>
            We understand that every organization has different requirements. Packages may be customized according to
            your needs.
          </Text>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="sm" mt={16}>
            {APE_PACKAGES.map((item) => {
              const Icon = item.icon
              return (
                <Paper key={item.title} radius="lg" className={styles.inclusionCard}>
                  <ThemeIcon size={50} radius="xl" variant="light" className={styles.inclusionIcon}>
                    <Icon size={24} stroke={1.8} aria-hidden />
                  </ThemeIcon>
                  <Title order={3} className={styles.cardTitle}>
                    {item.title}
                  </Title>
                  <Text className={styles.caption}>{item.subtitle}</Text>
                  <Stack gap={5} mt={6}>
                    {item.points.map((point) => (
                      <Text key={point} className={styles.pointRow}>
                        <IconCheck size={15} stroke={2.1} aria-hidden />
                        {point}
                      </Text>
                    ))}
                  </Stack>
                </Paper>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Who We Work With
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" mt={16}>
            {WHO_WE_WORK_WITH.map((item) => (
              <Paper key={item} radius="md" className={styles.inclusionCard}>
                <Text className={styles.pointRow}>
                  <IconCheck size={16} stroke={2.1} aria-hidden />
                  {item}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>

          <Text className={styles.caption} mt={14}>
            Whether you have <strong>20 employees or 2,000 employees</strong>, our solutions can scale according to your
            needs.
          </Text>
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Why Businesses Choose Lablog
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="md" mt={16}>
            {WHY_BUSINESSES_CHOOSE.map((item) => {
              const Icon = item.icon
              return (
                <Paper key={item.title} radius="lg" className={styles.whyCard}>
                  <ThemeIcon size={56} radius="xl" variant="light" className={styles.whyIcon}>
                    <Icon size={28} stroke={1.8} aria-hidden />
                  </ThemeIcon>
                  <Title order={3} className={styles.cardTitle}>
                    {item.title}
                  </Title>
                  <Text className={styles.cardDescription}>{item.description}</Text>
                </Paper>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Our Corporate Partnership Process
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="md" mt={16}>
            {PROCESS.map((step, index) => {
              const Icon = step.icon
              return (
                <Paper key={step.title} radius="lg" className={styles.processCard}>
                  <Text className={styles.stepNumber}>{index + 1}</Text>
                  <ThemeIcon size={54} radius="xl" variant="light" className={styles.processIcon}>
                    <Icon size={26} stroke={1.8} aria-hidden />
                  </ThemeIcon>
                  <Title order={3} className={styles.cardTitle}>
                    {step.title}
                  </Title>
                  <Text className={styles.cardDescription}>{step.description}</Text>
                </Paper>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Industries We Commonly Support
          </Title>

          <SimpleGrid cols={{ base: 2, sm: 4, md: 8 }} spacing="sm" mt={16}>
            {INDUSTRIES.map((item) => {
              const Icon = item.icon
              return (
                <Paper key={item.label} radius="md" className={styles.industryCard}>
                  <Icon size={24} stroke={1.8} aria-hidden />
                  <Text>{item.label}</Text>
                </Paper>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Box component="section" id="contact" className={styles.contactSection}>
        <Container size="xl">
          <Stack gap={8} align="center">
            <Title order={2} className={styles.contactTitle} ta="center">
              Let&apos;s Build A Healthier Workforce Together
            </Title>
            <Text className={styles.contactDescription} ta="center" maw={900}>
              Whether you&apos;re planning your annual employee health screening or building a long-term wellness
              program, Lablog can help simplify the process.
            </Text>
            <Title order={3} className={styles.sectionTitleLeft} ta="center" c="#ecfff7" mt={4}>
              Looking for an APE provider for your organization?
            </Title>
            <Text className={styles.contactDescription} ta="center">
              Our team would love to learn more about your requirements.
            </Text>
            <Button component={Link} href="#contact" className={styles.contactButton} radius="md" mt={8}>
              Talk To Our Corporate Team
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
