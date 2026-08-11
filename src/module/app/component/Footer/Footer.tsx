import { Link } from 'react-router';
import { NAV_LINKS } from '@/config/routes';
import { FESTIVAL } from '@/data/festival';
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
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={s.link}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
