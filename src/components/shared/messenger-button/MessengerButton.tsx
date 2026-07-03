"use client"

import type { ReactNode } from "react"
import { Button, type ButtonProps } from "@mantine/core"
import { IconBrandMessenger } from "@tabler/icons-react"

const DEFAULT_PAGE_NAME = "lablog.tech"

type MessengerButtonProps = Omit<ButtonProps, "component" | "href"> & {
  message: string
  pageName?: string
  children: ReactNode
}

export function buildMessengerLink(message: string, pageName = DEFAULT_PAGE_NAME): string {
  const trimmedMessage = message.trim()
  const encodedMessage = encodeURIComponent(trimmedMessage)

  return `https://m.me/${pageName}?ref=${encodedMessage}`
}

export default function MessengerButton({
  message,
  pageName = DEFAULT_PAGE_NAME,
  leftSection,
  children,
  ...buttonProps
}: MessengerButtonProps) {
  return (
    <Button
      component="a"
      href={buildMessengerLink(message, pageName)}
      target="_blank"
      rel="noopener noreferrer"
      leftSection={leftSection ?? <IconBrandMessenger size={18} stroke={2} aria-hidden />}
      {...buttonProps}
    >
      {children}
    </Button>
  )
}
