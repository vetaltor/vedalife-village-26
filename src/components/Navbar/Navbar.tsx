import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>YOOGA</div>
      <div className={styles.navLinks}>
        <a href="#" className={styles.navLink}>
          Home
          <span className={styles.activeIndicator}></span>
        </a>
        <a href="#" className={styles.navLink}>Fitness</a>
        <a href="#" className={styles.navLink}>Yoga</a>
        <a href="#" className={styles.navLink}>Tutorial</a>
        <a href="#" className={styles.navLink}>Blog</a>
      </div>
      <button className={styles.contactBtn}>
        Contact
      </button>
    </nav>
  );
}
