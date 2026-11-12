import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { notFound } from 'next/navigation';
import '@fontsource-variable/inter';
import '@fontsource/syncopate/400.css';
import '../globals.css';
import { isLocale, locales } from '@/lib/i18n';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = { themeColor: '#1E2B4F', width: 'device-width', initialScale: 1 };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const it = locale === 'it';
  return {
    metadataBase: new URL(site.url),
    title: {
      default: it ? 'Apartment Perugia · Appartamento nel centro storico di Perugia' : 'Apartment Perugia · Apartment in Perugia’s historic centre',
      template: '%s · Apartment Perugia',
    },
    description: it
      ? 'Appartamento per 4 persone con due camere nel centro storico di Perugia, a pochi passi da Corso Vannucci. Prenota direttamente con noi.'
      : 'A two-bedroom apartment for 4 guests in Perugia’s historic centre, steps from Corso Vannucci. Book directly with us.',
    icons: { icon: '/icon.svg' },
    openGraph: { type: 'website', siteName: 'Apartment Perugia', locale: it ? 'it_IT' : 'en_GB', images: ['/img/hero-perugia.webp'] },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const iubSite = process.env.NEXT_PUBLIC_IUBENDA_SITE_ID;
  const iubPolicy = process.env.NEXT_PUBLIC_IUBENDA_COOKIE_POLICY_ID;
  return (
    <html lang={locale}>
      <body>
        {children}
        {iubSite && iubPolicy && (
          <>
            {/* Banner cookie iubenda: si attiva quando imposti le due variabili su Vercel */}
            <Script id="iub-config" strategy="beforeInteractive">{`var _iub=_iub||[];_iub.csConfiguration={"siteId":${iubSite},"cookiePolicyId":${iubPolicy},"lang":"${locale}","banner":{"position":"float-bottom-center","acceptButtonDisplay":true,"customizeButtonDisplay":true,"rejectButtonDisplay":true,"closeButtonDisplay":false}};`}</Script>
            <Script src={`https://cs.iubenda.com/autoblocking/${iubSite}.js`} strategy="beforeInteractive" />
            <Script src="https://cdn.iubenda.com/cs/iubenda_cs.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}
