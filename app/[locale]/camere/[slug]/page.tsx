import { permanentRedirect } from 'next/navigation';
import { locales, path, type Locale } from '@/lib/i18n';

/* Le vecchie pagine delle singole camere ora portano all'appartamento */
export function generateStaticParams() {
  return locales.flatMap((locale) => ['raffaello', 'bacio'].map((slug) => ({ locale, slug })));
}

export default async function OldRoom({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  permanentRedirect(path.apartment(locale));
}
