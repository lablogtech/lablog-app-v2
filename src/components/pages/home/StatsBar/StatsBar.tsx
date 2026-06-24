"use client"

import styles from "./StatsBar.module.css"
import { Box, Container, Group, Stack, Text } from "@mantine/core"
import { IconClock, IconHome, IconMapPin, IconTestPipe, IconUserHeart } from "@tabler/icons-react"

const STATS = [
  {
    label: "Tests Performed",
    value: "10,000+",
    icon: <IconTestPipe aria-hidden stroke={1.8} />,
  },
  {
    label: "Partner Clinics Nationwide",
    value: "9",
    icon: <IconMapPin aria-hidden stroke={1.8} />,
  },
  {
    label: "Home Service Available",
    value: null,
    icon: <IconHome aria-hidden stroke={1.8} />,
  },
  {
    label: "Turnaround Time",
    value: "Fast",
    icon: <IconClock aria-hidden stroke={1.8} />,
  },
  {
    label: "Trusted by Families, Physicians & Legal Professionals",
    value: null,
    icon: <IconUserHeart aria-hidden stroke={1.8} />,
  },
]

export default function StatsBar() {
  return (
    <Box className={styles.root}>
      <Container size="xl" py={{ base: 20, md: 24 }} px={{ base: 16, md: 40 }} className={styles.bar}>
        <Box className={styles.inner}>
          {STATS.map((stat, i) => (
            <Group key={i} className={styles.item} wrap="nowrap" gap="sm">
              <span className={styles.icon}>{stat.icon}</span>
              <Stack className={styles.text} gap={1}>
                {stat.value && <Text className={styles.value}>{stat.value}</Text>}
                <Text className={styles.label}>{stat.label}</Text>
              </Stack>
            </Group>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
