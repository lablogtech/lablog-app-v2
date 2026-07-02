import type { CSSProperties, ReactNode } from "react"
import Image from "next/image"
import { Box, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title, type SimpleGridProps } from "@mantine/core"
import { IconCircleCheck } from "@tabler/icons-react"
import styles from "./HighlightCards.module.css"

export type HighlightCardSection = {
  label: ReactNode
  points: string[]
}

export type HighlightCardImage = {
  src: string
  alt: string
  sizes?: string
}

export type HighlightCardItem = {
  title: string
  description?: ReactNode
  icon?: ReactNode
  image?: HighlightCardImage
  details?: ReactNode[]
  insights: string[]
  sections?: HighlightCardSection[]
  note?: string
}

type HighlightCardsProps = {
  eyebrow?: string
  title: string
  subtitle?: ReactNode
  items: HighlightCardItem[]
  cols?: SimpleGridProps["cols"]
  accentColor?: string
}

export default function HighlightCards({
  eyebrow,
  title,
  subtitle,
  items,
  cols,
  accentColor = "#5f42c9",
}: HighlightCardsProps) {
  return (
    <Box className={styles.root} style={{ "--hc-accent": accentColor } as CSSProperties}>
      <Box className={styles.header}>
        {eyebrow ? <Text className={styles.eyebrow}>{eyebrow}</Text> : null}
        <Title order={2} className={styles.title}>
          {title}
        </Title>
        {subtitle ? <Text className={styles.subtitle}>{subtitle}</Text> : null}
      </Box>

      <SimpleGrid cols={cols ?? { base: 1, sm: 2, lg: 3 }} spacing="md">
        {items.map((item) => (
          <Paper key={item.title} radius="lg" className={styles.card}>
            <Stack gap="xs">
              {item.image ? (
                <Box className={styles.imageWrap}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes={item.image.sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                    className={styles.image}
                  />
                </Box>
              ) : item.icon ? (
                <ThemeIcon size={52} radius="xl" variant="light" className={styles.icon}>
                  {item.icon}
                </ThemeIcon>
              ) : null}
              <Title order={3} className={styles.cardTitle}>
                {item.title}
              </Title>
              {item.description ? <Text className={styles.description}>{item.description}</Text> : null}
              {item.details?.map((detail, index) => (
                <Text key={`${item.title}-detail-${index}`} className={styles.detail}>
                  {detail}
                </Text>
              ))}
              {item.sections?.map((section, sectionIndex) => (
                <Box key={`${item.title}-section-${sectionIndex}`}>
                  <Text className={styles.sectionLabel}>{section.label}</Text>
                  {section.points.length ? (
                    <Stack gap={6} mt={6}>
                      {section.points.map((point) => (
                        <Text key={point} className={styles.metricItem}>
                          <IconCircleCheck size={14} stroke={2.1} aria-hidden />
                          {point}
                        </Text>
                      ))}
                    </Stack>
                  ) : null}
                </Box>
              ))}
              {item.insights.length ? (
                <Stack gap={6} mt={10}>
                  {item.insights.map((insight) => (
                    <Text key={insight} className={styles.metricItem}>
                      <IconCircleCheck size={14} stroke={2.1} aria-hidden />
                      {insight}
                    </Text>
                  ))}
                </Stack>
              ) : null}
              {item.note ? <Text className={styles.note}>{item.note}</Text> : null}
            </Stack>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  )
}
