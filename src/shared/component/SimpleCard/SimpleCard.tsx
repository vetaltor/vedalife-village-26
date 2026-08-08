import type { ReactNode } from 'react';
import s from './SimpleCard.module.css';

type SimpleCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export function SimpleCard({ icon, title, children }: SimpleCardProps) {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <span className={s.iconWrapper}>{icon}</span>
        <h3 className={s.cardTitle}>{title}</h3>
      </div>
      <div className={s.body}>{children}</div>
    </div>
  );
}
