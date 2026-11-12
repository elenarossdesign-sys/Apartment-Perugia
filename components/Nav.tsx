'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Logo from './Logo';
import Icon from './Icon';
import { getUI, path, type Locale } from '@/lib/i18n';

function switchLocale(pathname: string, to: Locale) {
  const parts = pathname.split('/');
  parts[1] = to;
  return parts.join('/') || `/${to}`;
}

export default function Nav({ locale, variant = 'light', active }: { locale: Locale; variant?: 'glass' | 'light'; active?: 'home' | 'perugia' | 'contact' }) {
  const t = getUI(locale);
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const items = [
    { id: 'home', label: t.nav.home, href: path.home(locale) },
    { id: 'perugia', label: t.nav.perugia, href: path.blog(locale) },
    { id: 'contact', label: t.nav.contact, href: path.contact(locale) },
  ] as const;

  const Lang = ({ cls }: { cls: string }) => (
    <span className={cls}>
      <Link href={switchLocale(pathname, 'it')} aria-current={locale === 'it'} hrefLang="it">IT</Link>
      {cls === 'lang' ? ' · ' : null}
      <Link href={switchLocale(pathname, 'en')} aria-current={locale === 'en'} hrefLang="en">EN</Link>
    </span>
  );

  return (
    <>
      <header className={variant === 'glass' ? `nav glass${scrolled ? ' scrolled' : ''}` : 'nav light'}>
        <Logo href={path.home(locale)} dot={variant === 'glass' ? '#C9D3E6' : '#3E5A9A'} />
        <nav className="links" aria-label={locale === 'it' ? 'Principale' : 'Main'}>
          {items.map((i) => (
            <Link key={i.id} href={i.href} className={active === i.id && variant === 'light' ? 'on' : undefined} aria-current={active === i.id ? 'page' : undefined}>
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <Lang cls="lang" />
          <Link className={variant === 'glass' ? 'btn btn-light' : 'btn btn-primary'} href={path.contact(locale)}>{t.nav.book}</Link>
          <button className="menu" type="button" aria-label={t.nav.openMenu} aria-expanded={open} onClick={() => setOpen(true)}>{t.nav.menu}</button>
        </div>
      </header>
      {open && mounted && createPortal(
        <div className="mm" role="dialog" aria-modal="true" aria-label={t.nav.menu}>
          <div className="mm-top">
            <Logo href={path.home(locale)} dot="#3E5A9A" onClick={() => setOpen(false)} />
            <button className="mm-x" type="button" aria-label={t.nav.closeMenu} onClick={() => setOpen(false)}><Icon name="x" /></button>
          </div>
          <nav className="mm-list" aria-label={t.nav.menu}>
            {items.map((i) => (
              <Link key={i.id} href={i.href} onClick={() => setOpen(false)}>{i.label}<Icon name="arrow" /></Link>
            ))}
          </nav>
          <div className="mm-foot">
            <Link className="btn btn-primary" href={path.contact(locale)} onClick={() => setOpen(false)}><span className="dot" />{t.nav.book}</Link>
            <div className="lang2">
              <Link href={switchLocale(pathname, 'it')} aria-current={locale === 'it'} onClick={() => setOpen(false)}>{t.lang.it}</Link>
              <Link href={switchLocale(pathname, 'en')} aria-current={locale === 'en'} onClick={() => setOpen(false)}>{t.lang.en}</Link>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
