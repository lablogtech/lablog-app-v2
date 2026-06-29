import { Box, Container, Grid } from "@mantine/core"
import { IconCalendarEvent, IconLock, IconMapPin, IconShieldCheck, IconTargetArrow } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"
import Heading from "@/components/shared/heading/Heading"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"

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
        <Grid className={styles.heroInner} gap={{ base: 24, md: 26 }} align="stretch">
          <Grid.Col span={12}>
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
          </Grid.Col>
        </Grid>

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
      </Container>
    </Box>
  )
}
