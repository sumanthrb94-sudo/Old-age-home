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
  name: "Siva Prakash Old Age Home",
  registeredName: "Siva Prakash Homecare Service & Old Age Home",
  proprietor: "Vemagiri Chinnodu",
  teluguName: "శివ ప్రకాష్ వృద్ధాశ్రమం",
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

export const CORE_SERVICES: CareService[] = [
  { id: "nursing", title: "24/7 Nursing & Bedridden Care", description: "Round-the-clock trained nurses and attendants with daily vitals tracking, catheter management, and gentle bedside support.", icon: "Stethoscope", accent: "saffron" },
  { id: "food", title: "Homely South Indian Veg Meals", description: "Fresh vegetarian meals cooked with less spice and salt, including familiar Telangana flavours and diabetic-friendly options.", icon: "Utensils", accent: "teal" },
  { id: "doctor", title: "Doctor Visits & Hospital Proximity", description: "Routine physician check-ups on campus, with emergency tie-ups at Malla Reddy and SLG Hospitals just 12–15 minutes away.", icon: "ShieldCheck", accent: "maroon" },
  { id: "living", title: "Assisted Living & Loving Family", description: "Help with bathing, grooming, mobility, and a peaceful courtyard where residents can share chai, stories, bhajans, and companionship.", icon: "Heart", accent: "mustard" },
];

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
