import { Icon } from '../../Icon';
import s from './InstagramIcon.module.css';

type InstagramIconProps = {
  size?: number;
};

export function InstagramIcon({ size = 24 }: InstagramIconProps) {
  return (
    <Icon className={s.root} name="instagram" width={size} height={size} />
  );
}
