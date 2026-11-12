'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import Icon from './Icon';
import { path, type Locale } from '@/lib/i18n';
import { site, waLink } from '@/lib/site';

/*
 * Invio del modulo.
 * Collega UNO dei due servizi impostando la variabile d'ambiente su Vercel:
 *  - Web3Forms:  NEXT_PUBLIC_WEB3FORMS_KEY = la "Access Key" ricevuta via email
 *  - Formspree:  NEXT_PUBLIC_FORMSPREE_ID  = l'ID del modulo (es. "xyzabcd")
 * Le email arrivano all'indirizzo con cui ti sei registrata al servizio.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '';
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';

const T = {
  it: {
    name: 'Nome e cognome', email: 'Email', phone: 'Telefono', room: 'Camera', arrive: 'Arrivo', depart: 'Partenza', msg: 'Messaggio',
    optional: '(facoltativo)', any: 'Indifferente', placeholder: 'Scrivi qui la tua richiesta: date, numero di ospiti, domande…',
    privacy1: 'Inviando il messaggio dichiari di aver letto l’', privacy2: 'informativa privacy', privacy3: '. Useremo i tuoi dati solo per risponderti.',
    send: 'Invia messaggio', sending: 'Invio in corso…',
    eName: 'Inserisci nome e cognome.', eEmail: 'Inserisci la tua email.', eEmailBad: 'Controlla l’indirizzo email.', eDates: 'La partenza deve essere dopo l’arrivo.', eMsg: 'Scrivi il tuo messaggio.',
    fail: 'Non siamo riusciti a inviare il messaggio. Riprova tra poco oppure scrivici a', notReady: 'Il modulo non è ancora collegato al servizio email (manca la chiave nelle impostazioni). Nel frattempo scrivici a',
    okTitle: 'Messaggio inviato, grazie', okText1: 'Ti rispondiamo entro', okText2: 'all’indirizzo', home: 'Torna alla home', wa: 'Scrivici su WhatsApp',
    subject: 'Nuova richiesta dal sito', guests: 'Ospiti',
  },
  en: {
    name: 'Full name', email: 'Email', phone: 'Phone', room: 'Room', arrive: 'Check-in', depart: 'Check-out', msg: 'Message',
    optional: '(optional)', any: 'No preference', placeholder: 'Write your request here: dates, number of guests, questions…',
    privacy1: 'By sending this message you confirm you have read the ', privacy2: 'privacy notice', privacy3: '. We only use your details to reply to you.',
    send: 'Send message', sending: 'Sending…',
    eName: 'Please enter your name.', eEmail: 'Please enter your email.', eEmailBad: 'Please check your email address.', eDates: 'Check-out must be after check-in.', eMsg: 'Please write your message.',
    fail: 'We couldn’t send your message. Please try again shortly or email us at', notReady: 'The form is not connected to the email service yet. In the meantime, email us at',
    okTitle: 'Message sent, thank you', okText1: 'We’ll reply within', okText2: 'at', home: 'Back to home', wa: 'Message us on WhatsApp',
    subject: 'New request from the website', guests: 'Guests',
  },
};

const iso = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = T[locale];
  const sp = useSearchParams();
  const [f, setF] = useState({
    name: '', email: '', phone: '',
    room: sp.get('camera') || '',
    arrive: sp.get('arrivo') || '',
    depart: sp.get('partenza') || '',
    msg: '',
    hp: '',
  });
  const guests = sp.get('ospiti') || '';
  const [err, setErr] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'fail' | 'notready'>('idle');
  const today = useMemo(() => iso(new Date()), []);
  const minDepart = useMemo(() => {
    if (!f.arrive) return today;
    const d = new Date(f.arrive + 'T12:00:00'); d.setDate(d.getDate() + 1); return iso(d);
  }, [f.arrive, today]);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const v = e.target.value;
    setF((p) => ({ ...p, [k]: v, ...(k === 'arrive' && p.depart && p.depart <= v ? { depart: '' } : {}) }));
    setErr((p) => { const n = { ...p }; delete n[k]; return n; });
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const er: Record<string, string> = {};
    if (!f.name.trim()) er.name = t.eName;
    if (!f.email.trim()) er.email = t.eEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) er.email = t.eEmailBad;
    if (f.arrive && f.depart && f.depart <= f.arrive) er.depart = t.eDates;
    if (!f.msg.trim()) er.msg = t.eMsg;
    setErr(er);
    if (Object.keys(er).length) return;
    if (f.hp) { setStatus('done'); return; } // bot

    const data = {
      [locale === 'it' ? 'Nome' : 'Name']: f.name.trim(),
      Email: f.email.trim(),
      [locale === 'it' ? 'Telefono' : 'Phone']: f.phone.trim() || '—',
      [locale === 'it' ? 'Camera' : 'Room']: f.room || t.any,
      [locale === 'it' ? 'Arrivo' : 'Check-in']: f.arrive || '—',
      [locale === 'it' ? 'Partenza' : 'Check-out']: f.depart || '—',
      ...(guests ? { [t.guests]: guests } : {}),
      [locale === 'it' ? 'Messaggio' : 'Message']: f.msg.trim(),
      Lingua: locale.toUpperCase(),
    };
    const subject = `Nuova richiesta (${locale.toUpperCase()}) – ${f.name.trim()}${f.arrive ? ` – ${f.arrive}` : ''}`;

    if (!WEB3FORMS_KEY && !FORMSPREE_ID) { setStatus('notready'); return; }
    setStatus('sending');
    try {
      let ok = false;
      if (WEB3FORMS_KEY) {
        const r = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, from_name: 'Apartment Perugia – sito', replyto: f.email.trim(), email: f.email.trim(), name: f.name.trim(), ...data }),
        });
        const j = await r.json().catch(() => ({}));
        ok = r.ok && j.success !== false;
      } else {
        const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ _subject: subject, email: f.email.trim(), ...data }),
        });
        ok = r.ok;
      }
      setStatus(ok ? 'done' : 'fail');
    } catch {
      setStatus('fail');
    }
  }

  const cls = (k: string) => `fld${err[k] ? ' err' : ''}`;
  const E = ({ k }: { k: string }) => (err[k] ? <span className="ferr" id={`e-${k}`}>{err[k]}</span> : null);
  const wa = waLink();

  if (status === 'done') {
    return (
      <div className="card done" role="status">
        <span className="okc"><Icon name="tick" /></span>
        <h2>{t.okTitle} {f.name.trim().split(' ')[0]}!</h2>
        <p>{t.okText1} {site.replyTime[locale]} {t.okText2} <b>{f.email.trim()}</b>.</p>
        <div className="row">
          <Link className="btn btn-primary" href={path.home(locale)}>{t.home}</Link>
          {wa && <a className="btn btn-ghost" href={wa} target="_blank" rel="noopener"><Icon name="chat" />{t.wa}</a>}
        </div>
      </div>
    );
  }

  return (
    <form className="card" onSubmit={submit} noValidate aria-label={t.send}>
      <div className="g2">
        <div className={cls('name')}><label htmlFor="f-name">{t.name}</label><input id="f-name" className="control" type="text" autoComplete="name" value={f.name} onChange={set('name')} aria-invalid={!!err.name} aria-describedby={err.name ? 'e-name' : undefined} /><E k="name" /></div>
        <div className={cls('email')}><label htmlFor="f-email">{t.email}</label><input id="f-email" className="control" type="email" autoComplete="email" value={f.email} onChange={set('email')} aria-invalid={!!err.email} aria-describedby={err.email ? 'e-email' : undefined} /><E k="email" /></div>
      </div>
      <div className="g2">
        <div className="fld"><label htmlFor="f-phone">{t.phone} <span className="opt2">{t.optional}</span></label><input id="f-phone" className="control" type="tel" autoComplete="tel" placeholder="+39" value={f.phone} onChange={set('phone')} /></div>
        <div className="fld"><label htmlFor="f-room">{t.room} <span className="opt2">{t.optional}</span></label>
          <span className="selw"><select id="f-room" className="control" value={f.room} onChange={set('room')}><option value="">{t.any}</option><option value="Camera Raffaello">Camera Raffaello</option><option value="Camera Bacio">Camera Bacio</option></select><Icon name="chev" /></span>
        </div>
      </div>
      <div className="g2">
        <div className="fld"><label htmlFor="f-arrive">{t.arrive} <span className="opt2">{t.optional}</span></label><input id="f-arrive" className="control" type="date" min={today} value={f.arrive} onChange={set('arrive')} /></div>
        <div className={cls('depart')}><label htmlFor="f-depart">{t.depart} <span className="opt2">{t.optional}</span></label><input id="f-depart" className="control" type="date" min={minDepart} value={f.depart} onChange={set('depart')} /><E k="depart" /></div>
      </div>
      <div className={cls('msg')}><label htmlFor="f-msg">{t.msg}</label><textarea id="f-msg" className="control" rows={6} value={f.msg} onChange={set('msg')} placeholder={t.placeholder} aria-invalid={!!err.msg} /><E k="msg" /></div>
      <div className="hp" aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={f.hp} onChange={set('hp')} /></label></div>
      {(status === 'fail' || status === 'notready') && (
        <p className="form-status" role="alert">{status === 'fail' ? t.fail : t.notReady} {site.email}.</p>
      )}
      <div className="send">
        <p className="note">{t.privacy1}<a href={site.legal.privacy || '#'}>{t.privacy2}</a>{t.privacy3}</p>
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}><span className="dot" />{status === 'sending' ? t.sending : t.send}</button>
      </div>
    </form>
  );
}
