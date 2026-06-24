import Image from "next/image"
import Link from "next/link"
import { Anchor, Box, Container, Group, Text, Title } from "@mantine/core"
import { IconAtom, IconClockHour4, IconFlask2, IconMapPin, IconShieldLock } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"

const HERO_POINTS = [
  { icon: IconAtom, label: "99.99% Accuracy" },
  { icon: IconFlask2, label: "ISO-Certified Laboratory" },
  { icon: IconShieldLock, label: "Confidential & Secure" },
  { icon: IconClockHour4, label: "7-10 Working Days" },
  { icon: IconMapPin, label: "Nationwide Service" },
]

export default function PaternityHeroSection() {
  return (
    <Box component="section" className={styles.heroSection}>
      <Container size={1220}>
        <Box className={styles.heroInner}>
          <Box className={styles.heroCopy}>
            <Text className={styles.eyebrow}>Accurate. Confidential. Trusted.</Text>
            <Title order={1} className={styles.heroTitle}>
              Paternity DNA Test Philippines
            </Title>
            <Text className={styles.lead}>
              Every family has a unique story. Get the answers you need with trusted paternity DNA testing solutions.
            </Text>
            <Text className={styles.subLead}>
              Whether for personal peace of mind, legal purposes, or testing during pregnancy, our team helps you choose
              the most suitable test.
            </Text>
            <Anchor component={Link} href="#peace-of-mind" className={styles.heroCta} underline="never">
              Find My Test
            </Anchor>
          </Box>

          <Box className={styles.heroImageWrap}>
            <Image
              src="/hero.jpg"
              alt="Family consultation for paternity DNA testing"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImage}
            />
          </Box>
        </Box>

        <Box className={styles.pointsList}>
          {HERO_POINTS.map((item) => {
            const Icon = item.icon
            return (
              <Group key={item.label} className={styles.pointItem} gap={8} wrap="nowrap" justify="center">
                <Icon size={18} stroke={1.9} aria-hidden />
                <Text component="span" className={styles.pointLabel}>
                  {item.label}
                </Text>
              </Group>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
