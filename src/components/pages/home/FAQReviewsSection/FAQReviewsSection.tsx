"use client"

import styles from "./FAQReviewsSection.module.css"
import { Container, Grid } from "@mantine/core"
import FAQ from "@/components/pages/home/FAQ/FAQ"
import UserReviews from "@/components/pages/home/UserReviews/UserReviews"

export default function FAQReviewsSection() {
  return (
    <Container
      component="section"
      id="faq-reviews"
      size="xl"
      py={{ base: 48, md: 72 }}
      px={{ base: 16, md: 40 }}
      className={styles.section}
    >
      <Grid gap={{ base: 24, md: 32 }} align="stretch">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <FAQ />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <UserReviews />
        </Grid.Col>
      </Grid>
    </Container>
  )
}
