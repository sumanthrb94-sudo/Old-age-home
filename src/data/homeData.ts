export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  subtitle: string;
}

export interface CareService {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
  badge?: string;
  category?: "facility" | "homecare";
}

export interface RoomOption {
  id: string;
  title: string;
  badge?: string;
  price: string;
  billingUnit: string;
  pricePerMonth: string;
  description: string;
  layout: string;
  bathroomInfo: string;
  amenities: string[];
  food?: string;
  specialService?: string;
  features: string[];
  imageUrl: string;
  popular?: boolean;
  featured?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  authority: string;
  regNumber: string;
  imageUrl: string;
}

export interface LegalCompliance {
  registeredName: string;
  proprietor: string;
  gstin: string;
  pan: string;
  societyRegNo: string;
  labourRegNo: string;
  registeredOffice: string;
  campusAddress: string;
  certificates: CertificateItem[];
}

export const HOME_DETAILS = {
  name: "Siva Prakash Hospitalities",
  tagline: "Specialized in Old Age Home Care",
  registeredName: "Siva Prakash Homecare Service & Old Age Home",
  proprietor: "Vemagiri Chinnodu",
  teluguName: "శివ ప్రకాష్ హాస్పిటాలిటీస్",
  locationShort: "Bowrampet · Hyderabad",
  address: "Honest Residency, Bowrampet, Hyderabad, Telangana 500043",
  registeredOffice: "Plot No. 70, H.No 8-415/70, Sapthagiri Colony, Miyapur, Hyderabad, Telangana 500049",
  googleMapsUrl: "https://maps.app.goo.gl/YvD3Ee12B63DLxz5A?g_st=ac",
  phoneDisplay: "+91 86888 49825",
  phoneRaw: "+918688849825",
  whatsappNumber: "918688849825",
  gstin: "36AOBPV9001K1ZP",
  pan: "ACFAS4467D",
  societyRegNo: "1115 of 2023",
  labourRegNo: "SEA/RAN/ALO/BN/0718451/2023",
  visitingHours: "10:00 AM – 7:00 PM (Daily)",
  operatingHours: "24 Hours Care & Admissions",
};

export const LEGAL_DETAILS: LegalCompliance = {
  registeredName: "Siva Prakash Homecare Service & Old Age Home",
  proprietor: "Vemagiri Chinnodu",
  gstin: "36AOBPV9001K1ZP",
  pan: "ACFAS4467D",
  societyRegNo: "1115 of 2023",
  labourRegNo: "SEA/RAN/ALO/BN/0718451/2023",
  registeredOffice: "Plot No. 70, H.No 8-415/70, #301, 3rd Floor, Sapthagiri Colony, Miyapur, Hyderabad, Telangana 500049",
  campusAddress: "Honest Residency, Bowrampet, Hyderabad, Telangana 500043",
  certificates: [
    {
      id: "society",
      title: "Telangana Societies Registration",
      authority: "Registration & Stamps Dept, Govt. of Telangana",
      regNumber: "No. 1115 of 2023",
      imageUrl: "/images/cert-society-registration.jpeg",
    },
    {
      id: "gst",
      title: "GST Registration Certificate",
      authority: "Form GST REG-06, Government of India",
      regNumber: "36AOBPV9001K1ZP",
      imageUrl: "/images/cert-gst-registration.jpeg",
    },
    {
      id: "pan",
      title: "Income Tax PAN Card",
      authority: "Income Tax Department, Govt. of India",
      regNumber: "ACFAS4467D",
      imageUrl: "/images/cert-pan-card.jpeg",
    },
    {
      id: "labour",
      title: "Telangana Labour Registration",
      authority: "Labour Department (Shops & Est. Act, 1988)",
      regNumber: "SEA/RAN/ALO/BN/0718451/2023",
      imageUrl: "/images/cert-labour-registration.jpeg",
    },
  ],
};

export const FACILITY_SERVICES: CareService[] = [
  {
    id: "old-age-home",
    title: "Old Age Home Services",
    description: "Providing a safe, loving, and homely environment for senior citizens with full-time care, medical support, and a peaceful atmosphere.",
    icon: "HeartHandshake",
    accent: "maroon",
    badge: "Full-Time Sanctuary",
    category: "facility",
  },
  {
    id: "bedridden-care",
    title: "Bedridden Patient Care",
    description: "Dedicated, round-the-clock nursing care and personal assistance for completely bedridden patients.",
    icon: "Bed",
    accent: "teal",
    badge: "24/7 Nursing",
    category: "facility",
  },
  {
    id: "ambulatory-care",
    title: "Ambulatory & Walking Patient Care",
    description: "Specialized care, monitoring, and gentle assistance for active or walking senior patients.",
    icon: "Footprints",
    accent: "mustard",
    badge: "Mobility Assistance",
    category: "facility",
  },
  {
    id: "paralysis-care",
    title: "Paralysis Patient Care",
    description: "Specialized rehabilitation, physical support, and daily living assistance for paralysis patients.",
    icon: "Accessibility",
    accent: "saffron",
    badge: "Physical Rehab",
    category: "facility",
  },
  {
    id: "fracture-care",
    title: "Fracture & Bone Injury Care",
    description: "Expert post-fracture care, mobility support, and comfortable healing arrangements for patients with broken bones or orthopedic issues.",
    icon: "Bone",
    accent: "maroon",
    badge: "Orthopedic Care",
    category: "facility",
  },
  {
    id: "nri-care",
    title: "NRI Patient Care",
    description: "Premium, customized, and high-end luxury care packages tailored specifically for Non-Resident Indians (NRIs) and their families.",
    icon: "Globe",
    accent: "saffron",
    badge: "Luxury Package",
    category: "facility",
  },
  {
    id: "tube-feeding",
    title: "Tube Feeding & Liquid Diet Support",
    description: "Professional feeding assistance, Ryle's tube feeding management, and nutritious soup/liquid diet administration for patients who cannot eat normally.",
    icon: "Soup",
    accent: "teal",
    badge: "Ryle's Tube & Diets",
    category: "facility",
  },
  {
    id: "post-surgery",
    title: "Post-Surgery & Post-Operative Care",
    description: "Special medical observation, wound care, and recovery support for patients recovering from major surgeries or operations.",
    icon: "Stethoscope",
    accent: "mustard",
    badge: "Surgical Recovery",
    category: "facility",
  },
  {
    id: "child-care",
    title: "Child Care Services",
    description: "Safe, nurturing, and affectionate care arrangements for children when needed.",
    icon: "Baby",
    accent: "maroon",
    badge: "Loving Support",
    category: "facility",
  },
  {
    id: "mental-health",
    title: "Neurological & Mental Health Care",
    description: "Compassionate management and specialized care for patients with mental health conditions, brain stroke recovery, and varying mental abilities.",
    icon: "Brain",
    accent: "teal",
    badge: "Neuro & Stroke Care",
    category: "facility",
  },
  {
    id: "chronic-illness",
    title: "Specialized & Chronic Illness Care",
    description: "Specialized medical support and compassionate care for HIV/AIDS patients and individuals dealing with other critical or chronic illnesses.",
    icon: "ShieldAlert",
    accent: "saffron",
    badge: "Critical Care",
    category: "facility",
  },
];

export const HOMECARE_SERVICES: CareService[] = [
  {
    id: "baby-care-nanny",
    title: "Baby Care & Nanny Services",
    description: "Expert babysitters and caregivers to handle all baby-related tasks with love, including giving baths, traditional massages, feeding milk, and overall childcare.",
    icon: "Baby",
    accent: "teal",
    badge: "Doorstep Nanny",
    category: "homecare",
  },
  {
    id: "home-nursing",
    title: "Home Nursing for Bedridden Patients",
    description: "Professional and dedicated nursing care provided directly at your home for completely bedridden patients.",
    icon: "Stethoscope",
    accent: "maroon",
    badge: "At-Home Nursing",
    category: "homecare",
  },
  {
    id: "cooking-services",
    title: "Professional Cooking Services",
    description: "Experienced cooks skilled in preparing a wide variety of delicious, healthy, and customized dishes tailored to your family's or patient's taste and dietary needs.",
    icon: "ChefHat",
    accent: "mustard",
    badge: "Custom Home Cooking",
    category: "homecare",
  },
  {
    id: "hygiene-diaper",
    title: "Diaper Change & Hygiene Services",
    description: "Professional hygiene and sanitation assistance, including timely diaper changes and personal care management for seniors and patients.",
    icon: "Bath",
    accent: "saffron",
    badge: "Hygiene & Dignity",
    category: "homecare",
  },
];

export const CORE_SERVICES: CareService[] = [...FACILITY_SERVICES, ...HOMECARE_SERVICES];

export const ROOMS: RoomOption[] = [
  {
    id: "shared-budget",
    title: "Shared Room Accommodation",
    badge: "Budget-Friendly",
    price: "₹5,000",
    billingUnit: "per person / month",
    pricePerMonth: "₹5,000 / person / month",
    description: "This option features a 2-room unit shared by 4 people (2 people per room).",
    layout: "2-Room Unit (Shared by 4 people, 2 per room)",
    bathroomInfo: "1 common bathroom shared among the 4 occupants",
    amenities: ["Television (TV)", "Senior-friendly beds", "Shared living comfort", "Housekeeping"],
    features: [
      "2-room unit shared by 4 people (2 people per room)",
      "1 common bathroom shared among the 4 occupants",
      "Standard amenities including Television (TV)",
      "Daily housekeeping, bed linen care & 24/7 attendant support",
      "Homely vegetarian meals and evening tea"
    ],
    imageUrl: "/images/room-twin-sharing.jpg",
  },
  {
    id: "single-occupancy",
    title: "Single Occupancy with Attached Bathroom",
    badge: "Most Popular",
    price: "₹10,000",
    billingUnit: "per person / month",
    pricePerMonth: "₹10,000 / person / month",
    description: "A private 2-room apartment layout where only 1 person stays per room.",
    layout: "Private 2-room apartment layout (1 person per room)",
    bathroomInfo: "Attached bathroom for every individual room",
    amenities: ["Attached Bathroom", "Television (TV)", "Orthopedic Bed", "Wardrobe", "Housekeeping"],
    features: [
      "Private 2-room apartment layout (1 person per room)",
      "Complete privacy with an attached bathroom for every individual room",
      "Television (TV) and other essential facilities",
      "Peaceful personal space with orthopedic bed & wardrobe",
      "Wholesome home-cooked South Indian vegetarian meals"
    ],
    imageUrl: "/images/room-private-deluxe.jpg",
    popular: true,
  },
  {
    id: "premium-suite",
    title: "Premium 2-Room Suite with Dining & Fridge",
    badge: "Spacious Comfort",
    price: "₹25,000",
    billingUnit: "per month",
    pricePerMonth: "₹25,000 / month",
    description: "A spacious 2-room setup designed for maximum comfort. One room functions as a dining area equipped with a refrigerator, while the other serves as a bedroom featuring a comfortable double bed and a TV.",
    layout: "Spacious 2-Room Suite (Dining Area + Master Bedroom)",
    bathroomInfo: "Dual bathrooms (completely personal/exclusive bathroom + attached setup)",
    amenities: ["Dedicated Dining Area", "Refrigerator", "Double Bed", "Television (TV)", "Dual Bathrooms"],
    food: "Special, premium meals prepared with utmost care, keeping your health and taste preferences in mind.",
    features: [
      "Spacious 2-room layout: Dining area + Master bedroom",
      "Dining area fully equipped with a refrigerator",
      "Bedroom featuring a comfortable double bed and a TV",
      "Dual bathrooms ensuring completely personal/exclusive attached setup",
      "Special, premium meals prepared with utmost care for health & taste",
      "Daily housekeeping, laundry service & personalized care assistance"
    ],
    imageUrl: "/images/room-nursing-care.jpg",
  },
  {
    id: "nri-luxury",
    title: "Exclusive NRI Luxury Package",
    badge: "Top-Tier Luxury",
    price: "₹45,000",
    billingUnit: "per month",
    pricePerMonth: "₹45,000 / month",
    description: "Specially tailored, top-tier luxury facilities exclusively designed for Non-Resident Indians (NRIs) to feel right at home.",
    layout: "Private Luxury Suite with Dedicated Caregiver",
    bathroomInfo: "Personal attached luxury bathroom",
    amenities: ["Air Conditioner (AC)", "Television (TV)", "Refrigerator", "Private Room", "Personal Attached Bath", "Dedicated Caretaker"],
    food: "Completely customized, premium menu prepared entirely according to your personal taste, dietary requirements, and daily preferences.",
    specialService: "A dedicated personal caretaker will be appointed to cater to all your needs, ensuring a comfortable, homely, and luxurious experience.",
    features: [
      "Top-tier luxury setup designed for NRIs to feel right at home",
      "Modern amenities: Air Conditioner (AC), TV & Refrigerator",
      "Personal private room with exclusive attached luxury bathroom",
      "Dedicated personal caretaker appointed 24/7 for all needs",
      "Completely customized premium menu based on daily taste & diet",
      "Priority doctor consults, daily vitals & family communication updates"
    ],
    imageUrl: "/images/gallery-care.jpg",
    featured: true,
  },
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  { id: "p1", title: "A Verandah Full of Chai & Stories", subtitle: "Easy mornings in our leafy Bowrampet courtyard", imageUrl: "/images/gallery-verandah.jpg" },
  { id: "p2", title: "Gentle, Attentive Care", subtitle: "Support that feels personal, respectful, and warm", imageUrl: "/images/gallery-care.jpg" },
  { id: "p3", title: "Wholesome Home-Cooked Meals", subtitle: "Fresh South Indian vegetarian food every day", imageUrl: "/images/gallery-meals.jpg" },
  { id: "p4", title: "Bright Senior-Friendly Bedrooms", subtitle: "Clean rooms designed for rest and easy movement", imageUrl: "/images/room-private-deluxe.jpg" },
  { id: "p5", title: "Bhajan, Puja & Inner Peace", subtitle: "A quiet evening rhythm for the whole family", imageUrl: "/images/gallery-bhajan.jpg" },
  { id: "p6", title: "Companionship Comes Naturally", subtitle: "Carrom, Telugu newspapers, and friendly conversation", imageUrl: "/images/gallery-carrom.jpg" },
];
