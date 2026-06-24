"use client"

import styles from "./UserReviews.module.css"
import { Avatar, Box, Grid, Group, Text, Title } from "@mantine/core"
import { IconStarFilled } from "@tabler/icons-react"

type Review = {
  name: string
  quote: string
  avatar: string
}

const REVIEWS: Review[] = [
  {
    name: "Christian R.",
    quote:
      "Professional service and quick results. The staff were very accommodating and explained everything clearly.",
    avatar: "CR",
  },
  {
    name: "Maria L.",
    quote: "The home collection option was very convenient. Results came out faster than expected.",
    avatar: "ML",
  },
  {
    name: "James T.",
    quote: "Highly recommended! The process was easy and the team was very professional from start to finish.",
    avatar: "JT",
  },
]

function Rating() {
  return (
    <Group gap={4} className={styles.rating} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <IconStarFilled key={index} size={16} className={styles.star} aria-hidden />
      ))}
    </Group>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Box className={styles.reviewCard}>
      <Rating />
      <Text className={styles.quote}>“{review.quote}”</Text>
      <Group gap="sm" align="center" className={styles.authorRow}>
        <Avatar radius="xl" size={32} className={styles.avatar}>
          {review.avatar}
        </Avatar>
        <Text className={styles.author}>- {review.name}</Text>
      </Group>
    </Box>
  )
}

export default function UserReviews() {
  return (
    <Box className={styles.card}>
      <Title order={3} className={styles.title}>
        What Our Clients Say
      </Title>

      <Grid gap={{ base: 20, md: 28 }} align="stretch">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ReviewCard review={REVIEWS[0]} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ReviewCard review={REVIEWS[1]} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <ReviewCard review={REVIEWS[2]} />
        </Grid.Col>
      </Grid>
    </Box>
  )
}
