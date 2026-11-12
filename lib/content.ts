import type { T } from './i18n';

/* ---------------- Camere ---------------- */
export type Room = {
  slug: 'raffaello' | 'bacio';
  num: string;
  name: string;
  price: string; // prezzo "a partire da", in euro
  sub: T;
  short: T;
  feature: { icon: string; label: T };
  card: string;
  specs: { icon: string; label: T }[];
  highlights: { icon: string; title: T; text: T }[];
  description: T[];
  amenities: { icon: string; label: T }[];
  gallery: { src: string; alt: T }[];
  houseRules: T;
};

const near = { icon: 'pin', title: { it: 'Nel cuore del centro storico', en: 'In the heart of the old town' }, text: { it: 'Corso Vannucci a 8 minuti a piedi.', en: 'Corso Vannucci is an 8-minute walk.' } };
const reach = { icon: 'chat', title: { it: 'Sempre raggiungibili', en: 'Always reachable' }, text: { it: 'Assistenza via WhatsApp prima e durante il soggiorno.', en: 'WhatsApp support before and during your stay.' } };

export const rooms: Room[] = [
  {
    slug: 'raffaello',
    num: '01',
    name: 'Camera Raffaello',
    price: '80',
    sub: { it: 'Una camera luminosa con vasca idromassaggio, tra i vicoli medievali.', en: 'A bright room with a whirlpool tub, among the medieval lanes.' },
    short: { it: 'Un rifugio luminoso tra i vicoli medievali, con toni chiari, linee pulite e una vasca idromassaggio per chiudere la giornata in città.', en: 'A bright retreat among the medieval lanes, with light tones, clean lines and a whirlpool tub to end your day in town.' },
    feature: { icon: 'bath', label: { it: 'Vasca idromassaggio', en: 'Whirlpool tub' } },
    card: '/img/raffaello-card.webp',
    specs: [
      { icon: 'guests', label: { it: '2 ospiti', en: '2 guests' } },
      { icon: 'bed', label: { it: 'Letto matrimoniale', en: 'Double bed' } },
      { icon: 'size', label: { it: '90 m²', en: '90 m²' } },
      { icon: 'sun', label: { it: 'Vista sulla città', en: 'City view' } },
    ],
    highlights: [
      { icon: 'bath', title: { it: 'Vasca idromassaggio in camera', en: 'Whirlpool tub in the room' }, text: { it: 'Per chiudere la giornata in città con un bagno caldo.', en: 'End your day in town with a hot bath.' } },
      near,
      reach,
    ],
    description: [
      { it: 'Un rifugio luminoso tra i vicoli medievali di Perugia, con toni chiari, linee pulite e dettagli curati. Il posto giusto per rallentare dopo una giornata tra piazze, musei e ristoranti.', en: 'A bright retreat among Perugia’s medieval lanes, with light tones, clean lines and thoughtful details. The right place to slow down after a day of squares, museums and restaurants.' },
      { it: 'La vasca idromassaggio è il cuore della camera: pensata per una pausa a due, a pochi passi da tutto quello che c’è da vedere.', en: 'The whirlpool tub is the heart of the room: made for a break for two, a few steps from everything worth seeing.' },
    ],
    amenities: [
      { icon: 'home', label: { it: 'Intero appartamento', en: 'Entire apartment' } },
      { icon: 'size', label: { it: '90 m²', en: '90 m²' } },
      { icon: 'bath', label: { it: 'Vasca con idromassaggio', en: 'Whirlpool bathtub' } },
      { icon: 'kitchen', label: { it: 'Cucina privata', en: 'Private kitchen' } },
      { icon: 'shower', label: { it: 'Bagno in camera', en: 'Ensuite bathroom' } },
      { icon: 'snow', label: { it: 'Aria condizionata', en: 'Air conditioning' } },
      { icon: 'city', label: { it: 'Vista città', en: 'City view' } },
      { icon: 'landmark', label: { it: 'Vista su luoghi di interesse', en: 'Landmark view' } },
      { icon: 'tv', label: { it: 'TV a schermo piatto', en: 'Flat-screen TV' } },
      { icon: 'quiet', label: { it: 'Insonorizzazione', en: 'Soundproofing' } },
      { icon: 'coffee', label: { it: 'Macchina da caffè', en: 'Coffee machine' } },
      { icon: 'wifi', label: { it: 'Wi-Fi gratuito', en: 'Free Wi-Fi' } },
      { icon: 'bed', label: { it: 'Letto matrimoniale', en: 'Double bed' } },
      { icon: 'towel', label: { it: 'Biancheria e asciugamani', en: 'Bed linen and towels' } },
    ],
    gallery: [
      { src: '/img/raffaello-1.webp', alt: { it: 'Camera Raffaello, vista d’insieme', en: 'Camera Raffaello, overview' } },
      { src: '/img/raffaello-2.webp', alt: { it: 'Dettaglio della camera', en: 'Room detail' } },
      { src: '/img/raffaello-3.webp', alt: { it: 'La vasca idromassaggio', en: 'The whirlpool tub' } },
      { src: '/img/raffaello-4.webp', alt: { it: 'Il bagno', en: 'The bathroom' } },
      { src: '/img/raffaello-5.webp', alt: { it: 'Dettaglio d’arredo', en: 'Interior detail' } },
    ],
    houseRules: { it: 'Non è consentito fumare. Silenzio tra le 00:00 e le 8:00. Gli animali sono ammessi, potrebbe essere richiesto un supplemento.', en: 'No smoking. Quiet hours from midnight to 8am. Pets are welcome; a surcharge may apply.' },
  },
  {
    slug: 'bacio',
    num: '02',
    name: 'Camera Bacio',
    price: '60',
    sub: { it: 'Il blu della notte perugina, ispirato ai Baci Perugina.', en: 'The blue of Perugia’s night, inspired by Baci Perugina.' },
    short: { it: 'Ispirata ai Baci Perugina: toni profondi, romanticismo e il fascino senza tempo di Perugia, a due passi da tutto.', en: 'Inspired by Baci Perugina: deep tones, romance and Perugia’s timeless charm, close to everything.' },
    feature: { icon: 'moon', label: { it: 'Il blu della notte', en: 'Midnight blue' } },
    card: '/img/bacio-card.webp',
    specs: [
      { icon: 'guests', label: { it: '2 ospiti', en: '2 guests' } },
      { icon: 'bed', label: { it: 'Letto matrimoniale', en: 'Double bed' } },
      { icon: 'size', label: { it: '[mq] m²', en: '[sqm] m²' } },
      { icon: 'moon', label: { it: 'Toni blu notte', en: 'Midnight-blue tones' } },
    ],
    highlights: [
      { icon: 'moon', title: { it: 'Un’atmosfera unica', en: 'A one-of-a-kind mood' }, text: { it: 'Toni profondi e romantici, ispirati all’icona dolce di Perugia.', en: 'Deep, romantic tones inspired by Perugia’s sweetest icon.' } },
      near,
      reach,
    ],
    description: [
      { it: 'Una camera ispirata ai Baci Perugina, che celebra il romanticismo, la dolcezza e il fascino senza tempo di Perugia.', en: 'A room inspired by Baci Perugina, celebrating the romance, sweetness and timeless charm of Perugia.' },
    ],
    amenities: [
      { icon: 'bed', label: { it: 'Letto matrimoniale', en: 'Double bed' } },
      { icon: 'shower', label: { it: 'Bagno privato', en: 'Private bathroom' } },
      { icon: 'snow', label: { it: 'Aria condizionata', en: 'Air conditioning' } },
      { icon: 'wifi', label: { it: 'Wi-Fi gratuito', en: 'Free Wi-Fi' } },
      { icon: 'towel', label: { it: 'Biancheria e asciugamani', en: 'Bed linen and towels' } },
    ],
    gallery: [{ src: '/img/bacio-card.webp', alt: { it: 'Camera Bacio nei toni del blu', en: 'Camera Bacio in shades of blue' } }],
    houseRules: { it: '[Fumo, animali, feste, orari di silenzio.]', en: '[Smoking, pets, parties, quiet hours.]' },
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);

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
      { type: 'p', text: { it: 'Dormire in centro significa tornare a piedi dopo l’ultimo concerto. Le nostre camere sono a pochi minuti da Corso Vannucci: lasci la macchina e ti godi il festival senza pensieri.', en: 'Staying in the centre means walking home after the last concert. Our rooms are a few minutes from Corso Vannucci: leave the car and enjoy the festival without a care.' } },
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
