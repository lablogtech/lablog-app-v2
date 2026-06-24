"use client"

import styles from "./PreventiveHealthSection.module.css"
import { Box, Button, Container, Grid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconActivity,
  IconHeartbeat,
  IconDroplet,
  IconFlask,
  IconShield,
  IconTestPipe,
  IconBriefcase,
  IconUsers,
  IconVirus,
} from "@tabler/icons-react"

const LAB_TESTS = [
  {
    title: "Annual Physical Exam (APE)",
    icon: <IconActivity size={32} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
  {
    title: "Heart Health Screening",
    icon: <IconHeartbeat size={32} stroke={1.8} aria-hidden />,
    color: "#e03131",
  },
  {
    title: "Diabetes Screening",
    icon: <IconDroplet size={32} stroke={1.8} aria-hidden />,
    color: "#f59f00",
  },
  {
    title: "Cholesterol & Lipid Profile",
    icon: <IconFlask size={32} stroke={1.8} aria-hidden />,
    color: "#067BF7",
  },
  {
    title: "Kidney Function Tests",
    icon: <IconShield size={32} stroke={1.8} aria-hidden />,
    color: "#9c36b5",
  },
  {
    title: "Liver Function Tests",
    icon: <IconTestPipe size={32} stroke={1.8} aria-hidden />,
    color: "#c2255c",
  },
  {
    title: "Comprehensive Blood Chemistry",
    icon: <IconVirus size={32} stroke={1.8} aria-hidden />,
    color: "#1098ad",
  },
  {
    title: "Executive Checkups",
    icon: <IconBriefcase size={32} stroke={1.8} aria-hidden />,
    color: "#5f3dc4",
  },
  {
    title: "Corporate Wellness Programs",
    icon: <IconUsers size={32} stroke={1.8} aria-hidden />,
    color: "#02B992",
  },
]

export default function PreventiveHealthSection() {
  return (
    <Box className={styles.root}>
      <Container
        component="section"
        id="laboratory-tests"
        size="xl"
        py={{ base: 48, md: 72 }}
        px={{ base: 16, md: 40 }}
      >
        <Grid gap={{ base: "md", md: 64 }} align="center">
          {/* Left Content */}
          <Grid.Col span={{ base: 12, md: 9 }}>
            <Stack gap="lg">
              <Box>
                <Title order={2} className={styles.title}>
                  Preventive Health & Lifestyle Laboratory Tests
                </Title>
                <Text className={styles.subtitle}>
                  Routine laboratory tests designed to help you monitor your health before symptoms appear.
                </Text>
              </Box>

              {/* Lab Test Grid */}
              <Grid gap="md" align="flex-start" columns={18} className={styles.testGrid}>
                {LAB_TESTS.map((test, i) => (
                  <Grid.Col key={i} span={{ base: 6, sm: 3, md: 2 }}>
                    <Box className={styles.testItem}>
                      <ThemeIcon
                        size={56}
                        radius="md"
                        variant="light"
                        style={{ backgroundColor: `${test.color}15`, color: test.color }}
                        className={styles.testIcon}
                      >
                        {test.icon}
                      </ThemeIcon>
                      <Text className={styles.testTitle}>{test.title}</Text>
                    </Box>
                  </Grid.Col>
                ))}
              </Grid>

              {/* CTA Button */}
              <Button
                component="a"
                href="#laboratory-packages"
                className={styles.ctaButton}
                variant="filled"
                color="blue"
                radius="md"
              >
                View Laboratory Packages
              </Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  )
}
