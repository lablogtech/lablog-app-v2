"use client"

import type { CSSProperties } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Accordion,
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core"
import {
  IconArrowLeft,
  IconCalendarEvent,
  IconChevronDown,
  IconCircleCheck,
  IconCircleX,
  IconClock,
  IconLock,
  IconMail,
  IconPhone,
  IconShieldLock,
} from "@tabler/icons-react"
import type { DetailFaqItem, TestPageContent } from "./types"
import styles from "./TestDetailPage.module.css"
import Heading from "@/components/shared/heading/Heading"
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
import FeatureHighlightsGrid, {
  type FeatureHighlightItem,
} from "@/components/shared/feature-highlights/FeatureHighlightsGrid"

type TestDetailPageProps = {
  content: TestPageContent
}

function splitQuestions(items: DetailFaqItem[]) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)]
}

export default function TestDetailPage({ content }: TestDetailPageProps) {
  const faqColumns = splitQuestions(content.faq.items)
  const processSteps: HowItWorksStep[] = content.process.steps.map((step, index) => ({
    number: index + 1,
    title: step.title,
    description: step.description,
    icon: step.icon,
    color: index % 2 === 0 ? "#067BF7" : "#02B992",
  }))
  const heroFeatures: FeatureHighlightItem[] = content.hero.features.map((item) => ({
    label: item.label,
    subLabel: item.subLabel,
    Icon: (() => item.icon) as FeatureHighlightItem["Icon"],
  }))
  const themeVars = {
    "--detail-accent": content.theme.accent,
    "--detail-accent-soft": content.theme.accentSoft,
    "--detail-accent-border": content.theme.accentBorder,
    "--detail-accent-strong": content.theme.accentStrong,
    "--detail-cta-bg": content.theme.ctaBackground,
    "--detail-cta-button": content.theme.ctaButton,
  } as CSSProperties

  return (
    <Box className={`pageSurface ${styles.page}`} style={themeVars}>
      <Box className={styles.main}>
        <Container size="xl">
          <Anchor component={Link} href={content.backHref} underline="never" className={styles.backLink}>
            <IconArrowLeft size={16} stroke={2.2} aria-hidden />
            <Text component="span">{content.backLabel}</Text>
          </Anchor>

          <Box component="section" className={styles.heroSection}>
            <Grid gap={{ base: 28, lg: 40 }} align="stretch">
              <Grid.Col span={{ base: 12, lg: 6 }} className={styles.header}>
                <Heading
                  order={1}
                  eyebrow={content.hero.eyebrow}
                  title={content.hero.title}
                  subtitle={content.hero.lead}
                  description={content.hero.description}
                  classNames={{
                    eyebrow: styles.eyebrow,
                    title: styles.heroTitle,
                    subtitle: styles.heroLead,
                    description: styles.heroDescription,
                  }}
                />

                <FeatureHighlightsGrid
                  items={heroFeatures}
                  cols={{ base: 2, sm: 3, lg: 5 }}
                  spacing={{ base: 10, md: 14 }}
                  mt={26}
                  iconSize={30}
                  iconStroke={1.8}
                  themeIconSize={58}
                  colors={{
                    circleBackground: content.theme.accentSoft,
                    circleIcon: content.theme.accent,
                    label: "#183469",
                    subLabel: "#183469",
                  }}
                />

                <Paper radius="xl" p="md" className={styles.heroNote} mt={20}>
                  <Group align="flex-start" wrap="nowrap">
                    <ThemeIcon size={42} radius="xl" variant="light" className={styles.heroNoteIcon}>
                      <IconShieldLock size={22} stroke={1.9} aria-hidden />
                    </ThemeIcon>
                    <Text>{content.hero.note}</Text>
                  </Group>
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 6 }}>
                <Box className={styles.heroVisual}>
                  <Box className={styles.backgroundImage} aria-hidden="true">
                    <Image
                      src={content.hero.imageSrc}
                      alt={content.hero.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 992px) 100vw, 50vw"
                      className={styles.backgroundImageElement}
                    />
                    <Box className={styles.heroGlow} aria-hidden />
                  </Box>
                  <Paper className={styles.floatingCard} p="lg" radius="xl">
                    <Stack gap="sm">
                      {content.hero.floatingCard.eyebrow ? (
                        <Text className={styles.panelEyebrow}>{content.hero.floatingCard.eyebrow}</Text>
                      ) : null}
                      <Title order={3} className={styles.floatingCardTitle}>
                        {content.hero.floatingCard.title}
                      </Title>
                      {content.hero.floatingCard.description ? (
                        <Text className={styles.floatingCardText}>{content.hero.floatingCard.description}</Text>
                      ) : null}
                      <Stack gap={8}>
                        {content.hero.floatingCard.items.map((item) => (
                          <Group key={item} wrap="nowrap" align="flex-start" className={styles.panelItem}>
                            <IconCircleCheck size={18} stroke={2.1} color={content.theme.accent} aria-hidden />
                            <Text>{item}</Text>
                          </Group>
                        ))}
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          <Box component="section" className={styles.processSection}>
            <HowItWorksSteps
              title={content.process.title}
              subtitle={content.process.subtitle}
              steps={processSteps}
              eyebrow={content.process.eyebrow}
            />
          </Box>

          <Box component="section" className={styles.stripSection}>
            <Paper radius="xl" className={styles.stripWrapper}>
              <Heading
                order={3}
                eyebrow={content.strip.eyebrow}
                title={content.strip.title}
                classNames={{
                  eyebrow: styles.sectionEyebrow,
                  title: styles.sectionTitle,
                }}
              />

              <SimpleGrid cols={content.strip.cols} spacing="lg" mt={24}>
                {content.strip.items.map((item) => (
                  <Paper key={item.title} radius="xl" className={styles.stripCard}>
                    <ThemeIcon size={68} radius="xl" variant="light" className={styles.stripIcon}>
                      {item.icon}
                    </ThemeIcon>
                    <Title order={4} className={styles.stripTitle}>
                      {item.title}
                    </Title>
                    {item.description ? <Text className={styles.stripDescription}>{item.description}</Text> : null}
                  </Paper>
                ))}
              </SimpleGrid>

              {content.strip.footerNote ? (
                <Group justify="center" mt={18} className={styles.stripFooter}>
                  <IconLock size={18} stroke={1.8} aria-hidden color={content.theme.accent} />
                  <Text>{content.strip.footerNote}</Text>
                </Group>
              ) : null}
            </Paper>
          </Box>

          <Box component="section" className={styles.turnaroundSection}>
            <Grid gap="xl" align="stretch">
              <Grid.Col span={{ base: 12, md: 5 }}>
                <Paper className={styles.turnaroundVisual} radius="xl">
                  <Stack justify="space-between" h="100%">
                    <ThemeIcon size={94} radius="xl" variant="light" className={styles.turnaroundIcon}>
                      <IconCalendarEvent size={50} stroke={1.6} aria-hidden />
                    </ThemeIcon>
                    <Box>
                      <Title order={3} className={styles.turnaroundVisualTitle}>
                        {content.turnaround.visualTitle}
                      </Title>
                      <Text className={styles.turnaroundText} mt={10}>
                        {content.turnaround.visualBody}
                      </Text>
                    </Box>
                  </Stack>
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 7 }}>
                <Stack gap="lg" h="100%" justify="center">
                  <Box>
                    <Text className={styles.eyebrow}>{content.turnaround.eyebrow}</Text>
                    <Title order={2} className={styles.resultsTitle}>
                      {content.turnaround.title}
                    </Title>
                    <Text className={styles.turnaroundText} mt={12}>
                      {content.turnaround.description}
                    </Text>
                  </Box>

                  <Paper radius="xl" p="lg" className={styles.turnaroundNote}>
                    <Group wrap="nowrap" align="flex-start">
                      <ThemeIcon size={42} radius="xl" variant="light" className={styles.turnaroundIcon}>
                        <IconClock size={22} stroke={1.8} aria-hidden />
                      </ThemeIcon>
                      <Box>
                        <Title order={4} className={styles.turnaroundNoteTitle}>
                          {content.turnaround.noteTitle}
                        </Title>
                        <Text className={styles.turnaroundText} mt={6}>
                          {content.turnaround.noteBody}
                        </Text>
                      </Box>
                    </Group>
                  </Paper>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>

          <Box component="section" className={styles.resultsSection}>
            <Box className={styles.resultsSectionHeader}>
              <Heading
                order={2}
                eyebrow={content.results.eyebrow}
                title={content.results.title}
                subtitle={content.results.description}
                classNames={{
                  eyebrow: styles.sectionEyebrow,
                  title: styles.sectionTitle,
                  subtitle: styles.sectionSubtitle,
                }}
              />
            </Box>

            <Grid gap="xl" align="stretch">
              <Grid.Col span={{ base: 12, lg: 7 }}>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                  <Paper radius="xl" className={styles.resultCard}>
                    <ThemeIcon size={70} radius="xl" variant="light" className={styles.resultIconPositive}>
                      <IconCircleCheck size={36} stroke={1.8} aria-hidden />
                    </ThemeIcon>
                    <Text className={styles.resultLabelPositive}>Positive Result</Text>
                    <Title order={4} className={styles.resultCardTitle}>
                      {content.results.positive.title}
                    </Title>
                    <Text className={styles.faqAnswer}>{content.results.positive.description}</Text>
                  </Paper>

                  <Paper radius="xl" className={styles.resultCard}>
                    <ThemeIcon size={70} radius="xl" variant="light" className={styles.resultIconNegative}>
                      <IconCircleX size={36} stroke={1.8} aria-hidden />
                    </ThemeIcon>
                    <Text className={styles.resultLabelNegative}>Negative Result</Text>
                    <Title order={4} className={styles.resultCardTitle}>
                      {content.results.negative.title}
                    </Title>
                    <Text className={styles.faqAnswer}>{content.results.negative.description}</Text>
                  </Paper>
                </SimpleGrid>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Paper radius="xl" className={styles.resultsSideCard}>
                  {content.results.sidePanel.eyebrow ? (
                    <Text className={styles.panelEyebrow}>{content.results.sidePanel.eyebrow}</Text>
                  ) : null}
                  <Title order={3} className={styles.panelTitle}>
                    {content.results.sidePanel.title}
                  </Title>
                  {content.results.sidePanel.description ? (
                    <Text className={styles.turnaroundText} mt={10}>
                      {content.results.sidePanel.description}
                    </Text>
                  ) : null}

                  <Stack gap={10} mt={16}>
                    {content.results.sidePanel.items.map((item) => (
                      <Group key={item} wrap="nowrap" align="flex-start" className={styles.panelItem}>
                        <IconCircleCheck size={18} stroke={2.1} color={content.theme.accent} aria-hidden />
                        <Text>{item}</Text>
                      </Group>
                    ))}
                  </Stack>

                  {content.results.sidePanel.note ? (
                    <Text mt={14} className={styles.panelNote}>
                      {content.results.sidePanel.note}
                    </Text>
                  ) : null}
                </Paper>
              </Grid.Col>
            </Grid>
          </Box>

          <Box component="section" className={styles.trustSection}>
            <Grid gap="xl" align="stretch">
              <Grid.Col span={{ base: 12, lg: 5 }}>
                <Paper radius="xl" className={styles.trustCard}>
                  {content.trust.media ? (
                    <Box className={styles.trustImageWrap}>
                      <Image
                        src={content.trust.media.src}
                        alt={content.trust.media.alt}
                        fill
                        sizes="(max-width: 992px) 100vw, 42vw"
                        className={styles.trustImage}
                        style={{ objectPosition: content.trust.media.objectPosition ?? "center center" }}
                      />
                    </Box>
                  ) : null}

                  <Text className={styles.eyebrow}>{content.trust.eyebrow}</Text>
                  <Title order={2} className={styles.trustTitle}>
                    {content.trust.title}
                  </Title>
                  <Text className={styles.trustDescription} mt={10}>
                    {content.trust.description}
                  </Text>

                  <Stack gap={10} mt={18}>
                    {content.trust.bullets.map((item) => (
                      <Group key={item} wrap="nowrap" align="flex-start" className={styles.trustBullet}>
                        <IconCircleCheck size={18} stroke={2.1} className={styles.trustBulletIcon} aria-hidden />
                        <Text>{item}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 3 }}>
                <Paper radius="xl" className={styles.badgeCard}>
                  <Stack justify="center" align="center" h="100%" gap="md">
                    <Box className={styles.badgeVisual}>{content.trust.badgeVisual}</Box>
                    <Title order={3} className={styles.badgeTitle}>
                      {content.trust.badgeTitle}
                    </Title>
                    <Text className={styles.badgeSubtitle}>{content.trust.badgeSubtitle}</Text>
                  </Stack>
                </Paper>
              </Grid.Col>

              <Grid.Col span={{ base: 12, lg: 4 }}>
                <Paper radius="xl" className={styles.trustCard}>
                  <Title order={3} className={styles.panelTitle}>
                    {content.trust.sideTitle}
                  </Title>

                  {content.trust.sideDescription ? (
                    <Text className={styles.trustSideText} mt={12}>
                      {content.trust.sideDescription}
                    </Text>
                  ) : null}

                  {content.trust.sideItems?.length ? (
                    <Stack gap={10} mt={16}>
                      {content.trust.sideItems.map((item) => (
                        <Group key={item} wrap="nowrap" align="flex-start" className={styles.trustSideItem}>
                          <IconCircleCheck size={18} stroke={2.1} className={styles.trustSideIcon} aria-hidden />
                          <Text>{item}</Text>
                        </Group>
                      ))}
                    </Stack>
                  ) : null}
                </Paper>
              </Grid.Col>
            </Grid>
          </Box>

          <Box component="section" className={styles.faqSection}>
            <Heading
              order={2}
              title={content.faq.title}
              classNames={{
                title: styles.sectionTitle,
              }}
            />

            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt={24}>
              {faqColumns.map((questions, index) => (
                <Box key={index} className={styles.faqColumn}>
                  <Accordion
                    variant="separated"
                    radius="xl"
                    chevron={<IconChevronDown size={16} stroke={2.2} />}
                    classNames={{
                      control: styles.faqControl,
                      chevron: styles.faqChevron,
                      panel: styles.faqPanel,
                    }}
                  >
                    {questions.map((item) => (
                      <Accordion.Item key={item.question} value={item.question}>
                        <Accordion.Control>{item.question}</Accordion.Control>
                        <Accordion.Panel>{item.answer}</Accordion.Panel>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Paper radius="xl" className={styles.ctaBand}>
            <Group justify="space-between" align="center" gap="lg">
              <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={48} radius="xl" variant="light" className={styles.ctaIcon}>
                  <IconPhone size={24} stroke={1.8} aria-hidden />
                </ThemeIcon>
                <Box>
                  <Title order={3} className={styles.ctaTitle}>
                    {content.cta.title}
                  </Title>
                  <Text className={styles.ctaText} mt={6}>
                    {content.cta.description}
                  </Text>
                </Box>
              </Group>

              <Stack gap={8} align="flex-end">
                <Button component="a" href={`mailto:${content.cta.email}`} radius="xl" className={styles.ctaButton}>
                  {content.cta.buttonLabel}
                </Button>
                <Group gap={8} className={styles.ctaMeta} wrap="nowrap">
                  <IconMail size={16} stroke={1.9} aria-hidden />
                  <Text size="sm">{content.cta.email}</Text>
                </Group>
              </Stack>
            </Group>
          </Paper>
        </Container>
      </Box>
    </Box>
  )
}
