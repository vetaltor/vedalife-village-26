import { Link } from 'react-router';
import { InstagramIcon } from '@/components/InstagramIcon';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>{FESTIVAL.name}</p>
          <p className={styles.tagline}>{FESTIVAL.subtitle}</p>
        </div>

        <nav className={styles.nav} aria-label="Навігація у футері">
          <Link to="/programa" className={styles.link}>
            Програма
          </Link>
          <Link to="/pro-nas" className={styles.link}>
            Про нас
          </Link>
        </nav>

        <a
          href={CONTACTS.instagramUrl}
          className={styles.instagramLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size={20} />
          Instagram
        </a>
      </div>
    </footer>
  );
}
