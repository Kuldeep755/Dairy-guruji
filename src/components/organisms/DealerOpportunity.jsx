"use client";

import Link from "next/link";
import { Quote, TrendingUp, CheckCircle2, ArrowUpRight } from "lucide-react";
import { dealerTestimonials } from "@/lib/data";

export default function DealerOpportunity() {
  const testimonial = dealerTestimonials[0];
  const benefits = [
    "High Profit Margins & Incentives",
    "Marketing & Field Training Support",
    "Exclusive Territory Rights",
  ];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fffaf0_60%,#ffffff_100%)] px-6 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* LEFT CONTENT */}
        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-secondary/20 bg-white px-5 py-2 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <TrendingUp className="h-8 w-8" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-secondary">
              Partner With Us
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-black leading-[1.05] text-text-dark md:text-6xl">
            Golden Opportunity
            <span className="block text-secondary">for Growth-Focused Dealers</span>
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-text-dark/70 md:text-xl">
            Join hands with us to scale your business, support dairy farmers,
            and build a trusted reputation in your region with proven products.
          </p>

          {/* BENEFITS */}
          <div className="mb-12 grid gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="group flex items-center gap-4 rounded-2xl border border-secondary/15 bg-white/90 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-base font-semibold text-text-dark md:text-lg">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-secondary bg-secondary px-8 py-4 text-lg font-bold text-text-dark transition hover:-translate-y-0.5 hover:bg-white"
            >
              Become a Dealer
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <span className="rounded-full border border-secondary/20 bg-white px-5 py-2 text-sm font-semibold text-text-dark/70">
              Limited territories available
            </span>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-secondary/15 to-primary/15 blur-3xl" />

          <div className="relative rounded-[2rem] border border-gray-200/80 bg-[#fcfbf7]/95 p-8 shadow-2xl backdrop-blur md:p-10">
            <div className="mb-8 inline-flex rounded-full border border-secondary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Dealer Success Story
            </div>
            <Quote className="absolute right-8 top-8 h-16 w-16 text-text-dark/10" />

            <p className="mb-10 max-w-xl text-xl font-semibold leading-relaxed text-text-dark md:text-2xl">
              “{testimonial.quote}”
            </p>

            {/* Growth Box */}
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6">
                <p className="mb-1 text-xs uppercase tracking-widest text-secondary">
                  Verified Growth
                </p>
                <p className="text-3xl font-black text-text-dark">
                  {testimonial.growth}
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6">
                <p className="mb-1 text-xs uppercase tracking-widest text-secondary">
                  Partnership Since
                </p>
                <p className="text-3xl font-black text-text-dark">2021</p>
              </div>
            </div>

            {/* Dealer Info */}
            <div className="flex items-center gap-4 rounded-2xl border border-secondary/20 bg-white p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-xl font-bold text-secondary">
                {testimonial.name[0]}
              </div>

              <div>
                <h4 className="text-lg font-bold text-text-dark">
                  {testimonial.name}
                </h4>

                <p className="text-sm text-text-dark/60">
                  {testimonial.location} •{" "}
                  <span className="font-semibold text-secondary">
                    {testimonial.territory}
                  </span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-text-dark/45">
              Verified dealer outcome from our partner network
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
