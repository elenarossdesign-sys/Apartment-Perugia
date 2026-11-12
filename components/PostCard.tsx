import Link from 'next/link';
import Icon from './Icon';
import { getUI, path, type Locale } from '@/lib/i18n';
import type { Post } from '@/lib/content';

export default function PostCard({ post, locale }: { post: Post; locale: Locale }) {
  const t = getUI(locale);
  return (
    <Link className="post" href={path.post(locale, post.slug)}>
      <div className="media">
        <img src={post.cover} alt={post.coverAlt[locale]} loading="lazy" />
        <span className="cat">{post.tag}</span>
      </div>
      <div className="meta"><span>{post.category[locale]}</span><span>·</span><span>{post.minutes} min {t.minRead}</span></div>
      <h3>{post.title[locale]}</h3>
      <p>{post.excerpt[locale]}</p>
      <span className="more">{t.readArticle}<Icon name="arrow" /></span>
    </Link>
  );
}
