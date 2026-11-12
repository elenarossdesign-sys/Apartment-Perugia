import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="ap" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center', padding: 24 }}>
      <div style={{ display: 'grid', gap: 16 }}>
        <h1 className="h2">Pagina non trovata</h1>
        <Link className="btn btn-primary" href="/it">Torna alla home</Link>
      </div>
    </div>
  );
}
