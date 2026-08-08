import type { ComponentType } from 'react';
import clsx from 'clsx';
import { Handshake, Mail, Phone, Send } from 'lucide-react';
import { CONTACTS } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
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

        <div className={s.channels}>
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <SimpleCard
                key={channel.id}
                icon={<Icon size={22} aria-hidden="true" />}
                title={channel.title}
              >
                <p className={s.cardText}>{channel.description}</p>
                <a
                  href={channel.href}
                  className={s.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {channel.cta}
                </a>
              </SimpleCard>
            );
          })}
        </div>

        <div className={s.details}>
          <SimpleCard
            icon={<Mail size={22} aria-hidden="true" />}
            title="Email"
          >
            <p className={s.cardText}>Для офіційних звернень:</p>
            <div className={s.linkGroup}>
              <a href={`mailto:${CONTACTS.email}`} className={s.linkBtn}>
                {CONTACTS.email}
              </a>
            </div>
          </SimpleCard>

          <SimpleCard
            icon={<Handshake size={22} aria-hidden="true" />}
            title="Партнерство та спонсорство"
          >
            <p className={s.cardText}>
              З питань партнерства, співпраці та спонсорської підтримки
              звертайтеся до:
            </p>
            <div className={s.linkGroup}>
              <a href={CONTACTS.partnership.phoneHref} className={s.linkBtn}>
                <Phone size={16} aria-hidden="true" />
                {CONTACTS.partnership.phone} ({CONTACTS.partnership.contact})
              </a>
              <a
                href={CONTACTS.partnership.telegramUrl}
                className={s.linkBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={16} aria-hidden="true" />
                {CONTACTS.partnership.telegramHandle}
              </a>
            </div>
          </SimpleCard>
        </div>
      </div>
    </section>
  );
}
