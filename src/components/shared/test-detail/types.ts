import type { ReactNode } from "react"

export type ResponsiveCols = Partial<Record<"base" | "xs" | "sm" | "md" | "lg" | "xl", number>>

export type DetailPageTheme = {
  accent: string
  accentSoft: string
  accentBorder: string
  accentStrong: string
  surface: string
  ctaBackground: string
  ctaButton: string
}

export type DetailFeature = {
  label: string
  subLabel?: string
  icon: ReactNode
}

export type DetailStep = {
  title: string
  description: string
  icon: ReactNode
}

export type DetailStripItem = {
  title: string
  description?: string
  icon: ReactNode
}

export type DetailResultCard = {
  title: string
  description: string
}

export type DetailInfoPanel = {
  eyebrow?: string
  title: string
  description?: string
  items: string[]
  note?: string
}

export type DetailFaqItem = {
  question: string
  answer: string
}

export type DetailTrustSection = {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  media?: {
    src: string
    alt: string
    objectPosition?: string
  }
  badgeTitle: string
  badgeSubtitle: string
  badgeVisual: ReactNode
  sideTitle: string
  sideDescription?: string
  sideItems?: string[]
}

export type TestPageContent = {
  backLabel: string
  backHref: string
  theme: DetailPageTheme
  hero: {
    eyebrow: string
    title: string
    lead: string
    description: string
    features: DetailFeature[]
    note: string
    imageSrc: string
    imageAlt: string
    imagePosition?: string
    floatingCard: DetailInfoPanel
  }
  process: {
    eyebrow: string
    title: string
    subtitle: string
    steps: DetailStep[]
  }
  strip: {
    eyebrow?: string
    title: string
    items: DetailStripItem[]
    cols: ResponsiveCols
    footerNote?: string
  }
  turnaround: {
    eyebrow: string
    title: string
    description: string
    visualTitle: string
    visualBody: string
    noteTitle: string
    noteBody: string
  }
  results: {
    eyebrow: string
    title: string
    description: string
    positive: DetailResultCard
    negative: DetailResultCard
    sidePanel: DetailInfoPanel
  }
  trust: DetailTrustSection
  faq: {
    title: string
    items: DetailFaqItem[]
  }
  cta: {
    title: string
    description: string
    buttonLabel: string
    email: string
  }
}

export type PaternityTestPageContent = TestPageContent