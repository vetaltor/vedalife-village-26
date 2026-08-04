import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section className={styles.section} aria-label="Про фестиваль">
      <div className={styles.inner}>
        <p className={styles.text}>
          Veda Life Eco Village — фестиваль ведичної культури в Govinda Land, що
          об'єднує гостей навколо духовних практик, знання, ярмарку та
          живого спілкування на лоні природи.
        </p>
      </div>
    </section>
  );
}