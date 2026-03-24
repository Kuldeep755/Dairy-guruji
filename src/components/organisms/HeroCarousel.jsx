"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroSlides } from "@/lib/data";

export default function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[autoplay.current]}
      className="w-full"
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.play}
    >
      <CarouselContent>
        {heroSlides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[72vh] min-h-[520px] w-full overflow-hidden sm:h-[68vh] md:min-h-0">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover transition-transform duration-10000 hover:scale-110"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 text-white w-full ">
                  <div className="">
                    <h1 className="text-xl sm:text-5xl md:text-5xl font-black space-[1em]">
                      {slide.title}
                    </h1>

                    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-white/80 max-w-xl leading-relaxed">
                      {slide.subtitle}
                    </p>

                    <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                      <Link
                        href={slide.link}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-text-dark shadow-2xl hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-secondary/20"
                      >
                        {slide.cta}
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Navigation Buttons - Hidden on small screens, better styled on large */}
    </Carousel>
  );
}
