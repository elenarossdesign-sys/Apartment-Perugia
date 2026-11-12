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
  apartment: (l: Locale) => `/${l}/appartamento`,
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
    swipePlaces: 'Scorri per vedere altri angoli di Perugia',
    swipePosts: 'Scorri per leggere altri articoli',
    walk: 'min a piedi',
    guest: 'Ospite',
    footer: {
      tagline: 'Un appartamento curato nel centro storico di Perugia.',
      explore: 'ESPLORA', discover: 'SCOPRI', contacts: 'CONTATTI',
      rooms: 'L’appartamento', blog: 'Blog', faq: 'Domande frequenti',
      privacy: 'Privacy policy', cookie: 'Cookie policy', cookiePrefs: 'Preferenze cookie',
    },
    bar: {
      arrive: 'Arrivo', depart: 'Partenza', guests: 'Ospiti',
      adults: 'Adulti', adultsSub: 'Dai 13 anni', kids: 'Bambini', kidsSub: 'Da 0 a 12 anni',
      adult1: 'adulto', adultN: 'adulti', kid1: 'bambino', kidN: 'bambini',
      perRoom: 'L’appartamento ospita fino a 4 persone.', done: 'Fatto',
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
    swipePlaces: 'Swipe to see more of Perugia',
    swipePosts: 'Swipe to read more articles',
    walk: 'min walk',
    guest: 'Guest',
    footer: {
      tagline: 'A thoughtfully designed apartment in Perugia’s historic centre.',
      explore: 'EXPLORE', discover: 'DISCOVER', contacts: 'CONTACT',
      rooms: 'The apartment', blog: 'Blog', faq: 'FAQ',
      privacy: 'Privacy policy', cookie: 'Cookie policy', cookiePrefs: 'Cookie preferences',
    },
    bar: {
      arrive: 'Check-in', depart: 'Check-out', guests: 'Guests',
      adults: 'Adults', adultsSub: 'Age 13+', kids: 'Children', kidsSub: 'Ages 0–12',
      adult1: 'adult', adultN: 'adults', kid1: 'child', kidN: 'children',
      perRoom: 'The apartment sleeps up to 4 guests.', done: 'Done',
      errDates: 'Check-out must be after check-in.',
    },
  },
} as const;

export type UI = (typeof ui)['it'];
export const getUI = (l: Locale): UI => ui[l] as unknown as UI;
