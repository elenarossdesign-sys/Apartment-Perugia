const P: Record<string, string> = {
  guests: '<circle cx="9" cy="8" r="3.25"/><path d="M3 19.5a6 6 0 0 1 12 0"/><circle cx="16.5" cy="9" r="2.5"/><path d="M15.5 14.2A5 5 0 0 1 21 19.5"/>',
  bed: '<path d="M3 5v14M3 9h7v6M10 11h8a3 3 0 0 1 3 3v5M3 15h18"/>',
  size: '<path d="M4 4h16v16H4zM4 9h5M9 4v16"/>',
  bath: '<path d="M4 12h16v2.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14.5z"/><path d="M6 12V6.5a2 2 0 0 1 3.6-1.2M7.5 19l-1 1.5M16.5 19l1 1.5"/>',
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0"/><circle cx="12" cy="18.5" r="1"/>',
  pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>',
  chat: '<path d="M4.5 19.5l1.2-3.6A7.5 7.5 0 1 1 8.4 18.6z"/>',
  sun: '<circle cx="12" cy="12" r="3.75"/><path d="M12 2.75v2M12 19.25v2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M2.75 12h2M19.25 12h2M5.5 18.5l1.4-1.4M17.1 6.9l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  snow: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9"/>',
  towel: '<path d="M6 4h12v16H6zM6 8h12M10 12h4"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/>',
  check: '<circle cx="12" cy="12" r="8.5"/><path d="M8.5 12.2l2.4 2.4 4.6-4.8"/>',
  tick: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  back: '<path d="M19 12H5M10 7l-5 5 5 5"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  left: '<path d="M15 6l-6 6 6 6"/>',
  right: '<path d="M9 6l6 6-6 6"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>',
  park: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 16.5v-9h3a2.6 2.6 0 0 1 0 5.2h-3"/>',
  whatsapp: '<path d="M4.5 19.5l1.2-3.6A7.5 7.5 0 1 1 8.4 18.6z"/><path d="M9.3 9.6c.2 1.9 2.6 4.4 4.7 4.8l1-1-1.6-1-.7.6c-.8-.4-1.6-1.2-2-2l.6-.7-1-1.6z"/>',
  sparkle: '<path d="M11 4.5l1.7 4.3 4.3 1.7-4.3 1.7L11 16.5l-1.7-4.3L5 10.5l4.3-1.7z"/><path d="M18 3.5v3.5M16.25 5.25h3.5"/>',
  home: '<path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5M10 20v-5h4v5"/>',
  kitchen: '<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M4 8h16M7.5 5.75h.01M10.5 5.75h.01"/><rect x="7" y="11" width="10" height="6.5" rx="1"/>',
  shower: '<path d="M5 20V8a4 4 0 0 1 8 0"/><path d="M10 8h6M12 11v.01M15 11v.01M18 11v.01M13.5 14v.01M16.5 14v.01M15 17v.01"/>',
  city: '<path d="M3.5 20.5h17M5 20.5V9l5-3v14.5M10 20.5V4h6v16.5M16 10h3.5v10.5"/><path d="M12.5 7.5h1M12.5 10.5h1M12.5 13.5h1M7 11.5h1M7 14.5h1"/>',
  landmark: '<path d="M3.5 9L12 4l8.5 5M4 20.5h16M5.5 18h13M7 11v7M10.3 11v7M13.7 11v7M17 11v7M5 9.5h14"/>',
  tv: '<rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8.5 20h7M12 16.5V20"/>',
  quiet: '<path d="M4 9.5h3l4.5-4v13L7 14.5H4z"/><path d="M15.5 9.5l5 5M20.5 9.5l-5 5"/>',
  coffee: '<path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16M8.5 3.5v2.5M12 3.5v2.5M4 21h13"/>',
  ext: '<path d="M14 5h5v5M19 5l-8 8M17 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 18.5v-10A1.5 1.5 0 0 1 5.5 7H10"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  music: '<path d="M9 18V5.5l11-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3z"/>',
  lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>',
  bank: '<path d="M3.5 9L12 4l8.5 5M4 20.5h16M5.5 18h13M7 11v7M10.3 11v7M13.7 11v7M17 11v7M5 9.5h14"/>',
  ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.75"/><circle cx="17.1" cy="6.9" r="0.6"/>',
  fb: '<path d="M14 8.5h2V5.5h-2.2A3.3 3.3 0 0 0 10.5 8.8V11H8.5v3h2v6.5h3V14h2.3l.5-3h-2.8V9.2c0-.4.3-.7.7-.7z"/>',
};

export default function Icon({ name, className = 'ico', style }: { name: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: P[name] || '' }} />
  );
}

const STAR = '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>';
export function Stars() {
  return (
    <span className="stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: STAR }} />
      ))}
    </span>
  );
}
