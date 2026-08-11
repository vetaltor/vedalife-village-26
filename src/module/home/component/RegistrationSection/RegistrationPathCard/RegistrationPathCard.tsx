import type { CSSProperties } from 'react';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import s from './RegistrationPathCard.module.css';

export type RegistrationPathCardProps = {
  href: string;
  title: string;
  description: string;
  icon?: LucideIcon;
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
        className={s.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={clsx(s.root, hasBackgroundImage && s.root_withImage)}
          style={cardStyle}
        >
          <div className={s.header}>
            <h3 className={s.title}>{title}</h3>
            {Icon && (
              <div className={s.iconWrapper}>
                <Icon size={24} aria-hidden="true" />
              </div>
            )}
          </div>
          <p className={s.description}>{description}</p>
          <div className={s.linkIconWrapper}>
            <ArrowUpRight size={20} aria-hidden="true" />
          </div>
        </div>
      </a>
    </li>
  );
}
