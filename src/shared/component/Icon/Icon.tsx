import clsx from 'clsx';
import iconsSprite from '@/assets/icons/icons.svg?no-inline';
import s from './Icon.module.css';

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: string;
}

export function Icon({
  name,
  className,
  width = 25,
  height = 25,
  ...restProps
}: IconProps) {
  return (
    <svg
      {...restProps}
      className={clsx(className, s.root)}
      width={width}
      height={height}
      role="presentation"
    >
      <use href={`${iconsSprite}#${name}`} />
    </svg>
  );
}
