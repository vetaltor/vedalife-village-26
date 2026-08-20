import type { LucideIcon } from 'lucide-react';
import { Flower2, PersonStanding, Spotlight, Sprout } from 'lucide-react';

export type ProgramEvent = {
  time: string;
  title: string;
  description?: string;
};

export type ProgramSpace = {
  id: string;
  title: string;
  icon: LucideIcon;
  featured?: boolean;
  events: ProgramEvent[];
};

export type ProgramDay = {
  id: string;
  badge: string;
  weekday: string;
  date: string;
  isoDate: string;
  spaces: ProgramSpace[];
};

export const PROGRAM: ProgramDay[] = [
  {
    id: 'saturday',
    badge: 'СБ',
    weekday: 'Субота',
    date: '22 серпня',
    isoDate: '2026-08-22',
    spaces: [
      {
        id: 'yoga',
        title: 'Йога-простір',
        icon: PersonStanding,
        events: [
          {
            time: '11:00',
            title: 'FYSM Йога',
            description: 'З Владиславом',
          },
          {
            time: '12:00',
            title: 'Цвяхостояння',
            description: 'Проводить Наталія',
          },
          {
            time: '15:00',
            title: 'Йога для зцілення серця',
            description: 'З Інною',
          },
          {
            time: '16:00',
            title: 'Хатха-йога',
            description: 'Проводить Тетяна',
          },
        ],
      },
      {
        id: 'self-development',
        title: 'Простір саморозвитку',
        icon: Sprout,
        events: [
          {
            time: '12:00',
            title: 'Фіто-екскурсія',
            description: 'Похід за травами з Мадхурані',
          },
          {
            time: '12:00',
            title: 'Трансформаційна гра «Самсара»',
            description: 'Наталія',
          },
          {
            time: '15:00',
            title: 'Практика пошуку свого шляху реалізації',
            description: '«Хто Я? Куди Я? Для чого Я?» · Інесса',
          },
          {
            time: '16:30',
            title: 'Трансформаційна гра «Карма»',
            description: 'Проводить Сергій Ісаєв (Мадхав Махарадж)',
          },
        ],
      },
      {
        id: 'main-stage',
        title: 'Головна сцена',
        icon: Spotlight,
        featured: true,
        events: [
          { time: '17:00', title: 'Ансамбль «Кумасі»' },
          { time: '18:00', title: 'Гурт «ГуртОм»' },
          { time: '19:00', title: 'Мантра-джем' },
          {
            time: '20:00',
            title: 'DJ SUNSHINE',
            description: 'Ecstatic Dance',
          },
        ],
      },
    ],
  },
  {
    id: 'sunday',
    badge: 'НД',
    weekday: 'Неділя',
    date: '23 серпня',
    isoDate: '2026-08-23',
    spaces: [
      {
        id: 'yoga',
        title: 'Йога-простір',
        icon: PersonStanding,
        events: [
          {
            time: '10:00',
            title: 'Сеанс Рейкі',
            description: 'З Джаянті. Зцілення через енергію',
          },
          { time: '12:00', title: 'FYSM Йога', description: 'З Владом' },
          {
            time: '15:00',
            title: 'Йога для зцілення серця',
            description: 'З Інною',
          },
          {
            time: '16:00',
            title: 'Жіноче коло',
            description:
              'Плетіння гобелену з трав, сердечне спілкування в жіночому колі. Ведуча: жіночий психолог, травниця Мадхурані',
          },
        ],
      },
      {
        id: 'self-development',
        title: 'Простір саморозвитку',
        icon: Sprout,
        events: [
          {
            time: '12:00',
            title: 'Майстер-клас «Любов, турбота і захист Роду»',
            description: 'Проводить Катерина Богданова',
          },
          {
            time: '15:00',
            title: 'Майстер-клас «Карта бажань»',
            description: 'З астрологом Анджалі',
          },
          {
            time: '16:00',
            title:
              'Лекція-бесіда про дородову, родову та післяродову підготовку',
            description:
              'Проводить доула Ольга Кругляк, професійна партнерка в пологи',
          },
        ],
      },
      {
        id: 'main-stage',
        title: 'Головна сцена',
        icon: Spotlight,
        featured: true,
        events: [
          {
            time: '18:00',
            title:
              'Ток-шоу «Чи можна бути щасливим, коли життя йде не за планом?»',
          },
          {
            time: '19:30',
            title: 'Ведична церемонія «Араті»',
          },
          {
            time: '20:00',
            title: 'DJ SUNSHINE',
            description: 'Electro-kirtan',
          },
        ],
      },
    ],
  },
];
