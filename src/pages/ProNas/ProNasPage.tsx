import {Link} from 'react-router';
import {InstagramIcon} from '@/components/InstagramIcon';
import {CONTACTS, FESTIVAL} from '@/data/festival';
import styles from './ProNasPage.module.css';

export function ProNasPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Про нас</h1>
      <p className={styles.text}>
        {FESTIVAL.name} — фестиваль ведичної культури, що проходить у Govinda
        Land, ашрамі в селі Мала Ростівка на Вінниччині. Тут гості знайомляться
        з ведичною культурою, практикують разом, відвідують лекції та ярмарок у
        атмосфері природи та спільноти.
      </p>

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
