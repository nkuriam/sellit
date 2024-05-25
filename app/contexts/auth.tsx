import React from "react";
import { UserType } from "../models/user";

interface Props {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

const AuthContext = React.createContext<Props>({
  user: null,
  setUser: () => {},
});

export default AuthContext;
