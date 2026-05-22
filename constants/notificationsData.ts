import {
  NotificationMessage,
  NotificationUpdate,
} from "@/components/notifications/types/notification";

/* =========================
   TABS
========================= */

export const NOTIFICATION_TABS = [
  "All",
  "Messages",
  "Updates",
];

/* =========================
   MESSAGE NOTIFICATIONS
========================= */

export const MESSAGE_NOTIFICATIONS: NotificationMessage[] = [

  {
    id: 1,

    name: "Rajesh Kumar",

    role: "Vendor",

    message:
      "Thanks for shortlisting us! Here’s the decor proposal as discussed.",

    time: "2m ago",

    unread: 2,

    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },

  {
    id: 2,

    name: "Meera Events",

    role: "Vendor",

    message:
      "We’re excited to be a part of your special day. Let us know your thoughts!",

    time: "15m ago",

    unread: 1,

    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },

  {
    id: 3,

    name: "Wedora Concierge",

    role: "Wedora",

    message:
      "We’ve found 3 new vendors matching your preferences.",

    time: "1h ago",

    unread: 0,

    avatar: "",
  },

];

/* =========================
   UPDATE NOTIFICATIONS
========================= */

export const UPDATE_NOTIFICATIONS: NotificationUpdate[] = [

  {
    id: 1,

    title: "Your site visit is tomorrow",

    description:
      "Don’t forget your appointment with Dream Decorators at 11:00 AM.",

    time: "3h ago",
  },

  {
    id: 2,

    title: "New vendor added",

    description:
      "The Floral House is now available in your shortlists.",

    time: "1d ago",
  },

];