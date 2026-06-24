"use client"

import styles from "./HowItWorks.module.css"
import { Box, Container } from "@mantine/core"
import { IconCalendarEvent, IconMedicalCross, IconTestPipe, IconFileCheck } from "@tabler/icons-react"
import HowItWorksSteps, { type HowItWorksStep } from "./HowItWorksSteps"

const STEPS: HowItWorksStep[] = [
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
    <Box className={styles.section}>
      <Container component="section" id="how-it-works" size="xl" py={{ base: 48, md: 72 }} px={{ base: 16, md: 40 }}>
        <HowItWorksSteps title="How It Works" subtitle="Simple steps to get your test done." steps={STEPS} />
      </Container>
    </Box>
  )
}
