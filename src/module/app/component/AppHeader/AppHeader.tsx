import { Link, NavLink } from 'react-router';
import { ROUTES } from '@/config/routes';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import s from './AppHeader.module.css';

export function AppHeader() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink;

  return (
    <header className={s.root}>
      <nav className={s.navbar} aria-label="Основна навігація">
        <Link to={ROUTES.home} className={s.brand}>
          {FESTIVAL.name}
        </Link>

        <div className={s.navLinks}>
          <NavLink to={ROUTES.home} className={navLinkClass}>
            Головна
          </NavLink>
          <NavLink to={ROUTES.program} className={navLinkClass}>
            Програма
          </NavLink>
          <NavLink to={ROUTES.about} className={navLinkClass}>
            Про нас
          </NavLink>
          <a
            href={CONTACTS.instagramUrl}
            className={s.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <Link to="/#register" className={s.ctaBtn}>
          Реєстрація
        </Link>
      </nav>
    </header>
  );
}
