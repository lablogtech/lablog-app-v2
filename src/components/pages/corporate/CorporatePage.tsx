"use client"

import Image from "next/image"
import { Box, Container, Grid, Group, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconBuilding,
  IconBuildingFactory2,
  IconCalendarEvent,
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
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
import HighlightCards, { type HighlightCardItem } from "@/components/shared/highlight-cards/HighlightCards"
import ChecklistGridSection from "@/components/shared/checklist-grid-section/ChecklistGridSection"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"

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

const FLEXIBLE_SOLUTIONS: HighlightCardItem[] = [
  {
    title: "Onsite APE",
    image: {
      src: "/pages/Onsite APE.png",
      alt: "Onsite APE",
    },
    description: "We bring healthcare directly to your office.",
    sections: [
      {
        label: "Ideal for:",
        points: [
          "Medium to large companies",
          "Manufacturing facilities",
          "Corporate offices",
          "BPO companies",
          "Educational institutions",
        ],
      },
      {
        label: "Benefits:",
        points: [
          "Minimal employee downtime",
          "Increased participation",
          "Convenient scheduling",
          "Reduced operational disruptions",
        ],
      },
    ],
    insights: [],
  },
  {
    title: "Partner Clinic Screening",
    image: {
      src: "/pages/Clinic based APE.png",
      alt: "Partner Clinic Screening",
    },
    description: "Employees may visit designated collection centers and partner clinics at their convenience.",
    sections: [
      {
        label: "Ideal for:",
        points: ["Distributed teams", "Hybrid workforces", "Smaller businesses", "Multiple branch locations"],
      },
    ],
    insights: [],
  },
  {
    title: "Executive Health Packages",
    image: {
      src: "/pages/Executive health pacjkage.png",
      alt: "Executive Health Packages",
    },
    description: "Customized preventive health packages for leadership teams and executives.",
    sections: [
      {
        label: "Packages may include:",
        points: ["Comprehensive laboratory tests", "Cardiac screening", "Cancer screening", "Wellness assessments"],
      },
    ],
    insights: [],
  },
]

const APE_PACKAGES: HighlightCardItem[] = [
  {
    title: "Basic APE",
    icon: <IconVaccine size={24} stroke={1.8} aria-hidden />,
    details: ["Common inclusions:"],
    insights: ["Medical history", "Physical examination", "CBC", "Urinalysis", "Chest X-ray"],
  },
  {
    title: "Comprehensive APE",
    icon: <IconPill size={24} stroke={1.8} aria-hidden />,
    details: ["Additional options may include:"],
    insights: [
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
    title: "Industry-Specific APE",
    icon: <IconTargetArrow size={24} stroke={1.8} aria-hidden />,
    details: ["Examples:"],
    insights: [
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

const PROCESS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "Tell us about your company size, employee count, and requirements.",
    icon: <IconUsers size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "Package Customization",
    description: "We'll build a solution based on your organization.",
    icon: <IconTools size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Implementation",
    description: "Choose onsite, clinic-based, or hybrid screening.",
    icon: <IconCalendarEvent size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Employee Screening",
    description: "Our team coordinates the entire process.",
    icon: <IconStethoscope size={36} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 5,
    title: "Reporting & Support",
    description: "Receive consolidated reports and ongoing support.",
    icon: <IconReportAnalytics size={36} stroke={1.8} aria-hidden />,
    color: "#067BF7",
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
                <MessengerButton
                  message="Hi Lablog team, we want to discuss employee health screening for our company."
                  className={styles.primaryButton}
                  radius="md"
                >
                  Talk to our corporate team
                </MessengerButton>
                <MessengerButton
                  message="Hi Lablog team, we would like to request a corporate APE proposal."
                  variant="outline"
                  className={styles.secondaryButton}
                  radius="md"
                >
                  Request a proposal
                </MessengerButton>
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
          <Text mb="md" className={styles.cardDescription} ta="center" maw={840} mx="auto">
            Lablog handles the coordination so your organization can focus on running the business.
          </Text>

          <ChecklistGridSection
            title="Our Corporate Solutions Include:"
            items={CORPORATE_SOLUTIONS_INCLUDE}
            cols={{ base: 1, sm: 2 }}
            accentColor="#0f9a61"
            titleAlign="center"
            titleAsText
          />
        </Container>
      </Box>

      <Box component="section" className={styles.section}>
        <Container size="xl">
          <HighlightCards
            title="Flexible Screening Solutions For Every Organization"
            items={FLEXIBLE_SOLUTIONS}
            cols={{ base: 1, md: 3 }}
            accentColor="#0f9a61"
          />
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <HighlightCards
            title="APE Packages We Can Customize"
            subtitle="We understand that every organization has different requirements. Packages may be customized according to your needs."
            items={APE_PACKAGES}
            cols={{ base: 1, md: 3 }}
            accentColor="#0f9a61"
          />
        </Container>
      </Box>

      <Box component="section" className={styles.sectionCompact}>
        <Container size="xl">
          <ChecklistGridSection
            title="Who We Work With"
            items={WHO_WE_WORK_WITH}
            cols={{ base: 1, sm: 2 }}
            accentColor="#0f9a61"
            titleAlign="center"
          />

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
          <HowItWorksSteps
            title="Our Corporate Partnership Process"
            subtitle="From consultation to reporting, we manage each phase with your team."
            steps={PROCESS}
          />
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
            <MessengerButton
              message="Hi Lablog team, we want to talk with your corporate health screening team."
              className={styles.contactButton}
              radius="md"
              mt={8}
            >
              Talk To Our Corporate Team
            </MessengerButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
