"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { farmerPainPoints } from "@/lib/data";

const accentStyles = [
  {
    shell: "border-primary/20",
    badge: "border-white/20 bg-white/12 text-white",
    line: "from-primary/70 via-primary/30 to-transparent",
    panel: "from-primary/18 to-black/55",
  },
  {
    shell: "border-secondary/25",
    badge: "border-white/20 bg-white/12 text-white",
    line: "from-secondary/75 via-secondary/35 to-transparent",
    panel: "from-secondary/18 to-black/60",
  },
  {
    shell: "border-accent/25",
    badge: "border-white/20 bg-white/12 text-white",
    line: "from-accent/75 via-accent/35 to-transparent",
    panel: "from-accent/18 to-black/60",
  },
];

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/[0.06] to-transparent" />
      <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.98),rgba(245,242,232,0.9))] p-8 shadow-[0_20px_60px_rgba(23,36,50,0.08)] sm:p-10">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary">
                  <Sparkles className="h-4 w-4" />
                  Solving Farm Challenges
                </div>

                <h2 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-text-dark sm:text-5xl lg:text-6xl">
                  Real dairy problems need{" "}
                  <span className="text-primary">practical solutions</span>
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-text-dark/70 sm:text-lg">
                  Milk yield, breeding, calf growth, animal health, and feed
                  expenses can affect every dairy farm. We help farmers deal
                  with these issues through practical guidance and well-planned
                  nutritional support.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-[1.5rem]">
                    <div className="text-3xl font-black text-primary">10+</div>
                    <p className="mt-1 text-sm font-semibold text-text-dark/70">
                      Common Farm Problems Covered
                    </p>
                  </div>
                  <div className="rounded-[1.5rem]">
                    <div className="text-3xl font-black text-text-dark">
                      360°
                    </div>
                    <p className="mt-1 text-sm font-semibold text-text-dark/70">
                      Nutrition, care, fertility and profit focus
                    </p>
                  </div>
                  <div className="rounded-[1.5rem]">
                    <div className="text-3xl font-black text-secondary">
                      Safe
                    </div>
                    <p className="mt-1 text-sm font-semibold text-text-dark/70">
                      Scientific support for everyday farm use
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80">
                    What changed
                  </p>
                  <p className="mt-3 text-base leading-7 text-text-dark/75">
                    Dairy farming has many daily challenges. Problems like low
                    milk yield, breeding issues, weak calves, poor immunity, and
                    high feed costs can reduce farm profit. At Dairy Guruji, we
                    provide simple advice, trusted nutrition, and practical
                    support to help farmers improve animal health, milk
                    production, fertility, and overall farm performance. Our
                    goal is to help farmers build healthier animals, stronger
                    farms, and a more profitable future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
            {farmerPainPoints.map((point, index) => {
              const accent = accentStyles[index % accentStyles.length];

              return (
                <motion.article
                  key={point.problem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className={`group relative min-h-[340px] overflow-hidden rounded-[2rem] border shadow-[0_20px_60px_rgba(23,36,50,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(23,36,50,0.2)] ${accent.shell}`}
                >
                  <Image
                    src={point.image}
                    alt={point.problem}
                    fill
                    sizes="(min-width: 1280px) 420px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accent.panel}`}
                  />
                  <div
                    className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line}`}
                  />
                  <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-white/18 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                  <div className="relative flex h-full min-h-[340px] flex-col justify-end p-6 sm:p-7">
                    <div className="mt-8 rounded-[1.6rem]   p-5 ">
                      <h3 className="max-w-sm text-xl font-black leading-tight text-white sm:text-2xl">
                        {point.problem}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-white/82">
                        {point.solution}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
