import { MESSAGES } from '@/data/messages';
import s from './AboutSection.module.css';

export function AboutSection() {
  return (
    <section
      className={s.section}
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
