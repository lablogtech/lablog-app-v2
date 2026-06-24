"use client"

import styles from "./FAQ.module.css"
import { Accordion, Box, Text, Title } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons-react"

const FAQ_ITEMS = [
  {
    question: "How accurate is a paternity DNA test?",
    answer:
      "Our paternity DNA tests are highly accurate and are performed using accredited laboratory methods. Results are reviewed by trained professionals before release.",
  },
  {
    question: "When can I do NIPT?",
    answer:
      "NIPT can typically be done starting at 10 weeks of pregnancy. Our team can help determine the best timing based on your needs and physician's recommendation.",
  },
  {
    question: "What's the difference between legal and non-legal DNA testing?",
    answer:
      "Legal DNA testing follows a strict chain-of-custody process and is suitable for court, immigration, and official documentation. Non-legal testing is for personal knowledge only.",
  },
  {
    question: "Is DNA testing confidential?",
    answer:
      "Yes. We handle all samples and results with strict confidentiality and secure data handling protocols from collection to release.",
  },
]

export default function FAQ() {
  return (
    <Box className={styles.card}>
      <Title order={3} className={styles.title}>
        Frequently Asked Questions
      </Title>

      <Accordion
        variant="separated"
        radius="md"
        className={styles.accordion}
        chevron={<IconChevronDown size={16} stroke={2} />}
      >
        {FAQ_ITEMS.map((item) => (
          <Accordion.Item key={item.question} value={item.question}>
            <Accordion.Control className={styles.control}>{item.question}</Accordion.Control>
            <Accordion.Panel className={styles.panel}>{item.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Text component="a" href="#contact" className={styles.moreLink}>
        View all FAQs
      </Text>
    </Box>
  )
}
