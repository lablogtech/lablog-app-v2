"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"
import { Anchor, Box, Button, Container, Group } from "@mantine/core"
import { IconCalendarEvent, IconChevronDown } from "@tabler/icons-react"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Paternity DNA Test",
    href: "/paternity-dna-test",
    dropdown: true,
    items: [
      {
        label: "Peace of mind (Non-Legal) Paternity Test",
        href: "/paternity-dna-test/peace-of-mind",
      },
      {
        label: "Legal Paternity Test",
        href: "/paternity-dna-test/legal-paternity",
      },
      {
        label: "Non-Invasive Paternal Test",
        href: "/paternity-dna-test/non-invasive-paternal",
      },
    ],
  },
  { label: "Laboratory Tests", href: "#", dropdown: true },
  { label: "Collection Centers", href: "#" },
  { label: "Corporate Wellness", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
]

export default function Header() {
  const pathname = usePathname()

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
            <Box key={item.label} className={styles.navItem}>
              <Anchor
                component={Link}
                href={item.href}
                underline="never"
                className={`${styles.navLink} ${pathname === item.href ? styles.navLinkActive : ""}`}
              >
                {item.label}
                {item.dropdown && <IconChevronDown className={styles.chevron} stroke={1.8} aria-hidden />}
              </Anchor>

              {item.items && (
                <Box className={styles.dropdown}>
                  {item.items.map((dropdownItem) => (
                    <Anchor
                      key={dropdownItem.label}
                      component={Link}
                      href={dropdownItem.href}
                      underline="never"
                      className={styles.dropdownItem}
                    >
                      {dropdownItem.label}
                    </Anchor>
                  ))}
                </Box>
              )}
            </Box>
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
