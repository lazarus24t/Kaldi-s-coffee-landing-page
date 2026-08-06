import { IMG } from './images';
import { L, type Localized } from '@/lib/i18n';

export type CategoryId = 'coffee' | 'food' | 'retail';

export interface MenuCategory {
  id: CategoryId | 'all';
  label: Localized;
  blurb: Localized;
}

export interface MenuItem {
  id: string;
  name: Localized;
  description: Localized;
  category: CategoryId;
  image: string;
  notes: Localized[];
  featured?: boolean;
}

/**
 * Kaldi's Coffee does not publish an official online menu. The items below
 * are the ones confirmed by customer reviews; no prices are listed because
 * none are published. Order in store or call +251 11 371 4258.
 */
export const CATEGORIES: MenuCategory[] = [
  { id: 'all', label: L('ሁሉም', 'All'), blurb: L('ሙሉ የካልዲስ ምርጫ', "The full Kaldi's selection") },
  { id: 'coffee', label: L('ቡና እና መጠጦች', 'Coffee & Beverages'), blurb: L('ደንበኞቻችን የሚወዷቸው መጠጦች', 'The drinks our customers love') },
  { id: 'food', label: L('ምግብ እና ፓስትሪ', 'Food & Pastries'), blurb: L('በገምጋሚዎች ከፍተኛ አድናቆት የተቸራቸው', 'Highly praised by reviewers') },
  { id: 'retail', label: L('ሱቅ', 'Retail'), blurb: L('ቡና ፍሬውን ወደ ቤት ይውሰዱ', 'Take the roast home') },
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Coffee & Beverages ───────────────────────────────────────────
  {
    id: 'macchiato',
    name: L('ማኪያቶ', 'Macchiato'),
    description: L(
      'አንድ ጠጥ ወተት ያለበት ኤስፕሬሶ — የደንበኞች ተወዳጅ።',
      'Espresso with a splash of milk — a customer favorite.',
    ),
    category: 'coffee',
    image: IMG.macchiatoCup,
    notes: [L('የደንበኞች ተወዳጅ', 'Customer favorite')],
    featured: true,
  },
  {
    id: 'traditional-buna',
    name: L('ባህላዊ ቡና (ጥቁር ቡና)', 'Traditional Buna (Black Coffee)'),
    description: L(
      'ባህላዊ የኢትዮጵያ ጥቁር ቡና፣ ጠንክሮ ተጠልሶ ትኩስ ሆኖ የሚቀርብ።',
      'Traditional Ethiopian black coffee, brewed strong and served fresh.',
    ),
    category: 'coffee',
    image: IMG.cupSteam,
    notes: [L('ባህላዊ', 'Traditional'), L('ትኩስ የተጠላ', 'Freshly brewed')],
    featured: true,
  },
  {
    id: 'yirgacheffe-coffee',
    name: L('ይርጋቸፌ ቡና', 'Yirgacheffe Coffee'),
    description: L(
      'ከይርጋቸፌ ደጋማ አካባቢዎች የሚገኝ ነጠላ-መነሻ ቡና።',
      'Single-origin coffee from the highlands of Yirgacheffe.',
    ),
    category: 'coffee',
    image: IMG.heroPour,
    notes: [L('ነጠላ መነሻ', 'Single origin')],
    featured: true,
  },

  // ── Food & Pastries ──────────────────────────────────────────────
  {
    id: 'banana-cake',
    name: L('የሙዝ ኬክ', 'Banana Cake'),
    description: L(
      'እርጥብ፣ የቤት ውስጥ አይነት የሙዝ ኬክ — በደንበኛ ግምገማዎች ከፍተኛ አድናቆት ያገኘ።',
      'A moist, home-style banana cake — highly praised in customer reviews.',
    ),
    category: 'food',
    image: IMG.bananaCake,
    notes: [L('ከፍተኛ አድናቆት ያገኘ', 'Highly praised')],
    featured: true,
  },
  {
    id: 'black-forest-cake',
    name: L('የጥቁር ደን ኬክ', 'Black Forest Cake'),
    description: L(
      'ክላሲክ የቸኮሌት እና የቼሪ ንብርብር ኬክ።',
      'A classic chocolate-and-cherry layer cake.',
    ),
    category: 'food',
    image: IMG.blackForest,
    notes: [L('ክላሲክ', 'Classic')],
    featured: true,
  },
  {
    id: 'burgers',
    name: L('በርገር', 'Burgers'),
    description: L(
      'በፊርማ የጎን ምግቦቻችን የሚቀርቡ ጠጣር በርገሮች።',
      'Hearty burgers served with our signature sides.',
    ),
    category: 'food',
    image: IMG.burger,
    notes: [L('ጠጣር', 'Hearty')],
    featured: true,
  },
  {
    id: 'sandwiches',
    name: L('ሳንድዊቾች', 'Sandwiches'),
    description: L(
      'በትዕዛዝ የሚዘጋጁ ትኩስ ሳንድዊቾች።',
      'Fresh sandwiches made to order.',
    ),
    category: 'food',
    image: IMG.sandwich,
    notes: [L('በትዕዛዝ የሚዘጋጅ', 'Made to order')],
    featured: true,
  },
  {
    id: 'pastries-snacks',
    name: L('ፓስትሪ እና መክሰስ', 'Pastries & Snacks'),
    description: L(
      'በየቀኑ የሚገኙ ፓስትሪዎች እና መክሰሶች ምርጫ።',
      'A daily selection of pastries and snacks.',
    ),
    category: 'food',
    image: IMG.croissant,
    notes: [L('ትኩስ የተጋገረ', 'Baked fresh')],
    featured: true,
  },

  // ── Retail ────────────────────────────────────────────────────────
  {
    id: 'roasted-beans-retail',
    name: L('የተጠበሰ ቡና ፍሬ', 'Roasted Coffee Beans'),
    description: L(
      'የኢትዮጵያን ጣዕም ወደ ቤት ይውሰዱ — የተጠበሰ ቡና ፍሬ በሁሉም ቅርንጫፎች በሱቅ ይገኛል።',
      'Take the taste of Ethiopia home — roasted beans available at retail in every branch.',
    ),
    category: 'retail',
    image: IMG.beans,
    notes: [L('ሱቅ', 'Retail')],
  },
];

export const FEATURED_ITEMS = MENU_ITEMS.filter((item) => item.featured);
