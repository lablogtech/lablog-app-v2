"use client"

import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"
import { Box, Button, Group, Paper, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import { IconShieldLock } from "@tabler/icons-react"
import styles from "./ConfidentialInfoCard.module.css"

type ConfidentialInfoCardProps = {
  title: string
  paragraphs: ReactNode[]
  eyebrow?: string
  accentColor?: string
  icon?: ReactNode
  action?: {
    label: string
    href: string
  }
}

export default function ConfidentialInfoCard({
  title,
  paragraphs,
  eyebrow,
  accentColor = "#0f9a61",
  icon,
  action,
}: ConfidentialInfoCardProps) {
  const cardIcon = icon ?? <IconShieldLock size={22} stroke={1.9} aria-hidden />

  return (
    <Paper className={styles.card} radius="xl" style={{ "--ci-accent": accentColor } as CSSProperties}>
      <Stack gap="md" className={styles.inner}>
        <Group wrap="nowrap" align="flex-start" gap="md" className={styles.header}>
          <ThemeIcon radius="xl" variant="light" className={styles.icon} size={58}>
            {cardIcon}
          </ThemeIcon>
          <Box className={styles.headingWrap}>
            {eyebrow ? <Text className={styles.eyebrow}>{eyebrow}</Text> : null}
            <Title order={2} className={styles.title}>
              {title}
            </Title>
          </Box>
        </Group>

        <Stack gap={10} className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <Text key={index} className={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </Stack>

        {action ? (
          <Button component={Link} href={action.href} className={styles.action} radius="md">
            {action.label}
          </Button>
        ) : null}
      </Stack>
    </Paper>
  )
}
