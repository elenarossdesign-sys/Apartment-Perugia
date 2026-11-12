import type { MetadataRoute } from 'next';
import { locales, path } from '@/lib/i18n';
import { posts } from '@/lib/content';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: string[] = [];
  for (const l of locales) {
    urls.push(path.home(l), path.blog(l), path.contact(l));
    urls.push(path.apartment(l));
    posts.forEach((p) => urls.push(path.post(l, p.slug)));
  }
  return urls.map((u) => ({ url: `${site.url}${u}`, lastModified: new Date() }));
}
