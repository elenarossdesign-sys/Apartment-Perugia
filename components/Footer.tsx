import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { getUI, path, type Locale } from '@/lib/i18n';
import { site } from '@/lib/site';

export default function Footer({ locale }: { locale: Locale }) {
  const t = getUI(locale);
  const f = t.footer;
  const home = path.home(locale);
  return (
    <footer className="foot">
      <div className="top">
        <div className="brand">
          <Logo href={home} dot="#3E5A9A" />
          <p>{f.tagline}</p>
          <div className="socials">
            {site.instagram && <a href={site.instagram} aria-label="Instagram" target="_blank" rel="noopener"><Icon name="ig" className="" /></a>}
            {site.facebook && <a href={site.facebook} aria-label="Facebook" target="_blank" rel="noopener"><Icon name="fb" className="" /></a>}
          </div>
        </div>
        <div className="cols">
          <div className="col">
            <h4>{f.explore}</h4>
            <Link href={home}>{t.nav.home}</Link>
            <Link href={path.apartment(locale)}>{f.rooms}</Link>
            <Link href={path.blog(locale)}>{t.nav.perugia}</Link>
            <Link href={path.contact(locale)}>{t.nav.contact}</Link>
          </div>
          <div className="col">
            <h4>{f.discover}</h4>
            <Link href={path.blog(locale)}>{f.blog}</Link>
            <Link href={`${home}#info`}>{f.faq}</Link>
          </div>
          <div className="col">
            <h4>{f.contacts}</h4>
            <span>{site.email}</span>
            <span>{site.phone}</span>
            <span>{site.address}</span>
            <span>{site.cap}</span>
          </div>
        </div>
      </div>
      <div className="mark" aria-hidden="true">
        <svg className="word" viewBox="0 0 1000 128"><text x="0" y="122" fontSize="168" textLength="1000" lengthAdjust="spacingAndGlyphs">PERUGIA</text></svg>
        <div className="polaroid p1"><img src="/img/footer-perugia.webp" alt="" loading="lazy" /></div>
        <div className="polaroid p2"><img src="/img/tartufo.webp" alt="" loading="lazy" /></div>
      </div>
      <div className="rule" />
      <div className="legal">
        <span>© {new Date().getFullYear()} Apartment Perugia · CIN {site.cin}</span>
        <nav aria-label={locale === 'it' ? 'Note legali' : 'Legal'}>
          <a href={site.legal.privacy || '#'} className="iubenda-nostyle">{f.privacy}</a>
          <a href={site.legal.cookie || '#'} className="iubenda-nostyle">{f.cookie}</a>
          <a href="#" className="iubenda-cs-preferences-link">{f.cookiePrefs}</a>
        </nav>
      </div>
    </footer>
  );
}
