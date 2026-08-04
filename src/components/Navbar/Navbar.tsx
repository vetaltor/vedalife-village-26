import {Link, NavLink} from 'react-router';
import {CONTACTS, FESTIVAL} from '@/data/festival';
import styles from './Navbar.module.css';

export function Navbar() {
  const navLinkClass = ({isActive}: {isActive: boolean}) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <nav className={styles.navbar} aria-label="Основна навігація">
        <Link to="/" className={styles.brand}>
          {FESTIVAL.name}
        </Link>

        <div className={styles.navLinks}>
          <NavLink to="/programa" className={navLinkClass}>
            Програма
          </NavLink>
          <NavLink to="/pro-nas" className={navLinkClass}>
            Про нас
          </NavLink>
          <a
            href={CONTACTS.instagramUrl}
            className={styles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <Link to="/#register" className={styles.ctaBtn}>
          Реєстрація
        </Link>
      </nav>
    </header>
  );
}
