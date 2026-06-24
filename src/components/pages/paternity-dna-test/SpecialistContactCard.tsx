import { Anchor, Box, Button, Group, Text, ThemeIcon, Title } from "@mantine/core"
import { IconHeadset, IconPhone } from "@tabler/icons-react"
import styles from "@/app/paternity-dna-test/page.module.css"

export default function SpecialistContactCard() {
  return (
    <Box className={styles.specialistCard}>
      <ThemeIcon size={76} radius={999} variant="light" className={styles.specialistIconWrap}>
        <IconHeadset size={40} stroke={1.7} className={styles.specialistIcon} aria-hidden />
      </ThemeIcon>

      <Title order={3} className={styles.specialistTitle}>
        Talk to Our Specialists
      </Title>

      <Text className={styles.specialistDescription}>
        Our caring team is here to answer your questions and help you choose the most appropriate test for your
        situation.
      </Text>

      <Button className={styles.specialistButton} radius="md" component="a" href="#">
        Contact Us
      </Button>

      <Text className={styles.specialistCallout}>or call us at</Text>

      <Anchor href="tel:+639178175468" underline="never" className={styles.specialistPhoneLink}>
        <Group gap={8} wrap="nowrap">
          <IconPhone size={18} stroke={2.4} aria-hidden />
          <Text component="span" className={styles.specialistPhoneText}>
            +63 917 817 5468
          </Text>
        </Group>
      </Anchor>
    </Box>
  )
}
