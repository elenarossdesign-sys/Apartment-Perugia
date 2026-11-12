export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';

export function isLocale(v: string): v is Locale {
  return (locales as readonly string[]).includes(v);
}

/** Testo in due lingue */
export type T = { it: string; en: string };
export const tr = (x: T, l: Locale) => x[l];

/** Percorsi del sito (uguali nelle due lingue, cambia solo il prefisso) */
export const path = {
  home: (l: Locale) => `/${l}`,
  room: (l: Locale, slug: string) => `/${l}/camere/${slug}`,
  blog: (l: Locale) => `/${l}/perugia`,
  post: (l: Locale, slug: string) => `/${l}/perugia/${slug}`,
  contact: (l: Locale) => `/${l}/contattaci`,
};

/** Testi dell'interfaccia */
export const ui = {
  it: {
    nav: { home: 'Home', perugia: 'Perugia', contact: 'Contattaci', book: 'Prenota', menu: 'Menu', openMenu: 'Apri il menu', closeMenu: 'Chiudi il menu' },
    lang: { it: 'Italiano', en: 'English' },
    perNight: '/ notte',
    from: 'da',
    startingFrom: 'A partire da',
    checkAvailability: 'Verifica disponibilità',
    requestAvailability: 'Richiedi disponibilità',
    details: 'Dettagli',
    book: 'Prenota',
    readArticle: 'Leggi l’articolo',
    minRead: 'di lettura',
    allArticles: 'Tutti gli articoli',
    swipeRooms: 'Scorri per vedere entrambe le camere',
    swipePlaces: 'Scorri per vedere altri angoli di Perugia',
    swipePosts: 'Scorri per leggere altri articoli',
    walk: 'min a piedi',
    guest: 'Ospite',
    footer: {
      tagline: 'Appartamenti curati nel centro storico di Perugia.',
      explore: 'ESPLORA', discover: 'SCOPRI', contacts: 'CONTATTI',
      rooms: 'Camere', blog: 'Blog', faq: 'Domande frequenti',
      privacy: 'Privacy policy', cookie: 'Cookie policy', cookiePrefs: 'Preferenze cookie',
    },
    bar: {
      arrive: 'Arrivo', depart: 'Partenza', guests: 'Ospiti', room: 'Camera', allRooms: 'Tutte le camere',
      adults: 'Adulti', adultsSub: 'Dai 13 anni', kids: 'Bambini', kidsSub: 'Da 0 a 12 anni',
      adult1: 'adulto', adultN: 'adulti', kid1: 'bambino', kidN: 'bambini',
      perRoom: 'Ogni camera ospita fino a 2 persone.', done: 'Fatto',
      errDates: 'La partenza deve essere dopo l’arrivo.',
    },
  },
  en: {
    nav: { home: 'Home', perugia: 'Perugia', contact: 'Contact us', book: 'Book', menu: 'Menu', openMenu: 'Open menu', closeMenu: 'Close menu' },
    lang: { it: 'Italiano', en: 'English' },
    perNight: '/ night',
    from: 'from',
    startingFrom: 'Starting from',
    checkAvailability: 'Check availability',
    requestAvailability: 'Ask for availability',
    details: 'Details',
    book: 'Book',
    readArticle: 'Read the article',
    minRead: 'read',
    allArticles: 'All articles',
    swipeRooms: 'Swipe to see both rooms',
    swipePlaces: 'Swipe to see more of Perugia',
    swipePosts: 'Swipe to read more articles',
    walk: 'min walk',
    guest: 'Guest',
    footer: {
      tagline: 'Thoughtfully designed rooms in Perugia’s historic centre.',
      explore: 'EXPLORE', discover: 'DISCOVER', contacts: 'CONTACT',
      rooms: 'Rooms', blog: 'Blog', faq: 'FAQ',
      privacy: 'Privacy policy', cookie: 'Cookie policy', cookiePrefs: 'Cookie preferences',
    },
    bar: {
      arrive: 'Check-in', depart: 'Check-out', guests: 'Guests', room: 'Room', allRooms: 'Any room',
      adults: 'Adults', adultsSub: 'Age 13+', kids: 'Children', kidsSub: 'Ages 0–12',
      adult1: 'adult', adultN: 'adults', kid1: 'child', kidN: 'children',
      perRoom: 'Each room sleeps up to 2 guests.', done: 'Done',
      errDates: 'Check-out must be after check-in.',
    },
  },
} as const;

export type UI = (typeof ui)['it'];
export const getUI = (l: Locale): UI => ui[l] as unknown as UI;
