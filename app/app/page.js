import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section id="home" className={styles.hero}>
        <h1 className={styles.name}>
          <span>AYAN</span>
          <span>MUKHERJEE.</span>
        </h1>
      </section>

      <section id="projects" className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <p className={styles.sectionContent}>Coming soon...</p>
      </section>

      <section id="blog" className={styles.section}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <p className={styles.sectionContent}>Coming soon...</p>
      </section>

      <section id="contact" className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.sectionContent}>Coming soon...</p>
      </section>
    </main>
  );
}
