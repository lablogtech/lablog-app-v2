import { Box, Container, Grid, Group, Text, Title } from "@mantine/core"
import { IconCalendarEvent, IconLock, IconMapPin, IconShieldCheck, IconTargetArrow } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"

const HERO_POINTS = [
  { icon: IconTargetArrow, label: "99.99%", subLabel: "Accuracy" },
  { icon: IconShieldCheck, label: "ISO-Certified", subLabel: "Laboratory" },
  { icon: IconLock, label: "Confidential", subLabel: "& Secure" },
  { icon: IconCalendarEvent, label: "Results in", subLabel: "7-10 Working Days" },
  { icon: IconMapPin, label: "Nationwide", subLabel: "Service" },
]

export default function PaternityHeroSection() {
  return (
    <Box component="section" className={styles.heroSection}>
      <Container size="xl">
        <Grid className={styles.heroInner} gap={{ base: 24, md: 26 }} align="stretch">
          <Grid.Col span={12}>
            <Box className={styles.heroCopy}>
              <Text className={styles.eyebrow}>Accurate. Confidential. Trusted.</Text>
              <Title order={1} className={styles.heroTitle}>
                Paternity DNA Test Philippines
              </Title>
              <Text className={styles.lead}>
                Every family has a unique story. Get the answers you need with trusted paternity DNA testing solutions.
              </Text>
              <Text className={styles.subLead}>
                Whether for personal peace of mind, legal purposes, or testing during pregnancy, our team helps you
                choose the most suitable test.
              </Text>
            </Box>
          </Grid.Col>
        </Grid>

        <Grid className={styles.pointsList} columns={10} gap={{ base: 8, md: 8 }}>
          {HERO_POINTS.map((item) => {
            const Icon = item.icon
            return (
              <Grid.Col key={item.label} span={{ base: 5, sm: 2 }}>
                <Group className={styles.pointItem} gap={8} wrap="nowrap" justify="center">
                  <Icon size={18} stroke={1.9} aria-hidden />
                  <Box className={styles.pointLabelWrap}>
                    <Text component="span" className={styles.pointLabel}>
                      {item.label}
                    </Text>
                    <Text component="span" className={styles.pointSubLabel}>
                      {item.subLabel}
                    </Text>
                  </Box>
                </Group>
              </Grid.Col>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
