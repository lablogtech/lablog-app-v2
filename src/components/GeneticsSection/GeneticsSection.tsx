"use client";

import { useRef } from "react";
import styles from "./GeneticsSection.module.css";

const PACKAGES = [
  {
    title: "Paternity DNA Testing",
    description:
      "Get accurate answers for peace of mind, legal requirements, immigration applications, and family documentation.",
    items: [
      "Non-Legal Paternity DNA Test",
      "Legal Paternity DNA Test",
      "Immigration DNA Testing",
      "Prenatal Paternity Testing",
    ],
    iconColor: "#e8eeff",
    iconStroke: "#1d3fa8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="18" cy="8" r="2.5" />
        <path d="M21 21v-1.5a3 3 0 0 0-3-3h-1" />
      </svg>
    ),
  },
  {
    title: "NIPT Philippines",
    description:
      "Screen for common chromosomal conditions as early as 10 weeks of pregnancy through a simple maternal blood test.",
    items: ["NIPT Basic", "NIPT Premium", "Fetal Sex Determination"],
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2.5" />
        <path d="M12 8c-2.5 0-4 2-4 4.5 0 3 1.5 5.5 4 5.5s4-2.5 4-5.5C16 10 14.5 8 12 8z" />
        <path d="M9.5 13.5c0 1.5.8 2.5 1.5 3" />
      </svg>
    ),
  },
  {
    title: "Halo DNA Testing",
    description:
      "Gain insights into your genetics to better understand your health, nutrition, fitness, and wellness.",
    items: ["Health & Wellness Insights", "Fitness & Nutrition", "Traits & Ancestry"],
    iconColor: "#e6faf8",
    iconStroke: "#0d9488",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656" />
        <path d="M9.172 20.485a4 4 0 1 0-5.657-5.657" />
        <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
      </svg>
    ),
  },
  {
    title: "Genetic Health Screening",
    description:
      "Advanced screening panels for inherited health conditions and disease risks.",
    items: [
      "Hereditary Cancer Screening",
      "Carrier Screening",
      "Newborn Genetic Screening",
    ],
    iconColor: "#f3eeff",
    iconStroke: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21C12 21 4 16 4 10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z" />
        <path d="M9.5 10l2 2 3-3" />
      </svg>
    ),
  },
  {
    title: "Immigration DNA Testing",
    description: "Court-admissible DNA tests accepted by embassies and immigration authorities worldwide.",
    items: ["Embassy-Accepted Reports", "Chain-of-Custody Collection", "Fast Turnaround"],
    iconColor: "#e8eeff",
    iconStroke: "#1d3fa8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 4v4M16 4v4M3 10h18" />
        <path d="M8 14h4M8 17h2" />
      </svg>
    ),
  },
  {
    title: "Legal DNA Testing",
    description: "Strictly chain-of-custody compliant testing for court submissions, legal disputes, and estate claims.",
    items: ["Court-Admissible Results", "Estate & Inheritance Claims", "Legal Dispute Resolution"],
    iconColor: "#fff7e6",
    iconStroke: "#d97706",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l1.5 4.5H18l-3.75 2.73 1.42 4.36L12 12.3l-3.67 2.29 1.42-4.36L6 7.5h4.5L12 3z" />
        <path d="M5 21h14" />
        <path d="M12 15v6" />
      </svg>
    ),
  },
  {
    title: "Pharmacogenomics",
    description: "Understand how your unique genetic makeup influences your response to medications and therapies.",
    items: ["Medication Response Profile", "Drug Sensitivity Analysis", "Personalized Treatment Guidance"],
    iconColor: "#e6faf8",
    iconStroke: "#0d9488",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="3" />
        <path d="M7 9h10" />
        <circle cx="12" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Whole Genome Sequencing",
    description: "Comprehensive analysis of your complete DNA sequence for deep health and ancestry insights.",
    items: ["Full Genome Analysis", "Rare Variant Detection", "Lifetime Access to Data"],
    iconColor: "#f3eeff",
    iconStroke: "#7c3aed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        <path d="M8 4v2M12 4v2M16 4v2M8 18v2M12 18v2M16 18v2" />
      </svg>
    ),
  },
  {
    title: "Ancestry & Heritage Testing",
    description: "Discover your ethnic origins, migration history, and connect with genetic relatives worldwide.",
    items: ["Ethnicity Breakdown", "Migration History", "Relative Matching"],
    iconColor: "#fff0f3",
    iconStroke: "#e0185c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2.5" />
        <path d="M12 7.5v4.5" />
        <circle cx="6" cy="16" r="2" />
        <circle cx="18" cy="16" r="2" />
        <path d="M12 12l-6 4M12 12l6 4" />
      </svg>
    ),
  },
];

export default function GeneticsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(`.${styles.card}`) as HTMLElement;
    const amount = card ? (card.offsetWidth + 20) * 3 : 900;
    trackRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section id="services" className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Genetics &amp; Specialized Testing</h2>
        <p className={styles.subtitle}>Advanced genetic testing for you and your loved ones.</p>
      </div>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrowBtn} onClick={() => scroll("left")} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.track} ref={trackRef}>
          {PACKAGES.map((pkg, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: pkg.iconColor, color: pkg.iconStroke }}>
                {pkg.icon}
              </div>
              <h3 className={styles.cardTitle}>{pkg.title}</h3>
              <p className={styles.cardDesc}>{pkg.description}</p>
              <ul className={styles.cardList}>
                {pkg.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.learnMore}>
                Learn More{" "}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <button className={styles.arrowBtn} onClick={() => scroll("right")} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
