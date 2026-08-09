import { useState } from 'react';
import clsx from 'clsx';
import { Check, Copy, Heart } from 'lucide-react';
import { LayoutStyles } from '@/module/app/component/Layout';
import s from './DonationSection.module.css';

function buildRequisitesText(): string {
  return [
    'Картка ПриватБанк',
    'РО «САРАСВАТ МАТХ»',
    '5169 3351 0864 5173',
    '',
    'ПриватБанк',
    'РО «САРАСВАТ МАТХ»',
    'IBAN UA05 305299 00000 26001006111177',
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
          <strong>Vedalife Eco Village створюється спільними зусиллями.</strong>{' '}
          Якщо вам близькі цінності фестивалю — ви можете стати частиною його
          створення.
        </p>

        <div className={s.cards}>
          <div className={s.card}>
            <h3 className={s.cardTitle}>Картка ПриватБанк</h3>
            <dl className={s.requisites}>
              <div className={s.requisite}>
                <dt>Картка ПриватБанк</dt>
                <dd>РО «САРАСВАТ МАТХ»</dd>
              </div>
              <div className={s.requisite}>
                <dt>Номер картки</dt>
                <dd>5169335108645173</dd>
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
            <h3 className={s.cardTitle}>Переказ по IBAN</h3>
            <dl className={s.requisites}>
              <div className={s.requisite}>
                <dt>ПриватБанк</dt>
                <dd>РО «САРАСВАТ МАТХ»</dd>
              </div>
              <div className={s.requisite}>
                <dt>IBAN</dt>
                <dd>UA053052990000026001006111177</dd>
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
            <h3 className={s.cardTitle}>Стати спонсором</h3>
            <p className={s.cardText}>
              Хочете підтримати фестиваль як спонсор? Зв&apos;яжіться з нами.
            </p>
            <a href="tel:+380991975401" className={s.primaryBtn}>
              Сергій: +38 099 197 54 01
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
