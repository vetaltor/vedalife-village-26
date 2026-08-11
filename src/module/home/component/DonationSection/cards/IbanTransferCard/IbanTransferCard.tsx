import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/shared/component/Button';
import { Card } from '../../Card';
import s from './IbanTransferCard.module.css';

const IBAN_NUMBER = 'UA053052990000026001006111177';

export function IbanTransferCard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(IBAN_NUMBER);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Card title="Переказ по IBAN">
      <dl className={s.requisites}>
        <div className={s.requisite}>
          <dt>ПриватБанк</dt>
          <dd>РО «САРАСВАТ МАТХ»</dd>
        </div>
        <div className={s.requisite}>
          <dt>IBAN</dt>
          <dd>{IBAN_NUMBER}</dd>
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
