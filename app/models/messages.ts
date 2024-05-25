import { Listing } from "./listing";
import { User } from "./user";

export type MessageRegistration = { message: string; listingId: number };



export interface Message {
  fromUser: User,
  toUser: User,
  listing: Listing,
  content: string,
  id: number,
  dateTime: number,
}