"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Target,
  Users,
  Award,
  Building2,
  TrendingUp,
  Mail,
  Globe,
  BarChart3,
  Calendar,
  Heart,
  Monitor,
  Flag,
  Eye,
  Briefcase,
  Linkedin,
  Menu,
  X,
  Home,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  ArrowRight,
  Layers,
  Globe2,
  Phone,
  ShoppingCart,
  Smartphone,
  Users2,
  HeartPulse,
  PawPrint,
  Factory,
  Building,
  MapPin,
  Star,
  Quote,
  Lightbulb,
  TrendingUpIcon,
  CheckCheck,
  Circle,
} from "lucide-react";

const agenda = [
  { id: 1, icon: Target, title: "Aim of Meeting" },
  { id: 2, icon: Users, title: "Get Together & Welcome" },
  { id: 3, icon: Award, title: "Founder & CEO Introduction" },
  { id: 4, icon: Building2, title: "Management Team Intro" },
  { id: 5, icon: Users, title: "Existing ASM Introduction" },
  { id: 6, icon: TrendingUp, title: "New ASM Promotion" },
  { id: 7, icon: Briefcase, title: "All SO Introduction" },
  { id: 8, icon: Linkedin, title: "LinkedIn Profiles" },
  { id: 9, icon: Mail, title: "Official Email IDs" },
  { id: 10, icon: Globe, title: "Official Website" },
  { id: 11, icon: BarChart3, title: "1000 Farm Transformation" },
  { id: 12, icon: Calendar, title: "Short Term Vision" },
  { id: 13, icon: Monitor, title: "Tech Plan" },
  { id: 14, icon: Flag, title: "UK Launch" },
  { id: 15, icon: Eye, title: "Plant Visits" },
  { id: 16, icon: Heart, title: "40+ Doctors Team" },
];

const slides = [
  {
    id: 1,
    title: "Aim of Today’s Meeting",
    subtitle: "Why We Are Here Today",
    icon: Target,
    gradient: "from-green-600 to-emerald-500",
    points: [
      "आप सभी सिर्फ कर्मचारी नहीं, बल्कि हमारे परिवार के अहम सदस्य हैं",
      "हम सिर्फ Cattle Feed business नहीं बना रहे, बल्कि दूसरी श्वेत क्रांति के ज़रिए भारत में dairy farming को पूरी तरह बदलने का mission बना रहे हैं।",
      "To Welcome Every New Member with Respect & Purpose",
      "To Recognize Hard Work & Celebrate Growth",
    ],
    description:
      "आज की meeting के बाद सभी साथियों को clear direction, clear target और growth का मौका मिलेगा।",
  },
  {
    id: 2,
    title: "Get Together & Welcome",
    subtitle: "Not Just a Team — A Family with a Mission",
    icon: Users,
    gradient: "from-amber-500 to-orange-400",
    points: [
      "A Warm Welcome to Every New Member",
      "Every Individual Matters & Creates Impact",
      "We Grow by Supporting Each Other",
      "Together, We Achieve What Seems Impossible",
      "जो हमने इतने कम समय में हासिल किया, वो बाकी कंपनियों को सालों की मेहनत के बाद भी नहीं मिल पाता",
    ],
    description:
      "This is not just a workplace — this is where people grow, support each other, and create real impact that will change the future of dairy farming in India.",
  },
  {
    id: 3,
    title: "Founder & Leadership Introduction",
    subtitle: "Vision, Systems, and Win-Win Growth",
    icon: Award,
    gradient: "from-emerald-600 to-green-500",
    points: [
      "Himanshu Choudhary - Founder, Dairy Guruji",
      "मुझे नहीं लगता हिमांशु जी के बारे में introduction देने की जरूरत है, फिर भी मैं थोड़ा बताता हूँ",
      "हिमांशु जी ने Dairy Guruji की शुरुआत एक mission के साथ की - भारतीय पशुपालक भाइयों की आय और जीवन स्तर को बेहतर बनाना",
      "Sunny Choudhary - Chief Operating Officer (COO)",
      "Education:- Masters in Administration & Leadership from Murdoch University (Australia)",
      "सनी जी का focus मजबूत systems बनाना, team को grow करना और Dairy Guruji ko हर क्षेत्र तक पहुंचाना है",
    ],
    description:
      "हिमांशु जी और सनी जी की सोच है कि हम win-win situation पर काम करें, जिसमें सभी का फायदा हो।",
  },
  {
    id: 4,
    title: "Management Team",
    subtitle: "The Backbone of Dairy Guruji",
    icon: Building2,
    gradient: "from-blue-600 to-blue-400",
    managementSections: {
      intro: [
        "Our management team is the foundation of our success",
        "Leadership is always available to guide and solve problems",
      ],
      teamStructure: [
        {
          role: "SE (Sales Executive)",
          responsibility: "Works directly with farmers",
        },
        {
          role: "SO (Sales Officer)",
          responsibility: "Works directly with farmers and helps SE",
        },
        {
          role: "SSO (Senior Sales Officer)",
          responsibility: "Works with farmers and helps SO",
        },
        {
          role: "TSM (Territory Sales Manager)",
          responsibility:
            "Guides the team, improves performance, and works with farmers and dealers",
        },
        {
          role: "ASM (Area Sales Manager)",
          responsibility: "Manages regions and drives growth of team members",
        },
        {
          role: "State Incharge",
          responsibility: "Leads full state operations and strategy",
        },
      ],
      stateLeadership: [
        "Tejraj Jat - Rajasthan",
        "Krishna Sharma - Madhya Pradesh",
        "Ankit Panwar - Uttar Pradesh",
        "Mobeen Khan - Uttarakhand",
        "Divya Virmani - Haryana & Head of Telecalling Staff",
      ],
      supportTeam: [
        "Pooja Chauhan - HR",
        "Hansul Choudhary - Dispatch Manager",
        "Kuldeep Jat - Software Engineer",
      ],
    },
    description:
      "We are not just a team, we are a family. Every member's success is our success.",
  },
  {
    id: 5,
    title: "Existing ASM Introduction",
    subtitle: "सुरेश जी",
    icon: Users,
    gradient: "from-purple-600 to-purple-400",
    points: [
      "Ground level पर Dairy Guruji को आगे बढ़ाने वाले असली leaders",
      "ASMs are the backbone of our growth",
      "ASMs सिर्फ role नहीं हैं — ये हमारी growth और success की सबसे मजबूत foundation हैं",
      "आप सिर्फ team नहीं संभालते — आप future leaders तैयार कर रहे हैं",
      "Strong connection with farmers & dealers",
      "आप company और ground reality के बीच सबसे मजबूत bridge हैं",
      "ये सभी market को समझते हैं और हर challenge को opportunity में बदलते हैं",
      "ये सभी mentor भी हैं, leader भी — आपकी team की growth ही आपकी पहचान है",
      "आप सिर्फ network नहीं बनाते — आप भरोसा बनाते हैं, जो लंबे समय तक चलता है",
    ],
    description:
      "ASM सिर्फ region manage नहीं करते, वो ground पर company को बनाते हैं। आपका हर relationship, हर decision और हर dealer से जुड़ाव — Dairy Guruji का future तय करता है।",
  },
  {
    id: 6,
    title: "New ASM Promotion",
    subtitle:
      "योगेश जी, महावीर जी, सिकंदर जी, गोपी लाल जाट जी, शैतान जी, पवन जी, रविन्द्र जी, विश्वजीत चौहान जी, सूरज सैनी जी, बंटी जी (TSM), अखिल जी",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-400",
    points: [
      "From effort to leadership - a journey earned, not given",
      "यह promotion सिर्फ performance नहीं, बल्कि लगातार मेहनत और dedication का परिणाम है",
      "Earned through merit, not luck",
      "यहाँ growth किसी chance से नहीं, बल्कि आपकी काबिलियत और consistency से मिलती है",
      "अब आप सभी की जिम्मेदारी बढ़ गई है",
      "आपकी success बाकी लोगों के लिए रास्ता दिखाती है - यह possible है",
      "यह अंत नहीं, बल्कि एक नए level की शुरुआत है",
    ],
    description:
      "आज के leaders कभी (SO) beginners थे - और कल के leaders यहीं हमारे सामने आप सभी बैठे हैं। अगर ये सभी कर सकते हैं, to आप भी कर सकते हैं - लेकिन सिर्फ मेहनत और discipline से।",
  },
  {
    id: 7,
    title: "Welcoming New SO and Introduction of All of the SO",
    subtitle: "The Real Face of Dairy Guruji",
    icon: Briefcase,
    gradient: "from-orange-500 to-orange-400",
    points: [
      "SO सिर्फ sales officer नहीं होते - आप Dairy Guruji के frontline leaders हो",
      "आप हर दिन dairy farmers के साथ real connection build करते हो",
      "आप product seller नहीं - farmer के trusted advisor हो",
      "आप गांव-गांव में, घर-घर में Dairy Guruji का strong network build कर रहे हो",
    ],
    description:
      "आज आप SO हो... कल आप TSM, ASM और Dairy Guruji में leaders बनोगे। Our organisation सिर्फ product से नहीं बनेगी - our organisation आप लोगों से बनेगी। जब आप farmer से मिलते हो, तो आप सिर्फ feed नहीं देते - आप उनका trust जीतते हो, उनकी problem solve करते ho, और उनके साथ खड़े रहते हो। याद रखिए - farmer का trust ही Dairy Guruji की सबसे बड़ी strength है, और उस trust के owner आप हो।",
  },
  {
    id: 8,
    title: "LinkedIn Profile Making",
    subtitle: "Step-by-Step Guide for All Employees",
    icon: Linkedin,
    gradient: "from-blue-700 to-blue-500",
    points: ["Click below to create your LinkedIn profile"],
    linkedinUrl: "https://www.linkedin.com/",
    description:
      'Aaj se aap sirf employee nahi ho… aap apni personal brand build kar rahe ho.\n\nLinkedIn = Your Digital Identity\n"Jaise Aadhaar identity hai life ke liye, LinkedIn identity hai career ke liye. Kal ko aap kisi bhi company me jao — pehla search LinkedIn pe hota hai."\n\nGrowth without LinkedIn = Limited Growth\n"Jo log LinkedIn pe active hote hain, unko opportunities dhundti hain. Jo nahi hote — wo sirf job dhundte reh jaate hain."',
  },
  {
    id: 9,
    title: "Official Company Email",
    subtitle: "Your Professional Identity",
    icon: Mail,
    gradient: "from-red-500 to-red-400",
    points: [
      "Your email: name@dairyguruji.com",
      "Use for all professional communication",
      "Looks professional to farmers & dealers",
      "Access company resources & tools",
      "Secure and company-backed",
      "Part of growing with us",
    ],
    description:
      "An official company email makes you part of the professional team. When farmers see dairyguruji.com, they know you're backed by a real company. Use it proudly!",
  },
  {
    id: 10,
    title: "Official Website Tour",
    subtitle: "Show Farmers Our Story",
    icon: Globe,
    gradient: "from-cyan-500 to-cyan-400",
    points: ["Website: dairyguruji.com"],
    description:
      "Our website is not just a link — it builds trust. When farmers ask questions, don’t just explain — show them proof. It shares real results, product details, and success stories. Your confidence + website proof = strong farmer trust. Use it daily to build better relationships and grow your impact.",
  },
  {
    id: 11,
    title: "1000 Big Dairy Farms",
    subtitle: "Our Big Vision",
    icon: BarChart3,
    gradient: "from-yellow-600 to-yellow-500",
    points: [
      "हर लीटर दूध पर ₹2.5 extra - Dairy Guruji संस्था आपको देगी, ताकि आपकी आय बढ़ सके",
      "हर हफ्ते online सभी पशुओं की जांच करेंगे",
      "हर महीने well experienced vet डॉक्टर आपके फार्म पर आकर जांच करेंगे",
      "24/7 emergency online support",
      "Premium membership benefits",
      "दूध उत्पादन बढ़ाएंगे और खर्च कम करेंगे",
      "सरकारी योजनाओं का पूरा फायदा दिलाने में मदद करेंगे",
    ],
    description:
      "Our 1000 Big Dairy Farms vision is about building premium, profitable, and fully supported farms where income grows, milk production improves, costs reduce, and every farmer gets expert guidance at every step.",
  },
  {
    id: 12,
    title: "Short Term Vision",
    subtitle: "Our Exciting Growth Roadmap",
    icon: Calendar,
    gradient: "from-indigo-600 to-indigo-400",
    isStructured: true,
    structuredPoints: [
      {
        number: "1.",
        heading: "Poultry Feed Launch",
        points: [
          "यह सिर्फ एक नया product नहीं, बल्कि SO/ASM के लिए एक नया earning channel है",
          "Poultry farmers एक completely new customer base है - more market coverage, more sales opportunities",
          "More products = more orders = higher target achievement और better incentives",
          "Dairy farmers पर dependency कम करता है और आपको future leader बनने में मदद करता है",
        ],
      },
      {
        number: "2.",
        heading: "Dog (Pet) Feed",
        points: [
          "Pet feed एक completely new segment है जहाँ margins और demand बहुत high हैं",
          "Daily sales volume बिना extra effort के बढ़ाने का मौका",
          "Pet owners repeat customers होते हैं - consistent business मिलती है",
        ],
      },
      {
        number: "3.",
        heading: "Cow Mats & Bedding Products",
        points: [
          "Real farm problems solve करके relationship को strengthen करता है",
          "कम effort में higher value product मिलती है",
        ],
      },
      {
        number: "4.",
        heading: "Milk Products Launch (Like Amul)",
        points: [
          "Amul जैसे strong brand से आप part of a structured system बनते हैं, सिर्फ individual sales नहीं",
          "TSM, ASM, RSM जैसी bigger roles और leadership positions के doors खोलता है",
          "Strong brand = easier selling और higher trust",
          "Brand building, network expansion, और large-scale operations का exposure",
          "Leadership में grow करने का chance है",
        ],
      },
      {
        number: "5.",
        heading: "2nd New Outlet – रेलमगरा (चित्तौड़गढ़)",
        points: [
          "Company की growing presence show करता है",
          "Farmers से बात करते समय आपका confidence मजबूत होता है",
          "More presence = more trust = easier sales और faster market penetration",
          "Company की growth directly आपकी career growth और income से जुड़ी है",
        ],
      },
      {
        number: "6.",
        heading: "New Outlet – Indore (Madhya Pradesh)",
        points: [
          "Indore एक strong dairy region है - high sales potential",
          "Key areas में strong presence से credibility और confidence बढ़ती है",
          "More visibility = more farmer trust = higher conversion rate",
        ],
      },
    ],
    description:
      "Short term vision का मतलब सिर्फ नए products launch करना नहीं है - इसका मतलब है आपके लिए नए market, नए customers, ज्यादा orders, ज्यादा incentives, और leadership growth के नए रास्ते बनाना। Company की growth सीधे आपकी career growth और income से जुड़ी है। जितना बड़ा network, उतना बड़ा trust; जितना बड़ा trust, उतनी तेज़ आपकी growth.",
  },
  {
    id: 13,
    title: "Technology Plan",
    subtitle: "Transforming How Our Company Operates",
    icon: Monitor,
    gradient: "from-violet-600 to-violet-400",
    isStructured: true,
    structuredPoints: [
      {
        number: "",
        heading: "Our Goal",
        points: [
          "Our goal is simple — to make work faster, easier, and error-free using technology",
          "In the next 3 months, we are going to transform how our company operates",
          "Technology is not just about software… It is about making work simpler and smarter",
        ],
      },
      {
        number: "",
        heading: "1. AI Phone Agent",
        explanation:
          "This is an AI-powered system that will automatically call customers and farmers",
        simpleLine:
          "Every customer gets timely communication — without manual effort",
        impacts: [
          "Saves team time",
          "No missed customers",
          "Better customer service",
        ],
      },
      {
        number: "",
        heading: "2. Auto Payslip",
        explanation:
          "Salary processing will be fully automated to eliminate manual errors",
        simpleLine:
          "No delays, no confusion — everything is accurate and automated",
        impacts: [
          "Builds trust",
          "Reduces HR workload",
          "Improves employee satisfaction",
        ],
      },
      {
        number: "",
        heading: "3. E-Commerce Platform",
        explanation:
          "Customers and farmers will be able to place orders directly through a website or app",
        simpleLine: "Ordering becomes simple, fast, and available anytime",
        impacts: [
          "Increased sales",
          "Faster order processing",
          "Wider market reach",
        ],
      },
      {
        number: "",
        heading: "4. Team Management App",
        explanation:
          "This app will help track daily activities and performance of the team",
        simpleLine: "Everyone's work becomes visible and measurable",
        impacts: [
          "Better accountability",
          "Improved performance",
          "Stronger management control",
        ],
      },
      {
        number: "",
        heading: "5. Farmer App",
        explanation: "This app will connect farmers directly with the company",
        simpleLine: "No middleman — direct connection with farmers",
        impacts: [
          "Stronger relationships",
          "Faster support",
          "Increased trust",
        ],
      },
      {
        number: "",
        heading: "6. Adoption Management System",
        explanation:
          "This will be a smart digital system to manage and monitor dairy animals efficiently",
        simpleLine:
          "We are bringing international-level (UK standard) dairy management practices to our farmers",
        impacts: [
          "Healthier animals",
          "Increased milk production",
          "Reduced losses",
        ],
      },
    ],
    description:
      "Technology is not just about software… It is about making work simpler and smarter. Each of these 6 systems will transform how we operate — saving time, reducing errors, and helping us serve farmers better.",
  },
  {
    id: 14,
    title: "UK State Launch",
    subtitle: "A Proud Milestone",
    icon: Flag,
    gradient: "from-teal-600 to-teal-400",
    isStructured: true,
    structuredPoints: [
      {
        number: "",
        heading: "A Proud Milestone",
        points: [
          "Dairy Guruji has built strong trust in cattle supplements from 3 years",
          "Just 6 months ago, we entered cattle feed — and achieved extraordinary success that many companies take years to reach",
          "Today, we are working at full strength with skilled teams in Haryana, UP, MP, and Rajasthan",
        ],
      },
      {
        number: "",
        heading: "Entering Uttarakhand – Starting Today",
        points: [
          "From today, we officially launch in Uttarakhand (UK) — a big step in our rapid expansion",
          "This growth reflects our strong vision, trust, and credibility in the market",
        ],
      },
      {
        number: "",
        heading: "Leadership Announcement",
        simpleLine:
          "Mr. Mobeen Khan will lead Uttarakhand as State Incharge, taking full responsibility for growth and team building",
      },
      {
        number: "",
        heading: "Our Responsibility",
        points: [
          "This is not one person's journey — this is our collective mission",
          "Let's support him and build Uttarakhand just like our other successful states",
        ],
      },
    ],
    description:
      "Plz all team members stand at their place and say best of luck for this proud milestone. Let's make Uttarakhand our next success story.",
  },
  {
    id: 15,
    title: "Plant Visit Program",
    subtitle: "See How We Make Quality",
    icon: Eye,
    gradient: "from-amber-600 to-amber-400",
    points: [
      "Visit plant: May 1st onwards ",
      "See feed manufacturing process",
      "Meet quality control team",
      "Learn raw material sourcing",
      "Witness our quality commitment",
      "Understand what you're selling",
    ],
    description:
      "It's one thing to sell feed. It's powerful to tell farmers: 'I saw how it's made, the quality is amazing!' This confidence transfers to farmers. Plant visit dates: May 1st onwards, all teams welcome!",
  },
  {
    id: 16,
    title: "40+ Doctor Team",
    subtitle: "Your Strongest Support System",
    icon: Heart,
    gradient: "from-rose-600 to-rose-400",
    isStructured: true,
    structuredPoints: [
      {
        number: "",
        heading: "Our Unique Strength",
        points: [
          "Dairy Guruji is not just a feed company — we are the only company with 40+ LSA & Veterinary Doctors on ground",
          "These experienced doctors are your backbone — whenever you face any issue at farm level, you are never alone",
        ],
      },
      {
        number: "",
        heading: "Complete Support",
        points: [
          "From disease diagnosis to treatment support, they make your work easier, faster, and more effective",
          "Regular health camps and farmer education programs build strong trust and credibility for you in the market",
        ],
      },
      {
        number: "",
        heading: "Your Biggest Advantage",
        simpleLine:
          "When a doctor stands with you, your words carry more power",
      },
      {
        number: "",
        heading: "Solution Provider",
        points: [
          "Farmers don't just see a salesman — they see a complete solution provider",
          "This is our real strength and your biggest advantage on the ground",
        ],
      },
      {
        number: "",
        heading: "Coming Soon",
        simpleLine: "Soon all of the contacts will be shared with you all",
      },
    ],
    description:
      "You are not selling alone… you are backed by a powerful medical team.",
  },
];

const SHARED_SLIDE_GRADIENT = "from-green-700 via-emerald-600 to-green-500";
const SLIDE_FONT_COLOR = "#d4af37";
const SLIDE_ACCENT_COLOR = "#f3c24b";

export default function VisionPresentation() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [slideDirection, setSlideDirection] = useState("next");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const next = () => {
    if (currentSlide < 16) {
      setSlideDirection("next");
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide > 1) {
      setSlideDirection("prev");
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Touch swipe handler for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  const slide = slides[currentSlide - 1];
  const Icon = slide.icon;
  const progress = (currentSlide / 16) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 lg:hidden"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <Home size={18} />
              <span className="hidden sm:inline font-medium">Home</span>
            </Link>
          </div>

          {/* Center - Title */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
            <Sparkles size={18} className="text-emerald-400" />
            <span className="text-white font-semibold text-sm">
              Vision Presentation
            </span>
          </div>

          {/* Right - Progress indicator */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-white font-bold text-sm">
                {currentSlide}
              </span>
              <span className="text-white/50 text-xs">of 16</span>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-emerald-500/30 flex items-center justify-center bg-white/5 backdrop-blur">
              <span className="text-emerald-400 font-bold text-xs text-center">
                {currentSlide}/16
              </span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 h-1 bg-emerald-500/20 w-full">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </header>

      <div className="flex pt-16 relative z-40">
        {/* Sidebar */}
        <aside
          className={`fixed lg:relative z-40 h-[calc(100vh-4rem)] transition-all duration-300 ${
            sidebarOpen
              ? "w-72 translate-x-0"
              : "-translate-x-full lg:translate-x-0 lg:w-0"
          } bg-slate-900/95 lg:bg-slate-950/40 lg:backdrop-blur-sm border-r border-white/10 overflow-y-auto`}
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-2 px-3 py-2">
              <CheckCircle
                className="text-emerald-400 flex-shrink-0"
                size={20}
              />
              <h2 className="text-white font-bold text-base">Agenda</h2>
            </div>

            <div className="h-px bg-white/10"></div>

            <nav className="space-y-1">
              {agenda.map((item) => {
                const ItemIcon = item.icon;
                const isActive = currentSlide === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentSlide(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left text-sm group ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-500/20"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <ItemIcon
                      size={18}
                      className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                    />
                    <span>{item.title}</span>
                    {isActive && <Zap size={14} className="ml-auto" />}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 p-4 lg:p-8 transition-all duration-300 "
          // onTouchStart={handleTouchStart}
          // onTouchEnd={handleTouchEnd}
        >
          <div className="max-w-6xl mx-auto ">
            {/* Animated slide container */}
            <div key={currentSlide} className={`animate-fade-in`}>
              <div
                className={`rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-2xl min-h-[calc(100vh-8rem)] flex flex-col border border-white/10 backdrop-blur-sm `}
              >
                {/* Slide Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-8 pb-8 border-b border-white/20">
                  <div className="p-4 lg:p-5 bg-white/15 rounded-2xl backdrop-blur-md border border-white/10 flex-shrink-0 group hover:scale-105 transition-transform duration-300">
                    <Icon size={40} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-white/70 text-xs font-medium bg-white/10 px-2 py-1 rounded-full">
                        <Sparkles size={12} />
                        Slide {slide.id} of 16
                      </span>
                    </div>
                    <h1
                      className="text-3xl lg:text-5xl font-bold leading-tight text-white"
                      // style={{ color: SLIDE_FONT_COLOR }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="text-base lg:text-lg font-medium mt-2 text-white"
                      // style={{ color: SLIDE_FONT_COLOR }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="flex-1 space-y-4 mb-8 ">
                  {/* Points - Regular or Structured */}
                  <div className="space-y-4">
                    <h3
                      className="font-bold text-xl lg:text-2xl flex items-center gap-2 mb-4 text-white"
                      // style={{ color: SLIDE_FONT_COLOR }}
                    >
                      <CheckCircle
                        size={20}
                        // style={{ color: SLIDE_ACCENT_COLOR }}
                      />
                      Key Points
                    </h3>

                    {slide.managementSections ? (
                      <div className="space-y-5">
                        <div className="grid gap-4 lg:grid-cols-2">
                          {slide.managementSections.intro.map((point, i) => (
                            <div
                              key={point}
                              className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-sm"
                              style={{
                                animation: `slideInUp 0.5s ease-out ${i * 0.08}s both`,
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <Star
                                  size={18}
                                  className="mt-0.5 flex-shrink-0"
                                  style={{ color: SLIDE_ACCENT_COLOR }}
                                />
                                <p
                                  className="text-sm lg:text-base leading-relaxed"
                                  style={{ color: SLIDE_FONT_COLOR }}
                                >
                                  {point}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div
                          className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm"
                          style={{ animation: "slideInUp 0.5s ease-out 0.15s both" }}
                        >
                          <div className="mb-4 flex items-center gap-2">
                            <Users2
                              size={18}
                              style={{ color: SLIDE_ACCENT_COLOR }}
                            />
                            <h4
                              className="text-lg font-semibold"
                              style={{ color: SLIDE_FONT_COLOR }}
                            >
                              Team Structure
                            </h4>
                          </div>

                          <div className="grid gap-3 md:grid-cols-2">
                            {slide.managementSections.teamStructure.map((item) => (
                              <div
                                key={item.role}
                                className="rounded-xl border border-white/10 bg-white/5 p-4"
                              >
                                <p
                                  className="text-sm lg:text-base font-semibold"
                                  style={{ color: SLIDE_ACCENT_COLOR }}
                                >
                                  {item.role}
                                </p>
                                <p
                                  className="mt-2 text-sm lg:text-base leading-relaxed"
                                  style={{ color: SLIDE_FONT_COLOR }}
                                >
                                  {item.responsibility}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-2">
                          <div
                            className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm"
                            style={{
                              animation: "slideInUp 0.5s ease-out 0.25s both",
                            }}
                          >
                            <div className="mb-4 flex items-center gap-2">
                              <MapPin
                                size={18}
                                style={{ color: SLIDE_ACCENT_COLOR }}
                              />
                              <h4
                                className="text-lg font-semibold"
                                style={{ color: SLIDE_FONT_COLOR }}
                              >
                                State Leadership
                              </h4>
                            </div>

                            <ul className="space-y-2">
                              {slide.managementSections.stateLeadership.map(
                                (member) => (
                                  <li
                                    key={member}
                                    className="flex items-start gap-2 text-sm lg:text-base"
                                    style={{ color: SLIDE_FONT_COLOR }}
                                  >
                                    <span
                                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                      style={{
                                        backgroundColor: SLIDE_ACCENT_COLOR,
                                      }}
                                    />
                                    <span>{member}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div
                            className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm"
                            style={{
                              animation: "slideInUp 0.5s ease-out 0.35s both",
                            }}
                          >
                            <div className="mb-4 flex items-center gap-2">
                              <Briefcase
                                size={18}
                                style={{ color: SLIDE_ACCENT_COLOR }}
                              />
                              <h4
                                className="text-lg font-semibold"
                                style={{ color: SLIDE_FONT_COLOR }}
                              >
                                Support Team
                              </h4>
                            </div>

                            <ul className="space-y-2">
                              {slide.managementSections.supportTeam.map(
                                (member) => (
                                  <li
                                    key={member}
                                    className="flex items-start gap-2 text-sm lg:text-base"
                                    style={{ color: SLIDE_FONT_COLOR }}
                                  >
                                    <span
                                      className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                                      style={{
                                        backgroundColor: SLIDE_ACCENT_COLOR,
                                      }}
                                    />
                                    <span>{member}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : slide.isStructured && slide.structuredPoints ? (
                      /* Structured Layout - More compact cards */
                      <div className="space-y-3">
                        {slide.structuredPoints.map((item, i) => (
                          <div
                            key={i}
                            className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200"
                            style={{
                              animation: `slideInUp 0.5s ease-out ${i * 0.1}s both`,
                            }}
                          >
                            {/* Heading with number */}
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className="text-lg font-bold"
                                style={{ color: SLIDE_ACCENT_COLOR }}
                              >
                                {item.number}
                              </span>
                              <h4
                                className="text-lg font-semibold"
                                style={{ color: SLIDE_FONT_COLOR }}
                              >
                                {item.heading}
                              </h4>
                            </div>
                            {/* Bullet points below heading */}
                            {item.points && (
                              <ul className="space-y-1 pl-4 border-l-2 border-white/20">
                                {item.points.map((point, j) => (
                                  <li
                                    key={j}
                                    className="flex items-start gap-2 text-lg"
                                    style={{ color: SLIDE_FONT_COLOR }}
                                  >
                                    <span
                                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                                      style={{
                                        backgroundColor: SLIDE_ACCENT_COLOR,
                                      }}
                                    />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                            {/* Explanation */}
                            {item.explanation && (
                              <div className="bg-white/5 rounded-md p-2 mt-2 border border-white/10">
                                <p
                                  className="text-xs italic"
                                  style={{ color: SLIDE_FONT_COLOR }}
                                >
                                  💡 {item.explanation}
                                </p>
                              </div>
                            )}
                            {/* Simple Line */}
                            {item.simpleLine && (
                              <div className="bg-emerald-500/20 rounded-md p-2 mt-2 border border-emerald-500/30">
                                <p
                                  className="text-xs font-semibold"
                                  style={{ color: "#ffffff" }}
                                >
                                  📣 &ldquo;{item.simpleLine}&rdquo;
                                </p>
                              </div>
                            )}
                            {/* Impact Points */}
                            {item.impacts && (
                              <div className="flex flex-wrap gap-1 mt-2">
                                {item.impacts.map((impact, k) => (
                                  <span
                                    key={k}
                                    className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30"
                                  >
                                    ✅ {impact}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Regular bullet points */
                      <ul className="space-y-3">
                        {slide.points.map((point, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 text-white bg-black hover:bg-black/15 p-3 lg:p-4 rounded-xl backdrop-blur transition-all duration-200 hover:scale-105 hover:shadow-lg group cursor-pointer ${
                              slide.id === 8 && i === 0
                                ? "bg-blue-600 hover:bg-blue-700"
                                : ""
                            }`}
                            style={{
                              animation: `slideInUp 0.5s ease-out ${i * 0.1}s both`,
                            }}
                            onClick={() => {
                              if (slide.linkedinUrl && i === 0) {
                                window.open(slide.linkedinUrl, "_blank");
                              }
                            }}
                          >
                            {slide.id === 8 && i === 0 ? (
                              <>
                                <Linkedin
                                  size={20}
                                  className="mt-0.5 flex-shrink-0"
                                />
                                <span
                                  className="text-sm lg:text-base leading-relaxed font-bold"
                                  style={{ color: "#ffffff" }}
                                >
                                  {point} →
                                </span>
                              </>
                            ) : (
                              <>
                                <CheckCircle
                                  size={20}
                                  className="mt-0.5 flex-shrink-0 group-hover:animate-bounce"
                                  style={{ color: SLIDE_ACCENT_COLOR }}
                                />
                                <span
                                  className="text-sm lg:text-base leading-relaxed"
                                  style={{ color: SLIDE_FONT_COLOR }}
                                >
                                  {point}
                                </span>
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Description */}
                  <div className="flex flex-col justify-center">
                    <div className="bg-black backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                      <h3
                        className="font-bold text-lg lg:text-xl mb-4 flex items-center gap-2 text-white"
                        // style={{ color: SLIDE_FONT_COLOR }}
                      >
                        <Sparkles
                          size={20}
                          // style={{ color: SLIDE_ACCENT_COLOR }}
                        />
                        Key Insight
                      </h3>
                      <p
                        className="text-base lg:text-lg leading-relaxed text-justify"
                        style={{ color: SLIDE_FONT_COLOR }}
                      >
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/20">
                  <button
                    onClick={prev}
                    disabled={currentSlide === 1}
                    className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl text-white transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium text-sm lg:text-base"
                  >
                    <ChevronLeft size={20} /> Previous
                  </button>

                  {/* Progress dots */}
                  <div className="flex gap-1.5 flex-wrap justify-center ">
                    {slides.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setCurrentSlide(s.id)}
                        className={`rounded-full transition-all duration-300 ${
                          currentSlide === s.id
                            ? "bg-white w-8 h-3 scale-125 shadow-lg shadow-white/50"
                            : "bg-white/30 w-2 h-2 hover:bg-white/50"
                        }`}
                        title={`Go to slide ${s.id}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={next}
                    disabled={currentSlide === 16}
                    className="flex items-center gap-2 px-4 lg:px-6 py-2.5 lg:py-3 bg-white/15 hover:bg-white/25 disabled:opacity-30 disabled:cursor-not-allowed rounded-xl text-white transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium text-sm lg:text-base"
                  >
                    Next <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
