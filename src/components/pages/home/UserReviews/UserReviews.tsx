"use client"

import styles from "./UserReviews.module.css"
import { Avatar, Box, Button, Grid, Group, Text, Title } from "@mantine/core"
import { IconExternalLink, IconStarFilled } from "@tabler/icons-react"

type Review = {
  name: string
  quote: string
  avatar: string
}

const ALL_REVIEWS_URL = "https://maps.app.goo.gl/17TrwPbMSdPnFdRm9"

const REVIEWS: Review[] = [
  {
    name: "Arvin Darcen",
    quote:
      "Staff are very accomodating at magagalang makipag usap and if you have any question regards my concern they politely explain to me and sa price super sulit talaga and takenote 7 to 10 working days before result came out for me 4days lng nakuha ko na kagad ang result.over all 101% satisfied client here",
    avatar: "AD",
  },
  {
    name: "azilana Kaye",
    quote:
      "Availed their home service testing and I am very satisfied with the service! The staff were professional, friendly, and very accommodating. The process was smooth, fast, and strictly followed safety protocols. Highly recommended for those who prefer testing at home.",
    avatar: "AK",
  },
  {
    name: "Karl",
    quote:
      "I Availed the Home testing kit. Timely assistance from the staff Via SMS. Everything was handled professionally. Top notch service. highly recommended!",
    avatar: "K",
  },
  {
    name: "ainp",
    quote:
      "The lablog made the whole process easy and stress-free. The staff was friendly and respectful. I'd definitely recommend them to anyone needing DNA testing.",
    avatar: "A",
  },
  {
    name: "Kam Fajardo",
    quote:
      "I did my test with Lablog and I'm very happy with their service. They made me feel comfortable throughout the process and patiently answered all my questions. The team is very approachable and always replies quickly on Messenger. They kept me updated about my sample at every step, and my results even arrived earlier than expected. After doing my research, I also found that they offer the most affordable price in the market while still providing very comprehensive data. Overall, I'm truly satisfied and highly recommend their service!",
    avatar: "KF",
  },
  {
    name: "Joseph Madrid",
    quote:
      "I had a very smooth and professional experience with this DNA testing center Lablog Philippines Inc . The staff were knowledgeable, respectful, and made me feel comfortable throughout the entire process. They explained everything clearly, answered all my questions patiently, and ensured confidentiality at every step. The facility was clean and well-organized, and the results were delivered on time as promised. I truly appreciate their efficiency and professionalism. Highly recommended for anyone needing reliable and accurate DNA testing services!",
    avatar: "JM",
  },
  {
    name: "Heart Khate Santos",
    quote:
      "I honestly didn't know what to expect going in, but the whole process turned out to be way more comfortable than I imagined. Everyone I interacted with was kind, respectful, and really knew their stuff. They struck the perfect balance between being informative and just genuinely human. No over-the-top theatrics or tension just clear communication and a quick turnaround. I left feeling relieved, informed, and really grateful for how they handled everything.",
    avatar: "HS",
  },
  {
    name: "Cherryl Mariano",
    quote:
      "The admin of the page and the staff are very accomodating.All your concern talagang in detailed nila sinasagot.At yung mga staff napaka bait,di ka kakabahan sa mga procedure na gagawin nila.Lalo may mga ibat ibat accredited branch sila sa mga province kaya di kana talaga lalayo.Salamat lablog..",
    avatar: "CM",
  },
  {
    name: "Bellyjoy",
    quote:
      "Great service and smooth process! I recently had a DNA test done here with my child, and the experience was very professional and convenient. The staff were accomodating, respectful, and made sure we understood every step of the process. Ang bilis lang ng transaction and hassle-free, buti na nalang din cooperative yung baby ko. Thank you for your assistance and for being approachable throughout the process- highly recommended!",
    avatar: "B",
  },
  {
    name: "John Ramos",
    quote:
      "It isn't easy to find a trusted and accomodating LAB that has PATERNITY/DNA test services. I saw their page on TikTok and tried to reach out to them. I'm happy that they are always available to answer all my queries. At that moment, I decided to book an appointment with them. Their staff is very friendly and the test didn't take an hour. The LAB is highly recommended!",
    avatar: "JR",
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
        {REVIEWS.map((review) => (
          <Grid.Col key={review.name} span={{ base: 12, md: 6 }}>
            <ReviewCard review={review} />
          </Grid.Col>
        ))}
      </Grid>

      <Group justify="center" mt={24}>
        <Button
          component="a"
          href={ALL_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          radius="xl"
          className={styles.allReviewsButton}
          rightSection={<IconExternalLink size={16} stroke={2} aria-hidden />}
        >
          See all reviews
        </Button>
      </Group>
    </Box>
  )
}
