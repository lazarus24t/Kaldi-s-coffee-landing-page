import { HandHeart, Recycle, Sprout, Users } from 'lucide-react';
import { IMG } from '@/data/images';
import { BRAND_STORY } from '@/data/content';
import { useLang, L } from '@/lib/i18n';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

const PILLARS: { icon: typeof Sprout; title: ReturnType<typeof L>; text: ReturnType<typeof L> }[] = [
  {
    icon: Sprout,
    title: L('ከእርሻ እስከ ጽዋ', 'Farm to Cup'),
    text: L(
      'የአካባቢ የእሴት ሰንሰለት — ከገበሬ እስከ ተጠቃሚ — የኢትዮጵያ ቡናን በቤት ውስጥ እንዲበለጽግ የሚያደርግ።',
      'A local value chain — from farmer to consumer — that keeps Ethiopian coffee thriving at home.',
    ),
  },
  {
    icon: HandHeart,
    title: L('የማህበረሰብ ትምህርት', 'Community Education'),
    text: L(
      'በእያንዳንዱ አዲስ ቅርንጫፍ ካልዲስ ከችግረኛ ቤተሰብ ለመጣ የላቀ የ8ኛ ክፍል ተማሪ የግል ትምህርት ይሰጣል።',
      "With every new branch, Kaldi's provides private school education for an outstanding grade-8 student from an underprivileged family.",
    ),
  },
  {
    icon: Users,
    title: L('ከጽዋ ባሻገር እንክብካቤ', 'Care Beyond the Cup'),
    text: L(
      'መስራቻችን የኢትዮጵያ ካንሰር ማህበርን እና የኢትዮጵያ የስኳር ህመም ማህበርን ትደግፋለች።',
      'Our founder supports the Ethiopian Cancer Association and the Ethiopian Diabetic Association.',
    ),
  },
  {
    icon: Recycle,
    title: L('የኢትዮጵያ እንግዳ ተቀባይነት', 'Ethiopian Hospitality'),
    text: L(
      'በአዲስ አበባ፣ ደብረ ዘይት፣ አዳማ እና ባሕር ዳር ከ33 በላይ ካፌዎች — በሁሉም ቦታ ተመሳሳይ ሞቅ ያለ አቀባበል።',
      '33+ cafés across Addis Ababa, Debre Zeyit, Adama and Bahir Dar — the same warm welcome everywhere.',
    ),
  },
];

export function Sustainability() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow={t(L('ዘላቂነት', 'Sustainability'))}
            title={t(L('ለገበሬዎቹ ጥሩ።', 'Good for the farmers.'))}
            accent={t(L('ለጽዋዎ በጣም ጥሩ።', 'Great for your cup.'))}
            description={t(BRAND_STORY.sustainability)}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title.en} delay={i * 0.08}>
                <div className="group h-full rounded-3xl border border-espresso-900/8 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-prussian text-gold-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-espresso-900">
                    {t(pillar.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-700/80">{t(pillar.text)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Imagery */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <SmartImage
              src={IMG.harvest}
              alt={t(L('ቡና ፍሬዎችን በፀሐይ የሚያደርቁ ገበሬዎች — ቡናችን የሚመነጨው ከዚህ ነው', 'Farmers drying coffee cherries in the sun — where our coffee begins'))}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
            />
          </div>
          <Reveal delay={0.25} className="absolute -bottom-8 -left-4 sm:-left-8">
            <div className="flex items-center gap-4 rounded-3xl bg-prussian px-7 py-6 text-cream shadow-lift">
              <p className="font-display text-4xl font-semibold text-gold-400">33+</p>
              <p className="max-w-[130px] text-sm leading-snug text-white/75">
                {t(L('በመላ ኢትዮጵያ ካፌዎች', 'cafés across Ethiopia'))}
              </p>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
