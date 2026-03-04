"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  const promises = [
    "No harmful shortcuts or quick-fix hormones",
    "Clear feeding protocol based on farm reality",
    "Practical guidance your team can implement daily",
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-28">
      <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                The Dairy Guru Ji Edge
              </span>
            </div>
            <h2 className="text-3xl font-black tracking-tight text-text-dark md:text-6xl">
              Why Farmers{" "}
              <span className="text-primary">Choose Dairy Guru Ji</span>
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-medium leading-relaxed text-text-dark/75">
              We combine science, ethics, and field execution so farmers get
              repeatable results instead of one-time promises.
            </p>
          </div>

          <div className="rounded-3xl border border-primary/10 bg-bg-light p-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              What We Promise
            </p>
            <div className="space-y-3">
              {promises.map((promise) => (
                <div key={promise} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium leading-relaxed text-text-dark/80">
                    {promise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative rounded-[2rem] border border-primary/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(23,36,50,0.08)]"
            >
              <div className="absolute right-6 top-6 text-5xl font-black text-primary/10">
                0{index + 1}
              </div>

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-black tracking-tight text-text-dark">
                {item.title}
              </h3>
              <p className="text-base font-medium leading-relaxed text-text-dark/75">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
          >
            Explore Products
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary/5"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
