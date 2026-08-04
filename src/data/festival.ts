export const FESTIVAL = {
  name: 'Veda Life Eco Village',
  subtitle: 'фестиваль ведичної культури',
  dates: '22–23 серпня',
  location: 'Govinda Land, с. Мала Ростівка, Вінницька область',
  address: 'с. Мала Ростівка, Вінницька область',
} as const;

// ПЛЕЙСХОЛДЕРИ: замініть на актуальні URL Google Forms, які надасть організатор.
export const REGISTRATION_URLS = {
  visitor: 'https://forms.example.com/festival-visitor',
  volunteer: 'https://forms.example.com/festival-volunteer',
  fair: 'https://forms.example.com/festival-fair',
  master: 'https://forms.example.com/festival-master',
  partner: 'https://forms.example.com/festival-partner',
  tentCamp: 'https://forms.example.com/festival-tent-camp',
} as const;

// ПЛЕЙСХОЛДЕРИ: реквізити ФОП, банка Monobank і URL надає організатор.
export const DONATION = {
  monobankUrl: 'https://example.com/monobank-jar',
  fop: {
    name: 'ФОП Прізвище Ім’я По-батькові',
    edrpou: 'РНОКПП: 0000000000',
    iban: 'IBAN: UA00 0000 0000 0000 0000 0000 000',
    bank: 'Банк: АТ «Універсал Банк»',
  },
} as const;

// ПЛЕЙСХОЛДЕРИ: посилання на Instagram фестивалю та Google Maps надає організатор.
export const CONTACTS = {
  instagramUrl: 'https://www.instagram.com/',
  mapsUrl: 'https://www.google.com/maps',
} as const;
