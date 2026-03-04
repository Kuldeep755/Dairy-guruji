"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { highlights } from "@/lib/data";

export default function AboutFounder() {
  return (
    <section className="relative overflow-hidden px-6 pb-32 pt-32 bg-white">
      {/* Background Decor */}
      <div className="pointer-events-none absolute -top-24 left-[-8%] h-96 w-96 rounded-full bg-secondary/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-24 right-[-12%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black leading-[1.1] text-text-dark md:text-7xl tracking-tight mb-8">
            व्यापार नहीं,
            <span className="mt-2 block text-primary font-bold italic">
              रिश्ते बनाते हैं
            </span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-text-dark/75 md:text-2xl font-medium mb-10">
            We're not just selling products. We partner with dairy farmers for
            healthy cattle, safer milk and stable long-term profit with trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              "Farmer-first model",
              "Field-tested products",
              "Daily support team",
              "Scientific formulation",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-text-dark/80">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4">
            {highlights.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-primary/10 bg-bg-light/50 px-6 py-5 text-base font-bold text-text-dark/80 backdrop-blur-md transition-all hover:bg-white hover:shadow-lg"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] rotate-3 blur-2xl opacity-50 group-hover:rotate-6 transition-transform duration-1000" />
          <div className="relative overflow-hidden rounded-[3rem] border-8 border-white shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-white h-[400px] md:h-[650px]">
            <Image
              src="/images/about/hero.jpeg"
              alt="Dairy farm with healthy cows"
              fill
              className="object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

            {/* Founder Card Overlay */}
            <div className="absolute bottom-10 right-10 w-[280px] rounded-[2.5rem] border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-5 hover:bg-white">
              <div className="relative h-48 w-full rounded-[2rem] overflow-hidden mb-6 border-4 border-white shadow-lg">
                <Image
                  src="/images/about/founder.jpg"
                  alt="Dairy Guru Ji founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-dark/40 mb-2">
                  Founder Message
                </p>
                <p className="text-2xl font-black text-primary leading-tight">
                  किसान की तरक्की पहले
                </p>
                <div className="mt-4 h-1 w-12 bg-secondary mx-auto rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
