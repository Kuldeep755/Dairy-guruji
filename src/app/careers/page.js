"use client";
import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarClock,
  CircleDollarSign,
  FileText,
  GraduationCap,
  HeartHandshake,
  MapPin,
  PhoneCall,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const CareersPage = () => {
  const whyJoin = [
    {
      title: "Farmer-First Mission",
      desc: "Your work directly supports dairy families and real farm outcomes.",
      icon: HeartHandshake,
    },
    {
      title: "Fast Career Growth",
      desc: "Take ownership early and grow with a rapidly expanding team.",
      icon: TrendingUp,
    },
    {
      title: "Learning Culture",
      desc: "Build practical field understanding with structured technical mentorship.",
      icon: GraduationCap,
    },
    {
      title: "Strong Team Support",
      desc: "Collaborate with honest, execution-focused people across functions.",
      icon: Users,
    },
  ];

  const openings = [
    {
      role: "Area Sales Officer",
      type: "Full-time",
      location: "Punjab & Haryana",
      department: "Sales",
    },
    {
      role: "Technical Dairy Advisor",
      type: "Full-time",
      location: "Rajasthan",
      department: "Technical",
    },
    {
      role: "Marketing Executive",
      type: "Full-time",
      location: "Jaipur (Hybrid)",
      department: "Marketing",
    },
    {
      role: "Operations Coordinator",
      type: "Full-time",
      location: "Delhi NCR",
      department: "Operations",
    },
  ];

  const process = [
    {
      step: "Application Review",
      detail: "We evaluate your profile for role-fit and field relevance.",
      icon: FileText,
    },
    {
      step: "Discussion Round",
      detail:
        "A practical discussion with the hiring team on experience and approach.",
      icon: Users,
    },
    {
      step: "Final Evaluation",
      detail: "Role expectations, growth path, and compensation alignment.",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f7f4ea] via-[#f3efdf] to-[#f8f6ee] pb-24 pt-28">
      <div className="pointer-events-none absolute -top-24 left-[-10%] h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <section className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <aside className="rounded-3xl border border-primary/20 bg-white p-7 shadow-xl md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-text-dark">
              <BriefcaseBusiness className="h-4 w-4" />
              Application Form
            </div>
            <h3 className="mt-5 text-3xl font-black text-text-dark">
              Apply Now
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-dark/70">
              Submit your details and resume. If your profile matches, our team
              will contact you quickly.
            </p>

            <form
              action="https://formsubmit.co/dairyguruji@gmail.com"
              method="POST"
              encType="multipart/form-data"
              className="mt-6 space-y-4"
            >
              <input type="hidden" name="_form" value="career-application" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your application! We will review your resume and contact you if there's a match."
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.dairyguruji.com/careers?success=true"
              />

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Role Interested In
                </label>
                <select
                  name="role"
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/35"
                >
                  <option value="Regional Sales Manager">
                    Regional Sales Manager
                  </option>
                  <option value="Area Sales Manager">Area Sales Manager</option>
                  <option value="Senior Sales Officer">
                    Senior Sales Officer
                  </option>
                  <option value="Sales Officer">Sales Officer</option>
                  <option value="Sales Executive">Sales Executive</option>
                  <option value="Sales Executive">Tele Caller</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Expected CTC (Optional)
                </label>
                <div className="relative">
                  <p className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dark/45" />
                  <input
                    type="text"
                    name="ctc"
                    placeholder="Enter annual CTC"
                    className="w-full rounded-lg border border-primary/15 bg-bg-light py-3 pl-9 pr-4 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Years Of Experience
                </label>
                <div className="relative">
                  <p className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dark/45" />
                  <input
                    type="text"
                    name="experience"
                    placeholder="(e.g. 3 years in dairy sales)"
                    className="w-full rounded-lg border border-primary/15 bg-bg-light py-3 pl-9 pr-4 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full rounded-lg border border-dashed border-primary/25 bg-primary/5 px-4 py-3 text-sm text-text-dark/80 file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-1.5 file:font-bold file:text-text-dark"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-black uppercase tracking-wider text-white transition hover:translate-y-[-1px]"
              >
                Submit Application
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;
