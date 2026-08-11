export const ROUTES = {
  home: '/',
  about: '/#about',
  register: '/#register',
  location: '/#location',
  contacts: '/#contacts',
  program: '/program',
} as const;

export const NAV_LINKS = [
  { to: ROUTES.home, label: 'Головна' },
  { to: ROUTES.about, label: 'Про фестиваль' },
  { to: ROUTES.program, label: 'Програма' },
  { to: ROUTES.location, label: 'Як дістатися' },
  { to: ROUTES.contacts, label: 'Контакти' },
] as const;
