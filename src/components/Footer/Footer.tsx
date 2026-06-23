"use client"

import styles from "./Footer.module.css"
import { Box, Center, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react"

const QUICK_LINKS = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Collection Centers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
]

const GENETIC_TESTING = [
  { label: "Paternity DNA Testing", href: "#" },
  { label: "Legal DNA Testing", href: "#" },
  { label: "Prenatal Paternity Testing", href: "#" },
  { label: "NIPT Philippines", href: "#" },
  { label: "Halo DNA Testing", href: "#" },
  { label: "Genetic Health Screening", href: "#" },
]

const LABORATORY_TESTS = [
  { label: "Annual Physical Exam", href: "#" },
  { label: "Routine Blood Tests", href: "#" },
  { label: "Executive Checkups", href: "#" },
  { label: "Health Screening Packages", href: "#" },
  { label: "Home Blood Collection", href: "#" },
]

const SOCIAL_LINKS = [
  { icon: IconBrandFacebook, label: "Facebook", href: "#" },
  { icon: IconBrandInstagram, label: "Instagram", href: "#" },
  { icon: IconBrandYoutube, label: "YouTube", href: "#" },
  { icon: IconBrandTiktok, label: "TikTok", href: "#" },
]

const CONTACT_INFO = [
  {
    icon: IconPhone,
    label: "(02) 8633 5555",
    href: "tel:+6328633555",
  },
  {
    icon: IconMail,
    label: "info@lablog.com.ph",
    href: "mailto:info@lablog.com.ph",
  },
  {
    icon: IconMapPin,
    label: "Unit 3A, 2nd Floor, 67 Paseo de Roxas, Makati City, Metro Manila",
  },
  {
    icon: IconClock,
    label: "Mon - Sat: 6:00 AM - 5:00 PM",
  },
]

function FooterLink({ label, href }: { label: string; href?: string }) {
  if (href) {
    return (
      <Text component="a" href={href} className={styles.link}>
        {label}
      </Text>
    )
  }
  return <Text className={styles.staticText}>{label}</Text>
}

export default function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Container size="xl" py={{ base: 48, md: 64 }} px={{ base: 16, md: 40 }}>
        <Grid gap={48} mb={40} className={styles.mainGrid}>
          {/* Left: Logo & Description */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }} className={styles.logoSection}>
            <Stack gap="md">
              <Box className={styles.logo}>
                <Text className={styles.logoText}>LABLOG</Text>
                <Text className={styles.logoSubtext}>Your Partner in Genetic Health</Text>
              </Box>
              <Text className={styles.description}>
                Providing accessible, confidential, and reliable genetic and laboratory testing services in the
                Philippines.
              </Text>
              {/* Social Icons */}
              <Group gap="sm" className={styles.socialGroup}>
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon
                  return (
                    <ThemeIcon
                      key={social.label}
                      size="md"
                      radius="md"
                      variant="light"
                      component="a"
                      className={styles.socialIcon}
                      aria-label={social.label}
                    >
                      <Icon size={18} stroke={2} />
                    </ThemeIcon>
                  )
                })}
              </Group>
            </Stack>
          </Grid.Col>

          {/* Quick Links */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="md">
              <Title order={4} className={styles.columnTitle}>
                Quick Links
              </Title>
              <Stack gap="xs">
                {QUICK_LINKS.map((link) => (
                  <FooterLink key={link.label} label={link.label} href={link.href} />
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Genetic Testing */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="md">
              <Title order={4} className={styles.columnTitle}>
                Genetic Testing
              </Title>
              <Stack gap="xs" style={{ textWrap: "nowrap" }}>
                {GENETIC_TESTING.map((link) => (
                  <FooterLink key={link.label} label={link.label} href={link.href} />
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Laboratory Tests */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="md">
              <Title order={4} className={styles.columnTitle}>
                Laboratory Tests
              </Title>
              <Stack gap="xs">
                {LABORATORY_TESTS.map((link) => (
                  <FooterLink key={link.label} label={link.label} href={link.href} />
                ))}
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Contact Us */}
          <Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
            <Stack gap="md">
              <Title order={4} className={styles.columnTitle}>
                Contact Us
              </Title>
              <Stack gap="md">
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon
                  return (
                    <Group key={info.label} wrap="nowrap" gap="sm" align="flex-start" className={styles.contactItem}>
                      <ThemeIcon size="lg" radius="md" variant="light" className={styles.contactIcon}>
                        <Icon size={18} stroke={2} />
                      </ThemeIcon>
                      <Center mih={32}>
                        {info.href ? (
                          <Text component="a" href={info.href} className={styles.contactLink}>
                            {info.label}
                          </Text>
                        ) : (
                          <Text className={styles.contactText}>{info.label}</Text>
                        )}
                      </Center>
                    </Group>
                  )
                })}
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Divider */}
        <Box className={styles.divider} />

        {/* Copyright */}
        <Text className={styles.copyright}>© {new Date().getFullYear()} LabLog. All rights reserved.</Text>
      </Container>
    </Box>
  )
}
