import Link from 'next/link';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Logo from '@/components/Logo';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
import { path, type Locale } from '@/lib/i18n';
import { site, waLink } from '@/lib/site';

const C = {
  it: { title: 'Scrivici', lead: 'Per prenotare o per qualsiasi domanda: ti rispondiamo noi, personalmente.', back: 'Torna al sito', help: 'Serve aiuto?', how: 'COME SI PRENOTA',
    s: [['mail', 'Ci scrivi', 'Ti rispondiamo entro {t} con disponibilità e proposta.'], ['bank', 'Acconto del 30%', 'Con bonifico, per confermare la prenotazione.'], ['cal', 'Saldo', 'Con bonifico, qualche giorno prima dell’arrivo.']] },
  en: { title: 'Contact us', lead: 'To book or for any question: we reply personally.', back: 'Back to the website', help: 'Need help?', how: 'HOW TO BOOK',
    s: [['mail', 'Write to us', 'We reply within {t} with availability and an offer.'], ['bank', '30% deposit', 'By bank transfer, to confirm the booking.'], ['cal', 'Balance', 'By bank transfer, a few days before arrival.']] },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: C[locale].title, description: C[locale].lead, alternates: { languages: { it: path.contact('it'), en: path.contact('en') } } };
}

export default async function Contact({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const c = C[locale];
  const wa = waLink();
  return (
    <div className="ap pg-contact">
      <header className="rnav">
        <Logo href={path.home(locale)} dot="#3E5A9A" />
        {wa && <div className="help"><span>{c.help}</span><a href={wa} target="_blank" rel="noopener"><Icon name="chat" />WhatsApp</a></div>}
      </header>
      <main className="rq-page simple">
        <div className="rq-wrap">
          <Link className="backl" href={path.home(locale)}><Icon name="back" />{c.back}</Link>
          <div className="rq-title"><h1>{c.title}</h1><p>{c.lead}</p></div>
          <div className="rq-grid">
            <div>
              <Suspense fallback={null}><ContactForm locale={locale} /></Suspense>
            </div>
            <aside className="side">
              <div className="how"><h4>{c.how}</h4><ol>
                {c.s.map(([ic, h, p]) => (
                  <li key={h}><span className="i"><Icon name={ic} /></span><span><b>{h}</b>{p.replace('{t}', site.replyTime[locale])}</span></li>
                ))}
              </ol></div>
            </aside>
          </div>
        </div>
      </main>
      <footer className="minifoot"><span>© {new Date().getFullYear()} Apartment Perugia · CIN {site.cin}</span><span>Privacy policy · Cookie policy</span></footer>
    </div>
  );
}
