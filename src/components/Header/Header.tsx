import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "#", active: true },
  { label: "Genetic Testing", href: "#", dropdown: true },
  { label: "Laboratory Tests", href: "#", dropdown: true },
  { label: "Collection Centers", href: "#" },
  { label: "Corporate Wellness", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-dna"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656" /><path d="M9.172 20.485a4 4 0 1 0 -5.657 -5.657" /><path d="M14.828 3.515a4 4 0 0 0 5.657 5.657" /></svg>
          <div className={styles.logoText}>
            <span className={styles.logoName}>LABLOG</span>
            <span className={styles.logoTagline}>Your Partner in Genetic Testing</span>
          </div>
        </a>

        {/* Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${styles.navLink} ${item.active ? styles.navLinkActive : ""}`}
            >
              {item.label}
              {item.dropdown && (
                <svg
                  className={styles.chevron}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className={styles.cta}>
          <svg
            className={styles.ctaIcon}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10 2a5 5 0 00-5 5v1H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V9a1 1 0 00-1-1h-1V7a5 5 0 00-5-5zm3 6V7a3 3 0 10-6 0v1h6z"
              fill="currentColor"
            />
          </svg>
          Book a Test
        </a>
      </div>
    </header>
  );
}
