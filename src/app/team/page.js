"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, GraduationCap, Microscope, ShieldCheck } from "lucide-react";
import { teamMembers } from "@/lib/data";

const iconMap = {
  Leadership: Users,
  Science: Microscope,
  Operations: ShieldCheck,
};

export default function TeamPage() {
  return (
    <main className="relative min-h-screen pt-20 bg-surface">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/team/team_hero.png"
          alt="Dairy Guru Ji Team Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Meet The <span className="text-secondary italic">Experts</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 font-medium"
          >
            The passionate team behind Dairy Guru Ji’s innovation and farmer-first support.
          </motion.p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image 
                    src={member.image || "/images/about/hero.jpeg"} // Fallback image if member image not uploaded
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Subtle hover detail */}
                  <div className="absolute bottom-6 left-0 w-full flex justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
                      Expert Bio
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-2xl font-black text-text-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">
                  {member.role}
                </p>
                <div className="w-10 h-1 bg-secondary rounded-full mb-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <p className="text-text-dark/70 text-sm leading-relaxed px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-8 leading-tight">
                    Our Shared <span className="text-primary italic">Values</span>
                 </h2>
                 <p className="text-lg text-text-dark/70 leading-relaxed max-w-xl">
                    Our team isn&apos;t just composed of experts; we are people who believe in the growth of Indian rural communities. We operate on a foundation of trust, scientific rigor, and farmer-first empathy.
                 </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                 {[
                   { title: "Trust", icon: Users, desc: "Building long-term on-field partnerships." },
                   { title: "Science", icon: Microscope, desc: "Evidence-backed nutritional formulations." },
                   { title: "Integrity", icon: ShieldCheck, desc: "Never taking shortcuts with cattle health." },
                   { title: "Growth", icon: GraduationCap, desc: "Empowering farmers for higher profitability." }
                 ].map((value) => (
                    <div key={value.title} className="p-8 rounded-[2rem] bg-surface border border-gray-100 shadow-sm">
                       <div className="text-primary mb-4">
                          <value.icon size={32} />
                       </div>
                       <h4 className="text-xl font-bold text-text-dark mb-2">{value.title}</h4>
                       <p className="text-sm text-text-dark/70">{value.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
