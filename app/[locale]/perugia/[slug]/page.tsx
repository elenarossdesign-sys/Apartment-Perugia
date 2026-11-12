import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Icon from '@/components/Icon';
import { getUI, locales, path, type Locale } from '@/lib/i18n';
import { getPost, posts } from '@/lib/content';

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: p.title[locale],
    description: p.excerpt[locale],
    alternates: { languages: { it: path.post('it', slug), en: path.post('en', slug) } },
    openGraph: { type: 'article', images: [p.cover], publishedTime: p.date },
  };
}

const C = {
  it: { tip: 'Il consiglio dell’host', ctaH: 'Vieni a Perugia?', ctaP: 'Controlla le date e prenota direttamente con noi.', more: 'Continua a leggere', moreH: 'Altri modi di vivere Perugia.' },
  en: { tip: 'Host’s tip', ctaH: 'Coming to Perugia?', ctaP: 'Check your dates and book directly with us.', more: 'Keep reading', moreH: 'More ways to live Perugia.' },
};

export default async function PostPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const t = getUI(locale);
  const c = C[locale];
  const date = new Date(post.date + 'T12:00:00').toLocaleDateString(locale === 'it' ? 'it-IT' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="ap pg-article">
      <Nav locale={locale} variant="light" active="perugia" />
      <div className="wrap">
        <header className="ahead">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href={path.home(locale)}>{t.nav.home}</Link><span>/</span><Link href={path.blog(locale)}>{t.nav.perugia}</Link><span>/</span><span>{post.category[locale]}</span></nav>
          <span className="chip"><Icon name="music" style={{ width: 16, height: 16 }} />{post.tag}</span>
          <h1>{post.title[locale]}</h1>
          <p className="dek">{post.excerpt[locale]}</p>
          <div className="byline"><time dateTime={post.date}>{date}</time><span className="sep" /><span className="m"><Icon name="clock" />{post.minutes} min {t.minRead}</span></div>
        </header>
        <figure className="cover"><div className="im"><img src={post.cover} alt={post.coverAlt[locale]} /></div></figure>
        <div className="read">
          <article className="body">
            {post.body.map((b, i) => {
              switch (b.type) {
                case 'p': return <p key={i} className={b.lead ? 'lead1' : undefined}>{b.text[locale]}</p>;
                case 'h2': return <h2 key={i} id={b.id}>{b.text[locale]}</h2>;
                case 'quote': return <blockquote key={i} className="pull">{b.text[locale]}</blockquote>;
                case 'img': return <figure key={i} className="fig"><div className="im"><img src={b.src} alt={b.alt[locale]} loading="lazy" /></div><figcaption>{b.caption[locale]}</figcaption></figure>;
                case 'ul': return <ul key={i}>{b.items.map((x) => <li key={x.it}>{x[locale]}</li>)}</ul>;
                case 'tip': return <div key={i} className="tip"><span className="ic"><Icon name="bulb" /></span><p><b>{c.tip}</b>{b.text[locale]}</p></div>;
                case 'cta': return <div key={i} className="incta"><div><b>{c.ctaH}</b><span>{c.ctaP}</span></div><Link className="btn btn-light" href={path.contact(locale)}><span className="dot" />{t.checkAvailability}</Link></div>;
              }
            })}
            <div className="tags">{post.tags.map((tag) => <Link key={tag} href={path.blog(locale)}>{tag}</Link>)}</div>
          </article>
        </div>
        <section className="rel">
          <div className="head"><div className="t"><span className="eyebrow">{c.more}</span><h2 className="h2">{c.moreH}</h2></div><Link className="btn btn-ghost" href={path.blog(locale)}>{t.allArticles}</Link></div>
          <div className="news">{related.map((p) => <PostCard key={p.slug} post={p} locale={locale} />)}</div>
        </section>
        <Footer locale={locale} />
      </div>
    </div>
  );
}
