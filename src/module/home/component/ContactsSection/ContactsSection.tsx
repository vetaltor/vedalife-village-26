import clsx from 'clsx';
import { Handshake, Mail, Phone, Users } from 'lucide-react';
import { CONTACTS } from '@/data/festival';
import { LayoutStyles } from '@/module/app/component/Layout';
import { InstagramIcon } from '@/shared/component/icons/InstagramIcon';
import { TelegramIcon } from '@/shared/component/icons/TelegramIcon';
import s from './ContactsSection.module.css';

type ContactLink = {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  href: string;
  external?: boolean;
};

type ContactGroup = {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: ContactLink[];
};

const CONTACT_GROUPS: ContactGroup[] = [
  {
    id: 'social',
    title: 'Соцмережі',
    icon: <Users size={18} aria-hidden="true" />,
    items: [
      {
        id: 'telegram-channel',
        label: 'Telegram-канал',
        description:
          'Усі новини, анонси та важливі повідомлення про фестиваль.',
        icon: <TelegramIcon size={36} />,
        href: CONTACTS.telegramChannelUrl,
        external: true,
      },
      {
        id: 'telegram-community',
        label: 'Telegram-спільнота',
        description: 'Запитання та спілкування з іншими учасниками фестивалю.',
        icon: <TelegramIcon size={36} />,
        href: CONTACTS.telegramCommunityUrl,
        external: true,
      },
      {
        id: 'instagram',
        label: 'Instagram',
        description: 'Новини фестивалю, фото, відео та Direct.',
        icon: <InstagramIcon size={36} />,
        href: CONTACTS.instagramUrl,
        external: true,
      },
    ],
  },
  {
    id: 'partnership',
    title: 'Партнерство та спонсорство',
    icon: <Handshake size={18} aria-hidden="true" />,
    items: [
      {
        id: 'partner-phone',
        label: `${CONTACTS.partnership.contact} · ${CONTACTS.partnership.phone}`,
        description:
          'З питань партнерства, співпраці та спонсорської підтримки.',
        icon: <Phone size={28} aria-hidden="true" />,
        href: CONTACTS.partnership.phoneHref,
      },
      {
        id: 'partner-telegram',
        label: CONTACTS.partnership.telegramHandle,
        icon: <TelegramIcon size={36} />,
        href: CONTACTS.partnership.telegramUrl,
        external: true,
      },
    ],
  },
  {
    id: 'email',
    title: 'Email',
    icon: <Mail size={18} aria-hidden="true" />,
    items: [
      {
        id: 'email',
        label: CONTACTS.email,
        description: 'Для офіційних звернень.',
        icon: <Mail size={28} aria-hidden="true" />,
        href: `mailto:${CONTACTS.email}`,
      },
    ],
  },
];

export function ContactsSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="contacts"
      aria-label="Контакти"
    >
      <div className={s.panel}>
        <h2 className={s.heading}>Контакти</h2>
        <p className={s.subheading}>
          Маєте запитання щодо фестивалю? Ми завжди раді допомогти!
        </p>

        <div className={s.groups}>
          {CONTACT_GROUPS.map((group) => {
          return (
            <div key={group.id} className={s.group}>
              <h3 className={s.groupTitle}>
                {group.icon}
                {group.title}
              </h3>
              <ul className={s.list}>
                {group.items.map((item) => {
                  const externalProps = item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' as const }
                    : {};
                  return (
                    <li key={item.id}>
                      <a className={s.row} href={item.href} {...externalProps}>
                        <span className={s.rowIcon}>{item.icon}</span>
                        <span className={s.rowBody}>
                          <span className={s.rowLabel}>{item.label}</span>
                          {item.description ? (
                            <span className={s.rowDesc}>
                              {item.description}
                            </span>
                          ) : null}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
