import { useState } from 'react';
import clsx from 'clsx';
import { Check, Copy, Heart } from 'lucide-react';
import { DONATION } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import s from './DonationSection.module.css';

function buildRequisitesText(): string {
  return [
    DONATION.fop.name,
    DONATION.fop.edrpou,
    DONATION.fop.iban,
    DONATION.fop.bank,
  ].join('\n');
}

export function DonationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildRequisitesText());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

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
          Вхід на фестиваль вільний. Якщо ви бажаєте підтримати фестиваль та
          Govinda Land, можете зробити добровільну пожертву — вона допомагає
          організовувати подію та життя ашраму.
        </p>

        <div className={s.cards}>
          <div className={s.card}>
            <h3 className={s.cardTitle}>Реквізити ФОП</h3>
            <dl className={s.requisites}>
              <div className={s.requisite}>
                <dt>Отримувач</dt>
                <dd>{DONATION.fop.name}</dd>
              </div>
              <div className={s.requisite}>
                <dt>Код</dt>
                <dd>{DONATION.fop.edrpou}</dd>
              </div>
              <div className={s.requisite}>
                <dt>Рахунок</dt>
                <dd>{DONATION.fop.iban}</dd>
              </div>
              <div className={s.requisite}>
                <dt>Банк</dt>
                <dd>{DONATION.fop.bank}</dd>
              </div>
            </dl>
            <button
              type="button"
              className={s.copyBtn}
              onClick={handleCopy}
              aria-live="polite"
            >
              {copied ? (
                <>
                  <Check size={18} aria-hidden="true" />
                  Скопійовано
                </>
              ) : (
                <>
                  <Copy size={18} aria-hidden="true" />
                  Скопіювати реквізити
                </>
              )}
            </button>
          </div>

          <div className={s.card}>
            <h3 className={s.cardTitle}>Банка Monobank</h3>
            <p className={s.cardText}>
              Зручний спосіб підтримати фестиваль через банку Monobank у кілька
              кліків.
            </p>
            <a
              href={DONATION.monobankUrl}
              className={s.primaryBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              Підтримати через Monobank
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
