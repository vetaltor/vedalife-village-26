import type { ReactNode } from 'react';
import clsx from 'clsx';
import s from './SimpleCard.module.css';

export type SimpleCardProps = {
  icon: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  columnLayout?: boolean;
};

export function SimpleCard({
  icon,
  children,
  actions,
  columnLayout = false,
}: SimpleCardProps) {
  return (
    <div className={clsx(s.root, columnLayout ? s.rootColumn : s.rootDefault)}>
      <div className={s.iconWrapper}>{icon}</div>
      <div className={s.body}>{children}</div>
      {actions ? <div className={s.actions}>{actions}</div> : null}
    </div>
  );
}

export namespace SimpleCard {
  export type TitleProps = {
    children: ReactNode;
  };

  export function Title({ children }: TitleProps) {
    return <h3 className={s.cardTitle}>{children}</h3>;
  }
}