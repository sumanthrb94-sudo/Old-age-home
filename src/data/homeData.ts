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
  pricePerMonth: string;
  description: string;
  features: string[];
  imageUrl: string;
}

export const HOME_DETAILS = {
  name: "Siva Prakash Old Age Home",
  teluguName: "శివ ప్రకాష్ వృద్ధాశ్రమం",
  locationShort: "Bowrampet · Hyderabad",
  address: "Honest Residency, Bowrampet, Hyderabad, Telangana 500043",
  googleMapsUrl: "https://maps.app.goo.gl/YvD3Ee12B63DLxz5A?g_st=ac",
  phoneDisplay: "+91 93910 36931",
  phoneRaw: "+919391036931",
  whatsappNumber: "919391036931",
  visitingHours: "10:00 AM – 7:00 PM (Daily)",
  operatingHours: "24 Hours Care & Admissions",
};

export const CORE_SERVICES: CareService[] = [
  { id: "nursing", title: "24/7 Nursing & Bedridden Care", description: "Round-the-clock trained nurses and attendants with daily vitals tracking, catheter management, and gentle bedside support.", icon: "Stethoscope", accent: "saffron" },
  { id: "food", title: "Homely South Indian Veg Meals", description: "Fresh vegetarian meals cooked with less spice and salt, including familiar Telangana flavours and diabetic-friendly options.", icon: "Utensils", accent: "teal" },
  { id: "doctor", title: "Doctor Visits & Hospital Proximity", description: "Routine physician check-ups on campus, with emergency tie-ups at Malla Reddy and SLG Hospitals just 12–15 minutes away.", icon: "ShieldCheck", accent: "maroon" },
  { id: "living", title: "Assisted Living & Loving Family", description: "Help with bathing, grooming, mobility, and a peaceful courtyard where residents can share chai, stories, bhajans, and companionship.", icon: "Heart", accent: "mustard" },
];

export const ROOMS: RoomOption[] = [
  { id: "twin-sharing", title: "Twin Sharing Room", pricePerMonth: "From ₹15,000 / month", description: "A bright, comfortable room for companionship, daily housekeeping, and 24/7 attendant support.", features: ["Attached senior-friendly bathroom", "4 vegetarian meals & tea included", "Attendant assistance & laundry"], imageUrl: "/images/room-twin-sharing.jpg" },
  { id: "deluxe-private", title: "Private Deluxe Room", pricePerMonth: "From ₹22,000 / month", description: "A spacious private bedroom for elders who prefer quiet personal space, comfort, and dignity.", features: ["Orthopedic bed and wardrobe", "Attached anti-skid bathroom", "Meals, tea, laundry & housekeeping"], imageUrl: "/images/room-private-deluxe.jpg" },
  { id: "high-dependency", title: "High-Dependency Nursing Care", pricePerMonth: "From ₹28,000 / month", description: "Dedicated round-the-clock care for bedridden, paralyzed, or post-operative recovery residents.", features: ["Dedicated bedside nurse / attendant", "Fowler bed with air mattress", "Vitals monitoring & doctor review"], imageUrl: "/images/room-nursing-care.jpg" },
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  { id: "p1", title: "A Verandah Full of Chai & Stories", subtitle: "Easy mornings in our leafy Bowrampet courtyard", imageUrl: "/images/gallery-verandah.jpg" },
  { id: "p2", title: "Gentle, Attentive Care", subtitle: "Support that feels personal, respectful, and warm", imageUrl: "/images/gallery-care.jpg" },
  { id: "p3", title: "Wholesome Home-Cooked Meals", subtitle: "Fresh South Indian vegetarian food every day", imageUrl: "/images/gallery-meals.jpg" },
  { id: "p4", title: "Bright Senior-Friendly Bedrooms", subtitle: "Clean rooms designed for rest and easy movement", imageUrl: "/images/room-private-deluxe.jpg" },
  { id: "p5", title: "Bhajan, Puja & Inner Peace", subtitle: "A quiet evening rhythm for the whole family", imageUrl: "/images/gallery-bhajan.jpg" },
  { id: "p6", title: "Companionship Comes Naturally", subtitle: "Carrom, Telugu newspapers, and friendly conversation", imageUrl: "/images/gallery-carrom.jpg" },
];
