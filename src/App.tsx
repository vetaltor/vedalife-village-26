import {Route, Routes} from 'react-router';
import {Layout} from '@/components/Layout';
import {HomePage} from '@/pages/Home';
import {ProgramaPage} from '@/pages/Programa';
import {ProNasPage} from '@/pages/ProNas';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="programa" element={<ProgramaPage />} />
        <Route path="pro-nas" element={<ProNasPage />} />
      </Route>
    </Routes>
  );
}
