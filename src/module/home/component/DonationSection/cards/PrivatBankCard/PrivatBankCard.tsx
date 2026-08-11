import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/shared/component/Button';
import { Card } from '../../Card';
import s from './PrivatBankCard.module.css';

const CARD_NUMBER = '5169335108645173';

export function PrivatBankCard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CARD_NUMBER);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Card title="Картка ПриватБанк">
      <dl className={s.requisites}>
        <div className={s.requisite}>
          <dt>Картка ПриватБанк</dt>
          <dd>РО «САРАСВАТ МАТХ»</dd>
        </div>
        <div className={s.requisite}>
          <dt>Номер картки</dt>
          <dd>{CARD_NUMBER}</dd>
        </div>
      </dl>
      <Button
        as="button"
        type="button"
        variant="secondary"
        onClick={copyToClipboard}
        ariaLive="polite"
        className={s.pinned}
        icon={
          copied ? (
            <Check size={18} aria-hidden="true" />
          ) : (
            <Copy size={18} aria-hidden="true" />
          )
        }
      >
        {copied ? 'Скопійовано' : 'Скопіювати реквізити'}
      </Button>
    </Card>
  );
}
