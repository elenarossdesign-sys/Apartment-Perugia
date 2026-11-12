import type { T } from './i18n';

/* ---------------- Appartamento ---------------- */
export type Bedroom = { name: string; img: string; text: T; features: T[] };

export const apartment = {
  name: 'Apartment Perugia',
  price: '80', // prezzo "a partire da" per notte, in euro
  guests: 4,
  sub: { it: 'Un appartamento per 4 persone con due camere, nel cuore del centro storico.', en: 'An apartment for 4 guests with two bedrooms, in the heart of the historic centre.' } as T,
  short: { it: 'Un unico appartamento con due camere dal carattere diverso: la luminosa Camera Raffaello con vasca idromassaggio e la Camera Bacio nel blu della notte perugina. Fino a 4 ospiti, a pochi passi da Corso Vannucci.', en: 'One apartment with two bedrooms of different character: the bright Camera Raffaello with a whirlpool tub and Camera Bacio in the deep blue of Perugia’s night. Up to 4 guests, steps from Corso Vannucci.' } as T,
  card: '/img/raffaello-card.webp',
  specs: [
    { icon: 'guests', label: { it: '4 ospiti', en: '4 guests' } },
    { icon: 'home', label: { it: '2 camere da letto', en: '2 bedrooms' } },
    { icon: 'bed', label: { it: '2 letti matrimoniali', en: '2 double beds' } },
    { icon: 'size', label: { it: '90 m²', en: '90 m²' } },
  ],
  highlights: [
    { icon: 'home', title: { it: 'Un appartamento, due camere', en: 'One apartment, two bedrooms' }, text: { it: 'Spazi riservati per chi viaggia in coppia, con amici o in famiglia.', en: 'Private space for couples, friends or families.' } },
    { icon: 'bath', title: { it: 'Vasca idromassaggio', en: 'Whirlpool tub' }, text: { it: 'Nella Camera Raffaello, per chiudere la giornata con un bagno caldo.', en: 'In Camera Raffaello, to end your day with a hot bath.' } },
    { icon: 'pin', title: { it: 'Nel cuore del centro storico', en: 'In the heart of the old town' }, text: { it: 'Corso Vannucci a 8 minuti a piedi.', en: 'Corso Vannucci is an 8-minute walk.' } },
  ],
  description: [
    { it: 'Apartment Perugia è un unico appartamento di 90 m² nel centro storico, pensato per ospitare fino a 4 persone. È composto da due camere da letto con letto matrimoniale, ognuna con il suo carattere, e da spazi comuni con cucina privata.', en: 'Apartment Perugia is a single 90 m² apartment in the historic centre, designed for up to 4 guests. It has two bedrooms, each with a double bed and its own character, plus living space with a private kitchen.' },
    { it: 'Prenoti l’intero appartamento: nessuno spazio in condivisione con altri ospiti. Il posto giusto per rallentare dopo una giornata tra piazze, musei e ristoranti.', en: 'You book the entire apartment: no space shared with other guests. The right place to slow down after a day of squares, museums and restaurants.' },
  ] as T[],
  bedrooms: [
    {
      name: 'Camera Raffaello',
      img: '/img/raffaello-1.webp',
      text: { it: 'Luminosa, con toni chiari e linee pulite. Il suo cuore è la vasca idromassaggio, pensata per una pausa a due.', en: 'Bright, with light tones and clean lines. Its heart is the whirlpool tub, made for a break for two.' },
      features: [{ it: 'Letto matrimoniale', en: 'Double bed' }, { it: 'Vasca idromassaggio', en: 'Whirlpool tub' }, { it: 'Vista città', en: 'City view' }],
    },
    {
      name: 'Camera Bacio',
      img: '/img/bacio-card.webp',
      text: { it: 'Ispirata ai Baci Perugina: toni blu profondi, romanticismo e il fascino senza tempo di Perugia.', en: 'Inspired by Baci Perugina: deep blue tones, romance and Perugia’s timeless charm.' },
      features: [{ it: 'Letto matrimoniale', en: 'Double bed' }, { it: 'Toni blu notte', en: 'Midnight-blue tones' }, { it: 'Aria condizionata', en: 'Air conditioning' }],
    },
  ] as Bedroom[],
  amenities: [
    { icon: 'home', label: { it: 'Intero appartamento', en: 'Entire apartment' } },
    { icon: 'size', label: { it: '90 m²', en: '90 m²' } },
    { icon: 'guests', label: { it: 'Fino a 4 ospiti', en: 'Up to 4 guests' } },
    { icon: 'bed', label: { it: '2 camere con letto matrimoniale', en: '2 bedrooms with double bed' } },
    { icon: 'bath', label: { it: 'Vasca con idromassaggio', en: 'Whirlpool bathtub' } },
    { icon: 'kitchen', label: { it: 'Cucina privata', en: 'Private kitchen' } },
    { icon: 'shower', label: { it: 'Bagno privato', en: 'Private bathroom' } },
    { icon: 'snow', label: { it: 'Aria condizionata', en: 'Air conditioning' } },
    { icon: 'city', label: { it: 'Vista città', en: 'City view' } },
    { icon: 'landmark', label: { it: 'Vista su luoghi di interesse', en: 'Landmark view' } },
    { icon: 'tv', label: { it: 'TV a schermo piatto', en: 'Flat-screen TV' } },
    { icon: 'quiet', label: { it: 'Insonorizzazione', en: 'Soundproofing' } },
    { icon: 'coffee', label: { it: 'Macchina da caffè', en: 'Coffee machine' } },
    { icon: 'wifi', label: { it: 'Wi-Fi gratuito', en: 'Free Wi-Fi' } },
    { icon: 'towel', label: { it: 'Biancheria e asciugamani', en: 'Bed linen and towels' } },
  ],
  gallery: [
    { src: '/img/raffaello-1.webp', alt: { it: 'Camera Raffaello, vista d’insieme', en: 'Camera Raffaello, overview' } },
    { src: '/img/bacio-card.webp', alt: { it: 'Camera Bacio nei toni del blu', en: 'Camera Bacio in shades of blue' } },
    { src: '/img/raffaello-3.webp', alt: { it: 'La vasca idromassaggio della Camera Raffaello', en: 'The whirlpool tub in Camera Raffaello' } },
    { src: '/img/raffaello-2.webp', alt: { it: 'Dettaglio della Camera Raffaello', en: 'Camera Raffaello detail' } },
    { src: '/img/raffaello-4.webp', alt: { it: 'Il bagno', en: 'The bathroom' } },
    { src: '/img/raffaello-5.webp', alt: { it: 'Dettaglio d’arredo', en: 'Interior detail' } },
  ] as { src: string; alt: T }[],
  houseRules: { it: 'Non è consentito fumare. Silenzio tra le 00:00 e le 8:00. Gli animali sono ammessi, potrebbe essere richiesto un supplemento.', en: 'No smoking. Quiet hours from midnight to 8am. Pets are welcome; a surcharge may apply.' } as T,
};

/* ---------------- Recensioni e posizione ---------------- */
export const reviews = [
  { initials: 'AP', name: 'Alessia P.', text: { it: 'Appartamento molto spazioso e accogliente. Arredato con gusto e in una posizione fantastica. Personale molto presente via WhatsApp.', en: 'Very spacious and welcoming apartment. Tastefully furnished and in a fantastic location. Staff very responsive on WhatsApp.' } },
  { initials: 'LC', name: 'Lorenzo C.', text: { it: 'La posizione e l’appartamento in centro, bello e spazioso. Parcheggio auto vicino. Da consigliare.', en: 'The location and the apartment in the centre, beautiful and spacious. Car park nearby. Recommended.' } },
  { initials: 'GI', name: 'Giulia I.', text: { it: 'Eleganza dell’appartamento, ampi spazi, comfort e posizione.', en: 'An elegant apartment, generous space, comfort and location.' } },
];

export const distances = [
  { place: 'Minimetrò', min: 5 },
  { place: 'Rocca Paolina', min: 7 },
  { place: 'Corso Vannucci', min: 8 },
  { place: 'Fontana Maggiore', min: 9 },
];

export const faqs = [
  { q: { it: 'Check-in e check-out', en: 'Check-in and check-out' }, a: { it: 'Check-in dalle 16:00 alle 18:00. Al check-in è richiesto un documento d’identità con foto. Comunicaci in anticipo l’orario di arrivo.', en: 'Check-in from 4pm to 6pm. Photo ID is required at check-in. Please let us know your arrival time in advance.' } },
  { q: { it: 'Prenotazione e pagamento', en: 'Booking and payment' }, a: { it: 'Ci scrivi e ti rispondiamo con disponibilità e proposta. La prenotazione si conferma con un acconto del 30% tramite bonifico; il saldo si versa con bonifico qualche giorno prima dell’arrivo.', en: 'Write to us and we reply with availability and an offer. A 30% deposit by bank transfer confirms the booking; the balance is paid by bank transfer a few days before arrival.' } },
  { q: { it: 'Condizioni di cancellazione', en: 'Cancellation policy' }, a: { it: '[Descrivi qui la politica di cancellazione.]', en: '[Describe your cancellation policy here.]' } },
  { q: { it: 'Parcheggio', en: 'Parking' }, a: { it: 'Parcheggio auto a pochi minuti a piedi. [Nome e tariffe del parcheggio.]', en: 'Car park a few minutes’ walk away. [Car park name and rates.]' } },
  { q: { it: 'Imposta di soggiorno e CIN', en: 'City tax and CIN' }, a: { it: 'Imposta di soggiorno: [importo] a persona per notte.', en: 'City tax: [amount] per person per night.' } },
];

/* ---------------- Blog ---------------- */
export type Block =
  | { type: 'p'; text: T; lead?: boolean }
  | { type: 'h2'; text: T; id: string }
  | { type: 'quote'; text: T }
  | { type: 'img'; src: string; alt: T; caption: T }
  | { type: 'ul'; items: T[] }
  | { type: 'tip'; text: T }
  | { type: 'cta' };

export type Post = {
  slug: string;
  category: T;
  tag: string;
  minutes: number;
  title: T;
  excerpt: T;
  cover: string;
  coverAlt: T;
  date: string; // AAAA-MM-GG
  featured?: boolean;
  body: Block[];
  tags: string[];
};

const todo: T = { it: '[Testo dell’articolo da completare.]', en: '[Article text to be written.]' };

export const categories: { id: string; label: T }[] = [
  { id: 'cultura', label: { it: 'Cultura', en: 'Culture' } },
  { id: 'eventi', label: { it: 'Eventi', en: 'Events' } },
  { id: 'dintorni', label: { it: 'Dintorni', en: 'Day trips' } },
  { id: 'sapori', label: { it: 'Sapori', en: 'Food' } },
  { id: 'consigli', label: { it: 'Consigli', en: 'Tips' } },
];

export const posts: Post[] = [
  {
    slug: 'umbria-jazz',
    category: { it: 'Cultura', en: 'Culture' },
    tag: 'UMBRIA JAZZ',
    minutes: 6,
    title: { it: 'Un’estate a Perugia, a ritmo di jazz', en: 'A summer in Perugia, to the rhythm of jazz' },
    excerpt: { it: 'Piazze piene, palchi storici e musicisti da tutto il mondo: la guida per vivere Umbria Jazz da chi abita in centro.', en: 'Packed squares, historic stages and musicians from all over the world: a guide to Umbria Jazz from people who live in the centre.' },
    cover: '/img/blog-jazz.webp',
    coverAlt: { it: 'Musicisti jazz sul palco', en: 'Jazz musicians on stage' },
    date: '2026-06-01',
    featured: true,
    tags: ['Umbria Jazz', 'Eventi', 'Estate', 'Centro storico', 'Musica'],
    body: [
      { type: 'p', lead: true, text: { it: 'Ogni estate Perugia cambia ritmo. Per alcuni giorni il centro storico diventa un unico grande palco: le note escono dai teatri, riempiono Corso Vannucci e arrivano fino ai vicoli più nascosti. Umbria Jazz è uno dei festival più amati d’Europa, e viverlo da dentro la città è tutta un’altra storia.', en: 'Every summer Perugia changes its rhythm. For a few days the old town becomes one big stage: music spills out of the theatres, fills Corso Vannucci and reaches the most hidden lanes. Umbria Jazz is one of Europe’s best-loved festivals, and living it from inside the city is a different story altogether.' } },
      { type: 'p', text: { it: 'Musica e turismo, in un incrocio di suggestioni uniche. [Continua qui il testo dell’articolo: storia del festival, atmosfera, cosa aspettarsi.]', en: 'Music and travel, in a unique mix of sensations. [Continue the article here: history of the festival, atmosphere, what to expect.]' } },
      { type: 'quote', text: { it: '“Esci di casa e il concerto è già cominciato: basta seguire la musica.”', en: '“Step outside and the concert has already started: just follow the music.”' } },
      { type: 'h2', id: 'dove', text: { it: 'Dove ascoltare', en: 'Where to listen' } },
      { type: 'p', text: { it: 'I grandi nomi suonano all’Arena Santa Giuliana, mentre il Teatro Morlacchi ospita i concerti più raccolti. Ma il cuore del festival batte all’aperto, tra le piazze e le strade del centro, con concerti gratuiti a tutte le ore.', en: 'The big names play the Arena Santa Giuliana, while Teatro Morlacchi hosts the more intimate concerts. But the heart of the festival beats outdoors, in the squares and streets of the centre, with free concerts at all hours.' } },
      { type: 'img', src: '/img/jazz-concerto.webp', alt: { it: 'Concerto jazz all’aperto', en: 'Open-air jazz concert' }, caption: { it: 'La musica dal vivo anima il centro storico. [Credito foto]', en: 'Live music fills the old town. [Photo credit]' } },
      { type: 'ul', items: [
        { it: 'Arena Santa Giuliana: i concerti principali, la sera.', en: 'Arena Santa Giuliana: the main evening concerts.' },
        { it: 'Teatro Morlacchi: acustica perfetta per il jazz più intimo.', en: 'Teatro Morlacchi: perfect acoustics for more intimate jazz.' },
        { it: 'Corso Vannucci e piazze: concerti gratuiti e street band.', en: 'Corso Vannucci and the squares: free concerts and street bands.' },
      ] },
      { type: 'h2', id: 'consigli', text: { it: 'Consigli pratici', en: 'Practical tips' } },
      { type: 'p', text: { it: 'Durante il festival il centro è vivace fino a tardi. Muoversi a piedi è il modo migliore per godersi tutto: niente traffico, niente parcheggio da cercare, solo musica da seguire.', en: 'During the festival the centre stays lively until late. Walking is the best way to enjoy it all: no traffic, no parking to look for, just music to follow.' } },
      { type: 'tip', text: { it: '[Scrivi qui un consiglio personale: il tuo concerto preferito, un locale, l’orario migliore per evitare la folla.]', en: '[Add a personal tip here: your favourite concert, a bar, the best time to avoid the crowds.]' } },
      { type: 'h2', id: 'dormire', text: { it: 'Dove dormire', en: 'Where to stay' } },
      { type: 'p', text: { it: 'Dormire in centro significa tornare a piedi dopo l’ultimo concerto. Il nostro appartamento è a pochi minuti da Corso Vannucci: lasci la macchina e ti godi il festival senza pensieri.', en: 'Staying in the centre means walking home after the last concert. Our apartment is a few minutes from Corso Vannucci: leave the car and enjoy the festival without a care.' } },
      { type: 'cta' },
    ],
  },
  {
    slug: 'assisi',
    category: { it: 'Dintorni', en: 'Day trips' },
    tag: 'ASSISI',
    minutes: 4,
    title: { it: 'Assisi, sulle orme di San Francesco', en: 'Assisi, in the footsteps of Saint Francis' },
    excerpt: { it: 'Vicoli medievali e la Basilica di San Francesco: una gita in giornata a mezz’ora da Perugia.', en: 'Medieval lanes and the Basilica of Saint Francis: a day trip half an hour from Perugia.' },
    cover: '/img/blog-assisi.webp',
    coverAlt: { it: 'Basilica di San Francesco ad Assisi', en: 'Basilica of Saint Francis in Assisi' },
    date: '2026-05-01',
    tags: ['Assisi', 'Dintorni', 'Gite'],
    body: [{ type: 'p', lead: true, text: todo }, { type: 'cta' }],
  },
  {
    slug: 'eurochocolate',
    category: { it: 'Sapori', en: 'Food' },
    tag: 'EUROCHOCOLATE',
    minutes: 5,
    title: { it: 'Il gusto dell’Umbria: alla scoperta di Eurochocolate', en: 'A taste of Umbria: discovering Eurochocolate' },
    excerpt: { it: 'Degustazioni, creazioni artigianali e la storia dolce della città del cioccolato.', en: 'Tastings, artisan creations and the sweet history of the city of chocolate.' },
    cover: '/img/blog-cioccolato.webp',
    coverAlt: { it: 'Cioccolatini artigianali a Eurochocolate', en: 'Artisan chocolates at Eurochocolate' },
    date: '2026-04-01',
    tags: ['Eurochocolate', 'Sapori', 'Eventi'],
    body: [{ type: 'p', lead: true, text: todo }, { type: 'cta' }],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const categoryId = (p: Post) => categories.find((c) => c.label.it === p.category.it)?.id || 'cultura';
