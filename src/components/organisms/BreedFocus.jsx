"use client";

import Image from "next/image";
import { breeds } from "@/lib/data";

export default function BreedFocus() {
  return (
    <section className="relative py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 left-[-10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="absolute bottom-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-text-dark leading-tight mb-6">
            Bringing World-Class <span className="text-secondary">Dairy.</span>
            <br />
            Genetics to Indian <span className="text-primary">Farms.</span>
          </h2>

          <p className="text-lg text-text-dark/70 leading-relaxed">
            Dairy Guruji aims to make better dairy genetics more accessible and
            affordable for Indian farmers through breeding support, practical
            guidance, and future herd improvement solutions. By connecting
            farmers with stronger breeding opportunities, including semen and
            embryo-based genetic progress, Dairy Guruji wants to help improve
            milk potential, breed quality, and overall herd performance. This
            will support farmers in building healthier animals, stronger
            replacement stock, and a more productive dairy farm. The goal is to
            help even small and growing farmers benefit from better genetics,
            leading to improved profitability, long-term herd development, and a
            stronger future for Indian dairy farming.
          </p>
        </div>

        {/* Breed Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {breeds.map((item) => (
            <div
              key={item.breed}
              className="group relative overflow-hidden rounded-3xl shadow-lg border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-[260px] w-full">
                <Image
                  src={item.image}
                  alt={`${item.breed} cattle`}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {item.breed}
                </h3>

                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
