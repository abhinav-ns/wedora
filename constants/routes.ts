export const ROUTES = {
  root: "/",

  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    forgotPassword: "/auth/forgot-password",
    otpVerification: "/auth/otp-verification",
  },

  main: {
    home: "/main/home",
    homeSearch: "/main/home/search",
    planning: "/main/planning",
    create: "/main/create",
    explore: "/main/explore",
    profile: "/main/profile",
    profileSettings: "/main/profile/settings",
    notifications: "/main/notifications",
    messages: "/main/messages",
    messageDetail: (id: number | string) =>
      `/main/messages/${id}`,
    collections: "/main/collections",
  },

  public: {
    guests: "/public/guests",
    hospitality: "/public/hospitality",
    invitation: "/public/invitation",
    vendors: "/public/vendors",
  },

  resetSuccess: "/reset-success",
} as const;
