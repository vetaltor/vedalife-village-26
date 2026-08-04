import yogaIllustration from '@/assets/images/yoga_meditation_illustration_1783528965107.jpg';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <div className={styles.hero}>
      
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>
          Build Healthy<br/>Lifestyle<br/>With Us
        </h1>
        <p className={styles.description}>
          Mindfulness and virtual yoga practice with friends around the world.
        </p>
        <button className={styles.ctaBtn}>
          Get Started
        </button>
      </div>

      {/* Center Column (Image) */}
      <div className={styles.centerColumn}>
        <div className={styles.blobEffect}></div>
        <img 
          src={yogaIllustration} 
          alt="Yoga Meditation" 
          referrerPolicy="no-referrer"
          className={styles.heroImage}
        />
      </div>

      {/* Right Column (Features List) */}
      <div className={styles.rightColumn}>
        <div>
          <h3 className={styles.featureTitle}>Yoga & Meditation11111</h3>
          <p className={styles.featureDesc}>
            Mindfulness and virtual yoga practice with friends around the world.
          </p>
        </div>
        <div>
          <h3 className={styles.featureTitle}>Pro Instructor</h3>
          <p className={styles.featureDesc}>
            Mindfulness and virtual yoga practice with friends around the world.
          </p>
        </div>
        <div>
          <h3 className={styles.featureTitle}>Quality Contents</h3>
          <p className={styles.featureDesc}>
            Mindfulness and virtual yoga practice with friends around the world.
          </p>
        </div>
      </div>
    </div>
  );
}
