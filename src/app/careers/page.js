"use client";

import React, { useState } from "react";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

const initialFormState = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  lsa: "Yes",
  experience: "",
};

const CareersPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: "", message: "" });

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your application.");
      }

      setSubmitState({
        type: "success",
        message:
          "Application submitted successfully. Your details have been saved.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error.message ||
          "Something went wrong while submitting the application.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Submit your details. If your profile matches, our team will
              contact you quickly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-widest text-text-dark/50">
                  LSA
                </label>
                <select
                  name="lsa"
                  value={formData.lsa}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-primary/15 bg-bg-light px-4 py-3 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-primary/35"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
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
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-primary/15 bg-bg-light py-3 pl-9 pr-4 text-sm placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/35"
                  />
                </div>
              </div>

              {submitState.message ? (
                <p
                  className={`rounded-lg px-4 py-3 text-sm font-medium ${
                    submitState.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitState.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-black uppercase tracking-wider text-white transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
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
