export interface NotificationMessage {

  id: number;

  name: string;

  role: string;

  message: string;

  time: string;

  unread: number;

  avatar?: string;

}

export interface NotificationUpdate {

  id: number;

  title: string;

  description: string;

  time: string;

}