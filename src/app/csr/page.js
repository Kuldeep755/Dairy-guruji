"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, HeartPulse, GraduationCap, CheckCircle2 } from "lucide-react";
import { csrInitiatives } from "@/lib/data";

const iconMap = {
  Leaf: Leaf,
  HeartPulse: HeartPulse,
  GraduationCap: GraduationCap,
};

export default function CSRPage() {
  return (
    <main className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/impact/csr_hero.png"
          alt="Dairy Guru Ji CSR Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Social <span className="text-secondary italic">Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 font-medium"
          >
            Building a sustainable future for Indian dairy farmers and the environment.
          </motion.p>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 px-4 sm:px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-32">
            {csrInitiatives.map((item, index) => {
              const Icon = iconMap[index === 0 ? "Leaf" : index === 1 ? "HeartPulse" : "GraduationCap"];
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                >
                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                  >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm uppercase tracking-widest mb-8">
                       <Icon size={18} />
                       {item.title}
                    </div>

                    <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-8 leading-tight">
                      {item.desc}
                    </h2>

                    <p className="text-lg text-text-dark/70 leading-relaxed mb-10">
                      {item.fullDesc}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                       <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm transition-transform hover:-translate-y-1">
                          <CheckCircle2 className="text-primary shrink-0" size={24} />
                          <span className="font-bold text-text-dark">{item.stats}</span>
                       </div>
                    </div>
                  </motion.div>

                  {/* Image Content */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 relative"
                  >
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                       <Image 
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    </div>
                    {/* Decorative element */}
                    <div className={`absolute -bottom-10 ${isEven ? '-right-10' : '-left-10'} w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none`} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-4 sm:px-6 bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-white/20 mb-8"
           >
              <svg width="100" height="80" viewBox="0 0 100 80" fill="currentColor"><path d="M0 80V37.5L25 0H47.5L30 37.5H47.5V80H0ZM52.5 80V37.5L77.5 0H100L82.5 37.5H100V80H52.5Z"/></svg>
           </motion.div>
           <h3 className="text-3xl md:text-5xl font-black text-white italic leading-tight mb-12">
             &ldquo;Our success is only meaningful when it reflects in the lives of the farmers who work with us every single day.&rdquo;
           </h3>
           <p className="text-secondary font-bold text-xl uppercase tracking-widest">— Himanshu, Founder</p>
        </div>
      </section>
    </main>
  );
}
