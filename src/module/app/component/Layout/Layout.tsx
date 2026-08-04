import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Footer } from '@/module/app/component/Footer';
import { Navbar } from '@/module/app/component/Navbar';
import styles from './Layout.module.css';

export function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return (
    <div className={styles.layout}>
      <Navbar />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
