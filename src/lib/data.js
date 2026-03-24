import {
  Activity,
  Milk,
  Droplet,
  ShieldCheck,
  Users,
  Microscope,
  MapPin,
  Headset,
} from "lucide-react";

export const highlights = [
  "No harmful shortcuts",
  "Practical farm guidance",
  "Long-term cattle wellness",
  "Breed-wise nutrition plans",
];

export const trustStats = [
  { label: "Villages reached", value: "40872+" },
  { label: "Active farmer partners", value: "5 lac+" },
  { label: "Average repeat purchase", value: "99%" },
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
    title: "Milk Let Down (MLD)",
    desc: "MLD helps cows and buffaloes release milk easily and naturally, reducing stress and improving milk yield without harmful injections.",
    image: "/images/products/mld.jpeg",
    points: [
      "Smooth milk let-down",
      "Higher milk production",
      "Safe alternative to oxytocin",
    ],
  },
  {
    title: "Mineral Mixture",
    desc: "A scientifically balanced mineral supplement designed to correct deficiencies, improve metabolism, and enhance dairy performance.",
    image: "/images/products/mineral.png",
    points: [
      "Improves milk yield & quality",
      "Supports reproduction & immunity",
      "Enhances nutrient absorption",
    ],
  },
  {
    title: "Bypass Fat",
    desc: "A scientifically formulated rumen bypass fat supplement designed to provide high-density energy without disturbing rumen function, supporting peak lactation and body condition.",
    image: "/images/products/bypass-fat.png",
    points: [
      "Increases milk yield and fat %",
      "Prevents negative energy balance and milk fever",
      "Supports better body condition and recovery post-calving",
    ],
  },
  {
    title: "Calf-Supplement",
    desc: "A scientifically formulated supplement enriched with essential minerals, vitamins, amino acid chelates, and herbal actives to support optimal growth and health in calves.",
    image: "/images/products/calf-supplement.jpeg",
    points: [
      "Promotes faster growth and strong bone development",
      "Enhances immunity and disease resistance",
      "Improves digestion and nutrient absorption",
    ],
  },
  {
    title: "Deworming Bolus",
    desc: "Powerful herbal parasite control designed to manage internal worms while supporting digestion, immunity, and dairy productivity.",
    image: "/images/products/deworming.png",
    points: [
      "Controls internal worms and parasite burden",
      "Improves digestion and feed utilization",
      "Supports appetite, body condition, and milk output",
    ],
  },
  {
    title: "6000+ Feed",
    desc: "A scientifically balanced cattle feed formulated with optimal protein, minerals, amino acids, and toxin binders to support high milk production and overall animal performance.",
    image: "/images/products/feed-6000.png",
    points: [
      "Boosts milk yield, fat & SNF",
      "Improves feed efficiency and digestion",
      "Enhances immunity and body condition",
    ],
  },
  {
    title: "8000+ Feed",
    desc: "An advanced, nutrient-rich cattle feed formulated with high protein, essential minerals, vitamins, amino acids, and toxin binders to support peak milk production and animal health.",
    image: "/images/products/feed-8000.jpeg",
    points: [
      "Optimized for high-yielding herds",
      "Balanced amino acid profile",
      "Supports consistent milk production",
    ],
  },

  {
    title: "Dairy Guruji -H",
    desc: "A scientifically formulated liquid supplement enriched with vitamins (A, D3, E, B12, Biotin) and trace minerals to support udder health and reduce mastitis-related issues in dairy animals.",
    image: "/images/products/dairy-guruji-h.png",
    points: [
      "Helps reduce udder inflammation and infection risk",
      "Supports tissue repair and udder recovery",
      "Improves milk quality and lowers SCC",
    ],
  },
  {
    title: "Calcium",
    desc: "A scientifically balanced calcium supplement enriched with vitamins and trace minerals to support bone strength, milk production, and metabolic health in dairy animals.",
    image: "/images/products/calcium.png",
    points: [
      "Strengthens bones and prevents calcium deficiency",
      "Helps prevent milk fever (hypocalcemia)",
      "Improves milk yield and fat content",
      ,
    ],
  },
  {
    title: "Liver Tonic",
    desc: "A scientifically formulated supplement enriched with vitamins, minerals, and herbal extracts to support liver function, improve metabolism, and enhance overall productivity in dairy animals.",
    image: "/images/products/dairy-guruji-h.png",
    points: [
      "Supports liver detoxification and function",
      "Improves appetite and feed efficiency",
      "Enhances milk yield, fat & SNF",
      ,
    ],
  },
];

export const heroSlides = [
  {
    image: "/images/hero/slide4.jpeg",
    title:
      "Helping Indian Dairy Farmers To Grow.",
    subtitle:
      "सही जानकारी, अच्छे पोषण और नए तरीकों से मेरे भारतीय पशुपालन को जयादा मुनाफे का बनाना",
    cta: "Become a Dealer",
    link: "/dealer",
  },
  {
    image: "/images/hero/slide5.jpeg",
    title:
      "Dairy Farm Adoption",
    subtitle:
      "हम आपके डेयरी फ़ार्म को गोद लेकर उसे ज्यादा मुनाफ़े वाला बनाएंगे – ज्यादा दूध, स्वस्थ पशु, बेहतर नस्ल और कम खर्च के साथ",
    cta: "Start With Us",
    link: "/dealer",
  },
];

export const aboutHero = {
  image: "/images/about/hero.png",
  title: "About Dairy Guru Ji",
  subtitle:
    "More than just nutrition—a movement for scientific dairy farming in India.",
};

export const manufacturingHero = {
  image: "/images/hero/slide2.png",
  title: "Third Party Manufacturing",
  subtitle:
    "Build your own premium dairy feed brand with our ISO certified facility.",
};

export const manufacturingVideo = {
  title: "See Our Manufacturing Story",
  subtitle:
    "Add your featured YouTube video here to give visitors a quick look at your process, quality, and facility.",
  url: "https://youtube.com/shorts/k-XdBzgp8I8?si=QSKkQIDSzvSGyZFh",
};

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
    problem: "Low Milk Production?",
    solution: "Improve yield with balanced nutrition and scientific feeding.",
    image: "/images/pain-point/one.jpg",
  },
  {
    problem: "Less Fat and SNF Levels?",
    solution:
      "Boost milk quality through targeted minerals and better ration management.",
    image: "/images/pain-point/two.webp",
  },
  {
    problem: "Repeat Breeding Problems?",
    solution:
      "Support fertility with proper nutrition, heat detection, and reproductive care.",
    image: "/images/pain-point/three.jpg",
  },
  {
    problem: "Weak Immunity in Animals?",
    solution:
      "Build stronger animals with immunity-supporting nutrition and better management.",
    image: "/images/pain-point/four.jpg",
  },
  {
    problem: "Animals Falling Sick Frequently?",
    solution:
      "Reduce health issues with preventive care and balanced supplementation.",
    image: "/images/pain-point/fifth.webp",
  },
  {
    problem: "High Feed Cost, Low Profit?",
    solution:
      "Increase farm efficiency with smart feeding and cost-effective nutrition plans.",
    image: "/images/pain-point/sixth.jpg",
  },
  {
    problem: "Poor Calf Growth?",
    solution:
      "Ensure stronger future animals with proper calf nutrition and early care.",
    image: "/images/pain-point/wet-calf.webp",
  },
  {
    problem: "Milk Let-Down Problems?",
    solution:
      "Support smooth milking with stress-free management and natural solutions.",
    image: "/images/pain-point/milk.webp",
  },
  {
    problem: "Low Appetite in Animals?",
    solution:
      "Improve feed intake with better gut health and palatable nutrition support.",
    image: "/images/pain-point/cow.jpg",
  },
  {
    problem: "Poor Body Condition and Weakness?",
    solution:
      "Restore strength with energy-rich feed and proper mineral balance.",
    image: "/images/pain-point/poor.jpg",
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

export const teamMembers = [
  {
    name: "Dr. Arvind Kumar",
    role: "Chief Nutrition Scientist",
    bio: "With over 20 years in bovine nutrition, Dr. Kumar leads our R&D, ensuring every product is scientifically balanced for Indian breeds.",
    image: "/images/team/member1.jpg", // Placeholder until specific member images are provided
  },
  {
    name: "Himanshu",
    role: "Founder & Visionary",
    bio: "Driven by the mission to empower farmers, Himanshu focuses on building long-term relationships and sustainable farm growth.",
    image: "/images/about/founder.jpg",
  },
  {
    name: "Sandeep Singh",
    role: "Head of Field Operations",
    bio: "Sandeep manages our 365-day ground support team, bringing practical farm solutions directly to the cattle sheds.",
  },
  {
    name: "Meenakshi Sharma",
    role: "Lead Quality Controller",
    bio: "Ensures that every batch of Dairy Guru Ji feed meets our rigorous ISO 9001:2015 standards.",
  },
];

export const csrInitiatives = [
  {
    id: "green-planet",
    title: "Project Green Planet",
    desc: "Our commitment to environmental sustainability through manure management and renewable energy integration in dairy farms.",
    fullDesc:
      "We believe that dairy farming should be in harmony with nature. Project Green Planet focuses on educating farmers about efficient waste management, converting manure into bio-fertilizer, and integrating solar energy to power cattle sheds. This reduced carbon footprint ensures a healthier planet for the next generation of farmers.",
    image: "/images/impact/impact_green.png",
    stats: "50+ Solar-Ready Sheds Installed",
  },
  {
    id: "health-happiness",
    title: "Netra Jyoti Sewa",
    desc: "A health-first approach for our farmer partners, providing free eye checkups and general medical camps.",
    fullDesc:
      "A healthy farmer is the backbone of a successful farm. Through our 'Health & Happiness' initiative, we organize regular medical camps in rural hubs. We provide free eye screenings, general checkups, and distribute essential medicines. To date, we have supported over 2,000 farmer families through these camps.",
    image: "/images/impact/impact_health.png",
    stats: "2,000+ Families Supported",
  },
  {
    id: "digital-education",
    title: "Digital Dairy Hubs",
    desc: "Empowering rural youth with digital tools for modern cattle health monitoring and farm management.",
    fullDesc:
      "The future of dairy is digital. Our Digital Dairy Hubs program provides tablets and training to rural youth, teaching them how to track milk yield fluctuations, reproductive cycles, and nutrition schedules using modern software. This empowerment creates tech-savvy leaders in the rural community.",
    image: "/images/impact/impact_education.png",
    stats: "15+ Digital Hubs Established",
  },
];

export const socialImpact = [
  {
    id: "environment",
    title: "Green Planet",
    subtitle: "Sustainability",
    desc: "Beyond feed, we focus on the ecosystem. We're investing in greener dairy farms by promoting manure management and solar-ready cattle sheds to reduce carbon footprints.",
    image: "/images/impact/impact_green.png",
    icon: "Leaf",
    color: "from-green-500/20 to-emerald-500/20",
    textColor: "text-emerald-700",
  },
  {
    id: "health",
    title: "Health & Happiness",
    subtitle: "Farmer Wellness",
    desc: "A healthy farm starts with a healthy farmer. Our 'Netra Jyoti' initiative provides free eye checkups and general health camps for our farmer families.",
    image: "/images/impact/impact_health.png",
    icon: "HeartPulse",
    color: "from-yellow-400/20 to-orange-400/20",
    textColor: "text-orange-700",
  },
  {
    id: "education",
    title: "Digital Dairy Hubs",
    subtitle: "Rural Education",
    desc: "Empowering the next generation with technology. We provide digital training on cattle health monitoring and farm management software to rural youth.",
    image: "/images/impact/impact_education.png",
    icon: "GraduationCap",
    color: "from-blue-500/20 to-indigo-500/20",
    textColor: "text-indigo-700",
  },
];

export const breeds = [
  {
    breed: "Jaffarabadi",
    image: "/images/breeds/jaffarabadi.jpg",
    desc: "Large, powerful buffalo breed known for heavy milk yield, rich fat, and strong body build.",
  },
  {
    breed: "Murrah",
    image: "/images/breeds/murrah-buffalo.jpg",
    desc: "Strong, high-milk buffalo known for rich fat and easy adaptability, ideal for profitable dairy farming.",
  },
  {
    breed: "Girlando",
    image: "/images/breeds/girlando.jpg",
    desc: "High-yield tropical dairy breed (Holstein × Gir) with strong milk output and heat adaptability.",
  },
  {
    breed: "Jersey",
    image: "/images/breeds/jersey.png",
    desc: "Rich milk breed with high fat and protein, ideal for profitable dairy farming.",
  },
  {
    breed: "Gir",
    image: "/images/breeds/gir.jpeg",
    desc: "Formulated specifically for A2 milk quality and endocrine balance.",
  },
  {
    breed: "HF Cross",
    image: "/images/breeds/hf.jpg",
    desc: "High milk-yield breed, ideal for profitable large-scale dairy farming.",
  },
];
