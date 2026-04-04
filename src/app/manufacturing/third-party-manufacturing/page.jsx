"use client";

import PageHero from "@/components/organisms/PageHero";
import { manufacturingVideo, thirdPartyManufacturingHero } from "@/lib/data";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Lightbulb, Globe2, Sprout } from "lucide-react";
import { useRouter } from "next/navigation";

import { Input, Textarea, FormField } from "@/components/ui/input";
import FormToast from "@/components/ui/form-toast";
import { backendFetch } from "@/lib/api";

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
  const router = useRouter();
  const manufacturingVideoEmbedUrl = getYoutubeEmbedUrl(manufacturingVideo.url);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    volume: "",
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
      const response = await backendFetch("/api/forms/manufacturing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to submit manufacturing inquiry.",
        );
      }

      setSubmitState({
        type: "success",
        message:
          result.message || "Manufacturing inquiry submitted successfully.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        volume: "",
        message: "",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error.message ||
          "Something went wrong while submitting manufacturing inquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatWeDo = [
    {
      title: "Website & E-Commerce Support",
      explanation:
        "We help you build a professional website and e-commerce setup for your brand, so you can sell your products online and reach a wider market beyond your local area.",
    },
    {
      title: "Brand Building Support",
      explanation:
        "We guide you from the very beginning — from logo design and product naming to packaging design — ensuring your brand looks professional, trusted, and market-ready from day one.",
    },
    {
      title: "Private Label Manufacturing",
      explanation:
        "We manufacture cattle feed under your brand name, allowing you to sell your own product in the market. You don’t need a factory or machinery — Dairy Guruji manages the entire production process with high-quality standards.",
    },
    {
      title: "Scientific Formulation",
      explanation:
        "We create scientifically balanced feed formulations based on your target market and pricing. This ensures proper nutrition, improved milk production, and real results — helping your brand build trust quickly.",
    },
    {
      title: "Quality Raw Material Sourcing",
      explanation:
        "We source high-quality raw materials from trusted suppliers to ensure consistency in every batch. Better inputs lead to better performance and long-term brand reliability.",
    },
    {
      title: "Fully Automated Production",
      explanation:
        "Our plant operates on a fully automated system, ensuring consistent quality in every batch. This reduces manual errors and enables fast, efficient production you can rely on.",
    },
    {
      title: "Field-Tested Products",
      explanation:
        "We test our products on real dairy farms to ensure proven performance. This guarantees visible results for farmers and helps your brand grow with strong trust.",
    },
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Every big brand was once small.",
      desc: "Rajasthan के एक छोटे शहर में रहने वाले Ramesh ji पिछले 4 साल से काम कर रहे थे। हर दिन मेहनत बहुत करते थे, लेकिन profit limited ही रहता था।.",
    },
    {
      step: "02",
      title: "His dream was — I want to have my own brand.",
      desc: "But the problem was:\n• No factory\n• No machinery\n• No technical knowledge\n• And the risk of investment on top of that\n\nSlowly, he had almost given up on this dream.",
    },
    {
      step: "03",
      title: "Turning Point ",
      desc: "एक दिन Ramesh ji को Dairy Guruji के बारे में पता चला।\n\nपहली बार किसी ने उन्हें ये नहीं कहा कि\n“आप हमारा product बेचो”\n\nबल्कि हमने कहा:\n“आप अपना brand बनाओ, हम आपके साथ हैं।”\n\nयही बात उन्हें दिल से लगी।",
    },
    {
      step: "04",
      title: "What We Did",
      desc: "हमने Ramesh ji को step by step support किया:\n\n उनके area के हिसाब से scientific feed formulation बनाया\n High-quality raw material sourcing की\n Fully automatic plant में manufacturing शुरू की\n उनके brand name से packaging और production किया\n Product को real dairy farms पर test किया\n\nउन्होंने सिर्फ अपना brand name दिया… बाकी सब हमने संभाला।",
    },
    {
      step: "05",
      title: "Initial Challenges",
      desc: "शुरुआत आसान नहीं थी।\n\nपहले महीने sales slow थी, market में trust बनाना मुश्किल था।\nलेकिन हमने उन्हें guide किया:\n• कैसे dealers को approach करना है\n• कैसे farmers को समझाना है\n• कैसे product की value बतानी है\n\nहम सिर्फ factory नहीं थे — हम उनके साथ ground पर खड़े थे।",
    },
    {
      step: "06",
      title: "Results",
      desc: "6 महीनों के अंदर:\n\n उनका brand local market में पहचान बनाने लगा\n  Farmers ने repeat orders देना शुरू किया\n  उनका margin dealership से ज्यादा हो गया\n  आज वो खुद के brand के साथ confidently market में खड़े हैं",
    },
  ];

  const differencePoints = [
    {
      title: "We don’t just manufacture — we help build your business.",
    },
    {
      title:
        "We don’t just create formulas — we deliver profit-oriented nutrition.",
    },
    {
      title:
        "We don’t just supply products — we provide ground-level support and guidance.",
    },
    {
      title: "We don’t just make promises — we prove results on real farms.",
    },
  ];

  const benefitCards = [
    {
      title: "Build Your Own Brand",
      subtitle:
        "Turn your idea into a real, market-ready cattle feed brand without needing factory or prior experience",
    },
    {
      title: "Low-Risk Start",
      subtitle:
        "Start your business with minimal investment and zero infrastructure burden, making your journey safe and practical",
    },
    {
      title: "Expert Guidance",
      subtitle:
        "Get access to industry knowledge and avoid costly mistakes with step-by-step support from experienced professionals.",
    },
    {
      title: "World-Class Manufacturing",
      subtitle:
        "Use a fully automated, high-quality production facility without owning or managing it yourself.",
    },
    {
      title: "Faster Market Entry",
      subtitle:
        "Private labeling allows you to capture higher profit margins and build long-term brand equity, rather than being just a reseller.",
    },
    {
      title: "Long-Term Partnership",
      subtitle:
        "Work with a team that supports your growth, not just your production—every step of the way.",
    },
    {
      title: "Higher Profit Margins",
      subtitle:
        "Sell your own brand and gain better control over pricing, margins, and long-term financial growth",
    },
    {
      title: "Stronger Market Trust",
      subtitle:
        "Deliver consistent quality that helps you build trust with farmers and create repeat customers",
    },
    {
      title: "Create Your Identity",
      subtitle:
        "Move beyond reselling and build a brand that people recognize, trust, and remember.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fbfa_0%,#ffffff_28%,#f8fbfa_100%)] ">
      <FormToast
        message={submitState.message}
        type={submitState.type || "success"}
        onClose={() => setSubmitState({ type: "", message: "" })}
      />
      <PageHero
        image={thirdPartyManufacturingHero.image}
        title={thirdPartyManufacturingHero.title}
        subtitle={thirdPartyManufacturingHero.subtitle}
      />

      <section className="relative overflow-hidden py-20 md:py-28 ">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start ">
          <div className="rounded-4xl border border-primary/10 bg-white/80 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl md:p-12 ">
            <div className="mb-6 inline-flex rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
              Third Party Manufacturing
            </div>
            <h2 className="mb-6 text-xl font-black leading-tight text-text-dark md:text-2xl">
              Dairy Guruji turns your dream into a brand — from manufacturing to
              formulation, we handle everything.
            </h2>
            <p className="mb-8 max-w-2xl text-lg font-bold leading-relaxed text-text-dark/75 md:text-xl">
              Turn your dream into a powerful brand with Dairy Guruji — we
              handle formulation, manufacturing, and everything in between.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-primary/10 bg-[#f8fbfa] p-6">
                <h3 className="mb-4 text-xl font-black text-text-dark">
                  Every big brand was once small.
                </h3>
                <div className="space-y-3 text-base font-bold leading-relaxed text-text-dark/75 md:text-base">
                  <p>
                    Many people want to start their own cattle feed or
                    supplement brand, but they don’t have a factory, machinery,
                    or the right guidance. Because of this, their dream stops
                    even before it begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex w-full justify-center items-center">
            {manufacturingVideoEmbedUrl && (
              <div className="relative w-full max-w-4xl xl:max-w-5xl rounded-[2.2rem] ">
                <div className="rounded-4xl overflow-hidden">
                  {/* BIG HEIGHT */}
                  <div className="h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] w-full">
                    <iframe
                      className="h-full w-full"
                      src={manufacturingVideoEmbedUrl}
                      title={manufacturingVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-2xl font-black uppercase text-primary">
            What We will help .?
          </p>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whatWeDo.map((item) => (
              <div
                key={item.title}
                className="group rounded-4xl border border-primary/10 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:border-primary/25"
              >
                <h3 className="mb-4 text-2xl font-black text-[#cf9405]">
                  {item.title}
                </h3>
                <p className="text-base font-bold leading-relaxed text-text-dark/70">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-3 text-3xl  tmb-3 font-black uppercase text-primary">
            Why Us
          </p>
          <h2 className="mb-6 text-2xl font-black text-text-dark md:text-2xl">
            We Are Not Like Other
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {differencePoints.map((item, i) => (
              <div
                key={i}
                className="group rounded-[2rem] border border-primary/20 bg-linear-to-br from-white to-primary/5 p-5 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <p className="text-lg font-black leading-relaxed text-text-dark md:text-xl">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="mb-3 text-3xl  tmb-3 font-black uppercase text-primary">
            Benefits
          </p>
          <h2 className="mb-6 text-2xl font-black text-text-dark md:text-2xl">
            what you will get
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-5">
            {benefitCards.map((benefit, i) => (
              <div
                key={i}
                className="group rounded-4xl border border-primary/10 bg-white p-5 shadow-[0_16px_50px_rgba(15,23,42,0.05)]"
              >
                <h3 className="mb-4 text-xl font-black text-[#cf9405]">
                  {benefit.title}
                </h3>
                <p className="text-sm font-bold leading-relaxed text-text-dark/70">
                  {benefit.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-24 text-center">
            <h2 className="mb-6 text-3xl font-black text-primary md:text-4xl">
              Start your Cattle Feed Brand today — without a factory, without
              big investment.
            </h2>
            <p className="text-xl font-medium text-text-dark/60">
              Dairy Guruji turns your dream into a brand — from manufacturing to
              formulation, we handle everything.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-primary/20 md:left-1/2 md:block" />

            <div className="space-y-16 md:space-y-32">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-start gap-8 md:flex-row md:items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="absolute top-0 left-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/10 bg-white text-xl font-black text-primary shadow-xl md:left-1/2 md:-ml-8">
                    {step.step}
                  </div>

                  <div
                    className={`w-full pl-20 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-24 md:text-right" : "md:pl-24 md:text-left"}`}
                  >
                    <h3 className="mb-4 text-xl font-black text-text-dark md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-text-dark/60 md:text-xl">
                      {step.desc}
                    </p>
                  </div>
                  <div className="hidden w-1/2 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="inquiry"
        className="max-w-7xl mx-auto mb-20 px-4 py-24 sm:px-6 md:py-32"
      >
        <div className="grid grid-cols-1 gap-16 items-start lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-12">
              <span className="mb-4 block text-sm font-black uppercase tracking-widest text-primary">
                Get in touch
              </span>
              <h2 className="mb-6 text-4xl font-black leading-tight text-text-dark md:text-6xl">
                Let&apos;s Build Your <br />
                <span className="text-primary">Success Story</span>
              </h2>
              <p className="text-xl font-medium text-text-dark/60">
                Fill out the form below and our manufacturing experts will reach
                out to discuss your specific requirements.
              </p>
            </div>

            <div className="relative rounded-[3rem] border border-black/5 bg-white/50 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                  {submitState.message ? (
                    <div
                      className={`mb-4 rounded-lg px-4 py-3 text-sm font-medium ${
                        submitState.type === "success"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {submitState.message}
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-8 py-5 text-xl font-black text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary-dark"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="relative overflow-hidden rounded-[3rem] bg-[#131b23] p-10 text-white shadow-2xl md:p-14">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/20 blur-[60px]" />
              <h3 className="mb-8 text-2xl font-black">
                Fastest Growing Sector
              </h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-white/60">
                    India is the world&apos;s largest milk producer, creating
                    massive demand for quality feed.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-white/60">
                    Organized dairy farming is rising, demanding professional
                    nutritional solutions.
                  </p>
                </div>
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <p className="text-lg font-medium text-white/60">
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
                  className="mb-4 rounded-full bg-white/5 p-2"
                />
                <p className="text-xl font-black tracking-tight text-primary">
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

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path d="M10 11 8 13a2 2 0 1 1-3-3l3.5-3.5a2 2 0 0 1 2.8 0L13 8" />
      <path d="m14 13 2 2a2 2 0 0 0 3-3l-3.5-3.5a2 2 0 0 0-2.8 0L10 11" />
      <path d="m9 15 1 1" />
      <path d="m12 13 1.5 1.5" />
      <path d="m14.5 11.5 2 2" />
    </svg>
  );
}
