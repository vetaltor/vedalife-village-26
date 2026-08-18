import { Link } from 'react-router';
import { CONTACTS } from '@/data/festival';
import { InstagramIcon } from '@/shared/component/icons/InstagramIcon';
import styles from './ProgramPage.module.css';

export function ProgramPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Програма фестивалю</h1>
      <p className={styles.text}>
        Детальну програму фестивалю Vedalife Eco Village буде опубліковано
        незабаром. Стежте за оновленнями, щоб нічого не пропустити: лекції,
        майстер-класи, концерти, ярмарок та спільні практики в Govindaland.
      </p>

      <div className={styles.card}>
        <p className={styles.cardText}>
          Хочете дізнатися програму першими та слідкувати за анонсами?
        </p>
        <a
          href={CONTACTS.instagramUrl}
          className={styles.instagramBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon size={20} />
          Стежити в Instagram
        </a>
      </div>

      <Link to="/#register" className={styles.registerLink}>
        Зареєструватися на фестиваль
      </Link>
    </section>
  );
}
