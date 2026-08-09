import type { ReactNode } from 'react';
import clsx from 'clsx';
import s from './Badge.module.css';

export type BadgeProps = {
  icon?: ReactNode;
  variant?: 'default' | 'featured';
  className?: string;
  children: ReactNode;
};

export function Badge({
  icon,
  variant = 'default',
  className,
  children,
}: BadgeProps) {
  return (
    <span className={clsx(s.root, variant === 'featured' && s.featured, className)}>
      {icon ? <span className={s.icon}>{icon}</span> : null}
      <span className={s.text}>{children}</span>
    </span>
  );
}