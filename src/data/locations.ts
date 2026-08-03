import { L, type Localized } from '@/lib/i18n';

export interface Branch {
  id: string;
  name: Localized;
  area: Localized;
  city: string;
  address: Localized;
  phone?: string;
  hours?: Localized;
  lat: number;
  lng: number;
  image: string;
  flagship?: boolean;
}

/**
 * Branch locations.
 *
 * Coordinates marked "map" come from OpenStreetMap point-of-interest data —
 * the same physical branch locations pinned by the Google Maps "kaldis coffee"
 * search (the Google Maps page itself is JS-rendered, so OSM is the
 * machine-readable source for those same branches). Fact-sheet branches
 * without an OSM pin keep their verified/approximate coordinates.
 *
 * Phone/hours are shown only where verified (Sarbet flagship).
 */
export const BRANCHES: Branch[] = [
  {
    id: 'sarbet',
    name: L('ካልዲስ ኮፊ — ሳርቤት (ዋና ቅርንጫፍ እና ዋና መሥሪያ ቤት)', "Kaldi's Coffee — Sarbet (Flagship & HQ)"),
    area: L('ሳርቤት', 'Sarbet'),
    city: 'Addis Ababa',
    address: L('ሳርቤት አዳምስ ፓቪሊዮን ህንፃ፣ ሩዝቬልት ስትሪት፣ አዲስ አበባ', 'Sarbet Adams Pavillion Building, Roosevelt St, Addis Ababa'),
    phone: '+251 11 371 4258',
    hours: L('በየቀኑ · ከጠዋት 8:00 እስከ ምሽት 9:00', 'Daily · 8:00 AM – 9:00 PM'),
    lat: 8.9976,
    lng: 38.7796,
    image: '/images/branches/branch-02.png',
    flagship: true,
  },
  {
    id: 'bole-airport',
    name: L('ካልዲስ ኮፊ — ቦሌ ዓለም አቀፍ አየር ማረፊያ', "Kaldi's Coffee — Bole International Airport"),
    area: L('ቦሌ አየር ማረፊያ', 'Bole Airport'),
    city: 'Addis Ababa',
    address: L('ቦሌ ዓለም አቀፍ አየር ማረፊያ፣ አዲስ አበባ', 'Bole International Airport, Addis Ababa'),
    lat: 8.9779,
    lng: 38.7997,
    image: '/images/branches/branch-04.png',
  },
  {
    id: 'bole-bulbula',
    name: L('ካልዲስ ኮፊ — ቦሌ ቡልቡላ', "Kaldi's Coffee — Bole Bulbula"),
    area: L('ቦሌ ቡልቡላ', 'Bole Bulbula'),
    city: 'Addis Ababa',
    address: L('ቦሌ ቡልቡላ፣ አዲስ አበባ', 'Bole Bulbula, Addis Ababa'),
    lat: 8.9881,
    lng: 38.7797,
    image: '/images/branches/branch-03.png',
  },
  {
    id: 'jomo1',
    name: L('ካልዲስ ኮፊ — ጆሞ 1', "Kaldi's Coffee — Jomo 1"),
    area: L('ጆሞ 1', 'Jomo 1'),
    city: 'Addis Ababa',
    address: L('ጆሞ 1፣ አዲስ አበባ', 'Jomo 1, Addis Ababa'),
    lat: 8.946,
    lng: 38.74,
    image: '/images/branches/branch-05.png',
  },
  {
    id: 'kurtu-arada',
    name: L('ካልዲስ ኮፊ — ኩርቱ አራዳ', "Kaldi's Coffee — Kurtu Arada"),
    area: L('ኩርቱ አራዳ', 'Kurtu Arada'),
    city: 'Addis Ababa',
    address: L('ኩርቱ ኮሜርሻል ማዕከል፣ አራዳ፣ አዲስ አበባ', 'Kurtu Commercial Center, Arada, Addis Ababa'),
    lat: 9.034374,
    lng: 38.743869,
    image: '/images/branches/branch-07.png',
  },
  {
    id: 'megenagna',
    name: L('ካልዲስ ኮፊ — መገናኛ', "Kaldi's Coffee — Megenagna"),
    area: L('መገናኛ', 'Megenagna'),
    city: 'Addis Ababa',
    address: L('ፍቅረ ማርያም አባ ጠጫን ስትሪት፣ መገናኛ፣ የካ፣ አዲስ አበባ', 'Fikre Mariam Aba Techan Street, Megenagna, Yeka, Addis Ababa'),
    lat: 9.0194,
    lng: 38.816,
    image: '/images/branches/branch-08.png',
  },
  {
    id: 'lebu',
    name: L('ካልዲስ ኮፊ — ለቡ (ሪንግ ሮድ)', "Kaldi's Coffee — Lebu (Ring Road)"),
    area: L('ለቡ', 'Lebu'),
    city: 'Addis Ababa',
    address: L('ሪንግ ሮድ፣ ለቡ፣ ነፋስ ስልክ፣ አዲስ አበባ', 'Ring Road, Lebu, Nefas Silk, Addis Ababa'),
    lat: 8.9618,
    lng: 38.7157,
    image: '/images/branches/branch-09.png',
  },
  {
    id: 'kolfe',
    name: L('ካልዲስ ኮፊ — ኮልፌ ከራንዮ', "Kaldi's Coffee — Kolfe Keranyo"),
    area: L('ኮልፌ ከራንዮ', 'Kolfe Keranyo'),
    city: 'Addis Ababa',
    address: L('KK_07_2302 ስትሪት፣ ኮልፌ ከራንዮ፣ አዲስ አበባ', 'KK_07_2302 Street, Kolfe Keranyo, Addis Ababa'),
    lat: 9.0062,
    lng: 38.6944,
    image: '/images/branches/branch-10.png',
  },
  {
    id: 'sidist-kilo',
    name: L('ካልዲስ ኮፊ — ስድስት ኪሎ', "Kaldi's Coffee — Sidist Kilo"),
    area: L('ስድስት ኪሎ', 'Sidist Kilo'),
    city: 'Addis Ababa',
    address: L('ስድስት ኪሎ፣ ጉለሌ፣ አዲስ አበባ', 'Sidist Kilo, Gulale, Addis Ababa'),
    lat: 9.0449,
    lng: 38.7631,
    image: '/images/branches/branch-11.png',
  },
  {
    id: 'summit',
    name: L('ካልዲስ ኮፊ — ሰሚት (ቦሌ)', "Kaldi's Coffee — Summit (Bole)"),
    area: L('ሰሚት', 'Summit'),
    city: 'Addis Ababa',
    address: L('ሰሚት ሮድ (ሳልተ ምህረት)፣ የካ ቦሌ ቦታ፣ ቦሌ፣ አዲስ አበባ', 'Summit Road (Salitemihret), Yeka Bole Bota, Bole, Addis Ababa'),
    lat: 9.0117,
    lng: 38.8513,
    image: '/images/branches/branch-12.png',
  },
  {
    id: 'olympia',
    name: L('ካልዲስ ኮፊ — ኦሊምፒያ', "Kaldi's Coffee — Olympia"),
    area: L('ኦሊምፒያ', 'Olympia'),
    city: 'Addis Ababa',
    address: L('አፍሪካ አቬኑ (ቦሌ ሮድ)፣ ኦሊምፒያ፣ ቂርቆስ፣ አዲስ አበባ', 'Africa Avenue (Bole Road), Olympia, Kirkos, Addis Ababa'),
    lat: 9.008,
    lng: 38.7651,
    image: '/images/branches/branch-01.png',
  },
  {
    id: 'besrat-mauritania',
    name: L('ካልዲስ ኮፊ — ብስራት ገብርኤል (ሞሪታኒያ ስትሪት)', "Kaldi's Coffee — Besrat Gebriel (Mauritania St.)"),
    area: L('ሞሪታኒያ ስትሪት', 'Mauritania St.'),
    city: 'Addis Ababa',
    address: L('ሞሪታኒያ ስትሪት፣ ብስራት ገብርኤል፣ ነፋስ ስልክ፣ አዲስ አበባ', 'Mauritania Street, Besrat Gebriel, Nefas Silk, Addis Ababa'),
    lat: 8.9997,
    lng: 38.7196,
    image: '/images/branches/branch-01.png',
  },
  {
    id: 'besrat-southafrica',
    name: L('ካልዲስ ኮፊ — ብስራት ገብርኤል (ሳውዝ አፍሪካ ስትሪት)', "Kaldi's Coffee — Besrat Gebriel (South Africa St.)"),
    area: L('ሳውዝ አፍሪካ ስትሪት', 'South Africa St.'),
    city: 'Addis Ababa',
    address: L('ሳውዝ አፍሪካ ስትሪት፣ ብስራት ገብርኤል፣ ነፋስ ስልክ፣ አዲስ አበባ', 'South Africa Street, Besrat Gebriel, Nefas Silk, Addis Ababa'),
    lat: 8.9889,
    lng: 38.7238,
    image: '/images/branches/branch-03.png',
  },
  {
    id: 'bole-alula-irsha',
    name: L('ካልዲስ ኮፊ — ቦሌ (የደጃዝማች አሉላ ኢርሻ)', "Kaldi's Coffee — Bole (Yedejazmach Alula Irsha)"),
    area: L('አሉላ ኢርሻ ስትሪት', 'Alula Irsha St.'),
    city: 'Addis Ababa',
    address: L('የደጃዝማች አሉላ ኢርሻ፣ ቦሌ፣ አዲስ አበባ', 'Yedejazmach Alula Irsha, Bole, Addis Ababa'),
    lat: 9.0212,
    lng: 38.8379,
    image: '/images/branches/branch-05.png',
  },
  {
    id: 'old-ambo-road',
    name: L('ካልዲስ ኮፊ — አሮጌ አምቦ መንገድ', "Kaldi's Coffee — Old Ambo Road"),
    area: L('አሮጌ አምቦ መንገድ', 'Old Ambo Road'),
    city: 'Addis Ababa',
    address: L('አሮጌ አምቦ መንገድ፣ መድሀኒዓለም፣ ጉለሌ፣ አዲስ አበባ', 'Old Ambo Road, Medhanialem, Gulale, Addis Ababa'),
    lat: 9.0531,
    lng: 38.7195,
    image: '/images/branches/branch-07.png',
  },
  {
    id: 'debre-zeyit',
    name: L('ካልዲስ ኮፊ — ደብረ ዘይት', "Kaldi's Coffee — Debre Zeyit"),
    area: L('ደብረ ዘይት', 'Debre Zeyit'),
    city: 'Debre Zeyit',
    address: L('ደብረ ዘይት (ቢሾፍቱ)፣ ኦሮሚያ ክልል', 'Debre Zeyit (Bishoftu), Oromia Region'),
    lat: 8.7523,
    lng: 38.9785,
    image: '/images/branches/branch-09.png',
  },
  {
    id: 'adama',
    name: L('ካልዲስ ኮፊ — አዳማ', "Kaldi's Coffee — Adama"),
    area: L('አዳማ ከተማ መሀል', 'Adama City Center'),
    city: 'Adama',
    address: L('ዳራርቱ ቱሉ ስትሪት፣ አዳማ፣ ኦሮሚያ ክልል', 'Darartu Tulu Street, Adama, Oromia Region'),
    lat: 8.542,
    lng: 39.2689,
    image: '/images/branches/branch-11.png',
  },
  {
    id: 'bahirdar',
    name: L('ካልዲስ ኮፊ — ባሕር ዳር', "Kaldi's Coffee — Bahir Dar"),
    area: L('ባሕር ዳር ሐይቅ ዳርቻ', 'Bahir Dar Lakefront'),
    city: 'Bahir Dar',
    address: L('የጣና ሐይቅ ዳርቻ፣ ባሕር ዳር፣ አማራ ክልል', 'Lake Tana shoreline, Bahir Dar, Amhara Region'),
    lat: 11.5937,
    lng: 37.3909,
    image: '/images/branches/branch-06.png',
  },
];

export const CITIES = ['All', ...Array.from(new Set(BRANCHES.map((b) => b.city)))];

/** Display labels for the city filter keys (CITIES) and branch.city values. */
export const CITY_LABELS: Record<string, Localized> = {
  All: L('ሁሉም', 'All'),
  'Addis Ababa': L('አዲስ አበባ', 'Addis Ababa'),
  'Debre Zeyit': L('ደብረ ዘይት', 'Debre Zeyit'),
  Adama: L('አዳማ', 'Adama'),
  'Bahir Dar': L('ባሕር ዳር', 'Bahir Dar'),
};

/** Google Maps "directions" deep-link for a branch. */
export function directionsUrl(branch: Branch): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${branch.lat},${branch.lng}`;
}

/** Default map view — Addis Ababa */
export const MAP_CENTER: [number, number] = [8.99, 38.78];
export const MAP_ZOOM = 11;
