import { FaqSection } from '@/components/site/faq';
import { Hero } from '@/components/site/hero';
import { HowItWorksSection } from '@/components/site/how-it-works';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorksSection />
      <FaqSection />
    </main>
  );
}
