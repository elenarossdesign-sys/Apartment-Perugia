'use client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import Icon from './Icon';
import { getUI, path, type Locale } from '@/lib/i18n';

const iso = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

export default function BookingBar({ locale }: { locale: Locale }) {
  const t = getUI(locale);
  const b = t.bar;
  const router = useRouter();
  const [arrive, setArrive] = useState('');
  const [depart, setDepart] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [room, setRoom] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');

  const today = useMemo(() => iso(new Date()), []);
  const minDepart = useMemo(() => {
    if (!arrive) return today;
    const d = new Date(arrive + 'T12:00:00');
    d.setDate(d.getDate() + 1);
    return iso(d);
  }, [arrive, today]);
  const total = adults + kids;
  const guestsLabel = `${adults} ${adults === 1 ? b.adult1 : b.adultN}${kids ? `, ${kids} ${kids === 1 ? b.kid1 : b.kidN}` : ''}`;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (arrive && depart && depart <= arrive) { setError(b.errDates); return; }
    const q = new URLSearchParams();
    if (arrive) q.set('arrivo', arrive);
    if (depart) q.set('partenza', depart);
    q.set('ospiti', guestsLabel);
    if (room) q.set('camera', room);
    router.push(`${path.contact(locale)}?${q.toString()}`);
  }

  return (
    <>
      <form className="book" id="prenota" aria-label={t.checkAvailability} onSubmit={submit} noValidate>
        <label className="bf">
          <span className="l"><Icon name="cal" />{b.arrive}</span>
          <input className="v in" type="date" value={arrive} min={today} onChange={(e) => { setArrive(e.target.value); setError(''); if (depart && depart <= e.target.value) setDepart(''); }} />
        </label>
        <label className="bf">
          <span className="l"><Icon name="cal" />{b.depart}</span>
          <input className="v in" type="date" value={depart} min={minDepart} onChange={(e) => { setDepart(e.target.value); setError(''); }} />
        </label>
        <div className="bf gwrap">
          <button className="gbtn" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="l"><Icon name="guests" />{b.guests}</span>
            <span className="v">{guestsLabel}</span>
          </button>
          {open && (
            <div className="gpop" role="group" aria-label={b.guests}>
              <div className="gp-row">
                <span><b>{b.adults}</b><small>{b.adultsSub}</small></span>
                <span className="stp">
                  <button type="button" className="sb" aria-label="−" disabled={adults <= 1} onClick={() => setAdults(adults - 1)}>−</button>
                  <output aria-live="polite">{adults}</output>
                  <button type="button" className="sb" aria-label="+" disabled={total >= 4} onClick={() => setAdults(adults + 1)}>+</button>
                </span>
              </div>
              <div className="gp-row">
                <span><b>{b.kids}</b><small>{b.kidsSub}</small></span>
                <span className="stp">
                  <button type="button" className="sb" aria-label="−" disabled={kids <= 0} onClick={() => setKids(kids - 1)}>−</button>
                  <output aria-live="polite">{kids}</output>
                  <button type="button" className="sb" aria-label="+" disabled={total >= 4} onClick={() => setKids(kids + 1)}>+</button>
                </span>
              </div>
              <p className="gnote">{b.perRoom}</p>
              <button type="button" className="btn btn-primary gdone" onClick={() => setOpen(false)}>{b.done}</button>
            </div>
          )}
        </div>
        <label className="bf">
          <span className="l"><Icon name="bed" />{b.room}</span>
          <select className="v in sel" value={room} onChange={(e) => setRoom(e.target.value)}>
            <option value="">{b.allRooms}</option>
            <option value="Camera Raffaello">Camera Raffaello</option>
            <option value="Camera Bacio">Camera Bacio</option>
          </select>
        </label>
        <button className="btn btn-primary" type="submit"><span className="dot" />{t.checkAvailability}</button>
      </form>
      {error && <p className="barerr" role="alert">{error}</p>}
    </>
  );
}
