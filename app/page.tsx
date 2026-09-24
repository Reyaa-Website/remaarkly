import { Hero } from '@/components/home/hero';
import { FeaturedProductSection } from '@/components/home/featured-product';
import { PetRouteShowcase } from '@/components/home/petroute-showcase';
import { StatsSection } from '@/components/home/stats-section';
import { FeaturesGrid } from '@/components/home/features-grid';
import { PhilosophySection } from '@/components/home/philosophy-section';
import { CtaBanner } from '@/components/home/cta-banner';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProductSection />
      <PetRouteShowcase />
      <StatsSection />
      <FeaturesGrid />
      <PhilosophySection />
      <CtaBanner />
    </div>
  );
}
