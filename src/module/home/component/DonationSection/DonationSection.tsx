import clsx from 'clsx';
import { Heart } from 'lucide-react';
import { LayoutStyles } from '@/module/app/component/Layout';
import { IbanTransferCard } from './cards/IbanTransferCard/IbanTransferCard';
import { PrivatBankCard } from './cards/PrivatBankCard/PrivatBankCard';
import { SponsorCard } from './cards/SponsorCard/SponsorCard';
import s from './DonationSection.module.css';

export function DonationSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      aria-label="Пожертви"
    >
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.iconWrapper}>
            <Heart size={22} aria-hidden="true" />
          </span>
          <h2 className={s.heading}>Підтримати фестиваль</h2>
        </div>
        <p className={s.text}>
          <strong>Vedalife Eco Village створюється спільними зусиллями.</strong>{' '}
          Якщо вам близькі цінності фестивалю — ви можете стати частиною його
          створення.
        </p>

        <div className={s.cards}>
          <PrivatBankCard />
          <IbanTransferCard />
          <SponsorCard />
        </div>
      </div>
    </section>
  );
}
