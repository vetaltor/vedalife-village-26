import {MapPin} from 'lucide-react';
import {InstagramIcon} from '@/components/InstagramIcon';
import {CONTACTS, FESTIVAL} from '@/data/festival';
import styles from './LocationSection.module.css';

export function LocationSection() {
  return (
    <section className={styles.section} aria-label="Локація та контакти">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Локація та контакти</h2>

        <div className={styles.row}>
          <p className={styles.address}>
            <MapPin size={20} aria-hidden="true" />
            {FESTIVAL.address}
          </p>

          <div className={styles.actions}>
            <a
              href={CONTACTS.mapsUrl}
              className={styles.mapsBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Відкрити на мапі
            </a>
            <a
              href={CONTACTS.instagramUrl}
              className={styles.instagramBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={20} />
              Instagram
            </a>
          </div>
        </div>

        <p className={styles.note}>
          Стежте за оновленнями фестивалю в Instagram.
        </p>
      </div>
    </section>
  );
}
