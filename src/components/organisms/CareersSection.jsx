"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CareersSection() {
  return (
    <section className="w-full relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Careers
            </span>

            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-gray-900">
              Join Dairy Guru Ji
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg">
              We are building a strong team to support dairy farmers across
              India. If you are passionate about growth, field work, and making
              real impact, we would love to hear from you.
            </p>

            <div className="mt-8">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                View Open Positions
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-10 border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              We're Hiring
            </h3>

            <p className="text-gray-600 mb-8">
              Open roles in Sales, Operations, and Feed Consultation.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+918168048260"
                className="flex items-center gap-4 text-gray-700 hover:text-primary transition"
              >
                <Phone size={20} />
                <span className="font-medium">+91 81680-48260</span>
              </a>

              <a
                href="mailto:dairygurujiindia@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-primary transition"
              >
                <Mail size={20} />
                <span className="font-medium">dairygurujiindia@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
