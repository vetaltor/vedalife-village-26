import { Route, Routes } from 'react-router';
import { AboutPage } from '@/module/about/page/AboutPage';
import { Layout } from '@/module/app/component/Layout';
import { HomePage } from '@/module/home/page/Home';
import { ProgramPage } from '@/module/program/page/ProgramPage';
import { ROUTES } from './config/routes';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.program} element={<ProgramPage />} />
        <Route path={ROUTES.about} element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
