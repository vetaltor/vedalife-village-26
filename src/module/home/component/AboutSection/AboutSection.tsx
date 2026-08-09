import clsx from 'clsx';
import {
  Apple,
  BookOpen,
  Clapperboard,
  Flower2,
  type LucideIcon,
  Music,
  Palette,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import ornament from '@/assets/images/ornament.svg';
import { FESTIVAL } from '@/data/festival';
import { MESSAGES } from '@/data/messages';
import { LayoutStyles } from '@/module/app/component/Layout';
import { getPublicAsset } from '@/util/getPublicAsset';
import s from './AboutSection.module.css';

type Highlight = {
  label: string;
  icon: LucideIcon;
};

const highlights: Highlight[] = [
  { label: 'Йога', icon: Flower2 },
  { label: 'Лекції', icon: BookOpen },
  { label: 'Майстер-класи', icon: Palette },
  { label: 'Музичні виступи', icon: Music },
  { label: 'Ярмарок', icon: ShoppingBag },
  { label: 'Вегетаріанська кухня', icon: Apple },
  { label: 'Сферичний кінотеатр', icon: Clapperboard },
];

export function AboutSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="about"
      aria-label={MESSAGES.home.aboutSection.title}
    >
      <div className={s.inner}>
        <img className={s.ornament} src={ornament} alt="" aria-hidden="true" />

        <Sparkles className={s.sparkle} aria-hidden="true" />

        <h2 className={s.heading}>{MESSAGES.home.aboutSection.title}</h2>

        <p className={s.text}>
          {FESTIVAL.name +
            " — це фестиваль ведичної культури, який є частиною міжнародного проєкту Vedalife. Понад 15 років проєкт об'єднує людей у різних країнах світу та популяризує здоровий спосіб життя, саморозвиток, творчість і життя в гармонії з природою."}
        </p>

        <p className={s.text}>
          Протягом двох днів на вас чекають йога, лекції, майстер-класи,
          оздоровчі практики, музичні виступи, ярмарок, екскурсії, смачна
          вегетаріанська кухня, сферичний кінотеатр, артпростір та багато інших
          цікавих подій для всієї родини.
        </p>

        <ul className={s.chips} aria-label="Що чекає на гостей">
          {highlights.map(({ label, icon: Icon }) => (
            <li key={label} className={s.chip}>
              <Icon size={14} className={s.chipIcon} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
