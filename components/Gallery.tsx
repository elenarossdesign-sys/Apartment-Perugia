'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Icon from './Icon';

type Img = { src: string; alt: string };

export default function Gallery({ images, locale }: { images: Img[]; locale: 'it' | 'en' }) {
  const [i, setI] = useState<number | null>(null);
  const n = images.length;
  const L = locale === 'it'
    ? { all: 'Mostra tutte le foto', open: 'Apri la foto', close: 'Chiudi la galleria', prev: 'Foto precedente', next: 'Foto successiva', soon: '[Foto in arrivo]', go: 'Vai alla foto' }
    : { all: 'Show all photos', open: 'Open photo', close: 'Close gallery', prev: 'Previous photo', next: 'Next photo', soon: '[Photo coming soon]', go: 'Go to photo' };

  useEffect(() => {
    if (i === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setI(null);
      if (e.key === 'ArrowRight') setI((v) => (v === null ? v : Math.min(n - 1, v + 1)));
      if (e.key === 'ArrowLeft') setI((v) => (v === null ? v : Math.max(0, v - 1)));
    };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [i, n]);

  const tiles = Array.from({ length: 5 }, (_, k) => images[k] || null);
  return (
    <>
      <section className="gal" aria-label={L.all}>
        {tiles.map((img, k) =>
          img ? (
            <div className="g" key={k}>
              <button type="button" className="gbtn2" aria-label={`${L.open} ${k + 1}`} onClick={() => setI(k)}>
                <img src={img.src} alt={img.alt} loading={k === 0 ? 'eager' : 'lazy'} />
              </button>
              {k === 0 && <span className="count">1 / {n}</span>}
            </div>
          ) : (
            <div className="g" key={k}><div className="ph">{L.soon}</div></div>
          ),
        )}
        <button type="button" className="btn all" onClick={() => setI(0)}><Icon name="grid" />{L.all}</button>
      </section>
      {i !== null && createPortal(
        <div className="lb" role="dialog" aria-modal="true" aria-label={L.all}>
          <div className="lb-top"><span>{i + 1} / {n}</span><button className="lb-x" type="button" aria-label={L.close} onClick={() => setI(null)}><Icon name="x" /></button></div>
          <div className="lb-stage">
            <button className="lb-nav" type="button" aria-label={L.prev} disabled={i <= 0} onClick={() => setI(i - 1)}><Icon name="left" /></button>
            <img src={images[i].src} alt={images[i].alt} />
            <button className="lb-nav" type="button" aria-label={L.next} disabled={i >= n - 1} onClick={() => setI(i + 1)}><Icon name="right" /></button>
          </div>
          <div>
            <p className="lb-cap">{images[i].alt}</p>
            <div className="lb-thumbs">
              {images.map((im, k) => (
                <button key={k} type="button" className={k === i ? 'on' : ''} aria-label={`${L.go} ${k + 1}`} onClick={() => setI(k)}><img src={im.src} alt="" /></button>
              ))}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
