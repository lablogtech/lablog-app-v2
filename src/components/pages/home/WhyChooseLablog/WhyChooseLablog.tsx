"use client"

import styles from "./WhyChooseLablog.module.css"
import { Box, Container, Grid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import Heading from "@/components/shared/heading/Heading"
import { IconRocket, IconHome, IconLock, IconCertificate, IconUsers, IconClock } from "@tabler/icons-react"

const FEATURES = [
  {
    icon: <IconRocket size={40} stroke={1.5} aria-hidden />,
    title: "Nationwide Accessibility",
    description: "Growing network of partner clinics throughout the Philippines.",
  },
  {
    icon: <IconHome size={40} stroke={1.5} aria-hidden />,
    title: "Home Service Available",
    description: "Convenient sample collection at home for eligible tests.",
  },
  {
    icon: <IconLock size={40} stroke={1.5} aria-hidden />,
    title: "Confidential Process",
    description: "Your privacy is protected every step of the way.",
  },
  {
    icon: <IconCertificate size={40} stroke={1.5} aria-hidden />,
    title: "ISO-Certified Laboratories",
    description: "Tests are processed through internationally accredited laboratory partners.",
  },
  {
    icon: <IconUsers size={40} stroke={1.5} aria-hidden />,
    title: "Expert Support",
    description: "Our team guides you before, during, and after your test.",
  },
  {
    icon: <IconClock size={40} stroke={1.5} aria-hidden />,
    title: "Fast Turnaround Times",
    description: "Efficient sample processing and result delivery.",
  },
]

export default function WhyChooseLablog() {
  return (
    <Box className={styles.section}>
      <Container
        component="section"
        id="why-choose-lablog"
        size="xl"
        py={{ base: 48, md: 72 }}
        px={{ base: 16, md: 40 }}
      >
        <Stack gap="lg" align="center" className={styles.headerStack}>
          <Heading
            title="Why Choose Lablog for DNA Testing in the Philippines?"
            classNames={{
              root: styles.sectionHeading,
              title: styles.sectionTitle,
              subtitle: styles.sectionSubtitle,
            }}
          />
        </Stack>

        <Grid gap={{ base: 24, md: 32 }} align="stretch" className={styles.featuresGrid}>
          {FEATURES.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
              <Stack gap="md" align="center" className={styles.featureCard}>
                <ThemeIcon size={80} radius="50%" variant="light" color="blue" className={styles.iconWrapper}>
                  {feature.icon}
                </ThemeIcon>
                <Stack gap={4} align="center" className={styles.contentStack}>
                  <Title order={4} className={styles.featureTitle}>
                    {feature.title}
                  </Title>
                  <Text className={styles.featureDescription}>{feature.description}</Text>
                </Stack>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
