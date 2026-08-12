import clsx from 'clsx';
import { Bus, Car, Clock3, MapPin } from 'lucide-react';
import locationImg from '@/assets/images/location.webp';
import { CONTACTS, FESTIVAL } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import { Button } from '@/shared/component/Button';
import s from './GettingThereSection.module.css';

export function GettingThereSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="location"
      aria-label="Як дістатися"
    >
      <div className={s.inner}>
        <h2 className={s.heading}>Як дістатися</h2>

        <div className={s.description}>
          <div className={s.descriptionText}>
            <p>
              Фестиваль проходитиме на території культурно-духовного центру
              Ґовиндаленд — серед мальовничої природи, на території старовинного
              замку, що вже понад століття зберігає свою особливу атмосферу та
              історію.
            </p>
            <p>
              Це місце, куди приїжджають, щоб відпочити від міської метушні,
              відчути тепло щирого спілкування, красу природи й відкрити для
              себе глибину ведичної культури. Саме тут панує атмосфера, яка
              робить Vedalife Eco Village по-справжньому особливим.
            </p>
          </div>
          <img
            src={locationImg}
            alt="Маєток Ґовіндаленд — мальовнича територія фестивалю"
            className={s.descriptionImage}
          />
        </div>

        <div className={s.addressCard}>
          <span className={s.iconWrapper} aria-hidden="true">
            <MapPin size={24} />
          </span>
          <div className={s.addressText}>
            <p className={s.addressTitle}>Маєток «Ґовіндаленд»</p>
            <p className={s.addressNote}>(маєток генерала Заботіна)</p>
            <p className={s.addressSub}>Вінницька область, с. Мала Ростівка</p>
          </div>
          <Button
            as="link"
            href={CONTACTS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Локація на карті
          </Button>
        </div>

        <h3 className={s.subheading}>
          <Bus size={22} aria-hidden="true" />
          Громадським транспортом
        </h3>

        <div className={s.routes}>
          <article className={clsx(s.routeCard)}>
            <h4 className={s.routeTitle}>З Києва</h4>
            <p>
              Відправлення з <strong>автостанції «Південна»</strong> (станція
              метро <strong>«Іподром»</strong>). Обирайте автобус, який прямує
              через зупинку <strong>«Чагів»</strong>.
            </p>
            <p className={s.schedule}>
              <Clock3 size={16} aria-hidden="true" />
              Рейси з Києва:
            </p>
            <ul className={s.scheduleList}>
              <li>14:45 — Київ → Медівка </li>
              <li>16:50 — Київ → Липовець</li>
              <li>18:30 — Київ → Іллінці</li>
            </ul>
            <p>
              Виходити потрібно на зупинці <strong>«Чагів»</strong>.
            </p>
          </article>

          <article className={s.routeCard}>
            <h4 className={s.routeTitle}>З Вінниці</h4>
            <p>
              Відправлення з <strong>автостанції «Східна»</strong> (вул.
              Ватутіна, 18) автобусом <strong>«Вінниця — Чагів»</strong>.
            </p>
            <p className={s.hint}>
              Актуальний розклад рекомендуємо уточнювати на автостанції.
            </p>
            <p>
              Вийдіть на зупинці <strong>«Чагів»</strong>.
            </p>
          </article>
        </div>

        <div className={s.transferCard}>
          <span className={s.transferIcon} aria-hidden="true">
            <Car size={22} />
          </span>
          <div>
            <h3 className={s.transferTitle}>Трансфер до фестивалю</h3>
            <p>
              У дні проведення {FESTIVAL.name} від зупинки «Чагів» до маєтку
              «Ґовиндаленд» курсуватиме <strong>безкоштовний трансфер</strong>.
            </p>
            <p className={s.transferNote}>
              Графік трансферу буде опубліковано ближче до початку фестивалю.
            </p>
          </div>
        </div>

        <p className={s.help}>
          Не знайшли зручний маршрут або виникли запитання?{' '}
          <strong>Зв'яжіться з нами</strong> — ми із задоволенням допоможемо
          спланувати вашу поїздку.
        </p>
      </div>
    </section>
  );
}
