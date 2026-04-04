"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DollarSign,
  TrendingUp,
  Map,
  Truck,
  Users,
  Shield,
  Star,
  CheckCircle,
  Award,
  Target,
  Handshake,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Lightbulb,
  BriefcaseBusiness,
  Leaf,
  MessagesSquare,
  PackageOpen
} from "lucide-react";

import { Input, Textarea, Select, FormField } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormToast from "@/components/ui/form-toast";
import { backendFetch } from "@/lib/api";



export default function DealerPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
    territory: "",
    experience: "",
    investment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

    try {
      const response = await backendFetch("/api/forms/dealer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit dealer application.");
      }

      setSubmitState({
        type: "success",
        message: result.message || "Dealer application submitted successfully.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        businessType: "",
        territory: "",
        experience: "",
        investment: "",
        message: "",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error.message || "Something went wrong while submitting application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const differences = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "1. We Focus on Farmer Results",
      desc: "Our products improve milk yield, animal health, digestion, immunity, and reproduction. When farmers see real improvement, they return — again and again.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "2. We Protect Our Dealers",
      desc: "One dealer per territory. No unnecessary competition. No undercutting. Transparent pricing. Your growth matters to us.",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "3. We Support You Like a Partner",
      desc: "Product training, guidance on explaining benefits, marketing materials, timely stock supply, and ongoing business support.",
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  const benefitsDetail = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Strong & Sustainable Margins",
      desc: "We structure margins so dealers can grow comfortably while remaining competitive in the market.",
    },
    {
      icon: <Map className="h-6 w-6" />,
      title: "Exclusive Territory Protection",
      desc: "We appoint only one authorized dealer per region to protect your market and earnings.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Timely Logistic Support",
      desc: "Reliable supply chain to ensure you never lose customers due to stock shortages.",
    },
    {
      icon: <MessagesSquare className="h-6 w-6" />,
      title: "Marketing Support",
      desc: "We help you understand positioning, communicate benefits, expand to nearby villages, and increase repeat purchases.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Brand Trust & Quality Guarantee",
      desc: "Our products are manufactured under strict quality standards. We believe in honesty, transparency, and long-term relationships.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Submit Application", desc: "Share your business details with us." },
    { step: "02", title: "Personal Discussion", desc: "We understand your region, experience, and goals." },
    { step: "03", title: "Agreement & Territory", desc: "Confirm exclusive territory and finalize partnership." },
    { step: "04", title: "Launch & Growth", desc: "Product supply begins, and we support your journey." },
  ];

  const lookingFor = [
    "Min. 2 years experience in dairy feed or agriculture",
    "Own a warehouse or storage space",
    "Strong local farmer connections",
    "Believe in ethical business practices",
    "Want to build long-term reputation, not quick profits",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f8f9fa] via-[#e9ecef] to-[#dee2e6] overflow-hidden">
      <FormToast
        message={submitState.message}
        type={submitState.type || "success"}
        onClose={() => setSubmitState({ type: "", message: "" })}
      />
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-32 left-0 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-primary shadow-sm mb-6">
            <Sparkles className="h-4 w-4" />
            Dealer Partnership
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-text-dark tracking-tight">
            Become a Dealer
            <span className="block text-primary mt-3">
              With Dairy Guru Ji
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-3xl text-xl md:text-2xl text-text-dark/80 font-medium leading-relaxed">
            Not Just a Business Opportunity — A Responsibility Toward Farmers
          </p>

          <p className="mt-6 mx-auto max-w-4xl text-base md:text-lg text-text-dark/70 leading-relaxed">
            Every day, thousands of dairy farmers wake up before sunrise. They work hard and care for their animals like family. But many still struggle with low milk yield, rising costs, and unreliable products. 
            <br/><br/>
            At Dairy Guru Ji, we exist for one purpose: <strong className="text-primary font-bold">To help farmers earn more — and to help our dealers grow with pride.</strong>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-extrabold text-white hover:bg-primary-dark hover:shadow-lg transition-all"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/918168048260"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary/30 bg-white/50 backdrop-blur px-8 py-4 text-base font-bold text-primary hover:bg-primary/5 hover:border-primary/50 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* The Real Opportunity */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white/80 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-6">
                Why Dealers Choose Dairy Guru Ji
              </h2>
              <p className="text-lg text-primary font-bold mb-6">
                Because This Is More Than Profit
              </p>
              <p className="text-text-dark/70 text-lg mb-6 leading-relaxed">
                Yes, you will earn strong margins. Yes, your territory will be protected. Yes, we provide logistic and market support. But what truly makes us different is this:
              </p>
              <ul className="space-y-4">
                {[
                  "We grow together.",
                  "We solve real farmer problems.",
                  "We build long-term relationships — not short-term sales."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-text-dark/80 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
           
              className="bg-primary/5 rounded-2xl p-8 border border-primary/10"
            >
              <h3 className="text-2xl font-bold text-text-dark mb-4">The Real Opportunity</h3>
              <p className="text-text-dark/70 mb-6">
                In many villages, farmers buy products without proper guidance. They depend on local dealers for advice. When you become a Dairy Guru Ji dealer:
              </p>
              <ul className="space-y-3">
                {[
                  "Farmers trust you more.",
                  "You become their nutrition advisor.",
                  "You build loyalty, not just transactions.",
                  "Your shop becomes a solution center."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-dark/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-center font-bold text-primary text-lg">
                  This creates repeat customers and stable long-term income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-text-dark">
            What Makes Dairy Guru Ji Different?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differences.map((diff, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-16 w-16 rounded-2xl ${diff.bg} ${diff.color} flex items-center justify-center mb-6`}>
                {diff.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4 leading-snug">
                {diff.title}
              </h3>
              <p className="text-text-dark/70 leading-relaxed font-medium text-base">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story / A day in the life */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="bg-primary text-white rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes inside the card */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black/10 blur-2xl" />
          
          <Lightbulb className="h-12 w-12 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
            A Day in the Life of a Dairy Guru Ji Dealer
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto relative z-10 text-white/90 italic">
            <p>Imagine this:</p>
            <p className="font-semibold text-white">A farmer walks into your shop. He says, “Milk production has reduced. What should I do?”</p>
            <p>You confidently recommend the right Dairy Guru Ji solution. After a few weeks, he comes back smiling.</p>
            <p className="font-bold text-yellow-300 text-3xl">“Milk has improved. Thank you.”</p>
          </div>

          <div className="mt-12 pt-10 border-t border-white/20 text-lg md:text-xl font-semibold max-w-2xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 text-white/90">
            <span>That moment builds trust.</span>
            <ArrowRight className="hidden md:block h-5 w-5 opacity-50" />
            <span>That trust builds loyalty.</span>
            <ArrowRight className="hidden md:block h-5 w-5 opacity-50" />
            <span>That loyalty builds your business.</span>
          </div>
          
          <p className="mt-8 text-2xl font-bold text-white uppercase tracking-wider">This is the difference.</p>
        </div>
      </section>

      {/* Benefits in Detail */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-text-dark">
            Dealer Benefits in Detail
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsDetail.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {benefit.title}
              </h3>
              <p className="text-text-dark/70 leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Two columns: Who we are looking for + Investment */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Who we are looking for */}
          <div
            className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl"
          >
            <h2 className="text-3xl font-extrabold text-text-dark mb-8 flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Who We Are Looking For
            </h2>
            <div className="space-y-4">
              {lookingFor.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-lg text-text-dark/80 font-medium leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
              <p className="text-xl font-bold text-primary">
                If you believe business is about trust <br/>— you are the right partner.
              </p>
            </div>
          </div>

          {/* Investment & Growth Potential */}
          <div
            className="bg-text-dark text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            
            <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              Investment & Growth
            </h2>
            <ul className="space-y-6">
              {[
                "Moderate initial investment",
                "Fast-moving, repeat-demand products",
                "Strong farmer retention",
                "Long-term income stability",
                "Protected market advantage"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium text-white/90 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                  <Star className="h-5 w-5 text-yellow-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 bg-white/10 p-6 rounded-2xl border border-white/20 text-center backdrop-blur">
              <p className="text-xl font-bold tracking-wide">
                This is not seasonal business.<br/>
                <span className="text-primary font-black text-2xl block mt-2">This is continuous demand.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 bg-white/50 backdrop-blur rounded-[3rem] my-16 border border-white">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-text-dark">
            Dealer Partnership Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="text-center relative"
            >
              {index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
              <div className="h-20 w-20 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-xl shadow-primary/30 transform rotate-3 hover:rotate-0 transition-transform">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3">
                {step.title}
              </h3>
              <p className="text-text-dark/70 leading-relaxed font-medium px-4">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Application Form */}
      <section id="apply" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Form */}
          <div
            className="lg:col-span-3 rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl border border-gray-100 relative z-10"
          >
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-4">
                Apply Today
              </h2>
              <p className="text-text-dark/70 text-lg font-medium">
                Fill out the application form below and our team will contact you within 24–48 hours.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8"
            >
              <FormField label="Full Name">
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </FormField>
              <FormField label="Phone Number">
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </FormField>
              <FormField label="Email Address">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </FormField>
              <FormField label="Business Type">
                <select 
                  name="business_type"
                  value={formData.businessType}
                  onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                >
                  <option value="">Select business type</option>
                  <option value="feed">Dairy Feed</option>
                  <option value="fertilizer">Fertilizer</option>
                  <option value="agriculture">Agricultural Equipment</option>
                  <option value="new">Starting new business</option>
                </select>
              </FormField>
              <FormField label="Territory / District">
                <Input 
                  type="text" 
                  name="territory"
                  placeholder="Where do you want to operate?"
                  value={formData.territory}
                  onChange={(e) => setFormData({...formData, territory: e.target.value})}
                  required
                />
              </FormField>
              <FormField label="Experience (Years)">
                <Input 
                  type="text" 
                  name="experience"
                  placeholder="E.g., 5 years"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                />
              </FormField>
              <div className="md:col-span-2">
                <FormField label="Message (Optional)">
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your background or why you want to become a dealer..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </FormField>
              </div>
              {submitState.message ? (
                <div
                  className={`md:col-span-2 rounded-lg px-4 py-3 text-sm font-medium ${
                    submitState.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitState.message}
                </div>
              ) : null}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-8 py-5 text-lg font-extrabold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Vision */}
          <div
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-primary/5 rounded-3xl p-8 md:p-10 border border-primary/20 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-black text-text-dark mb-6">Our Vision</h3>
              <p className="text-text-dark/80 font-medium mb-8 leading-relaxed">
                We want to build a nationwide network of responsible dealers who:
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  "Help farmers increase income",
                  "Promote quality nutrition",
                  "Build ethical & respected businesses",
                  "Grow with dignity and pride"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-text-dark font-bold text-lg">
                    <div className="rounded-full bg-primary/20 p-1">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-primary/20 pt-8">
                <h4 className="text-xl font-bold text-text-dark mb-4">Ready to Build Something Meaningful?</h4>
                <p className="text-text-dark/70 font-medium mb-6">
                  If you want profitable margins, exclusive territory, and the satisfaction of helping farmers succeed...
                </p>
                <div className="text-center font-black text-xl text-primary flex flex-col items-center gap-2">
                  <Image src="/images/logo-dairy-guruji.png" alt="Dairy Guru Ji Logo" width={80} height={80} className="rounded-full bg-[#171f24] p-2 shadow-sm mb-2" />
                  Dairy Guru Ji is ready to welcome you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
