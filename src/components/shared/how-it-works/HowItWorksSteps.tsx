import type { CSSProperties, ReactNode } from "react"
import styles from "./HowItWorks.module.css"
import { Box, Card, SimpleGrid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react"
import Heading from "@/components/shared/heading/Heading"

export type HowItWorksStep = {
  number: number
  title: string
  description: ReactNode
  bulletPoints?: string[]
  icon: React.ReactNode
  color: string
}

type HowItWorksStepsProps = {
  eyebrow?: string
  title: string
  subtitle: string
  steps: HowItWorksStep[]
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6
  normalCaseTitle?: boolean
}

export default function HowItWorksSteps({ eyebrow, title, subtitle, steps, titleOrder = 2 }: HowItWorksStepsProps) {
  return (
    <>
      <Stack gap="lg" align="center" className={styles.headerStack}>
        <Heading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          order={titleOrder}
          classNames={{
            root: styles.sectionHeading,
            title: styles.sectionTitle,
            subtitle: styles.sectionSubtitle,
          }}
        />
      </Stack>

      <SimpleGrid cols={{ base: 1, md: steps.length }} spacing={{ base: "xl", md: 40 }} className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <Card
            shadow="xs"
            p="xl"
            key={step.number}
            className={styles.stepWrapper}
            style={{ "--step-color": step.color } as CSSProperties}
          >
            <Box className={styles.stepIconWrap}>
              <ThemeIcon size={64} radius="50%" variant="light" className={styles.stepBadge}>
                {step.icon}
              </ThemeIcon>
              <span className={styles.stepNumber}>{step.number}</span>
            </Box>

            <Title order={4} className={styles.stepTitle}>
              {step.title}
            </Title>
            <Text className={styles.stepDescription}>{step.description}</Text>

            {step.bulletPoints?.length ? (
              <Box component="ul" className={styles.stepList}>
                {step.bulletPoints.map((point) => (
                  <li key={point} className={styles.stepListItem}>
                    {point}
                  </li>
                ))}
              </Box>
            ) : null}

            {index < steps.length - 1 && (
              <Box className={styles.arrowContainer} aria-hidden="true">
                <IconArrowRight
                  size={20}
                  stroke={2}
                  className={styles.arrow}
                  style={{ color: steps[index + 1].color }}
                />
              </Box>
            )}
          </Card>
        ))}
      </SimpleGrid>
    </>
  )
}
