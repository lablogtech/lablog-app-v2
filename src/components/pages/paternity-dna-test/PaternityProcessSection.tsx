import { Accordion, Box, Container, Grid, Text, ThemeIcon, Title } from "@mantine/core"
import {
  IconCalendarEvent,
  IconCertificate2,
  IconChevronDown,
  IconDna2,
  IconFileCheck,
  IconHome,
  IconMapPin,
  IconShieldLock,
  IconTestPipe,
  IconUsersGroup,
} from "@tabler/icons-react"
import HowItWorksSteps, { type HowItWorksStep } from "@/components/shared/how-it-works/HowItWorksSteps"
import styles from "@/app/paternity-dna-test/page.module.css"

const PROCESS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Contact Our Team",
    description: "Tell us your situation and we will recommend the right paternity DNA test.",
    icon: <IconCalendarEvent size={40} stroke={1.5} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 2,
    title: "DNA Sample Collection",
    description: "Choose from clinic, home service, or partner collection centers.",
    icon: <IconTestPipe size={40} stroke={1.5} aria-hidden />,
    color: "#02B992",
  },
  {
    number: 3,
    title: "Laboratory Analysis",
    description: "Samples are processed using ISO-certified methods and strict QA.",
    icon: <IconDna2 size={40} stroke={1.5} aria-hidden />,
    color: "#067BF7",
  },
  {
    number: 4,
    title: "Receive Results",
    description: "Your report is released securely and explained by our specialists.",
    icon: <IconFileCheck size={40} stroke={1.5} aria-hidden />,
    color: "#02B992",
  },
]

const TRUST_POINTS = [
  {
    title: "Confidential",
    description: "Your privacy is our priority.",
    icon: IconShieldLock,
    iconClassName: styles.processTrustGreen,
  },
  {
    title: "Nationwide Service",
    description: "Collection centers across the Philippines.",
    icon: IconMapPin,
    iconClassName: styles.processTrustBlue,
  },
  {
    title: "Multiple Collection Options",
    description: "Choose what's most convenient for you.",
    icon: IconHome,
    iconClassName: styles.processTrustBlue,
  },
  {
    title: "Participants in Different Locations",
    description: "We can arrange separate collections anywhere in the Philippines.",
    icon: IconUsersGroup,
    iconClassName: styles.processTrustBlue,
  },
  {
    title: "Trusted Accuracy",
    description: "Processed in an ISO-certified partner laboratory.",
    icon: IconCertificate2,
    iconClassName: styles.processTrustBlue,
  },
]

const FAQ_COLUMNS = [
  ["Which DNA test do I need?", "Is the DNA test confidential?", "Can the DNA test be done at home?"],
  ["Can participants be in different locations?", "How accurate are the results?", "How long do results take?"],
]

export default function PaternityProcessSection() {
  return (
    <Box component="section" className={styles.processSection}>
      <Container size="xl">
        <HowItWorksSteps
          title="How Does The Process Work?"
          subtitle="From consultation to release, the process is guided, secure, and straightforward."
          steps={PROCESS_STEPS}
          normalCaseTitle
        />

        <Box className={styles.processSupportSection}>
          <Box className={styles.processTrustGrid}>
            {TRUST_POINTS.map((item) => {
              const Icon = item.icon

              return (
                <Box key={item.title} className={styles.processTrustCard}>
                  <ThemeIcon
                    size={40}
                    radius={999}
                    variant="light"
                    className={`${styles.processTrustIcon} ${item.iconClassName}`}
                  >
                    <Icon size={22} stroke={1.9} aria-hidden />
                  </ThemeIcon>
                  <Box>
                    <Text className={styles.processTrustTitle}>{item.title}</Text>
                    <Text className={styles.processTrustDescription}>{item.description}</Text>
                  </Box>
                </Box>
              )
            })}
          </Box>

          <Title order={3} className={styles.processFaqTitle}>
            Frequently Asked Questions
          </Title>

          <Grid gap={12}>
            {FAQ_COLUMNS.map((column, columnIndex) => (
              <Grid.Col key={columnIndex} span={{ base: 12, md: 6 }}>
                <Accordion
                  variant="separated"
                  radius="md"
                  chevron={<IconChevronDown size={15} stroke={2.2} />}
                  classNames={{
                    item: styles.processFaqItem,
                    control: styles.processFaqControl,
                    panel: styles.processFaqPanel,
                    chevron: styles.processFaqChevron,
                  }}
                >
                  {column.map((question) => (
                    <Accordion.Item value={question} key={question}>
                      <Accordion.Control
                        icon={
                          <ThemeIcon size={18} radius={999} className={styles.processFaqIcon}>
                            ?
                          </ThemeIcon>
                        }
                      >
                        {question}
                      </Accordion.Control>
                      <Accordion.Panel>
                        Our team will walk you through the best option and process details based on your situation.
                      </Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
