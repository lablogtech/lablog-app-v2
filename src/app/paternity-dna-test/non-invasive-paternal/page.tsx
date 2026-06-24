"use client"

import Link from "next/link"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { Anchor, Box, Button, Container, Group, Text, ThemeIcon, Title } from "@mantine/core"
import { IconArrowLeft, IconCircleCheck, IconVenus } from "@tabler/icons-react"
import styles from "../page.module.css"

const HIGHLIGHTS = [
  "Safe blood-based prenatal testing",
  "Available from 10 weeks onwards",
  "Confidential and non-invasive process",
]

export default function NonInvasivePaternalPage() {
  return (
    <Box className={styles.page}>
      <Header />
      <Box component="main" py={56}>
        <Container size="xl">
          <Anchor component={Link} href="/paternity-dna-test" underline="never" c="blue.7" fw={600}>
            <Group gap={6} wrap="nowrap">
              <IconArrowLeft size={16} stroke={2.2} aria-hidden />
              <Text component="span">Back to Paternity DNA Test</Text>
            </Group>
          </Anchor>

          <Box
            mt={20}
            p={{ base: 20, md: 30 }}
            style={{ border: "1px solid #ebe2fb", borderRadius: 16, background: "#fdfbff" }}
          >
            <ThemeIcon size={64} radius={999} variant="light" color="grape" mb={12}>
              <IconVenus size={34} stroke={1.6} aria-hidden />
            </ThemeIcon>
            <Title order={1} c="#112f6d" mb={8}>
              Non-Invasive Paternal Test
            </Title>
            <Text c="#37517d" mb={16}>
              This page is prepared for your upcoming full content pass. Navigation and routing are now in place.
            </Text>

            <Box>
              {HIGHLIGHTS.map((item) => (
                <Group key={item} gap={8} wrap="nowrap" mb={8}>
                  <IconCircleCheck size={18} color="#8f58e6" aria-hidden />
                  <Text>{item}</Text>
                </Group>
              ))}
            </Box>

            <Button mt={20} component="a" href="#" color="grape" radius="md">
              Book This Test
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}
