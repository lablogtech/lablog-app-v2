"use client"

import Link from "next/link"
import styles from "./FAQ.module.css"
import { Box, Text } from "@mantine/core"
import FaqSection from "@/components/shared/faq-section/FaqSection"

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
      <FaqSection items={FAQ_ITEMS} columns={1} />

      <Text component={Link} href="/faq" className={styles.moreLink}>
        View all FAQs
      </Text>
    </Box>
  )
}
