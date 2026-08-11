import type { ReactNode } from 'react';
import clsx from 'clsx';
import s from './Button.module.css';

export type ButtonProps = {
  as?: 'button' | 'link';
  variant?: 'primary' | 'secondary';
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  ariaLive?: 'off' | 'polite' | 'assertive';
};

export function Button({
  as = 'button',
  variant = 'primary',
  icon,
  className,
  children,
  href,
  target,
  rel,
  type = 'button',
  onClick,
  ariaLive,
}: ButtonProps) {
  const classes = clsx(s.root, s[variant], className);

  const content = (
    <>
      {icon ? <span className={s.icon}>{icon}</span> : null}
      <span>{children}</span>
    </>
  );

  if (as === 'link') {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-live={ariaLive}
    >
      {content}
    </button>
  );
}