import type { LucideIcon } from 'lucide-react';
import { BookOpen, PersonStanding, Spotlight, Sprout } from 'lucide-react';

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
          { time: '11:00', title: 'FYSM-йога', description: 'Владислав • Fresh Yoga Synthesized Methodology' },
          { time: '12:00', title: 'Цвяхостояння', description: 'Наталія' },
          { time: '14:00', title: 'Хатха-йога', description: 'Тетяна' },
          { time: '15:00', title: 'Йога для зцілення серця', description: 'Інна' },
          { time: '16:00', title: 'Цвяхостояння', description: 'Арджун' },
          { time: '17:00', title: 'Танатотерапія', description: 'Євгеній Шевченко' },
        ],
      },
      {
        id: 'self-development',
        title: 'Простір саморозвитку',
        icon: Sprout,
        events: [
          { time: '12:00', title: 'Фітоекскурсія: похід за травами', description: 'Мадхурані • Збір учасників біля Простору саморозвитку' },
          { time: '12:00', title: 'Трансформаційна гра «Самсара»', description: 'Наталія' },
          { time: '15:00', title: 'Практика пошуку свого шляху реалізації', description: '«Хто я? Куди я? Для чого я?» • Інесса' },
          { time: '16:30', title: 'Трансформаційна гра «Gita Game»', description: 'Сергій' },
        ],
      },
      {
        id: 'lectures',
        title: 'Лекторій',
        icon: BookOpen,
        events: [
          { time: '12:00', title: '«Де живе справжня любов?»', description: 'Гірі Магарадж' },
          { time: '14:00', title: '«У пошуках щастя: чи справді у кожного свій шлях?»', description: 'Мадхав Магарадж' },
          { time: '15:00', title: '«Внутрішня криза як потенціал розвитку»', description: 'Анджалі, ведична астрологиня' },
          { time: '16:00', title: '«Йога між людьми: три універсальні принципи дружби»', description: 'Тіртха Магарадж' },
        ],
      },
      {
        id: 'main-stage',
        title: 'Сцена',
        icon: Spotlight,
        featured: true,
        events: [
          { time: '17:00', title: 'Народний фольклорно-етнографічний ансамбль «Кумасі»' },
          { time: '18:00', title: 'Гурт «ГуртОм»' },
          { time: '19:00', title: 'Мантра-джем' },
          { time: '20:00', title: 'DJ SUNSHINE: Ecstatic Dance' },
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
          { time: '10:00', title: 'Сеанс рейкі: зцілення через енергію', description: 'Джаянті' },
          { time: '12:00', title: 'FYSM-йога', description: 'Влад • Fresh Yoga Synthesized Methodology' },
          { time: '14:00', title: 'Цвяхостояння', description: 'Арджун' },
          { time: '15:00', title: 'Йога для зцілення серця', description: 'Інна' },
          { time: '16:00', title: 'Жіноче коло: плетіння гобелена з трав і сердечне спілкування', description: 'Мадхурані — жіноча психологиня і травниця' },
        ],
      },
      {
        id: 'self-development',
        title: 'Простір саморозвитку',
        icon: Sprout,
        events: [
          { time: '12:00', title: 'Майстер-клас і практика «Любов, турбота та захист роду»', description: 'Катерина Богданова' },
          { time: '15:00', title: 'Майстер-клас «Карта бажань»', description: 'Анджалі, ведична астрологиня' },
          { time: '16:00', title: 'Лекція-бесіда про допологову, пологову та післяпологову підготовку', description: 'Ольга Кругляк — доула та професійна партнерка під час пологів' },
          { time: '17:00', title: 'Майстер-клас «Основи ароматерапії»', description: 'Олеся Тишко' },
        ],
      },
      {
        id: 'lectures',
        title: 'Лекторій',
        icon: BookOpen,
        events: [
          { time: '12:00', title: '«Як зберігати внутрішню рівновагу в часи змін»', description: 'Гірі Магарадж' },
          { time: '14:00', title: '«Духовний вимір спільноти: чому люди шукають своїх?»', description: 'Мадхав Магарадж' },
          { time: '15:00', title: '«Справжня духовність у буденному житті»', description: 'Роман Рябчун' },
          { time: '16:00', title: '«Карма: чи можна змінити нашу долю?»', description: 'Тіртха Магарадж' },
        ],
      },
      {
        id: 'main-stage',
        title: 'Сцена',
        icon: Spotlight,
        featured: true,
        events: [
          { time: '16:00', title: 'Sound Healing: медитація та зцілення звуком' },
          { time: '17:00', title: 'Ток-шоу «Чи можна бути щасливим, коли життя йде не за планом?»' },
          { time: '18:30', title: 'Ведична церемонія «Араті»' },
          { time: '19:30', title: 'DJ SUNSHINE: Electro Kirtan' },
        ],
      },
    ],
  },
];

export const EXCURSIONS = [
  {
    title: 'Екскурсія старовинним замком',
    subtitle: '«Таємниця маєтку генерала Заботіна: історія незавершеного кохання»',
    description: 'Знайомство зі старовинним замком, його архітектурою, історією та загадковими легендами.',
  },
  {
    title: 'Екскурсія до ґошали',
    subtitle: '«Корівки любові: ахімса як основний принцип йоги»',
    description: 'Знайомство з мешканками ґошали та культурою турботи й захисту корів.',
  }
];

export const OTHER_LOCATIONS = [
  {
    title: 'Чайний простір',
    description: 'Затишні посиденьки, ароматний чай і тепле спілкування.',
  },
  {
    title: 'Вегетаріанське кафе',
    description: 'Смачні вегетаріанські страви та фестивальні смаколики.',
  },
  {
    title: 'Дитячий простір',
    description: 'Творчі, пізнавальні та розважальні активності для дітей.',
  }
];
