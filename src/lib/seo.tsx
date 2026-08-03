import { Helmet } from 'react-helmet-async';
import { useLang, type Localized } from '@/lib/i18n';

export const SITE_URL = 'https://kaldiscoffeeethiopia.com';
export const SITE_NAME = 'Kaldi\'s Coffee';

interface SeoProps {
  title: Localized | string;
  description: Localized | string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

/** Render per-page meta tags + optional JSON-LD structured data. */
export function Seo({ title, description, path = '/', image, type = 'website', jsonLd }: SeoProps) {
  const { t } = useLang();
  const titleText = t(title);
  const descriptionText = t(description);
  const url = `${SITE_URL}${path}`;
  const ogImage = image ?? `${SITE_URL}/images/placeholder.svg`;

  return (
    <Helmet>
      <title>{titleText}</title>
      <meta name="description" content={descriptionText} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={titleText} />
      <meta property="og:description" content={descriptionText} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:description" content={descriptionText} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}

/** LocalBusiness / CoffeeShop schema for the homepage — verified facts only. */
export const coffeeShopSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'CoffeeShop',
  legalName: 'Kaldi\'s Coffee P.L.C',
  name: 'Kaldi\'s Coffee',
  alternateName: 'ካልዲስ ኮፊ',
  description:
    "Ethiopia's coffee house chain, founded in 2005. Ethiopian coffee, roasted and served at home, from Yirgacheffe to your cup.",
  url: SITE_URL,
  telephone: '+251 11 371 4258',
  foundingDate: '2005',
  founder: [
    { '@type': 'Person', name: 'Tsedey Asrat' },
    { '@type': 'Person', name: 'Elias Ketema' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sarbet Adams Pavillion Building, Roosevelt St',
    addressLocality: 'Addis Ababa',
    addressCountry: 'ET',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 8.9976, longitude: 38.7796 },
  openingHours: 'Mo-Su 08:00-21:00',
  servesCuisine: 'Coffee, Ethiopian cuisine',
  sameAs: ['https://kaldiscoffeeethiopia.com', 'https://kaldiscoffeeet.com'],
};

/** Menu structured data — items grouped into sections by category (no prices — none are published). */
export function menuSchema(
  items: { name: string; description: string; category: string }[],
) {
  const groups = new Map<string, typeof items>();
  for (const item of items) {
    const group = groups.get(item.category) ?? [];
    group.push(item);
    groups.set(item.category, group);
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Kaldi\'s Coffee Menu',
    hasMenuSection: Array.from(groups.entries()).map(([name, entries]) => ({
      '@type': 'MenuSection',
      name,
      hasMenuItem: entries.map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
      })),
    })),
  };
}
