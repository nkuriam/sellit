import { UserRegistrationType } from "../models/user";
import client from "./client";

const register = (data: UserRegistrationType) => client.post("/users", data);

const registerPushToken = (pushToken: string) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
  registerPushToken,
};
