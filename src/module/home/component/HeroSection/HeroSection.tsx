import { CalendarDays, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { FESTIVAL } from '@/data/festival';
import s from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={s.root}>
      <div className={s.inner}>
        <h1 className={s.title}>{FESTIVAL.name}</h1>
        <p className={s.subtitle}>{FESTIVAL.subtitle}</p>

        <p className={s.dateBadge}>
          <CalendarDays size={18} aria-hidden="true" />
          {FESTIVAL.dates}
        </p>

        <div className={s.facts}>
          {/* <p className={s.freeEntry}>Вхід вільний</p> */}
          <p className={s.location}>
            <MapPin size={18} aria-hidden="true" />
            {FESTIVAL.location}
          </p>
        </div>

        <Link to="/#register" className={s.ctaBtn}>
          Зареєструватися
        </Link>
      </div>
    </section>
  );
}
