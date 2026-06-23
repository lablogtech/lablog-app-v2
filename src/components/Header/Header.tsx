"use client"

import Image from "next/image"
import styles from "./Header.module.css"
import { Anchor, Box, Button, Container, Group } from "@mantine/core"
import { IconCalendarEvent, IconChevronDown } from "@tabler/icons-react"

const NAV_ITEMS = [
  { label: "Home", href: "#", active: true },
  { label: "Genetic Testing", href: "#", dropdown: true },
  { label: "Laboratory Tests", href: "#", dropdown: true },
  { label: "Collection Centers", href: "#" },
  { label: "Corporate Wellness", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
]

export default function Header() {
  return (
    <Box component="header" className={styles.header}>
      <Container className={styles.inner} fluid>
        {/* Logo */}
        <Anchor href="#" className={styles.logo} underline="never">
          <Image src="/lablog-inline.png" alt="LABLOG" width={280} height={80} priority />
        </Anchor>

        {/* Nav */}
        <Group component="nav" className={styles.nav} aria-label="Main navigation" gap={0}>
          {NAV_ITEMS.map((item) => (
            <Anchor
              key={item.label}
              href={item.href}
              underline="never"
              className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
            >
              {item.label}
              {item.dropdown && <IconChevronDown className={styles.chevron} stroke={1.8} aria-hidden />}
            </Anchor>
          ))}
        </Group>

        {/* CTA */}
        <Button
          leftSection={<IconCalendarEvent className={styles.ctaIcon} stroke={2} aria-hidden />}
          component="a"
          href="#contact"
          className={styles.cta}
          variant="filled"
          radius="md"
        >
          Book a Test
        </Button>
      </Container>
    </Box>
  )
}
