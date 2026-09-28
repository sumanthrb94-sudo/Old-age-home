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
  locationShort: "Bowrampet, Hyderabad",
  address: "Honest Residency, Bowrampet, Hyderabad, Telangana 500043",
  googleMapsUrl: "https://maps.app.goo.gl/g6vtTfSB3FcP2G8XA?g_st=ac",
  phoneDisplay: "+91 93910 36931",
  phoneRaw: "+919391036931",
  whatsappNumber: "919391036931",
  visitingHours: "10:00 AM – 7:00 PM (Daily)",
  operatingHours: "24 Hours Care & Admissions",
};

export const CORE_SERVICES: CareService[] = [
  {
    id: "nursing",
    title: "24/7 Nursing & Bedridden Care",
    description: "Round-the-clock trained nurses and attendants. Daily vitals tracking (BP, sugar, pulse), catheter management, and bed-sore prevention.",
    icon: "Stethoscope"
  },
  {
    id: "food",
    title: "Homely South Indian Veg Meals",
    description: "Freshly prepared pure vegetarian breakfast, lunch, and dinner. Low spice and low salt recipes specially tailored for diabetic residents.",
    icon: "Utensils"
  },
  {
    id: "doctor",
    title: "Doctor Visits & Hospital Proximity",
    description: "Routine physician check-ups on campus and immediate emergency tie-ups with Malla Reddy and SLG Hospitals (12–15 mins away).",
    icon: "ShieldCheck"
  },
  {
    id: "living",
    title: "Assisted Living & Loving Family",
    description: "Assistance with bathing, grooming, and mobility. Wheelchair-accessible corridors, peaceful garden courtyard, and evening prayer satsangs.",
    icon: "Heart"
  }
];

export const ROOMS: RoomOption[] = [
  {
    id: "twin-sharing",
    title: "Twin Sharing Room",
    pricePerMonth: "From ₹15,000 / month",
    description: "Comfortable shared room offering social companionship, daily housekeeping, and 24/7 attendant support.",
    features: [
      "Attached senior-friendly bathroom",
      "All 4 vegetarian meals & tea included",
      "24/7 attendant assistance & laundry"
    ],
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "deluxe-private",
    title: "Private Deluxe Room",
    pricePerMonth: "From ₹22,000 / month",
    description: "Spacious private bedroom for elders desiring quiet personal space with attached bathroom and wardrobe.",
    features: [
      "Private room with orthopedic bed",
      "Attached modern anti-skid bathroom",
      "All meals, tea, laundry & housekeeping"
    ],
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "high-dependency",
    title: "High-Dependency Nursing Care",
    pricePerMonth: "From ₹28,000 / month",
    description: "Dedicated round-the-clock nursing care for bedridden, paralyzed, or post-operative recovery residents.",
    features: [
      "Dedicated bedside nurse / attendant",
      "Hospital Fowler bed with air mattress",
      "Continuous vitals monitoring & doctor review"
    ],
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_PHOTOS: GalleryItem[] = [
  {
    id: "p1",
    title: "Dedicated Healthcare & Attendant Support",
    subtitle: "Trained Indian nurses providing gentle, attentive care",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "p2",
    title: "Sunlit Veranda & Morning Tea",
    subtitle: "Peaceful airy corridor overlooking the garden in Bowrampet",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "p3",
    title: "Nutritious Homely South Indian Food",
    subtitle: "Wholesome pure vegetarian meals prepared fresh daily",
    imageUrl: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "p4",
    title: "Clean Senior-Friendly Bedrooms",
    subtitle: "Comfortable, naturally lit living rooms with grab rails",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "p5",
    title: "Daily Prayer, Bhajan & Puja Altar",
    subtitle: "Spiritual peace and evening devotional chants",
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "p6",
    title: "Recreation & Companionship",
    subtitle: "Carrom, reading newspapers, and friendly conversation",
    imageUrl: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1000&q=80"
  }
];
