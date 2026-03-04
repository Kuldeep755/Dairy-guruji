import { Activity, Milk, Droplet, ShieldCheck, Users, Microscope, MapPin, Headset } from "lucide-react";

export const highlights = [
  "No harmful shortcuts",
  "Practical farm guidance",
  "Long-term cattle wellness",
  "Breed-wise nutrition plans",
];

export const trustStats = [
  { label: "Villages reached", value: "240+" },
  { label: "Active farmer partners", value: "3,500+" },
  { label: "Average repeat purchase", value: "82%" },
  { label: "Field consultation days", value: "365" },
];

export const impactPoints = [
  {
    title: "Milk Consistency",
    desc: "Reduce day-to-day fluctuation through stable mineral and digestion support.",
    icon: <Activity className="h-6 w-6 text-primary" />,
  },
  {
    title: "Reproductive Health",
    desc: "Targeted trace minerals and vitamins for better fertility and heat expression.",
    icon: <Activity className="h-6 w-6 text-primary" />,
  },
  {
    title: "Immunity Readiness",
    desc: "Feed strategies built for seasonal stress, heat load and infection pressure.",
    icon: <Activity className="h-6 w-6 text-primary" />,
  },
];

export const categories = [
  {
    title: "Milk Let Down Support",
    desc: "Hormone-free support for smoother milking and better daily yield.",
    image: "/images/products/mld.png",
    points: [
      "Supports calm milking",
      "Helps reduce stress",
      "Daily-use friendly",
    ],
  },
  {
    title: "Mineral Balance",
    desc: "Complete mineral coverage for fertility, immunity and milk quality.",
    image: "/images/products/mineral.png",
    points: [
      "Macro + trace support",
      "Palatable intake profile",
      "Year-round protocol",
    ],
  },
  {
    title: "Bypass Fat Supplement",
    desc: "High-energy fat sources that bypass rumen digestion for better milk fat content.",
    image: "/images/products/bypass-fat.png",
    points: [
      "Increases milk fat percentage",
      "Boosts energy without acidosis",
      "Supports high-yielding cows",
    ],
  },
  {
    title: "Calf Starter Feed",
    desc: "Nutritionally balanced feed for optimal calf growth and development.",
    image: "/images/products/calf-supplement.png",
    points: [
      "Promotes healthy rumen development",
      "Enhances growth rate",
      "Improves immunity in young calves",
    ],
  },
  {
    title: "Liver Tonic",
    desc: "Supports liver function and detoxification for better overall health.",
    image: "/images/products/liver-tonic.png",
    points: [
      "Improves digestion and nutrient absorption",
      "Supports metabolic health",
      "Reduces liver stress during peak lactation",
    ],
  },
  {
    title: "Deworming Solution",
    desc: "Effective parasite control for better feed conversion and health.",
    image: "/images/products/deworming.png",
    points: [
      "Improves feed efficiency",
      "Reduces parasite load",
      "Enhances overall cattle health",
    ],
  },
  {
    title: "High-Performance Feed",
    desc: "Premium feed formulation for maximum milk production and quality.",
    image: "/images/products/feed-8000.png",
    points: [
      "Optimized for high-yielding herds",
      "Balanced amino acid profile",
      "Supports consistent milk production",
    ],
  },
];

export const heroSlides = [
  {
    image: "/images/hero/slide1.png",
    title: "Healthy Cattle. Higher Milk Yield.",
    subtitle: "Scientifically designed nutrition for modern dairy farms.",
    cta: "Explore Products",
    link: "/products",
  },
  {
    image: "/images/hero/slide2.png",
    title: "Build Your Own Dairy Feed Brand",
    subtitle: "Third Party Manufacturing Across India.",
    cta: "Start Your Brand",
    link: "/third-party-manufacturing",
  },
  {
    image: "/images/hero/slide3.png",
    title: "Golden Opportunity for Dealers",
    subtitle: "High margins. Exclusive territory. Strong support.",
    cta: "Become a Dealer",
    link: "/dealer",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Farm Assessment",
    desc: "We understand ration, breed mix, stage of lactation and current bottlenecks.",
  },
  {
    step: "02",
    title: "Nutrition Recommendation",
    desc: "A practical plan is prepared with clear quantity, timing and expected results.",
  },
  {
    step: "03",
    title: "On-Field Follow-up",
    desc: "Our team tracks changes in yield, body condition and reproductive indicators.",
  },
];

export const farmerTestimonials = [
  {
    quote:
      "Milk production increased by 20% in the last 6 months. Cattle rarely get sick now. Dairy Guru Ji changed our lives!",
    name: "Rajveer Singh",
    location: "Dairy Farmer, Karnal",
    farmSize: "15 Cattle",
    beforeAfter: "Yield: 12L → 14.4L per animal",
  },
  {
    quote:
      "Milking used to be a struggle. Now, milk flow is excellent even without oxytocin. The calves are healthier too.",
    name: "Mahesh Yadav",
    location: "Khetipana, Alwar",
    farmSize: "8 Cattle",
    beforeAfter: "Milking time: 15 mins → 8 mins",
  },
  {
    quote:
      "Summer heat used to drop yield drastically. Now, production is consistent year-round. Profit increased by 25%.",
    name: "Suresh Kumar",
    location: "Dairy Farm, Rajasthan",
    farmSize: "25 Cattle",
    beforeAfter: "Profit: ₹15,000 → ₹18,750 per month",
  },
];

export const dealerTestimonials = [
  {
    quote:
      "Partnering with Dairy Guru Ji was the best decision. Monthly turnover jumped from ₹2 Lakh to ₹8 Lakh. Happy customers, happy me!",
    name: "Anil Sharma",
    location: "Dealer, Haryana",
    territory: "5 Districts",
    growth: "400% Turnover Growth",
  },
];

export const faqs = [
  {
    q: "What is the solution for low milk yield?",
    a: "Our MLD product naturally stimulates milk let-down. Most farmers observe a clear difference within 2-4 weeks.",
  },
  {
    q: "Are the programs suitable for small farms?",
    a: "Absolutely. We design affordable, phase-based nutrition protocols that are ideal for small and medium-sized farms.",
  },
  {
    q: "Can I mix this with my current fodder/feed?",
    a: "In most cases, yes. We map your existing feed components and suggest additive support without excessive overlap.",
  },
  {
    q: "What are the benefits of becoming a dealer?",
    a: "We provide excellent margins, localized marketing support, comprehensive training, and exclusive territory protection.",
  },
];

export const farmerPainPoints = [
  {
    problem: "Declining Milk Yield?",
    solution: "Improve milk volume and quality with targeted nutrition.",
    icon: <Milk className="h-8 w-8 text-primary" />,
  },
  {
    problem: "Hard Milking Issues?",
    solution: "Natural milk let-down with our hormone-free solutions.",
    icon: <Droplet className="h-8 w-8 text-primary" />,
  },
  {
    problem: "Frequent Illness?",
    solution: "Build stronger herds with immunity-enhancing formulation.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
];

export const whyChooseUs = [
  {
    title: "Farmer-First Advisory",
    desc: "We recommend what improves your farm margin, not what increases invoice size.",
    icon: <Users className="h-8 w-8 text-current" />,
  },
  {
    title: "Verified Quality Control",
    desc: "ISO 9001:2015 backed manufacturing with consistent formulation standards.",
    icon: <Microscope className="h-8 w-8 text-current" />,
  },
  {
    title: "Local & Breed Specific",
    desc: "Nutrition mapped to breed, weather stress, ration pattern, and lactation stage.",
    icon: <MapPin className="h-8 w-8 text-current" />,
  },
  {
    title: "365-Day Ground Support",
    desc: "Field guidance, usage correction, and follow-up for measurable on-farm outcomes.",
    icon: <Headset className="h-8 w-8 text-current" />,
  },
];

export const breeds = [
  {
    breed: "Sahiwal",
    image: "/images/breeds/sahiwal.png",
    desc: "Optimized for indigenous resilience and high heat-stress tolerance.",
  },
  {
    breed: "Gir",
    image: "/images/breeds/gir.jpeg",
    desc: "Formulated specifically for A2 milk quality and endocrine balance.",
  },
  {
    breed: "HF Cross",
    image: "/images/breeds/hf.jpeg",
    desc: "Stability support for high-yielders to prevent metabolic depletion.",
  },
];
