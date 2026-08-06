import clsx from 'clsx';
import { MESSAGES } from '@/data/messages';
import { LayoutStyles } from '@/module/app/component/Layout';
import s from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section
      className={clsx(s.root, LayoutStyles.fixedWidth)}
      id="about"
      aria-label={MESSAGES.home.aboutSection.title}
    >
      <div className={s.inner}>
        <h2 className={s.heading}>{MESSAGES.home.aboutSection.title}</h2>
        {MESSAGES.home.aboutSection.text.map((text, index) => (
          <p key={index} className={s.text}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
