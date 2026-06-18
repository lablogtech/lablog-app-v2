import styles from "./Hero.module.css";

const FEATURES = [
  ["Paternity DNA Testing", "Legal DNA Testing"],
  ["NIPT (Non-Invasive Prenatal Testing)", "Immigration DNA Testing"],
  ["Prenatal Paternity Testing", "Home Service Available"],
  ["Halo DNA & Genetic Health Screening", "Nationwide Collection Centers"],
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {/* ── Left column ── */}
        <div className={styles.content}>
          <h1 className={styles.headline}>
            DNA Testing, NIPT &amp; Genetic Screening in the Philippines
          </h1>
          <p className={styles.subheadline}>
            Fast, accurate, and confidential genetic testing services available
            nationwide through our partner clinic network.
          </p>

          <ul className={styles.featureGrid}>
            {FEATURES.map(([left, right], i) => (
              <li key={i} className={styles.featureRow}>
                <span className={styles.featureItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#1d3fa8" />
                    <path d="M5.5 10.5l3 3 6-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {left}
                </span>
                <span className={styles.featureItem}>
                  <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#1d3fa8" />
                    <path d="M5.5 10.5l3 3 6-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {right}
                </span>
              </li>
            ))}
          </ul>

          <div className={styles.ctas}>
            <a href="#contact" className={styles.btnPrimary}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 9h6M9 13h4" />
              </svg>
              Book a Test Now
            </a>
            <a href="#services" className={styles.btnSecondary}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 3" />
              </svg>
              Find a Collection Center
            </a>
          </div>

          <p className={styles.serviceNote}>
            Serving patients throughout the Philippines{" "}
            <span role="img" aria-label="Philippine flag">🇵🇭</span>
          </p>
        </div>

        {/* ── Right column ── */}
        <div className={styles.visual}>
          <div className={styles.imagePlaceholder} aria-hidden="true">
            {/* Family photo placeholder */}
            <svg viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.familySvg}>
              <rect width="480" height="380" rx="12" fill="#e8f0fb" />
              {/* People silhouettes */}
              <ellipse cx="160" cy="140" rx="38" ry="38" fill="#b8cdf8" />
              <rect x="122" y="178" width="76" height="100" rx="18" fill="#b8cdf8" />
              <ellipse cx="240" cy="130" rx="42" ry="42" fill="#9ab9f5" />
              <rect x="198" y="172" width="84" height="110" rx="20" fill="#9ab9f5" />
              <ellipse cx="240" cy="238" rx="22" ry="22" fill="#cfdcfa" />
              <rect x="218" y="260" width="44" height="60" rx="12" fill="#cfdcfa" />
            </svg>
          </div>

          {/* DNA helix decoration */}
          <svg className={styles.dnaHelix} viewBox="0 0 80 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20 10 C60 50, 20 90, 60 130 C20 170, 60 210, 20 250 C60 290, 20 310, 60 320" stroke="#1d3fa8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M60 10 C20 50, 60 90, 20 130 C60 170, 20 210, 60 250 C20 290, 60 310, 20 320" stroke="#1d3fa8" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <line x1="20" y1="50" x2="60" y2="70" stroke="#5b8dee" strokeWidth="2" opacity="0.6" />
            <line x1="60" y1="110" x2="20" y2="130" stroke="#5b8dee" strokeWidth="2" opacity="0.6" />
            <line x1="20" y1="170" x2="60" y2="190" stroke="#5b8dee" strokeWidth="2" opacity="0.6" />
            <line x1="60" y1="230" x2="20" y2="250" stroke="#5b8dee" strokeWidth="2" opacity="0.6" />
            <line x1="20" y1="290" x2="60" y2="300" stroke="#5b8dee" strokeWidth="2" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
