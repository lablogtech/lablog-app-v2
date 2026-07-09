"use client"

import Link from "next/link"
import styles from "./Footer.module.css"
import { Box, Center, Container, Grid, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@tabler/icons-react"

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

const PATERNITY_LINKS = [
  { label: "Paternity DNA Test", href: "/paternity-dna-test" },
  { label: "Peace of Mind", href: "/paternity-dna-test/peace-of-mind" },
  { label: "Legal Paternity", href: "/paternity-dna-test/legal-paternity" },
  { label: "Non-Invasive", href: "/paternity-dna-test/non-invasive-paternal" },
  { label: "Family Relationship Testing", href: "/paternity-dna-test/family-relationship-testing" },
]

const PREGNANCY_LINKS = [
  { label: "Pregnancy Overview", href: "/pregnancy" },
  { label: "NIPT Philippines", href: "/pregnancy/nipt-philippines" },
  { label: "Carrier Screening", href: "/pregnancy/carrier-screening-philippines" },
  {
    label: "Newborn Screening",
    href: "/pregnancy/newborn-genetic-screening-philippines",
  },
]

const CANCER_LINKS = [
  { label: "Cancer Overview", href: "/cancer" },
  { label: "BRCA Genetic Test", href: "/cancer/brca-genetic-test-philippines" },
  { label: "HBOC Screening", href: "/cancer/hboc-screening-philippines" },
  {
    label: "Comprehensive Hereditary",
    href: "/cancer/comprehensive-hereditary-cancer-screening-philippines",
  },
]

const OTHER_SERVICES_LINKS = [
  { label: "Corporate", href: "/corporate" },
  { label: "Screening", href: "/screening" },
  { label: "PetDNA", href: "/petdna" },
  { label: "KidsDNA", href: "/kidsdna" },
]

const SOCIAL_LINKS = [
  { icon: IconBrandFacebook, label: "Facebook", href: "https://www.facebook.com/lablog.tech/" },
  { icon: IconBrandInstagram, label: "Instagram", href: "https://www.instagram.com/lablog.tech/" },
  { icon: IconBrandTiktok, label: "TikTok", href: "https://www.tiktok.com/@lablog.tech" },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/89949335/admin/dashboard/",
  },
]

const CONTACT_INFO = [
  {
    icon: IconPhone,
    label: "0956 064 8809",
    href: "tel:+639560648809",
  },
  {
    icon: IconMail,
    label: "admin@lablog.tech",
    href: "mailto:admin@lablog.tech",
  },
  {
    icon: IconMapPin,
    label: "Unit 605, Corporate 101 Building, Mother Ignacia Ave, Diliman, Quezon City, 1103 Metro Manila",
  },
  {
    icon: IconClock,
    label: "Mon - Sat: 8:00 AM - 4:00 PM",
  },
]

function FooterLink({ label, href }: { label: string; href?: string }) {
  if (href && href.startsWith("/")) {
    return (
      <Text component={Link} href={href} className={styles.link}>
        {label}
      </Text>
    )
  }

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
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <ThemeIcon size="md" radius="md" variant="light" className={styles.socialIcon}>
                        <Icon size={18} stroke={2} />
                      </ThemeIcon>
                    </a>
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

          {/* Paternity + Pregnancy */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Title order={4} className={styles.columnTitle}>
                  Paternity
                </Title>
                <Stack gap="xs" style={{ textWrap: "nowrap" }}>
                  {PATERNITY_LINKS.map((link) => (
                    <FooterLink key={link.label} label={link.label} href={link.href} />
                  ))}
                </Stack>
              </Stack>

              <Stack gap="md">
                <Title order={4} className={styles.columnTitle}>
                  Pregnancy
                </Title>
                <Stack gap="xs">
                  {PREGNANCY_LINKS.map((link) => (
                    <FooterLink key={link.label} label={link.label} href={link.href} />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid.Col>

          {/* Cancer + Other Services */}
          <Grid.Col span={{ base: 12, sm: 6, md: 2 }}>
            <Stack gap="xl">
              <Stack gap="md">
                <Title order={4} className={styles.columnTitle}>
                  Cancer
                </Title>
                <Stack gap="xs">
                  {CANCER_LINKS.map((link) => (
                    <FooterLink key={link.label} label={link.label} href={link.href} />
                  ))}
                </Stack>
              </Stack>

              <Stack gap="md">
                <Title order={4} className={styles.columnTitle}>
                  Other Services
                </Title>
                <Stack gap="xs">
                  {OTHER_SERVICES_LINKS.map((link) => (
                    <FooterLink key={link.label} label={link.label} href={link.href} />
                  ))}
                </Stack>
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
