import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SimpleCard } from '@/shared/component/SimpleCard';
import s from './RegistrationPathCard.module.css';

export type RegistrationPathCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function RegistrationPathCard({
  href,
  title,
  description,
  icon: Icon,
}: RegistrationPathCardProps) {
  return (
    <li>
      <a
        href={href}
        className={s.cardLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SimpleCard
          className={s.card}
          icon={<Icon size={24} aria-hidden="true" />}
        >
          <SimpleCard.Title>{title}</SimpleCard.Title>
          <p className={s.cardDescription}>{description}</p>
          <ArrowUpRight className={s.arrow} size={20} aria-hidden="true" />
        </SimpleCard>
      </a>
    </li>
  );
}