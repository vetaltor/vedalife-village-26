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
} from 'lucide-react';
import photo1 from '@/assets/images/about/photo_1.avif';
import photo2 from '@/assets/images/about/photo_2.avif';
import photo3 from '@/assets/images/about/photo_3.avif';
import photo4 from '@/assets/images/about/photo_4.avif';
import photo5 from '@/assets/images/about/photo_5.avif';
import photo6 from '@/assets/images/about/photo_6.avif';
import photo7 from '@/assets/images/about/photo_7.avif';
import photo8 from '@/assets/images/about/photo_8.avif';
import photo9 from '@/assets/images/about/photo_9.avif';
import photo10 from '@/assets/images/about/photo_10.avif';
import { FESTIVAL } from '@/data/festival';
import { MESSAGES } from '@/data/messages';
import { LayoutStyles } from '@/module/app/component/Layout';
import { MasonryGallery } from '@/shared/component/MasonryGallery';
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

const galleryImages = [
  { src: photo6, alt: 'Учасниця фестивалю у святковому вбранні' },
  { src: photo7, alt: 'Лекція в наметі на фестивалі Vedalife' },
  { src: photo1, alt: 'Фестиваль Vedalife — сцена та гості' },
  { src: photo8, alt: 'Дитячі активності на фестивалі' },
  { src: photo9, alt: 'Ярмарок на фестивалі Vedalife' },
  { src: photo2, alt: 'Йога-практика просто неба на фестивалі Vedalife' },
  { src: photo10, alt: 'Практичне заняття з медитації' },
  { src: photo4, alt: 'Атмосфера ведичного фестивалю' },
  { src: photo3, alt: 'Майстер-клас на території фестивалю' },
  { src: photo5, alt: 'Виступ музикантів на фестивалі Vedalife' },
];

export function AboutSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="about"
      aria-label={MESSAGES.home.aboutSection.title}
    >
      <div className={s.inner}>
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

        {/* <h3 className={s.galleryHeading}>Фото з минулих фестивалів</h3> */}

        <MasonryGallery images={galleryImages} />
      </div>
    </section>
  );
}
