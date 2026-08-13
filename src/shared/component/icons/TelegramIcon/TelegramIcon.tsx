import { Icon } from '../../Icon';
import s from './TelegramIcon.module.css';

interface TelegramIconProps {
  size?: number;
}

export function TelegramIcon({ size = 24 }: TelegramIconProps) {
  return <Icon className={s.root} name="telegram" width={size} height={size} />;
}
