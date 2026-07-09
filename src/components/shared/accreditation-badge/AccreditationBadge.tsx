"use client"

import Image from "next/image"
import { Box } from "@mantine/core"
import styles from "./AccreditationBadge.module.css"

type AccreditationType = "ISO"

type AccreditationBadgeProps = {
  type: AccreditationType
}

const LOGO_MAP: Record<AccreditationType, { src: string; alt: string }> = {
  ISO: {
    src: "/logos/ISO.png",
    alt: "ISO accreditation logo",
  },
}

export default function AccreditationBadge({ type }: AccreditationBadgeProps) {
  const logo = LOGO_MAP[type]

  return (
    <Box className={styles.logoWrap}>
      <Image src={logo.src} alt={logo.alt} width={300} height={300} sizes="100vw" className={styles.logoImage} />
    </Box>
  )
}
