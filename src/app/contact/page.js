"use client";
import React, { useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  Globe,
  Building2,
  DollarSign,
  TrendingUp,
  Map,
  Truck as TruckIcon,
  Users as UsersIcon,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import { Input, Textarea, Select, FormField } from "@/components/ui/input";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-bg-light pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-0 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <header className="mb-12 overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-xl shadow-green-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 p-8 md:p-12">
              <p className="mb-4 inline-flex items-center rounded-full bg-secondary/20 px-4 py-2 text-xs font-black uppercase tracking-widest text-text-dark">
                संपर्क करें | Get Expert Guidance
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-text-dark leading-tight">
                Contact
                <span className="block text-primary">Dairy Guru Ji</span>
              </h1>
              <p className="mt-5 max-w-2xl text-text-dark/70 text-lg leading-relaxed">
                Need advice on dairy nutrition, product selection, or
                dealership opportunities? Our team is ready to support you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+918168048260"
                  className="inline-flex items-center gap-2 rounded-md bg-text-dark px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
                >
                  <PhoneCall size={16} />
                  Call +91 81680-48260
                </a>
                <a
                  href="https://wa.me/918168048260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-text-dark/15 bg-white px-5 py-3 text-sm font-bold text-text-dark transition hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  WhatsApp Support
                </a>
              </div>
            </div>

            <div className="bg-text-dark p-8 md:p-10 text-white">
              <h2 className="text-xl font-black uppercase tracking-wide text-secondary">
                Updated Contact Details
              </h2>
              <div className="mt-6 space-y-5 text-sm">
                <div className="flex gap-3">
                  <Building2 size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Head Office</p>
                    <p className="text-white/75">South, WA (Australia)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Branch Office</p>
                    <p className="text-white/75">Sonipat, Haryana, India</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PhoneCall size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Phone / WhatsApp</p>
                    <p className="text-white/75">+91 81680-48260</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-white/75">dairygurujiindia@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Website</p>
                    <a
                      href="https://www.dairyguruji.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/75 underline decoration-white/30 hover:text-white"
                    >
                      www.dairyguruji.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock3 size={18} className="mt-0.5 text-secondary" />
                  <div>
                    <p className="font-bold">Support Hours</p>
                    <p className="text-white/75">Monday to Saturday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Farmer Support Section */}
          <div className="space-y-4 lg:col-span-1">
            <div className="rounded-2xl border border-primary/15 bg-white p-6 shadow-lg shadow-green-900/5">
              <p className="text-xs font-black uppercase tracking-widest text-primary">
                किसान सहायता
              </p>
              <h3 className="mt-2 text-2xl font-black text-text-dark">
                Speak To Our Team
              </h3>
              <p className="mt-2 text-sm text-text-dark/70">
                For urgent enquiry, call or WhatsApp directly and get faster
                response from our team.
              </p>
              <div className="mt-5 grid gap-3">
                <a
                  href="tel:+918168048260"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-primary/90"
                >
                  Call Expert Now
                </a>
                <a
                  href="https://wa.me/918168048260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-text-dark/15 bg-white px-4 py-3 text-sm font-bold text-text-dark transition hover:bg-bg-light"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Dealer Opportunities */}
            <div className="rounded-2xl border border-secondary/15 bg-white p-6 shadow-lg shadow-green-900/5">
              <p className="text-xs font-black uppercase tracking-widest text-secondary">
                डीलर अवसर
              </p>
              <h3 className="mt-2 text-2xl font-black text-text-dark">
                Dealer Partnership
              </h3>
              <p className="mt-2 text-sm text-text-dark/70">
                अपना व्यवसाय बढ़ाएं, किसानों की मदद करें
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <DollarSign className="h-4 w-4 text-secondary" />
                  <span>अच्छे मार्जिन</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <TrendingUp className="h-4 w-4 text-secondary" />
                  <span>व्यवसाय वृद्धि</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Map className="h-4 w-4 text-secondary" />
                  <span>क्षेत्र सुरक्षा</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <TruckIcon className="h-4 w-4 text-secondary" />
                  <span>लॉजिस्टिक समर्थन</span>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dealer"
                    className="inline-flex items-center gap-2 rounded-md bg-secondary px-4 py-3 text-sm font-bold text-white transition hover:bg-secondary/90"
                  >
                    डीलर बनें
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 rounded-2xl border border-green-100 bg-white p-8 md:p-10 shadow-xl shadow-green-900/5">
            <h2 className="text-3xl font-black text-text-dark uppercase tracking-tight">
              Send an Enquiry
            </h2>
            <p className="mt-2 text-sm text-text-dark/65">
              Fill in your details and our team will connect with you shortly.
            </p>

            <form 
              action="https://formsubmit.co/dairygurujiindia@gmail.com" 
              method="POST"
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <input type="hidden" name="_form" value="contact-form" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_autoresponse" value="Thank you for your enquiry! We will get back to you shortly." />
              <input type="hidden" name="_next" value="https://www.dairyguruji.com/contact?success=true" />

              <FormField label="Your Name">
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Enter full name" 
                  required
                />
              </FormField>
              <FormField label="Phone Number">
                <Input 
                  type="tel" 
                  name="phone"
                  placeholder="Enter mobile number" 
                  required
                />
              </FormField>
              <div className="md:col-span-2">
                <FormField label="Email Address">
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                  />
                </FormField>
              </div>
              <div className="md:col-span-2">
                <FormField label="I Am A...">
                  <select 
                    name="business_type"
                    className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                  >
                    <option value="Dairy Farmer">Dairy Farmer</option>
                    <option value="Distributor / Wholesaler">Distributor / Wholesaler</option>
                    <option value="Feed Manufacturing Partner">Feed Manufacturing Partner</option>
                    <option value="Sales Officer Aspirant">Sales Officer Aspirant</option>
                    <option value="General Business Enquiry">General Business Enquiry</option>
                  </select>
                </FormField>
              </div>
              <div className="md:col-span-2">
                <FormField label="Your Message">
                  <Textarea 
                    name="message"
                    placeholder="Tell us how we can help you..." 
                  />
                </FormField>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit" 
                  className="w-full btn-primary uppercase tracking-widest"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
