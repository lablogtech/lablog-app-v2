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
    label: "Paternity",
    href: "/paternity-dna-test",
    dropdown: true,
    items: [
      {
        label: "Peace of mind (Non-Legal)",
        href: "/paternity-dna-test/peace-of-mind",
      },
      {
        label: "Legal",
        href: "/paternity-dna-test/legal-paternity",
      },
      {
        label: "Non-Invasive",
        href: "/paternity-dna-test/non-invasive-paternal",
      },
    ],
  },
  {
    label: "Pregnancy",
    href: "/pregnancy",
    dropdown: true,
    items: [
      {
        label: "NIPT Philippines",
        href: "/pregnancy/nipt-philippines",
      },
      {
        label: "Carrier Screening Philippines",
        href: "/pregnancy/carrier-screening-philippines",
      },
      {
        label: "Newborn Genetic Screening Philippines",
        href: "/pregnancy/newborn-genetic-screening-philippines",
      },
    ],
  },
  { label: "Cancer", href: "#" },
  { label: "Corporate Wellness", href: "#" },
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
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Box key={item.label} className={styles.navItem}>
                <Anchor
                  component={Link}
                  href={item.href}
                  underline="never"
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                >
                  {item.label}
                  {item.dropdown && <IconChevronDown className={styles.chevron} size={20} stroke={1} aria-hidden />}
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
            )
          })}
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
