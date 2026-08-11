import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router';
import { ROUTES } from '@/config/routes';
import { FESTIVAL } from '@/data/festival';
import s from './AppHeader.module.css';

const NAV_LINKS = [
  { to: ROUTES.home, label: 'Головна' },
  { to: ROUTES.about, label: 'Про фестиваль' },
  { to: ROUTES.program, label: 'Програма' },
  { to: ROUTES.location, label: 'Як дістатися' },
  { to: ROUTES.contacts, label: 'Контакти' },
] as const;

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink;

  return (
    <header className={s.root}>
      <nav className={s.navbar} aria-label="Основна навігація">
        <button
          type="button"
          className={s.menuToggle}
          aria-label="Відкрити меню"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu aria-hidden="true" />
          <span className={s.menuToggleText}>Меню</span>
        </button>
        {/* <Link to={ROUTES.home} className={s.brand}>
          {FESTIVAL.name}
        </Link> */}

        <div className={s.navLinks}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={s.navLink}>
              {label}
            </Link>
          ))}
        </div>

        {/* <Link to="/#register" className={s.ctaBtn}>
          Реєстрація
        </Link> */}
      </nav>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className={s.mobileMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Меню навігації"
        >
          <div className={s.mobileMenuHeader}>
            <span className={s.brand}>{FESTIVAL.name}</span>
            <button
              type="button"
              className={s.menuClose}
              aria-label="Закрити меню"
              onClick={() => setIsMenuOpen(false)}
            >
              <X aria-hidden="true" />
            </button>
          </div>

          <nav className={s.mobileNav} aria-label="Меню навігації">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={s.navLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/#register"
              className={s.ctaBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              Реєстрація
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
