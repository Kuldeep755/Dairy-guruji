"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Search,
  Stethoscope,
} from "lucide-react";
import { products } from "@/lib/productData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(
    () => ["All", ...new Set(products.map((product) => product.tag))],
    [],
  );

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesTag = activeTag === "All" || product.tag === activeTag;
      const matchesSearch =
        search.length === 0 ||
        product.name.toLowerCase().includes(search) ||
        product.problem.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.tag.toLowerCase().includes(search);

      return matchesTag && matchesSearch;
    });
  }, [activeTag, query]);

  return (
    <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f4ea_0%,#faf8f1_42%,#fcfbf7_100%)] pb-20 pt-28">
      <div className="pointer-events-none absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="rounded-[2rem] border border-primary/10 bg-white px-6 py-8 shadow-[0_16px_45px_rgba(20,33,45,0.06)] md:px-8 md:py-10"
        >
          <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
            Product catalog
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-text-dark md:text-5xl">
            Simple and clear product browsing.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-dark/70 md:text-base">
            Find the right product by problem, category, or name. Open the
            detail page to see dosage, pack size, benefits, and enquiry options.
          </p>
        </div>
      </section>

      {/* <section className="relative mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="rounded-[1.75rem] border border-primary/10 bg-white p-5 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xl">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dark/45" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search product name, problem, or category"
                className="w-full rounded-2xl border border-primary/15 bg-[#fcfbf7] px-11 py-3.5 text-sm text-text-dark placeholder:text-text-dark/45 focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Search products"
              />
            </div>

            <p className="text-sm font-semibold text-text-dark/65">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {tags.map((tag) => {
              const isActive = tag === activeTag;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
                    isActive
                      ? "bg-primary text-white"
                      : "border border-primary/15 bg-[#fcfbf7] text-text-dark hover:bg-primary/5"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section> */}
      <section className="relative mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        {filteredProducts.length ? (
          <div className="space-y-4">
            {filteredProducts.map((product, index) => (
              <article
                key={product.id}
                className="grid gap-5 rounded-[1.75rem] border border-primary/10 bg-white p-5 shadow-[0_14px_40px_rgba(20,33,45,0.05)] md:grid-cols-[220px_minmax(0,1fr)] md:p-6"
              >
                <Link
                  href={`/products/${product.id}`}
                  className="flex items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#fffef9_0%,#f3efe2_58%,#eef6ee_100%)] p-5"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-44 w-auto object-contain"
                  />
                </Link>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary">
                        {product.tag}
                      </span>
                      {product.pack ? (
                        <span className="rounded-full bg-[#f5f1e5] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-text-dark/65">
                          {product.pack}
                        </span>
                      ) : null}
                    </div>

                    <h2 className="mt-3 text-2xl font-black tracking-tight text-text-dark">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm font-semibold text-primary">
                      {product.problem}
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-dark/70">
                      {product.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-text-dark/75">
                      {(product.benefits ?? []).slice(0, 3).map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <BadgeCheck className="h-4 w-4 shrink-0 text-green-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-primary/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm text-text-dark/65">
                      {product.dosage ??
                        "Detailed usage guidance available on product page"}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-black text-white transition hover:bg-primary/90"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/15 bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-primary/5"
                      >
                        <Stethoscope className="h-4 w-4" />
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-primary/15 bg-white p-12 text-center shadow-[0_14px_40px_rgba(20,33,45,0.05)]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-black text-text-dark">
              No products found
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-text-dark/60">
              Try a different search or clear the selected category to view the
              full product list again.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveTag("All");
              }}
              className="mt-6 rounded-full bg-primary px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <section className="relative mx-auto mt-14 max-w-6xl px-4 sm:px-6">
        <div className="rounded-[1.75rem] border border-primary/10 bg-[#1f7d46] px-6 py-8 text-white shadow-[0_18px_55px_rgba(19,45,30,0.18)] md:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/70">
                Need help choosing?
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight md:text-3xl">
                Tell us your farm challenge and we’ll suggest the right product.
              </h3>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-primary"
              >
                <Stethoscope className="h-4 w-4" />
                Talk to Expert
              </Link>
              <a
                href="https://wa.me/918168048260"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
