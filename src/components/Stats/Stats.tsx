import { Calendar, Users, MonitorPlay } from 'lucide-react';
import styles from './Stats.module.css';

export function Stats() {
  return (
    <div className={styles.statsContainer}>
      {/* Left Stats */}
      <div className={styles.statsGrid}>
        
        <div className={styles.statItem}>
          <div className={styles.iconWrapper}>
            <Calendar size={24} />
          </div>
          <h4 className={styles.statValue}>10+ Years</h4>
          <p className={styles.statLabel}>Professional Experience</p>
        </div>

        <div className={styles.statItem}>
          <div className={styles.iconWrapper}>
            <Users size={24} />
          </div>
          <h4 className={styles.statValue}>120 Trainers</h4>
          <p className={styles.statLabel}>Highly Expert</p>
        </div>

        <div className={styles.statItem}>
          <div className={styles.iconWrapper}>
            <MonitorPlay size={24} />
          </div>
          <h4 className={styles.statValue}>365+ Classes</h4>
          <p className={styles.statLabel}>Good-quality Contents</p>
        </div>

      </div>

      {/* Right Callout */}
      <div className={styles.callout}>
        {/* Topographic pattern background effect */}
        <svg className={styles.patternBg} xmlns="http://www.w3.org/2000/svg">
           <path d="M0,50 Q20,20 50,50 T100,50" fill="none" stroke="white" strokeWidth="1" />
           <path d="M0,100 Q40,60 100,100 T200,100" fill="none" stroke="white" strokeWidth="1" />
           <path d="M-50,150 Q10,120 100,150 T250,150" fill="none" stroke="white" strokeWidth="1" />
           <path d="M50,0 Q80,30 150,0 T250,0" fill="none" stroke="white" strokeWidth="1" />
           <path d="M100,50 Q120,80 180,50 T280,50" fill="none" stroke="white" strokeWidth="1" />
           <path d="M150,100 Q180,130 250,100 T350,100" fill="none" stroke="white" strokeWidth="1" />
        </svg>
        
        <div className={styles.calloutContent}>
          <h2 className={styles.calloutNumber}>122K+</h2>
          <p className={styles.calloutLabel}>Members Worldwide</p>
          
          <div className={styles.avatarGroupContainer}>
            <div className={styles.avatarGroup}>
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80" alt="Member" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
