import clsx from 'clsx';
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
        <h2 className={s.heading}>Підтримати фестиваль</h2>
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
