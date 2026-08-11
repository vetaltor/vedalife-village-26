import type { ReactNode } from 'react';
import s from './Card.module.css';

export type CardProps = {
  title: string;
  children: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <div className={s.root}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  );
}
