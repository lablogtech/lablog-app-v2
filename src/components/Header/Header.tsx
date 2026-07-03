"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import styles from "./Header.module.css"
import {
  Accordion,
  Anchor,
  Box,
  Burger,
  Container,
  Divider,
  Drawer,
  Group,
  Menu,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconCalendarEvent, IconChevronDown, IconMenu2 } from "@tabler/icons-react"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"

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
  {
    label: "Cancer",
    href: "/cancer",
    dropdown: true,
    items: [
      {
        label: "BRCA Genetic Test Philippines",
        href: "/cancer/brca-genetic-test-philippines",
      },
      {
        label: "HBOC Screening Philippines",
        href: "/cancer/hboc-screening-philippines",
      },
      {
        label: "Comprehensive Hereditary Cancer Screening",
        href: "/cancer/comprehensive-hereditary-cancer-screening-philippines",
      },
      {
        label: "Multi-Cancer Early Detection (MCED)",
        href: "/cancer/multi-cancer-early-detection-mced",
      },
    ],
  },
  { label: "Corporate", href: "/corporate" },
  { label: "Screening", href: "/screening" },
  { label: "PetDNA", href: "/petdna" },
  { label: "KidsDNA", href: "/kidsdna" },
]

export default function Header() {
  const pathname = usePathname()
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false)
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null)

  useEffect(() => {
    closeDrawer()
  }, [pathname, closeDrawer])

  const isPathActive = (href: string) => {
    if (href === "#") {
      return false
    }

    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <Box component="header" className={styles.header}>
      <Container size="xl" className={styles.inner}>
        {/* Logo */}
        <Anchor component={Link} href="/" className={styles.logo} underline="never">
          <Image src="/lablog-nav.png" alt="LABLOG" width={280} height={80} priority />
        </Anchor>

        {/* Nav */}
        <Group visibleFrom="md" component="nav" align="flex-end" className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = isPathActive(item.href)

            return (
              <Box key={item.label} className={styles.navItem}>
                {item.items ? (
                  <Menu
                    trigger="hover"
                    openDelay={70}
                    closeDelay={120}
                    withArrow
                    position="bottom-start"
                    offset={10}
                    shadow="lg"
                    classNames={{ dropdown: styles.dropdown }}
                    onChange={(opened) => setOpenDesktopMenu(opened ? item.label : null)}
                  >
                    <Menu.Target>
                      <Anchor
                        component={Link}
                        href={item.href}
                        underline="never"
                        aria-current={isActive ? "page" : undefined}
                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""} ${openDesktopMenu === item.label ? styles.navLinkOpen : ""}`}
                        size="sm"
                      >
                        {item.label}
                        <IconChevronDown className={styles.chevron} size={20} stroke={1} aria-hidden />
                      </Anchor>
                    </Menu.Target>

                    <Menu.Dropdown>
                      {item.items.map((dropdownItem) => (
                        <Menu.Item
                          key={dropdownItem.label}
                          component={Link}
                          href={dropdownItem.href}
                          className={`${styles.dropdownItem} ${isPathActive(dropdownItem.href) ? styles.dropdownItemActive : ""}`}
                        >
                          {dropdownItem.label}
                        </Menu.Item>
                      ))}
                    </Menu.Dropdown>
                  </Menu>
                ) : (
                  <Anchor
                    component={Link}
                    href={item.href}
                    underline="never"
                    aria-current={isActive ? "page" : undefined}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    size="sm"
                  >
                    {item.label}
                  </Anchor>
                )}
              </Box>
            )
          })}
        </Group>

        {/* CTA */}
        <MessengerButton
          message="Hi Lablog team, I would like to book a test."
          leftSection={<IconCalendarEvent className={styles.ctaIcon} stroke={2} aria-hidden />}
          className={styles.cta}
          variant="filled"
          tt="uppercase"
          radius="sm"
        >
          Book a Test
        </MessengerButton>

        <Burger
          opened={drawerOpened}
          onClick={drawerOpened ? closeDrawer : openDrawer}
          className={styles.mobileMenuButton}
          aria-label="Open navigation menu"
          color="#0f377b"
          size="sm"
        />
      </Container>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="right"
        size="86%"
        title={
          <Group gap={8} align="center" className={styles.drawerTitleWrap}>
            <IconMenu2 size={18} stroke={1.9} aria-hidden />
            <Text className={styles.drawerTitle}>Menu</Text>
          </Group>
        }
        classNames={{
          content: styles.drawerContent,
          header: styles.drawerHeader,
          body: styles.drawerBody,
          close: styles.drawerClose,
          title: styles.drawerTitleSlot,
        }}
        zIndex={99999}
      >
        <ScrollArea h="calc(100dvh - 88px)" type="scroll" scrollbarSize={5}>
          <Stack gap="xs" className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => {
              const itemActive = isPathActive(item.href)

              if (!item.items) {
                return (
                  <Anchor
                    key={item.label}
                    component={Link}
                    href={item.href}
                    underline="never"
                    aria-current={itemActive ? "page" : undefined}
                    className={`${styles.mobileNavLink} ${itemActive ? styles.mobileNavLinkActive : ""}`}
                  >
                    {item.label}
                  </Anchor>
                )
              }

              return (
                <Accordion key={item.label} variant="separated" radius="md" className={styles.mobileAccordion}>
                  <Accordion.Item value={item.label} className={styles.mobileAccordionItem}>
                    <Accordion.Control className={styles.mobileAccordionControl}>
                      <Group justify="space-between" wrap="nowrap" gap={8}>
                        <Anchor
                          component={Link}
                          href={item.href}
                          underline="never"
                          aria-current={itemActive ? "page" : undefined}
                          className={`${styles.mobileAccordionTitle} ${itemActive ? styles.mobileAccordionTitleActive : ""}`}
                        >
                          {item.label}
                        </Anchor>
                      </Group>
                    </Accordion.Control>
                    <Accordion.Panel className={styles.mobileAccordionPanel}>
                      <Stack gap={4}>
                        {item.items.map((dropdownItem) => {
                          const dropdownActive = isPathActive(dropdownItem.href)

                          return (
                            <Anchor
                              key={dropdownItem.label}
                              component={Link}
                              href={dropdownItem.href}
                              underline="never"
                              aria-current={dropdownActive ? "page" : undefined}
                              className={`${styles.mobileSubLink} ${dropdownActive ? styles.mobileSubLinkActive : ""}`}
                            >
                              {dropdownItem.label}
                            </Anchor>
                          )
                        })}
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              )
            })}

            <Divider my="xs" color="#dbe5f6" />

            <MessengerButton
              message="Hi Lablog team, I would like to book a test."
              leftSection={<IconCalendarEvent className={styles.ctaIcon} stroke={2} aria-hidden />}
              className={styles.mobileCta}
              variant="filled"
              radius="md"
            >
              Book a Test
            </MessengerButton>
          </Stack>
        </ScrollArea>
      </Drawer>
    </Box>
  )
}
