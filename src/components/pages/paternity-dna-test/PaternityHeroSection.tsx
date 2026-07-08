"use client"

import { Box, Container, Grid, Paper, Text } from "@mantine/core"
import { IconCalendarEvent, IconLock, IconMapPin, IconShieldCheck, IconTargetArrow } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"
import Heading from "@/components/shared/heading/Heading"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"
import Image from "next/image"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"

const HERO_POINTS: FeatureHighlightItem[] = [
  { Icon: IconTargetArrow, label: "99.99%", subLabel: "Accuracy" },
  { Icon: IconShieldCheck, label: "ISO-Certified", subLabel: "Laboratory" },
  { Icon: IconLock, label: "Confidential", subLabel: "& Secure" },
  { Icon: IconCalendarEvent, label: "Results in", subLabel: "7-10 Working Days" },
  { Icon: IconMapPin, label: "Nationwide", subLabel: "Service" },
]

export default function PaternityHeroSection() {
  return (
    <Box component="section" className={styles.heroSection}>
      <Container size="xl">
        <Grid align="stretch" gap={{ base: 28, lg: 42 }}>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box className={styles.heroCopy}>
              <Heading
                order={1}
                eyebrow="Accurate. Confidential. Trusted."
                title="Paternity DNA Test Philippines"
                subtitle="Every family has a unique story. Get the answers you need with trusted paternity DNA testing solutions."
                description="Whether for personal peace of mind, legal purposes, or testing during pregnancy, our team helps you choose the most suitable test."
                classNames={{
                  eyebrow: styles.eyebrow,
                  title: styles.heroTitle,
                  subtitle: styles.lead,
                  description: styles.subLead,
                }}
              />
            </Box>
            <Box className={styles.pointsList}>
              <FeatureHighlightsGrid
                items={HERO_POINTS}
                cols={{ base: 2, sm: 5 }}
                spacing={8}
                iconSize={18}
                iconStroke={1.9}
                themeIconSize={42}
                colors={{
                  circleBackground: "#eaf2ff",
                  circleIcon: "#2f4698",
                  label: "#1f3f7d",
                  subLabel: "#4b6290",
                }}
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Box className={styles.heroVisual}>
              <Box className={styles.backgroundImage} aria-hidden="true">
                <Image
                  src="/pages/NIPPT page.png"
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
                  message="Hi Lablog team, I need help choosing the right paternity DNA test."
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
  )
}
