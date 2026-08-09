import type { CSSProperties } from 'react';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import s from './RegistrationPathCard.module.css';

export type RegistrationPathCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  backgroundImage?: string;
};

export function RegistrationPathCard({
  href,
  title,
  description,
  icon: Icon,
  backgroundImage,
}: RegistrationPathCardProps) {
  const hasBackgroundImage = Boolean(backgroundImage);
  const cardStyle: CSSProperties | undefined = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <li>
      <a
        href={href}
        className={s.cardLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={clsx(s.card, hasBackgroundImage && s.cardWithImage)}
          style={cardStyle}
        >
          <div className={s.cardHeader}>
            <h3 className={s.cardTitle}>{title}</h3>
            <div className={s.iconWrapper}>
              <Icon size={24} aria-hidden="true" />
            </div>
          </div>
          <p className={s.cardDescription}>{description}</p>
          <ArrowUpRight className={s.arrow} size={20} aria-hidden="true" />
        </div>
      </a>
    </li>
  );
}
