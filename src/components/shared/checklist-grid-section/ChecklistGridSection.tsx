import type { CSSProperties, ReactNode } from "react"
import { Box, Paper, SimpleGrid, Text, ThemeIcon, Title, type SimpleGridProps } from "@mantine/core"
import { IconCheck } from "@tabler/icons-react"
import styles from "./ChecklistGridSection.module.css"

type ChecklistGridSectionProps = {
  title: string
  items: string[]
  subtitle?: ReactNode
  cols?: SimpleGridProps["cols"]
  accentColor?: string
  icon?: ReactNode
  titleAlign?: "left" | "center"
  titleAsText?: boolean
}

export default function ChecklistGridSection({
  title,
  items,
  subtitle,
  cols,
  accentColor = "#0f9a61",
  icon,
  titleAlign = "left",
  titleAsText = false,
}: ChecklistGridSectionProps) {
  const itemIcon = icon ?? <IconCheck size={14} stroke={2.1} aria-hidden />
  const titleClassName =
    `${styles.title} ${titleAlign === "center" ? styles.titleCentered : ""} ${titleAsText ? styles.titleAsText : ""}`.trim()

  return (
    <Box className={styles.root} style={{ "--cgs-accent": accentColor } as CSSProperties}>
      <Box className={styles.header}>
        {titleAsText ? (
          <Text className={titleClassName}>{title}</Text>
        ) : (
          <Title order={3} className={titleClassName}>
            {title}
          </Title>
        )}
        {subtitle ? <Text className={styles.subtitle}>{subtitle}</Text> : null}
      </Box>

      <SimpleGrid cols={cols ?? { base: 1, sm: 2 }} spacing="sm" mt={12}>
        {items.map((item) => (
          <Paper key={item} className={styles.item}>
            <ThemeIcon radius="xl" className={styles.iconWrap} variant="transparent">
              {itemIcon}
            </ThemeIcon>
            <Text className={styles.itemText}>{item}</Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Box>
  )
}
