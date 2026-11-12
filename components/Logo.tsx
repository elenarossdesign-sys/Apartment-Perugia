import Link from 'next/link';

export default function Logo({ href, dot = '#C9D3E6', onClick }: { href: string; dot?: string; onClick?: () => void }) {
  return (
    <Link className="logo" href={href} aria-label="Apartment Perugia" onClick={onClick}>
      <svg viewBox="0 0 100 120" aria-hidden="true">
        <path d="M20 116 V60 A30 30 0 0 1 80 60 V116" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        <path d="M8 116 V60 A42 42 0 0 1 92 60 V116" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
        <path d="M24 45 L13.6 39 M35 34 L29 23.6 M46.3 30.2 L44.9 18.3 M53.7 30.2 L55.1 18.3 M65 34 L71 23.6 M76 45 L86.4 39" fill="none" stroke="currentColor" strokeWidth="5" />
        <circle cx="50" cy="100" r="9" fill={dot} />
      </svg>
      <span className="w">
        <span className="w1">APARTMENT</span>
        <span className="w2">PERUGIA</span>
      </span>
    </Link>
  );
}
