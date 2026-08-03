import { L } from '@/lib/i18n';
import { Seo, coffeeShopSchema } from '@/lib/seo';
import { Hero } from '@/components/home/Hero';
import { BrandStory } from '@/components/home/BrandStory';
import { SignatureCoffees } from '@/components/home/SignatureCoffees';
import { Ceremony } from '@/components/home/Ceremony';
import { LocationsPreview } from '@/components/home/LocationsPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { Sustainability } from '@/components/home/Sustainability';
import { Newsletter } from '@/components/home/Newsletter';

export default function HomePage() {
  return (
    <>
      <Seo
        title={L(
          'ካልዲስ ኮፊ — ቡና የተወለደበት | የኢትዮጵያ የቡና ቤት ሰንሰለት',
          "Kaldi's Coffee — Where Coffee Was Born | Ethiopia's Coffee House Chain",
        )}
        description={L(
          'ከ2005 ጀምሮ በአፈ-ታሪክ እረኛው ካልዲ ስም የተሰየመ የኢትዮጵያ የቡና ቤት ሰንሰለት። በአዲስ አበባ፣ ደብረ ዘይት፣ አዳማ እና ባሕር ዳር ከ33 በላይ ካፌዎች።',
          "Ethiopia's homegrown coffee house chain since 2005, named after the goatherd Kaldi. 33+ cafés across Addis Ababa, Debre Zeyit, Adama and Bahir Dar.",
        )}
        path="/"
        jsonLd={coffeeShopSchema}
      />
      <Hero />
      <BrandStory />
      <SignatureCoffees />
      <Ceremony />
      <LocationsPreview />
      <Testimonials />
      <Sustainability />
      <Newsletter />
    </>
  );
}
