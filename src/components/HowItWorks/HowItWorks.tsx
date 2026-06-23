"use client"

import styles from "./HowItWorks.module.css"
import { Box, Container, Grid, Stack, Text, Title, ThemeIcon, Badge, Center } from "@mantine/core"
import { IconCalendarEvent, IconMedicalCross, IconTestPipe, IconFileCheck, IconArrowRight } from "@tabler/icons-react"

const STEPS = [
  {
    number: 1,
    title: "Book Your Test",
    description: "Choose your test and schedule an appointment online or by phone.",
    icon: <IconCalendarEvent size={40} stroke={1.5} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "Visit a Clinic or Schedule Home Service",
    description: "Visit any of our partner clinics or avail of our home service.",
    icon: <IconMedicalCross size={40} stroke={1.5} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Sample Collection",
    description: "Our trained professionals will collect your sample safely and comfortably.",
    icon: <IconTestPipe size={40} stroke={1.5} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Receive Your Results",
    description: "Get your results securely online or via email within the promised timeframe.",
    icon: <IconFileCheck size={40} stroke={1.5} aria-hidden />,
    color: "#02B992",
  },
]

export default function HowItWorks() {
  return (
    <Container
      component="section"
      id="how-it-works"
      size="xl"
      py={{ base: 48, md: 72 }}
      px={{ base: 16, md: 40 }}
      className={styles.section}
    >
      <Stack gap="lg" align="center" className={styles.headerStack}>
        <Box className={styles.headerBox}>
          <Title order={2} className={styles.title}>
            How It Works
          </Title>
          <Text className={styles.subtitle}>Simple steps to get your test done.</Text>
        </Box>
      </Stack>

      <Grid gap={{ base: "xl", md: 40 }} align="flex-start" className={styles.stepsGrid}>
        {STEPS.map((step, index) => (
          <Grid.Col key={step.number} span={{ base: 12, sm: 6, md: 3 }}>
            <Stack align="center" gap="md" className={styles.stepWrapper}>
              <Box className={styles.stepHeader}>
                <ThemeIcon
                  size={56}
                  radius="50%"
                  variant="light"
                  style={{ backgroundColor: `${step.color}18`, color: step.color }}
                  className={styles.stepBadge}
                >
                  {step.icon}
                </ThemeIcon>
              </Box>

              <Stack align="center" gap={6}>
                <Badge color={step.color}>{`Step ${step.number}`}</Badge>
                <Center py="sm" mih={44}>
                  <Title order={4} className={styles.stepTitle}>
                    {step.title}
                  </Title>
                </Center>
                <Text maw={240} className={styles.stepDescription} ta="center">
                  {step.description}
                </Text>
              </Stack>
              {index < STEPS.length - 1 && (
                <Box className={styles.arrowContainer} aria-hidden="true">
                  <IconArrowRight
                    size={24}
                    stroke={1.8}
                    className={styles.arrow}
                    style={{ color: STEPS[index + 1].color }}
                  />
                </Box>
              )}
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
