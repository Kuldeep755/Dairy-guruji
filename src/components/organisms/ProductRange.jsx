"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { categories } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductRange() {
  const plugin = useRef(
    Autoplay({
      delay: 2600,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="relative overflow-hidden bg-bg-light px-6 py-24 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Our Formulations
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-text-dark md:text-5xl">
              Science-Backed Nutrition
              <span className="block text-secondary">Built for Real Dairy Farms</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-dark/70 md:text-lg">
              Products designed around farm realities, herd lifecycle, and
              practical on-ground performance.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
          >
            Explore all products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-5">
            {categories.map((item) => (
              <CarouselItem
                key={item.title}
                className="pl-5 basis-full md:basis-1/2"
              >
                <article className="group relative flex h-full flex-col-reverse overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_10px_35px_rgba(16,24,40,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,24,40,0.16)] sm:flex-row">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary/80 to-primary/40" />

                  <div className="flex flex-1 flex-col justify-center p-7 md:p-8">
                    <span className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                      Category
                    </span>

                    <h3 className="mb-3 text-xl font-black tracking-tight text-text-dark md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-text-dark/70 md:text-base">
                      {item.desc}
                    </p>

                    <ul className="mb-7 space-y-2.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 rounded-xl border border-primary/10 bg-bg-light/70 px-3 py-2 text-sm text-text-dark/90"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/products"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="relative flex items-center justify-center border-b border-primary/10 bg-gradient-to-br from-white via-bg-light to-primary/5 p-7 sm:w-2/5 sm:border-b-0 sm:border-l">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_65%)]" />
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={320}
                      className="relative h-56 w-auto max-w-[220px] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-4 hidden h-11 w-11 border border-primary/20 bg-white text-primary shadow-lg hover:bg-primary hover:text-white md:flex" />
          <CarouselNext className="-right-4 hidden h-11 w-11 border border-primary/20 bg-white text-primary shadow-lg hover:bg-primary hover:text-white md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
