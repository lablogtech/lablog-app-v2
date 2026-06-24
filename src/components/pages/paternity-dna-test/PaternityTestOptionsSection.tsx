import Link from "next/link"
import { Anchor, Box, Container, Group, Text, ThemeIcon, Title } from "@mantine/core"
import { IconArrowRight, IconCheck, IconScale, IconUserCircle, IconVenus } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"

const TEST_CARDS = [
  {
    id: "peace-of-mind",
    icon: IconUserCircle,
    href: "/paternity-dna-test/peace-of-mind",
    cardClassName: styles.testCardGreen,
    iconClassName: styles.testIconGreen,
    checkClassName: styles.testCheckGreen,
    learnMoreClassName: styles.learnMoreGreen,
    title: "Peace of mind (Non-Legal) Paternity Test",
    summary: "Best for personal knowledge and reassurance",
    description: "Get private answers for your peace of mind without legal involvement.",
    points: [
      "Personal peace of mind",
      "Family clarification",
      "Private and confidential",
      "Flexible collection options",
    ],
  },
  {
    id: "legal-paternity",
    icon: IconScale,
    href: "/paternity-dna-test/legal-paternity",
    cardClassName: styles.testCardBlue,
    iconClassName: styles.testIconBlue,
    checkClassName: styles.testCheckBlue,
    learnMoreClassName: styles.learnMoreBlue,
    title: "Legal Paternity Test",
    summary: "Best for official and legal purposes",
    description: "Court-admissible results with strict chain-of-custody and identity verification procedures.",
    points: [
      "Child custody cases",
      "Child support disputes",
      "Immigration requirements",
      "Birth certificate amendments",
      "Court proceedings",
    ],
  },
  {
    id: "non-invasive-paternal",
    icon: IconVenus,
    href: "/paternity-dna-test/non-invasive-paternal",
    cardClassName: styles.testCardPurple,
    iconClassName: styles.testIconPurple,
    checkClassName: styles.testCheckPurple,
    learnMoreClassName: styles.learnMorePurple,
    title: "Non-Invasive Prenatal Paternity Test",
    summary: "Best for determining paternity during pregnancy",
    description: "Safe and accurate testing during pregnancy with a simple blood sample.",
    points: ["Pregnancy from 10 weeks onwards", "Early answers during pregnancy", "Safe, non-invasive testing"],
  },
]

export default function PaternityTestOptionsSection() {
  return (
    <Box component="section" className={styles.testsSection}>
      <Container size="xl">
        <Box className={styles.sectionHeading}>
          <Title order={2} className={styles.sectionTitle}>
            Which Paternity DNA Test Is Right For You?
          </Title>
          <Text className={styles.sectionSubtitle}>
            Choose from the three most requested paternity DNA testing options below.
          </Text>
        </Box>

        <Box className={styles.cardGrid}>
          {TEST_CARDS.map((card) => (
            <Box component="article" id={card.id} key={card.id} className={`${styles.testCard} ${card.cardClassName}`}>
              <ThemeIcon size={74} radius={999} variant="light" className={`${styles.testIcon} ${card.iconClassName}`}>
                <card.icon size={38} stroke={1.5} aria-hidden />
              </ThemeIcon>

              <Title order={3} className={styles.testCardTitle}>
                {card.title}
              </Title>

              <Text className={styles.testCardSummary}>{card.summary}</Text>
              <Text className={styles.testCardDescription}>{card.description}</Text>

              <Box className={styles.testPoints}>
                {card.points.map((point) => (
                  <Group key={point} className={styles.testPoint} gap={8} wrap="nowrap" align="flex-start">
                    <ThemeIcon size={18} radius={999} className={`${styles.testCheck} ${card.checkClassName}`}>
                      <IconCheck size={13} stroke={3} aria-hidden />
                    </ThemeIcon>
                    <Text component="span">{point}</Text>
                  </Group>
                ))}
              </Box>

              <Anchor
                component={Link}
                href={card.href}
                underline="never"
                className={`${styles.learnMoreLink} ${card.learnMoreClassName}`}
              >
                Learn More
                <IconArrowRight size={17} stroke={2.4} aria-hidden />
              </Anchor>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
