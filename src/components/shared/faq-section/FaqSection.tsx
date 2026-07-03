"use client"

import type { ReactNode } from "react"
import { Accordion, Box, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core"
import { IconChevronDown, IconHelp } from "@tabler/icons-react"
import styles from "./FaqSection.module.css"

export type FaqItem = {
  question: string
  answer: ReactNode
}

type FaqSectionProps = {
  title?: ReactNode
  items: FaqItem[]
  columns?: number
}

function splitIntoColumns(items: FaqItem[], columns: number) {
  if (columns <= 1) {
    return [items]
  }

  const chunkSize = Math.ceil(items.length / columns)
  const chunks: FaqItem[][] = []

  for (let index = 0; index < columns; index += 1) {
    const start = index * chunkSize
    const end = start + chunkSize
    const chunk = items.slice(start, end)
    if (chunk.length > 0) {
      chunks.push(chunk)
    }
  }

  return chunks
}

export default function FaqSection({ title = "Frequently Asked Questions", items, columns = 2 }: FaqSectionProps) {
  const safeColumns = Math.max(1, Math.min(columns, items.length || 1))
  const columnItems = splitIntoColumns(items, safeColumns)

  return (
    <Box className={styles.root}>
      <Title order={2} className={styles.title} ta="center">
        {title}
      </Title>

      <SimpleGrid cols={{ base: 1, md: safeColumns }} spacing="lg" mt={18}>
        {columnItems.map((column, columnIndex) => (
          <Accordion
            key={columnIndex}
            variant="separated"
            radius="md"
            chevron={<IconChevronDown size={15} stroke={2.2} />}
            classNames={{
              item: styles.item,
              control: styles.control,
              panel: styles.panel,
              chevron: styles.chevron,
            }}
          >
            {column.map((item) => (
              <Accordion.Item value={item.question} key={item.question}>
                <Accordion.Control
                  icon={
                    <ThemeIcon size={20} radius="xl" variant="light" className={styles.questionIcon}>
                      <IconHelp size={13} stroke={2.1} aria-hidden />
                    </ThemeIcon>
                  }
                >
                  {item.question}
                </Accordion.Control>
                <Accordion.Panel>
                  <Text className={styles.answer}>{item.answer}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        ))}
      </SimpleGrid>
    </Box>
  )
}
