import type { ComponentType } from 'react';
import clsx from 'clsx';
import { Handshake, Mail, Phone, Send } from 'lucide-react';
import { CONTACTS } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import { InstagramIcon } from '@/shared/component/InstagramIcon';
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
              <div className={s.card} key={channel.id}>
                <span className={s.iconWrapper}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div className={s.cardBody}>
                  <h3 className={s.cardTitle}>{channel.title}</h3>
                  <p className={s.cardText}>{channel.description}</p>
                </div>
                <a
                  href={channel.href}
                  className={s.btn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {channel.cta}
                </a>
              </div>
            );
          })}
        </div>

        <div className={s.details}>
          <div className={s.card}>
            <span className={s.iconWrapper}>
              <Mail size={22} aria-hidden="true" />
            </span>
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>Email</h3>
              <p className={s.cardText}>Для офіційних звернень:</p>
              <a href={`mailto:${CONTACTS.email}`} className={s.linkBtn}>
                {CONTACTS.email}
              </a>
            </div>
          </div>

          <div className={s.card}>
            <span className={s.iconWrapper}>
              <Handshake size={22} aria-hidden="true" />
            </span>
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>Партнерство та спонсорство</h3>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
