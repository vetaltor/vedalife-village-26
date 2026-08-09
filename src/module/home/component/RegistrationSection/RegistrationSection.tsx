import clsx from 'clsx';
import {
  HeartHandshake,
  MicVocal,
  Palette,
  Sparkles,
  Store,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import visitFestImage from '@/assets/images/visitor-reg.webp';
import { FESTIVAL, REGISTRATION_URLS } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import { RegistrationPathCard } from './RegistrationPathCard';
import s from './RegistrationSection.module.css';

type RegistrationPath = {
  id: keyof typeof REGISTRATION_URLS;
  title: string;
  description: string;
  icon: LucideIcon;
  backgroundImage?: string;
};

const REGISTRATION_PATHS: RegistrationPath[] = [
  {
    id: 'visitor',
    title: 'Відвідати фестиваль',
    description: 'Приїжджайте та пориньте в атмосферу фестивалю.',
    icon: Sparkles,
    backgroundImage: visitFestImage,
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
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="register"
      aria-label="Реєстрації"
    >
      <div className={s.inner}>
        <h2 className={s.heading}>Оберіть формат участі</h2>
        <p className={s.subheading}>
          Ми будемо дуже раді бачити вас на {FESTIVAL.name}!
        </p>

        <ul className={s.grid}>
          {REGISTRATION_PATHS.map((path) => (
            <RegistrationPathCard
              key={path.id}
              href={REGISTRATION_URLS[path.id]}
              title={path.title}
              description={path.description}
              icon={path.icon}
              backgroundImage={path.backgroundImage}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
