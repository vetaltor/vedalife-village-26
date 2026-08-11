import type { ComponentType } from 'react';
import clsx from 'clsx';
import { Handshake, Mail, Phone, Send } from 'lucide-react';
import { CONTACTS } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import { Button } from '@/shared/component/Button';
import { InstagramIcon } from '@/shared/component/InstagramIcon';
import { SimpleCard } from '@/shared/component/SimpleCard';
import s from './ContactsSection.module.css';

type ContactChannel = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ size?: number }>;
  href: string;
  cta: string;
};

const CHANNELS: ContactChannel[] = [
  {
    id: 'telegram-channel',
    title: 'Telegram-канал',
    description:
      'Усі новини, анонси та важливі повідомлення про фестиваль публікуються в офіційному Telegram-каналі.',
    icon: Send,
    href: CONTACTS.telegramChannelUrl,
    cta: 'Новини фестивалю',
  },
  {
    id: 'telegram-community',
    title: 'Telegram-спільнота',
    description:
      'Маєте запитання або хочете поспілкуватися з іншими учасниками? Приєднуйтеся до нашої Telegram-спільноти.',
    icon: Send,
    href: CONTACTS.telegramCommunityUrl,
    cta: 'Спільнота фестивалю',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description:
      'Слідкуйте за новинами фестивалю, фото та відео, а також пишіть нам у Direct.',
    icon: InstagramIcon,
    href: CONTACTS.instagramUrl,
    cta: 'Instagram Vedalife Eco Village',
  },
];

export function ContactsSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="contacts"
      aria-label="Контакти"
    >
      <div className={s.inner}>
        <h2 className={s.heading}>Контакти</h2>
        <p className={s.subheading}>
          Маєте запитання щодо фестивалю? Ми завжди раді допомогти!
        </p>

        <div className={s.cardList}>
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <SimpleCard
                key={channel.id}
                icon={<Icon size={24} aria-hidden="true" />}
                columnLayout
                actions={
                  <Button
                    as="link"
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {channel.cta}
                  </Button>
                }
              >
                <SimpleCard.Title>{channel.title}</SimpleCard.Title>
                <p className={s.cardText}>{channel.description}</p>
              </SimpleCard>
            );
          })}

          <SimpleCard
            icon={<Mail size={24} aria-hidden="true" />}
            columnLayout
            actions={
              <Button
                as="link"
                variant="secondary"
                href={`mailto:${CONTACTS.email}`}
              >
                {CONTACTS.email}
              </Button>
            }
          >
            <SimpleCard.Title>Email</SimpleCard.Title>
            <p className={s.cardText}>Для офіційних звернень:</p>
          </SimpleCard>

          <SimpleCard
            icon={<Handshake size={24} aria-hidden="true" />}
            columnLayout
            actions={
              <>
                <Button
                  as="link"
                  variant="secondary"
                  href={CONTACTS.partnership.phoneHref}
                  icon={<Phone size={16} aria-hidden="true" />}
                >
                  {CONTACTS.partnership.phone} ({CONTACTS.partnership.contact})
                </Button>
                <Button
                  as="link"
                  variant="secondary"
                  href={CONTACTS.partnership.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Send size={16} aria-hidden="true" />}
                >
                  {CONTACTS.partnership.telegramHandle}
                </Button>
              </>
            }
          >
            <SimpleCard.Title>Партнерство та спонсорство</SimpleCard.Title>
            <p className={s.cardText}>
              З питань партнерства, співпраці та спонсорської підтримки
              звертайтеся до:
            </p>
          </SimpleCard>
        </div>
      </div>
    </section>
  );
}