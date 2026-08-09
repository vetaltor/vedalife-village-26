import { CalendarDays, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { Badge } from '@/shared/component/Badge';
import { FESTIVAL } from '@/data/festival';
import s from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={s.root}>
      <div className={s.heroImage}></div>
      <div className={s.inner}>
        <Badge className={s.dateBadge} icon={<CalendarDays size={18} aria-hidden="true" />}>
          {FESTIVAL.dates}
        </Badge>

        <h1 className={s.title}>{FESTIVAL.name}</h1>
        <p className={s.subtitle}>{FESTIVAL.subtitle}</p>

        <div className={s.facts}>
          <Badge variant="featured">Вхід вільний</Badge>
          <Badge icon={<MapPin size={18} aria-hidden="true" />}>{FESTIVAL.location}</Badge>
        </div>

        <Link to="/#register" className={s.ctaBtn}>
          Зареєструватися
        </Link>
      </div>
    </section>
  );
}
