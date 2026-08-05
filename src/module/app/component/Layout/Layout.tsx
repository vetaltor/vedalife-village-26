import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Footer } from '@/module/app/component/Footer';
import { AppHeader } from '../AppHeader';
import s from './Layout.module.css';

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
    <div className={s.root}>
      <AppHeader />
      <main id="main" className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
