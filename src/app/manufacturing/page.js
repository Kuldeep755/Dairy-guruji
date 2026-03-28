"use client";

import Image from "next/image";

import PageHero from "@/components/organisms/PageHero";
import { manufacturingHero, manufacturingVideo } from "@/lib/data";

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

const warehouseMedia = {
  gallery: [
    {
      video: "/images/warehouse/warehouse.mp4",
      alt: "From fully automated production lines to strict lab testing and expert supervision, every product is crafted to deliver consistent quality, better animal health, and higher milk production.",
      title: "World class manufacturing",
    },
    {
      video: "/images/warehouse/warehouse15.mp4",
      alt: "Our advanced manufacturing systems ensure uniform quality, hygiene, and accuracy in every batch.",
      title: "Technology & Automation",
    },
    {
      src: "/images/warehouse/warehouse16.jpeg",
      alt: "Every formulation is carefully developed based on animal nutrition science, market needs, and real-world dairy challenges.",
      title: "Scientific Excellence",
    },
    {
      src: "/images/warehouse/warehouse12.jpeg",
      alt: "Our trained team, technical experts, and on-ground experience ensure that every product meets real dairy farm expectations.",
      title: "Professional Team",
    },

    {
      src: "/images/coustmer/coustmer1.jpeg",
      alt: "We don’t rely on theory — our products are tested on actual dairy farms to ensure they deliver real results where it matters most.",
      title: "Real Farm Proof",
    },
    {
      src: "/images/warehouse/warehouse14.jpeg",
      alt: "Dairy Guruji exists to bring real happiness to dairy farmers. every farmer feels confident, secure, and proud of their growing dairy journey.",
      title: "Formulate with purpose",
    },
  ],
};
const promisePoints = [
  "World class manufacturing",
  "Precision driven",
  "Consistent every time",
  "Built on science",
  "Lab Tested",
  "Real Farm Results",
];

const whyItWorks = [
  {
    title: "For first-time founders",
    desc: "If you want your own dairy brand but do not want the burden of plant setup, machinery, and technical operations, this model gives you a practical start.",
  },
  {
    title: "For growing distributors",
    desc: "Move from selling someone else’s product to building your own identity, better margins, and longer-term customer loyalty.",
  },
  {
    title: "For serious market expansion",
    desc: "When your goal is repeat quality and a professional brand presence, manufacturing discipline matters as much as sales effort.",
  },
];

export default function ManufacturingPage() {
  const manufacturingVideoEmbedUrl = getYoutubeEmbedUrl(manufacturingVideo.url);

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <PageHero
        image={manufacturingHero.image}
        title={manufacturingHero.title}
        subtitle={manufacturingHero.subtitle}
      />

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] md:p-10">
              <h2 className="max-w-3xl text-3xl font-black leading-tight text-text-dark md:text-3xl">
                Where Quality Meets Science
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-text-dark/75 md:text-lg">
                Every bag we produce carries more than nutrition — it carries
                our responsibility toward your success. every dairy farmer can
                grow with confidence, stability, and higher profits. Your
                progress drives us, and your success defines us.{" "}
              </p>

              {/* <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {promisePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-primary/10 bg-[#f8fbfa] p-4"
                  >
                    <p className="text-sm font-semibold leading-6 text-text-dark/80 md:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="space-y-5">
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
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col">
            <h3 className="mt-5 text-3xl font-black leading-tight text-text-dark md:text-5xl">
              Powered by Technology. Proven by Results.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-text-dark/75 md:text-lg">
              We engineer performance through science, precision, and real farm
              experience.
            </p>
          </div>

          <div className="mt-10 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {warehouseMedia.gallery.map((item, index) => (
              <div
                key={item.src}
                className={`group overflow-hidden rounded-xl border border-primary/10 bg-white p-1 shadow-[0_20px_60px_rgba(15,23,42,0.06)] ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`relative overflow-hidden rounded-lg h-105`}>
                  {item.video ? (
                    <video
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent opacity-90" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-primary shadow-sm">
                    0{index + 1}
                  </div>
                </div>
                <div className="px-2 pb-2 pt-4">
                  <h4 className="text-lg font-black text-text-dark md:text-xl">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-text-dark/70 md:text-[15px]">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
