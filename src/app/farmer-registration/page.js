"use client";

import FarmerRegistrationForm from "@/components/organisms/FarmerRegistrationForm";

const membershipBenefits = [
  {
    title: "हर हफ्ते online सभी पशुओं की जांच करेंगे",
  },
  {
    title: "हर महीने Well Experienced Vet डॉक्टर आपके फार्म पर आकर जांच करेंगे",
  },
  {
    title: "24/7 Emergency Online Support",
  },
  {
    title: "Premium Membership Benefits",
  },
  {
    title: "दूध उत्पादन बढ़ाएंगे और खर्च कम करेंगे",
  },

  {
    title: "सरकारी योजनाओं का पूरा फायदा दिलाने में मदद करेंगे ",
  },
];

export default function FarmerRegistrationPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-28 pb-20">
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-6 rounded-[2rem] bg-[#1f4d3a] px-5 py-4 text-white shadow-sm sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-semibold uppercase tracking-[0.22em] text-[#d8e7dd]">
              Dairy Guruji <br></br>Farm Adoption Registration Form
            </p>
          </div>
        </div>
        <article className="rounded-2xl border border-[#e8e8e8] bg-white p-5 shadow-sm mb-4">
          <h2 className="text-lg font-semibold text-[#0984d1] ">
            हर लीटर दूध पर ₹2.5 extra — Dairy Guruji संस्था आपको देगी, ताकि आपकी
            आय बढ़ सके।,
          </h2>
        </article>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {membershipBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl border border-[#e8e8e8] bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-[#202020]">
                {benefit.title}
              </h2>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-[#e8e8e8] bg-white p-4 shadow-sm sm:p-6">
          <FarmerRegistrationForm />
        </div>
      </section>
    </div>
  );
}
