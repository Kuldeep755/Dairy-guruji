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
    title: "Helping Indian Dairy Farmers To Grow.",
    subtitle:
      "सही जानकारी, अच्छे पोषण और नए तरीकों से मेरे भारतीय पशुपालन को जयादा मुनाफे का बनाना",
    cta: "Products",
    link: "/products",
  },
  {
    image: "/images/hero/slide5.jpeg",
    title: "Dairy Farm Adoption",
    subtitle:
      "हम आपके डेयरी फ़ार्म को गोद लेकर उसे ज्यादा मुनाफ़े वाला बनाएंगे – ज्यादा दूध, स्वस्थ पशु, बेहतर नस्ल और कम खर्च के साथ",
    cta: "Farm Adoption",
    link: "/farmer-registration",
  },
];

export const aboutHero = {
  image: "/images/about/hero1.jpeg",
  title: "About Dairy Guru Ji",
  subtitle: "",
};

export const manufacturingHero = {
  image: "/images/hero/slide6.jpeg",
  title: "Third Party Manufacturing",
  subtitle: "Fully Automated Manufacturing ",
};
export const thirdPartyManufacturingHero = {
  image: "/images/hero/slide6.jpeg",
  title: "Third Party Manufacturing",
  subtitle:
    "Start your Cattle Feed Brand today — without a factory, without large investment.",
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
    name: "Himanshu Choudhary",
    role: "Founder",
    bio: "Visionary founder driven by the mission to transform Indian dairy farming. He focuses on building long-term relationships with farmers and ensuring sustainable growth across rural communities in India.",
    image: "/images/about/founder.jpg",
    // department: "Leadership",
    expertise: [
      "Farmer Relations",
      "Business Strategy",
      "Farm Adoption",
      "Sustainability",
    ],
    linkedin: "#",
    isFounder: true,
  },
  {
    name: "Sunny Choudhary",
    role: "Chief Operating  Officer",
    bio: "Strategic leader executing the company vision with operational excellence. He drives innovation, market expansion, and ensures Dairy Guru Ji delivers consistent value to every farmer partner in India.",
    image: "/images/team/ceo.jpeg",
    // department: "Leadership",
    expertise: [
      "Operations Excellence",
      "Strategic Growth",
      "Market Expansion",
      "Team Leadership",
    ],
    linkedin: "#",
    highlight: "Leading company expansion to new markets",
    isCEO: true,
  },

  {
    name: "Tejraj Jat",
    role: "State Incharge of Rajasthan",
    bio: "Strategic leader executing the company vision with operational excellence.He drives innovation, market expansion, and ensures Dairy Guru Ji delivers consistent value to every farmer partner In All Rajasthan.",
    image: "/images/team/tejraj.jpeg",
    // department: "Leadership",
    expertise: [
      "Operations Excellence",
      "Strategic Growth",
      "Market Expansion",
      "Team Leadership",
    ],
    linkedin: "#",
    highlight: "Leading company expansion to new markets",
    isCEO: false,
  },
  {
    name: "Krishna Sharma",
    role: "State Incharge of Madhya Pradesh",
    bio: "Strategic leader executing the company vision with operational excellence. He drives innovation, market expansion, and ensures Dairy Guru Ji delivers consistent value to every farmer partner In All Madhya Pradesh.",
    image: "/images/team/krishna.jpeg",
    // department: "Leadership",
    expertise: [
      "Operations Excellence",
      "Strategic Growth",
      "Market Expansion",
      "Team Leadership",
    ],
    linkedin: "#",
    highlight: "Leading company expansion to new markets",
    isCEO: false,
  },
  {
    name: "Pooja Chauhan",
    role: "Human Resource Manager (HR)",
    bio: "Strategic leader executing the company vision with operational excellence. He drives innovation, market expansion, and ensures Dairy Guru Ji delivers consistent value to every farmer partner In All India.",
    image: "/images/team/hr.jpeg",
    // department: "Leadership",
    expertise: [
      "Operations Excellence",
      "Strategic Growth",
      "Market Expansion",
      "Team Leadership",
    ],
    linkedin: "#",
    highlight: "Leading company expansion to new markets",
    isCEO: false,
  },
  {
    name: "Ankit Panwar",
    role: "State Incharge of Uttar Pradesh",
    bio: "Strategic leader executing the company vision with operational excellence. He drives innovation, market expansion, and ensures Dairy Guru Ji delivers consistent value to every farmer partner In All Uttar Pradesh.",
    image: "/images/team/ankit.jpeg",
    // department: "Leadership",
    expertise: [
      "Operations Excellence",
      "Strategic Growth",
      "Market Expansion",
      "Team Leadership",
    ],
    linkedin: "#",
    highlight: "Leading company expansion to new markets",
    isCEO: false,
  },
];

export const csrDetailSections = [
  {
    id: "scientific-breed-improvement-program",
    eyebrow: "Genetic Progress",
    title: "1. Scientific Breed Improvement Program",
    headline: "बेहतर नस्ल = ज्यादा दूध = ज्यादा मुनाफा",
    summary: "बेहतर नस्ल = ज्यादा दूध = ज्यादा मुनाफा",
    details: [
      "हम पशुपालक भाईओ को Artificial Insemination (AI) के बारे में जागरूक करते हैं, जिसमें high-quality semen का उपयोग करके बेहतर और high-yielding नस्ल तैयार की जाती है। इससे पशु की दूध देने की क्षमता बढ़ती है और long-term profit सुनिश्चित होता है।",
      "इसके साथ ही, हम अब Embryo Transfer Technology भी affordable cost पर small dairy farmers तक ला रहे हैं, ताकि पशुपालक भाई कम समय में  अपनी पशुओं की नसल में सुधार कर सके।",
    ],
    image: "/images/impact/scientific-breed.jpeg",
  },
  {
    id: "farmer-education",
    eyebrow: "Digital Movement",
    title: "2. Farmer Education Traning Camp",
    summary:
      "आज का किसान जितना educated होगा, उतना ही profitable होगा। Dairy Guruji हर दिन 1.5 लाख से ज्यादा farmers को Facebook, Instagram और YouTube के माध्यम से practical knowledge दे रहा है। हमारा 365-day education mission किसानों को modern dairy techniques, feeding strategies और real farm solutions सिखा रहा है।",
    details: [""],
    image: "/images/impact/education-traning.jpeg",
  },
  {
    id: "digital-awareness-movement",
    eyebrow: "Digital Awareness Movement",
    title: "3. Farmer Digital Awareness",
    summary:
      "आज का किसान जितना educated होगा, उतना ही profitable होगा। इसलिए हम dairy farmers को सिर्फ जानकारी नहीं, बल्कि सही direction देते हैं। Dairy Guruji हर दिन लाखों किसानों तक Facebook, Instagram और YouTube के माध्यम से practical knowledge पहुंचा रहा है—जिसमें feeding, breeding, animal health और farm management जैसे जरूरी topics शामिल हैं।",
    details: [
      "हमारा 365-day education mission किसानों को daily सीखने और अपने farm में improvement करने के लिए inspire करता है। लेकिन असली ताकत तब आती है जब knowledge action में बदलता है। इसलिए हम farmers को simple और practical तरीके सिखाते हैं, जिन्हें वे तुरंत अपने farm पर apply कर सकें। हमारा goal clear है — हर किसान smart बने, confident बने और अपनी डेयरी को एक profitable business में बदल सके।",
    ],
    image: "/images/impact/education.jpeg",
    video: "/images/impact/digital-awareness -movement.mp4",
  },

  {
    id: "sustainable-low-cost-dairy-farming",
    eyebrow: "Sustainability",
    title: "4. Sustainable & Low-Cost Dairy Farming",
    summary:
      "डेयरी में profit सिर्फ ज्यादा खर्च करने से नहीं, बल्कि smart farming से आता है। हम farmers को balanced feeding, सही ration planning और waste management के बारे में guide करते हैं, जिससे unnecessary खर्च कम होता है और output बढ़ता है।",
    details: [
      "हम सिखाते हैं कि कैसे कम cost में ज्यादा production लिया जा सकता है—बिना quality compromise किए। सही nutrition, proper shed management और efficient practices से आपके animals healthy रहते हैं और long-term productivity बढ़ती है।",
      "हम sustainable dairy farming को promote करते हैं, ताकि आपका farm सालों तक stable और profitable बना रहे।",
      "हमारा goal है — “कम खर्च, ज्यादा उत्पादन, और लंबी अवधि का मुनाफा।”",
    ],
    image: "/images/impact/sustainable.jpeg",
  },

  {
    id: "employment-rural-growth",
    eyebrow: "Village Development",
    title: "5. Employment & Rural Growth",
    summary:
      "Dairy Guruji सिर्फ पशुपालन तक सीमित नहीं है, हम गांवों में रोजगार और growth के नए अवसर भी बना रहे हैं। हम dairy background के युवाओं को direct और indirect employment दे रहे हैं—चाहे वो field support हो, training हो या dairy-related services।",
    details: [
      "हम चाहते हैं कि गांव का युवा शहर जाने के बजाय अपने गांव में ही stable career बना सके।",
      "जब एक farmer grow करता है, तो उसके साथ पूरा गांव grow करता है।",
      "हमारा mission है — गांव को मजबूत बनाना, youth को empower करना और dairy के जरिए rural economy को आगे बढ़ाना।",
    ],
    image: "/images/impact/employment.jpeg",
  },

  {
    id: "empowering-entrepreneurship",
    eyebrow: "Business Opportunity",
    title: "6. Empowering Entrepreneurship",
    summary:
      "हम छोटे businessmen और farmers को सिर्फ buyer नहीं, बल्कि brand owner बनाना चाहते हैं। Dairy Guruji आपको मौका देता है कि आप अपना खुद का cattle feed brand शुरू करें—बिना बड़ी investment और factory के।",
    details: [
      "हम अपने plant पर third-party cattle feed manufacturing के जरिए आपका ख़ुद का Brand का पशु आहार तैयार करते हैं, और साथ में guidance भी देते हैं—formula, branding, market strategy और sales support तक।",
      "इससे आप local market में अपनी पहचान बना सकते हैं और एक stable business खड़ा कर सकते हैं।",
      "हमारा goal है — “हर गांव से एक successful dairy entrepreneur निकले।”",
      "आप सिर्फ किसान नहीं, एक businessman बन सकते हैं—और हम इस सफर में आपके साथ खड़े हैं।",
    ],
    video: "/images/impact/empowering.mp4",
  },
  {
    id: "We Adopt Farms",
    eyebrow: "We-Adopt-Farms",
    title: "7. We Adopt Farms",
    summary:
      "हम आपके farm को गहराई से समझते हैं—feeding pattern, breed quality, milk production, animal health और hidden खर्च—ताकि सही problem identify हो सके। इसके बाद हम कोई generic advice नहीं, बल्कि आपके farm के हिसाब से practical और result-oriented plan बनाते हैं।",
    details: [
      "हम यहीं नहीं रुकते—हर हफ्ते monitoring, regular guidance और continuous support के साथ हम improvement track करते हैं।",
      "हमारा focus simple है: दूध बढ़ाना, खर्च कम करना और आपका profit stable बनाना",
      "हम आपके साथ ground पर खड़े रहते हैं—ताकि आपकी डेयरी सिर्फ चले नहीं, बल्कि एक strong, profitable business बने।",
    ],
    image: "/images/impact/adopt-farm.jpeg",
  },
];

export const socialImpact = [
  {
    id: "environment",
    title: "We Adopt Dairy Farms. ",
    desc: "हम सिर्फ सलाह नहीं देते — जिम्मेदारी लेते हैं। डेयरी गुरुजी आपके फार्म को अपनाकर, सही पोषण और मार्गदर्शन से दूध बढ़ाते हैं, खर्च घटाते हैं और मुनाफा बढ़ाते हैं। हम हर हफ्ते पशुओं की जांच करते हैं, ताकि बीमारी आने से पहले ही रोकथाम हो और उत्पादन बना रहे।.",
    image: "/images/impact/farms-adopt.jpeg",
    color: "from-green-500/20 to-emerald-500/20",
    textColor: "text-emerald-700",
  },
  {
    id: "health",
    title: "Creating Opportunities in Villages",
    desc: "हम सिर्फ सलाह नहीं देते, पशुपालक परिवारों के युवाओं को रोजगार भी देते हैं। अब तक 200+ युवाओं को काम देकर हम उनके परिवार की आमदनी बढ़ा रहे हैं — ताकि हर परिवार अपने गांव में ही आत्मनिर्भर बन सके।.",
    image: "/images/impact/opportunities.jpeg",
    color: "from-yellow-400/20 to-orange-400/20",
    textColor: "text-orange-700",
  },
  {
    id: "education",
    title: "Farmer Education",
    desc: "हम सिर्फ Instagram या facebook पर नहीं सिखाते , बल्कि पशुपालकों के डेयरी फ़ार्म पर जाकर उन्हें सिखाते हैं। हमारी 200+ टीम, डॉक्टर और LSA गांव-गांव जाकर डेयरी किसानों को नए तरीके और सही ज्ञान दे रहे हैं। खुद हिमांशु जी भी हर साल पशुपालक जागरूकता अभियान चलाते ह, गांव-गांव जाकर पशुपालकों से मिलते हैं और उन्हें आगे बढ़ने की हिम्मत और रास्ता देते हैं।",
    image: "/images/impact/education.jpeg",
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
