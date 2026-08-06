import { IMG } from './images';
import { L, type Localized } from '@/lib/i18n';

// ── Brand story copy (from the brief) ──────────────────────────────
export const BRAND_STORY = {
  intro: L(
    'በአፈ-ታሪክ የኢትዮጵያው እረኛ ካልዲ ስም የተሰየመው — ቡናን በ850 ዓ.ም. አካባቢ ያገኘው — ካልዲስ ኮፊ ከ2005 ጀምሮ የኢትዮጵያ የቡና ቤት ሰንሰለት ነው። በፀደይ አስራት እና በኤልያስ ከተማ የተመሰረተው ካልዲስ፣ በአዲስ አበባ ከአንድ ካፌ ጀምሮ በመላ ኢትዮጵያ ከ30 በላይ ቅርንጫፎች ላይ ደርሷል — ሁሌም ከመነሻው ጋር እየተያያዘ።',
    "Named after the legendary Ethiopian goatherd Kaldi — credited with discovering coffee around 850 CE — Kaldi's Coffee has been Ethiopia's coffee house chain since 2005. Founded by Tsedey Asrat and Elias Ketema, we've grown from a single café in Addis Ababa to over 30 locations across Ethiopia — all while staying true to our roots.",
  ),
  sourcing: L(
    'በአለም ምርጥ የሆኑ ቡናዎችን በዘላቂነት በማቅረብ እና በመጠበስ ላይ እንሰራለን። ከይርጋቸፌ ደጋማ ቦታዎች እስከ ጽዋዎ ድረስ ምርጥ ምርቶችን ለቡና ወዳዶች እናመጣለን።',
    'We specialize in sustainably sourcing and roasting the finest coffees in the world. From the highlands of Yirgacheffe to your cup, we bring the best products to coffee lovers and enthusiasts alike.',
  ),
  sustainability: L(
    'ካልዲስ ጥራት ተኮር ገበሬዎችን በመደገፍ ምርጥ ቡናቸውን ከእርሻ እስከ ጽዋ በማስተዋወቅ ላይ ቆርቋሪ ነው። የአካባቢውን የእሴት ሰንሰለት — ከገበሬ እስከ ተጠቃሚ — ማስተጋባት እናምናለን።',
    "Kaldi's is committed to helping quality-oriented farmers by promoting their finest coffees from farm to cup. We believe in supporting the local value chain — from farmer to consumer.",
  ),
};

// ── Verified company facts ─────────────────────────────────────────
export const COMPANY_FACTS = {
  legalName: 'Kaldi\'s Coffee P.L.C',
  brand: "Kaldi's Coffee (ካልዲስ ኮፊ)",
  founded: 2005,
  industry: 'Coffeehouse chain',
  companyType: 'Private',
  areaServed: 'Ethiopia',
  headquarters: 'Sarbet Adams Pavillion Building, Roosevelt St, Addis Ababa, Ethiopia',
  website: 'kaldiscoffeeethiopia.com',
  otherDomain: 'kaldiscoffeeet.com',
  locations2016: 30,
  locationsNow: 33,
  employees2016: 1800,
  revenue2016: '129.5 million birr',
};

// ── Testimonials (from customer reviews — anonymized, no photos) ────
export interface Testimonial {
  quote: Localized;
  name: Localized;
  role: Localized;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: L(
      'ማኪያቶ የደንበኞች ተወዳጅ መሆኑ ምክንያት አለው — ፍጹም ሚዛናዊ ነው፣ አገልግሎቱም ቀኑን ሙሉ እንድቆዩ ያደርጋል።',
      'The macchiato is a customer favorite for a reason — perfectly balanced, and the service makes you want to stay all day.',
    ),
    name: L('የደንበኛ ግምገማ', 'Customer review'),
    role: L('የጉግል ግምገማዎች', 'Google reviews'),
    rating: 5,
  },
  {
    quote: L(
      'ባህላዊው የኢትዮጵያ ቡና እንደሚገባው ይቀርባል — ጠንካራ፣ ትኩስ እና በእውነተኛ እንግዳ ተቀባይነት። እውነተኛ የአዲስ አበባ ጣዕም።',
      'The traditional Ethiopian buna is served the way it should be — strong, fresh and with genuine hospitality. A true taste of Addis.',
    ),
    name: L('የደንበኛ ግምገማ', 'Customer review'),
    role: L('የጉግል ግምገማዎች', 'Google reviews'),
    rating: 5,
  },
  {
    quote: L(
      'የሙዝ ኬክ ካልዲስ በሄደበት ሁሉ ከፍተኛ አድናቆት ያገኛል — ለምን እንደሆነ ገብቶኛል። ጣፋጭ ቡና፣ ይበልጥ ጣፋጭ ኬክ።',
      "The banana cake is highly praised wherever Kaldi's goes — and I understand why. Delicious coffee, even better cake.",
    ),
    name: L('የደንበኛ ግምገማ', 'Customer review'),
    role: L('የጉግል ግምገማዎች', 'Google reviews'),
    rating: 4,
  },
  {
    quote: L(
      'ከአየር ማረፊያው ጀምሮ እስከ ባሕር ዳር ሐይቅ ዳርቻ ድረስ ተመሳሳይ ሞቅ ያለ አቀባበል እና ተመሳሳይ ጥሩ ይርጋቸፌ ቡና ታገኛላችሁ።',
      'From the airport to the lakefront in Bahir Dar, you can count on the same warm welcome and the same great Yirgacheffe.',
    ),
    name: L('የደንበኛ ግምገማ', 'Customer review'),
    role: L('የጉግል ግምገማዎች', 'Google reviews'),
    rating: 5,
  },
];

// ── About page content ─────────────────────────────────────────────
export interface TimelineEvent {
  year: string;
  title: Localized;
  text: Localized;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: 'c. 850 CE',
    title: L('የካልዲ አፈ-ታሪክ', 'The Legend of Kaldi'),
    text: L(
      'የኢትዮጵያው እረኛ ካልዲ ፍየሎቹ በተራራ ጫፎች ላይ ሲጨፍሩ ካየ በኋላ ቡናን በማግኘት ይመሰከርለታል — የስማችን አመጣጥ ታሪክ።',
      'The Ethiopian goatherd Kaldi is credited with discovering coffee after noticing his goats dancing on the hillsides — the origin story of our name.',
    ),
  },
  {
    year: '2005',
    title: L('የመጀመሪያው ካልዲስ ይከፈታል', "The First Kaldi's Opens"),
    text: L(
      'ፀደይ አስራት እና ኤልያስ ከተማ በአዲስ አበባ የመጀመሪያውን የካልዲስ ካፌ ከፍተው፣ የኢትዮጵያ ቡና ቅርስን ወደ ዘመናዊ ቦታ ያመጣሉ።',
      "Tsedey Asrat and Elias Ketema open the first Kaldi's café in Addis Ababa, bringing Ethiopian coffee heritage into a modern space.",
    ),
  },
  {
    year: '2015',
    title: L('ከአዲስ አበባ ባሻገር መስፋፋት', 'Expanding Beyond Addis'),
    text: L(
      'ካልዲስ ከዋና ከተማው ባሻገር ይስፋፋል — በደብረ ዘይት፣ በአዳማ እና በባሕር ዳር የተረጋገጠ መገኘት አለው።',
      "Kaldi's grows beyond the capital — with confirmed presence in Debre Zeyit, Adama and Bahir Dar.",
    ),
  },
  {
    year: '2016',
    title: L('የኢትዮጵያ የቡና ቤት ሰንሰለት', "Ethiopia's Coffee House Chain"),
    text: L(
      '30 ቅርንጫፎች፣ 1,800 ሠራተኞች እና 129.5 ሚሊዮን ብር ገቢ — የአገር ውስጥ የስኬት ታሪክ።',
      '30 locations, 1,800 employees and 129.5 million birr in revenue — a homegrown success story.',
    ),
  },
  {
    year: 'Today',
    title: L('33+ ቅርንጫፎች እና በመቀጠል', '33+ Locations & Counting'),
    text: L(
      'ከቦሌ ዓለም አቀፍ አየር ማረፊያ እስከ ባሕር ዳር ሐይቅ ዳርቻ ድረስ ካልዲስ የኢትዮጵያ ቡናን በኢትዮጵያዊ እንግዳ ተቀባይነት ማገልገሉን ቀጥሏል።',
      "From Bole International Airport to the Bahir Dar lakefront, Kaldi's keeps serving Ethiopian coffee with Ethiopian hospitality.",
    ),
  },
];

// ── Key people (verified) ─────────────────────────────────────────
export const KEY_PEOPLE: { name: string; role: Localized }[] = [
  { name: 'Tsedey Asrat', role: L('መስራች እና ዋና ሥራ አስኪያጅ', 'Founder & Managing Director') },
  { name: 'Elias Ketema', role: L('ተባባሪ መስራች', 'Co-Founder') },
  { name: 'Samuel Megersa', role: L('የባሪስታ ክፍል ኃላፊ', 'Barista Department Head') },
];

export interface Founder {
  name: string;
  role: Localized;
  image: string;
  bio: Localized;
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Tsedey Asrat',
    role: L('መስራች እና ዋና ሥራ አስኪያጅ', 'Founder & Managing Director'),
    image: IMG.portraitTsedey,
    bio: L(
      'በአዲስ አበባ ተወልዳ ያደገችው ፀደይ፣ የቀድሞ ሞዴል ስትሆን በ23 ዓመቷ የመጀመሪያ ቡቲኳን "Seasonal Style" ከፈተች። የከተማ ልማት ቡቲኮቿን እንዲዘጉ ሲያስገድዳት፣ ተባባሪ መስራች ኤልያስ ከተማ የንግድ አስተሳሰቧን ወደ ቡና እንድታዞር ሐሳብ ሰጣት — ካልዲስ የተወለደው ከዚህ ነው። የሎሪ አግሮ-ኢንዱስትሪ እና የጉስቶ ሬስቶራንቶች ባለቤት ስትሆን፣ በዱባይ የሚገኘውን የጉርሻ ሬስቶራንትም በጋራ ትይዛለች።',
      'Born and raised in Addis Ababa, Tsedey was a former model who opened her first boutique, "Seasonal Style", at age 23. When city development forced her to close her boutique shops, co-founder Elias Ketema suggested she bring her business instinct to coffee — and Kaldi\'s was born. She also owns Lori Agro-Industry and Gusto Restaurants, and co-owns Gursha Restaurant in Dubai.',
    ),
  },
  {
    name: 'Elias Ketema',
    role: L('ተባባሪ መስራች', 'Co-Founder'),
    image: IMG.portraitMan3,
    bio: L(
      'የኢትዮጵያ አየር መንገድ ካፒቴን የሆነው ኤልያስ፣ ካልዲስ ኮፊን ከፀደይ አስራት ጋር በጋራ አቋቋመ፤ ከቡቲክ ንግድ ወደ ቡና የመሸጋገር ሐሳብ በማቅረብ ንግዱን ከአንድ ካፌ ወደ ብሔራዊ የቡና ቤት ሰንሰለት ለማደግ ረድቷል።',
      'An Ethiopian Airlines captain, Elias co-founded Kaldi\'s Coffee alongside Tsedey Asrat, suggesting the move from boutique retail to coffee and helping build the business from a single café into a national coffee house chain.',
    ),
  },
];

export interface Value {
  title: Localized;
  text: Localized;
  icon: 'heritage' | 'quality' | 'community' | 'sustainability' | 'hospitality';
}

export const VALUES: Value[] = [
  {
    title: L('ቅርስ ቀዳሚ', 'Heritage First'),
    text: L(
      'እያንዳንዱ ጽዋ ቡና የተወለደበትን ምድር ያከብራል — ከካልዲ አፈ-ታሪክ እስከ በካፌዎቻችን ውስጥ የሚደረገው የጅብና ሥነ ሥርዓት።',
      'Every cup honors the land where coffee was born — from the legend of Kaldi to the jebena ceremonies in our cafés.',
    ),
    icon: 'heritage',
  },
  {
    title: L('የኢትዮጵያ ቡና', 'Ethiopian Coffee'),
    text: L(
      'ከይርጋቸፌ እስከ ጽዋዎ ድረስ ምርጥ የኢትዮጵያ ቡናዎችን ለቡና ወዳዶች እናመጣለን።',
      'From Yirgacheffe to your cup, we bring the finest Ethiopian coffees to coffee lovers at home and abroad.',
    ),
    icon: 'quality',
  },
  {
    title: L('ማህበረሰብ', 'Community'),
    text: L(
      'ለእያንዳንዱ አዲስ ቅርንጫፍ ካልዲስ ከችግረኛ ቤተሰብ ለመጣ የላቀ የ8ኛ ክፍል ተማሪ የግል ትምህርት ይሰጣል።',
      "For every new branch, Kaldi's provides private schooling for an outstanding grade-8 student from an underprivileged family.",
    ),
    icon: 'community',
  },
  {
    title: L('የአካባቢ እሴት ሰንሰለት', 'Local Value Chain'),
    text: L(
      'የአካባቢውን የእሴት ሰንሰለት — ከገበሬ እስከ ተጠቃሚ — እንደግፋለን፤ ጥራት ተኮር ገበሬዎች ምርጥ ቡናቸውን እንዲያስተዋውቁ እንረዳለን።',
      'We support the local value chain — from farmer to consumer — helping quality-oriented farmers promote their finest coffees.',
    ),
    icon: 'sustainability',
  },
  {
    title: L('ከውስጥ መስፋት', 'Growth From Within'),
    text: L(
      'ሁሉም ሠራተኞች በካልዲስ የሥልጠና ማዕከል ይሰለጥናሉ፣ አብዛኞቹ ሥራ አስኪያጆች እና ተቆጣጣሪዎች በአገልጋይነት እና በገንዘብ ጠባቂነት ጀምረዋል።',
      "All employees train at the Kaldi's training center, and most managers and supervisors started as waiters and cashiers.",
    ),
    icon: 'hospitality',
  },
];

// ── Milestones (verified facts, replacing unverified awards) ───────
export const MILESTONES: { year: string; title: Localized; org: Localized }[] = [
  {
    year: '2005',
    title: L('በአዲስ አበባ ተመሰረተ', 'Founded in Addis Ababa'),
    org: L('ፀደይ አስራት እና ኤልያስ ከተማ', 'Tsedey Asrat & Elias Ketema'),
  },
  {
    year: '2015',
    title: L('ከ4 በላይ ከተሞች ላይ መገኘት', 'Presence in 4+ cities'),
    org: L('ደብረ ዘይት · አዳማ · ባሕር ዳር', 'Debre Zeyit · Adama · Bahir Dar'),
  },
  {
    year: '2016',
    title: L('30 ቅርንጫፎች · 1,800 ሠራተኞች', '30 locations · 1,800 employees'),
    org: L('129.5M ብር ገቢ', '129.5M birr revenue'),
  },
  {
    year: 'Today',
    title: L('33+ ቅርንጫፎች እና በመቀጠል', '33+ locations & counting'),
    org: L('የኢትዮጵያ የቡና ቤት ሰንሰለት', "Ethiopia's coffee house chain"),
  },
];

// ── FAQ (Contact page — verified answers) ──────────────────────────
export interface Faq {
  q: Localized;
  a: Localized;
}

export const FAQS: Faq[] = [
  {
    q: L('ዋና ቅርንጫፋችሁ የት ነው?', 'Where is your flagship branch?'),
    a: L(
      'ዋና መሥሪያ ቤታችን እና ባንዲራ ቅርንጫፋችን በሳርቤት አዳምስ ፓቪሊዮን ህንፃ፣ ሩዝቬልት ስትሪት፣ አዲስ አበባ ይገኛል። በ+251 11 371 4258 ይደውሉ።',
      'Our headquarters and flagship is at the Sarbet Adams Pavillion Building, Roosevelt St, Addis Ababa. Call +251 11 371 4258.',
    ),
  },
  {
    q: L('የስራ ሰዓታችሁ ስንት ነው?', 'What are your opening hours?'),
    a: L(
      'የሳርቤት ባንዲራ ቅርንጫፍ በየቀኑ ከጠዋቱ 8:00 እስከ ምሽቱ 9:00 ክፍት ነው።',
      'The Sarbet flagship is open daily from 8:00 AM to 9:00 PM.',
    ),
  },
  {
    q: L('ምን ያገለግላሉ?', 'What do you serve?'),
    a: L(
      'የደንበኞች ተወዳጆች ማኪያቶ እና ባህላዊ የኢትዮጵያ ጥቁር ቡና (ቡና) ይገኙበታል፤ ከዚህም በተጨማሪ ይርጋቸፌ ቡና፣ የሙዝ ኬክ፣ የጥቁር ደን ኬክ፣ በርገር፣ ሳንድዊች እና ፓስትሪዎች። የተጠበሰ ቡና ፍሬም በሱቅ ይገኛል።',
      'Customer favorites include the macchiato and traditional Ethiopian black coffee (buna), plus Yirgacheffe coffee, banana cake, black forest cake, burgers, sandwiches and pastries. Roasted coffee beans are also available at retail.',
    ),
  },
  {
    q: L('የት ላገኛችሁ እችላለሁ?', 'Where can I find you?'),
    a: L(
      'በአዲስ አበባ (የቦሌ ዓለም አቀፍ አየር ማረፊያ፣ ቦሌ ቡልቡላ፣ ጆሞ 1 እና ኩርቱ አራዳን ጨምሮ በበርካታ ቦታዎች) በተጨማሪም በደብረ ዘይት፣ በአዳማ እና በባሕር ዳር እናገለግላለን።',
      'We serve Addis Ababa (multiple locations, including Bole International Airport, Bole Bulbula, Jomo 1 and Kurtu Arada) plus Debre Zeyit, Adama and Bahir Dar.',
    ),
  },
  {
    q: L('ማህበረሰቡን ትደግፋላችሁ?', 'Do you support the community?'),
    a: L(
      'አዎ — በእያንዳንዱ አዲስ ቅርንጫፍ ካልዲስ ከችግረኛ ቤተሰብ ለመጣ የላቀ የ8ኛ ክፍል ተማሪ የግል ትምህርት ይሰጣል።',
      "Yes — with every new branch, Kaldi's provides private school education for an outstanding grade-8 student from an underprivileged family.",
    ),
  },
];

// ── Stats used on the homepage (verified) ──────────────────────────
export const STATS: { value: string; label: Localized }[] = [
  { value: '33+', label: L('በመላ ኢትዮጵያ ካፌዎች', 'Cafés across Ethiopia') },
  { value: '1,800', label: L('ሠራተኞች (2016)', 'Employees (2016)') },
  { value: '2005', label: L('ከመጀመሪያ ቀን ጀምሮ', 'Serving since day one') },
  { value: '129.5M', label: L('የብር ገቢ (2016)', 'Birr revenue (2016)') },
];
