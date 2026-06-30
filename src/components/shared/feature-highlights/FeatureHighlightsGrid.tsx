"use client"

import type { CSSProperties, ComponentProps, ComponentType } from "react"
import { Box, SimpleGrid, Text, ThemeIcon } from "@mantine/core"
import styles from "./FeatureHighlightsGrid.module.css"

type FeatureIconProps = {
  size?: number
  stroke?: number
  "aria-hidden"?: boolean
}

export type FeatureHighlightItem = {
  label: string
  subLabel?: string
  Icon: ComponentType<FeatureIconProps>
}

type FeatureHighlightsGridProps = {
  items: FeatureHighlightItem[]
  cols: ComponentProps<typeof SimpleGrid>["cols"]
  spacing?: ComponentProps<typeof SimpleGrid>["spacing"]
  mt?: ComponentProps<typeof SimpleGrid>["mt"]
  useThemeIcon?: boolean
  iconSize?: number
  iconStroke?: number
  themeIconSize?: number
  colors?: {
    circleBackground?: string
    circleIcon?: string
    label?: string
    subLabel?: string
  }
  classNames?: {
    item?: string
    icon?: string
    label?: string
    subLabel?: string
  }
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export default function FeatureHighlightsGrid({
  items,
  cols,
  spacing = "sm",
  mt,
  useThemeIcon = true,
  iconSize = 20,
  iconStroke = 2,
  themeIconSize = 42,
  colors,
  classNames,
}: FeatureHighlightsGridProps) {
  const colorVars = {
    "--fh-circle-bg": colors?.circleBackground,
    "--fh-circle-color": colors?.circleIcon,
    "--fh-label-color": colors?.label,
    "--fh-sub-label-color": colors?.subLabel,
  } as CSSProperties

  return (
    <SimpleGrid cols={cols} spacing={spacing} mt={mt} style={colorVars}>
      {items.map((item) => (
        <Box key={`${item.label}-${item.subLabel ?? ""}`} className={joinClasses(styles.item, classNames?.item)}>
          {useThemeIcon ? (
            <ThemeIcon
              size={themeIconSize}
              radius="xl"
              variant="light"
              className={joinClasses(styles.icon, classNames?.icon)}
            >
              <item.Icon size={iconSize} stroke={iconStroke} aria-hidden />
            </ThemeIcon>
          ) : (
            <item.Icon size={iconSize} stroke={iconStroke} aria-hidden />
          )}
          <Text className={joinClasses(styles.label, classNames?.label)}>{item.label}</Text>
          {item.subLabel ? (
            <Text className={joinClasses(styles.subLabel, classNames?.subLabel)}>{item.subLabel}</Text>
          ) : null}
        </Box>
      ))}
    </SimpleGrid>
  )
}
