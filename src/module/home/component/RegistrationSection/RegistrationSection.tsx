import {
  ArrowUpRight,
  Handshake,
  HeartHandshake,
  MicVocal,
  Palette,
  Sparkles,
  Store,
  Tent,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FESTIVAL, REGISTRATION_URLS } from '@/data/festival';
import s from './RegistrationSection.module.css';

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
    description: 'Приїжджайте та пориньте в атмосферу фестивалю.',
    icon: Sparkles,
  },
  {
    id: 'volunteer',
    title: 'Стати волонтером',
    description:
      'Станьте частиною команди та допоможіть створити особливу подію.',
    icon: HeartHandshake,
  },
  {
    id: 'fair',
    title: 'Участь у ярмарку',
    description:
      'Запрошуємо майстрів, ремісників і виробників натуральної продукції представити свої вироби на фестивалі.',
    icon: Store,
  },
  {
    id: 'master',
    title: 'Майстри та лектори',
    description:
      'Проводите лекції, йогу, майстер-класи, оздоровчі практики, консультації чи ігри? Запрошуємо стати частиною фестивальної програми.',
    icon: Palette,
  },
  {
    id: 'artist',
    title: 'Артисти та колективи',
    description:
      'Запрошуємо музикантів, виконавців та творчі колективи долучитися до музичної програми.',
    icon: MicVocal,
  },
  // {
  //   id: 'partner',
  //   title: 'Стати партнером',
  //   description: 'Підтримайте фестиваль як партнер чи спонсор.',
  //   icon: Handshake,
  // },
  // {
  //   id: 'tentCamp',
  //   title: 'Наметове містечко',
  //   description: 'Забронюйте місце в наметовому містечку для проживання.',
  //   icon: Tent,
  // },
];

export function RegistrationSection() {
  return (
    <section className={s.root} id="register" aria-label="Реєстрації">
      <div className={s.inner}>
        <h2 className={s.heading}>Оберіть формат участі</h2>
        <p className={s.subheading}>
          Ми будемо дуже раді бачити вас на {FESTIVAL.name}!
        </p>

        <ul className={s.grid}>
          {REGISTRATION_PATHS.map((path) => {
            const Icon = path.icon;
            return (
              <li key={path.id}>
                <a
                  href={REGISTRATION_URLS[path.id]}
                  className={s.card}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={s.iconWrapper}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <span className={s.cardContent}>
                    <span className={s.cardTitle}>{path.title}</span>
                    <span className={s.cardDescription}>
                      {path.description}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={s.arrow}
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
