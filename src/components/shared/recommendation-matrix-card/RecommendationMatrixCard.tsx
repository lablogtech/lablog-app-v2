"use client"

import Link from "next/link"
import type { CSSProperties, ReactNode } from "react"
import { Anchor, Box, Group, Paper, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import { IconArrowNarrowRight } from "@tabler/icons-react"
import styles from "./RecommendationMatrixCard.module.css"

export type RecommendationMatrixRow = {
  situation: ReactNode
  recommendation: ReactNode
  recommendationHref?: string
  icon?: ReactNode
  accentColor?: string
}

type RecommendationMatrixCardProps = {
  title: string
  subtitle?: ReactNode
  rows: RecommendationMatrixRow[]
  note?: ReactNode
  accentColor?: string
  situationLabel?: ReactNode
  recommendationLabel?: ReactNode
}

export default function RecommendationMatrixCard({
  title,
  subtitle,
  rows,
  note,
  accentColor = "#356fcb",
  situationLabel,
  recommendationLabel,
}: RecommendationMatrixCardProps) {
  return (
    <Paper className={styles.card} radius="xl" style={{ "--rm-accent": accentColor } as CSSProperties}>
      <Stack gap="md" className={styles.inner}>
        <Box className={styles.header}>
          <Title order={2} className={styles.title}>
            {title}
          </Title>
          {subtitle ? <Text className={styles.subtitle}>{subtitle}</Text> : null}
        </Box>

        {situationLabel || recommendationLabel ? (
          <Group wrap="nowrap" className={styles.tableHead}>
            <Text className={styles.headLeft}>{situationLabel}</Text>
            <Box className={styles.headArrow} aria-hidden />
            <Text className={styles.headRight}>{recommendationLabel}</Text>
          </Group>
        ) : null}

        <Stack gap={10} className={styles.rows}>
          {rows.map((row) => {
            const rowAccentColor = row.accentColor ?? accentColor
            const hasExternalRecommendation = row.recommendationHref
              ? /^https?:\/\//i.test(row.recommendationHref)
              : false

            return (
              <Paper
                key={String(row.situation)}
                className={styles.row}
                radius="lg"
                style={{ "--rm-row-accent": rowAccentColor } as CSSProperties}
              >
                <Group wrap="nowrap" className={styles.rowContent} align="center">
                  <Group gap={10} wrap="nowrap" className={styles.situationGroup} align="center">
                    {row.icon ? (
                      <ThemeIcon radius="xl" variant="light" className={styles.rowIcon} size={28}>
                        {row.icon}
                      </ThemeIcon>
                    ) : null}
                    <Text size="sm" className={styles.situation}>
                      {row.situation}
                    </Text>
                  </Group>

                  <IconArrowNarrowRight className={styles.arrow} size={18} stroke={1.9} aria-hidden />

                  <Box className={styles.recommendationChip}>
                    {row.recommendationHref ? (
                      hasExternalRecommendation ? (
                        <Anchor
                          component="a"
                          href={row.recommendationHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="never"
                          size="sm"
                          className={`${styles.recommendation} ${styles.recommendationLink}`}
                        >
                          {row.recommendation}
                        </Anchor>
                      ) : (
                        <Anchor
                          component={Link}
                          href={row.recommendationHref}
                          underline="never"
                          size="sm"
                          className={`${styles.recommendation} ${styles.recommendationLink}`}
                        >
                          {row.recommendation}
                        </Anchor>
                      )
                    ) : (
                      <Text size="sm" className={styles.recommendation}>
                        {row.recommendation}
                      </Text>
                    )}
                  </Box>
                </Group>
              </Paper>
            )
          })}
        </Stack>

        {note ? <Text className={styles.note}>{note}</Text> : null}
      </Stack>
    </Paper>
  )
}
