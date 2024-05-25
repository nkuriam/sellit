import { Listing, ListingEditType } from "../models/listing";

enum routes {
  WELCOME = "WELCOME",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",

  LISTING = "LISTING",
  LISTING_DETAILS = "LISTING_DETAILS",
  LISTING_EDIT = "LISTING_EDIT",

  ACCOUNT = "ACCOUNT",
  MESSAGES = "MESSAGES",
  MY_LISTING = "MY_LISTING",
}

export type RootStackParamList = {
  WELCOME: undefined;
  LOGIN: undefined;
  REGISTER: undefined;
  LISTING: { sort: "latest" | "top" } | undefined;
  LISTING_DETAILS: Listing;
  LISTING_EDIT: { id?: number };
  ACCOUNT: undefined;
  MESSAGES: undefined;
  MY_LISTING: undefined;
};

export default routes;

// {
//   id: number;
//   images: Array<{ url: string; thumbnailUrl: string }>;
//   title: string;
//   price: string;
// };
