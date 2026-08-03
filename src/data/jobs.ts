import { IMG } from './images';
import { L, type Localized } from '@/lib/i18n';

export interface CareerFact {
  title: Localized;
  text: Localized;
  image: string;
}

/** Verified facts about working at Kaldi's — no open roles are published. */
export const CAREER_FACTS: CareerFact[] = [
  {
    title: L('ለሁሉም ሥልጠና', 'Training for Everyone'),
    text: L(
      'ካልዲስ ወደ ቅርንጫፍ ከመቀላቀል በፊት ሁሉም ሠራተኛ የሚያልፍበት የሥልጠና ማዕከል አለው።',
      "Kaldi's has a training center that every employee goes through before joining a branch.",
    ),
    image: IMG.barista,
  },
  {
    title: L('ከመሬት ደረጃ ያድጉ', 'Grow From the Floor'),
    text: L(
      'አብዛኞቹ ሥራ አስኪያጆች እና ተቆጣጣሪዎች በአገልጋይነት እና በገንዘብ ጠባቂነት ጀምረዋል — መንገዱ ከመሬት ወደ ላይ ለሁሉም ክፍት ነው።',
      'Most managers and supervisors started as waiters and cashiers — the path is open from the floor up.',
    ),
    image: IMG.barista2,
  },
  {
    title: L('የማህበረሰብ ተጽዕኖ', 'Community Impact'),
    text: L(
      'በእያንዳንዱ አዲስ ቅርንጫፍ ካልዲስ ከችግረኛ ቤተሰብ ለመጣ የላቀ የ8ኛ ክፍል ተማሪ የግል ትምህርት ይሰጣል።',
      "With every new branch, Kaldi's provides private school education for an outstanding grade-8 student from an underprivileged family.",
    ),
    image: IMG.cafeInterior,
  },
  {
    title: L('ከጽዋ ባሻገር እንክብካቤ', 'Care Beyond the Cup'),
    text: L(
      'መስራቻችን የኢትዮጵያ ካንሰር ማህበርን እና የኢትዮጵያ የስኳር ህመም ማህበርን ትደግፋለች።',
      'Our founder supports the Ethiopian Cancer Association and the Ethiopian Diabetic Association.',
    ),
    image: IMG.cafeInterior2,
  },
];

export const PERKS: { title: Localized; text: Localized }[] = [
  {
    title: L('የቡና ትምህርት', 'Coffee Education'),
    text: L(
      'እያንዳንዱ ሠራተኛ በካልዲስ የሥልጠና ማዕከል ይሰለጥናል — የቡና ጥበብ የእያንዳንዱ ሥራ መሠረት ነው።',
      "Every employee trains at the Kaldi's training center — coffee craft is the foundation of every role.",
    ),
  },
  {
    title: L('ከውስጥ መስፋት', 'Grow From Within'),
    text: L(
      'አብዛኞቹ ሥራ አስኪያጆች እና ተቆጣጣሪዎች በአገልጋይነት እና በገንዘብ ጠባቂነት ጀምረዋል። ትጋት እዚህ ይስተዋላል።',
      'Most managers and supervisors started as waiters and cashiers. Hard work is noticed here.',
    ),
  },
  {
    title: L('የኢትዮጵያ እንግዳ ተቀባይነት', 'Ethiopian Hospitality'),
    text: L(
      'ከአዲስ አበባ እስከ ባሕር ዳር ድረስ ካለው የኢትዮጵያ የቡና ቤት ሰንሰለት ቡድን ጋር ይቀላቀሉ።',
      "Join the team behind Ethiopia's homegrown coffee house chain, from Addis Ababa to Bahir Dar.",
    ),
  },
  {
    title: L('ማህበረሰብ ቀዳሚ', 'Community First'),
    text: L(
      'በሚከፍት በእያንዳንዱ አዲስ ቅርንጫፍ የልጅን ትምህርት የሚሸፍንበት ቦታ ይስሩ።',
      "Work somewhere that funds a child's education with every new branch it opens.",
    ),
  },
];
