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
  title?: string
  styledTitle?: string
  highlight?: string
  description?: string
  points?: string[]
  sections?: {
    header: string
    items: string[]
  }[]
  actionLabel?: string
  actionHref?: string
  accentColor?: string
  iconBackground?: string
  cardBackground?: string
  cardBorderColor?: string
  icon: ReactNode
  footerNote?: string
}

export type DetailResultCard = {
  title: string
  description: string
}

export type DetailComparisonCard = {
  label: string
  title: string
  description: string
  accentColor?: string
  icon?: ReactNode
}

export type DetailComparisonSection = {
  eyebrow?: string
  title: string
  description?: string
  cards: DetailComparisonCard[]
  note?: string
}

export type DetailRecommendationMatrixRow = {
  situation: string
  recommendation: string
  recommendationHref?: string
  icon?: ReactNode
  accentColor?: string
}

export type DetailRecommendationMatrix = {
  title: string
  subtitle?: string
  rows: DetailRecommendationMatrixRow[]
  note?: string
  accentColor?: string
  situationLabel?: string
  recommendationLabel?: string
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
    imageMobilePosition?: string
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
    footerIcon?: ReactNode
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
    description?: string
    positive?: DetailResultCard
    negative?: DetailResultCard
    comparison?: DetailComparisonSection
    sidePanel?: DetailInfoPanel
    matrix?: DetailRecommendationMatrix
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