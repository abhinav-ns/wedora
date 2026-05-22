export interface Message {

  id: number;

  sender: "user" | "vendor";

  text: string;

  time: string;

}