"use client"

import Image from "next/image"
import styles from "./Hero.module.css"
import { Box, Button, Container, Group, Text, ThemeIcon, Title } from "@mantine/core"
import { IconCalendarEvent, IconCheck, IconMapPinSearch } from "@tabler/icons-react"

const FEATURES = [
  ["Paternity DNA Testing", "Legal DNA Testing"],
  ["NIPT (Non-Invasive Prenatal Testing)", "Immigration DNA Testing"],
  ["Prenatal Paternity Testing", "Home Service Available"],
  ["Halo DNA & Genetic Health Screening", "Nationwide Collection Centers"],
]

export default function Hero() {
  return (
    <Box className={styles.root}>
      <Box className={styles.backgroundImage} aria-hidden="true">
        <Image src="/hero.jpg" alt="" fill priority className={styles.backgroundImageElement} />
      </Box>
      <Box className={styles.backgroundGradient} aria-hidden="true" />
      <Container
        component="section"
        size="xl"
        py={{ base: 48, md: 72 }}
        px={{ base: 16, md: 40 }}
        className={styles.hero}
      >
        <Box className={styles.inner}>
          {/* ── Left column ── */}
          <Box className={styles.content}>
            <Title order={1} className={styles.headline}>
              DNA Testing, NIPT &amp; Genetic Screening in the Philippines
            </Title>
            <Text className={styles.subheadline}>
              Fast, accurate, and confidential genetic testing services available nationwide through our partner clinic
              network.
            </Text>

            <Box component="ul" className={styles.featureGrid}>
              {FEATURES.map(([left, right], i) => (
                <Box component="li" key={i} className={styles.featureRow}>
                  <Group className={styles.featureItem}>
                    <ThemeIcon className={styles.checkIcon} radius="xl" color="teal" size={18}>
                      <IconCheck size={12} stroke={3} aria-hidden />
                    </ThemeIcon>
                    {left}
                  </Group>
                  <Group className={styles.featureItem}>
                    <ThemeIcon className={styles.checkIcon} radius="xl" color="teal" size={18}>
                      <IconCheck size={12} stroke={3} aria-hidden />
                    </ThemeIcon>
                    {right}
                  </Group>
                </Box>
              ))}
            </Box>

            <Group className={styles.ctas}>
              <Button
                variant="filled"
                size="md"
                color="blue"
                radius="md"
                leftSection={<IconCalendarEvent size={18} stroke={2} aria-hidden />}
              >
                Book a Test Now
              </Button>
              <Button
                variant="outline"
                size="md"
                color="teal"
                radius="md"
                leftSection={<IconMapPinSearch size={18} stroke={2} aria-hidden />}
              >
                Find a Collection Center
              </Button>
            </Group>

            <Text className={styles.serviceNote}>
              Serving patients throughout the Philippines{" "}
              <span role="img" aria-label="Philippine flag">
                🇵🇭
              </span>
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
