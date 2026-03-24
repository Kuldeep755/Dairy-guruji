import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Beaker,
  ChevronRight,
  Clock3,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { getProductById, products } from "@/lib/productData";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <h2 className="flex items-center gap-2.5 text-[11px] font-black uppercase tracking-[0.22em] text-primary">
      <Icon className="h-4 w-4" />
      {title}
    </h2>
  );
}

function InfoList({ items, icon = BadgeCheck }) {
  const Icon = icon;

  if (!items?.length) return null;

  return (
    <div className="mt-5 space-y-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-2xl bg-[#fcfbf7] px-4 py-3"
        >
          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
          <span className="text-sm font-semibold leading-relaxed text-text-dark/82">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const composition = product.composition || product.nutritionalValue;
  const benefits = product.benefitsHindi ?? product.benefits ?? [];
  const supportSections = [
    {
      title: "Suitable for",
      icon: ShieldCheck,
      items: product.suitableFor,
    },
    {
      title: "Key ingredients",
      icon: Beaker,
      items: product.keyIngredients,
    },
    {
      title: "Usage tips",
      icon: Leaf,
      items: product.usageTips,
    },
  ].filter((section) => section.items?.length);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f6f3ea_0%,#faf8f2_42%,#fcfbf7_100%)] pb-16 pt-24 md:pb-24 md:pt-32">
      <div className="pointer-events-none absolute left-[-8%] top-8 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-primary shadow-sm transition hover:bg-primary/5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_18px_55px_rgba(20,33,45,0.06)]">
          <div className="grid gap-0 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div className="bg-[linear-gradient(135deg,#fffef9_0%,#f3efe2_58%,#eef6ee_100%)] p-6 md:p-8">
              <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-white/75 p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={720}
                  priority
                  className="h-auto max-h-[420px] w-auto object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.12)]"
                />
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                  {product.tag}
                </span>
                {product.pack ? (
                  <span className="rounded-full bg-[#f5f1e5] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/65">
                    {product.pack}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-text-dark md:text-5xl">
                {product.name}
              </h1>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-dark/72 md:text-lg">
                {product.description}
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-[#f8f5eb] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-text-dark/45">
                    Best for
                  </p>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-text-dark">
                    {product.problem}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#eef6ee] p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-text-dark/45">
                    Dosage
                  </p>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-text-dark">
                    {product.dosage ?? "See feeding instructions below"}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-black text-white transition hover:bg-primary/90"
                >
                  <Stethoscope className="h-4 w-4" />
                  Enquire Now
                </Link>
                <a
                  href={`https://wa.me/918168048260?text=I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/30 bg-[#25D366] px-5 py-3.5 text-sm font-black text-white transition hover:bg-[#1ea952]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-8 border-t border-primary/10 pt-5">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    { label: "Category", value: product.tag },
                    { label: "Pack size", value: product.pack ?? product.packaging },
                    { label: "Best time", value: product.bestTimeToUse },
                    { label: "Expected result", value: product.expectedTimeline },
                  ]
                    .filter((item) => item.value)
                    .map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/45">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-sm font-bold leading-relaxed text-text-dark">
                          {item.value}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <main className="space-y-8">
            {benefits.length ? (
              <section className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-7">
                <SectionTitle icon={ShieldCheck} title="Key benefits" />
                <InfoList items={benefits} />
              </section>
            ) : null}

            {product.feedingInstructions ? (
              <section className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-7">
                <SectionTitle icon={Clock3} title="Dosage and usage" />

                <div className="mt-5 space-y-3">
                  {product.feedingInstructions.items ? (
                    product.feedingInstructions.items.map((item, index) => (
                      <div
                        key={`${item.label}-${index}`}
                        className="rounded-2xl bg-[#fcfbf7] px-4 py-3"
                      >
                        {item.label ? (
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/45">
                            {item.label}
                          </p>
                        ) : null}
                        <p className="mt-1.5 text-sm font-bold leading-relaxed text-text-dark">
                          {item.value}
                        </p>
                      </div>
                    ))
                  ) : (
                    <>
                      {product.feedingInstructions.large ? (
                        <div className="rounded-2xl bg-[#fcfbf7] px-4 py-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/45">
                            Large animals
                          </p>
                          <p className="mt-1.5 text-sm font-bold leading-relaxed text-text-dark">
                            {product.feedingInstructions.large}
                          </p>
                        </div>
                      ) : null}

                      {product.feedingInstructions.small ? (
                        <div className="rounded-2xl bg-[#fcfbf7] px-4 py-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/45">
                            Small animals
                          </p>
                          <p className="mt-1.5 text-sm font-bold leading-relaxed text-text-dark">
                            {product.feedingInstructions.small}
                          </p>
                        </div>
                      ) : null}
                    </>
                  )}

                  {product.feedingInstructions.note ? (
                    <div className="rounded-2xl bg-secondary/10 px-4 py-3">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/45">
                        Note
                      </p>
                      <p className="mt-1.5 text-sm font-semibold leading-relaxed text-text-dark/80">
                        {product.feedingInstructions.note}
                      </p>
                    </div>
                  ) : null}
                </div>
              </section>
            ) : null}

            {product.specialNote ? (
              <section className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(135deg,#1d3c2b_0%,#1f7d46_60%,#6d8c3f_100%)] p-6 text-white shadow-[0_18px_50px_rgba(19,45,30,0.2)] md:p-7">
                <SectionTitle icon={Sparkles} title="Why this formula stands out" />
                <p className="mt-4 max-w-4xl text-base font-semibold leading-relaxed text-white/92 md:text-lg">
                  {product.specialNote}
                </p>
              </section>
            ) : null}

            {product.farmerStory ? (
              <section className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-7">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">
                  Result story
                </p>
                <blockquote className="mt-4 text-lg font-bold leading-relaxed text-text-dark md:text-2xl">
                  "{product.farmerStory.quote}"
                </blockquote>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Farmer", value: product.farmerStory.name },
                    { label: "Location", value: product.farmerStory.location },
                    { label: "Outcome", value: product.farmerStory.result },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-[#fcfbf7] p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/45">
                        {item.label}
                      </p>
                      <p className="mt-1.5 text-sm font-bold leading-relaxed text-text-dark">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </main>

          <aside className="space-y-8">
            {composition ? (
              <section className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-7">
                <SectionTitle icon={Beaker} title="Composition" />

                <div className="mt-5 space-y-2.5">
                  {composition.map((item, index) => (
                    <div
                      key={`${item.label}-${index}`}
                      className="flex items-center justify-between gap-4 border-b border-primary/10 py-3 last:border-b-0"
                    >
                      <span className="text-xs font-black uppercase tracking-[0.12em] text-text-dark/55">
                        {item.label}
                      </span>
                      <span className="text-right text-sm font-bold text-text-dark">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {supportSections.map((section) => (
              <section
                key={section.title}
                className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-7"
              >
                <SectionTitle icon={section.icon} title={section.title} />
                <InfoList items={section.items} />
              </section>
            ))}
          </aside>
        </div>

        <section className="mt-14 border-t border-primary/10 pt-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary">
                Related products
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-text-dark md:text-4xl">
                Explore more options
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-primary"
            >
              View all products
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {products
              .filter((related) => related.id !== product.id)
              .slice(0, 4)
              .map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.id}`}
                  className="rounded-[1.5rem] border border-primary/10 bg-white p-4 shadow-[0_12px_35px_rgba(20,33,45,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(20,33,45,0.08)]"
                >
                  <div className="flex h-36 items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,#fffef9_0%,#f4efe0_62%,#eef6ee_100%)] p-4">
                    <Image
                      src={related.image}
                      alt={related.name}
                      width={220}
                      height={220}
                      className="h-28 w-auto object-contain"
                    />
                  </div>

                  <div className="mt-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                      {related.tag}
                    </span>
                    <h3 className="mt-3 text-lg font-black leading-tight text-text-dark">
                      {related.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-dark/65">
                      {related.problem}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
