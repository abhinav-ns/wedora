import {
  House,

  ClipboardList,

  Search,

  User,
} from "lucide-react"

export const NAV_ITEMS = [

  {
    id: "home",

    label: "Home",

    icon: House,

    href: "/",

    active: false,
  },

  {
    id: "planning",

    label: "Planning",

    icon: ClipboardList,

    href: "/planning",

    active: true,
  },

  {
    id: "explore",

    label: "Explore",

    icon: Search,

    href: "/explore",

    active: false,
  },

  {
    id: "profile",

    label: "Profile",

    icon: User,

    href: "/profile",

    active: false,
  },

]