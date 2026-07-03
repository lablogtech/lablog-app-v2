"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import styles from "./CollectionCenters.module.css"
import { Carousel } from "@mantine/carousel"
import type { EmblaCarouselType } from "embla-carousel"
import { Box, Container, Group, Stack, Text, Title } from "@mantine/core"
import { IconClock, IconMapPin, IconPhone, IconCalendarEvent } from "@tabler/icons-react"
import Heading from "@/components/shared/heading/Heading"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"

const CollectionCentersMap = dynamic(() => import("./CollectionCentersMap"), {
  ssr: false,
})

type CollectionCenter = {
  name: string
  city: string
  address: string
  phone: string
  hours: string
  imageSrc?: string
  coordinates: [number, number]
}

const COLLECTION_CENTERS: CollectionCenter[] = [
  {
    name: "Lablog Quezon City (Main Office)",
    city: "Diliman, Quezon City, 1103 Metro Manila",
    address: "Unit 605, Corporate 101 Building, Mother Ignacia Ave",
    phone: "0956 064 8809",
    hours: "Opens 8:00 AM",
    imageSrc: "/clinics/Lablog%20Quezon%20City.png",
    coordinates: [14.6372441, 121.030378],
  },
  {
    name: "Lablog San Juan (St. Patrick Supreme Diagnostic)",
    city: "San Juan City, 1500 Metro Manila",
    address: "12 N. Domingo Street, Corner San Perfecto",
    phone: "0956 064 8809",
    hours: "Opens 6:00 AM",
    imageSrc: "/clinics/St.%20Patrick%20San%20Juan.jpeg",
    coordinates: [14.602532, 121.021101],
  },
  {
    name: "Lablog Batangas (Mega Lab Diagnostic Centre)",
    city: "Lipa City, 4217 Batangas",
    address: "Claro M. Recto Avenue beside Security Bank, Barangay 6",
    phone: "(043) 757 2451",
    hours: "Opens 7:00 AM",
    imageSrc: "/clinics/Megalab%20Batangas.png",
    coordinates: [13.9408624, 121.1620322],
  },
  {
    name: "Lablog Laguna (ReaLab Medical and Diagnostic Center)",
    city: "Calamba, 4027 Laguna",
    address: "2125 Real Rd, Real",
    phone: "0999 521 8222",
    hours: "Opens 7:00 AM",
    imageSrc: "/clinics/Reallab%20Laguna.png",
    coordinates: [14.1965605, 121.1454837],
  },
  {
    name: "Lablog Baguio (TopLab MD Baguio)",
    city: "Baguio, 2600 Benguet",
    address: "2nd Floor, Bldg 2, BBCCC, Assumption Rd",
    phone: "(074) 309 8591",
    hours: "Opens 8:00 AM",
    coordinates: [16.4163699, 120.5975912],
  },
  {
    name: "Lablog Boracay (Scandi Medical Clinic and Diagnostic Center)",
    city: "Boracay, Philippines",
    address: "0117 Bulabog Boracay Malay Aklan",
    phone: "(036) 288 9341",
    hours: "Opens 8:00 AM",
    imageSrc: "/clinics/Scandi%20Boracay.png",
    coordinates: [11.9625436, 121.9280844],
  },
  {
    name: "Lablog Bohol (Scandi Medical Clinic and Diagnostic Center)",
    city: "Brgy Danao, Panglao, Philippines",
    address: "Willander Plaza, Unit DL4-DL5, Purok 5",
    phone: "0928 986 3237",
    hours: "Opens 8:00 AM",
    imageSrc: "/clinics/Scandi%20Bohol.png",
    coordinates: [9.5527926, 123.7641536],
  },
  {
    name: "Lablog Cebu (JS Medical and Diagnostic Center)",
    city: "Cebu City, 6000 Lalawigan ng Cebu",
    address: "Ayala access road (axis), 322 Macroville",
    phone: "(032) 383 8456",
    hours: "Opens 7:00 AM",
    imageSrc: "/clinics/JS%20Medical%20Cebu.jpg",
    coordinates: [10.3133338, 123.9031743],
  },
  {
    name: "Lablog Davao (Labworkz Davao Medical Services)",
    city: "Talomo, Davao City, 8000 Davao del Sur",
    address: "GF, Unit 3, N&E Building, Guillermo E. Torres St",
    phone: "0965 675 8256",
    hours: "Opens 6:30 AM",
    imageSrc: "/clinics/Labworkz%20Davao.png",
    coordinates: [7.0617977, 125.6012636],
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
          <Heading
            title="Find a LABLOG Collection Center Near You"
            subtitle="LABLOG partners with collection centers nationwide to make genetic testing more accessible to Filipinos."
            description="We continue to expand our network across major cities and provinces throughout the Philippines."
            classNames={{
              root: styles.sectionHeading,
              title: styles.sectionTitle,
              subtitle: styles.sectionSubtitle,
            }}
          />
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
                        {center.imageSrc ? (
                          <Image
                            src={center.imageSrc}
                            alt={center.name}
                            fill
                            sizes="(max-width: 640px) calc(100vw - 64px), 330px"
                            className={styles.clinicImage}
                          />
                        ) : (
                          <Text className={styles.imageLabel}>LABLOG</Text>
                        )}
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

                      <MessengerButton
                        message={`Hi Lablog team, I would like to book an appointment at ${center.name}.`}
                        className={styles.bookButton}
                        color="blue"
                        leftSection={<IconCalendarEvent size={16} stroke={2} aria-hidden />}
                        radius="md"
                      >
                        Book Appointment
                      </MessengerButton>
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
