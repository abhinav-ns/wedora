export const CATEGORY_TABS = [
  "Discover",
  "Catering",
  "Media",
  "Decor",
  "Stage",
];

export const FILTERS = [
  "Luxury",
  "Traditional",
  "Budget Friendly",
  "Top Rated",
  "Verified",
  "Fast Response",
];

export const COLLECTIONS_DATA = {

  Catering: {

    title: "Catering",

    description:
      "Elegant catering teams and luxury wedding dining experiences curated beautifully for your celebration.",

    searchPlaceholder:
      "Search catering teams...",

    featured: {
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",

      title1: "Luxury Wedding",

      title2: "Dining",

      label: "Featured Collection",
    },

    prompt: {
      label: "Smart Suggestions",

      title:
        "What kind of dining experience are you planning?",

      options: [
        "Traditional Sadya",
        "Luxury Banquet",
        "Minimal Elegant",
        "Beach Dining",
      ],
    },

    vendors: [

      {
        id: 1,

        name: "Malabar Feast",

        description:
          "Traditional Kerala sadya experiences for elegant celebrations.",

        image:
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",

        tag: "Traditional",
      },

      {
        id: 2,

        name: "Golden Plate",

        description:
          "Luxury catering crafted for royal wedding evenings.",

        image:
          "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",

        tag: "Luxury",
      },

      {
        id: 3,

        name: "Coastal Flavours",

        description:
          "Seafood and sunset dining experiences beside the waves.",

        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",

        tag: "Beach",
      },

      {
        id: 4,

        name: "Ivory Banquets",

        description:
          "Minimal premium dining setups for intimate weddings.",

        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",

        tag: "Modern",
      },

      {
        id: 5,

        name: "Royal Sadhya Co.",

        description:
          "Authentic heritage catering with modern hospitality.",

        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",

        tag: "Heritage",
      },

    ],

  },

  Media: {

    title: "Media",

    description:
      "Photography and cinematic storytelling teams for unforgettable wedding memories.",

    searchPlaceholder:
      "Search photography teams...",

    featured: {
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",

      title1: "Cinematic Wedding",

      title2: "Stories",

      label: "Popular Media Team",
    },

    prompt: {
      label: "Creative Direction",

      title:
        "What style of wedding storytelling inspires you?",

      options: [
        "Cinematic",
        "Minimal",
        "Luxury Portraits",
        "Documentary",
      ],
    },

    vendors: [

      {
        id: 1,

        name: "FrameCraft Studio",

        description:
          "Luxury wedding cinematography crafted with emotional storytelling.",

        image:
          "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",

        tag: "Cinematic",
      },

      {
        id: 2,

        name: "Golden Reel",

        description:
          "Editorial wedding visuals inspired by timeless romance.",

        image:
          "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",

        tag: "Luxury",
      },

    ],

  },

  Decor: {

    title: "Decor",

    description:
      "Premium floral styling and elegant decor experiences for modern weddings.",

    searchPlaceholder:
      "Search decor teams...",

    featured: {
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",

      title1: "Elegant Wedding",

      title2: "Decor",

      label: "Luxury Styling",
    },

    prompt: {
      label: "Decor Inspiration",

      title:
        "Which wedding atmosphere are you dreaming about?",

      options: [
        "Royal",
        "Minimal",
        "Garden Wedding",
        "Modern Luxury",
      ],
    },

    vendors: [

      {
        id: 1,

        name: "Ivory Decor House",

        description:
          "Elegant floral installations and luxury wedding styling.",

        image:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",

        tag: "Luxury",
      },

      {
        id: 2,

        name: "BloomCraft",

        description:
          "Minimal modern decor experiences for intimate celebrations.",

        image:
          "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop",

        tag: "Modern",
      },

    ],

  },

  Stage: {

    title: "Stage",

    description:
      "Beautifully designed wedding stages and immersive celebration environments.",

    searchPlaceholder:
      "Search stage designers...",

    featured: {
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",

      title1: "Royal Wedding",

      title2: "Stages",

      label: "Trending Designs",
    },

    prompt: {
      label: "Stage Concepts",

      title:
        "What kind of stage experience fits your wedding vision?",

      options: [
        "Royal Palace",
        "Minimal White",
        "Traditional Temple",
        "Modern Floral",
      ],
    },

    vendors: [

      {
        id: 1,

        name: "Royal Stage Works",

        description:
          "Luxury wedding stages crafted with cinematic elegance.",

        image:
          "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",

        tag: "Royal",
      },

      {
        id: 2,

        name: "Velvet Structures",

        description:
          "Modern floral stage concepts for elegant celebrations.",

        image:
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",

        tag: "Modern",
      },

    ],

  },

};