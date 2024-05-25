import { useContext } from "react";
import authStorage from "../utils/authStorage";
import jwtDecode from "jwt-decode";
import AuthContext from "../contexts/auth";
import { UserType } from "../models/user";

export interface AuthInterface {
  user: UserType | null;
  login(authToken: string): void;
  logout(): void;
}

const useAuth = (): AuthInterface => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const login = (authToken: string) => {
    setUser(jwtDecode(authToken));
    authStorage.storeToken(authToken);
  };

  return { user, logout, login };
};

export default useAuth;
