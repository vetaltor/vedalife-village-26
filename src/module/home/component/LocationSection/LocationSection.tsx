import clsx from 'clsx';
import { MapPin } from 'lucide-react';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import { InstagramIcon } from '@/shared/component/InstagramIcon';
import s from './LocationSection.module.css';

export function LocationSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="location"
      aria-label="Місце проведення"
    >
      <div className={s.inner}>
        <h2 className={s.heading}>Місце проведення</h2>
        <div className={s.description}>
          <p>
            Фестиваль проходитиме на території культурно-духовного центру
            Ґовіндаленд — серед мальовничої природи, на території старовинного
            замку, що вже понад століття зберігає свою особливу атмосферу та
            історію.
          </p>
          <p>
            Це місце, куди приїжджають, щоб відпочити від міської метушні,
            відчути тепло щирого спілкування, красу природи й відкрити для себе
            глибину ведичної культури. Саме тут панує атмосфера, яка робить
            Vedalife Eco Village по-справжньому особливим.
          </p>
        </div>

        <div className={s.row}>
          <p className={s.address}>
            <MapPin size={20} aria-hidden="true" />
            {FESTIVAL.address}
          </p>

          <div className={s.actions}>
            <a
              href={CONTACTS.mapsUrl}
              className={s.mapsBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Відкрити на мапі
            </a>
            <a
              href={CONTACTS.instagramUrl}
              className={s.instagramBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={20} />
              Instagram
            </a>
          </div>
        </div>

        <p className={s.note}>Стежте за оновленнями фестивалю в Instagram.</p>
      </div>
    </section>
  );
}
