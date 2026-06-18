import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StatsBar from "@/components/StatsBar/StatsBar";
import GeneticsSection from "@/components/GeneticsSection/GeneticsSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <Hero />
        <StatsBar />

        <GeneticsSection />

        <section id="about" className={styles.sectionAlt}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutText}>
              <h2>About Our Lab</h2>
              <p>Founded on a commitment to scientific excellence, our ISO-accredited laboratory delivers trusted results to clients across healthcare, food safety, environmental science, and materials research.</p>
              <ul className={styles.statList}>
                <li><strong>500+</strong> Tests Offered</li>
                <li><strong>98.7%</strong> Accuracy Rate</li>
                <li><strong>24–48h</strong> Turnaround</li>
                <li><strong>ISO 17025</strong> Accredited</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact Us</h2>
          <p className={styles.sectionSubtitle}>Submit a test request or get in touch with our team.</p>
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Organization / Institution" />
            <textarea placeholder="Describe the test(s) you need..." rows={4} required />
            <button type="submit" className={styles.btnPrimary}>Send Request</button>
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} LabLog. All rights reserved.</p>
      </footer>
    </div>
  );
}
