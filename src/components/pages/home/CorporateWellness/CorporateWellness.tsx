"use client"

import styles from "./CorporateWellness.module.css"
import { Box, Button, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconBuildingCommunity,
  IconClipboardList,
  IconShield,
  IconBuilding,
  IconUsers,
  IconArrowRight,
} from "@tabler/icons-react"

const WELLNESS_SERVICES = [
  {
    icon: <IconBuildingCommunity size={32} stroke={1.5} aria-hidden />,
    label: "Employee Wellness Programs",
  },
  {
    icon: <IconClipboardList size={32} stroke={1.5} aria-hidden />,
    label: "Annual Physical Exams",
  },
  {
    icon: <IconShield size={32} stroke={1.5} aria-hidden />,
    label: "Executive Checkups",
  },
  {
    icon: <IconBuilding size={32} stroke={1.5} aria-hidden />,
    label: "On-site Screening Events",
  },
  {
    icon: <IconUsers size={32} stroke={1.5} aria-hidden />,
    label: "Laboratory Services",
  },
]

export default function CorporateWellness() {
  return (
    <Box className={styles.section}>
      <Container
        component="section"
        id="corporate-wellness"
        size="xl"
        py={{ base: 48, md: 72 }}
        px={{ base: 16, md: 40 }}
        className={styles.container}
      >
        <Grid gap={48} align="center" className={styles.grid}>
          {/* Left Content */}
          <Grid.Col span={{ base: 12 }}>
            <Stack gap="lg" className={styles.content}>
              <Box>
                <Title order={2} className={styles.title}>
                  Corporate Wellness Solutions
                </Title>
                <Text className={styles.subtitle}>
                  Comprehensive health programs for a healthier, more productive workplace.
                </Text>
              </Box>

              {/* Services Grid */}
              <Grid gap="md" columns={20}>
                {WELLNESS_SERVICES.map((service, index) => (
                  <Grid.Col key={index} span={{ base: 20, sm: 6, md: 4 }} className={styles.serviceItem}>
                    <Group gap="sm" className={styles.serviceGroup}>
                      <ThemeIcon size={48} radius="md" variant="light" color="blue" className={styles.serviceIcon}>
                        {service.icon}
                      </ThemeIcon>
                      <Text className={styles.serviceLabel}>{service.label}</Text>
                    </Group>
                  </Grid.Col>
                ))}
              </Grid>

              {/* CTA Button */}
              <Box className={styles.ctaBox}>
                <Button
                  size="md"
                  className={styles.button}
                  color="teal"
                  rightSection={<IconArrowRight size={18} stroke={2} />}
                >
                  Request Corporate Proposal
                </Button>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
