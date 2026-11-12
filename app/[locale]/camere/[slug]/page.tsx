import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Icon, { Stars } from '@/components/Icon';
import { getUI, locales, path, type Locale } from '@/lib/i18n';
import { distances, faqs, getRoom, reviews, rooms } from '@/lib/content';
import { site, waLink } from '@/lib/site';

export function generateStaticParams() {
  return locales.flatMap((locale) => rooms.map((r) => ({ locale, slug: r.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const room = getRoom(slug);
  if (!room) return {};
  return {
    title: room.name,
    description: room.short[locale],
    alternates: { languages: { it: path.room('it', slug), en: path.room('en', slug) } },
    openGraph: { images: [room.card] },
  };
}

const C = {
  it: {
    room: 'Camera', rooms: 'Camere', center: 'Centro storico, Perugia', theRoom: 'La camera', inRoom: 'Cosa trovi in camera',
    revAvg: (n: number) => `Media di ${n} recensioni su Booking.com`, revSub: 'Gli ospiti apprezzano posizione, spazi e cura.',
    where: 'Dove si trova', openMaps: 'Apri in Google Maps', mapsLabel: 'Apri la posizione in Google Maps',
    know: 'Da sapere prima di prenotare', rules: 'Regole della casa', cin: 'CIN',
    notes: ['Prenotazione diretta con l’host', 'Risposta via email', 'Istruzioni di check-in prima dell’arrivo'],
    questions: 'Hai domande?', waLink: 'Scrivici su WhatsApp', otherPlat: 'Preferisci un’altra piattaforma?',
    also: 'Scopri anche', seeRoom: 'Vedi la camera', addDate: 'Aggiungi data', guests2: '2 adulti',
  },
  en: {
    room: 'Room', rooms: 'Rooms', center: 'Historic centre, Perugia', theRoom: 'The room', inRoom: 'What’s in the room',
    revAvg: (n: number) => `Average of ${n} reviews on Booking.com`, revSub: 'Guests love the location, the space and the care.',
    where: 'Where it is', openMaps: 'Open in Google Maps', mapsLabel: 'Open the location in Google Maps',
    know: 'Good to know before booking', rules: 'House rules', cin: 'CIN',
    notes: ['Book directly with the host', 'Reply by email', 'Check-in instructions before arrival'],
    questions: 'Any questions?', waLink: 'Message us on WhatsApp', otherPlat: 'Prefer another platform?',
    also: 'Discover also', seeRoom: 'See the room', addDate: 'Add date', guests2: '2 adults',
  },
};

export default async function RoomPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();
  const other = rooms.find((r) => r.slug !== room.slug)!;
  const t = getUI(locale);
  const c = C[locale];
  const r = site.ratings.booking;
  const wa = waLink();
  const ask = `${path.contact(locale)}?camera=${encodeURIComponent(room.name)}`;

  return (
    <div className="ap">
      <Nav locale={locale} variant="light" />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={path.home(locale)}>{t.nav.home}</Link><span>/</span>
          <Link href={`${path.home(locale)}#camere`}>{c.rooms}</Link><span>/</span><span>{room.name}</span>
        </nav>
        <div className="rhead">
          <div className="t">
            <span className="eyebrow">{c.room} {room.num}</span>
            <h1>{room.name}</h1>
            <p className="sub">{room.sub[locale]}</p>
            <div className="rmeta"><Stars /><span>{r.score} · {r.count} {locale === 'it' ? 'recensioni' : 'reviews'}</span><span className="sep" /><span className="m"><Icon name="pin" />{c.center}</span></div>
          </div>
        </div>

        <Gallery locale={locale} images={room.gallery.map((g) => ({ src: g.src, alt: g.alt[locale] }))} />

        <div className="layout">
          <div className="rmain">
            <section className="blk first">
              <div className="quick">{room.specs.map((s) => <div key={s.icon + s.label.it}><Icon name={s.icon} /><span>{s.label[locale]}</span></div>)}</div>
              <div className="hl">{room.highlights.map((h) => <div key={h.title.it}><span className="ic"><Icon name={h.icon} /></span><div><h3>{h.title[locale]}</h3><p>{h.text[locale]}</p></div></div>)}</div>
            </section>
            <section className="blk"><h2>{c.theRoom}</h2><div className="prose">{room.description.map((p) => <p key={p.it}>{p[locale]}</p>)}</div></section>
            <section className="blk"><h2>{c.inRoom}</h2><div className="am">{room.amenities.map((a) => <span key={a.label.it}><Icon name={a.icon} />{a.label[locale]}</span>)}</div></section>
            <section className="blk" id="recensioni">
              <div className="rvh"><span className="n">{r.score}</span><p>{c.revAvg(r.count)}<br />{c.revSub}</p></div>
              <div className="rv">
                {[reviews[0], reviews[2]].map((q) => (
                  <figure className="q" style={{ margin: 0 }} key={q.name}><blockquote>“{q.text[locale]}”</blockquote><figcaption className="who"><span className="av">{q.initials}</span><span>{q.name}<small>{t.guest}</small></span></figcaption></figure>
                ))}
              </div>
            </section>
            <section className="blk" id="posizione">
              <h2>{c.where}</h2>
              <div className="where">
                <a className="map" href={site.mapsUrl} target="_blank" rel="noopener" aria-label={c.mapsLabel}>
                  <img src="/img/vicoli.webp" alt="" loading="lazy" />
                  <span className="pinb"><Icon name="pin" />Apartment Perugia</span>
                  <span className="open">{c.openMaps}<Icon name="ext" /></span>
                </a>
                <div className="dist">{distances.map((d) => <div key={d.place}><span>{d.place}</span><span>{d.min} {t.walk}</span></div>)}</div>
              </div>
            </section>
            <section className="blk" id="info">
              <h2>{c.know}</h2>
              <div className="acc">
                {faqs.map((f, i) => (
                  <details key={f.q.it} open={i === 0}>
                    <summary>{f.q[locale]}<Icon name="chev" /></summary>
                    <p>{f.a[locale]}{f.q.it.startsWith('Imposta') ? ` ${c.cin}: ${site.cin}.` : ''}</p>
                  </details>
                ))}
                <details><summary>{c.rules}<Icon name="chev" /></summary><p>{room.houseRules[locale]}</p></details>
              </div>
            </section>
          </div>

          <aside className="bcard" id="prenota" aria-label={`${t.book} ${room.name}`}>
            <div className="pr"><span>{t.from} <b>{room.price} €</b> {t.perNight}</span><span className="r"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>{r.score}</span></div>
            <div className="bfields">
              <Link className="bf" href={ask} style={{ textDecoration: 'none', color: 'inherit' }}><span className="l">{t.bar.arrive}</span><span className="v ph">{c.addDate}</span></Link>
              <Link className="bf" href={ask} style={{ textDecoration: 'none', color: 'inherit' }}><span className="l">{t.bar.depart}</span><span className="v ph">{c.addDate}</span></Link>
              <Link className="bf full" href={ask} style={{ textDecoration: 'none', color: 'inherit' }}><span className="l">{t.bar.guests}</span><span className="v">{c.guests2}</span></Link>
            </div>
            <Link className="btn btn-primary" href={ask}><span className="dot" />{t.checkAvailability}</Link>
            <div className="bnote">{c.notes.map((n, i) => <span key={n}><Icon name={i === 2 ? 'key' : 'check'} />{n}</span>)}</div>
            {wa && <div className="bwa"><Icon name="chat" />{c.questions} <a href={wa} target="_blank" rel="noopener">{c.waLink}</a></div>}
            {(site.bookingUrl || site.airbnbUrl) && (
              <div className="botas"><span>{c.otherPlat}</span><div>
                {site.bookingUrl && <a href={site.bookingUrl} target="_blank" rel="noopener">Booking.com<Icon name="ext" /></a>}
                {site.airbnbUrl && <a href={site.airbnbUrl} target="_blank" rel="noopener">Airbnb<Icon name="ext" /></a>}
              </div></div>
            )}
          </aside>
        </div>

        <section className="other" aria-label={c.also}>
          <div className="media"><img src={other.card} alt={other.name} loading="lazy" /></div>
          <div className="in">
            <span className="eyebrow">{c.also}</span>
            <h2>{other.name}</h2>
            <p>{other.sub[locale]}</p>
            <div className="row"><span>{t.from} <b>{other.price} €</b> {t.perNight}</span><Link className="btn btn-primary" href={path.room(locale, other.slug)}><span className="dot" />{c.seeRoom}</Link></div>
          </div>
        </section>

        <Footer locale={locale} />
      </div>
      <div className="sticky">
        <span className="p">{t.startingFrom}<b>{room.price} € {t.perNight}</b></span>
        <Link className="btn btn-primary" href={ask}><span className="dot" />{t.checkAvailability}</Link>
      </div>
    </div>
  );
}
