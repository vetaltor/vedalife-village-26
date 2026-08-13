import { Link } from 'react-router';
import { NAV_LINKS } from '@/config/routes';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import { InstagramIcon } from '@/shared/component/icons/InstagramIcon';
import { TelegramIcon } from '@/shared/component/icons/TelegramIcon';
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

        <div className={s.social}>
          <a
            className={s.socialLink}
            href={CONTACTS.telegramChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon size={20} />
            Telegram
          </a>
          <a
            className={s.socialLink}
            href={CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={20} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
