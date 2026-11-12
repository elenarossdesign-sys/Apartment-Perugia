'use client';
import { useState } from 'react';
import PostCard from './PostCard';
import { categories, categoryId, posts } from '@/lib/content';
import type { Locale } from '@/lib/i18n';

export default function BlogList({ locale, skip }: { locale: Locale; skip?: string }) {
  const [cat, setCat] = useState('all');
  const all = locale === 'it' ? 'Tutti' : 'All';
  const list = posts.filter((p) => p.slug !== skip && (cat === 'all' || categoryId(p) === cat));
  const count = (id: string) => (id === 'all' ? posts.length : posts.filter((p) => categoryId(p) === id).length);
  return (
    <>
      <div className="filters" role="group" aria-label={locale === 'it' ? 'Filtra per categoria' : 'Filter by category'}>
        {[{ id: 'all', label: all }, ...categories.map((c) => ({ id: c.id, label: c.label[locale] }))]
          .filter((c) => c.id === 'all' || count(c.id) > 0)
          .map((c) => (
            <button key={c.id} type="button" className={`fchip${cat === c.id ? ' on' : ''}`} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              {c.label}<span className="c">{count(c.id)}</span>
            </button>
          ))}
      </div>
      {list.length ? (
        <div className="bgrid">{list.map((p) => <PostCard key={p.slug} post={p} locale={locale} />)}</div>
      ) : (
        <p className="empty">{locale === 'it' ? 'Ancora nessun articolo in questa categoria.' : 'No articles in this category yet.'}</p>
      )}
    </>
  );
}
