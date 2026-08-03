import { IMG } from './images';
import { L, type Localized } from '@/lib/i18n';

export interface BlogPost {
  slug: string;
  title: Localized;
  category: Localized;
  date: string;
  readTime: Localized;
  image: string;
  excerpt: Localized;
  body: Localized[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'kaldi-legend-coffee-origin',
    title: L(
      'የካልዲ አፈ-ታሪክ፡ እረኛው ቡናን የሰጠን እንዴት ነው',
      'The Legend of Kaldi: How a Goatherd Gave Us Coffee',
    ),
    category: L('ቅርስ', 'Heritage'),
    date: 'June 12, 2026',
    readTime: L('የ4 ደቂቃ ንባብ', '4 min read'),
    image: IMG.highlands,
    excerpt: L(
      'ስማችን የመጣው ቡናን በ850 ዓ.ም. አካባቢ በማግኘት ከሚመሰከርለት የኢትዮጵያ እረኛ ካልዲ ነው። የቡናው ራሱ የመነሻ ታሪክ ነው — እና የተጀመረው በኢትዮጵያ ነው።',
      'Our name comes from the Ethiopian goatherd credited with discovering coffee around 850 CE. It is the origin story of coffee itself — and it starts in Ethiopia.',
    ),
    body: [
      L(
        'በኢትዮጵያ አፈ-ታሪክ መሠረት፣ ካልዲ የተባለ እረኛ ፍየሎቹ ዝቅተኛ በሆነ ዛፍ ላይ ከሚገኙ ደማቅ ቀይ ፍሬዎች ከበሉ በኋላ ያልተለመደ ጉልበት ይዘው ሲጨፍሩ እና ሲዘሉ አስተዋለ። በጉጉት ተነሳስቶ፣ ካልዲ ራሱ ፍሬዎቹን ቀመሰ።',
        'According to Ethiopian legend, a goatherd named Kaldi noticed his goats behaving strangely — dancing and leaping with unusual energy — after grazing on bright red cherries from a low-growing tree. Curious, Kaldi tasted the cherries himself.',
      ),
      L(
        'ታሪኩ እንደሚለው፣ ፍሬዎቹን ወደ አቅራቢያው ገዳም ወሰደው፤ መነኮሳቱ በእንግዳው ፍሬ ተጠራጥረው ወደ እሳት ጣሉት። የተጠበሱት ፍሬዎች ያስከተሉት መዓዛ የመጀመሪያውን የቡና ገንዳ እንዲያፈሉ አሳመናቸው።',
        'The story says he carried the cherries to a nearby monastery, where the monks, suspicious of the strange fruit, threw them into the fire. The aroma that rose from the roasting beans convinced them to brew the first pot of coffee.',
      ),
      L(
        'ታሪኩ በቀጥታ እውነት ይሁን አይሁን፣ አስፈላጊውን ነገር ይይዛል፡ ቡና የተወለደው በኢትዮጵያ ነው፣ እና ከዚያን ጊዜ ጀምሮ በባህላችን ውስጥ ተሳስሯል። እያንዳንዱ የካልዲስ ጽዋ ለዚያ ጨፋሪ መንጋ እና ለጉጉት ለነበረው ወጣት እረኛ ትንሽ ክብር ነው።',
        'Whether or not the story is literally true, it captures something essential: coffee was born in Ethiopia, and it has been woven into our culture ever since. Every Kaldi\'s cup is a small tribute to that dancing herd and a curious young goatherd.',
      ),
    ],
    featured: true,
  },
  {
    slug: 'from-boutique-to-barista-tsedey-asrat',
    title: L(
      'ከቡቲክ እስከ ባሪስታ፡ የፀደይ አስራት ታሪክ',
      'From Boutique to Barista: The Story of Tsedey Asrat',
    ),
    category: L('መስራቾች', 'Founders'),
    date: 'May 28, 2026',
    readTime: L('የ5 ደቂቃ ንባብ', '5 min read'),
    image: IMG.cafeInterior,
    excerpt: L(
      'ካልዲስ ኮፊ ከመቋቋሙ በፊት መስራቿ ፀደይ አስራት ሞዴል ነበረች፣ በ23 ዓመቷ "Seasonal Style" የተባለውን የመጀመሪያ ቡቲኳን ከፈተች። ቡቲኮችን እንዴት ለባሪስታዎች እንደተለወጠች እነሆ።',
      'Before Kaldi\'s Coffee, founder Tsedey Asrat was a model who opened her first boutique, "Seasonal Style", at age 23. Here\'s how she traded boutiques for baristas.',
    ),
    body: [
      L(
        'በአዲስ አበባ ተወልዳ ያደገችው ፀደይ አስራት ከቡና በጣም የራቀ ሥራ ገንብታለች። የቀድሞ ሞዴል ስትሆን በ23 ዓመቷ "Seasonal Style" የተባለውን የመጀመሪያ ቡቲኳን ከፈተች — በአዲስ አበባ እምብርት የፋሽን ችርቻሮ ንግድ።',
        'Born and raised in Addis Ababa, Tsedey Asrat built a career far from coffee. A former model, she opened her first boutique, "Seasonal Style", at age 23 — a fashion retail business in the heart of Addis.',
      ),
      L(
        'የከተማ ልማት ቡቲኮቿን እንዲዘጉ ሲያስገድዳት፣ ተባባሪ መስራች ኤልያስ ከተማ — የኢትዮጵያ አየር መንገድ ካፒቴን — የንግድ አስተሳሰቧን ወደ ቡና እንድታዞር ሐሳብ ሰጣት። ሐሳቡ በ2005 የተመሰረተው ካልዲስ ኮፊ ሆነ።',
        'When city development forced her to close her boutique shops, co-founder Elias Ketema — an Ethiopian Airlines captain — suggested she bring her business instinct to coffee instead. The idea became Kaldi\'s Coffee, founded in 2005.',
      ),
      L(
        'ዛሬ ፀደይ ካልዲስን እንደ ዋና ሥራ አስኪያጅ ትመራለች፤ በተጨማሪም የሎሪ አግሮ-ኢንዱስትሪ እና የጉስቶ ሬስቶራንቶች ባለቤት ስትሆን፣ በዱባይ የሚገኘውን የጉርሻ ሬስቶራንትንም በጋራ ትይዛለች። ግን ሁሉም የተጀመረው በተዘጋ ቡቲክ እና በጥሩ ሐሳብ ነው።',
        'Today Tsedey leads Kaldi\'s as Managing Director while also owning Lori Agro-Industry and Gusto Restaurants, and co-owning Gursha Restaurant in Dubai. But it all started with a closed boutique and a good idea.',
      ),
    ],
  },
  {
    slug: 'kaldis-growth-30-locations',
    title: L(
      '30 ቅርንጫፎች እና በመቀጠል፡ የካልዲስ ኮፊ እድገት',
      '30 Locations and Counting: The Growth of Kaldi\'s Coffee',
    ),
    category: L('ኩባንያ', 'Company'),
    date: 'April 15, 2026',
    readTime: L('የ4 ደቂቃ ንባብ', '4 min read'),
    image: IMG.valley,
    excerpt: L(
      'ከ2005 አንድ ካፌ ጀምሮ በ2016 30 ቅርንጫፎች ድረስ — የኢትዮጵያ የቡና ቤት ሰንሰለት ታሪክ።',
      'From a single café in 2005 to 30 locations by 2016 — the story of Ethiopia\'s homegrown coffee house chain.',
    ),
    body: [
      L(
        'ካልዲስ ኮፊ የመጀመሪያውን ካፌውን በ2005 በአዲስ አበባ ከፈተ፣ በፀደይ አስራት እና በኤልያስ ከተማ የተመሰረተ። ሐሳቡ ቀላል ነበር፡ በአገር ውስጥ የበቀለን እና የተጠበሰ የኢትዮጵያ ቡና በኢትዮጵያዊ እንግዳ ተቀባይነት ማገልገል።',
        'Kaldi\'s Coffee opened its first café in Addis Ababa in 2005, founded by Tsedey Asrat and Elias Ketema. The idea was simple: serve Ethiopian coffee, grown and roasted at home, with Ethiopian hospitality.',
      ),
      L(
        'በ2015 ሰንሰለቱ ከዋና ከተማው ባሻገር ተስፋፍቶ ነበር፣ በደብረ ዘይት፣ በአዳማ እና በባሕር ዳር የተረጋገጠ መገኘት አለው። ከአንድ ዓመት በኋላ፣ በ2016፣ ካልዲስ 30 ቅርንጫፎች፣ 1,800 ሠራተኞች እና 129.5 ሚሊዮን ብር ገቢ ደርሷል።',
        'By 2015 the chain had expanded beyond the capital, with a confirmed presence in Debre Zeyit, Adama and Bahir Dar. A year later, in 2016, Kaldi\'s had grown to 30 locations, employed 1,800 people and generated 129.5 million birr in revenue.',
      ),
      L(
        'ዛሬ ሰንሰለቱ በመላ ኢትዮጵያ ከ30 በላይ ቅርንጫፎች ይቆጥራል — ከቦሌ ዓለም አቀፍ አየር ማረፊያ እስከ ባሕር ዳር ሐይቅ ዳርቻ ድረስ — ወደ ቅርንጫፍ ከመቀላቀል በፊት እያንዳንዱ ሠራተኛ በካልዲስ የሥልጠና ማዕከል ይሰለጥናል።',
        'Today the chain counts more than 30 locations across Ethiopia — from Bole International Airport to the Bahir Dar lakefront — with every employee trained at the Kaldi\'s training center before joining a branch.',
      ),
    ],
  },
  {
    slug: 'training-and-community-at-kaldis',
    title: L(
      'ሥልጠና፣ ማህበረሰብ እና የካልዲስ መንገድ',
      'Training, Community and the Kaldi\'s Way',
    ),
    category: L('ኩባንያ', 'Company'),
    date: 'March 9, 2026',
    readTime: L('የ4 ደቂቃ ንባብ', '4 min read'),
    image: IMG.barista,
    excerpt: L(
      'እያንዳንዱ የካልዲስ ሠራተኛ በኩባንያው የሥልጠና ማዕከል ይሰለጥናል፣ እና በእያንዳንዱ አዲስ ቅርንጫፍ ከችግረኛ ቤተሰብ የመጣ ተማሪ የግል ትምህርት ያገኛል።',
      'Every Kaldi\'s employee trains at the company training center, and with every new branch, a student from an underprivileged family gets a private school education.',
    ),
    body: [
      L(
        'ከእያንዳንዱ ጽዋ በስተጀርባ ለሰዎች ያለ ቁርጠኝነት አለ። ሁሉም የካልዲስ ሠራተኞች በቅርንጫፍ ከመሥራት በፊት የኩባንያውን የሥልጠና ማዕከል ያልፋሉ — እና አብዛኞቹ ሥራ አስኪያጆች እና ተቆጣጣሪዎች በአገልጋይነት እና በገንዘብ ጠባቂነት ጀምረዋል።',
        'Behind every cup is a commitment to people. All Kaldi\'s employees go through the company training center before working at a branch — and most managers and supervisors started as waiters and cashiers.',
      ),
      L(
        'ያ ቁርጠኝነት ከቡድኑ ባሻገር ይዘልቃል። በሚከፈት በእያንዳንዱ አዲስ ቅርንጫፍ ካልዲስ ከችግረኛ ቤተሰብ የመጣ የላቀ የ8ኛ ክፍል ተማሪን መርጦ የግል ትምህርቱን ይሸፍናል።',
        'That commitment extends beyond the team. With every new branch opened, Kaldi\'s selects one outstanding grade-8 student from an underprivileged family and provides their private school education.',
      ),
      L(
        'ኩባንያው በአመራሩ በኩልም ይመልሳል፡ መስራቿ ፀደይ አስራት የኢትዮጵያ ካንሰር ማህበርን እና የኢትዮጵያ የስኳር ህመም ማህበርን ትደግፋለች። ለእኛ ቡና ሁልጊዜ ከጽዋው በላይ ነገር ነው።',
        'The company also gives back through its leadership: founder Tsedey Asrat supports the Ethiopian Cancer Association and the Ethiopian Diabetic Association. Coffee, for us, has always been about more than the cup.',
      ),
    ],
  },
];
