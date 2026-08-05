import { CalendarDays, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import { FESTIVAL } from '@/data/festival';
import styles from './HeroSection.module.css';
import heroImg from '@/assets/images/yoga_meditation_illustration_1783528965107.jpg';

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        
        {/* Left Column: Main text */}
        <div className={styles.mainText}>
          <h1 className={styles.title}>{FESTIVAL.name}</h1>
          <p className={styles.subtitle}>{FESTIVAL.subtitle}</p>
          <Link to="/#register" className={styles.ctaBtn}>
            Зареєструватися
          </Link>
        </div>

        {/* Center Column: Illustration */}
        <div className={styles.illustrationWrapper}>
          <div className={styles.blob}></div>
          <img src={heroImg} alt="Festival Illustration" className={styles.illustration} />
          <div className={styles.sparkle1} aria-hidden="true"><Sparkles size={16} /></div>
          <div className={styles.sparkle2} aria-hidden="true"><Sparkles size={24} /></div>
          <div className={styles.sparkle3} aria-hidden="true"><Sparkles size={12} /></div>
        </div>

        {/* Right Column: Festival Info Details */}
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <h3 className={styles.detailTitle}>Коли</h3>
            <p className={styles.detailDesc}>
              <CalendarDays size={18} className={styles.detailIcon} aria-hidden="true" />
              {FESTIVAL.dates}
            </p>
          </div>
          
          <div className={styles.detailItem}>
            <h3 className={styles.detailTitle}>Де</h3>
            <p className={styles.detailDesc}>
              <MapPin size={18} className={styles.detailIcon} aria-hidden="true" />
              {FESTIVAL.location}
            </p>
          </div>

          <div className={styles.detailItem}>
            <h3 className={styles.detailTitle}>Умови</h3>
            <p className={styles.detailDesc}>
              Вхід вільний для всіх гостей
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
