import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import App from '@/App.tsx';
import '@/styles/index.css';

const baseUrl = import.meta.env.BASE_URL;
const routerBasename = baseUrl.startsWith('/') ? baseUrl : '/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter basename={routerBasename}>
      <App />
    </HashRouter>
  </StrictMode>
);
