import type { MetadataRoute } from 'next';
import { locales, path } from '@/lib/i18n';
import { posts, rooms } from '@/lib/content';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: string[] = [];
  for (const l of locales) {
    urls.push(path.home(l), path.blog(l), path.contact(l));
    rooms.forEach((r) => urls.push(path.room(l, r.slug)));
    posts.forEach((p) => urls.push(path.post(l, p.slug)));
  }
  return urls.map((u) => ({ url: `${site.url}${u}`, lastModified: new Date() }));
}
