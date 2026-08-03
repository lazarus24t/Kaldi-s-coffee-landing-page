import { IMG } from './images';
import { L, type Localized } from '@/lib/i18n';

export interface ShopProduct {
  id: string;
  name: Localized;
  description: Localized;
  image: string;
}

/**
 * The only verified product sold at retail is roasted coffee beans.
 * No prices are published, so none are listed — order in branch or by phone.
 */
export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'roasted-beans-retail',
    name: L('የተጠበሰ ቡና ፍሬ', 'Roasted Coffee Beans'),
    description: L(
      'የኢትዮጵያን ጣዕም ወደ ቤት ይውሰዱ። ካልዲስ የተጠበሰ ቡና ፍሬን በሁሉም ቅርንጫፎች በሱቅ ይሸጣል — በካፌዎቻችን ውስጥ ከሚቀርበው ተመሳሳይ ጥብስ።',
      "Take the taste of Ethiopia home. Kaldi's sells roasted coffee beans at retail in every branch — from the same roasts served across our cafés.",
    ),
    image: IMG.beans,
  },
];
