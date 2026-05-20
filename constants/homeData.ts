import {
  Compass,
  UtensilsCrossed,
  Camera,
  LampFloor,
  Tent,
  QrCode,
  Users,
  Wallet,
  HeartHandshake,
  MapPinned,
} from "lucide-react";

/* =========================
   SEARCH
========================= */

export const SEARCH_SUGGESTIONS = [
  "wedding ideas...",
  "premium catering...",
  "photography...",
  "luxury decor...",
  "stage design...",
  "destination weddings...",
];

/* =========================
   CATEGORIES
========================= */

export const CATEGORIES = [
  {
    id: "discover",
    title: "Discover",
    icon: Compass,
    active: true,
  },

  {
    id: "catering",
    title: "Catering",
    icon: UtensilsCrossed,
  },

  {
    id: "media",
    title: "Media",
    icon: Camera,
  },

  {
    id: "decor",
    title: "Decor",
    icon: LampFloor,
  },

  {
    id: "stage",
    title: "Stage",
    icon: Tent,
  },
];

/* =========================
   POPULAR
========================= */

export const POPULAR_CARDS = [
  {
    id: "luxury-invitations",
    title1: "Luxury",
    title2: "Invitations",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "premium-catering",
    title1: "Premium",
    title2: "Catering",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "dream-venues",
    title1: "Dream",
    title2: "Venues",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "bridal-makeup",
    title1: "Bridal",
    title2: "Makeup",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "floral-decor",
    title1: "Floral",
    title2: "Decor",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   TODAY'S FOCUS
========================= */

export const TODAY_FOCUS = {
  tag: "TODAY’S FOCUS",

  title: "Golden sunsets. Soft waves. A wedding beside the sea.",

  subtitle:
    "Explore destination weddings beautifully crafted for unforgettable evenings.",

  image:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
};

/* =========================
   INSPIRED MOMENTS
========================= */

export const INSPIRED_MOMENTS = [
  {
    id: "temple",

    title:
      "Temple lamps. Morning chants. A timeless Kerala beginning.",

    tag: "Traditional",

    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "church",

    title:
      "White roses. Church bells. A quiet promise forever.",

    tag: "Elegant",

    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "beach",

    title:
      "Ocean breeze. Barefoot vows. A sunset beside the sea.",

    tag: "Beach Wedding",

    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: "muslim",

    title:
      "Golden lights. Warm gatherings. An evening filled with joy.",

    tag: "Reception",

    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",
  },
];

/* =========================
   QUICK ACCESS
========================= */

export const QUICK_ACCESS = [
  {
    id: "guests",
    title: "Guests",
    icon: Users,
  },

  {
    id: "budget",
    title: "Budget",
    icon: Wallet,
  },

  {
    id: "rsvp",
    title: "RSVP",
    icon: HeartHandshake,
  },

  {
    id: "qr",
    title: "QR Entry",
    icon: QrCode,
  },
];

/* =========================
   HOSPITALITY
========================= */

export const HOSPITALITY_SHORTCUTS = [
  {
    id: "navigation",
    title: "Navigation",
    icon: MapPinned,
  },

  {
    id: "guest-help",
    title: "Guest Help",
    icon: Users,
  },

  {
    id: "welcome",
    title: "Welcome Desk",
    icon: HeartHandshake,
  },
];