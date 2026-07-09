"use client"

import Image from "next/image"
import styles from "./AboutUsPage.module.css"
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconCheck,
  IconDna2,
  IconFlask2,
  IconHeartHandshake,
  IconHeartRateMonitor,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react"

const HERO_POINTS = [
  { label: "Trusted by Families", icon: IconUsers },
  { label: "Advanced Genetic Technology", icon: IconDna2 },
  { label: "Secure & Confidential", icon: IconShieldCheck },
  { label: "Prevention First", icon: IconHeartHandshake },
]

const SERVICE_ITEMS = [
  { label: "Paternity DNA Testing", icon: IconUsers },
  { label: "Prenatal & Pregnancy Testing", icon: IconHeartRateMonitor },
  { label: "Carrier & Newborn Genetic Screening", icon: IconFlask2 },
  { label: "Cancer Screening", icon: IconShieldCheck },
  { label: "DNA Blueprint & Wellness", icon: IconDna2 },
]

const PARTNERS = [
  {
    title: "BGI Genomics",
    description:
      "One of the world's leading genomics organizations, supporting reproductive medicine, oncology, and precision health.",
    tags: ["ISO 9001", "CAP Accredited", "CLIA Certified"],
  },
  {
    title: "Eurofins",
    description:
      "Global laboratory network focused on high-quality testing, reliability, and strict quality assurance standards.",
    tags: ["Global Network", "Quality First", "Trusted Partner"],
  },
]

const FOUNDERS = [
  {
    name: "Hiroka",
    role: "Co-Founder & CEO",
    description:
      "Leads strategy, operations, and patient-first service initiatives to make preventive healthcare easier to access.",
  },
  {
    name: "Jonas Hidalgo",
    role: "Co-Founder & Business Development",
    description:
      "Builds partnerships and growth initiatives to bring modern genetic solutions to more Filipino families.",
  },
  {
    name: "Allan Henry Nadong",
    role: "Co-Founder & Head of Operations",
    description: "Oversees lab workflows, quality systems, and clinical coordination for consistent patient support.",
  },
]

const VALUE_POINTS = [
  {
    title: "Access To Advanced Technology",
    description: "We use world-class genetics and laboratory methods from globally recognized partners.",
    icon: IconDna2,
  },
  {
    title: "Patient-Centered Care",
    description: "Every decision we make is guided by what is practical, clear, and useful for our patients.",
    icon: IconHeartHandshake,
  },
  {
    title: "Nationwide Accessibility",
    description: "Collection centers and partner clinics make quality testing more accessible across the Philippines.",
    icon: IconMapPin,
  },
  {
    title: "Confidentiality You Can Trust",
    description: "Your personal and genetic information is handled with strict privacy and security protocols.",
    icon: IconShieldCheck,
  },
]

export default function AboutUsPage() {
  return (
    <Box className={`pageSurface ${styles.page}`}>
      <Box className={styles.heroSection} component="section">
        <Container size="xl">
          <Grid align="center" gap={{ base: "lg", md: 40 }}>
            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Text className={styles.eyebrow}>About Lablog</Text>
              <Title order={1} className={styles.heroTitle}>
                Making Preventive Healthcare More Accessible Through Genetics, Technology, And Early Detection
              </Title>
              <Text className={styles.heroDescription}>
                Lablog is a healthcare technology company helping Filipino families and businesses access modern DNA
                testing and preventive screening solutions. We combine advanced laboratory partnerships with a
                patient-first approach, making better health decisions easier today and sustainable for tomorrow.
              </Text>
              <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="sm" mt="xl">
                {HERO_POINTS.map((point) => {
                  const Icon = point.icon
                  return (
                    <Paper key={point.label} className={styles.heroPoint}>
                      <ThemeIcon radius="xl" size={34} variant="light" className={styles.pointIcon}>
                        <Icon size={18} stroke={2} />
                      </ThemeIcon>
                      <Text>{point.label}</Text>
                    </Paper>
                  )
                })}
              </SimpleGrid>
            </Grid.Col>

            <Grid.Col span={{ base: 12, lg: 6 }}>
              <Box className={styles.heroVisual}>
                <Image
                  src="/pages/About us.png"
                  alt="About Us"
                  fill
                  priority
                  className={styles.heroImage}
                  sizes="50vw"
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      <Box className={styles.servicesStrip} component="section">
        <Container size="xl">
          <Group className={styles.servicesGroup} wrap="wrap" gap="sm" justify="space-between">
            {SERVICE_ITEMS.map((service) => {
              const Icon = service.icon
              return (
                <Paper key={service.label} className={styles.servicePill}>
                  <Icon size={17} stroke={2} />
                  <Text>{service.label}</Text>
                </Paper>
              )
            })}
          </Group>
        </Container>
      </Box>

      <Box className={styles.section} component="section">
        <Container size="xl">
          <Stack gap="xs" className={styles.centerHeading}>
            <Title order={2} className={styles.sectionTitle}>
              Our Global Partners
            </Title>
            <Text className={styles.sectionDescription}>
              We collaborate with internationally recognized organizations to deliver dependable testing quality.
            </Text>
          </Stack>

          <Grid mt="xl" gap="lg">
            {PARTNERS.map((partner) => (
              <Grid.Col key={partner.title} span={{ base: 12, md: 6 }}>
                <Card className={styles.partnerCard} radius="lg" withBorder>
                  <Title order={3} className={styles.partnerTitle}>
                    {partner.title}
                  </Title>
                  <Text className={styles.partnerDescription}>{partner.description}</Text>
                  <Group gap="xs" mt="md" wrap="wrap">
                    {partner.tags.map((tag) => (
                      <Paper key={tag} className={styles.tag}>
                        <IconCheck size={14} stroke={2.3} />
                        <Text>{tag}</Text>
                      </Paper>
                    ))}
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box className={`${styles.section} ${styles.foundersSection}`} component="section">
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Meet Our Founders
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mt="xl">
            {FOUNDERS.map((founder) => (
              <Card key={founder.name} className={styles.founderCard} radius="lg" withBorder>
                <ThemeIcon size={74} radius="xl" className={styles.founderAvatar}>
                  {founder.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </ThemeIcon>
                <Title order={4} className={styles.founderName}>
                  {founder.name}
                </Title>
                <Text className={styles.founderRole}>{founder.role}</Text>
                <Divider my="sm" />
                <Text className={styles.founderDescription}>{founder.description}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Box className={styles.section} component="section">
        <Container size="xl">
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
            {VALUE_POINTS.map((value) => {
              const Icon = value.icon
              return (
                <Paper key={value.title} className={styles.valueCard}>
                  <ThemeIcon size={42} radius="xl" variant="light" className={styles.valueIcon}>
                    <Icon size={21} stroke={2} />
                  </ThemeIcon>
                  <Text className={styles.valueTitle}>{value.title}</Text>
                  <Text className={styles.valueDescription}>{value.description}</Text>
                </Paper>
              )
            })}
          </SimpleGrid>
        </Container>
      </Box>

      <Box className={styles.contactSection} component="section">
        <Container size="xl">
          <Title order={2} className={styles.sectionTitle} ta="center">
            Contact Us
          </Title>
          <Text className={styles.sectionDescription} ta="center" mt={8}>
            We are here to help. Reach us through your preferred channel.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" mt="xl">
            <Paper className={styles.contactCard}>
              <ThemeIcon className={styles.contactIcon} radius="xl" size={38}>
                <IconMapPin size={20} stroke={2} />
              </ThemeIcon>
              <Text className={styles.contactLabel}>Website</Text>
              <Text className={styles.contactValue}>lablog.tech</Text>
            </Paper>

            <Paper className={styles.contactCard}>
              <ThemeIcon className={styles.contactIcon} radius="xl" size={38}>
                <IconMail size={20} stroke={2} />
              </ThemeIcon>
              <Text className={styles.contactLabel}>Email</Text>
              <Text className={styles.contactValue}>admin@lablog.tech</Text>
            </Paper>

            <Paper className={styles.contactCard}>
              <ThemeIcon className={styles.contactIcon} radius="xl" size={38}>
                <IconPhone size={20} stroke={2} />
              </ThemeIcon>
              <Text className={styles.contactLabel}>Mobile</Text>
              <Text className={styles.contactValue}>0956 064 8809</Text>
            </Paper>

            <Paper className={styles.contactCard}>
              <Group justify="center" gap="xs">
                <ActionIcon
                  component="a"
                  href="https://www.facebook.com/lablog.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="light"
                  className={styles.socialAction}
                >
                  <IconBrandFacebook size={18} stroke={2} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href="https://www.instagram.com/lablog.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="light"
                  className={styles.socialAction}
                >
                  <IconBrandInstagram size={18} stroke={2} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href="https://www.tiktok.com/@lablog.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="light"
                  className={styles.socialAction}
                >
                  <IconBrandTiktok size={18} stroke={2} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  href="https://www.linkedin.com/company/89949335/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  radius="xl"
                  variant="light"
                  className={styles.socialAction}
                >
                  <IconBrandLinkedin size={18} stroke={2} />
                </ActionIcon>
              </Group>
              <Text className={styles.contactLabel}>Connect With Us</Text>
              <Text className={styles.contactValue}>Follow us for updates and health tips.</Text>
            </Paper>
          </SimpleGrid>

          <Group mt="xl" justify="center" gap="md" wrap="wrap">
            <Button
              component="a"
              href="https://www.facebook.com/lablog.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.facebookButton}
              radius="md"
              size="md"
            >
              Message Us On Facebook
            </Button>
            <Button className={styles.whatsAppButton} radius="md" size="md">
              Chat On WhatsApp
            </Button>
            <Button variant="outline" className={styles.callButton} radius="md" size="md">
              Call Us Now
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  )
}
