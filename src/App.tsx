import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import styles from '@/App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      
      {/* Top Section */}
      <div className={styles.topSection}>
        <Navbar />
        <Hero />
      </div>

      {/* Bottom Section */}
      <Stats />
    </div>
  );
}
