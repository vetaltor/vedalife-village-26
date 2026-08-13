import { CalendarDays, MapPin, Sparkles, Sprout, Tent } from 'lucide-react';
import { Link } from 'react-router';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import { InstagramIcon } from '@/shared/component/icons/InstagramIcon';
import { getPublicAsset } from '@/util/getPublicAsset';
import styles from './AboutPage.module.css';

const highlights = [
  {
    icon: CalendarDays,
    label: FESTIVAL.dates,
  },
  {
    icon: MapPin,
    label: 'Govinda Land, с. Мала Ростівка',
  },
  {
    icon: Tent,
    label: 'Наметове містечко та ярмарок',
  },
  {
    icon: Sprout,
    label: 'Атмосфера природи та спільноти',
  },
];

export function AboutPage() {
  return (
    <section className={styles.section}>
      <img
        src="/ornament.svg"
        alt=""
        className={styles.ornament}
        aria-hidden="true"
      />

      <Sparkles className={styles.sparkleA} aria-hidden="true" />
      <Sparkles className={styles.sparkleB} aria-hidden="true" />

      <img
        src={getPublicAsset('floral-lotus.svg')}
        alt=""
        className={styles.lotus}
        aria-hidden="true"
      />
      <img
        src={getPublicAsset('floral-sprig.svg')}
        alt=""
        className={styles.sprig}
        aria-hidden="true"
      />

      <span className={styles.kicker}>Vedalife Eco Village</span>
      <h1 className={styles.title}>Про нас</h1>

      <p className={styles.text}>
        {FESTIVAL.name} — фестиваль ведичної культури, що проходить у Govinda
        Land, ашрамі в селі Мала Ростівка на Вінниччині. Тут гості знайомляться
        з ведичною культурою, практикують разом, відвідують лекції та ярмарок у
        атмосфері природи та спільноти.
      </p>

      <ul className={styles.highlights}>
        {highlights.map(({ icon: Icon, label }) => (
          <li key={label} className={styles.highlightItem}>
            <span className={styles.highlightIcon}>
              <Icon size={18} aria-hidden="true" />
            </span>
            <span>{label}</span>
          </li>
        ))}
      </ul>

      <div className={styles.card}>
        <p className={styles.cardText}>
          Текст та медіаматеріали для цієї сторінки надасть організатор
          фестивалю.
        </p>
        <a
          href={CONTACTS.instagramUrl}
          className={styles.instagramBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size={20} />
          Instagram фестивалю
        </a>
      </div>

      <Link to="/#register" className={styles.registerLink}>
        Зареєструватися на фестиваль
      </Link>
    </section>
  );
}
