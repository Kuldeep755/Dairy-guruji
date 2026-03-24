"use client";

import HeroCarousel from "@/components/organisms/HeroCarousel";
import AboutFounder from "@/components/organisms/AboutFounder";
import PainPoints from "@/components/organisms/PainPoints";
import BreedFocus from "@/components/organisms/BreedFocus";
import ProductRange from "@/components/organisms/ProductRange";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";
import Stats from "@/components/organisms/Stats";
import DealerOpportunity from "@/components/organisms/DealerOpportunity";
import CareersSection from "@/components/organisms/CareersSection";
import SocialImpact from "@/components/organisms/SocialImpact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <HeroCarousel />
      <AboutFounder />
      <Stats />
      <PainPoints />
      <ProductRange />
      <BreedFocus />
      <SocialImpact />
      <WhyChooseUs />
      <DealerOpportunity />
      <CareersSection />
    </main>
  );
}
