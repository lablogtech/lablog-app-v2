import styles from "./StatsBar.module.css";

const STATS = [
  {
    label: "Tests Performed",
    value: "10,000+",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.828 14.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656" />
        <path d="M9.172 20.485a4 4 0 1 0-5.657-5.657" />
        <path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" />
      </svg>
    ),
  },
  {
    label: "Partner Clinics Nationwide",
    value: "9",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21C12 21 5 14.5 5 9a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Home Service Available",
    value: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "Turnaround Time",
    value: "Fast",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    label: "Trusted by Families, Physicians & Legal Professionals",
    value: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l2.09 4.26L19 8.27l-3.5 3.41.83 4.82L12 14.27l-4.33 2.23.83-4.82L5 8.27l4.91-.01L12 3z" />
        <path d="M5 21h14" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
];

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.icon}>{stat.icon}</span>
            <div className={styles.text}>
              {stat.value && <span className={styles.value}>{stat.value}</span>}
              <span className={styles.label}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
