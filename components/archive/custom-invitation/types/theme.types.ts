export interface InvitationThemeColors {

  primary: string;

  secondary: string;

  background: string;

  border: string;

  muted: string;
}

export interface InvitationThemeRadius {

  card: string;

  button: string;
}

export interface InvitationThemeShadow {

  primary: string;

  button: string;
}

export interface InvitationTheme {

  id: string;

  name: string;

  category: string;

  previewImage: string;

  colors: InvitationThemeColors;

  radius: InvitationThemeRadius;

  shadow: InvitationThemeShadow;

  fontClass?: string;
}