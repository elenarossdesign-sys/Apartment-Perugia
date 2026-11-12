import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BookingBar from '@/components/BookingBar';
import PostCard from '@/components/PostCard';
import Icon, { Stars } from '@/components/Icon';
import { getUI, path, type Locale } from '@/lib/i18n';
import { apartment as A, distances, posts, reviews } from '@/lib/content';
import { site, waLink } from '@/lib/site';

const C = {
  it: {
    pill: 'Un appartamento per 4 nel centro storico',
    h1: 'Perugia comincia appena esci dalla porta.',
    sub: 'Un appartamento con due camere a pochi passi da Corso Vannucci. Prenota direttamente con noi, senza intermediari.',
    rated: (b: string, a: string) => `Valutato ${b}/10 su Booking.com e ${a}/5 su Airbnb`,
    assure: ['Prenotazione diretta, senza commissioni', 'Risposta entro '],
    perks: [
      ['pin', 'Nel centro storico', 'Tutto a piedi: piazze, musei, ristoranti.'],
      ['park', 'Parcheggio vicino', 'Parcheggio auto a pochi minuti.'],
      ['whatsapp', 'Sempre raggiungibili', 'Assistenza via WhatsApp durante il soggiorno.'],
      ['sparkle', 'Curate nei dettagli', 'Biancheria di qualità, Wi-Fi e set cortesia.'],
    ],
    roomsEyebrow: 'L’appartamento', roomsH: 'Un appartamento, due atmosfere.', roomsLead: 'Due camere da letto in un unico appartamento tutto per te: una luminosa con vasca idromassaggio, una nel blu della notte perugina.', bedsK: 'Composto da', see: 'Scopri l’appartamento',
    locEyebrow: 'La posizione', locH: 'Esci di casa e sei già in centro.', locLead: 'Vicoli, piazze, sapori e musica: la Perugia da vivere a piedi, senza pensare all’auto.',
    mosaic: ['I vicoli', 'Umbria Jazz', 'La tavola umbra', 'Eurochocolate'],
    revEyebrow: 'Dicono di noi', revText: (n: number) => `Media di ${n} recensioni su Booking.com. Leggi cosa raccontano gli ospiti.`,
    howEyebrow: 'Come funziona', howH: 'Richiedi in un minuto.', howLead: 'Nessun intermediario: prenoti con noi e ricevi tutto quello che ti serve per arrivare.',
    steps: [
      ['Scegli le date', 'Indica date e numero di ospiti: bastano pochi secondi.'],
      ['Ricevi la nostra risposta', 'Controlliamo la disponibilità e ti rispondiamo via email entro '],
      ['Arriva e rilassati', 'Prima del soggiorno ti mandiamo le istruzioni per il check-in.'],
    ],
    platEyebrow: 'Prenota dove preferisci', platH: 'Ci trovi anche su Booking.com e Airbnb.', platLead: 'Stesso appartamento, stessa accoglienza. Scegli la piattaforma che usi già e leggi lì tutte le recensioni degli ospiti.',
    direct: 'Prenota direttamente', directNote: ['Contatto diretto con l’host,', 'senza intermediari.'], reviews: 'recensioni', listing: 'Vedi l’annuncio',
    newsEyebrow: 'Dal blog', newsH: 'Vivere Perugia, prima di arrivare.',
    finalEyebrow: 'Il tuo soggiorno', finalH: 'Il tuo appartamento a Perugia ti aspetta.', finalP: 'Scegli le date e verifica la disponibilità: ti rispondiamo entro ', waQ: 'Domande? Scrivici su WhatsApp',
  },
  en: {
    pill: 'An apartment for 4 in the historic centre',
    h1: 'Perugia starts right outside your door.',
    sub: 'A two-bedroom apartment a few steps from Corso Vannucci. Book directly with us, no middlemen.',
    rated: (b: string, a: string) => `Rated ${b}/10 on Booking.com and ${a}/5 on Airbnb`,
    assure: ['Direct booking, no commission', 'Reply within '],
    perks: [
      ['pin', 'In the historic centre', 'Everything on foot: squares, museums, restaurants.'],
      ['park', 'Parking nearby', 'A car park a few minutes away.'],
      ['whatsapp', 'Always reachable', 'WhatsApp support during your stay.'],
      ['sparkle', 'Cared for in every detail', 'Quality linen, Wi-Fi and toiletries.'],
    ],
    roomsEyebrow: 'The apartment', roomsH: 'One apartment, two moods.', roomsLead: 'Two bedrooms in one apartment all to yourself: one bright, with a whirlpool tub; one in the deep blue of Perugia’s night.', bedsK: 'Made up of', see: 'Discover the apartment',
    locEyebrow: 'The location', locH: 'Step outside and you’re in the centre.', locLead: 'Lanes, squares, food and music: a Perugia to enjoy on foot, without thinking about the car.',
    mosaic: ['The lanes', 'Umbria Jazz', 'Umbrian food', 'Eurochocolate'],
    revEyebrow: 'What guests say', revText: (n: number) => `Average of ${n} reviews on Booking.com. Read what our guests say.`,
    howEyebrow: 'How it works', howH: 'Ask in a minute.', howLead: 'No middlemen: book with us and get everything you need to arrive.',
    steps: [
      ['Choose your dates', 'Tell us your dates and number of guests: it takes seconds.'],
      ['Get our reply', 'We check availability and reply by email within '],
      ['Arrive and relax', 'Before your stay we send you the check-in instructions.'],
    ],
    platEyebrow: 'Book where you prefer', platH: 'You’ll also find us on Booking.com and Airbnb.', platLead: 'Same apartment, same welcome. Choose the platform you already use and read all guest reviews there.',
    direct: 'Book direct', directNote: ['Talk directly to the host,', 'no middlemen.'], reviews: 'reviews', listing: 'See the listing',
    newsEyebrow: 'From the blog', newsH: 'Live Perugia before you arrive.',
    finalEyebrow: 'Your stay', finalH: 'Your apartment in Perugia is waiting.', finalP: 'Choose your dates and check availability: we reply within ', waQ: 'Questions? Message us on WhatsApp',
  },
};

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getUI(locale);
  const c = C[locale];
  const rt = site.replyTime[locale];
  const wa = waLink();
  const r = site.ratings;
  const contact = path.contact(locale);
  const mosaic = ['/img/vicoli.webp', '/img/jazz-concerto.webp', '/img/tartufo.webp', '/img/blog-cioccolato.webp'];

  return (
    <div className="ap" id="top">
      <a className="skip" href="#camere">{locale === 'it' ? 'Vai al contenuto' : 'Skip to content'}</a>
      <div className="hero-frame">
        <section className="hero" aria-label={c.pill}>
          <img src="/img/hero-perugia.webp" alt={locale === 'it' ? 'I tetti del centro storico di Perugia al tramonto' : 'The rooftops of Perugia’s old town at sunset'} fetchPriority="high" />
          <div className="shade" />
          <Nav locale={locale} variant="glass" active="home" />
          <div className="hero-body">
            <div className="hero-copy">
              <span className="pill"><span className="d" />{c.pill}</span>
              <h1 className="h-hero">{c.h1}</h1>
              <p className="hero-sub">{c.sub}</p>
              <div className="trust"><Stars /><span>{c.rated(r.booking.score, r.airbnb.score)}</span></div>
            </div>
            <BookingBar locale={locale} />
            <div className="assure">
              <span><Icon name="check" />{c.assure[0]}</span>
              <span><Icon name="check" />{c.assure[1]}{rt}</span>
            </div>
          </div>
        </section>
      </div>

      <div className="wrap">
        <section className="perks" aria-label={c.roomsEyebrow}>
          {c.perks.map(([ic, h, p]) => (
            <div className="perk" key={h}><span className="ic"><Icon name={ic} /></span><div><h3>{h}</h3><p>{p}</p></div></div>
          ))}
        </section>

        <section className="sec" id="camere">
          <div className="head">
            <div className="t"><span className="eyebrow">{c.roomsEyebrow}</span><h2 className="h2">{c.roomsH}</h2></div>
            <p className="lead">{c.roomsLead}</p>
          </div>
          <div className="apt">
            <div className="apt-photos">
              <Link href={path.apartment(locale)}>
                <img src="/img/raffaello-card.webp" alt="Camera Raffaello" loading="lazy" />
                <span className="price-chip">{t.from} <b>{A.price} €</b> {t.perNight}</span>
                <span className="lbl">Camera Raffaello</span>
              </Link>
              <Link href={path.apartment(locale)}><img src="/img/bacio-card.webp" alt="Camera Bacio" loading="lazy" /><span className="lbl">Camera Bacio</span></Link>
              <Link href={path.apartment(locale)}><img src="/img/raffaello-3.webp" alt="" loading="lazy" /></Link>
            </div>
            <div className="apt-info">
              <h3>{A.name}</h3>
              <p className="desc">{A.short[locale]}</p>
              <div className="specs">{A.specs.map((s) => <span className="spec" key={s.label.it}><Icon name={s.icon} />{s.label[locale]}</span>)}</div>
              <div className="apt-beds">
                {A.bedrooms.map((b) => <div key={b.name}><Icon name={b.name.includes('Raffaello') ? 'bath' : 'moon'} /><p><b>{b.name}</b><span>{b.text[locale]}</span></p></div>)}
              </div>
              <div className="act">
                <span className="p">{t.from} <b>{A.price} €</b> {t.perNight}</span>
                <span className="b">
                  <Link className="btn btn-ghost" href={path.apartment(locale)}>{t.details}</Link>
                  <Link className="btn btn-primary" href={contact}><span className="dot" />{t.book}</Link>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="loc" id="posizione">
          <div className="t">
            <span className="eyebrow">{c.locEyebrow}</span>
            <h2 className="h2">{c.locH}</h2>
            <p className="lead">{c.locLead}</p>
            <div className="dist">{distances.map((d) => <div key={d.place}><span>{d.place}</span><span>{d.min} {t.walk}</span></div>)}</div>
          </div>
          <div className="mosaic">
            {['a', 'b', 'c', 'd'].map((k, i) => (
              <div className={k} key={k}><img src={mosaic[i]} alt={c.mosaic[i]} loading="lazy" /><span>{c.mosaic[i]}</span></div>
            ))}
          </div>
          <p className="swipe"><Icon name="arrow" />{t.swipePlaces}</p>
        </section>

        <section className="sec" id="recensioni">
          <div className="rev">
            <div className="score">
              <span className="eyebrow">{c.revEyebrow}</span>
              <span className="n">{r.booking.score}</span>
              <Stars />
              <p>{c.revText(r.booking.count)}</p>
            </div>
            <div className="quotes">
              {reviews.map((q, i) => (
                <figure className={i === 0 ? 'q big' : 'q'} style={{ margin: 0 }} key={q.name}>
                  <blockquote>“{q.text[locale]}”</blockquote>
                  <figcaption className="who"><span className="av">{q.initials}</span><span>{q.name}<small>{t.guest}</small></span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="info" style={{ paddingTop: 0 }}>
          <div className="head">
            <div className="t"><span className="eyebrow">{c.howEyebrow}</span><h2 className="h2">{c.howH}</h2></div>
            <p className="lead">{c.howLead}</p>
          </div>
          <div className="steps">
            {c.steps.map(([h, p], i) => (
              <div className="step" key={h}><span className="k">{i + 1}</span><h3>{h}</h3><p>{p}{i === 1 ? `${rt}.` : ''}</p></div>
            ))}
          </div>
        </section>

        <section className="plat" style={{ marginBottom: 112 }} id="piattaforme" aria-label={c.platEyebrow}>
          <div className="t">
            <span className="eyebrow">{c.platEyebrow}</span>
            <h2 className="h2">{c.platH}</h2>
            <p className="lead">{c.platLead}</p>
            <div className="direct"><Link className="btn btn-primary" href={contact}><span className="dot" />{c.direct}</Link><span>{c.directNote[0]}<br />{c.directNote[1]}</span></div>
          </div>
          <div className="ptiles">
            {[
              { href: site.bookingUrl, logo: '/img/logo-booking.png', name: 'Booking.com', ...r.booking },
              { href: site.airbnbUrl, logo: '/img/logo-airbnb.webp', name: 'Airbnb', ...r.airbnb },
            ].map((p) => (
              <a className="pt" key={p.name} href={p.href || '#'} target={p.href ? '_blank' : undefined} rel="noopener">
                <span className="top"><img src={p.logo} alt={p.name} /><span className="ext"><Icon name="ext" /></span></span>
                <span className="score"><b>{p.score}</b><span>/ {p.of}</span></span>
                <span className="foot2"><span className="n">{p.count} {c.reviews}</span><span className="go">{c.listing}<Icon name="arrow" /></span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="sec news-sec" id="news" style={{ paddingTop: 0 }}>
          <div className="head">
            <div className="t"><span className="eyebrow">{c.newsEyebrow}</span><h2 className="h2">{c.newsH}</h2></div>
            <Link className="btn btn-ghost" href={path.blog(locale)}>{t.allArticles}</Link>
          </div>
          <div className="news">{posts.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} locale={locale} />)}</div>
          <p className="swipe"><Icon name="arrow" />{t.swipePosts}</p>
        </section>

        <section className="final" aria-label={c.finalH}>
          <img src="/img/raffaello-1.webp" alt="" loading="lazy" />
          <div className="shade" />
          <div className="in">
            <span className="eyebrow" style={{ color: '#C9D3E6' }}>{c.finalEyebrow}</span>
            <h2 className="h2">{c.finalH}</h2>
            <p>{c.finalP}{rt}.</p>
            <div className="row">
              <Link className="btn btn-light" href={contact}><span className="dot" />{t.requestAvailability}</Link>
              {wa && <a className="wa" href={wa} target="_blank" rel="noopener"><Icon name="chat" />{c.waQ}</a>}
            </div>
          </div>
        </section>

        <Footer locale={locale} />
      </div>

      <div className="sticky">
        <span className="p">{t.startingFrom}<b>{A.price} € {t.perNight}</b></span>
        <Link className="btn btn-primary" href={contact}><span className="dot" />{t.requestAvailability}</Link>
      </div>
    </div>
  );
}
