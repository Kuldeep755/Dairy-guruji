const baseProducts = [
  {
    id: "mld",
    name: "Milk Let Down MLD",
    image: "/images/products/mld.jpeg",
    description:
      "Natural milk let-down booster formulated to support smooth milk flow, reduce stress during milking, improve milk production, and provide a safe alternative to harmful injections.",
    benefits: [
      "Supports natural and smooth milk let-down",
      "Helps improve total milk yield during milking",
      "Reduces stress, nervousness, and discomfort",
      "Supports better udder function and milk ejection reflex",
      "Helps improve milk quality, fat, and consistency",
      "Safe, injection-free alternative to oxytocin use",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Supports natural milk let-down for smoother and more complete milking.",
      "Helps increase milk yield by reducing milk left in the udder.",
      "Reduces stress, fear, and nervousness during the milking process.",
      "Supports better udder function and the natural milk ejection reflex.",
      "Helps improve milk quality, fat consistency, and milking efficiency.",
      "Provides a safe and injection-free alternative to oxytocin use.",
    ],
    feedingInstructions: {
      items: [
        {
          label: "Large animals (cow / buffalo)",
          value: "50-100 ml daily",
        },
        {
          label: "Timing",
          value: "Give twice a day, 1 hour before milking",
        },
        {
          label: "Method of use",
          value: "Mix with feed or give directly",
        },
      ],
      note: "Regular use helps maintain consistent milk let-down and smoother milking.",
    },
    packaging: "सस्पेंशन : 1 लीटर की बोतल में",
    dosage: "Large animals: 50-100 ml daily, twice before milking",
    tag: "Milk Let Down",
    problem: "Delayed milk let-down, low milk flow, incomplete milking, and stress during milking",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "Milk flow used to be delayed and animals stayed restless during milking. After regular use of MLD, milking became smoother and more comfortable.",
      name: "राजेश कुमार",
      location: "दूध फार्म, उत्तर प्रदेश",
      result: "Faster milk flow, calmer animals, and visible improvement in milk output"
    }
  },

  {
    id: "mineral-mixture",
    name: "Mineral Mixture",
    image: "/images/products/mineral.png",
    description:
      "Scientifically balanced mineral mixture formulated to support higher milk production, better fertility, stronger immunity, improved digestion, and overall performance in dairy animals.",
    benefits: [
      "Supports higher milk yield, fat percentage, and SNF",
      "Helps control repeat breeding and improve conception rate",
      "Boosts immunity and overall disease resistance",
      "Improves digestion and feed efficiency",
      "Supports better calf growth and body development",
      "Helps reduce weakness and metabolic imbalance",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Supports higher milk production, fat percentage, and SNF through balanced mineral nutrition.",
      "Helps reduce repeat breeding issues and supports better fertility and conception.",
      "Improves immunity so animals stay healthier, stronger, and more active.",
      "Supports digestion and better feed efficiency for improved daily output.",
      "Promotes faster growth and stronger body development in calves and young animals.",
      "Helps manage weakness, mineral imbalance, and other metabolic stress conditions.",
    ],
    nutritionalValue: [
      { label: "Calcium", value: "26%" },
      { label: "Phosphorus", value: "13%" },
      { label: "Cobalt", value: "150 mg" },
      { label: "Copper", value: "1200 mg" },
      { label: "Iodine", value: "325 mg" },
      { label: "Iron", value: "1500 mg" },
      { label: "Magnesium", value: "6000 mg" },
      { label: "Manganese", value: "1500 mg" },
      { label: "Zinc", value: "9600 mg" },
      { label: "DL-Methionine", value: "1920 mg" },
      { label: "Sulphur", value: "0.72%" },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Adult animals (cow / buffalo)",
          value: "100 grams daily",
        },
        {
          label: "Calves / young animals",
          value: "50 grams daily",
        },
        {
          label: "Method of use",
          value: "Mix with feed or concentrate",
        },
      ],
      note: "Regular daily use is recommended for the best results.",
    },
    packaging: "पॉउडर 1 किग्रा व 5 किग्रा में उपलब्ध",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    dosage: "Adult: 100 g/day | Young: 50 g/day",
    pack: "1 kg & 5 kg",
    tag: "Mineral Mixture",
    problem: "Low milk production, repeat breeding, weak immunity, poor growth, and mineral deficiency",
    farmerStory: {
      quote: "Milk output was low and animals were repeating in breeding. After regular use of Mineral Mixture, fertility improved and production became more stable.",
      name: "सुरेश पांडे",
      location: "दूध उत्पादक, मध्य प्रदेश",
      result: "Better conception, healthier animals, and visible improvement in milk quality"
    }
  },

  {
    id: "calf-supplement",
    name: "Calf Supplement",
    image: "/images/products/calf-supplement.jpeg",
    description:
      "Scientifically formulated calf supplement enriched with vitamins, minerals, amino acid chelates, yeast culture, and herbal actives to support faster growth, stronger immunity, better digestion, and overall development.",
    benefits: [
      "Promotes faster growth and healthy weight gain",
      "Boosts immunity against common calf health challenges",
      "Improves digestion and feed efficiency",
      "Supports stronger bones, muscles, and body development",
      "Helps reduce weakness and mortality risk",
      "Builds a strong foundation for future high-yield animals",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Promotes faster growth and healthy weight gain in calves.",
      "Supports stronger immunity to help protect against common diseases.",
      "Improves digestion and feed utilization for better daily development.",
      "Supports strong bone and muscle growth for better body structure.",
      "Helps reduce weakness and supports healthier calf survival.",
      "Prepares calves for stronger future productivity and high yield potential.",
    ],
    composition: [
      { label: "Each 1 kg provides", value: "" },
      { label: "Dicalcium Phosphate", value: "300 gm" },
      { label: "Zinc Amino Acid Chelate", value: "8 gm" },
      { label: "Manganese Amino Acid Chelate", value: "3.50 gm" },
      { label: "Copper Amino Acid Chelate", value: "0.5 gm" },
      { label: "Vitamin A", value: "10,00,000 IU" },
      { label: "Vitamin D3", value: "2,00,000 IU" },
      { label: "Vitamin E", value: "800 IU" },
      { label: "Fermented Yeast Culture", value: "60 gm" },
      { label: "Curcuma Longa", value: "25 gm" },
      { label: "Bypass Fat", value: "100 gm" },
      { label: "Base", value: "q.s." },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Calves up to 6 months",
          value: "25-50 ml daily",
        },
        {
          label: "Growing calves (6-12 months)",
          value: "50 ml daily",
        },
        {
          label: "Method of use",
          value: "Mix with milk, water, or feed",
        },
      ],
      note: "Regular use gives the best growth and development results.",
    },
    packaging: "पॉउडर 1 किग्रा में उपलब्ध",
    dosage: "Up to 6 months: 25-50 ml/day | 6-12 months: 50 ml/day",
    pack: "1 kg",
    tag: "Calf Growth",
    problem: "Weak calves, low weight gain, poor immunity, digestive issues, and slow development",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "Calves were weak, growing slowly, and often falling sick. After starting Dairy Guruji Calf Supplement, growth improved and the animals became much stronger.",
      name: "अनिल यादव",
      location: "पशुपालक, बिहार",
      result: "Faster growth, stronger immunity, and healthier calf development"
    }
  },

  {
    id: "dairy-guruji-h",
    name: "Dairy Guruji-H",
    image: "/images/products/dairy-guruji-h.png",
    description:
      "Advanced udder-health liquid supplement enriched with essential vitamins and trace minerals to support mastitis control, improve milk quality, strengthen udder tissue, and improve overall dairy performance.",
    benefits: [
      "Helps control mastitis and reduce udder infection risk",
      "Supports lower somatic cell count for better milk quality",
      "Improves udder health, tissue repair, and recovery",
      "Supports better milk yield, flow, and quality",
      "Boosts immunity against udder-related stress and infection",
      "Promotes healthier, stronger, and more active animals",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Helps control mastitis and reduce swelling, inflammation, and udder infection risk.",
      "Supports lower somatic cell count (SCC) for improved milk quality.",
      "Improves udder tissue repair and recovery for healthier udders.",
      "Supports better milk yield, milk flow, and milk composition.",
      "Boosts immunity to help animals resist infection and lactation stress.",
      "Promotes stronger health, better comfort, and more active animals.",
    ],
    composition: [
      { label: "Each 1 ml Contains", value: "" },
      { label: "Vitamin A", value: "22000 IU" },
      { label: "Vitamin D3", value: "10000 IU" },
      { label: "Vitamin H (Biotin)", value: "500 mcg" },
      { label: "Vitamin B12", value: "20 mcg" },
      { label: "Vitamin E", value: "30 mg" },
      { label: "Selenium", value: "10 mcg" },
      { label: "Zinc", value: "40mg" },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Large animals (cow / buffalo)",
          value: "10-20 ml daily",
        },
        {
          label: "Small animals",
          value: "5 ml daily",
        },
        {
          label: "Method of use",
          value: "Mix with feed or give directly",
        },
      ],
      note: "Use regularly or as advised by a veterinarian for best results.",
    },
    packaging: "सस्पेंशन : 500 मि.ली. की बोतल में",
    dosage: "Large animals: 10–20 ml/day | Small animals: 5 ml/day",
    pack: "500 ml Bottle",
    tag: "Udder Health",
    problem: "Mastitis, udder swelling, high SCC, low milk quality, and post-infection recovery",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "Udder hardness and milk quality problems were affecting daily output. Regular use of Dairy Guruji H supported udder recovery and helped improve milk quality.",
      name: "महेश शर्मा",
      location: "डेयरी फार्म, राजस्थान",
      result: "Healthier udders, better milk quality, and improved daily productivity"
    }
  },

  {
    id: "bypass-fat",
    name: "Bypass Fat",
    image: "/images/products/bypass-fat.png",
    description:
      "Scientifically formulated rumen-protected fat supplement designed to provide high-density energy, support peak milk production, improve body condition, and maintain performance without disturbing rumen function.",
    benefits: [
      "Supports higher milk yield and milk fat percentage",
      "Helps prevent negative energy balance during early lactation",
      "Supports body condition and healthy weight maintenance",
      "Helps improve reproductive performance and heat cycle support",
      "Supports reduced risk of ketosis, milk fever, and metabolic stress",
      "Enhances overall productivity in high-yield animals",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Supports higher milk production and improved milk fat percentage.",
      "Helps manage negative energy balance, especially in early lactation.",
      "Supports healthy body condition and reduces post-calving weight loss.",
      "Helps improve reproductive performance, heat cycle, and conception support.",
      "Supports reduced risk of ketosis, milk fever, and metabolic imbalance.",
      "Provides targeted energy for better overall productivity and performance.",
    ],
    composition: [
      { label: "Each 100 gm Provides", value: "" },
      { label: "Rumen-Protected Bypass Fat", value: "15 g" },
      { label: "Rumen Bypass Protein", value: "1 g" },
      { label: "Calcium propionate", value: "2 g" },
      { label: "Fermented Yeast Culture", value: "5 g" },
      { label: "Available Calcium", value: "1.5 g" },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Cow / buffalo (lactating)",
          value: "100-200 grams per day",
        },
        {
          label: "High-yield animals",
          value: "Up to 250 grams per day",
        },
        {
          label: "Method of use",
          value: "Mix with feed or concentrate",
        },
      ],
      note: "Best results are seen during early lactation and peak production stage.",
    },
    packaging: "सस्पेंशन : 10 किग्रा. की बाल्टी में",
    dosage: "Lactating animals: 100-200 g/day | High yield: up to 250 g/day",
    pack: "10 kg Bucket",
    tag: "High Energy",
    problem: "Energy deficiency, low milk yield, low milk fat, weight loss after calving, and delayed heat cycle",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "After calving, animals were losing weight and milk performance was dropping. Dairy Guruji Bypass Fat helped improve body condition and supported better production.",
      name: "विजय सिंह",
      location: "दूध उत्पादक, हरियाणा",
      result: "Better energy, improved milk fat, and stronger post-calving recovery"
    }
  },

  {
    id: "dairy-guruji-gel",
    name: "Dairy Guruji Gel",
    image: "/images/products/dairy-guruji-gel.png",
    description:
      "Fast calcium and energy booster for dairy animals, formulated to support immediate recovery, prevent calcium deficiency, and maintain performance during calving and lactation.",
    benefits: [
      "Helps prevent milk fever and hypocalcemia",
      "Provides an instant calcium and energy boost",
      "Supports faster recovery after calving",
      "Improves strength, appetite, and activity",
      "Supports milk production and dairy performance",
      "Easy-to-administer gel form for quick use",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Helps prevent milk fever by supporting calcium balance during pre- and post-calving stress.",
      "Provides fast calcium and energy support when animals need immediate recovery help.",
      "Supports quicker recovery after calving and helps restore normal strength and activity.",
      "Improves appetite, muscle function, and overall dairy performance.",
      "Supports milk production by helping maintain mineral balance during early lactation.",
      "Easy gel form allows convenient and fast oral administration.",
    ],
    composition: [
      { label: "Powerful composition", value: "" },
      { label: "Calcium", value: "For immediate calcium support" },
      { label: "Phosphorus", value: "Supports mineral balance and recovery" },
      { label: "Vitamin D3", value: "Helps calcium absorption and utilization" },
      { label: "Magnesium", value: "Supports muscle and nerve function" },
      { label: "Herbal extracts", value: "Added for recovery and supportive action" },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Adult cow / buffalo",
          value: "1 bottle (200-300 ml) at the time of calving",
        },
        {
          label: "Repeat dose",
          value: "Repeat after 12-24 hours if required",
        },
        {
          label: "Method of use",
          value: "Can be given directly in the mouth",
        },
      ],
      note: "Use during the pre-calving and post-calving period for best results, or as advised by a veterinarian.",
    },
    packaging: "सस्पेंशन : 300 मि.ली. की बोतल में",
    dosage: "Adult: 1 bottle (200-300 ml) at calving | Repeat after 12-24 hours if needed",
    pack: "300 ml Bottle",
    tag: "Calcium Boost",
    problem:
      "Milk fever risk, sudden calcium deficiency, weakness, low activity, and post-calving recovery stress",
    specialNote:
      "Unlike ordinary calcium supplements, Dairy Guruji Gel delivers fast-acting calcium support in an easy oral gel form for immediate help when animals need it most.",
    farmerStory: {
      quote:
        "After calving, animals were becoming weak and slow to recover. Dairy Guruji Gel helped restore strength quickly and supported smoother recovery in the first critical hours.",
      name: "रमेश चंद",
      location: "पशुपालक, उत्तराखंड",
      result: "Faster recovery, better activity, and improved milk performance after calving",
    },
  },

  {
    id: "calcium",
    name: "Liquid Calcium",
    image: "/images/products/calcium.png",
    description:
      "Fast-absorbing liquid calcium enriched with vitamins, minerals, and herbal extracts to support stronger bones, higher milk production, better recovery, and protection against calcium deficiency in dairy animals.",
    benefits: [
      "Helps prevent milk fever and calcium deficiency",
      "Supports higher milk yield, milk fat, and SNF",
      "Strengthens bones, teeth, and overall body condition",
      "Improves digestion, appetite, and feed utilization",
      "Supports immunity and faster post-calving recovery",
      "Promotes better energy, performance, and daily activity",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Helps prevent milk fever (hypocalcemia), especially in pre- and post-calving animals.",
      "Supports better milk production, fat percentage, and overall lactation performance.",
      "Strengthens bones and teeth for long-term animal health and body support.",
      "Improves digestion, appetite, and feed utilization for better daily performance.",
      "Supports immunity and faster recovery after weakness, calving, or calcium loss.",
      "Maintains better body condition so animals stay more active, stronger, and healthier.",
    ],
    nutritionalValue: [
      { label: "Calcium", value: "6000 mg" },
      { label: "Phosphorus", value: "3000 mg" },
      { label: "Vitamin A", value: "12000 IU" },
      { label: "Vitamin D3", value: "50,000 IU" },
      { label: "Vitamin E", value: "4,500 IU" },
      { label: "Vitamin B12", value: "400 mcg" },
      { label: "Biotin (Vitamin H)", value: "200 mcg" },
      { label: "Magnesium", value: "400 mg" },
      { label: "Zinc Sulphate", value: "1500 mg" },
      { label: "Selenium", value: "250 mcg" },
      { label: "Cobalt Chloride", value: "100 mg" },
      { label: "Shatavari Extract", value: "1000 mg" },
      { label: "Jiwanti Extract", value: "1000 mg" },
      { label: "Safed Jeera Extract", value: "500 mg" },
      { label: "Safed Musli Extract", value: "500 mg" },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Milking animals (cow / buffalo)",
          value: "100 ml daily",
        },
        {
          label: "Pregnant or post-calving animals",
          value: "100 ml daily or as advised by a veterinarian",
        },
        {
          label: "Method of use",
          value: "Mix with feed or give directly",
        },
      ],
      note: "Regular use gives the best results during lactation and recovery periods.",
    },
    packaging: "सस्पेंशन : 5 लीटर व 20 लीटर के कंटेनर में",
    dosage: "Milking and post-calving animals: 100 ml daily",
    pack: "5 L & 20 L",
    tag: "Liquid Calcium",
    problem: "Low milk production, calcium deficiency, milk fever risk, and weak body condition",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "After calving, animals looked weak and milk dropped. Liquid Calcium improved recovery, supported strength, and helped milk production return faster.",
      name: "सतीश कुमार",
      location: "दूध फार्म, झारखंड",
      result: "Better recovery, stronger animals, and visible improvement in milk output"
    }
  },

  {
    id: "liver-tonic",
    name: "Liver Tonic",
    image: "/images/products/liver-tonic.jpeg",
    description:
      "Scientifically formulated liver tonic enriched with vitamins, minerals, liver extracts, yeast, and herbal actives to support liver function, improve digestion, enhance metabolism, and improve overall dairy performance.",
    benefits: [
      "Supports liver function and natural detoxification",
      "Improves appetite and daily feed intake",
      "Supports higher milk yield, fat, and SNF",
      "Enhances digestion and feed efficiency",
      "Boosts recovery, immunity, and metabolic performance",
      "Helps reduce weakness and improve daily energy levels",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Supports healthy liver function and detoxification for better metabolism.",
      "Improves appetite and feed intake so animals perform better.",
      "Supports higher milk yield, fat, and SNF through better nutrient utilization.",
      "Improves digestion and feed efficiency for stronger output from the same feed.",
      "Supports faster recovery after illness, weakness, or stress.",
      "Helps reduce weakness and supports better daily energy and activity.",
    ],
    composition: [
      { label: "Each 20 ml contains", value: "" },
      { label: "Ferrous Gluconate", value: "230 mg" },
      { label: "Ferrous Chloride", value: "100 mg" },
      { label: "Thiamine Hydrochloride", value: "5 mg" },
      { label: "Riboflavin", value: "5 mg" },
      { label: "Nicotinic Acid", value: "25 mg" },
      { label: "Nicotinamide", value: "50 mg" },
      { label: "Calcium Lactate", value: "500 mg" },
      { label: "Tricholine Citrate", value: "750 mg" },
      { label: "Yeast Extract", value: "1.2 gm" },
      { label: "Silymarine", value: "150 mg" },
      { label: "Liver Extract", value: "3.25 gm" },
      { label: "Lysine Mono HCI", value: "60 mg" },
      { label: "Fortified with Herbal Extracts", value: "q.s." },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Cow / buffalo",
          value: "50-100 ml daily",
        },
        {
          label: "Calves",
          value: "20-30 ml daily",
        },
        {
          label: "Method of use",
          value: "Mix with feed or give directly",
        },
      ],
      note: "Use regularly or during stress, illness, or low appetite for best results.",
    },
    packaging: "सस्पेंशन : 500 मि.ली. की बोतल में",
    dosage: "Cow/Buffalo: 50-100 ml/day | Calves: 20-30 ml/day",
    pack: "500 ml Bottle",
    tag: "Liver Support",
    problem: "Low appetite, poor digestion, weak metabolism, low milk production, and recovery stress",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "Animals had weak appetite, poor digestion, and milk output was falling. Dairy Guruji Liver Tonic improved digestion and helped animals regain performance.",
      name: "अरुण पांडे",
      location: "पशुपालक, छत्तीसगढ़",
      result: "Better appetite, improved digestion, and visible improvement in milk quality"
    }
  },

  {
    id: "deworming-bolus",
    name: "Deworming Bolus",
    image: "/images/products/deworming.png",
    description:
      "Powerful herbal parasite control for dairy animals, formulated to support internal worm management, cleaner digestion, stronger immunity, and better milk productivity.",
    benefits: [
      "Effective against internal worms and parasite burden",
      "Improves digestion and feed utilization",
      "Enhances appetite, body condition, and weight gain",
      "Supports immunity and disease resistance",
      "Helps maintain milk production through better gut health",
      "Safe herbal and residue-free solution",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Controls internal worms and parasite load in dairy animals.",
      "Improves digestion and helps animals utilize feed more efficiently.",
      "Supports better appetite, weight gain, and overall body condition.",
      "Helps strengthen natural immunity and reduce health setbacks linked to worm burden.",
      "Supports milk production by improving gut health and nutrient absorption.",
      "Provides a safe herbal option with no harmful residue concerns.",
    ],
    composition: [
      { label: "Composition", value: "" },
      {
        label: "Formula base",
        value:
          "Blend of potent herbal extracts known for natural anti-parasitic action and digestive support.",
      },
      {
        label: "How it supports animals",
        value:
          "Works on parasite control, gut cleansing, digestive comfort, and immune support.",
      },
    ],
    feedingInstructions: {
      items: [
        {
          label: "Adult animals (cow / buffalo)",
          value: "1 bolus per 150-200 kg body weight",
        },
        {
          label: "Calves",
          value: "1/2 bolus depending on body weight",
        },
        {
          label: "Repeat schedule",
          value: "Repeat every 2-3 months or as advised",
        },
      ],
      note: "Ensure proper hydration after dosing and follow body-weight guidance or veterinarian advice for routine deworming.",
    },
    packaging: "1 बॉक्स में 10 बोलस",
    dosage: "Adult: 1 bolus per 150-200 kg | Calves: 1/2 bolus as per weight",
    pack: "Box of 10 Bolus",
    tag: "Herbal Dewormer",
    problem:
      "Worm infestation, poor appetite, weight loss, weak immunity, and low milk production linked to parasite burden",
    specialNote:
      "Unlike harsh chemical dewormers, Dairy Guruji Deworming Bolus combines herbal safety with strong parasite-control support, digestive improvement, and no withdrawal period for milk.",
    farmerStory: {
      quote:
        "Animals had poor appetite, weak condition, and milk output was falling. After using Dairy Guruji Deworming Bolus in the deworming program, digestion improved and the animals became more active.",
      name: "रामकिशन",
      location: "पशुपालक, उत्तर प्रदेश",
      result: "Better appetite, healthier body condition, and improved farm productivity",
    },
  },

  {
    id: "feed-6000-plus",
    name: "Feed 6000+",
    image: "/images/products/feed-6000.png",
    description:
      "Improved formula cattle feed designed for higher milk production, better body condition, and improved fat & SNF.",
    benefits: [
      "Increases milk yield",
      "Improves fat and SNF",
      "Boosts immunity",
      "Enhances digestion",
      "Reduces repeat breeding",
    ],
    benefitsHindiTitle: "डेयरी गुरुजी फीड क्यों अलग है, इसके फायदे :-",
    benefitsHindi: [
      "पशु रिपीट ब्रीडिंग पर वरदान।",
      "हीट समय पर आयेगी व हीट साफ दिखाई देगी।",
      "दूध के उत्पादन में वृद्धि करता हैं।",
      "फैट व S.N.F. को बढ़ाता है।",
      "पशु को स्वस्थ रखता हैं।",
      "पाचन तंत्र को मजबूत करता है।",
      "रोग प्रतिरोधक क्षमता को बढ़ाता है।",
      "खराब दाने / फंगल टॉक्सिन से सुरक्षा देता है।",
    ],
    nutritionalValue: [
      { label: "Value per Kg", value: "" },
      { label: "Crude Protein", value: "20.3%" },
      { label: "Fat", value: "3.2%" },
      { label: "NaHCO3", value: "2000mg" },
      { label: "Calcium (Ca)", value: "7700mg" },
      { label: "Phosphoreus (P)", value: "5140mg" },
      { label: "Magnesium (Mg)", value: "1500mg" },
      { label: "Sulphur (S)", value: "1300mg" },
      { label: "Sodium (Na)", value: "5550mg" },
      { label: "Chloride (Cl)", value: "3700mg" },
      { label: "Choline Chloride", value: "100mg" },
      { label: "L-Lysine Hcl", value: "700mg" },
      { label: "Toxin Binder", value: "1950mg" },
      { label: "Moisture", value: "11.3%" },
      { label: "NPN, if present", value: "1%" },
    ],
    feedingInstructions: {
      items: [
        { label: "रोज का दूध: 5-7 लीटर", value: "रोज की फीड: 2-2.5 किलो" },
        { label: "रोज का दूध: 8-10 लीटर", value: "रोज की फीड: 3-3.5 किलो" },
        { label: "रोज का दूध: 11-13 लीटर", value: "रोज की फीड: 4-4.5 किलो" },
      ],
      note: "हर 2.5 लीटर दूध पर 1 किलो फीड दें।",
    },
    dosage: "1 kg feed per 2.5 litres of milk",
    pack: "Bag",
    tag: "Balanced Feed",
    problem: "Low milk production",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "पहले 10 लीटर दूध आता था, अब 13 लीटर आता है। गायों का स्वास्थ्य भी बेहतर हुआ है।",
      name: "हरीश चंद",
      location: "दूध उत्पादक, पंजाब",
      result: "दूध उत्पादन 30% बढ़ा, गायों का स्वास्थ्य 80% सुधरा"
    }
  },

  {
    id: "feed-8000-plus",
    name: "Feed 8000+",
    image: "/images/products/feed-8000.jpeg",
    description:
      "Advanced nutrient-rich cattle feed formulated to support maximum milk production, better fat and SNF, stronger body condition, and healthier overall dairy performance.",
    benefits: [
      "Supports higher milk yield, fat, and SNF",
      "Improves feed efficiency for better output from the same feed",
      "Supports stronger body condition during peak production",
      "Boosts immunity and overall health",
      "Helps improve reproductive performance and heat cycle support",
      "Supports reduced nutritional deficiency stress",
    ],
    benefitsHindiTitle: "Key benefits",
    benefitsHindi: [
      "Supports higher milk production with better fat and SNF quality.",
      "Improves feed efficiency so animals deliver more output from the same ration.",
      "Supports stronger body condition during high milk production stages.",
      "Helps improve immunity and keeps animals healthier and more active.",
      "Supports better reproductive performance, heat cycle, and conception response.",
      "Helps reduce nutritional deficiency and production stress in high-yield animals.",
    ],
    nutritionalValue: [
      { label: "Value per Kg", value: "" },
      { label: "Crude Protein", value: "23%" },
      { label: "Fat", value: "5%" },
      { label: "NaHCO3", value: "8000 mg" },
      { label: "Calcium (Ca)", value: "7700 mg" },
      { label: "Phosphorus (P)", value: "5140 mg" },
      { label: "Magnesium (Mg)", value: "3540 mg" },
      { label: "Sulphur (S)", value: "2780 mg" },
      { label: "Sodium (Na)", value: "5700 mg" },
      { label: "Chloride (Cl)", value: "3820 mg" },
      { label: "Choline Chloride", value: "750 mg" },
      { label: "L-Lysine HCl", value: "2000 mg" },
      { label: "DL-Methionine", value: "13.44 mg" },
      { label: "Cobalt (Co)", value: "1.20 mg" },
      { label: "Copper (Cu)", value: "15.79 mg" },
      { label: "Iodine (I)", value: "2.32 mg" },
      { label: "Iron (Fe)", value: "91.95 mg" },
      { label: "Manganese (Mn)", value: "41.75 mg" },
      { label: "Zinc (Zn)", value: "95.96 mg" },
      { label: "Selenium (Se)", value: "0.20 mg" },
      { label: "Vitamin A", value: "15000 IU" },
      { label: "Vitamin D3", value: "3000 IU" },
      { label: "Vitamin E", value: "30 mg" },
      { label: "Vitamin K", value: "2.25 mg" },
      { label: "Thiamine (B1)", value: "2.25 mg" },
      { label: "Riboflavin (B2)", value: "4.50 mg" },
      { label: "Niacin (B3)", value: "30 mg" },
      { label: "Pyridoxine (B6)", value: "2.25 mg" },
      { label: "Pantothenic Acid", value: "12 mg" },
      { label: "Folic Acid", value: "0.75 mg" },
      { label: "Biotin", value: "0.015 mg" },
      { label: "Vitamin B12", value: "0.0075 mg" },
      { label: "Toxin Binder", value: "4000 mg" },
      { label: "Yeast Powder", value: "4000 mg" },
      { label: "Moisture", value: "10.2%" },
    ],
    feedingInstructions: {
      items: [
        {
          label: "General feeding",
          value: "1 kg feed for every 2-2.5 liters of milk production",
        },
        {
          label: "Adjustment",
          value: "Adjust according to animal weight, milk yield, and body condition",
        },
        {
          label: "Feeding support",
          value: "Provide along with green fodder and clean water",
        },
      ],
      note: "Regular and balanced feeding gives the best results.",
    },
    dosage: "1 kg feed for every 2-2.5 liters of milk production",
    pack: "Bag",
    tag: "Premium Feed",
    problem: "High nutritional demand, low milk yield, low fat or SNF, weak body condition, and reproductive inefficiency",
    specialNote: "यह फीड फॉर्मूलेशन ऑस्ट्रेलिया में विशेष रूप से भारत की पशु नस्लों को ध्यान में रखकर तैयार की गई है। इसके परिणाम बहुत ही शानदार देखने को मिलेंगे।",
    farmerStory: {
      quote: "High-producing animals needed better nutrition to maintain milk and body condition. After shifting to Dairy Guruji 8000+ Feed, performance became stronger and more stable.",
      name: "सुभाष यादव",
      location: "डेयरी फार्म, गुजरात",
      result: "Higher milk output, improved body condition, and better overall dairy returns"
    }
  },
];

const defaultDetails = {
  suitableFor: ["Dairy cows and buffaloes", "Farm use under regular feeding plans"],
  keyIngredients: [
    "Balanced mineral and vitamin support",
    "Targeted nutritional actives",
    "Digestive and metabolic support factors",
  ],
  usageTips: [
    "Use daily as per recommended dosage for best consistency.",
    "Mix well with feed or water before offering.",
    "Keep a regular schedule and monitor milk output/animal condition weekly.",
  ],
  expectedTimeline: "Initial visible response is commonly seen within 10-21 days.",
  bestTimeToUse: "Best used daily at a fixed time as advised.",
  storage:
    "Store in a cool and dry place, away from sunlight. Keep pack tightly closed after each use.",
};

const detailByProduct = {
  mld: {
    suitableFor: [
      "Animals showing delayed or incomplete milk let-down",
      "Animals with low milk flow during milking",
      "Cows or buffaloes stressed during milking or environmental change",
      "Farmers looking for a natural alternative to oxytocin",
    ],
    keyIngredients: [
      "Natural let-down support formula",
      "Stress-support and calming nutritional factors",
      "Udder function and milk ejection support nutrients",
    ],
    usageTips: [
      "Give regularly 1 hour before milking for better consistency.",
      "Use during stress, change of environment, or routine disruptions.",
      "Maintain calm milking conditions and proper udder stimulation.",
    ],
    expectedTimeline:
      "Milk flow and let-down response may improve within 3-7 days of regular use.",
    bestTimeToUse: "Twice daily before milking, as per dosage.",
  },
  "mineral-mixture": {
    suitableFor: [
      "Lactating animals with low milk yield, fat, or SNF",
      "Animals facing repeat breeding, infertility, or weak heat signs",
      "Weak animals with low immunity or mineral deficiency",
      "Calves and young stock needing better growth support",
    ],
    keyIngredients: [
      "Macro minerals like calcium, phosphorus, and magnesium",
      "Trace minerals like zinc, copper, cobalt, iodine, iron, and manganese",
      "DL-Methionine and sulphur for metabolic and production support",
    ],
    usageTips: [
      "Mix daily in concentrate or regular feed for consistent results.",
      "Continue regularly through breeding and lactation cycles for better performance.",
      "Use with balanced roughage and clean drinking water.",
    ],
    expectedTimeline:
      "Milk quality, appetite, and body condition support may appear in 2-3 weeks, while fertility improvement needs regular continued use.",
    bestTimeToUse: "Daily with the main ration or concentrate feed.",
  },
  "calf-supplement": {
    suitableFor: [
      "Weak or underdeveloped calves",
      "Calves with low weight gain or poor growth",
      "Young stock with low immunity or frequent illness",
      "Calves with poor appetite or digestive weakness",
    ],
    keyIngredients: [
      "Essential vitamins, minerals, and amino acid chelates",
      "Yeast culture for digestion and nutrient utilization",
      "Herbal actives for natural immunity and growth support",
    ],
    usageTips: [
      "Give daily with milk, water, or feed for consistent growth support.",
      "Maintain clean water, hygiene, and a proper deworming schedule.",
      "Track body weight and development regularly for best management.",
    ],
    expectedTimeline:
      "Growth, appetite, and vigor support may become visible within 3-4 weeks of regular use.",
    bestTimeToUse: "Daily during calf growth and development stages.",
  },
  "dairy-guruji-h": {
    suitableFor: [
      "Animals with mastitis, udder stress, or recurring udder problems",
      "Animals with swelling, hardness, or inflammation in the udder",
      "Farms targeting lower somatic cell count and better milk quality",
      "Animals recovering after udder infection or lactation stress",
    ],
    keyIngredients: [
      "Vitamin A, D3, E, B12, and biotin for tissue and metabolic support",
      "Zinc and selenium for immunity and udder recovery",
      "Targeted nutrients for milk quality and udder health support",
    ],
    usageTips: [
      "Use regularly during mastitis-prone or high-stress lactation periods.",
      "Maintain udder hygiene and clean milking practices for better results.",
      "Use alongside veterinary care in active or severe mastitis cases.",
    ],
    expectedTimeline:
      "Udder comfort and milk quality support may become visible within 7-14 days of regular use.",
    bestTimeToUse: "Daily during lactation, udder stress, or recovery periods.",
  },
  "bypass-fat": {
    suitableFor: [
      "High milk-producing animals with high energy demand",
      "Animals losing weight or condition after calving",
      "Low milk fat or low milk yield cases",
      "Animals with delayed heat cycle or fertility stress",
    ],
    keyIngredients: [
      "Rumen-protected bypass fat for targeted energy delivery",
      "Calcium salts of fatty acids and energy support components",
      "Digestive enhancers for better utilization and performance",
    ],
    usageTips: [
      "Use during early lactation and peak milk production stages.",
      "Mix thoroughly in concentrate feed for even intake.",
      "Balance with protein, minerals, and proper ration planning for best results.",
    ],
    expectedTimeline:
      "Energy recovery, body condition, and milk-fat support may become visible within 10-20 days of regular use.",
    bestTimeToUse: "Daily during early lactation, peak production, and post-calving recovery.",
  },
  "dairy-guruji-gel": {
    suitableFor: [
      "Pre- and post-calving cows and buffaloes",
      "Animals at risk of milk fever or hypocalcemia",
      "Weak or downer animals needing immediate calcium support",
      "Animals recovering from calving stress or illness",
    ],
    keyIngredients: [
      "Calcium and phosphorus for fast mineral support",
      "Vitamin D3 and magnesium for better calcium use and muscle function",
      "Herbal actives for supportive recovery action",
    ],
    usageTips: [
      "During calving and early lactation, sudden calcium loss can cause weakness, milk fever, and reduced milk output.",
      "Give at the time of calving and repeat after 12-24 hours if required, based on the animal's condition.",
      "Use directly by mouth and combine with proper hydration and balanced feeding for best recovery support.",
    ],
    expectedTimeline:
      "Strength, activity, and recovery support are often visible quickly after use, especially in the calving period.",
    bestTimeToUse:
      "Best used during pre-calving and post-calving periods, or whenever immediate calcium support is needed.",
  },
  calcium: {
    suitableFor: [
      "Milking animals with high calcium demand",
      "Pregnant and post-calving animals",
      "Animals with weakness, dullness, or low body condition",
      "Animals at risk of milk fever or calcium deficiency",
    ],
    keyIngredients: [
      "Calcium and phosphorus for bone and milk support",
      "Vitamin A, D3, E, B12, biotin, magnesium, zinc, and selenium",
      "Herbal extracts like Shatavari, Jiwanti, and Safed Musli",
    ],
    usageTips: [
      "Use regularly during lactation and in pre- or post-calving periods.",
      "Shake well before use and give with feed or directly.",
      "Continue as a daily support formula for better results in recovery and production.",
    ],
    expectedTimeline:
      "Better strength, recovery, and production support may be visible with regular daily use.",
    bestTimeToUse: "Daily during lactation, recovery, and calcium-demand phases.",
  },
  "liver-tonic": {
    suitableFor: [
      "Animals with low appetite or poor feed intake",
      "Weak or dull animals with digestive or metabolic stress",
      "Milk animals needing better nutrient utilization and output",
      "Animals in post-illness or low-energy recovery phase",
    ],
    keyIngredients: [
      "Liver extracts, yeast, and herbal active compounds",
      "Vitamins, minerals, and metabolic support nutrients",
      "Digestive and detoxification support factors",
    ],
    usageTips: [
      "Give daily at a fixed time with feed or directly.",
      "Use during low appetite, stress, illness, or digestion-related weakness.",
      "Maintain clean fodder and avoid sudden feed changes for better response.",
    ],
    expectedTimeline:
      "Appetite, digestion, and activity support are often visible within 5-10 days of regular use.",
    bestTimeToUse: "Daily during digestion stress, low appetite, or metabolic weakness periods.",
  },
  "deworming-bolus": {
    suitableFor: [
      "Animals showing worm infestation, poor appetite, or weight loss",
      "Low-producing or dull animals affected by poor gut health",
      "Routine dairy herd deworming programs",
    ],
    keyIngredients: [
      "Herbal anti-parasitic plant extracts",
      "Digestive-supportive botanical actives",
      "Natural gut and immunity support factors",
    ],
    usageTips: [
      "Internal parasites can reduce digestion, body condition, immunity, and milk output if not managed in time.",
      "Follow body-weight guidance and repeat every 2-3 months or as advised by your veterinarian.",
      "Keep animals well hydrated after dosing and maintain clean housing to reduce reinfestation pressure.",
    ],
    expectedTimeline:
      "Improved appetite, digestion, and animal activity are often noticed within 7-14 days after proper use.",
    bestTimeToUse:
      "Use as part of a regular deworming schedule or whenever parasite burden is suspected, based on expert guidance.",
  },
  "feed-6000-plus": {
    suitableFor: [
      "Medium to high-yield lactating animals",
      "Farms targeting better fat and SNF with stable yield",
    ],
    keyIngredients: [
      "Balanced cereal-protein energy base",
      "Mineral and vitamin premix",
      "Production-support amino acid profile",
    ],
    usageTips: [
      "Split daily quantity across 2-3 feeding times.",
      "Introduce gradually over 3-5 days if changing feed.",
      "Ensure adequate dry fodder and green fodder balance.",
    ],
    expectedTimeline:
      "Milk quantity/quality response is generally seen in 10-21 days with consistent rationing.",
    bestTimeToUse: "Daily, with milking-linked ration schedule.",
  },
  "feed-8000-plus": {
    suitableFor: [
      "High milk-producing animals with greater nutritional demand",
      "Animals with low milk yield, low fat, or SNF issues",
      "Animals needing stronger body condition during lactation",
      "Farms aiming for maximum production and better reproductive performance",
    ],
    keyIngredients: [
      "High-quality protein, minerals, vitamins, and amino acids",
      "Lysine, choline, toxin binders, and digestive enhancers",
      "Balanced performance nutrition for milk, health, and safety",
    ],
    usageTips: [
      "Feed regularly in a balanced ration according to milk production and body condition.",
      "Introduce gradually over 4-7 days when shifting from regular feed.",
      "Use with green fodder, dry fodder, and clean drinking water for best results.",
    ],
    expectedTimeline:
      "Milk response, feed efficiency, and body-condition support may begin within 7-14 days, with stronger results over continuous use.",
    bestTimeToUse: "Daily during peak lactation and high-demand production stages.",
  },
};

export const products = baseProducts.map((product) => ({
  ...defaultDetails,
  ...product,
  ...(detailByProduct[product.id] ?? {}),
}));

export const getProductById = (id) =>
  products.find((product) => product.id === id);
