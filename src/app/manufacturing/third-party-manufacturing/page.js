"use client";

import PageHero from "@/components/organisms/PageHero";
import { manufacturingHero, manufacturingVideo } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  CheckCircle,
  TrendingUp,
  Target,
  FlaskConical,
  Scale,
  ShieldCheck,
  PackageOpen,
  Users,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Workflow,
  ClipboardCheck,
  Truck,
  Building2,
  Lock,
  Globe2,
  Sprout,
} from "lucide-react";

import { Input, Textarea, Select, FormField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";

  const buildEmbedUrl = (videoId) => {
    if (!videoId) return "";

    const params = new URLSearchParams({
      autoplay: "1",
      mute: "1",
      rel: "0",
      playsinline: "1",
    });

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  };

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return buildEmbedUrl(videoId);
    }

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return buildEmbedUrl(videoId);
      }

      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      const embedId =
        pathParts[0] === "embed" || pathParts[0] === "shorts"
          ? pathParts[1]
          : "";

      return buildEmbedUrl(embedId);
    }
  } catch {
    return "";
  }

  return "";
};

export default function ThirdPartyManufacturingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    volume: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const services = [
    "Dairy Cattle Feed",
    "Calf Starter Feed",
    "Lactation Feed",
    "Mineral Mixtures",
    "Bypass Protein Feed",
    "Specialty Nutritional Supplements",
  ];

  const infrastructureFeatures = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Modern Production Infrastructure",
      desc: "Automated mixing systems, precision batching, controlled blending, and standardized pellet/granule production ensure uniformity and consistent nutritional value.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Strict Raw Material Selection",
      desc: "We procure high-quality protein sources, tested mineral blends, and verified grain ingredients. Every raw material is checked before entering production.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Multi-Level Quality Control",
      desc: "Raw material inspection, in-process monitoring, batch testing, and final product verification reduces rejection, complaints, and market risk.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: <PackageOpen className="h-8 w-8" />,
      title: "Hygienic & Controlled Storage",
      desc: "Moisture-controlled areas, proper ventilation, and organized inventory management protect product integrity and shelf life.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Scalable Production Capacity",
      desc: "Whether you require small batches for a regional launch or bulk national supply, our facility scales production based on your growth.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "The Dream",
      desc: "You want better profit margins, brand recognition, and market control. We listen to your goals and understand your target market.",
    },
    {
      step: "02",
      title: "The Strategy",
      desc: "Every region is different. We help you decide product type, pricing segment, and positioning strategy. Your brand is planned carefully.",
    },
    {
      step: "03",
      title: "The Formulation",
      desc: "Our team develops scientifically balanced formulations based on animal stage, regional needs, and cost-effectiveness.",
    },
    {
      step: "04",
      title: "The Manufacturing",
      desc: "Inside our facility: strict checks, reliable sourcing, and standardized processes. We manufacture as if it were our own brand.",
    },
    {
      step: "05",
      title: "Brand Comes Alive",
      desc: "Private label packaging, custom printed bags with your logo, and presentation support. Your product is now your brand identity.",
    },
  ];

  const targetPartners = [
    "Dairy feed distributors who want their own brand",
    "Agri-input wholesalers",
    "Fertilizer & cattle feed dealers looking for higher margins",
    "Entrepreneurs entering dairy nutrition sector",
    "Companies wanting regional private label products",
  ];

  const manufacturingVideoEmbedUrl = getYoutubeEmbedUrl(
    manufacturingVideo.url
  );

  return (
    <div className="relative min-h-screen bg-[#fcfdfd] overflow-hidden pt-20">
      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <PageHero
        image={manufacturingHero.image}
        title={manufacturingHero.title}
        subtitle={manufacturingHero.subtitle}
      />

      {/* Services Section - Integrated Layout */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 tracking-wider uppercase">
              What We Manufacture
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-8 leading-[1.1]">
              Custom Formulations <br />
              <span className="text-primary">Under Your Brand</span>
            </h2>
            <p className="text-xl text-text-dark/70 font-medium leading-relaxed mb-10">
              We provide end-to-end manufacturing solutions for a wide range of
              dairy nutrition products. Your vision, our world-class facility.
            </p>
            <div className="flex flex-wrap gap-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={popIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-black/5 hover:border-primary/20 hover:bg-white/80 transition-all group"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <span className="text-lg font-bold text-text-dark/90">
                  {service}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section - Sequential Flow */}
      <section className="md:py-32 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6">
              Advanced Infrastructure
            </h2>
            <p className="text-xl text-text-dark/75 max-w-3xl mx-auto font-medium">
              Our ISO-certified facility is equipped with state-of-the-art
              machinery to ensure peak nutritional value in every batch.
            </p>
          </motion.div>

          <div className="space-y-12">
            {infrastructureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div
                    className={`h-24 w-24 md:h-32 md:w-32 rounded-[2rem] ${feature.bg} ${feature.color} flex items-center justify-center shadow-2xl shadow-black/20`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <div
                  className={`w-full md:w-1/2 text-center ${index % 2 !== 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <h3 className="text-2xl md:text-3xl font-black text-text-dark mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-text-dark/70 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI & Profit - Typographic Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <TrendingUp className="h-16 w-16 text-primary mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-8 leading-tight">
                Unlock Higher <br />
                <span className="text-primary italic">Profit Margins</span>
              </h2>
              <p className="text-xl text-text-dark/70 font-medium leading-relaxed mb-6">
                Private labeling isn&apos;t just about branding—it&apos;s a
                strategic move to secure your business future and maximize ROI.
              </p>
              <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10 mb-8">
                <p className="text-xl font-bold text-primary">
                  Private label = Higher long-term equity and customer loyalty.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-2 -z-10" />
            <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-2xl border border-black/5 relative overflow-hidden">
              <div className="space-y-12">
                <div>
                  <h4 className="text-sm font-black text-red-500 uppercase tracking-widest mb-6">
                    Standard Distribution
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "No brand control",
                      "Limited margins",
                      "Manufacturer loyalty",
                      "Fixed pricing",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-text-dark/40 font-bold"
                      >
                        <span className="text-red-400">✕</span> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-black/5">
                  <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-6">
                    Private Label Advantage
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Own brand equity",
                      "Higher margins",
                      "Dealer expansion",
                      "Pricing control",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-text-dark font-black"
                      >
                        <CheckCircle className="h-5 w-5 text-primary" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Journey - Timeline Flow */}
      <section className="bg-slate-50 py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6">
              The Path to Your Brand
            </h2>
            <p className="text-xl text-text-dark/60 font-medium">
              Five clear steps from your initial vision to a market-ready
              product.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

            <div className="space-y-16 md:space-y-32">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute left-0 md:left-1/2 md:-ml-8 top-0 h-16 w-16 rounded-full bg-white border-4 border-primary/10 flex items-center justify-center z-10 text-primary font-black text-xl shadow-xl">
                    {step.step}
                  </div>

                  <div
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24 md:text-left"}`}
                  >
                    <h3 className="text-2xl md:text-4xl font-black text-text-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg md:text-xl text-text-dark/60 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {manufacturingVideoEmbedUrl && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 tracking-wider uppercase">
              Watch The Video
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6 leading-[1.1]">
              {manufacturingVideo.title}
            </h2>
            <p className="text-xl text-text-dark/70 font-medium leading-relaxed max-w-3xl mx-auto">
              {manufacturingVideo.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={popIn}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-2xl shadow-black/10"
          >
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={manufacturingVideoEmbedUrl}
                title={manufacturingVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* Partners & Advantages - Fluid Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black text-text-dark mb-10">
              Who Is This For?
            </h2>
            <div className="space-y-6">
              {targetPartners.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <p className="text-xl text-text-dark/80 font-bold leading-tight">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[3rem] p-8 md:p-12 flex flex-col justify-center  relative overflow-hidden ">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <h2 className="text-4xl font-black mb-10 relative z-10">
              Why We Are Different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
              {[
                {
                  icon: <Workflow className="h-6 w-6" />,
                  text: "Custom formulations",
                },
                {
                  icon: <Target className="h-6 w-6" />,
                  text: "Market positioning",
                },
                {
                  icon: <ClipboardCheck className="h-6 w-6" />,
                  text: "Transparent costing",
                },
                {
                  icon: <Lock className="h-6 w-6" />,
                  text: "Brand protection",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-lg font-bold text-text-dark/80">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-12 border-t border-primary/10 relative z-10">
              <p className="text-2xl font-black text-primary">
                We don&apos;t compete with your brand. <br />
                <span className="text-text-dark">We help you grow it.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Division of Labor - Integrated */}
      <section className="bg-white py-24 border-y border-black/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-16">
            Focused Partnership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 rounded-[2.5rem] overflow-hidden border border-black/5">
            <div className="bg-white p-12 md:p-16">
              <h3 className="text-xl font-black text-primary uppercase tracking-widest mb-8">
                You Focus On
              </h3>
              <ul className="space-y-4 text-xl font-bold text-text-dark/70">
                <li>Branding & Logo</li>
                <li>Marketing Strategy</li>
                <li>Dealer Network</li>
                <li>Customer Relations</li>
              </ul>
            </div>
            <div className="bg-[#131b23] p-12 md:p-16 text-white">
              <h3 className="text-xl font-black text-primary uppercase tracking-widest mb-8">
                We Focus On
              </h3>
              <ul className="space-y-4 text-xl font-bold text-white/70">
                <li>Production & QC</li>
                <li>Raw Material Sourcing</li>
                <li>Advanced Formulations</li>
                <li>Timely Dispatch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section - Integrated Glassmorphism */}
      <section
        id="inquiry"
        className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 mb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">
                Get in touch
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6 leading-tight">
                Let&apos;s Build Your <br />{" "}
                <span className="text-primary">Success Story</span>
              </h2>
              <p className="text-xl text-text-dark/60 font-medium">
                Fill out the form below and our manufacturing experts will reach
                out to discuss your specific requirements.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField label="Full Name">
                    <Input
                      placeholder="Your name"
                      className="bg-white/50"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </FormField>
                  <FormField label="Phone Number">
                    <Input
                      type="tel"
                      placeholder="Mobile number"
                      className="bg-white/50"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </FormField>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField label="Email Address">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-white/50"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </FormField>
                  <FormField label="Potential Volume">
                    <Input
                      placeholder="E.g., 500 bags/month"
                      className="bg-white/50"
                      value={formData.volume}
                      onChange={(e) =>
                        setFormData({ ...formData, volume: e.target.value })
                      }
                      required
                    />
                  </FormField>
                </div>
                <FormField label="Message">
                  <Textarea
                    placeholder="Tell us about your brand vision..."
                    className="bg-white/50"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </FormField>
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-5 text-xl font-black text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary-dark"
                  >
                    Send Inquiry
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-[#131b23] rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
              <h3 className="text-2xl font-black mb-8">
                Fastest Growing Sector
              </h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-white/10 shrink-0 flex items-center justify-center text-primary">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <p className="text-lg text-white/60 font-medium">
                    India is the world&apos;s largest milk producer, creating
                    massive demand for quality feed.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-white/10 shrink-0 flex items-center justify-center text-primary">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <p className="text-lg text-white/60 font-medium">
                    Organized dairy farming is rising, demanding professional
                    nutritional solutions.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-full bg-white/10 shrink-0 flex items-center justify-center text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <p className="text-lg text-white/60 font-medium">
                    Your brand name combined with our manufacturing is a winning
                    formula.
                  </p>
                </div>
              </div>

              <div className="mt-14 flex flex-col items-center text-center">
                <Image
                  src="/images/logo-dairy-guruji.png"
                  alt="Dairy Guru Ji"
                  width={80}
                  height={80}
                  className="rounded-full bg-white/5 p-2 mb-4"
                />
                <p className="font-black text-xl text-primary tracking-tight">
                  Your Brand. Our Expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
