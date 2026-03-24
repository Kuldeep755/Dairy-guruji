"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Package,
  Sparkles,
} from "lucide-react";
import { categories } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProductRange() {
  const plugin = useRef(
    Autoplay({
      delay: 2800,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28">
      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary">
              <Sparkles className="h-4 w-4" />
              Bestselling Range
            </div>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-text-dark md:text-3xl">
              Advanced Nutrition for Better Health,
              <span className="block text-secondary">
                Higher Production, and Faster Growth.
              </span>
            </h2>

            <p className="mt-4  text-lg text-text-dark/70 leading-relaxed ">
              Dairy Guruji cattle feed and supplements are made from real farm
              experience, research, and a deep understanding of Indian climate,
              breeds, and the nutritional needs of dairy animals from calves to
              milk-producing cows and buffaloes. With the support of Indian
              veterinary experts and researchers, our goal is to provide
              affordable, effective, and trusted nutrition that helps Indian
              dairy farmers improve animal health, milk production, and farm
              profit. We are committed to helping farmers build healthier
              animals and a better dairy future.
            </p>
          </div>
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
                className="pl-5 basis-full md:basis-1/2 xl:basis-1/3"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_16px_50px_rgba(20,33,45,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_65px_rgba(20,33,45,0.14)]">
                  <div className="relative border-b border-primary/10 bg-[linear-gradient(135deg,#fffef9_0%,#f6f2e4_55%,#eef7ef_100%)] p-5">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-primary shadow-sm">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Popular
                      </span>
                      <span className="rounded-full border border-primary/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-text-dark/55">
                        Category
                      </span>
                    </div>

                    <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-[1.5rem] bg-white/70">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,125,70,0.08),transparent_60%)]" />
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={280}
                        height={280}
                        className="relative h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xl font-black tracking-tight text-text-dark">
                        {item.title}
                      </h3>
                      <div className="rounded-xl bg-secondary/25 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-text-dark">
                        Top Rated
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-text-dark/70">
                      {item.desc}
                    </p>

                    <div className="mt-5 space-y-2.5">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 rounded-xl border border-primary/10 bg-primary/5 px-3 py-2 text-sm text-text-dark/90"
                        >
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Link
                        href="/products"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary/90"
                      >
                        Shop now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/products"
                        className="inline-flex items-center justify-center rounded-2xl border border-primary/15 bg-white px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary/5"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
