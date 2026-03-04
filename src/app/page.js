"use client";

import HeroCarousel from "@/components/organisms/HeroCarousel";
import AboutFounder from "@/components/organisms/AboutFounder";
import PainPoints from "@/components/organisms/PainPoints";
import BreedFocus from "@/components/organisms/BreedFocus";
import ProductRange from "@/components/organisms/ProductRange";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";
import Stats from "@/components/organisms/Stats";
import Testimonials from "@/components/organisms/Testimonials";
import DealerOpportunity from "@/components/organisms/DealerOpportunity";
import FAQ from "@/components/organisms/FAQ";
import CareersSection from "@/components/organisms/CareersSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg-light">
      <HeroCarousel />
      <AboutFounder />
      <Stats />
      <PainPoints />
      <BreedFocus />
      <ProductRange />
      <WhyChooseUs />
      <DealerOpportunity />
      <CareersSection />
    </main>
  );
}
