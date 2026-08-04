import {
  ArrowUpRight,
  Handshake,
  HeartHandshake,
  Palette,
  Sparkles,
  Store,
  Tent,
} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';
import {REGISTRATION_URLS} from '@/data/festival';
import styles from './RegistrationSection.module.css';

type RegistrationPath = {
  id: keyof typeof REGISTRATION_URLS;
  title: string;
  description: string;
  icon: LucideIcon;
};

const REGISTRATION_PATHS: RegistrationPath[] = [
  {
    id: 'visitor',
    title: 'Відвідати фестиваль',
    description: 'Приходьте як гість і пориньте в атмосферу фестивалю.',
    icon: Sparkles,
  },
  {
    id: 'volunteer',
    title: 'Стати волонтером',
    description: 'Долучіться до команди та допоможіть організувати фестиваль.',
    icon: HeartHandshake,
  },
  {
    id: 'fair',
    title: 'Участь у ярмарку',
    description: 'Представте свою продукцію чи ремесло на фестивальному ярмарку.',
    icon: Store,
  },
  {
    id: 'master',
    title: 'Майстри та консультанти',
    description: 'Проведіть майстер-клас або консультацію для гостей фестивалю.',
    icon: Palette,
  },
  {
    id: 'partner',
    title: 'Стати партнером',
    description: 'Підтримайте фестиваль як партнер чи спонсор.',
    icon: Handshake,
  },
  {
    id: 'tentCamp',
    title: 'Наметове містечко',
    description: 'Забронюйте місце в наметовому містечку для проживання.',
    icon: Tent,
  },
];

export function RegistrationSection() {
  return (
    <section className={styles.section} id="register" aria-label="Реєстрації">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Оберіть формат участі</h2>
        <p className={styles.subheading}>
          Кожен шлях відкриває свою Google Форму в новій вкладці.
        </p>

        <ul className={styles.grid}>
          {REGISTRATION_PATHS.map((path) => {
            const Icon = path.icon;
            return (
              <li key={path.id}>
                <a
                  href={REGISTRATION_URLS[path.id]}
                  className={styles.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.iconWrapper}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className={styles.cardContent}>
                    <span className={styles.cardTitle}>{path.title}</span>
                    <span className={styles.cardDescription}>
                      {path.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={styles.arrow}
                    size={20}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
