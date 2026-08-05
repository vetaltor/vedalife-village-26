import { Link } from 'react-router';
import { ROUTES } from '@/config/routes';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import { InstagramIcon } from '@/shared/component/InstagramIcon';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brandBlock}>
          <p className={s.brand}>{FESTIVAL.name}</p>
          <p className={s.tagline}>{FESTIVAL.subtitle}</p>
        </div>

        <nav className={s.nav} aria-label="Навігація у футері">
          <Link to={ROUTES.program} className={s.link}>
            Програма
          </Link>
          <Link to={ROUTES.about} className={s.link}>
            Про нас
          </Link>
        </nav>

        <a
          href={CONTACTS.instagramUrl}
          className={s.instagramLink}
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
