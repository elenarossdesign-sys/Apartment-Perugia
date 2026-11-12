/**
 * Dati della struttura: modifica qui contatti, CIN, prezzi e link.
 * I valori tra parentesi quadre sono ancora da completare.
 */
export const site = {
  name: 'Apartment Perugia',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: '[email]',
  phone: '[telefono]',
  whatsapp: '', // es. '393331234567' (senza + e spazi). Vuoto = link nascosto
  address: '[indirizzo]',
  cap: '06100 Perugia (PG)',
  cin: '[IL TUO CIN]',
  replyTime: { it: '[X ore]', en: '[X hours]' },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Apartment%20Perugia%2C%20Perugia',
  bookingUrl: '', // link al tuo annuncio Booking.com
  airbnbUrl: '', // link al tuo annuncio Airbnb
  instagram: '',
  facebook: '',
  ratings: {
    booking: { score: '9,3', of: '10', count: 40 },
    airbnb: { score: '4,9', of: '5', count: 49 },
  },
  /** Pagine legali: incolla qui i link di iubenda */
  legal: { privacy: '', cookie: '' },
};

export const waLink = () => (site.whatsapp ? `https://wa.me/${site.whatsapp}` : '');
