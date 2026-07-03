import { Box, Container, Grid } from "@mantine/core"
import { IconScale, IconSpy, IconUser, IconUsers, IconUsersGroup, IconVenus } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"
import SpecialistContactCard from "@/components/pages/paternity-dna-test/SpecialistContactCard"
import Heading from "@/components/shared/heading/Heading"
import RecommendationMatrixCard, {
  type RecommendationMatrixRow,
} from "@/components/shared/recommendation-matrix-card/RecommendationMatrixCard"

const RECOMMENDATIONS: RecommendationMatrixRow[] = [
  {
    situation: "I simply want to know if someone is the biological father.",
    recommendation: "Peace of Mind Paternity Test",
    recommendationHref: "/paternity-dna-test/peace-of-mind",
    icon: <IconUser size={14} stroke={2} aria-hidden />,
    accentColor: "#2f9f68",
  },
  {
    situation: "I need results for legal purposes.",
    recommendation: "Legal Paternity DNA Test",
    recommendationHref: "/paternity-dna-test/legal-paternity",
    icon: <IconScale size={14} stroke={2} aria-hidden />,
    accentColor: "#2d75f3",
  },
  {
    situation: "I am currently pregnant.",
    recommendation: "Prenatal Paternity Test",
    recommendationHref: "/paternity-dna-test/non-invasive-paternal",
    icon: <IconVenus size={14} stroke={2} aria-hidden />,
    accentColor: "#8f58e6",
  },
  {
    situation: "The alleged father is unavailable.",
    recommendation: "Grandparent or Avuncular DNA Test",
    recommendationHref: "/paternity-dna-test/family-relationship-testing",
    icon: <IconUsersGroup size={14} stroke={2} aria-hidden />,
    accentColor: "#8f58e6",
  },
  {
    situation: "I only have personal items available.",
    recommendation: "Discreet DNA Testing",
    recommendationHref: "/paternity-dna-test/family-relationship-testing",
    icon: <IconSpy size={14} stroke={2} aria-hidden />,
    accentColor: "#be4b97",
  },
  {
    situation: "I need to compare two siblings.",
    recommendation: "Sibling DNA Test",
    recommendationHref: "/paternity-dna-test/family-relationship-testing",
    icon: <IconUsers size={14} stroke={2} aria-hidden />,
    accentColor: "#e18a20",
  },
]

export default function TestRecommendationMatrixSection() {
  return (
    <Box component="section" className={styles.matrixSection}>
      <Container size="xl">
        <Box>
          <Heading
            order={2}
            title="Not Sure Which Test You Need?"
            classNames={{
              root: styles.sectionHeading,
              title: styles.sectionTitle,
            }}
          />

          <Grid>
            <Grid.Col span={{ base: 12, md: 9 }}>
              <RecommendationMatrixCard
                title="Not Sure Which Test You Need?"
                rows={RECOMMENDATIONS.map((row) => ({
                  situation: row.situation,
                  recommendation: row.recommendation,
                  recommendationHref: row.recommendationHref,
                  icon: row.icon,
                  accentColor: row.accentColor,
                }))}
                accentColor="#8f58e6"
                situationLabel="Your Situation"
                recommendationLabel="Recommended Test"
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 3 }}>
              <SpecialistContactCard />
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
