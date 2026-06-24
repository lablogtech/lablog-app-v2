"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import styles from "./CollectionCenters.module.css"
import { Carousel } from "@mantine/carousel"
import type { EmblaCarouselType } from "embla-carousel"
import { Box, Button, Container, Group, Stack, Text, Title } from "@mantine/core"
import { IconClock, IconMapPin, IconPhone, IconCalendarEvent } from "@tabler/icons-react"

const CollectionCentersMap = dynamic(() => import("./CollectionCentersMap"), {
  ssr: false,
})

type CollectionCenter = {
  name: string
  city: string
  address: string
  phone: string
  hours: string
  coordinates: [number, number]
}

const COLLECTION_CENTERS: CollectionCenter[] = [
  {
    name: "Makati Collection Center",
    city: "Makati City, Metro Manila",
    address: "3F Paseo de Rosas, Makati City",
    phone: "(02) 8122 4687",
    hours: "Mon - Sat: 8:00 AM - 5:00 PM",
    coordinates: [14.5547, 121.0244],
  },
  {
    name: "Quezon City Collection Center",
    city: "Quezon City, Metro Manila",
    address: "Medical Plaza Annex, Quezon Ave",
    phone: "(02) 8741 2240",
    hours: "Mon - Sat: 7:30 AM - 4:30 PM",
    coordinates: [14.6471, 121.0346],
  },
  {
    name: "Cebu Collection Center",
    city: "Cebu City, Cebu",
    address: "Osmena Blvd, Cebu Business Park",
    phone: "(032) 341 9021",
    hours: "Mon - Sat: 8:00 AM - 5:00 PM",
    coordinates: [10.3157, 123.8854],
  },
  {
    name: "Davao Collection Center",
    city: "Davao City, Davao del Sur",
    address: "JP Laurel Ave, Bajada District",
    phone: "(082) 299 5531",
    hours: "Mon - Sat: 8:00 AM - 5:00 PM",
    coordinates: [7.1907, 125.4553],
  },
  {
    name: "Iloilo Collection Center",
    city: "Iloilo City, Iloilo",
    address: "Megaworld Blvd, Mandurriao",
    phone: "(033) 337 1810",
    hours: "Mon - Sat: 8:00 AM - 4:30 PM",
    coordinates: [10.7202, 122.5621],
  },
]

export default function CollectionCenters() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null)

  useEffect(() => {
    if (!embla) {
      return
    }

    embla.scrollTo(activeIndex)
  }, [activeIndex, embla])

  const handlePinSelect = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <Box className={styles.section}>
      <Container
        component="section"
        id="collection-centers"
        size="xl"
        py={{ base: 48, md: 72 }}
        px={{ base: 16, md: 40 }}
      >
        <Stack gap="lg">
          <Box>
            <Title order={2} className={styles.title}>
              Find a LABLOG Collection Center Near You
            </Title>
            <Text className={styles.subtitle}>
              LABLOG partners with collection centers nationwide to make genetic testing more accessible to Filipinos.
            </Text>
            <Text className={styles.subtitleSecondary}>
              We continue to expand our network across major cities and provinces throughout the Philippines.
            </Text>
          </Box>

          <Button
            component="a"
            href="#contact"
            variant="outline"
            color="teal"
            radius="md"
            className={styles.viewAllButton}
          >
            View All Collection Centers
          </Button>

          <Box className={styles.mapStage}>
            <CollectionCentersMap
              centers={COLLECTION_CENTERS}
              activeIndex={activeIndex}
              onSelectCenter={handlePinSelect}
              className={styles.map}
              occludedRatio={0.34}
            />

            <Box className={styles.carouselOverlay}>
              <Carousel
                className={styles.carousel}
                slideSize="100%"
                slideGap="md"
                emblaOptions={{
                  align: "start",
                  loop: true,
                }}
                withIndicators
                withControls
                controlSize={36}
                getEmblaApi={setEmbla}
                onSlideChange={setActiveIndex}
                classNames={{
                  control: styles.control,
                  controls: styles.controls,
                  indicators: styles.indicators,
                  indicator: styles.indicator,
                }}
              >
                {COLLECTION_CENTERS.map((center) => (
                  <Carousel.Slide key={center.name}>
                    <Box className={styles.card}>
                      <Box className={styles.imagePlaceholder}>
                        <Text className={styles.imageLabel}>LABLOG</Text>
                      </Box>

                      <Title order={4} className={styles.cardTitle}>
                        {center.name}
                      </Title>

                      <Stack gap={10} className={styles.detailsList}>
                        <Group gap={8} align="flex-start" wrap="nowrap">
                          <IconMapPin size={16} stroke={1.9} className={styles.detailIcon} aria-hidden />
                          <Text className={styles.detailText}>
                            {center.address}, {center.city}
                          </Text>
                        </Group>

                        <Group gap={8} wrap="nowrap">
                          <IconPhone size={16} stroke={1.9} className={styles.detailIcon} aria-hidden />
                          <Text className={styles.detailText}>{center.phone}</Text>
                        </Group>

                        <Group gap={8} wrap="nowrap">
                          <IconClock size={16} stroke={1.9} className={styles.detailIcon} aria-hidden />
                          <Text className={styles.detailText}>{center.hours}</Text>
                        </Group>
                      </Stack>

                      <Button
                        component="a"
                        href="#contact"
                        className={styles.bookButton}
                        color="blue"
                        leftSection={<IconCalendarEvent size={16} stroke={2} aria-hidden />}
                        radius="md"
                      >
                        Book Appointment
                      </Button>
                    </Box>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
