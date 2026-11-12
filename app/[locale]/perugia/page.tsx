import Link from 'next/link';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import Icon from '@/components/Icon';
import { getUI, path, type Locale } from '@/lib/i18n';
import { posts } from '@/lib/content';

const C = {
  it: { title: 'Vivere Perugia', lead: 'Eventi, gite nei dintorni, sapori e consigli di chi la città la vive ogni giorno. Per organizzare il tuo soggiorno prima ancora di partire.', featured: 'IN EVIDENZA', ctaH: 'Vuoi vivere Perugia da dentro?', ctaP: 'Due camere nel centro storico, a pochi passi da tutto quello che racconta questo blog.', cta: 'Scrivici per le date' },
  en: { title: 'Living Perugia', lead: 'Events, day trips, food and tips from people who live the city every day. Plan your stay before you even leave.', featured: 'FEATURED', ctaH: 'Want to experience Perugia from the inside?', ctaP: 'Two rooms in the historic centre, steps from everything this blog talks about.', cta: 'Ask us about dates' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return { title: C[locale].title, description: C[locale].lead, alternates: { languages: { it: path.blog('it'), en: path.blog('en') } } };
}

export default async function Blog({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = getUI(locale);
  const c = C[locale];
  const feat = posts.find((p) => p.featured) || posts[0];
  return (
    <div className="ap pg-blog">
      <Nav locale={locale} variant="light" active="perugia" />
      <div className="wrap">
        <header className="bhead">
          <div><nav className="crumbs" aria-label="Breadcrumb"><Link href={path.home(locale)}>{t.nav.home}</Link><span>/</span><span>{t.nav.perugia}</span></nav><h1>{c.title}</h1></div>
          <p className="lead">{c.lead}</p>
        </header>
        <Link className="feat" href={path.post(locale, feat.slug)}>
          <div className="media"><img src={feat.cover} alt={feat.coverAlt[locale]} /><span className="cat">{feat.tag}</span></div>
          <div className="tx">
            <span className="kick">{c.featured}</span>
            <h2>{feat.title[locale]}</h2>
            <p>{feat.excerpt[locale]}</p>
            <span className="meta">{feat.category[locale]}<span>·</span><Icon name="clock" />{feat.minutes} min {t.minRead}</span>
            <span className="more">{t.readArticle}<Icon name="arrow" /></span>
          </div>
        </Link>
        <BlogList locale={locale} skip={feat.slug} />
        <section className="bcta" aria-label={c.ctaH}>
          <div><h2>{c.ctaH}</h2><p>{c.ctaP}</p></div>
          <Link className="btn btn-light" href={path.contact(locale)}><span className="dot" />{c.cta}</Link>
        </section>
        <Footer locale={locale} />
      </div>
    </div>
  );
}
