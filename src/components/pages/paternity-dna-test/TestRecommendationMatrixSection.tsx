import { Box, Container, Grid, Group, Table, Text, ThemeIcon } from "@mantine/core"
import {
  IconArrowNarrowRight,
  IconScale,
  IconSpy,
  IconUser,
  IconUsers,
  IconUsersGroup,
  IconVenus,
} from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"
import SpecialistContactCard from "@/components/pages/paternity-dna-test/SpecialistContactCard"
import Heading from "@/components/shared/heading/Heading"

type RecommendationRow = {
  situation: string
  recommended: string
  icon: typeof IconUser
  iconClassName: string
  recommendedClassName: string
}

const RECOMMENDATIONS: RecommendationRow[] = [
  {
    situation: "I simply want to know if someone is the biological father.",
    recommended: "Peace of Mind Paternity Test",
    icon: IconUser,
    iconClassName: styles.matrixIconGreen,
    recommendedClassName: styles.matrixRecommendedGreen,
  },
  {
    situation: "I need results for legal purposes.",
    recommended: "Legal Paternity DNA Test",
    icon: IconScale,
    iconClassName: styles.matrixIconBlue,
    recommendedClassName: styles.matrixRecommendedBlue,
  },
  {
    situation: "I am currently pregnant.",
    recommended: "Prenatal Paternity Test",
    icon: IconVenus,
    iconClassName: styles.matrixIconPurple,
    recommendedClassName: styles.matrixRecommendedPurple,
  },
  {
    situation: "The alleged father is unavailable.",
    recommended: "Grandparent or Avuncular DNA Test",
    icon: IconUsersGroup,
    iconClassName: styles.matrixIconPurple,
    recommendedClassName: styles.matrixRecommendedPurple,
  },
  {
    situation: "I only have personal items available.",
    recommended: "Discreet DNA Testing",
    icon: IconSpy,
    iconClassName: styles.matrixIconMagenta,
    recommendedClassName: styles.matrixRecommendedMagenta,
  },
  {
    situation: "I need to compare two siblings.",
    recommended: "Sibling DNA Test",
    icon: IconUsers,
    iconClassName: styles.matrixIconOrange,
    recommendedClassName: styles.matrixRecommendedOrange,
  },
]

export default function TestRecommendationMatrixSection() {
  const rows = RECOMMENDATIONS.map((row) => {
    const Icon = row.icon

    return (
      <Table.Tr key={row.situation}>
        <Table.Td className={styles.matrixSituationCell}>
          <Group gap={10} wrap="nowrap">
            <ThemeIcon size={22} variant="light" radius={999} className={`${styles.matrixIcon} ${row.iconClassName}`}>
              <Icon size={14} stroke={2} aria-hidden />
            </ThemeIcon>
            <Text className={styles.matrixSituationText}>{row.situation}</Text>
          </Group>
        </Table.Td>

        <Table.Td className={styles.matrixArrowCell}>
          <IconArrowNarrowRight size={18} stroke={1.9} aria-hidden />
        </Table.Td>

        <Table.Td className={styles.matrixRecommendedCell}>
          <Text className={`${styles.matrixRecommendedText} ${row.recommendedClassName}`}>{row.recommended}</Text>
        </Table.Td>
      </Table.Tr>
    )
  })

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
              <Table className={styles.matrixTable} horizontalSpacing="lg" verticalSpacing="sm">
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th className={styles.matrixHeadLeft}>Your Situation</Table.Th>
                    <Table.Th className={styles.matrixHeadArrow} />
                    <Table.Th className={styles.matrixHeadRight}>Recommended Test</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
              </Table>
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
