import Link from 'next/link';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Icon, { Stars } from '@/components/Icon';
import { getUI, path, type Locale } from '@/lib/i18n';
import { apartment as A, distances, faqs, reviews } from '@/lib/content';
import { site, waLink } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'L’appartamento' : 'The apartment',
    description: A.short[locale],
    alternates: { languages: { it: path.apartment('it'), en: path.apartment('en') } },
    openGraph: { images: [A.card] },
  };
}

const C = {
  it: {
    eyebrow: 'L’appartamento', center: 'Centro storico, Perugia', theApt: 'Un appartamento, due camere', inApt: 'Cosa trovi nell’appartamento',
    bedsLead: 'L’appartamento è composto da due camere da letto con letto matrimoniale, per un totale di 4 ospiti. Prenoti l’intero appartamento: entrambe le camere sono tue.',
    bed: 'CAMERA', revAvg: (n: number) => `Media di ${n} recensioni su Booking.com`, revSub: 'Gli ospiti apprezzano posizione, spazi e cura.',
    where: 'Dove si trova', openMaps: 'Apri in Google Maps', mapsLabel: 'Apri la posizione in Google Maps',
    know: 'Da sapere prima di prenotare', rules: 'Regole della casa', cin: 'CIN',
    notes: ['Intero appartamento, fino a 4 ospiti', 'Prenotazione diretta con l’host', 'Istruzioni di check-in prima dell’arrivo'],
    questions: 'Hai domande?', waLink: 'Scrivici su WhatsApp', otherPlat: 'Preferisci un’altra piattaforma?', addDate: 'Aggiungi data', guests: '2 adulti',
  },
  en: {
    eyebrow: 'The apartment', center: 'Historic centre, Perugia', theApt: 'One apartment, two bedrooms', inApt: 'What’s in the apartment',
    bedsLead: 'The apartment has two bedrooms, each with a double bed, for up to 4 guests. You book the entire apartment: both bedrooms are yours.',
    bed: 'BEDROOM', revAvg: (n: number) => `Average of ${n} reviews on Booking.com`, revSub: 'Guests love the location, the space and the care.',
    where: 'Where it is', openMaps: 'Open in Google Maps', mapsLabel: 'Open the location in Google Maps',
    know: 'Good to know before booking', rules: 'House rules', cin: 'CIN',
    notes: ['Entire apartment, up to 4 guests', 'Book directly with the host', 'Check-in instructions before arrival'],
    questions: 'Any questions?', waLink: 'Message us on WhatsApp', otherPlat: 'Prefer another platform?', addDate: 'Add date', guests: '2 adults',
  },
};

export default async function ApartmentPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getUI(locale);
  const c = C[locale];
  const r = site.ratings.booking;
  const wa = waLink();
  const ask = path.contact(locale);

  return (
    <div className="ap">
      <Nav locale={locale} variant="light" />
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href={path.home(locale)}>{t.nav.home}</Link><span>/</span><span>{c.eyebrow}</span>
        </nav>
        <div className="rhead">
          <div className="t">
            <span className="eyebrow">{c.eyebrow}</span>
            <h1>{A.name}</h1>
            <p className="sub">{A.sub[locale]}</p>
            <div className="rmeta"><Stars /><span>{r.score} · {r.count} {locale === 'it' ? 'recensioni' : 'reviews'}</span><span className="sep" /><span className="m"><Icon name="pin" />{c.center}</span></div>
          </div>
        </div>

        <Gallery locale={locale} images={A.gallery.map((g) => ({ src: g.src, alt: g.alt[locale] }))} />

        <div className="layout">
          <div className="rmain">
            <section className="blk first">
              <div className="quick">{A.specs.map((s) => <div key={s.label.it}><Icon name={s.icon} /><span>{s.label[locale]}</span></div>)}</div>
              <div className="hl">{A.highlights.map((h) => <div key={h.title.it}><span className="ic"><Icon name={h.icon} /></span><div><h3>{h.title[locale]}</h3><p>{h.text[locale]}</p></div></div>)}</div>
            </section>
            <section className="blk">
              <h2>{c.theApt}</h2>
              <div className="prose">{A.description.map((p) => <p key={p.it}>{p[locale]}</p>)}</div>
              <div className="beds">
                {A.bedrooms.map((b, i) => (
                  <article className="bedc" key={b.name}>
                    <div className="im"><img src={b.img} alt={b.name} loading="lazy" /></div>
                    <div className="tx">
                      <span className="k">{c.bed} {i + 1}</span>
                      <h3>{b.name}</h3>
                      <p>{b.text[locale]}</p>
                      <ul>{b.features.map((f) => <li key={f.it}>{f[locale]}</li>)}</ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>
            <section className="blk"><h2>{c.inApt}</h2><div className="am">{A.amenities.map((a) => <span key={a.label.it}><Icon name={a.icon} />{a.label[locale]}</span>)}</div></section>
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
                <details><summary>{c.rules}<Icon name="chev" /></summary><p>{A.houseRules[locale]}</p></details>
              </div>
            </section>
          </div>

          <aside className="bcard" id="prenota" aria-label={`${t.book} ${A.name}`}>
            <div className="pr"><span>{t.from} <b>{A.price} €</b> {t.perNight}</span><span className="r"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>{r.score}</span></div>
            <div className="bfields">
              <Link className="bf" href={ask} style={{ textDecoration: 'none', color: 'inherit' }}><span className="l">{t.bar.arrive}</span><span className="v ph">{c.addDate}</span></Link>
              <Link className="bf" href={ask} style={{ textDecoration: 'none', color: 'inherit' }}><span className="l">{t.bar.depart}</span><span className="v ph">{c.addDate}</span></Link>
              <Link className="bf full" href={ask} style={{ textDecoration: 'none', color: 'inherit' }}><span className="l">{t.bar.guests}</span><span className="v">{c.guests}</span></Link>
            </div>
            <Link className="btn btn-primary" href={ask}><span className="dot" />{t.checkAvailability}</Link>
            <div className="bnote">{c.notes.map((n, i) => <span key={n}><Icon name={i === 0 ? 'home' : i === 2 ? 'key' : 'check'} />{n}</span>)}</div>
            {wa && <div className="bwa"><Icon name="chat" />{c.questions} <a href={wa} target="_blank" rel="noopener">{c.waLink}</a></div>}
            {(site.bookingUrl || site.airbnbUrl) && (
              <div className="botas"><span>{c.otherPlat}</span><div>
                {site.bookingUrl && <a href={site.bookingUrl} target="_blank" rel="noopener">Booking.com<Icon name="ext" /></a>}
                {site.airbnbUrl && <a href={site.airbnbUrl} target="_blank" rel="noopener">Airbnb<Icon name="ext" /></a>}
              </div></div>
            )}
          </aside>
        </div>

        <Footer locale={locale} />
      </div>
      <div className="sticky">
        <span className="p">{t.startingFrom}<b>{A.price} € {t.perNight}</b></span>
        <Link className="btn btn-primary" href={ask}><span className="dot" />{t.checkAvailability}</Link>
      </div>
    </div>
  );
}
