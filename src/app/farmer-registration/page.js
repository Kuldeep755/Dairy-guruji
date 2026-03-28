"use client";

import FarmerRegistrationForm from "@/components/organisms/FarmerRegistrationForm";

export default function FarmerRegistrationPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-28 pb-20">
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-[#202020] sm:text-4xl">
            Farmer Registration Form
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#6b6b6b] sm:text-base">
            Simple, clean, and easy to fill on mobile or desktop.
          </p>
        </div>

        <div className="rounded-2xl border border-[#e8e8e8] bg-white p-4 shadow-sm sm:p-6">
          <FarmerRegistrationForm />
        </div>
      </section>
    </div>
  );
}
