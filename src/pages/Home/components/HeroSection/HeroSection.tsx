import {CalendarDays, MapPin} from 'lucide-react';
import {Link} from 'react-router';
import {FESTIVAL} from '@/data/festival';
import styles from './HeroSection.module.css';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.decor} aria-hidden="true" />

      <p className={styles.dateBadge}>
        <CalendarDays size={18} aria-hidden="true" />
        {FESTIVAL.dates}
      </p>

      <h1 className={styles.title}>{FESTIVAL.name}</h1>
      <p className={styles.subtitle}>{FESTIVAL.subtitle}</p>

      <p className={styles.location}>
        <MapPin size={18} aria-hidden="true" />
        {FESTIVAL.location}
      </p>

      <p className={styles.freeEntry}>Вхід вільний</p>

      <Link to="/#register" className={styles.ctaBtn}>
        Зареєструватися
      </Link>
    </section>
  );
}
