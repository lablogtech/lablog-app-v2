import styles from "./HowItWorks.module.css"
import { Box, Badge, Center, Grid, Stack, Text, ThemeIcon, Title } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons-react"

export type HowItWorksStep = {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

type HowItWorksStepsProps = {
  title: string
  subtitle: string
  steps: HowItWorksStep[]
  titleOrder?: 1 | 2 | 3 | 4 | 5 | 6
  normalCaseTitle?: boolean
}

export default function HowItWorksSteps({
  title,
  subtitle,
  steps,
  titleOrder = 2,
  normalCaseTitle = false,
}: HowItWorksStepsProps) {
  return (
    <>
      <Stack gap="lg" align="center" className={styles.headerStack}>
        <Box className={styles.headerBox}>
          <Title order={titleOrder} className={`${styles.title} ${normalCaseTitle ? styles.titleNormalCase : ""}`}>
            {title}
          </Title>
          <Text className={styles.subtitle}>{subtitle}</Text>
        </Box>
      </Stack>

      <Grid gap={{ base: "xl", md: 40 }} align="flex-start" className={styles.stepsGrid}>
        {steps.map((step, index) => (
          <Grid.Col key={step.number} span={{ base: 12, sm: 6, md: 3 }}>
            <Stack align="center" gap="md" className={styles.stepWrapper}>
              <Box className={styles.stepHeader}>
                <ThemeIcon
                  size={56}
                  radius="50%"
                  variant="light"
                  style={{ backgroundColor: `${step.color}18`, color: step.color }}
                  className={styles.stepBadge}
                >
                  {step.icon}
                </ThemeIcon>
              </Box>

              <Stack align="center" gap={6}>
                <Badge color={step.color}>{`Step ${step.number}`}</Badge>
                <Center py="sm" mih={44}>
                  <Title order={4} className={styles.stepTitle}>
                    {step.title}
                  </Title>
                </Center>
                <Text maw={240} className={styles.stepDescription} ta="center">
                  {step.description}
                </Text>
              </Stack>

              {index < steps.length - 1 && (
                <Box className={styles.arrowContainer} aria-hidden="true">
                  <IconArrowRight
                    size={24}
                    stroke={1.8}
                    className={styles.arrow}
                    style={{ color: steps[index + 1].color }}
                  />
                </Box>
              )}
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </>
  )
}
