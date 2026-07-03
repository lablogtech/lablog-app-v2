"use client"

import Image from "next/image"
import { Modal } from "@mantine/core"
import { IconCircleCheck, IconFlask, IconHeartRateMonitor, IconTrophy, IconUserCheck } from "@tabler/icons-react"
import MessengerButton from "@/components/shared/messenger-button/MessengerButton"
import type { ScreeningModalContent } from "./screeningModalData"
import styles from "./ScreeningTestModal.module.css"

type ScreeningTestModalProps = {
  content: ScreeningModalContent | null
  opened: boolean
  onClose: () => void
}

export default function ScreeningTestModal({ content, opened, onClose }: ScreeningTestModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="auto"
      radius="lg"
      padding={0}
      lockScroll
      title={content?.panelTitle ?? "Screening details"}
      overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}
      classNames={{
        content: styles.modalContent,
        body: styles.modalBody,
        header: styles.modalHeader,
        title: styles.modalTitle,
        close: styles.modalClose,
      }}
    >
      {content ? (
        <div className={styles.layout}>
          <div className={styles.leftPanel}>
            <Image
              src={content.image}
              alt={content.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.leftImage}
            />
            <div className={styles.leftOverlay} aria-hidden />
            <div className={styles.leftContent}>
              <div>
                <h2 className={styles.panelTitle}>{content.panelTitle}</h2>
                <p className={styles.tagline}>{content.tagline}</p>
                <p className={styles.description}>{content.description}</p>
              </div>
              {content.features?.length ? (
                <div className={styles.featureRow}>
                  {content.features.map((feature) => (
                    <div key={feature.label} className={styles.featureBox}>
                      <span className={styles.featureIcon}>{feature.icon}</span>
                      <span className={styles.featureLabel}>{feature.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className={styles.rightPanel}>
            <section className={styles.section}>
              <div className={styles.sectionHeading}>
                <IconUserCheck size={22} stroke={1.9} aria-hidden />
                <h3>Who Is It For?</h3>
              </div>
              <ul className={styles.checkList}>
                {content.whoIsItFor.map((item) => (
                  <li key={item}>
                    <IconCircleCheck size={16} stroke={2} aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className={styles.divider} />

            <div className={styles.infoGrid}>
              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <IconFlask size={22} stroke={1.9} aria-hidden />
                  <h3>Test Includes</h3>
                </div>
                <ul className={styles.bulletList}>
                  {content.testIncludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className={styles.section}>
                <div className={styles.sectionHeading}>
                  <IconHeartRateMonitor size={22} stroke={1.9} aria-hidden />
                  <h3>Why Get Tested?</h3>
                </div>
                {content.whyGetTested.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}

                <div className={styles.callout}>
                  <IconTrophy size={22} stroke={1.9} aria-hidden className={styles.calloutIcon} />
                  <div>
                    <p className={styles.calloutTitle}>{content.callout.title}</p>
                    <p className={styles.calloutText}>{content.callout.text}</p>
                  </div>
                </div>
              </section>
            </div>

            {content.note ? <p className={styles.note}>Note: {content.note}</p> : null}

            <div className={styles.actions}>
              <MessengerButton message={content.bookingMessage} className={styles.bookButton} radius="md" size="md">
                Book This Test
              </MessengerButton>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  )
}
