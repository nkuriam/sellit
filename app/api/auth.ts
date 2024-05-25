import { LoginCredentialsType } from "../models/auth";
import client from "./client";

const login = (credentials: LoginCredentialsType) =>
  client.post("/auth", credentials);

export default {
  login,
};
