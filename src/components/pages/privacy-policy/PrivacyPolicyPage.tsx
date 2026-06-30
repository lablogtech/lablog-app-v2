"use client"

import Image from "next/image"
import styles from "./PrivacyPolicyPage.module.css"
import { Box, Button, Card, Container, Grid, Group, Paper, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconCheck,
  IconFileDescription,
  IconHeartHandshake,
  IconLock,
  IconMail,
  IconPhone,
  IconShieldLock,
  IconUser,
  IconWorld,
} from "@tabler/icons-react"

const TRUST_POINTS = [
  { label: "Your data is safe with us", icon: IconShieldLock },
  { label: "Strictly confidential", icon: IconLock },
  { label: "Authorized access only", icon: IconUser },
  { label: "Secure handling at every step", icon: IconFileDescription },
  { label: "Your trust is our priority", icon: IconHeartHandshake },
]

const SIDE_LINKS = [
  "Overview",
  "Information We Collect",
  "How We Use Your Information",
  "Confidentiality of Test Results",
  "Data Security",
  "Laboratory Partnerships",
  "Cookies",
  "Children's Privacy",
  "Data Retention",
  "Your Rights",
  "Updates To This Policy",
  "Contact Us",
]

const OVERVIEW_ITEMS = [
  {
    title: "Information We Collect",
    content:
      "We collect personal, health, and genetic information needed to deliver our services. This may include your name, contact details, medical history, and biological samples depending on the requested test.",
    icon: IconUser,
  },
  {
    title: "How We Use Your Information",
    content:
      "Your information is used to process requests, communicate updates, deliver results, improve services, and comply with legal obligations. We only collect what is necessary.",
    icon: IconFileDescription,
  },
  {
    title: "Confidentiality of Test Results",
    content:
      "Results are released only to you or authorized individuals with your consent. We do not share your personal or genetic information with third parties for marketing.",
    icon: IconLock,
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard measures to protect your information against unauthorized access, misuse, or disclosure across our systems and processes.",
    icon: IconShieldLock,
  },
  {
    title: "Laboratory Partnerships",
    content:
      "Some services are processed by trusted international laboratory partners. Shared data is limited to what is required for processing and protected by strict agreements.",
    icon: IconCheck,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box className={styles.heroSection} component="section">
        <Container size="xl">
          <Grid align="center" gap={{ base: "md", lg: 40 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Title order={1} className={styles.heroTitle}>
                Privacy Policy
              </Title>
              <Text className={styles.heroSubtitle}>Your privacy matters to us.</Text>
              <Text className={styles.heroDescription}>
                At Lablog, we are committed to protecting your personal, health, and genetic information. This policy
                explains how we collect, use, store, and protect your data when you use our services.
              </Text>
              <Text className={styles.heroDescription}>
                By using Lablog&apos;s services, you agree to the collection and use of information in accordance with
                this policy.
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Image
                  src="/pages/Privacy Policy.png"
                  alt="Privacy and confidentiality"
                  fill
                  className={styles.heroImage}
                  sizes="50vw"
                />
              </Box>
            </Grid.Col>
          </Grid>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 5 }} spacing="sm" mt="xl">
            {TRUST_POINTS.map((item) => {
              const Icon = item.icon
              return (
                <Paper key={item.label} className={styles.trustItem}>
                  <Icon size={18} stroke={2} />
                  <Text>{item.label}</Text>
                </Paper>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Box className={styles.section} component="section">
        <Container size="xl">
          <Grid align="start" gap="lg">
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <Card withBorder radius="lg" className={styles.sideNav}>
                {SIDE_LINKS.map((item, index) => (
                  <Paper key={item} className={`${styles.sideNavItem} ${index === 0 ? styles.sideNavActive : ""}`}>
                    <Text>{item}</Text>
                  </Paper>
                ))}
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 9 }}>
              <Title order={2} className={styles.sectionTitle}>
                Overview
              </Title>
              <Text className={styles.sectionDescription}>
                This Privacy Policy explains how Lablog collects, uses, stores, and protects your personal, health, and
                genetic information. We are committed to privacy and security at every stage.
              </Text>

              <Box mt="lg" className={styles.overviewList}>
                {OVERVIEW_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <Paper key={item.title} className={styles.overviewItem}>
                      <ThemeIcon size={40} radius="xl" variant="light" className={styles.overviewIcon}>
                        <Icon size={21} stroke={2} />
                      </ThemeIcon>
                      <Box>
                        <Title order={3} className={styles.overviewTitle}>
                          {item.title}
                        </Title>
                        <Text className={styles.overviewText}>{item.content}</Text>
                      </Box>
                    </Paper>
                  )
                })}
              </Box>

              <Group mt="xl" justify="center">
                <Button variant="outline" className={styles.downloadButton}>
                  Download Full Policy (PDF)
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.contactSection} component="section">
        <Container size="xl">
          <Paper className={styles.contactCard}>
            <Title order={2} className={styles.contactTitle} ta="center">
              Questions About Your Privacy?
            </Title>
            <Text className={styles.contactDescription} ta="center">
              We are here to help. Reach us through any of the following.
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mt="lg">
              <Paper className={styles.contactMethod}>
                <ThemeIcon size={42} radius="xl" className={styles.methodIcon}>
                  <IconWorld size={21} stroke={2} />
                </ThemeIcon>
                <Text className={styles.methodLabel}>Website</Text>
                <Text className={styles.methodValue}>lablog.tech</Text>
              </Paper>

              <Paper className={styles.contactMethod}>
                <ThemeIcon size={42} radius="xl" className={styles.methodIcon}>
                  <IconMail size={21} stroke={2} />
                </ThemeIcon>
                <Text className={styles.methodLabel}>Email</Text>
                <Text className={styles.methodValue}>admin@lablog.tech</Text>
              </Paper>

              <Paper className={styles.contactMethod}>
                <ThemeIcon size={42} radius="xl" className={styles.methodIcon}>
                  <IconPhone size={21} stroke={2} />
                </ThemeIcon>
                <Text className={styles.methodLabel}>Mobile</Text>
                <Text className={styles.methodValue}>0956 064 8809</Text>
              </Paper>

              <Paper className={styles.contactMethod}>
                <ThemeIcon size={42} radius="xl" className={styles.methodIcon}>
                  <IconWorld size={21} stroke={2} />
                </ThemeIcon>
                <Text className={styles.methodLabel}>Follow Us</Text>
                <Text className={styles.methodValue}>Stay connected on social media channels.</Text>
              </Paper>
            </SimpleGrid>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
