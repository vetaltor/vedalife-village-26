import { Button } from '@/shared/component/Button';
import { Card } from '../../Card';
import s from './SponsorCard.module.css';

export function SponsorCard() {
  return (
    <Card title="Стати спонсором">
      <p className={s.cardText}>
        Хочете підтримати фестиваль як спонсор? Зв&apos;яжіться з нами.
      </p>
      <Button as="link" href="tel:+380991975401" className={s.pinned}>
        Сергій: +38 099 197 54 01
      </Button>
    </Card>
  );
}
