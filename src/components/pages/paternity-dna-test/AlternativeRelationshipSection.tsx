"use client"

import { useState } from "react"
import { Box, Button, Container, Group, Modal, Text, ThemeIcon, Title } from "@mantine/core"
import { IconCheck, IconUsers, IconUserSquareRounded, IconUsersGroup, IconSpy } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"

type RelationshipCard = {
  id: string
  title: string
  description: string
  points?: string[]
  icon: typeof IconUsers
  cardClassName: string
  iconClassName: string
  actionClassName: string
  checkClassName: string
}

const RELATIONSHIP_CARDS: RelationshipCard[] = [
  {
    id: "discreet-dna",
    title: "Discreet DNA Testing",
    description: "Uses personal items that may contain DNA when standard samples are unavailable.",
    points: ["Hair with roots", "Nail clippings", "Used toothbrush", "Ear swabs"],
    icon: IconSpy,
    cardClassName: styles.altCardGreen,
    iconClassName: styles.altIconGreen,
    actionClassName: styles.altActionGreen,
    checkClassName: styles.altCheckGreen,
  },
  {
    id: "avuncular-dna",
    title: "Avuncular DNA Test",
    description: "Determines biological relationships through an aunt or uncle when the alleged father is unavailable.",
    icon: IconUsers,
    cardClassName: styles.altCardBlue,
    iconClassName: styles.altIconBlue,
    actionClassName: styles.altActionBlue,
    checkClassName: styles.altCheckBlue,
  },
  {
    id: "grandparent-dna",
    title: "Grandparent DNA Test",
    description: "Determines biological relationship through one or both alleged grandparents.",
    icon: IconUsersGroup,
    cardClassName: styles.altCardPurple,
    iconClassName: styles.altIconPurple,
    actionClassName: styles.altActionPurple,
    checkClassName: styles.altCheckPurple,
  },
  {
    id: "sibling-dna",
    title: "Sibling DNA Test",
    description: "Determines whether two individuals are biologically related as siblings.",
    icon: IconUserSquareRounded,
    cardClassName: styles.altCardOrange,
    iconClassName: styles.altIconOrange,
    actionClassName: styles.altActionOrange,
    checkClassName: styles.altCheckOrange,
  },
]

export default function AlternativeRelationshipSection() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null)

  const activeCard = RELATIONSHIP_CARDS.find((card) => card.id === activeCardId)

  return (
    <Box component="section" className={styles.altSection}>
      <Container size={1220}>
        <Box className={styles.sectionHeading}>
          <Title order={2} className={styles.sectionTitle}>
            Alternative Family Relationship DNA Testing
          </Title>
          <Text className={styles.sectionSubtitle}>
            When a direct paternity test is not possible, we offer alternative DNA solutions.
          </Text>
        </Box>

        <Box className={styles.altGrid}>
          {RELATIONSHIP_CARDS.map((card) => (
            <Box key={card.id} className={`${styles.altCard} ${card.cardClassName}`}>
              <ThemeIcon size={74} radius={999} variant="light" className={`${styles.altIcon} ${card.iconClassName}`}>
                <card.icon size={36} stroke={1.6} aria-hidden />
              </ThemeIcon>

              <Title order={3} className={styles.altTitle}>
                {card.title}
              </Title>

              <Text className={styles.altDescription}>{card.description}</Text>

              {card.points && (
                <Box className={styles.altPoints}>
                  {card.points.map((point) => (
                    <Group key={point} gap={8} wrap="nowrap" className={styles.altPointRow}>
                      <ThemeIcon size={17} radius={999} className={`${styles.altCheck} ${card.checkClassName}`}>
                        <IconCheck size={12} stroke={3} aria-hidden />
                      </ThemeIcon>
                      <Text component="span">{point}</Text>
                    </Group>
                  ))}
                </Box>
              )}

              <Button
                variant="subtle"
                className={`${styles.altAction} ${card.actionClassName}`}
                onClick={() => setActiveCardId(card.id)}
                rightSection={<span aria-hidden>→</span>}
              >
                View Details
              </Button>
            </Box>
          ))}
        </Box>
      </Container>

      <Modal
        opened={Boolean(activeCard)}
        onClose={() => setActiveCardId(null)}
        title={activeCard?.title ?? "Test details"}
        centered
        size="lg"
      >
        <Text c="dimmed" mb="md">
          Placeholder content for {activeCard?.title ?? "this test"}. You can add complete details here later.
        </Text>
        <Text size="sm">This modal is wired and ready for your final copy, pricing, and process details.</Text>
      </Modal>
    </Box>
  )
}
